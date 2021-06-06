<<<<<<< HEAD
var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");
=======
//input
var username = prompt("Give me username")
>>>>>>> parent of 0ff0525 (updated file)

//processing
var welcomeMessage = "this script works!" + username;

<<<<<<< HEAD
var serverURL="https://api.funtranslations.com/translate/minion.json"
 
function getTranslationURL(input){
     return serverURL + "?" + "text=" + input
 }

 function errorHandler(error){
     console.log("error occured", error);
     alert("something wrong with the server! try again after sometime")
 }


 function clickmyHandler(){
     var inputText=txtInput.value; //taking input

     //calling server for processing
     fetch(getTranslationURL(inputText))
         .then(response => response.json())
         .then(json => {
             var translatedText = json.contents.translated;
             outputDiv.innerText=translatedText; //output
         })
         .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickmyHandler)
=======
//output
alert(welcomeMessage);
>>>>>>> parent of 0ff0525 (updated file)
