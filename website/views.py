from flask import Blueprint, render_template
from flask_login import login_required, current_user

views = Blueprint('views', __name__)

@views.route('/')
@login_required #This will make sure that the user is logged in before accessing the home page
def home():
    return render_template("home.html", user=current_user)
