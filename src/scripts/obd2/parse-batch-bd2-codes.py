import pandas as pd   
import json
import os

# Define paths to the input JSONL files for batch requests and results
og_codes = os.path.join(os.path.dirname(__file__), 'obd2.json')
batch_result_file = os.path.join(os.path.dirname(__file__), 'batch_results_v2.jsonl')

# Load the JSONL files into Pandas DataFrames
# `lines=True` ensures that each line in the file is treated as a separate JSON object
og_codes_json = json.load(open(og_codes, 'r'))
batch_result_json = pd.read_json(path_or_buf=batch_result_file, lines=True)

# Initialize an empty list to store the processed OBD2 code objects
output_json_list = []

# Define the output file path where the processed data will be saved
output_file = os.path.join(os.path.dirname(__file__), "obd2_codes.json")

# Iterate over the rows of the batch_result_json DataFrame
for i, result in enumerate(batch_result_json.iterrows()):

    # Unpack the tuple returned by iterrows() into the index and the row data from the DataFrame, we only need the row data.
    index, result_row = result

    # Extract the 'Description' content from the 'content' field of the result
    result_content = result_row["response"]["body"]["choices"][0]["message"]["content"]

    # Create a new object combining the request and result data
    updated_code_obj = {
        'id': og_codes_json[i]['id'],  # Unique identifier for the OBD2 code
        'title': og_codes_json[i]['value'],  # Title or name of the OBD2 code
        'description': result_content  # Detailed description or fix for the OBD2 code
    }

    # Append the processed object to the output list
    output_json_list.append(updated_code_obj)

# Write the processed list of OBD2 codes to the output file in JSON format
with open(output_file, "w") as f:
    f.write(json.dumps(output_json_list, indent=4))  # Use indentation for better readability

# Print a success message indicating the output file location
print(f"Parsing JSONL result file {batch_result_file} parsed successfully to {output_file}.")