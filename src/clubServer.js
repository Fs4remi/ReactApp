const express = require('express');
const server = express();

const bodyParser = require('body-parser')
const activities = require('./public/eventData.json');
const members = require('./public/clubUsersHash.json');

server.use(express.static('public'));
server.use(bodyParser.json());

server.post('/login', (req, res)=>{
    const {email,password} = req.body;
    const isUser = members.find(user => user.email === email && user.password === password);
    if(isUser){
        delete isUser.password;
        res.json(isUser);    
    }
    res.json({"statusCode": 401,"error": true, "message": "User/Password error" });
});

server.get('/activities', (req,res) => {
    res.json(activities);
});

server.post('/activities', (req, res) => {
    activities.push(req.body);
    res.json(activities);
});

server.get('/members', (req, res) => {
    res.json(members);
});

const port = "3000";
server.listen(port, () => {
    console.log(`Listening on ${port}`);
});

