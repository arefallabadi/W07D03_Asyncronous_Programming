//pulse Check
//Q1
const fs = require("fs");
const axios = require("axios");

//Q2

const readFile = () => {
    let content
    fs.readFile('./data.txt', (err, data) => {
        if (err) {
          console.log('ERR');
        }
        content = data.toString();
      });
      return content
  };

//Q3
  const writeFile = () => {
    fs.writeFile(
        './test.txt',
        `A new file has been created`
      ,
        (err) => {
          if (err) {
            console.log('ERROR');
          }
        }
      );
      };
      writeFile()

//Q4
  const getPost = (id) => {
      
  };
  

  const getPostAsync = (data) => {
    
  };

  //Prae