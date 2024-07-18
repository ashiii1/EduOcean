'use strict';

// npm i node-fetch

async function getMeeting() {
    try {
        // Use dynamic import with await
        const { default: fetch } = await import('node-fetch');

        const API_KEY_SECRET = 'EduOceanp2p_default_secret';
        // const EduOcean_URL = "http://localhost:3000/api/v1/meeting";
        const EduOcean_URL = 'https://p2p.EduOcean.com/api/v1/meeting';
        // const EduOcean_URL = "https://EduOcean.up.railway.app/api/v1/meeting";

        const response = await fetch(EduOcean_URL, {
            method: 'POST',
            headers: {
                authorization: API_KEY_SECRET,
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        if (data.error) {
            console.log('Error:', data.error);
        } else {
            console.log('meeting:', data.meeting);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getMeeting();
