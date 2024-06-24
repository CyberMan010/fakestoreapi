function Cake(Title,Price,Description,Image){
    this.title = Title,
    this.Price = Price,
    this.Description = Description,
    this.image = Image

}

let display = document.querySelector("main");
let obj;

    let arr = [];
    
    fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>{console.log(json); for(let i = 0; i < 20; i++) {obj= new Cake(json[i].title,json[i].price ,json[i].description, json[i].image);
                     arr.push(obj); }
                    })



                // let o = new Cake(json[0].title,json[0].price ,json[0].description, json[0].image); console.log(o)
// const render = Cake(Cake => 20).map(Cake =>{
//     return '<div class= "card">' + '<span>' + Cake + '</span>' + '</div>';
// });


