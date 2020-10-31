const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
consolidate = require("consolidate");

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.engine("ejs", consolidate.nunjucks);

app.use(morgan('dev'));


app.use(require('./routes'));


app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));
});