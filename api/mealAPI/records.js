const AWS = require('aws-sdk');

// Configure AWS
AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRETACCESSKEY,
    region: 'us-east-1',
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const params = {
            TableName: 'mealwastetracker',
            ScanIndexForward: false,
        };

        try {
            const data = await dynamoDB.scan(params).promise();
            res.status(200).send("hello from records");
        } catch (err) {
            console.error('Error fetching records:', err);
            res.status(500).json({ error: 'Failed to fetch records' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
