// reference connect library
let connect = require ('connect');

//
let app = connect();

//set default http response
let index = function (req, res, next) {
    res.write('<h1>Home Page</h1>');
    res.end();
};

let about = function (req, res, next) {
    res.write('<h1>About Page</h1>');
    res.end();
};

let contact = function (req, res, next) {
    res.write('<h1>Contact Page</h1>');
    res.end();
};
//map the index variable to the root path("/")
app.use("/about", about);
app.use("/contact", contact);
app.use("/", index);

// start http server using connect
app.listen(3000);