let { Board, Servo } = require("johnny-five");
let board = new Board();
let app = require('express')()
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/input.html')
})

app.post('/', (req, res) => {
  let x = new Servo(9)
  let y = new Servo(10)

  let xc = (180 - req.body.xform)
  let yc = (180 - req.body.yform)
  x.to(xc)
  y.to(yc)
  res.redirect('/')
  res.end()
})

app.get('/reset', (req, res) => {
  x.center()
  y.center()
  res.redirect('/')
})  



function startWebServer() {
  app.listen(3000, () => {
    console.log('node-turret live on port 3000')
  })
}




board.on("ready", () => {
  startWebServer()
  let x = new Servo(9)
  let y = new Servo(10)
  x.center()
  y.center()
  board.repl.inject({
    center: function() {
      x.center()
      y.center()
    }
  })

 

});



