import os
import socket

# settings imports
from settings import app, api

# flask imports
from flask import jsonify, request, g


# restful plugin imports
from flask_restful import Resource

# Load env variables
from dotenv import load_dotenv


class Ejercicio1Resource(Resource):
    def get(self):
        try:
            socket.setdefaulttimeout(1)
            response = socket.gethostbyname('fakeserver.prueba.conatel.com.uy')
            if response == '1.2.3.4':
                return {'ejercicio1': 'OK'}
            else:
                return {'ejercicio1': 'Error'}, 400
        except:
            return {'ejercicio1': 'Error'}, 400


class Ejercicio2Resource(Resource):
    def get(self):
        from icmplib import ping
        if ping(os.environ.get('VYOS_IP'), count=1).is_alive:
            return {'ejercicio2': 'OK'}
        else:
            return {'ejercicio2': 'Error'}, 400


class Ejercicio3Resource(Resource):
    def get(self):
        import requests
        try:
            result = requests.get('http://172.20.0.3')
            if result.status_code == 200:
                return {'ejercicio3': 'OK'}
            else:
                return {'ejercicio3': 'Error'}, 400
        except:
            return {'ejercicio3': 'Error'}, 400


api.add_resource(Ejercicio1Resource, os.environ['EJERCICIO_1'])
api.add_resource(Ejercicio2Resource, os.environ['EJERCICIO_2'])
api.add_resource(Ejercicio3Resource, os.environ['EJERCICIO_3'])

if __name__ == "__main__":
    # As the app is running inside a container I need to publish using container IP address
    host_ip_address = socket.gethostbyname(socket.gethostname())
    app.run(host=host_ip_address, port=5000, debug=True)
