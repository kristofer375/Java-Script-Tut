class Student {
    constructor(id, name, subjects = []) {
        this.id = id;
        this.name = name;
        this.subjects = subjects;
    }

    getStudentName() {
        return `Student: ${this.name}`;
    }
}

const studend3 = new Student(3, "Bob")
console.log(studend3.getStudentName());
