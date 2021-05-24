const usernameInput = document.querySelector('#usernameInput')
const passwordInput = document.querySelector('#passwordInput')
const registerBtn = document.querySelector('#registerBtn')
const loginBtn = document.querySelector('#loginBtn')
const logoutBtn = document.querySelector('#logoutBtn')
const message = document.querySelector('#message')

const nickname = document.querySelector('#nicknameInput')
const species = document.querySelector('#speciesInput')
const h2o_frequency = document.querySelector('#h2oInput')
const image_url = document.querySelector('#image_urlInput')
const img = document.querySelector('#img')
const submitPlant = document.querySelector('#submitPlant')


console.log(document.cookie)

const handle = action => evt => {
  evt.preventDefault()
  const credentials = {
    username: usernameInput.value,
    password: passwordInput.value,
  }
  fetch(`/api/users/${action}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  })
    .then(res => res.json())
    .then(data => { localStorage.setItem('token', data.token) })
    .catch(err => { message.textContent = err.message; debugger })
}

const logout = evt => {
  evt.preventDefault()
  fetch(`/api/users/logout`)
    .then(res => res.json())
    .then(data => { console.log(data); message.textContent = data.message })
    .catch(err => { message.textContent = err.message; debugger })
}

registerBtn.addEventListener('click', handle('register'))
loginBtn.addEventListener('click', handle('login'))
logoutBtn.addEventListener('click', logout)

const submitNewPlant = e => {
    e.preventDefault()
    console.log(img)
    const token = localStorage.getItem('token')
    const plant = {
        nickname: nickname.value,
        species: species.value,
        h2o_frequency: h2o_frequency.value,
        image_url: image_url.value,
        img: img.value

    }
    console.log(plant.img)
    fetch(`/api/plants/user/1`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: token },
        body: JSON.stringify(plant),
    })
    .then(res => {
        console.log(res.data)
    })
}

submitPlant.addEventListener('click', submitNewPlant)