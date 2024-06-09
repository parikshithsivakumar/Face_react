from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
app = Flask(__name__)
CORS(app)
GOOGLE_API_KEY = 'AIzaSyDQf2iDdSoWmAvYS1A4bN5oEeuV2arsWYo'
genai.configure(api_key=GOOGLE_API_KEY)
model = genai.GenerativeModel('gemini-1.5-flash')

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    prompt = data.get('prompt', '')

    if not prompt:
        return jsonify({'error': 'No prompt provided'}), 400
    
    if ('Amrita' not in prompt and 'Vishwa' not in prompt and 'University' not in prompt and 'amrita' not in prompt and 'Admission' not in prompt and 'contact' not in prompt):
        return jsonify({'response': 'The question asked is irrelevant'}), 400


    # Generate content using the Generative AI model
    response = model.generate_content(prompt + " make it short as possible, don't exceed more than 1 line, Data should be only related to Amrita Vishwa")
    return jsonify({'response': response.text})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

