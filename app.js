function Cake(Title,Price,Description,Image){
    this.title = Title,
    this.Price = Price,
    this.Description = Description,
    this.image = Image

}

let display = document.querySelector("main");
let obj;

    let arr = [];
    let cards = document.querySelector(".cards")
    const html = (title, img,price,description) =>{
       return  `
       <div class="card">
  <p class="heading">
    ${title}
  </p>
  <p>
    ${price}
  </p>
  <p>${description}
</p>
<img src="${img}"/>
</div>`
    }
    fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>{console.log(json); for(let i = 0; i < 20; i++) {obj= new Cake(json[i].title,json[i].price ,json[i].description, json[i].image);
                     arr.push(obj); }
                     console.log(arr)
                     arr.map(element => {
                        console.log(element)
                        cards.innerHTML += html(element.title, element.image,element.Price,element.Description);
                     })
                     
                    })



                // let o = new Cake(json[0].title,json[0].price ,json[0].description, json[0].image); console.log(o)
// const render = Cake(Cake => 20).map(Cake =>{
//     return '<div class= "card">' + '<span>' + Cake + '</span>' + '</div>';
// });


// ---------Task2----htmlsct-------
