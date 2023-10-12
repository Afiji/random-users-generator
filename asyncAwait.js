
// fetch('https://randomuser.me/api/?results=20')
//     .then(res => res.json())
//     .then(res => renderData(res.results))
//     .catch(err => console.log(err))


// const renderData = (data) => {
//     console.log(data);
// }

const output = document.querySelector('.output')
const newUsers = document.querySelector('.newUsers')
const inputCountUsers = document.querySelector('.inputCountUsers')
const maleUsers = document.querySelector('.maleUsers')
const femaleUsers = document.querySelector('.femaleUsers')

let usersData = []

maleUsers.addEventListener('click', () => {
    const filteredUsers = usersData.filter((user) => user.gender === 'male');
    renderData(filteredUsers);
})

femaleUsers.addEventListener('click', () => {
    const filteredUsers = usersData.filter((user) => user.gender === 'female');
    renderData(filteredUsers);
})


newUsers.addEventListener('click', () => {
    // window.location.reload()
    getRandomUsers()
})


inputCountUsers.addEventListener('change', () => {
    const num = inputCountUsers.value
    const users = getRandomUsers(num)
    usersData = users
    renderData(usersData)
    // console.log(users)
})

const getRandomUsers = async (number = 20) => {
    const request = await fetch(`https://randomuser.me/api/?results=${number? number : 20}`)
    const response = await request.json()
    usersData = response.results
    renderData(usersData)
    return usersData
}

getRandomUsers()


const renderData = (data) => {
    
    output.innerHTML = ''

    data.forEach(el => {
        const box = document.createElement('div')
        const textBox = document.createElement('div')
        const contactsBox = document.createElement('div')
        const photo = document.createElement('img')
        const title = document.createElement('p')
        const firstName = document.createElement('p')
        const lastName = document.createElement('p')
        const phone = document.createElement('p')
        const email = document.createElement('p')

        textBox.className = 'textBox'
        photo.className = 'userPhoto'
        box.className = 'box'
        title.className = 'title'
        firstName.className = 'firstName'
        lastName.className = 'lastName'
        phone.className = 'phone'
        email.className = 'email'
        contactsBox.className = 'contactsBox'

        photo.src = el.picture.large

        title.textContent = el.name.title
        firstName.textContent = el.name.first
        lastName.textContent = el.name.last
        phone.textContent = el.phone
        email.textContent = el.email

        console.log(el)

        contactsBox.append(phone, email)
        textBox.append(title, firstName, lastName)
        box.append(photo, textBox, contactsBox)
        output.append(box)
    })
    
}

// отрисовать картинку
// отрисовать title, name - first, name - last
// отрисовать phone, email
// создать кнопку при нажатии на которую отрисуются новые юзеры
// создать input в котором вы будете вводить кол - во юзеров, input динамичный
// две кнопки - male и female. при нажатии на male отрисует 
// юзеров мужского пола, при нажатии на female женского пола
