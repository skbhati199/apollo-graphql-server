const db = require('./db')
const Query = {
  greeting: () => {
    return "hello from  TutorialsPoint !!!"
  },
  students: () => db.students.list(),
  size:() => db.students.list().length
}
module.exports = { Query }