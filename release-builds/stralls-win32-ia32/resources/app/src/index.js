const axios = require('axios');
let callResponse;
let urlCall;

document.getElementById("send").addEventListener("click", function(){
  urlCall = document.getElementById("input").value;
    if (urlCall !== '') {
      axios.get(urlCall).then(function (response) {
          callResponse = response;
          responseClear = JSON.stringify(callResponse);
          document.getElementById("response").innerText = responseClear; 
        })
        .catch(function (error) {
          console.log(error);
      });
    } else {
      document.getElementById("response").innerHTML = 'You need to writte something on the input.<br>Example: https://swapi.co/api/people/1/'
    }
})