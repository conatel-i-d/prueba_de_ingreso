import os
from flask import Flask, g
from flask_cors import CORS
# Restful plugin imports
from flask_restful import Api
# Library to load env variables
from dotenv import load_dotenv

# --- Load env variables ---
load_dotenv()

# --- Create App and enable CORS ---
app = Flask(__name__)
CORS(app)

# --- Configure flask app ---
app.config['ENV'] = 'development'
#app.config['PRESERVE_CONTEXT_ON_EXCEPTION'] = True

# --- Restful plugin initialization ---
api = Api(app)
