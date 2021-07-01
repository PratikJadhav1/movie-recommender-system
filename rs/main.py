from flask import Flask
from flask_restful import Api,Resource
from rsystem import return_r

app = Flask(__name__)
api = Api(app)
data = return_r()
print(data)
class Api(Resource):
    def get(self): 
        print(data)       
        return {"data": list(dict(data).keys())}

api.add_resource(Api, "/rmovies")

if __name__ == "__main__":
    app.run(debug=True)