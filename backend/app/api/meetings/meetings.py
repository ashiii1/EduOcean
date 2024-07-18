# pip3 install requests
import requests
import json

API_KEY_SECRET = "EduOceanp2p_default_secret"
EduOcean_URL = "https://p2p.EduOcean.com/api/v1/meetings"
#EduOcean_URL = "http://localhost:3000/api/v1/meetings"

headers = {
    "authorization": API_KEY_SECRET,
    "Content-Type": "application/json",
}

response = requests.get(
    EduOcean_URL,
    headers=headers
)

print("Status code:", response.status_code)

if response.status_code == 200:
    data = response.json()
    pretty_printed_data = json.dumps(data, indent=4)
    print(data)
else:
    print("Failed to retrieve data. Error:", response.text)
