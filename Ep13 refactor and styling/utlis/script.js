var Title = window.document.getElementById('title');
var Img = window.document.getElementById('Image');
var SearchInput = document.getElementById('SearchInput')


SearchInput.addEventListener('keydown',(event)=>{
    //    console.log('my value',SearchInput.value)
       if(event.key === 'Enter') {
            getCaracter(SearchInput.value)
       }
       
})


let UrlBase = 'https://api.jikan.moe/v4/characters'

async function getCaracter(SearchTerm){
    var ListCaracters = document.getElementById('ListCaracters')
    if(SearchTerm){
        UrlBase +=`?q=${SearchTerm}`  
    }
      const request = await  fetch(UrlBase)
      const response  = await request.json()
    // console.log(response.data)
        const caracters = response.data
    const CaracterHtml =  caracters.map((carcater) =>(
            `<div class="CartAnime" data-id=${carcater.mal_id}>
            <img id="Image" src="${carcater.images.webp.image_url}" alt="picOfCaracter" />
            <h2 id="title">${carcater.name}</h2>
        </div>
            ` 
     ))

        ListCaracters.innerHTML = CaracterHtml;
        const CartAnime = document.querySelectorAll('.CartAnime')
        
        CartAnime.forEach((carater)=>{
                carater.addEventListener('click',()=>{
                    const caracterID = carater.dataset.id
                    // make call information from APi
                    caracterInformation(caracterID)
                })
        })
}


getCaracter()





async function caracterInformation(caracterID){
    // https://api.jikan.moe/v4/characters/17
    const request = await fetch(UrlBase+`/${caracterID}`)
    const data = await request.json()
    const carater = data.data

    console.log(carater)
    const caracterInfo = `
    <div class='ShowCaracterInfo'>
        <div class='mainImage'> 
        <img src=${carater.images.webp.image_url} alt='' />
        </div>
        <div class='infoCaracter'>
            <h1><span>English Name :</span> ${carater.name} </h1>
            <h1><span>name_kanji :</span> ${carater.name_kanji}</h1>
            <p><span>favorites: </span>${carater.favorites}</p>
            <p><span>About:</span>${carater.about}</p>
        </div>
    </div>
    `
    const content = document.getElementById('content')

    content.innerHTML = caracterInfo;


    //  modale here
    const modalContent = document.getElementById('modalContent')

    modalContent.style.display = 'block'

    modalContent.addEventListener('click', (event)=>{
        if(event.target === modalContent ){
            modalContent.style.display = 'none'

        }
    })
}













