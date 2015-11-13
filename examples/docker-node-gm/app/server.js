//Lets require/import the HTTP module
var http = require('http');
var gm = require('gm');

process.chdir(__dirname);

//Lets define a port we want to listen to
const PORT = 3000;

//We need a function which handles requests and send response
function handleRequest (request, response){

  gm('./photo.jpg')
  .resize(500, 500)
  .blur(7, 3)
  .stream()
  .pipe(response);

  // Sunrise Photoshoot Miami Beach Gold Coast By Mark Wassell
  // https://flic.kr/p/bEEbav

  // response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function (){
  //Callback triggered when server is successfully listening. Hurray!
  console.log('Server listening on: http://localhost:%s', PORT);
});
