// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject({name: 'Iphone', age:20})
//     }, 1000)
// })

// .then((data) => console.log(data))
// .catch((err) => console.log(err))


// CRUD операции - create, read, update, delete

// fetch() - встроенная функция для выполнения сетевых запросов

// GET запрос - запрос когда вы запрашиваете какие то данные

// function getUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log('Ошибка при получении пользователей'))
// }
// getUsers()

const  users =  document.querySelector('.users')

async function getUsers() {
    try {
        let res = await  fetch('https://dummyjson.com/products')
        let data = await res.json()
        let xab = data.products
        xab.forEach((el) => {
            let item = document.createElement('div')
            item.classList.add('item')
            let name = document.createElement('h2')
            let city = document.createElement('p')
            let mail = document.createElement('img')
          
            name.textContent = el.title
            city.textContent = el.description
            mail.innerHTML = el.thumbnail
            mail.src = el.thumbnail
           
            
            
            item.append(name,city, mail)
            users.append(item)
            
        })
    } catch (error) {
        console.log('Ошибка при получении данных');
    }
}

window.addEventListener('DOMContentLoaded', () => getUsers())