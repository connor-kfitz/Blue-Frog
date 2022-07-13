# NoSql: Social Network API

## Links
1.  https://drive.google.com/file/d/1unRyoye-h-GPUp39SwzjQye4AJpHSFGl/view
2.  https://drive.google.com/file/d/1RHpEWZdDPhLbLxqtuvWf0jR2KPRh6Ptj/view

## Description

The goal of this project is to develop an API for a social network application using a NoSql database.  The social network application will feature three main models being user, thoughts, and reactions.  The user model will represent the networks users, thoughts will act as main posts by each user, and reactions will be other user's responses to a thought.  The NoSql database utilized to create these models and their requests is mongoDb, paired with the mongoose npm package.  Insomnia was also used to verify each CRUD route was working as intended.  

## Steps Taken

1.  Created a MVC folder and file structure, included and installed all required npm packages

2.  Set up server file along with routes to other files and folders (connection, models, controllers)

3.  Set up connection to mongo in config/connection

4.  Created models for the user, thought, and reaction in models

5.  Created controllers for each CRUD operation in the respective user or thought js files

6.  Set up routes for each controller in the respective routes folder

7.  Utilized dayJs to create getters and format created dates for the thought and reaction models
