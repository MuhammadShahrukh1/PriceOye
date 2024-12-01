var mobiles = {
    apple: {
        iphone14: {
            fullName: 'Apple iPhone 14',
            storage: [128, 256, 512],
            price: '274,999',
            color: ['Midnight', 'Purple', 'Blue', 'Red'],
            img: './assests/images/apple-iphone-14card.jpg',
            showCardImg: './assests/images/apple-iphone-14.webp',
            originalPrice: '279,999',
            discount: '8%',
            rating: '5.0',
            person: '3'
        },
        iphone15: {
            fullName: 'Apple iPhone 15',
            storage: [128, 256, 512],
            price: '377,999',
            color: ['Black', 'Blue', 'Yellow'],
            img: './assests/images/',
            showCardImg: './assests/images/apple-iphone-15-card.jpg',
            showCardImg: './assests/images/apple-iphone-15.webp',
            originalPrice: '321,999',
            discount: '8%',
            rating: '5.0',
            person: '6'
        },
        iphone16: {
            fullName: 'Apple iPhone 16',
            storage: [128, 256, 512],
            price: '355,999',
            color: ['Ultramarine', 'Black', 'Teal', 'White'],
            img: './assests/images/apple-iphone-16card.jpg',
            showCardImg: './assests/images/apple-iphone-16.webp',
            originalPrice: '369,999',
            discount: '4%',
            rating: '4.0',
            person: '1'
        },
        iphone16ProMax: {
            fullName: 'Apple iPhone 16 Pro Max',
            storage: ['1TB', '256GB', '512GB'],
            price: '519,999',
            color: ['Black Titanium', 'Desert Titanium', 'White Titanium'],
            img: './assests/images/apple-iphone-16-pro-maxcard.jpg',
            showCardImg: './assests/images/apple-iphone-16-pro-max.webp',
            originalPrice: '540,999',
            discount: '4%',
            rating: '5.0',
            person: '1'
        },
        iphone13: {
            fullName: 'Apple iPhone 13',
            storage: ['128GB', '256GB', '512GB'],
            price: '240,499',
            color: ['Alpine Green', 'Midnight', 'Starlight', 'Blue'],
            img: './assests/images/apple-iphone-13card.jpg',
            showCardImg: './assests/images/apple-iphone-13.webp',
            originalPrice: '274,999',
            discount: '13%',
            rating: '5.0',
            person: '12'
        },
        iphone12: {
            fullName: 'Apple iPhone 12',
            storage: ['64GB', '128GB', '256GB'],
            price: '174,999',
            color: ['Alpine Green', 'Midnight', 'Starlight', 'Blue'],
            img: './assests/images/apple-iphone-12card.jpg',
            showCardImg: './assests/images/apple-iphone-12.webp',
            originalPrice: '200,000',
            discount: '13%',
            rating: '5.0',
            person: '24'
        },
        iphone12Pro: {
            fullName: 'Apple iPhone 12 Pro Max',
            storage: ['128GB', '256GB', '512GB'],
            price: '235,999',
            color: ['Gold', 'Blue', 'Silver', 'Graphite'],
            img: './assests/images/apple-iphone-12-pro-maxcard.jpg',
            showCardImg: './assests/images/apple-iphone-12-pro.webp',
            originalPrice: '279,999',
            discount: '4%',
            rating: '4.7',
            person: '3'
        },
        iphone11: {
            fullName: 'Apple iPhone 11',
            storage: ['64GB', '128GB', '256GB'],
            price: '138,999',
            color: ['Green', 'Purple', 'Yellow', 'Red'],
            img: './assests/images/apple-iphone-xicard.jpg',
            showCardImg: './assests/images/apple-iphone-xi.webp',
            originalPrice: '207,999',
            discount: '33%',
            rating: '4.7',
            person: '151'
        },
    },
    samsung: {
        galaxyA24_4G: {
            fullName: 'Samsung Galaxy A24 4G',
            img: './assests/images/samsung-galaxy-a24-4gcard.jpg',
            showCardImg: './assests/images/samsung-galaxy-a24-4g.webp',
            color: ['Black', 'Light Green', 'Silver'],
            storage: ['128GB - 8GB RAM', '128GB - 6GB RAM'],
            price: '57,499',
            originalPrice: '79,999',
            discount: '28%',
            rating: '4.9',
            person: '178'
        },
        galaxyA55_5G: {
            fullName: 'Samsung Galaxy A55 5G',
            img: './assests/images/samsung-galaxy-a55-5gcard.jpg',
            showCardImg: './assests/images/samsung-galaxy-a55-5g.webp',
            color: ['Awesome Navy', 'Awesome Lemon', 'Awesome Iceblue'],
            storage: '256GB - 8GB RAM',
            price: '122,500',
            originalPrice: '139,999',
            discount: '12%',
            rating: '4.8',
            person: '72'
        },
        galaxyA06: {
            fullName: 'Samsung Galaxy A06',
            img: './assests/images/samsung-galaxy-a06card.jpg',
            showCardImg: './assests/images/samsung-galaxy-a06.webp',
            color: ['Black', 'Light Blue', 'Gold'],
            storage: ['64GB - 4GB RAM', '128GB - 4GB RAM', '128GB - 6GB RAM'],
            price: '23,999',
            originalPrice: '26,999',
            discount: '11%',
            rating: '4.7',
            person: '14'
        },
        galaxyA35_5G: {
            fullName: 'Samsung Galaxy A35 5G',
            img: './assests/images/samsung-galaxy-a35-5gcard.jpg',
            showCardImg: './assests/images/samsung-galaxy-a35-5g.webp',
            color: ['Black', 'Light Blue', 'Gold'],
            storage: ['64GB - 4GB RAM', '128GB - 4GB RAM', '128GB - 6GB RAM'],
            price: '23,999',
            originalPrice: '119,999',
            discount: '17%',
            rating: '4.7',
            person: '22'
        },
        galaxyS22Ultra: {
            fullName: 'Samsung Galaxy S22 Ultra',
            img: './assests/images/samsung-galaxy-s22-ultracard.jpg',
            showCardImg: './assests/images/samsung-galaxy-s22-ultra.webp',
            color: ['Phantom Black', 'Phantom White', 'Green', 'Burgundy'],
            storage: '256GB - 12GB RAM',
            price: '259,999',
            originalPrice: '279,999',
            discount: '8%',
            rating: '5.0',
            person: '3'
        },
        galaxyS24Ultra: {
            fullName: 'Samsung Galaxy S24 Ultra',
            img: './assests/images/samsung-galaxy-s24-ultracard.jpg',
            showCardImg: './assests/images/samsung-galaxy-s24-ultra.webp',
            color: ['titanium Black', 'Titanium Grey', 'Titanium Violet', 'Titanium Yellow'],
            storage: '512GB - 12GB RAM',
            price: '410,999',
            originalPrice: '469,999',
            discount: '13%',
            rating: '4.8',
            person: '44'
        },
    },
    vivo: {
        y03t: {
            fullName: 'Vivo Y03T',
            price: '25,100',
            img: './assests/images/vivo-y03tcard.jpg',
            showCardImg: './assests/images/vivo-y03t.webp',
            color: ['Space Black', 'Gem Green'],
            storage: ['64GB - 4GB RAM', '128GB - 4GB RAM'],
            originalPrice: '27,999',
            discount: '10%',
            rating: '5.0',
            person: '5'
        },
        v40e: {
            fullName: 'Vivo V40e',
            price: '88,999',
            img: './assests/images/vivo-v40ecard.jpg',
            showCardImg: './assests/images/vivo-v40e.webp',
            color: ['Mint Green', 'Royal Bronze'],
            storage: '256GB - 8GB RAM',
            originalPrice: '99,999',
            discount: '11%',
            rating: '5.0',
            person: '1'
        },
        y19s: {
            fullName: 'Vivo Y19s',
            price: '34,299',
            img: './assests/images/vivo-y19scard.jpg',
            showCardImg: './assests/images/vivo-y19s.webp',
            color: ['Black', 'Silver', 'Blue'],
            storage: ['128GB - 4GB RAM', '128GB - 6GB RAM'],
            originalPrice: '38,999',
            discount: '12%',
            rating: '5.0',
            person: '2'
        },
        y21t: {
            fullName: 'Vivo Y21T',
            price: '48,499',
            img: './assests/images/vivo-y21tcard.jpg',
            showCardImg: './assests/images/vivo-y21t.webp',
            color: ['Pearl White', 'Midnight Blue'],
            storage: '128GB - 4GB RAM',
            originalPrice: '79,999',
            discount: '39%',
            rating: '4.8',
            person: '31'
        },
        y22: {
            fullName: 'Vivo Y22',
            price: '30,599',
            img: './assests/images/vivo-y22card.jpg',
            showCardImg: './assests/images/vivo-y22.webp',
            color: ['starlit Blue', 'Metaverse Green'],
            storage: ['64GB - 4GB RAM', '128GB - 4GB RAM'],
            originalPrice: '34,999',
            discount: '8%',
            rating: '5.0',
            person: '3'
        },
    }
}

