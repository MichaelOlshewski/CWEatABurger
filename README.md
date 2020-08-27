
# __*Eat Da Burger!*__ ![GitHub](https://img.shields.io/github/license/MichaelOlshewski/CWEatABurger)

![index.handlebars](img/indexPicture.png)

## __Description__
Eat Da Burger! is a resturant application that stores a list of delicious sandwiches that their customers should try. Start off by adding a cheeseburger, hamburger or any other type of sandwich and you can choose to either save it for later, or devour it now!

<hr>

## __Installation__
First you need to clone the repository by running `git clone git@github.com:MichaelOlshewski/CWEatABurger.git` in your terminal or bash. After you have successfully cloned the repository, open the main folder in terminal or bash, if your on windows, run `npm i` or `npm install`, if your on a mac, then run `sudo npm i` or `sudo npm install`

<hr>

## __How To Use__
Once you have installed all required packages using the previous steps, then you can run either `npm start` to get the web server running and view the webpage, or you can run `npm run dev` to get the development server running that utilizes `nodemon` to restart the server on file change. Please note that you will need to have a MySQL server running prior to starting the server. You can use the `schema.sql` and `seeds.sql` inside of `/db` to set up the database, tables, and columns up prior to running the application. After setting up your MySQL database and installing all required dependencies, you will also need to create a `.env` file in the applications main directory and set the following variables inside of that file (if you are running a local MySQL server and you use the schema.sql and seeds.sql, you can leave most settings alone, just put your username and password in):

```
HOST=localhost
PORT=3306
USER=CHANGEME
PASS=CHANGEME
DATABASE=burgers_db
```

<hr>

### __Link To Website__
https://cweat-a-burger.herokuapp.com

<hr>

### __License__ MIT

<hr>

### __How To Contribute__
Open a pull request with the feature or the contribution that you would like to add or modify/fix, and i'll integrate it!

<hr>

### __How To Run Tests__
No tests have been developed for this application.

<hr>

#### __Other Questions__
Find my other projects at https://github.com/MichaelOlshewski/ <br>
For other questions, information on projects or if you want to collaborate on a project, please email me at contact@michael-olshewski.com

###### This ReadMe was created with the Read Me Generator from https://github.com/MichaelOlshewski/CWReadMeGenerator
  