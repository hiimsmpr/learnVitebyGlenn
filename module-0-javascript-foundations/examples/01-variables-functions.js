// 01: Variables, function declarations, and arrow functions.

const courseName = 'JavaScript Foundations'
let lessonCount = 1

function formatLesson(title, count) {
  return `${title} (Lesson ${count})`
}

const doubleNumber = (value) => value * 2

console.log('Course:', courseName)
console.log('Formatted lesson:', formatLesson(courseName, lessonCount))
console.log('Double 7:', doubleNumber(7))

lessonCount = lessonCount + 1
console.log('Updated lesson count:', lessonCount)
