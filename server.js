const http=require("http");
http.createServer(function(req,res){
	if(req.url==="/"){
		res.writeHead(200,{'Content-Type': 'text/plain'});
		res.end("Welcome");
	}
	else if(req.url==="/hello"){
		res.writeHead(200,{'Content-Type': 'text/plain'});
		res.end("Hello man");
	}
	else if(req.url==="/how_are_you"){
		res.writeHead(200,{'Content-Type': 'text/plain'});
		res.end("Fine thank you");
	}
	else if(req.url==="/best_smartphone"){
		res.writeHead(200,{'Content-Type': 'text/plain'});
		res.end("Iphone");
	}
	else if(req.url==="/goodbye"){
		res.writeHead(200,{'Content-Type': 'text/plain'});
		res.end("Good Bye");
	}
	else {
		res.end("404 error not found")
	}
}
	).listen(8000);