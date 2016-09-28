
var figlet = require("figlet");
/* Use figlet for a single text
figlet.text("Hello, Ben", function(error, data){
  if(error)
    console.error(error);
  else
    console.log(data);
});
*/
function readFromFile() {
var fs = require("fs");
fs.readFile("sam.txt", "utf8", function(error, text){ //read a file context and convert to figlet style
  if(error)
    throw error;
  else
    figlet.text(text, function(errorWithFig, data){
      if(errorWithFig)
        console.error(errorWithFig);
      else console.log(data);
    })
});

}

function sayHello() {
  figlet.text("Hello Function", function(error, data){
    if (error)
      console.log(error)
      else
        console.log(data);

  })
}
