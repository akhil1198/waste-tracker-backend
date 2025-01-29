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
        const { id, mealType, quantity, date } = req.body.data;

        if (!mealType || !quantity || !date) {
            res.status(400).json({ error: 'All fields are required!' });
            return;
        }

        const data = {
            mealType,
            quantity,
            date,
            id,
        };

        const params = {
            TableName: 'mealwastetracker',
            Item: data,
        };

        try {
            await dynamoDB.put(params).promise();
            console.log('Data inserted in DynamoDB', data);
            res.status(200).json({ message: 'Data inserted successfully', data: params.Item });
        } catch (error) {
            console.error('Error updating DynamoDB:', error);
            res.status(500).json({ error: 'Failed to insert data' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
