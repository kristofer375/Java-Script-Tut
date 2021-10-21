// API: Application Program Interface
// CRUD - create (POST), read (GET), update (PUT/PATCH), delete (DELETE)

const blogPost = {
    title: "aaa",
    body: "bbbbbb",
    userId: 1
}

fetch('http://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(blogPost),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(data => console.log(data));
