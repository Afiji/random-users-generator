// fetch()
// под коробкой fetch:
// return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.onload = () => {
//         if (xhr.status === 200) {
//             resolve(JSON.parse(xhr.responseText));
//         } else {
//             reject(new Error(`Ошибка: ${xhr.statusText}`));
//         }
//     };
//     xhr.onerror = () => {
//         reject(new Error('Ошибка сети'));
//     };
//     xhr.send();
// });

// fetch('http://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(response => {
//         renderUsers(response)
//     })
//     .catch(error => {
//         console.log('Error', error)
//     })


// const renderUsers = (data) => {
//     console.log(data)
//     data.forEach(el => {
//         const username = document.createElement('p')
//         username.textContent = el.username
//         document.body.append(username)
//     })
// }


// const fetchJsonplaceholder = (url) => {
//     return fetch(url)
//         .then(res => res.json())
// }

// fetchJsonplaceholder('https://jsonplaceholder.typicode.com/users/1')
//     .then(user => {
//         console.log("User:", user)
//         return fetchJsonplaceholder(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
//     })
//     .then(posts => {
//         console.log("Posts:", posts);
//         return fetchJsonplaceholder(`https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`)
//     })
//     .then(comments => {
//         console.log("Comments:", comments);
//     })
//     .catch(error => {
//         console.log(`Error:${error}`);
//     })



// Запросим информацию о трёх пользователях параллельно
// const userPromises = [
//     fetch('https://jsonplaceholder.typicode.com/users/1'),
//     fetch('https://jsonplaceholder.typicode.com/users/2'),
//     fetch('https://jsonplaceholder.typicode.com/users/3')
// ];

// Promise.all(userPromises)
//     .then(responses => {
//         return Promise.all(responses.map(el => {
//             return el.json()
//         }))
//     })
//     .then(responses => {
//         console.log(responses);
//     })