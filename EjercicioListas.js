
const listaCompras = ["Yerba","Cafe","Jabon","Galletas","Shampoo","Agua"] //Lista de Compras 

listaCompras.unshift("Aceite girasol") //Agrego al principio Aceite


listaCompras.shift("Aceite girasol") // Saco el primer producto Aceite




const pelisFav = [  // Lista de objetos Peliculas 
    {titulo:"Guerra mundial Z" ,director:"Carlos pepe", fecha: new Date("2010-04-12")},
    {titulo:"Avatar", director:"Brad Cooper", fecha: new Date("2000-02-07")},
    {titulo:"Rey Arturo", director:"Antony Perez", fecha: new Date ("2010-07-03")}
]



const pelisFav2 = pelisFav.filter(pelis => pelis.fecha > new Date("2010-01-01")) //Uso el .filter consulto y creo lista si la fecha es mayor a 2010-01-01 



const directores = pelisFav.map( (dir)=>{return dir.director}) //creo lista con los directores de las peliculas


const titulos = pelisFav.map( (tit)=>{return tit.titulo}) //creo lista con los titulos de las peliculas


const directoresYtitulos = directores.concat(titulos) // Concateno lista directores mas lista de titulos 


const directoreYtitulos2=[...directores,...titulos] //Concateno lista utilizando factor propagacion


