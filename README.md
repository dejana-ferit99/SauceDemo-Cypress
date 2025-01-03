# WEB SHOP TESTING PROJECT
This project is testing a demo web application using Cypress. Technologies used in this project are Visual Studio Code, Node.js, Cypress, JavaScript.
This app is testing functionalities of [Suce Demo page](https://www.saucedemo.com/) using Cypress.

### Installation:
Test cases can be found [here](https://docs.google.com/spreadsheets/d/1pKQlrYgRByaLDD304HjxAqlBHoRtjmvZrpMN0DMnrcA/edit?gid=0#gid=0)

#### Installation steps
To run this Cypress script, you need to install the following:
1. Download Node.js installer for your OS from [official page](https://nodejs.org/en/download/). Follow the steps and install node.js on your computer.
2. Open Terminal or Command Prompt and check Node installation with this command:
```
node -v
```
 
3. Download Visual Studio Code from [official page](https://code.visualstudio.com/download) and install VSC following the steps.
4. Download the link of this project to your computer and open it in VSC (more ways to do this step).
5. In command line run following command to install cypress
 ```
npm install cypress --save-dev
 ```

This will install Cypress locally as dev dependency for this project. To be sure that you have successfully installed cypress, open package.json file and search for the cypress version in devDependencies.
6. Open cypress using command
```
npx cypress open
```
This will open the project in a new window where you can open a specific test file.
 
7. Run cypress using command
 ```
npx cypress run
 ```
  
