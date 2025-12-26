from flask import Flask, jsonify, request
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
# Hotel section
@app.route("/api/accommodations", methods=["GET"])
def get_accommodations():
    response = supabase.table("GoHK hotel table").select("*").execute()
    return jsonify(response.data)

@app.route("/api/accommodations/<id>", methods=["PUT"])
def update_accommodation(id):
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400

    response = supabase.table("GoHK hotel table") \
        .update(data) \
        .eq("id", id) \
        .execute()

    return jsonify(response.data)

@app.route("/api/accommodations/<id>", methods=["DELETE"])
def delete_accommodation(id):
    supabase.table("GoHK hotel table") \
        .delete() \
        .eq("id", id) \
        .execute()

    return jsonify({"status": "deleted"})

@app.route("/api/accommodations", methods=["POST"])
def create_accommodation():
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400
    response = supabase.table("GoHK hotel table") \
        .insert(data) \
        .execute()

    return jsonify(response.data), 201

#foods
@app.route("/api/food", methods=["GET"])
def get_foods():
    response = supabase.table("GoHK Food").select("*").execute()
    return jsonify(response.data)

@app.route("/api/food/<id>", methods=["PUT"])
def update_foods(id):
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400
    response = supabase.table("GoHK Food") \
        .update(data) \
        .eq("id", id) \
        .execute()

    return jsonify(response.data)

@app.route("/api/food/<id>", methods=["DELETE"])
def delete_foods(id):
    supabase.table("GoHK Food") \
        .delete() \
        .eq("id", id) \
        .execute()

    return jsonify({"status": "deleted"})

@app.route("/api/food", methods=["POST"])
def create_foods():
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400
    response = supabase.table("GoHK Food") \
        .insert(data) \
        .execute()

    return jsonify(response.data), 201

#Visit
@app.route("/api/visit", methods=["GET"])
def get_visit():
    response = supabase.table("Visit").select("*").execute()
    return jsonify(response.data)

@app.route("/api/visit/<id>", methods=["PUT"])
def update_visit(id):
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400
    response = supabase.table("Visit") \
        .update(data) \
        .eq("id", id) \
        .execute()

    return jsonify(response.data)

@app.route("/api/visit/<id>", methods=["DELETE"])
def delete_visit(id):
    supabase.table("Visit") \
        .delete() \
        .eq("id", id) \
        .execute()

    return jsonify({"status": "deleted"})

@app.route("/api/visit", methods=["POST"])
def create_visit():
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400
    response = supabase.table("Visit") \
        .insert(data) \
        .execute()

    return jsonify(response.data), 201


if __name__ == "__main__":
    app.run(debug=True)
