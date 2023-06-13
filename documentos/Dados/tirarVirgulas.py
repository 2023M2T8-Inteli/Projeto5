import pandas as pd

# Read the CSV file into a DataFrame
df = pd.read_csv('Choques_All_virgulas.csv')

# Specify the columns containing float values with commas
comma_columns = ['latitude_choque', 'longitude_choque', 'velocidade_choque', 'posicao_choque', 'forca_maxima_choque', 'ACT_choque', 'PEG_choque']

# Iterate through the specified columns and replace commas with decimal points
for col in comma_columns:
    df[col] = df[col].str.replace(',', '.')

# Convert the updated string values to float data type
df[comma_columns] = df[comma_columns].astype(float)

# Store the updated DataFrame back into the CSV file
df.to_csv('choques_all.csv', index=False)