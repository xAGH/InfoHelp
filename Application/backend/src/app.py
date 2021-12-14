from flask import Flask
from src.routes import routes
from os import getenv

class Aplication():

    @classmethod
    def create_app(cls):
        cls.app = Flask(__name__)
        cls.__settings()
        cls.__register_routes()
        return cls.app

    @classmethod
    def __settings(cls):
        cls.secret = getenv("SECRET_KEY")

    @classmethod
    def __register_routes(cls):
        ...