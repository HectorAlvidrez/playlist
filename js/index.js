
const canciones = [
    {id: 1, title: 'Cama', artist: 'SERBIA', imgSrc: 'https://images.genius.com/f9156a96e811d4b9beb1ddaac5b8a995.1000x1000x1.png', agregadoLista: false, youtubeSrc: 'https://www.youtube.com/watch?v=RiKtAok6fQI'},
    {id: 2, title: 'Cinco años y un mes', artist: 'SERBIA', imgSrc: 'https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/ab/24/c7/ab24c7eb-487a-acbd-6800-d56d66fe1cf2/196925101134.jpg/600x600bf-60.jpg', agregadoLista: false, youtubeSrc: 'https://www.youtube.com/watch?v=s_CwWgCOqhw'},
    {id: 3, title: 'A tu merced', artist: 'José Madero', imgSrc: 'https://t2.genius.com/unsafe/274x274/https%3A%2F%2Fimages.genius.com%2Fa286134a69be2d46a8a4faca06ab5d30.1000x1000x1.jpg', agregadoLista: false, youtubeSrc: 'https://www.youtube.com/watch?v=gxB2IReEkTE'},
    {id: 4, title: 'Padre Nuestro', artist: 'José Madero', imgSrc: 'https://i0.wp.com/irreverentemusic.com/wp-content/uploads/2020/09/jose-madero-2-1200x1200-1.jpg?resize=940%2C940&ssl=1', agregadoLista: false, youtubeSrc: 'https://www.youtube.com/watch?v=g8A4vVeDkRI'},
    {id: 5, title: 'Tití me preguntó', artist: 'Bad Bunny', imgSrc: 'https://i1.sndcdn.com/artworks-lAgT6baMXXTs-0-t500x500.jpg', agregadoLista: false, youtubeSrc: 'https://www.youtube.com/watch?v=Cr8K88UcO0s'},
    {id: 6, title: 'I wanna be your slave', artist: 'Måneskin', imgSrc: 'https://discoslongplay.com/wp-content/uploads/2021/09/918oNxoqZL._SL1500_.jpg', agregadoLista: false, youtubeSrc: 'https://www.youtube.com/watch?v=yOb9Xaug35M'},
    {id: 7, title: 'Master of Puppets', artist: 'Metallica', imgSrc: 'https://m.media-amazon.com/images/I/71SziOTzXrL._AC_SL1425_.jpg', agregadoLista: false, youtubeSrc: 'https://www.youtube.com/watch?v=E0ozmU9cJDg'},
    {id: 8, title: 'First Class', artist: 'Jack Harlow', imgSrc: 'https://jenesaispop.com/wp-content/uploads/2022/04/jackharlow-firstclass.jpeg', agregadoLista: false, youtubeSrc: 'https://www.youtube.com/watch?v=yQBImEeXNZ4'}
]

// Llamamos a la section container de mi HTML
// Recuerda que querySelector traera el primer elemento que encuentra
let container = document.querySelector(".container")


// Para insertar cada parte de la informacion: For of recorriendo canciones

let article = ''

for (cancion of canciones){

    // Con comillas francesas debe ser
    // Usamos += porque quiero que cada cancion se vaya sumando a lo ya existente y que no guarde la última información.
    article +=  `
    <article class="box-song"> 
        <a target="_blank" href="${cancion.youtubeSrc}">
            <img src="${cancion.imgSrc}" alt="">
        </a>
        
        <div class="info-container">
            <div class="description">
                <p> ${cancion.title} </p>
                <p class="artist"> ${cancion.artist} </p>
            </div>

            <div class="fav-icon">
                <svg class="unlike" id="${cancion.id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"/></svg>
            </div>
        </div>
    </article>`
}

container.innerHTML += article


// -------------- LOCAL STORAGE, SESSION STORAGE, JSON -----------------

