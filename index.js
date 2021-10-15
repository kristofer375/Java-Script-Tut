const user = {
    name: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: ""
};

const newUser = {
    username: "nick",
    email: "email@gmail.com",
    password: "xyz"
};

//console.log(Object.assign({}, user, newUser, { verified: false }));
//console.log(user);

const createdUser = { ...console.user, ...newUser, verified: false };
console.log(createdUser);
