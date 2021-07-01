from flask import Flask
from flask_restful import Api,Resource,request
from rsystem import return_r

app = Flask(__name__)
api = Api(app)
class Api(Resource):
    def get(self): 
        arg = request.args.get("name")
        print(arg, "arg----------------")
        data = return_r(movies=arg)
        print(data, "data----------------")       
        return {"data": list(dict(data).keys())}

api.add_resource(Api, "/rmovies")

if __name__ == "__main__":
    app.run(debug=True)