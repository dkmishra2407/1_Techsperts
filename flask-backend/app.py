from flask import Flask, request, jsonify
import pandas as pd
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.ensemble import RandomForestClassifier
import numpy as np
from flask_cors import CORS
import shap

# Initialize the Flask app
app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Load the dataset
try:
    df = pd.read_csv('loan_approval_dataset.csv')
    df.columns = df.columns.str.strip()
except FileNotFoundError:
    raise Exception("The dataset 'loan_approval_dataset.csv' is not found.")

# Encode categorical features
label_encoders = {}
categorical_features = ['education', 'self_employed', 'loan_status']

for column in categorical_features:
    le = LabelEncoder()
    df[column] = le.fit_transform(df[column])
    label_encoders[column] = le

# Prepare data for training
X = df.drop(columns=['loan_id', 'loan_status'], errors='ignore')
y = df['loan_status']

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Train the Random Forest model
rf_model = RandomForestClassifier(random_state=42)
rf_model.fit(X_scaled, y)

# Create a SHAP explainer
explainer = shap.TreeExplainer(rf_model)

# Required fields for input
required_fields = [
    'no_of_dependents', 'education', 'self_employed',
    'income_annum', 'loan_amount', 'loan_term',
    'cibil_score', 'residential_assets_value',
    'commercial_assets_value', 'luxury_assets_value',
    'bank_asset_value'
]

@app.route('/predict', methods=['POST'])
def predict():
    # Validate JSON input
    if not request.is_json:
        return jsonify({'error': 'Invalid content type. JSON expected.'}), 400
    
    input_data = request.json

    # Validate input fields
    missing_fields = [field for field in required_fields if field not in input_data]
    if missing_fields:
        return jsonify({'error': f'Missing required fields: {", ".join(missing_fields)}'}), 400

    try:
        # Extract and transform features
        features = np.array([float(input_data[field]) for field in required_fields])
        features_scaled = scaler.transform([features])

        # Make prediction
        prediction = rf_model.predict(features_scaled)
        prediction_label = label_encoders['loan_status'].inverse_transform(prediction)

        # Compute SHAP values
        shap_values = explainer.shap_values(features_scaled)
        
        # Ensure that the correct index is selected for SHAP values
        predicted_class_index = prediction[0]  # This is the predicted class index (0 or 1 for loan_status)

        # SHAP values for the predicted class
        shap_summary = dict(zip(X.columns, shap_values[predicted_class_index][0]))

        # Construct reasons summary
        reasons_summary = {
            feature: f"The feature '{feature}' {'increases' if value > 0 else 'decreases'} the likelihood of approval by {abs(value):.4f}"
            for feature, value in shap_summary.items()
        }

        # Return response
        return jsonify({
            'loan_status': prediction_label[0],
            'reasons_summary': reasons_summary
        })

    except Exception as e:
        return jsonify({'error': f'Error processing input: {str(e)}'}), 500



@app.route('/predict_excel', methods=['POST'])
def predict_excel():
    # Check if a file is provided
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    # Read the uploaded Excel file
    file = request.files['file']
    try:
        df_input = pd.read_excel(file)
    except Exception:
        return jsonify({'error': 'Invalid file format'}), 400

    # Validate input file columns
    missing_columns = [field for field in required_fields if field not in df_input.columns]
    if missing_columns:
        return jsonify({'error': f'Missing required columns: {", ".join(missing_columns)}'}), 400

    predictions = []

    for index, row in df_input.iterrows():
        try:
            # Extract features and transform
            features = np.array([row[field] for field in required_fields])
            features_scaled = scaler.transform([features])

            # Make prediction
            prediction = rf_model.predict(features_scaled)
            prediction_label = label_encoders['loan_status'].inverse_transform(prediction)

            # Compute SHAP values
            shap_values = explainer.shap_values(features_scaled)
            predicted_class_index = prediction[0]
            shap_summary = dict(zip(X.columns, shap_values[predicted_class_index][0]))

            # Construct reasons summary
            reasons_summary = {
                feature: f"The feature '{feature}' {'increases' if value > 0 else 'decreases'} the likelihood of approval by {abs(value):.4f}"
                for feature, value in shap_summary.items()
            }

            # Append prediction result
            predictions.append({
                'row_index': index + 1,
                'loan_status': prediction_label[0],
                'reasons_summary': reasons_summary
            })
        except Exception as e:
            predictions.append({
                'row_index': index + 1,
                'error': f'Error processing row: {str(e)}'
            })

    return jsonify({'predictions': predictions})


if __name__ == '__main__':
    app.run(debug=True)
