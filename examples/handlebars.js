var handlebars = require('handlebars');
handlebars.registerHelper('hash', require('..'));

var fn = handlebars.compile('{{hash}}');
console.log(fn());
//=> 485e65e0b0b6a901e17c7e47ffc3970912de17bb

var fn = handlebars.compile('{{hash hashOptions}}');
console.log(fn({hashOptions: {short: true}}));
//=> 485e65e

var fn = handlebars.compile('{{hash short=true}}');
console.log(fn());
//=> 485e65e
