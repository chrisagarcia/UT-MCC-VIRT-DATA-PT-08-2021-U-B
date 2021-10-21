# Dependencies
from flask import Flask, render_template

# create instance of Flask app
app = Flask(__name__)


# Create route that renders index.html template
# and takes in the static string "Serving up cool text from the Flask server!"
@app.route("/")
def echo():
    return render_template("index.html", text="Serving up cool text from the Flask server!!")

@app.route("/<name>")
def say_hello(name):
    return render_template(
        "index.html",
        text="Serving up cool text from the Flask server!!",
        name=name)


if __name__ == "__main__":
    app.run(debug=True)
