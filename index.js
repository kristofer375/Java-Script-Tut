//fetch('http://jsonplaceholder.typicode.com/posts/1')
//   .then(response => response.json())
//   .then(data => console.log(data));

//const { resolve } = require("path/posix")

//async function getBlogPost() {
//    const promise = new Promise((resolve, require) => {
//        setTimeout(() => resolve('blog'), 1000);
//    })
//
//    const result = await promise
//    console.log(result)
//    console.log('done')
//}

async function getPost() {
    const response = await fetch('http://jsonplaceholder.typicode.com/posts/1')
    const data = await response.json()
    console.log(data);
}

getPost()