/* <div class="product">
<div class="content">
    <div class="img">
        <img src="${mobiles[brands][products].showCardImg}" alt="">
    </div>
    <div class="user-rating">
        <div class="user-rating-content">
            <img src="./assests/images/stars.svg" width="10" height="10" alt="">
            <span style="font-size: 1.1rem; ;"> ${mobiles[brands][products].rating} </span>
            <span style="font-size: 10px; ;"> ${mobiles[brands][products].person} Reviews</span>
        </div>
    </div>
    <div class="detail-box">
        <div class="product-name">
            ${mobiles[brands][products].fullName}
        </div>
        <div class="price-box">
            <sup>Rs </sup>
            ${mobiles[brands][products].price}
        </div>
        <div class="price-difference">
            <div class="price-difference-retail">
                <sup>Rs </sup>
                ${mobiles[brands][products].originalPrice}
            </div>
            <div class="price-saving">
                ${mobile[brands][products].discount} OFF
            </div>
        </div>
    </div>
</div>
</div> */
var productContainer = document.getElementById('product-container');
for (var brands in mobiles) {
    for (var products in mobiles[brands]) {
        // console.log(mobiles[brands][products].fullName)
        productContainer.innerHTML += `
        <div class="product">
<div class="content">
    <div class="img">
        <img src="${mobiles[brands][products].showCardImg}" height="120px" width='120px' alt="">
    </div>
    <div class="user-rating">
        <div class="user-rating-content">
            <img src="./assests/images/stars.svg" width="10" height="10" alt="">
            <span style="font-size: 1.1rem; ;"> ${mobiles[brands][products].rating} </span>
            <span style="font-size: 10px; ;"> ${mobiles[brands][products].person} Reviews</span>
        </div>
    </div>
    <div class="detail-box">
        <div class="product-name">
            ${mobiles[brands][products].fullName}
        </div>
        <div class="price-box">
            <sup>Rs </sup>
            ${mobiles[brands][products].price}
        </div>
        <div class="price-difference">
            <div class="price-difference-retail">
                <sup>Rs </sup>
                ${mobiles[brands][products].originalPrice}
            </div>
            <div class="price-saving">
                ${mobiles[brands][products].discount} OFF
            </div>
        </div>
    </div>
</div>
</div>
        `
    }
}




























