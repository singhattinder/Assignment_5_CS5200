
const mongoose = require('mongoose')
const questionSchema = require('./schema/question.schema.server')
module.exports = mongoose.model('QuestionModel', questionSchema)


