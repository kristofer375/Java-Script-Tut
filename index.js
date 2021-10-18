//const student1 = {
//    id: 1,
//    name: "imię",
//    subjects: [],
//    addSubject(subject) {
//        this.subjects = [...this.subjects, subject];
//    }
//};

//student1.addSubject('Gym');
//console.log(student1.subjects);

function Student(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
}

Student.prototype.addSubject = function(subject) {
    this.subjects = [...this.subjects, subject]
}

const student1 = new Student(1, "Jeff");
student1.addSubject('Gym');

console.log(student1);
