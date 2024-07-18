#!/bin/bash

API_KEY_SECRET="EduOceanp2p_default_secret"
EduOcean_URL="https://p2p.EduOcean.com/api/v1/meetings"
#EduOcean_URL="http://localhost:3000/api/v1/meetings"

curl $EduOcean_URL \
    --header "authorization: $API_KEY_SECRET" \
    --header "Content-Type: application/json" \
    --request GET
