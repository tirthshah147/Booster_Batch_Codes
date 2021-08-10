const http = require('http');

let courses = [
  {name:"express js",author:"tirth"},
  {name:"node js",author:"shatakshi"}
];

const server = http.createServer((req,res) => {
    console.log(req);
    if(req.url === '/'){
      res.write('Hello world!');
      res.end();
    }
    if(req.url === '/api/courses'){
      res.write(JSON.stringify(courses));
      res.end();
    }

})

server.listen(8080);

console.log("Listening on port number 8080....")

//CRUD OPERATIONS