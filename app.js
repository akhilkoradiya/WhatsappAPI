const wa = require('@open-wa/wa-automate');
const express = require('express')
const app = express()
const port = 8080
var bodyParser = require('body-parser');
app.use( bodyParser.json() ); 
app.use(express.urlencoded({
  extended: true
}))

app.listen(port, () => {
  console.log(`Server Port -> ${port}`)
})

wa.create({
  sessionId: "API_SESSION_DATA",
  multiDevice: true, 
  authTimeout: 60, 
  blockCrashLogs: true,
  disableSpins: true,
  headless: true,
  popup: true,
  qrTimeout: 0,
}).then(client => start(client));


function start(client) {
  app.post('/send', (req, res) => {
    const message = req.body.message
    const number = "91"+req.body.number+"@c.us"
    if (message != null & number != null){
      client.sendText(number, message)
      res.send({ 
        "Number" : number,
        "Message" : message
      })
    }
    
  })
}
