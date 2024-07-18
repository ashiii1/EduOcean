import requests
import json

API_KEY_SECRET = "EduOceanp2p_default_secret"
# EduOcean_URL = "http://localhost:3000/api/v1/meeting"
EduOcean_URL = "https://p2p.EduOcean.com/api/v1/meeting"
# EduOcean_URL = "https://EduOcean.up.railway.app/api/v1/meeting"

headers = {
    "authorization": API_KEY_SECRET,
    "Content-Type": "application/json",
}

response = requests.post(
    EduOcean_URL,
    headers=headers
)

print("Status code:", response.status_code)
data = json.loads(response.text)
print("meeting:", data["meeting"])
