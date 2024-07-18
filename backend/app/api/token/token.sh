#!/bin/bash

API_KEY_SECRET="EduOceanp2p_default_secret"
EduOcean_URL="https://p2p.EduOcean.com/api/v1/token"
#EduOcean_URL="http://localhost:3000/api/v1/token"

curl $EduOcean_URL \
    --header "authorization: $API_KEY_SECRET" \
    --header "Content-Type: application/json" \
    --data '{"username":"username","password":"password","presenter":"true", "expire":"1h"}' \
    --request POST