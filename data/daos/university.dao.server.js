
const studentModel = require('../models/student.model.server')

const questionModel = require('../models/question.model.server')
const answerModel = require('../models/answer.model.server')
const quizModel = require('../models/quiz.model.server')



 truncateDatabase = () => {
    return answerModel.deleteMany({}).then(() => studentModel.deleteMany({}))
        .then(() => questionModel.deleteMany({})).then(() => quizModel.deleteMany({}));
}

createStudent = (student) => studentModel.create(student)

populateDatabase = () => {
    createStudent({
        _id: 123,
        username: "alice",
        password: "alice",
        firstName: "Alice",
        lastName: "Wonderland",
        gradYear: 2020,
        scholarship: 15000
    });

    createStudent({
        _id: 234,
        username: "bob",
        password: "bob",
        firstName: "Bob",
        lastName: "Hope",
        gradYear: 2021,
        scholarship: 12000
    });

    createQuestion({
        _id: 321,
        question: "Is the following schema valid?",
        points: 10,
        questionType: "TF",
        trueFalse: ({isTrue: false}),
    });

    createQuestion({
        _id: 432,
        question: "DAO stands for Dynamic Access Object.",
        points: 10,
        questionType: "TF",
        trueFalse: ({isTrue: false}),
    });

    createQuestion({
        _id: 543,
        question: "What does JPA stand for?",
        points: 10,
        questionType: "MC",
        multipleChoice: ({
            choices: "Java Persistence API,Java Persisted Application,"
                + "JavaScript Persistence API,JSON Persistent "
                + "Associations",
            correct: 1
        }),
    });

    createQuestion({
        _id: 654,
        question: "What does ORM stand for?",
        points: 10,
        questionType: "MC",
        multipleChoice: ({
            choices: "Object Relational Model,Object Relative "
                + "Markup,Object Reflexive Model,Object "
                + "Relational Mapping",
            correct: 4
        }),
    });

    answerQuestion(123, 321, {
        _id: 123,
        trueFalseAnswer: true,
        multipleChoiceAnswer: ''
    });

    answerQuestion(123, 432, {
        _id: 234,
        trueFalseAnswer: false,
        multipleChoiceAnswer: ''
    });

    answerQuestion(123, 543, {
        _id: 345,
        trueFalseAnswer: null,
        multipleChoiceAnswer: 1
    });

    answerQuestion(123, 654, {
        _id: 456,
        trueFalseAnswer: null,
        multipleChoiceAnswer: 2
    });

    answerQuestion(234, 321, {
        _id: 567,
        trueFalseAnswer: false,
        multipleChoiceAnswer: ''
    });

    answerQuestion(234, 432, {
        _id: 678,
        trueFalseAnswer: true,
        multipleChoiceAnswer: ''
    });

    answerQuestion(234, 543, {
        _id: 789,
        trueFalseAnswer: null,
        multipleChoiceAnswer: 3
    });

    answerQuestion(234, 654, {
        _id: 890,
        trueFalseAnswer: null,
        multipleChoiceAnswer: 4
    });
};

deleteStudent = (id) => studentModel.remove({_id: id})

findAllStudents = () => studentModel.find()

findStudentById = (id) => studentModel.findById(id)

createQuestion = (question) => questionModel.create(question)

deleteQuestion = (id) => questionModel.remove({_id: id})

deleteAnswer = (id) => answerModel.remove({_id: id})

findAllQuestions = () => questionModel.find()

findQuestionById = (id) => questionModel.findById(id)

findAllAnswers = () => answerModel.find()

 answerQuestion = (studentId, questionId, answer) => {
    answer.student = studentId;
    answer.question = questionId;
    return answerModel.create(answer);
}

findAnswerById = (id) => answerModel.findById(id)

findAnswersByStudent = (studentId) => answerModel.find({student: studentId})

findAnswersByQuestion = (questionId) => answerModel.find({question: questionId})


module.exports = {
    truncateDatabase,
    populateDatabase,
    createStudent,
    deleteStudent,
    createQuestion,
    deleteQuestion,
    answerQuestion,
    deleteAnswer,
    findAllStudents,
    findStudentById,
    findAllQuestions,
    findQuestionById,
    findAllAnswers,
    findAnswerById,
    findAnswersByStudent,
    findAnswersByQuestion
}
