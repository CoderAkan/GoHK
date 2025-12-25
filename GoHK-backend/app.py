from flask import Flask, jsonify
from flask_cors import CORS
from supabase import create_client, Client
from dotenv import load_dotenv
import os

# Load env variables
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Flask is running"

@app.route("/api/accommodations", methods=["GET"])
def get_accommodations():
    response = supabase.table("accommodations").select("*").execute()
    return jsonify(response.data)

if __name__ == "__main__":
    app.run(debug=True)
