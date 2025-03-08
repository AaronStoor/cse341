const fs = require('fs');
const path = require('path');

const getData = (req, res) => {
    const dataPath = path.join(__dirname, '../data/data.json');
    
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading data file' });
        }
        res.status(200).json(JSON.parse(data));
    });
};

module.exports = { getData };