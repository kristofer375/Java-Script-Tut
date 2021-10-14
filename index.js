function functionName() {
    return 'value';
}

const user = {
    name: 'mateusz',
    joined: '22 Maja, 2002'
}

const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;

function greetUser(name, callback) {
    return callback(capitalize(name));
}

const result = greetUser(user.name, name => `Hi there, ${name}`)
console.log(result);
