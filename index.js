const user = {
    name: "imie",
    username: "nick",
    email: "email@gmail.com",
    details: {
        title: "tytuł"
    }
};

//const { username, email } = user;

//function displayUser() {
//    console.log(`Username: ${username}, Email: ${email}`);
//}
//displayUser();

//const { name, details: { title } } = user;

function displayUserBio({ name, details: { title } }) {
    console.log(`${name} is a ${title}`);
}
displayUserBio(user);
