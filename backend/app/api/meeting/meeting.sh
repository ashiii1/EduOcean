#!/bin/bash

API_KEY_SECRET="EduOceanp2p_default_secret"
# EduOcean_URL="http://localhost:3000/api/v1/meeting"
EduOcean_URL="https://p2p.EduOcean.com/api/v1/meeting"
# EduOcean_URL="https://EduOcean.up.railway.app/api/v1/meeting"

curl $EduOcean_URL \
    --header "authorization: $API_KEY_SECRET" \
    --header "Content-Type: application/json" \
    --request POST