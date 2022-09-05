
const products = document.getElementById('products');
const cardProducts = document.getElementById('cardProducts').content;
const fragment = document.createDocumentFragment();
const bebida = document.getElementById('bebida');
const bebidaEnerg = document.getElementById('bebidaEnerg');


window.onload = function () {
    fetchData();
}
let catalogo;



document.addEventListener('keyup', e => {
    if (e.target.matches("#buscador")) {

        document.querySelectorAll(".productName").forEach(producto => {
            producto.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?
                producto.classList.remove('d-none') 
                :
                producto.classList.add('d-none');
        })
    }
})

const fetchData = async () => {
    try {
        const response = await fetch('http://localhost:3500/products');
        const data = await response.json();
        catalogo = data;
        // console.log(catalogo);
        showProducts(catalogo);

    } catch (error) {
        console.log(error);
    }
}

// bebida.addEventListener('click', e => {
//    const catergory1 = catalogo.filter(product => {    
//         if (product.category == "1"){
//             return product;
//         }
//     })  
//     showProducts(catergory1);
// })

// bebidaEnerg.addEventListener('click', e => {
//     const catergory2 = catalogo.filter(product => {    
//          if (product.category == "2"){
//              return product;
//          }
//      })  
//      showProducts(catergory2);
//  })

const showProducts = data => {
    data.map(product => {
        cardProducts.querySelector('h5').textContent = product.name;
        cardProducts.querySelector('span').textContent = product.price;
        cardProducts.querySelector('img').setAttribute('src', product.url_image);
        cardProducts.querySelector('p').classList.add (product.category);

        const clone = cardProducts.cloneNode(true);
        fragment.appendChild(clone);
    });
    products.appendChild(fragment);
}


