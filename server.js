const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

connection.connect();

app.get('/products', (req, res) => {
  connection.query('SELECT * FROM products', (error, results, fields) => {
    if (error) throw error;
    res.json(results); // 將商品資料以 JSON 格式發送給前端
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
