var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

//connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.use(bodyParser.json());

Genre = require('./models/genre.js');
Book = require('./models/book.js');

app.get('/', function (req, res){
    res.send("Please use /api/books or /api/genres");
});

app.get('/api/genres', function(req, res){
  Genre.getGenres(function(error, genres){
    if (error) {
      throw error;
    }
    res.json(genres);
  })
});

app.post('/api/genres', function(req, res){
  var genre = req.body;
  Genre.addGenre(genre, function(error, genre){
    if (error) {
      throw error;
    }
    res.json(genre);
  })
});

app.get('/api/books', function(req, res){
  Book.getBooks(function(error, books){
    if (error) {
      throw error;
    }
    res.json(books);
  })
});

app.get('/api/books/:_id', function(req, res){
  Book.getBookById(request.params._id, function(error, book){
    if (error) {
      throw error;
    }
    res.json(book);
  })
});

app.post('/api/books', function(req, res){
  var book = req.body;
  Book.addBook(book, function(error, book){
    if (error) {
      throw error;
    }
    res.json(book);
  })
});

app.listen(3000, function(){
  console.log("Listening on port 3000...");
});
