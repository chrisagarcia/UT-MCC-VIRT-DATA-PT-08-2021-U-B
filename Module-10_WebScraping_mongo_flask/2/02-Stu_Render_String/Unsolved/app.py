# import necessary libraries
from flask import Flask, app, render_template
import flask

# @TODO: Initialize your Flask app here
app = Flask(__name__)

# @TODO:  Create a route and view function that takes in a string and renders index.html template
@app.route("/")
def main():
    return render_template("index.html", text="Hello World!")

if __name__ == "__main__":
    app.run(debug=True)
