const express=require('express');
const app=express();
app.use(express.urlencoded({ extended: true }));

const currentDir = process.cwd();

const inquirer = require("inquirer");