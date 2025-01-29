const AWS = require('aws-sdk');

// Configure AWS
AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRETACCESSKEY,
    region: 'us-east-1',
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export default async function handler(req, res) {
    if (req.method === 'POST') {

    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
