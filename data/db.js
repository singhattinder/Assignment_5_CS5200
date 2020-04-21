const mongoose = require('mongoose');
const MONGO_DB = 'mongodb://heroku_nkrj7dwr:1s0fnkvh195h007uoqlvgi9oa@ds259820.mlab.com:59820/heroku_nkrj7dwr';
mongoose.connect(MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true});


