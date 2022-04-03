# WhatsappAPI

This is whatsapp api for send message.
You can add more function like read-message,send-Image,send-location,etc.


**For More Information :** https://docs.openwa.dev


**Installation**
```
npm i --save express
npm i --save @open-wa/wa-automate@latest
```

**Usage**
```
step-1) node app.js

step-2) Scan QR code

step-3)
->Send Post Request 
  Content-type -> application/json
  Url          -> http://127.0.0.1/send
  Parameter    -> { "number": "9999999999", "message" : "Hello World" }
```
