//Add Packages
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

//Connect to mysql
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

//Create error function in the event sql doesnt connect
connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id" + connection.threadId);
});

//Create function to display products in node
//Create function to purchase products and prompt user
//Create function to act as a receipt