//url: http://localhost:3000/tax-calculator?subtotal=x
// more references
let http = require('http');
let url = require('url');
//extra reference
let currency = require('currency-formatter');
//start server
http.createServer(function (req,res) {
    res.writeHeader(200, {'Content-Type': 'text/html'});

    //use url library to get subtotal amount from url
    let qs = url.parse(req.url, true).query;
    console.log(qs);

    let subtotal = parseFloat(qs.subtotal);

    // calculate tax and total
    let tax = subtotal*0.13;
    let total = subtotal + tax;

    // display results
    res.write('<h1>Tax Calculator</h1> Sub Total:'+currency.format(subtotal, {code:'USD'}) + '<br/> Tax:'+currency.format(tax, {code:'USD'})+'<br/> Total: '+currency.format(total , {code:'USD'}));

    res.end();
}).listen(3000);