// -------- setItem --------
// Guarda CUALQUIER tipo de elemento en session o en local storage
// Recibe 2 params: key y valor
// La clave sienmpre es string, el valor CUALQUIER tipo de dato.
localStorage.setItem('Name', 'Omar')
localStorage.setItem('Age', 25)
localStorage.setItem('City', 'Chihuahua')

sessionStorage.setItem('songsArray', canciones)

// -------- getItem --------
// Recupera lo guardado en setItem A TRAVÉS DE LA CLAVE (KEY)
// Guardarlo en una variable
let recuperoLocalStorage = localStorage.getItem('clave')
console.log(recuperoLocalStorage)
console.log(typeof(recuperoLocalStorage)) // DEVUELVE EN FORMATO STRING

let  recuperoSessionStorage = sessionStorage.getItem('songsArray')
console.log(recuperoSessionStorage)
console.log(typeof(recuperoSessionStorage))


// Son OBJETOS, por lo tanto se pueden RECORRER
for(let i = 0; i < localStorage.length; i++){

    console.log(localStorage.key(i)) // DEVUELVE EL KEY, lógico

    // Puedo guardarla para usarla para acceder al valor (recuerda que se accede con la key)
    let claveStorage = localStorage.key(i)

    // Para acceder al valor es con getItem:
    console.log(`Para la clave: ${localStorage.key(i)} \nEl value es: ${localStorage.getItem(claveStorage)}`)
}


// -------- removeItem ---------
// Elimina toda la info por dentro del KEY que le damos
// Recibe como param el nombre de la KEY, igual que en getItem
localStorage.removeItem('City')

// ---------  clear() ----------
// Elimina TODO el storage, no recibe ningún param
// Es bueno en botones de eliminar todo o al comprar carritos
localStorage.clear()


// ----------------------------------- JSON ----------------------------------
// Es un formato basado en TEXTO PLANO
// Conversor de string y objeto para manipular tipos de datos como los guardados en storage
// Se usa mucho en APIs

// ------ stringify ------
// Convertir objetos a string antes de enviarlo a storage
const formatoJSON = JSON.stringify(canciones[0])
console.log(formatoJSON)
console.log(typeof(formatoJSON)) // Ya sale como string

// Lo subo a storage
localStorage.setItem('cancion1', formatoJSON)


// -------- parse -------
// Se pasa a objeto antes de recuperarlo
const recuperoLocalStorageDos = JSON.parse(localStorage.getItem('cancion1'))
console.log(recuperoLocalStorageDos)
console.log(typeof(recuperoLocalStorageDos)) // Ya sale como objeto

// SIEMPRE SIEMPRE SIEMPRE CONVERTIR DATOS RELIGIOSAMENTE



// ------ EJEMPLO APLICADO: GUARDAR OBJETOS EN STORAGE AL HACER CLICK ---------

// Esto no funciona porque para EVENTOS debes apuntar a 1 solo elemento o unico, asi apunta a un array:

// let svgs = document.querySelectorAll('svg')
// svgs.onclick = (e) => {
//    console.log(e)
//}




// -------------------- EJEMPLO PRACTICO Y COMBINANDO TODO ---------------

// Agregar canciones a favoritos, mostrarlos en HTML y en storage
// Tambien borrarlos (remove o clear)
// Todo al hacer click en el corazón (evento onclick)

// Nos fijamos si ya hay datos (canciones) en favoritas
// Con una CONDICIONAL detectamos si hay info o no en storage
// Si no hay info, le pido que agregue al hacer click (lo que ya había hehco lo agrego al else a través de una función):

let recoverSong = localStorage.getItem('Favoritas')
let favSongs = []
let svgs = document.querySelectorAll('svg')
let resultsFavs = document.querySelector('.results')

if(recoverSong != null){

    favSongs = JSON.parse(recoverStorage)

}else{

    // Llamo a mi funcion de guardar canciones
    showAndSave()
}


