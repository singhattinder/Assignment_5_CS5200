
const mongoose = require('mongoose')
const studentSchema = require('./schema/student.schema.server')
module.exports = mongoose.model('StudentModel', studentSchema)
