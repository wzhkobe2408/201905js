var name = 'mabin';
let age = 18;
const job = 'FE';
function sum(a, b) {
  return a + b;
}

class Teacher {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export {name, job, sum, Teacher}