var brands = document.getElementById('brands');
var model = document.getElementById('model');
// console.log(model.innerHTML = "")
var selectedBrand ='';
var selectedProduct = '';
for (var brand in mobiles) {
    // console.log(brand)
    brands.innerHTML += `<option value='${brand}' class='w-48'>${brand}</option>`
}

function selectbrand() {
    selectedBrand = event.target.value;
    // console.log(model)
    // var model = document.getElementById('model').innerHTML = ""
    model.innerHTML = "";
    // model.innerHTML = "";
    model.innerHTML = `<option disabled selected value="" class="w-64">Select Model</option>`
    // console.log(model)
    for (var products in mobiles[selectedBrand]) {
        // console.log(mobiles[selectedBrand][products].fullName)
        model.innerHTML += `<option value="${mobiles[selectedBrand][products].fullName}" class="w-64">${mobiles[selectedBrand][products].fullName}</option>`
    }
}

function selectModel(){
    selectedProduct = event.target.value;
}

// function submit(){
//     if(selectedBrand.trim() !==''){
//         console.log(selectedBrand)
//         if(selectedProduct.trim() !== ''){
//             console.log(selectedProduct)
//             productContainer.innerHTML = `
//             <div class="flex justify-center items-center w-3/5">
// <div class="flex flex-col">
//     <div class="img">
//         <img src="${mobiles[selectedBrand][products].img}"  alt="">
//     </div>
//     // <div class="user-rating">
//     //     <div class="user-rating-content">
//     //         <img src="./assests/images/stars.svg" width="10" height="10" alt="">
//     //         <span style="font-size: 1.1rem; ;"> ${mobiles[brands][products].rating} </span>
//     //         <span style="font-size: 10px; ;"> ${mobiles[brands][products].person} Reviews</span>
//     //     </div>
//     // </div>
//     <div class="detail-box">
//         <div class="product-name">
//             ${mobiles[selectedBrand][selectedProduct].fullName}
//         </div>
//         <div class="price-box">
//             <sup>Rs </sup>
//             ${mobiles[selectedBrand][selectedProduct].price}
//         </div>
//         // <div class="price-difference">
//         //     <div class="price-difference-retail">
//         //         <sup>Rs </sup>
//         //         ${mobiles[brands][products].originalPrice}
//         //     </div>
//         //     <div class="price-saving">
//         //         ${mobile[brands][products].discount} OFF
//         //     </div>
//         // </div>
//     </div>
// </div>
// </div>
//             `
//         }
//         else{
//             alert('Select Products First')
//         }
//     }
// else{
//     alert('Select Brands First')
// }
// }