var express = require('express')
// var bodyParser = require('body-Parser')

var app = express ()

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/', function(req, res){
	res.status(200).json({ welcome: 'I am Jared'})
})

app.get('/name', function(req, res){
	res.status(200).json({ name: 'Jared Beauchamp' })
})

app.get('/location', function(req, res){
	res.status(200).json({ city: 'Salt Lake City', state: 'Utah', country: 'USA' })
})

app.get('/hobbies', function(req, res){
	var hobbies = [
		{ name: 'Snowboarding', frequency: 'weekly'  },
		{ name: 'Eating', frequency: 'daily'  },
	]

	res.status(200).json(hobbies)
})

app.get('/occupations', function(req, res){
	var occupations = [
		{ title: 'Greeter', employer: 'Wal-Mart'  },
		{ title: 'Dishwasher', employer: 'McDonalds'  },
	]

	res.status(200).json(occupations)
})

app.get('/occupations/latest', function(req, res){
	var occupations = [
		{ title: 'Greeter', employer: 'Wal-Mart'  },
		{ title: 'Dishwasher', employer: 'McDonalds'  },
	]

	res.status(200).json(occupations[1])
})

app.listen(3000)