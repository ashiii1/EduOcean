# pip3 install requests
# rename token.py in get_token.py

import requests
import json

API_KEY_SECRET = "EduOceanp2p_default_secret"
EduOcean_URL = "https://p2p.EduOcean.com/api/v1/token"
#EduOcean_URL = "http://localhost:3000/api/v1/token"

headers = {
    "authorization": API_KEY_SECRET,
    "Content-Type": "application/json",
}

data = {
    "username": "username",
    "password": "password",
    "presenter": "true",
    "expire": "1h"
}

response = requests.post(
    EduOcean_URL, 
    headers=headers, 
    json=data
)

print("Status code:", response.status_code)
data = json.loads(response.text)
print("token:", data["token"])
