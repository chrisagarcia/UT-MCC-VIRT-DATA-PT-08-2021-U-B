# import necessary libraries
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/cat")
def cat():
    return render_template("dict.html", my_cat={
        "name": "Misses Hisses",
        "breed": "Himilayan",
        "age": 9
    })

@app.route("/dogs")
def dogs():
    dogs_list = [
        {
        "name": "Suki",
        "breed": "Shihpoo",
        "age": 2
        },
        {
        "name": "XiuXiu",
        "breed": "Bichon Shih",
        "age": 13
        },
    ]

    return render_template("list.html", my_dogs=dogs_list)

# @TODO:  Create a route and view function that takes in a dictionary and renders index.html template
# CODE GOES HERE

if __name__ == "__main__":
    app.run(debug=True)
