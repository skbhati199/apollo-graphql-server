const db = require('./db')
const Query = {
  greeting: () => {
    return "hello from  TutorialsPoint !!!"
  },
  students: () => db.students.list(),
  //resolver function with arguments and returning object
  studentById: (root, args, context, info) => {
    return db.students.get(args.id);
  },
  size:() => db.students.list().length
}
const Student = {
  fullName: (root, args, context, info) => {
    return root.firstName + ":" + root.lastName
  },
  college: (root) => {
    return db.colleges.get(root.collegeId);
  }
}
module.exports = { Query, Student }