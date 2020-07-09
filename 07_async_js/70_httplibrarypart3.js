const http = new EasyHTTP;
//get users
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
//USER DATA
const data = {
        name: 'John Doe',
        username: 'johndoe',
        email: 'jdoe@gmail.com'
    }
    //create post
    // http.post('https://jsonplaceholder.typicode.com/users')
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));
    //create put
    // http.put('https://jsonplaceholder.typicode.com/users/2', data)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));
    //DELETE USER
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));