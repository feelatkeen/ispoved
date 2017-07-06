var express = require('express');
var app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
	host		: 'localhost',
	user		: 'root',
	password	: '',
	database	: 'ispoved'
});
connection.connect();
app.use(express.static(__dirname+"/public"))
app.set('views', __dirname + "/views")
app.set('view engine', 'ejs')
app.get('/', function(req,res){
	var query = connection.query('SELECT * FROM posts ORDER BY id DESC', function(err, result){
		if(err){
			console.error(err)
		}else{
			res.render('index', {print: result});
		}
	});
});
app.get('/post', function(req, res){
	texttopost = req.query.texttopost;
	console.log(texttopost);
	var curdate = new Date();
	posttime = curdate.getDate() + "/" + curdate.getMonth() + 1 + "/" + curdate.getFullYear() + " " + curdate.getHours() + ":" + curdate.getMinutes();
	postthis = [
		[0, texttopost, posttime, 0, 0]
	];
	var query = connection.query('INSERT INTO posts (id, textpost, postdate, likes, dislikes) VALUES ?', [postthis], function(err,result){
		if(err){
			console.error(err);
			res.json({response: "error"})
			return;
		}else{
			console.log(result);
			res.json({response: "OK"})
		}
	});
});
app.get('/comments', function(req, res){
	postid = req.query.postid;
	var query = connection.query('SELECT * FROM posts WHERE id=' + postid, function(err,result){
		if(err){
			console.error(err);
		}else{
			var query = connection.query('SELECT * FROM comments WHERE id=' + postid + " ORDER BY ", function(err1,result1){
				if(err1){
					console.error(err1)
				}else{
					res.render('comments', {print: result, print1: result1});
				}
			});
		}
	})
});
app.get('/commentpost', function(req, res){
	texttopost = req.query.texttopost;
	idtopost = req.query.idtopost
	console.log(texttopost);
	var curdate = new Date();
	posttime = curdate.getDate() + "/" + curdate.getMonth() + 1 + "/" + curdate.getFullYear() + " " + curdate.getHours() + ":" + curdate.getMinutes();
	postthis = [
		[posttime, texttopost, idtopost]
	];
	var query = connection.query('INSERT INTO comments (commentdate, commenttext, id) VALUES ?', [postthis], function(err,result){
		if(err){
			console.error(err);
			res.json({response: "error"})
			return;
		}else{
			console.log(result);
			res.json({response: "OK"})
		}
	});
});
app.get('/rate', function(req, res){
	rateoperation = req.query.rateoperation;
	rateid = req.query.rateid;
	if(rateoperation == "like"){
		var query = connection.query('UPDATE posts SET likes = likes + 1 WHERE id=' + rateid, function(err,result){
			if(err){
				console.error(err);
				res.json({response: "error"})
				return;
			}else{
				console.log(result);
				res.json({response: "OK"})
			}
		});
	}
	if(rateoperation == "dislike"){
		var query = connection.query('UPDATE posts SET dislikes = dislikes + 1 WHERE id=' + rateid, function(err,result){
			if(err){
				console.error(err);
				res.json({response: "error"})
				return;
			}else{
				console.log(result);
				res.json({response: "OK"})
			}
		});
	}
	if(rateoperation == "likeremove"){
		var query = connection.query('UPDATE posts SET likes = likes - 1 WHERE id=' + rateid, function(err,result){
			if(err){
				console.error(err);
				res.json({response: "error"})
				return;
			}else{
				console.log(result);
				res.json({response: "OK"})
			}
		});
	}
	if(rateoperation == "dislikeremove"){
		var query = connection.query('UPDATE posts SET dislikes = dislikes - 1 WHERE id=' + rateid, function(err,result){
			if(err){
				console.error(err);
				res.json({response: "error"})
				return;
			}else{
				console.log(result);
				res.json({response: "OK"})
			}
		});
	}
});
app.listen(3000, function(){
	console.log("port 3000");
});