# pip3 install requests
import requests
import json

API_KEY_SECRET = "EduOceanp2p_default_secret"
EduOcean_URL = "https://p2p.EduOcean.com/api/v1/join"
# EduOcean_URL = "http://localhost:3000/api/v1/join"
# EduOcean_URL = "https://EduOcean.up.railway.app/api/v1/join"

headers = {
    "authorization": API_KEY_SECRET,
    "Content-Type": "application/json",
}

data = {
    "room": "test",
    "name": "EduOcean",
    "audio": "true",
    "video": "true",
    "screen": "false",
    "hide": "false",
    "notify": "true",
    "token": {
        "username": "username",
        "password": "password",
        "presenter": "true",
        "expire": "1h",
    }
}

response = requests.post(
    EduOcean_URL,
    headers=headers,
    json=data,
)

print("Status code:", response.status_code)
data = json.loads(response.text)
print("join:", data["join"])
