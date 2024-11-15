import requests
import pandas as pd
url = "http://127.0.0.1:5000/predict_excel"
files = {'file': open('testdata.xlsx', 'rb')}

file = files['file']
df_input = pd.read_excel(file)
print(df_input.head())  # Confirm data read successfully

response = requests.post(url, files=files)

print(response.json())

