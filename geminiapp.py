from google import genai
from google.genai import types
import json
from flask import Flask,request,jsonify
client = genai.Client(api_key ='UR API KEY HERE')
app = Flask(__name__)
@app.route('/upload', methods = ['POST'])
def fun():
  filed = request.files['file'].read()
  response = client.models.generate_content(
      model="gemini-2.0-flash",
      contents=["generate 5 quiz questions based on this text and return questions and 4 multiple choice as a json file with questions named question and options named options and the answer named answer", 
        types.Part.from_bytes(
        data=filed,
        mime_type='application/pdf',
      )]
  )
  text = response.text
  text = text[len("```json"):]
  text = text[:text.index("```")]
  data= json.loads(text)
  questions =[]
  options = []
  answer= []
  highlights=[]
  for i in data:
    response = client.models.generate_content(
        model="gemini-2.0-flash",
        contents=["can you return a sentence directly from this text that contains the answer to without any commentary" + i['question'],types.Part.from_bytes(
        data=filed,
        mime_type='application/pdf',
      )])
    questions.append(i['question'])
    options.append(i['options'])
    answer.append(i['answer'])
    highlights.append(response.text)

  return jsonify({'questions':questions, 'options':options, 'answer':answer, 'highlights':highlights})
