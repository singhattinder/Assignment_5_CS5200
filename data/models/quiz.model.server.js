
const mongoose = require('mongoose')
const quizSchema = require('./schema/student.schema.server')
module.exports = mongoose.model('QuizModel', quizSchema)


