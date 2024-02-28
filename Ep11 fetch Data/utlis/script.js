var Title = window.document.getElementById('title');
var Img = window.document.getElementById('Image');

const UrlBase = 'https://api.jikan.moe/v4/characters'

async function getCaracter(){
    var ListCaracters = document.getElementById('ListCaracters')
      const request = await  fetch(UrlBase)
      const response  = await request.json()
    console.log(response.data)
        const caracters = response.data
    const CaracterHtml =  caracters.map((carcater) =>(
            `<div class="CartAnime">
            <img id="Image" src="${carcater.images.webp.image_url}" alt="picOfCaracter" />
            <h2 id="title">${carcater.name}</h2>
        </div>
            ` 
     ))

        ListCaracters.innerHTML = CaracterHtml   

}


getCaracter()














































//  first Line in javascript => Hello world!
//  print it on console 




//  variables
// Number	Double precision floating-point
// String	Series of characters
// Boolean	true or false
// Array	Ordered sequence of values
// Value	String, Number, Boolean, null etc
// Object	Unordered collection of key/value pairs
// null	Null or Empty







//Arithmetic Operators
// 5 + 5 = 10     // Addition
// 10 - 5 = 5     // Subtraction
// 5 * 10 = 50    // Multiplication
// 10 / 5 = 2     // Division
// 10 % 5 = 0     // Modulo

//[1, 2, 3, 4, 5]
