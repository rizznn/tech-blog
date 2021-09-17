# tech-blog
This is a CMS-style blog site where developers can publish their blog posts and comment on other developers' posts as well. This app follows the Model-View-Controller (MVC) paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Technologies
This website is created with Visual Studio Code using node.js, handlebars, Sequelize -ORM, and express-session npm package for authentication. Project repo created here in Github. Deployed application to Heroku.

## Installation
* Run the app using the [Heroku link](https://tech-blog-app-mvc.herokuapp.com/)


OR


* by cloning the repo:
1. Make sure you have node.js installed on your system (if you have node.js, you have npm as well)
2. Navigate to the directory where you want the repository to be cloned in your terminal.
3. Clone the repository: in your terminal, `git clone https://github.com/rizznn/tech-blog.git`for https OR `git clone git@github.com:rizznn/tech-blog.git` for ssh
4. Navigate to the directory of the cloned repository in your terminal.Make sure you have MySQL installed on your system
5. Go to MySQL shell by typing  `mysql -u root -p` 
6. A password will be asked to login to MySQL shell

      NOTE:     Some system might get the error message "Command not found", add the following line of code to your `.bash_profile` file (or if you’re using ZSH,                         add it to your `.zshrc` file):

          export PATH="${PATH}:/usr/local/mysql/bin/"

7. In MySQL shell, type  `source db/schema.sql;`  to run the file
8. In your terminal: `npm install` to install the npm modules
9. Then run the app: `npm start`
10. Navigate to this link: http://localhost:3001/

## Usage
_If the app was cloned_, in your terminal, navigate to your project directory and run `npm start` and then navigate to this link: http://localhost:3001/ OR use the [Heroku link](https://tech-blog-app-mvc.herokuapp.com/)
* User will be able to add notes by providing note's title and description (text)
* User will also be able to save (even when the user refresh the page) and delete notes

## Screenshots
![image](https://user-images.githubusercontent.com/80712058/133734054-147f44ba-d3f1-4d0f-9a26-0162998d6c52.png)
![image](https://user-images.githubusercontent.com/80712058/133734291-37503e48-e041-4fe0-bff3-2a9f7e7843f6.png)
![image](https://user-images.githubusercontent.com/80712058/133734888-efd73c15-e1c1-41c4-a3b7-6c3568c867a3.png)
![image](https://user-images.githubusercontent.com/80712058/133735048-81083749-cd8b-4a92-bd62-6f304d57460e.png)
![image](https://user-images.githubusercontent.com/80712058/133735121-db5aa562-0261-4888-b69b-51d0182bee33.png)
![image](https://user-images.githubusercontent.com/80712058/133735748-3936891d-5d17-401b-bbe3-1dbb1a859571.png)

## Contributing
Contact me or create an issue or pull request

## Questions
  To reach me for additional questions:

  Github username: rizznn 

  Github link: [https://github.com/rizznn](https://github.com/rizznn) 

  Email me at [rizzel_nolasco17@yahoo.com](mailto:rizzel_nolasco17@yahoo.com)

## Link to application repo
https://github.com/rizznn/tech-blog

## Link to deployed Heroku app
https://tech-blog-app-mvc.herokuapp.com/
