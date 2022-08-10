const boton1 = document.querySelector("#boton1")

/*
function botonClick() {
    console.log("diste click")
}

boton1.ondblclick = () => {
    console.log("Diste click desde onclick")
}

boton1.onclick = () => {
    console.log("Diste click desde otro onclick")
}

boton1.addEventListener('click', () => {
    console.log("Diste click!")
})

boton1.addEventListener('dblclick', () => {
    console.log("Diste click otro addEvent!")
})

const inputText = document.getElementById("inputText")
const inputColor = document.getElementById("inputColor")

inputText.addEventListener("input", () => {
    console.log(inputText.value)
})

inputText.addEventListener("change", () => {
    console.log(inputText.value)
})

inputColor.addEventListener("input", () => {
    document.body.style.backgroundColor = inputColor.value
    console.log(inputColor.value)
})

inputColor.addEventListener("change", () => {
    document.body.style.backgroundColor = inputColor.value
    console.log(inputColor.value)
})

boton1.addEventListener('click', () => {
    document.body.style.backgroundColor = inputColor.value
})*/

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
}

const idForm = document.getElementById("idForm")
const botonUsers = document.getElementById("botonUsers")
const divUsers = document.getElementById("divUsers")

const users = []

idForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const user = new User(username, email, password)

    users.push(user)

    idForm.reset()
    console.log(users)
})


botonUsers.addEventListener('click', () => {
    divUsers.innerHTML = ""
    users.forEach((user, indice) => {
        divUsers.innerHTML += `
            <div class="card" id="user${indice}" style="width: 18rem;margin:3px;">
                <div class="card-body">
                    <h5 class="card-title">${user.username}</h5>
                    <p class="card-text">${user.email}</p>
                </div>
            </div>
        
        `
    })
})