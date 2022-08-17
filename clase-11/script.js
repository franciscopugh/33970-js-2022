class Tarea {
    constructor(nombre, categoria, descripcion) {
        this.nombre = nombre
        this.categoria = categoria
        this.descripcion = descripcion
        
    }
}

let tareas = []

if(localStorage.getItem('tareas')) { //String si existe / NULL si no existe
    tareas =  JSON.parse(localStorage.getItem('tareas')) //JSON.parse() pasa de JSON a objeto
} else {
    localStorage.setItem('tareas', JSON.stringify(tareas)) //JSON.stringify() pasar de objeto a JSON
}

const form = document.getElementById("idForm")
const botonTareas = document.getElementById("botonTareas")
const divTareas = document.getElementById("divTareas")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const datForm = new FormData(e.target)

    const tarea = new Tarea(datForm.get("nombre"), datForm.get("categoria"), datForm.get("descripcion"))
    
    tareas.push(tarea)

    localStorage.setItem('tareas', JSON.stringify(tareas))

    form.reset()

    /*
    const nombre = document.getElementById("idNombre").value
    const categoria = document.getElementById("idCategoria").value
    const descripcion = document.getElementById("idDescripcion").value

    console.log(nombre, categoria, descripcion)*/
})

botonTareas.addEventListener('click', () => {
    const tarStorage = JSON.parse(localStorage.getItem('tareas'))

    divTareas.innerHTML = ""

    tarStorage.forEach((tarea, indice) => {
        divTareas.innerHTML += `
            <div class="card bg-light mb-3" id="tarea${indice}" style="max-width: 18rem;margin:3px;">
                <div class="card-header"><h2>${tarea.nombre}<h2></div>
                <div class="card-body">
                    <p class="card-title">${tarea.categoria}</p>
                    <p class="card-text">${tarea.descripcion}</p>
                    <button class="btn btn-danger">Eliminar</button>
                </div>
            </div>
        
        `
    })

    tarStorage.forEach((tarea, indice) => {
        const tarjetaTarea = document.getElementById(`tarea${indice}`)

        tarjetaTarea.children[1].children[2].addEventListener('click', () => {
            tarjetaTarea.remove() //DOM
            tareas.splice(indice, 1) //Array
            localStorage.setItem('tareas', JSON.stringify(tareas)) //Local storage
            console.log(`${tarea.nombre} Eliminada`)
        })
    })
})