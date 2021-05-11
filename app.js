//pulse Check
//Q1
const fs = require("fs");
const axios = require("axios");
const express = require("express")
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
        './text.txt',
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
        axios
          .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((response) => {
            console.log('DATA:', response.data);
            res.json(response.data);
          })
          .catch((error) => {
            console.log('ERR:', error);
          });
  };
  

  const getPostAsync = (data) => {
    app.get('/async', async (req, res) => {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts/1'
        );
        res.json(response.data)
      });
  };

  //Practice 
  //Q1
  const appendToFile = (data) => {
    // TODO: Your code here
  };