// Hago una FUNCION para no repetir el codigo de MOSTRAR y GUARDAR canciones
function showAndSave(){

    // Para apuntar a cada uno debemos hacer un bucle FOR
    for (svg of svgs){

        svg.onclick = (e) => { // e apunta al elemento que toco


            //console.log(e.target) // Devuelve el path, pero dentro de sus objetos esta parentElement, para apuntar al div 'fav'

            let element = e.target.parentElement
            //element.classList.toggle('like') 
            // Agrega la clase, vivo con lo de cascading stylesheet, lo sobrepone
            // Le quito el toggle porque funciona SIEMPRE que hago click



            // --- Guardar cancion en storage:
            
            // Obtenemos id de la cancion y la guardamos en variable
            // Le agregamos atributo id de la cancion correspondiente al svg directamente
            let id = element.attributes.id.value
            console.log(id)


            // Encontramos la cancion perteneciente al id, porque hasta ahorita solo tocamos el svg y el HTML
            // Para ello usamos el metodo FIND para arrays
            // Recorre el array hasta encontrar la CONDICION el primero que encuentre y guardamos en variable para utilizar esa cancion
            let foundSong = canciones.find(e => e.id == id)

            // REVISO si YA EXISTE la canción EN EL STORAGE o NO
            if(favSongs.includes(foundSong)){

                console.log('La cancion ha sido eliminada')

                // 1-- Le despinto el corazón con .remove
                element.classList.remove('like')


                // 2-- ELIMINAMOS DEL ARRAY PORQUE EL STORAGE DEPENDE DE ÉL

                // Elimino el objeto del array con indexOf (devuelve el index del elemento) y splice (saca del array, del objeto hasta el index que le indique)
                let deleateSongArr = favSongs.indexOf(foundSong)
                favSongs.splice(deleateSongArr, 1)

                // 3-- Eliminamos elemento del HTML

                // No podemos poner como attribute id un numero, por eso el id lo concatenamos con algo más (id=id-foundSong.id)
                let deleateSongPage = document.querySelector(`#id-${foundSong.id}`)
                

                // removeChild elimina el elemento del HTML, se lo aplicamos a la section y le pasamos el elemento
                resultsFavs.removeChild(deleateSongPage)


            }else{

                // 1-- Si no existe la agrego AL ARRAY no al STORAGE
                console.log('Canción agregada')
                favSongs.push(foundSong)

                // 2-- Pinto el corazón con la clase hecha con .add
                element.classList.add('like')


                // 3-- Lo mostramos en el HTML:
                resultsFavs.innerHTML +=  `
                <article class="box-song" id="id-${foundSong.id}"> 
        
                <a target="_blank" href="${foundSong.youtubeSrc}">
                    <img src="${foundSong.imgSrc}" alt="">
                </a>
                    
                    <div class="description">
                        <p> ${foundSong.title} </p>
                        <p class="artist"> ${foundSong.artist} </p>
                    </div>
                </article>`
            }

            // Subimos el nuevo array al storage con una key y pasandolo a string
            localStorage.setItem('Favoritas', JSON.stringify(favSongs))
            console.log(favSongs)
        }
    }
}

img.onmouseover = e => {
    
}

// FIJATE QUE: Las canciones siempre se suben y se quitan del array, y es el array FINAL el que se guarda en el Storage.

// OJO que cuando le pasamos al storage un string no tenemos que aplicarle stringify

// ---------- NOTAS: ------------ 
// 1. Quién es el cliente y qué es lo que busca
// 2. Ver el camino, plantearse el resultado, parte del final
// 3. Toma muchas notas de las acciones que quieres que pasen

// ------- POR EJEMPLO:
// 1. Corazón debe pintarse al clickearlo
// 2. La canción favoriteada debe agregarse al storage SOLO SI NO ESTÁ
// 3. La canción debe mostrarse en el HTML
// 4. Al volver hacer click la canción debe borrarse del HTML y del storage
// 5. Al volver a hacer click el corazón debe despintarse 