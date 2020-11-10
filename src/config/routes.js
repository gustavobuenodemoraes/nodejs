const express = require('express');
const route  = require('./server');

module.exports = function (server) {
    //API Routes
    const router = express.Router();
    server.use('/api', router);

    //TODO Routes
    const todoService = require('../api/todo/todoServices');
    todoService.register(router, '/todos');
}