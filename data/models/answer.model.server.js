
const mongoose = require('mongoose')
const answerSchema = require('./schema/answer.schema.server')
module.exports = mongoose.model('AnswerModel', answerSchema)
