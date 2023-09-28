const sectionAttack = document.getElementById("select-attack")
const botonPokemonJugador = document.getElementById("boton-pokemon");
const botonReiniciar=document.getElementById("boton-reload");

const sectionSelectPokemon =document.getElementById("select-pokemon")
const spanPokemonJugador = document.getElementById("pokemon-jugador")
const imagenPokemon = document.getElementById("imagen-Pokemon")

const spanPokemonEnemigo = document.getElementById("pokemon-enemigo");
const imagenPokemonenemigo = document.getElementById("imagen-Pokemon2");

const spanVidaJugador = document.getElementById("vida-jugador");
const spanVidaEnemigo = document.getElementById("vida-enemigo");

const sectionMensajes = document.getElementById("parrafoMiResultado");
const parrafoAtaqueJugador = document.getElementById("parrafoAtaqueJugador");
const parrafoAtaqueEnemigo = document.getElementById("parrafoAtaqueEnemigo");
const contenedorTarjetas = document.getElementById("tarjetasContainer");
const contenedorAtaques = document.getElementById("contenedorAtaques");

const sectionVerMapa = document.getElementById("mapaContainer");
const mapa = document.getElementById("mapa");

let ataqueJugador = []
let ataqueEnemigo = []
let miPokemon
let pokemonEnemigo
let vidaJugador = 3;
let vidaEnemigo = 3;
let inputSquirtle
let inputBulvasaur 
let inputCharmander 
let pokemones = []
let pokemonesRivales =[]
let opcionDePokemones
let opcionDePokemonesRivales
let ataquesPokemon
let ataquesPokemonEnemigo
let botonFuego
let botonAgua 
let botonHierba
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0;
let victoriasEnemigo = 0;


