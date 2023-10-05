# SEMS
SEMS is an acronym for Ship Equipment Management System. It is a web application developed using MERN stack for the management of electrical equipment onboard.  In 2019, SEMS was one of the Master's Degree projects conducted at the Romanian-American University.




## Objectives

- [ ]Showcase the SEMS
- [ ]Reproduct the SEMS 


### Showcasing the features of SEMS 
 ![image](https://github.com/Awa91/SEMS/blob/main/images/list-page.png)
   #### A page displaying the list of bridge equipment
 ![image](https://github.com/Awa91/SEMS/blob/main/images/add-page.png)
   #### The add page
 ![image](https://github.com/Awa91/SEMS/blob/main/images/update-page.png)
   #### The update page
 ![image](https://github.com/Awa91/SEMS/blob/main/images/home-page.png)
   #### The landing page





## Steps to reproduct the app

1. Download or clone this repository.



2. Setting up a server with Express.js and Node.js.
    ### under the project main folder, change to the server folder:
    ### cd server
    ### npm install

3. Setting up a database with MongoDB:
   -For simplicity, we will use [MongoDB Atlas].First, create an account (https://www.mongodb.com/atlas/database). 
   -After creating an account, Click the Project 0 section (top left), and you will see a button for Creating a New Project.       Create a project and select the project. 
   -Now, click the Build a Cluster button from the project you have created. It will show you all the information.
   -At the bottom, you will see a section called Cluster Name, click that and enter a name for the database, then hit the           Create Cluster button.
   -Click the CONNECT button and fill in the username and password form for your database:


4. Setting Up Our MongoDB Connection:
   -Now, select the Create MongoDB User button. You can also choose either your current IP address or a different IP address; 
   -it’s up to you. Now, if you follow the CONNECT button or the Choose a connection method button, you will see some different    methods. Select accordingly:
   -In this case, select the Connect Your Application section. Now, you will get your database link, which we will use in our       next step:
   


5. Adding the database to our project:
   -Our database is ready, and we need to add it to our project. Inside the project folder, create another folder named config and create two files named default.json and db.js.

   -Add the following code:

    ```
	// default.json

	{
  	"mongoURI":"mongodb+srv://mern123:<password>@mernatoz-9kdpd.mongodb.net/test?retryWrites=true&w=majority"}
	 /* Replace <password> with your database password */
	// db.js

	const mongoose = require('mongoose');
	const config = require('config');
	const db = config.get('mongoURI');

	const connectDB = async () => {
  	try {
 	   mongoose.set('strictQuery', true);
 	   await mongoose.connect(db, {
    	  useNewUrlParser: true,
  	  });

  	  console.log('MongoDB is Connected...');
 	 } catch (err) {
	    console.error(err.message);
  	  process.exit(1);
 	 }
	};

	module.exports = connectDB;

    ```

    -We need a little change in our app.js file to connect to the database. Update your app.js with this:

	// app.js

    ```	const express = require('express');
	const connectDB = require('./config/db');

	const app = express();

	// Connect Database
	connectDB();

	app.get('/', (req, res) => res.send('Hello world!'));

	const port = process.env.PORT || 8082;
   ```

	app.listen(port, () => console.log(`Server running on port ${port}`));
	Now, you can run the project using the $ npm run app command. 
	
    ### npm run app



6.  Setting up a client with React js
    ### under the project main folder, change to the client folder:
    ### cd client
    ### npm install
    
7.  Starting the server 
    ### under the project main folder, change to the server folder:
    ### cd server 
    ### npm run app

8. Running the client:
    ### under the project main folder, change to the client folder:
    ### cd client
    If you’re using Yarn, enter $ ###yarn start. If you’re using npm use $ ###npm start.


