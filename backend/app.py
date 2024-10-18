from flask import Flask, request, jsonify
import pandas as pd
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.ensemble import RandomForestClassifier
import numpy as np
from flask_cors import CORS, cross_origin

# Initialize the Flask app
app = Flask(__name__)

# Enable CORS for all routes or specify origins as needed
CORS(app)  # This allows all origins; you can also specify like CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Load the dataset and train the model
df = pd.read_csv('loan_approval_dataset.csv')
df.columns = df.columns.str.strip()

# Encode categorical features
label_encoders = {}
for column in ['education', 'self_employed', 'loan_status']:
    le = LabelEncoder()
    df[column] = le.fit_transform(df[column])
    label_encoders[column] = le

# Prepare data for training
X = df.drop(columns=['loan_id', 'loan_status'])
y = df['loan_status']
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Train Random Forest model
rf_model = RandomForestClassifier(random_state=42)
rf_model.fit(X_scaled, y)

@app.route('/predict', methods=['POST'])
@cross_origin(origins="http://localhost:3000")  # Allow this route to be accessed from localhost:3000
def predict():
    data = request.json
    print(data)
    # Ensure that all required fields are present in the input data
    required_fields = ['no_of_dependents', 'education', 'self_employed', 
                       'income_annum', 'loan_amount', 'loan_term', 
                       'cibil_score', 'residential_assets_value', 
                       'commercial_assets_value', 
                       'luxury_assets_value', 'bank_asset_value']
    
    if not all(field in data for field in required_fields):
        return jsonify({'error': 'Missing fields in request'}), 400

    features = np.array([data['no_of_dependents'], data['education'], 
                         data['self_employed'], data['income_annum'],
                         data['loan_amount'], data['loan_term'], 
                         data['cibil_score'], data['residential_assets_value'], 
                         data['commercial_assets_value'], 
                         data['luxury_assets_value'], data['bank_asset_value']])
    
    # Scale the features
    features_scaled = scaler.transform([features])
    
    # Make a prediction using the trained model
    prediction = rf_model.predict(features_scaled)
    
    # Inverse transform to get original label
    prediction_label = label_encoders['loan_status'].inverse_transform(prediction)

    return jsonify({'loan_status': prediction_label[0]})

if __name__ == '__main__':
    app.run(debug=True)