class Pokemon {
    constructor(nombre,foto,vida){
        this.nombre =nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}


let squirtle = new Pokemon("Squirtle","./assets/pngfind.com-squirtle-png-1150716.png",5)
let bulvasaur = new Pokemon("Bulvasaur","./assets/Pokemon-Bulbasaur-PNG-File.png",5)
let charmander = new Pokemon("Charmander","./assets/clipart2441515.png",5)


squirtle.ataques.push(
    { nombreAtaque: "💧", id:"boton-agua"},
    { nombreAtaque: "💧", id:"boton-agua"},
    { nombreAtaque: "💧", id:"boton-agua"},
    { nombreAtaque: "🔥", id:"boton-fuego"},
    { nombreAtaque: "🌱", id:"boton-hierba"},
)

bulvasaur.ataques.push(
    { nombreAtaque: "🌱", id:"boton-hierba"},
    { nombreAtaque: "🌱", id:"boton-hierba"},
    { nombreAtaque: "🌱", id:"boton-hierba"},
    { nombreAtaque: "💧", id:"boton-agua"},
    { nombreAtaque: "🔥", id:"boton-fuego"},  
)

charmander.ataques.push(
    { nombreAtaque: "🔥", id:"boton-fuego"},
    { nombreAtaque: "🔥", id:"boton-fuego"},
    { nombreAtaque: "🔥", id:"boton-fuego"},
    { nombreAtaque: "💧", id:"boton-agua"},
    { nombreAtaque: "🌱", id:"boton-hierba"},
)


pokemones.push(squirtle,bulvasaur,charmander)

class PokeRival {
    constructor(nombre,foto,vida){
        this.nombre =nombre
        this.foto = foto
        this.vida = vida
        this.ataquesRival = []
    }
}

let abra = new PokeRival("Abra","https://i.pinimg.com/originals/eb/6d/34/eb6d34e684214cc5de091f88fb108ba4.png",5)
let kadabra = new PokeRival("Kadabra","https://upload.wikimedia.org/wikipedia/it/b/b0/Kadabra.png",5)
let alakasam = new PokeRival("Alakasam","https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png",5)

abra.ataquesRival.push(
    { nombreAtaque: "AGUA💧", id:"boton-agua"},
    { nombreAtaque: "AGUA💧", id:"boton-agua"},
    { nombreAtaque: "AGUA💧", id:"boton-agua"},
    { nombreAtaque: "FUEGO🔥", id:"boton-fuego"},
    { nombreAtaque: "HIERBA🌱", id:"boton-hierba"},
)

kadabra.ataquesRival.push(
    { nombreAtaque: "HIERBA🌱", id:"boton-hierba"},
    { nombreAtaque: "HIERBA🌱", id:"boton-hierba"},
    { nombreAtaque: "HIERBA🌱", id:"boton-hierba"},
    { nombreAtaque: "AGUA💧", id:"boton-agua"},
    { nombreAtaque: "FUEGO🔥", id:"boton-fuego"},  
)

alakasam.ataquesRival.push(
    { nombreAtaque: "FUEGO🔥", id:"boton-fuego"},
    { nombreAtaque: "FUEGO🔥", id:"boton-fuego"},
    { nombreAtaque: "FUEGO🔥", id:"boton-fuego"},
    { nombreAtaque: "AGUA💧", id:"boton-agua"},
    { nombreAtaque: "HIERBA🌱", id:"boton-hierba"},
)

pokemonesRivales.push(abra,kadabra,alakasam)
console.log(pokemonesRivales)


function iniciarJuego(){
     sectionAttack.style.display = "none"
    pokemones.forEach((pokemon) => {
        opcionDePokemones = ` 
        <input type="radio" name = "PoKéMoN" id=${pokemon.nombre}>
        <label for=${pokemon.nombre} class="tarjetaPokemon">
            <p>${pokemon.nombre}</p>
            <img class="imgSquirtle" src=${pokemon.foto} alt=${pokemon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDePokemones;
        inputSquirtle = document.getElementById("Squirtle")
        inputBulvasaur = document.getElementById("Bulvasaur")
        inputCharmander = document.getElementById("Charmander")
    });
        
    botonReiniciar.style.display = "none"
    botonPokemonJugador.addEventListener("click",seleccionarPokemonJugador);
    botonReiniciar.addEventListener("click",reiniciarJuego)
}

function aleatorio (min, max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

function seleccionarPokemonJugador(){
    sectionAttack.style.display = "flex"

    if(inputSquirtle.checked){
        spanPokemonJugador.innerHTML = inputSquirtle.id;
        miPokemon = inputSquirtle.id
        imagenPokemon.style.backgroundImage = "url(./assets/pngfind.com-squirtle-png-1150716.png)"
        sectionSelectPokemon.style.display = "none"      
    }
    else if(inputBulvasaur.checked){
        spanPokemonJugador.innerHTML = inputBulvasaur.id
        miPokemon = inputBulvasaur.id
        imagenPokemon.style.backgroundImage = "url(./assets/Pokemon-Bulbasaur-PNG-File.png)"
        sectionSelectPokemon.style.display = "none"
    }
    else if(inputCharmander.checked){
        spanPokemonJugador.innerHTML = inputCharmander.id
        miPokemon = inputCharmander.id
        imagenPokemon.style.backgroundImage = "url(./assets/clipart2441515.png)"
        sectionSelectPokemon.style.display = "none"
    }
    else{
        alert("Selecciona un Pokemon por favor")
        sectionAttack.style.display = "none"
        sectionVerMapa.style.display= "none"
    }
    
    extraerAtaques(miPokemon)
    seleccionarPokemonEnemigo()
}

function extraerAtaques(miPokemon){
    let ataques
    for (let i = 0; i < pokemones.length; i++) {
        if(miPokemon === pokemones[i].nombre){
            ataques = pokemones[i].ataques
        }    
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesPokemon = `
        <button class="botonAtaque BAtaque" id=${ataque.id}>${ataque.nombreAtaque}</button>
        `
        contenedorAtaques.innerHTML += ataquesPokemon
    });
     botonFuego = document.getElementById("boton-fuego");
     botonAgua = document.getElementById("boton-agua");
     botonHierba= document.getElementById("boton-hierba");
     botones = document.querySelectorAll(".BAtaque")

     console.log(botones)
}


function seleccionarPokemonEnemigo(){
    let pokemonAleatorio = aleatorio(0,pokemonesRivales.length-1);
    
        spanPokemonEnemigo.innerHTML=pokemonesRivales[pokemonAleatorio].nombre;
        pokemonEnemigo = pokemonesRivales[pokemonAleatorio].nombre;

        pokemonesRivales.forEach((pokeke) => {
            opcionDePokemonesRivales = ` 
            <img class="imgene" src=${pokemonesRivales[pokemonAleatorio].foto} alt="">
            `
            imagenPokemonenemigo.innerHTML = opcionDePokemonesRivales});
        ataquesPokemonEnemigo = pokemonesRivales[pokemonAleatorio].ataquesRival;

            secuenciaAtaque() 
}

function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if(e.target.textContent=="🔥"){
                ataqueJugador.push("FUEGO🔥")
                console.log(ataqueJugador)
                boton.style.background = "black"
                boton.disabled = true
            } else if (e.target.textContent =="💧"){
                ataqueJugador.push("AGUA💧")
                console.log(ataqueJugador)
                boton.style.background = "black"
                boton.disabled = true
            } else {
                ataqueJugador.push("HIERBA🌱")
                console.log(ataqueJugador)
                boton.style.background = "black"
                boton.disabled = true
            }
            ataqueEnemigoAleatorio()
        })
    });   
}

function ataqueEnemigoAleatorio(){
    ataqueAleatorio = aleatorio(0,ataquesPokemonEnemigo.length-1);

    if(ataqueAleatorio == 0 || ataqueAleatorio==1){
        ataqueEnemigo.push("FUEGO🔥")
    }
    else if(ataqueAleatorio == 3 || ataqueAleatorio==4 ){  
        ataqueEnemigo.push("AGUA💧")
    }
    else{
        ataqueEnemigo.push("HIERBA🌱")
    }
    iniciarPelea() 
    console.log(ataqueEnemigo)
}

function iniciarPelea(){
    if(ataqueJugador.length === 5){
        resultadoBatalla()
    }
}

function indexAmbosOponentes(jugador,enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function resultadoBatalla(){
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes(index,index)
            crearMensaje("Empataron este turno")

        }else if(ataqueJugador[index] ==="FUEGO🔥" && ataqueEnemigo[index] === "HIERBA🌱"){
            indexAmbosOponentes(index,index)
            crearMensaje("Tu "+ miPokemon+" gana este turno.")
            victoriasJugador = victoriasJugador + 1;
            spanVidaJugador.innerHTML = victoriasJugador;
        } 
        else if(ataqueJugador[index]==="AGUA💧" && ataqueEnemigo[index]==="FUEGO🔥"){
            indexAmbosOponentes(index,index)
            crearMensaje("Tu "+ miPokemon+" gana este turno.")
            victoriasJugador = victoriasJugador + 1;
            spanVidaJugador.innerHTML = victoriasJugador;
        }
        else if(ataqueJugador[index]==="HIERBA🌱" && ataqueEnemigo[index]==="AGUA💧"){
            indexAmbosOponentes(index,index)
            crearMensaje("Tu "+ miPokemon+" gana este turno.")
            victoriasJugador = victoriasJugador + 1;
            spanVidaJugador.innerHTML = victoriasJugador;
        }
        else{
            indexAmbosOponentes(index,index)
            crearMensaje("El pokemon enemigo gana este turno 💀")
            victoriasEnemigo = victoriasEnemigo + 1;
            spanVidaEnemigo.innerHTML = victoriasEnemigo;
        }
    }       
    victorias()
}

function crearMensaje(miResultado){
    let nuevoparrafoAtaqueJugador = document.createElement("p")
    let nuevoparrafoAtaqueEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = miResultado
    nuevoparrafoAtaqueJugador.innerHTML = "Uso "+ indexAtaqueJugador
    nuevoparrafoAtaqueEnemigo.innerHTML = "Uso " + indexAtaqueEnemigo
   
    parrafoAtaqueJugador.appendChild(nuevoparrafoAtaqueJugador)
    parrafoAtaqueEnemigo.appendChild(nuevoparrafoAtaqueEnemigo)
}

function victorias(){
    if(victoriasJugador === victoriasEnemigo){   
        crearMensajeFinal("TU "+miPokemon+ "y" +pokemonEnemigo +" EMPATAN")
    }else if (victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("😁 FELICIDADES!! TU "+miPokemon +" GANA!!!")
    }else {
        crearMensajeFinal("😩 DERROTA!! ," +pokemonEnemigo +" enemigo GANA!!!")
    }
}

function crearMensajeFinal(resultadoVida){
    
    sectionMensajes.innerHTML = resultadoVida
  
    botonReiniciar.style.display = "block"
}

function reiniciarJuego(){
    location.reload()
}

window.addEventListener("load", iniciarJuego);
