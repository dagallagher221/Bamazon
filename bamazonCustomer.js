//Add Packages
var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

//Connect to mysql
var connection = mysql.createConnection({
    host: "192.168.99.100",
    port: 3306,
    user: "root",
    password: "docker",
    database: "bamazon"
});

//Create error function in the event sql doesnt connect
connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id" + connection.threadId);
});

//Create function to display products in node

var displayProducts = function() {
    var query = "Select * FROM products";
    connection.query(query, function(err, res) {
        if(err) throw err;
        var displayTable = new Table ({
            head: ["Item ID", "Product Name", "Category", "Price", "Quantity"],
            colWidths: [10, 25, 25, 10, 14]
        });
        for (var i = 0; i < res.length; i++) {
            displayTable.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            );
        }
        console.log(displayTable.toString());
        purchasePrompt();
    })
}
//Create function to purchase products and prompt user

function purchasePrompt() {
    inquirer.prompt([
        {
                name: "ID",
                type: "input",
                message: "Please enter Item ID you like to purchase.",
                filter:Number
        },
        {
                name: "Quantity",
                type: "input",
                message: "How many items do you wish to purchase?",
                filter:Number
        },
    
    ]).then(function(answers){
        var quantityNeeded = answers.Quantity;
        var IDrequested = answers.ID;
        purchaseOrder(IDrequested, quantityNeeded);
    });
};
//Create function to act as a receipt

function purchaseOrder(ID, amtNeeded) {
    connection.query('Select * FROM products WHERE item_id = ' + ID, function(err,res) {
        if(err){console.log(err)};
        if(amtNeeded <= res[0].stock_quantity) {
            var totalCost = res[0].price * amtNeeded;
            console.log("Your Game is in stock");
            console.log(res[0].product_name + "    X     " + amtNeeded);
            console.log("Total            " + totalCost);
            connection.query("UPDATE products SET stock_quantity = stock_quantity - " + amtNeeded + " WHERE item_id = " + ID + ";");
        } else{
            console.log("Sorry, Your Game " + res[0].product_name + " is in another Castle!");
            console.log("Come back soon, our stock is constantly updating!")
        };
        displayProducts();
    });
};

displayProducts();