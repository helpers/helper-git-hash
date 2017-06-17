var assemble = require('assemble');
var app = assemble();

app.helper('hash', require('..'));
var view = app.view('example.hbs', {contents: '{{hash short=true}}'});

app.render(view, function(err, view) {
  if (err) throw err;
  console.log(view.contents.toString());
  //=> 485e65e0b0b6a901e17c7e47ffc3970912de17bb
});
