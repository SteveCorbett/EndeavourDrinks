# EndeavourDrinksApp

This solution contains a demonstration of a imaginary shopping cart applicationwhich consists of the following Visual Studio projects:

 - DrinksDatabase is a MS-SQL project containing the schema, table definitions and stored procedures required for this application.
 - EndeavourDrinks is a C# API REST server for the application.
 - EndeavourDrinks.App is an Angular 16.1 browser application. This was developed using VS Code.
 - EndeavourDrinks.DAL is the C# 'data access layer' which provides the logic and interaction with the database for the REST server.
 - EndeavourModels contains the C# definitions of the tables and API data structures.

## System Requirements
 - An instance of MS-SQL server. This can be a local or a network server.
 - Visual Studio 2022.
 - Node.Js installed.
 - VS Code (Optional)
## Installation Instructions
- Open the solution using Visual Studio
- Publish the DrinksDatabase project using Visual Studio to you SQL server instance.
- Create sample customers and products by running the script `initialData.sql` against the database.
- Create an environmental variable, 'SQLCONNSTR_DrinksConnStr' with the connection string to this database. (This can be added into the Visual Studio debugging settings.) For example: `Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=EndeavourDrinks;Integrated Security=True;Connect Timeout=60;Encrypt=False`
- Run the API REST server application from within Visual Studio in debug mode. This will open a Swagger page in the browser. Test that the API server is running be executing the GetCustomer or GetProducts API.
- Navigate to the EndeavourDrinks.app folder from a command line (PowerShell), or optionally open with VS Code, then:
    - From the command line run the command `npm i` to install the Node packages
    - From the command line run the command `npm run start`

## To Do!
This is only a demonstration of what can be done in 3 days so there's plenty of scope for improvements, including:

- Other optional features of the specifications:
    - Deploying to a cloud provider with a CI/CD pipeline
    - A dashboard to monitor the application
    - Handle item and order discounts. (Some allowance for these are in the database design.)
- Auditing and logging features for both the client and server applications.
- Additional unit tests.
- Component and E2E tests.
- Internationalization.
- Obtaining end-point configurations programatically, for example, from environment variables a configuration file.
- Accessibility enhancements.
- Mobile and tablet responsive views.
- Implement authentication.
- Improved alert and error display.
- Ability to enter a quantity as a number, to order a dozen bottles of wine is not easy at the moment.
- Add a search/filter capability.
- Display products as cards, with an image.
- Ensure that deployment into Linux works.

