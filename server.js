const http = require('http');
const port = 8080;


//Basic HTTP httpServer

const httpServer = http.createServer((req, res) => {
  //console.log (req);

  //const headers = res.getHeaders();
  const headers=req.rawHeaders;
  console.log( headers );


//console.log(JSON.stringify(headers));


res.end('ok');
});

httpServer.listen(port, () => {
  console.log('server runnimg');

});
