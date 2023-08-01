# EndeavourDrinksApp

This solution contains a demonstration of a imaginary shopping cart applicationwhich consists of the following Visual Studio projects:

 - DrinksDatabase is a MS-SQL project containing the schema, table definitions and stored procedures required for this application.
 - EndeavourDrinks is a C# API REST server for the application.
 - EndeavourDrinks.App is an Angular 16.1 browser application
 - EndeavourDrinks.DAL is the C# 'data access layer' which provides the logic and interaction with the database for the REST server.
 - EndeavourModels contains the C# definitions of the tables and API data structures.

## System Requirements
 - An instance of MS-SQL server. This can be a local or a network server.
 - Visual Studio 2022. 
 - VS Code
## Installation Instructions
- Open the solution using Visual Studio
- Publish the DrinksDatabase project using Visual Studio to you SQL server instance.
- Create one or more customers and products. (Sorry, I will provide a script for this later. I'm in Canberra and my battery is about to run out...)
- Create an environmental variable, 'SQLCONNSTR_DrinksConnStr' with the connection string to this database.
- Run the API REST server application.
- Open the EndeavourDrinks.app folder using VS Code. 
    - From the command line run the command `npm i` to install the Node packages
    - From the command line run the command `npm run start`


