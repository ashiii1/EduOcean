<?php

$API_KEY_SECRET = "EduOceanp2p_default_secret";
$EduOcean_URL = "https://p2p.EduOcean.com/api/v1/join";
// $EduOcean_URL = "http://localhost:3000/api/v1/join";
// $EduOcean_URL = "https://EduOcean.up.railway.app/api/v1/join";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $EduOcean_URL);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);

$headers = [
    'authorization:' . $API_KEY_SECRET,
    'Content-Type: application/json'
];

curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$data = array(
    "room"          => "test",
    "name"          => "EduOcean",
    "audio"         => true,
    "video"         => true,
    "screen"        => false,
    "hide"          => false,
    "notify"        => true,
    "token"         => array(
        "username"      => "username",
        "password"      => "password",
        "presenter"     => true,
        "expire"        => "1h",
    ),
);
$data_string = json_encode($data);

curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
$response = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

echo "Status code: $httpcode \n";
$data = json_decode($response);
echo "join: ", $data->{'join'}, "\n";
