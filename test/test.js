const UniversityDAO = require('../data/daos/university.dao.server');
const expect = require('chai').expect;
const assert = require('chai').assert;

describe('UniversityDaoTest', function() {


    // 1.  truncateDatabase, 2. populateDatabase

    before(async () => {
        require('../data/db');
        await UniversityDAO.truncateDatabase()
            .then(() => UniversityDAO.populateDatabase())
    })



    // 3.  testStudentsInitialCount   uses DAO to validate there are 2 students initially
    it('testStudentsInitialCount', async function() {
       const number = await UniversityDAO.findAllStudents()
            .then(students =>  students);
        assert.lengthOf(number, 2, 'student array contains 2 numbers');

    })

    // 4. testQuestionsInitialCount  uses DAO to validate there are 4 questions initially
    it('testQuestionsInitialCount', async function() {

        const number = await UniversityDAO.findAllQuestions()
            .then(questions => questions);
        assert.lengthOf(number, 4, 'question array contains 4 numbers');

    })


    // 5. testAnswersInitialCount() - uses DAO to validate there are 8 answers initially
    it('testAnswersInitialCount', async function() {

        const number = await UniversityDAO.findAllAnswers()
            .then(answers => answers);
        assert.lengthOf(number, 8, 'answers array contains 8 numbers');

    })

    // 6. testDeleteAnswer() - uses DAO to remove Bob’s answer for the multiple choice question
    // “What does ORM stand for?” and validates the total number of amswers is 7
    // and Bob’s total number of answers is 3

    it('testDeleteAnswer', async function() {

      const answers = await  UniversityDAO.deleteAnswer(890)
            .then(() => UniversityDAO.findAllAnswers())
            .then(() => UniversityDAO.findAnswersByStudent(234))


        // validate Bob's answer is deleted and his total answers is 3
        assert.lengthOf(answers, 3, 'answers array contains 3 numbers');


      // validate total remaining answers is 7
        const number = await UniversityDAO.findAllAnswers()
            .then(answers => answers);
        assert.lengthOf(number, 7, 'answers array contains 7 numbers');

    })


    // 7. testDeleteQuestion() - uses DAO to remove true false question
    // “Is the following schema valid?” and validates the total number of questions is 3
    it('testDeleteQuestion', async function() {

        const question = await UniversityDAO.deleteQuestion(321)
            .then(() => UniversityDAO.findAllQuestions())
            .then(questions => questions);

        // validate Bob's answer is deleted and his total answers is 3
        assert.lengthOf(question, 3, 'question array contains 3 numbers');


    })


    // 8. testDeleteStudent() - uses DAO to remove student Bob and validates the total number of students is 1
    it('testDeleteStudent', async function() {

        const student = await  universityDAO.deleteStudent(234)
            .then(() => universityDAO.findAllStudents())
            .then(students => students)

        assert.lengthOf(student, 1, 'students array contains 1 numbers');

    })
})