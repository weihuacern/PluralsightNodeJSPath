var book = require("./lib/module7ex_grades.js").book;

for(var i = 2; i < process.argv.length; i += 1) {
  book.addGrade(parseInt(process.argv[i]));
}

console.log(book.getAverage());
