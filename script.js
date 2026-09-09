






// ==========================================
// PRODUCT LIST
// ==========================================

const products = [

    {
        id: 1,
        name: "iqoo neo 9 pro ",
        price: "₹2,999",
        image: "IMG_2026EE.png",
         delivery:
           "Delivery in 7 Days"
    },


    {
        id: 2,
        name: "Samsung S23",
        price: "₹4,499",
        image: "img_2026c.png"
    },


    {
        id: 3,
        name: "realme p4 lite 5g",
        price: "₹3,999",
        image: "IMG_2026ggg.jpg"
    },


    {
        id: 4,
        name: "realme p3 ultra 5g",
        price: "₹2,499",
        image: "IMG_2026f.jpg"
    },


    {
        id: 5,
        name: "zebronics",
        price: "₹900",
        image: "IMG_20260808_201845.jpg"
    },


    {
        id: 6,
        name: "oppo k14 5g",
        price: "₹2,350",
        image: "IMG_20260808_203558.jpg"
    },


    {
        id: 7,
        name: "boAt",
        price: "₹399",
        image: "IMG_20260808_204142.jpg"
    },


    {
        id: 8,
        name: "bAot",
        price: "₹399",
        image: "IMG_20260808_213358.jpg"
    },


    {
        id: 9,
        name: "UIC",
        price: "₹1,800",
        image: "9.jpg"
    },


    {
        id: 10,
        name: "sumsung glaxy s23 fe",
        price: "₹2,800",
        image: "10.jpg"
    },

{
        id: 11,
        name: "bencky",
        price: "₹1000",
        image: "11.jpg"
    },


    {
        id: 12,
        name: "govo",
        price: "₹1,500",
        image: "12.jpg"
    },


    {
        id: 13,
        name: "zebronics axon 200",
        price: "₹900",
        image: "13.jpg"
    },

{
        id: 14,
        name: "mivi",
        price: "₹1600",
        image: "14.jpg"
    },


    {
        id: 15,
        name: "govo gosurround",
        price: "₹2,000",
        image: "15.jpg"
    },


    {
        id: 16,
        name: "GAMEING PREMIUM I5 2nd /16/512",
        price: "₹2,799",
        image: "16.jpg"
    },

{
        id: 17,
        name: "sailcom -i3processors-8 gb-500gb",
        price: "₹3,499",
        image: "17.jpg"
    },


    {
        id: 18,
        name: "triggr",
        price: "₹600",
        image: "18.jpg"
    },


    {
        id: 19,
        name: "triggr",
        price: "₹500",
        image: "19.jpg"
    },

{
        id: 20,
        name: "accer aspire 15",
        price: "₹6,000",
        image: "20.jpg"
    },


    {
        id: 21,
        name: "asus choromebook",
        price: "₹3,000",
        image: "21.jpg"
    },


    {
        id: 22,
        name: "primebook",
        price: "₹3,500",
        image: "22.jpg"
    },

  {
        id: 23,
        name: "hp 15(i5/14th gen)",
        price: "₹12,000",
        image: "23.jpg"
    },


    {
        id: 24,
        name: "wilker intel",
        price: "₹2,700",
        image: "24.jpg"
    },


    {
        id: 25,
        name: "Galaxy M15 Prime 5G",
        price: "₹29,999",
        image: "25.jpg"
    },
{
        id: 26,
        name: "oppo k14 5g",
        price: "₹3,500",
        image: "26.jpg"
    },


    {
        id: 27,
        name: "iqoo z10 lite 5g",
        price: "₹2,800",
        image: "27.jpg"
    },


    {
        id: 28,
        name: "vivo t4 lite 5g",
        price: "₹2,500",
        image: "28.jpg"
    },
{
        id: 29,
        name: "goboult",
        price: "₹1,500",
        image: "29.jpg"
    },


    {
        id: 30,
        name: "accer one 14 amd",
        price: "₹3,200",
        image: "30.jpg"
    },


    {
        id: 31,
        name: "appo a6 pro 5g",
        price: "₹5,000",
        image: "31.jpg"
    },

{
        id: 32,
        name: "ai+ nova 2 ultra 5g",
        price: "₹2,500",
        image: "32.jpg"
    },


    {
        id: 33,
        name: "Samsung galaxy f70 pro 5g",
        price: "₹3,500",
        image: "33.jpg"
    },


    {
        id: 34,
        name: "lucifer watch",
        price: "₹399",
        image: "34.jpg"
    },

{
        id: 35,
        name: "american viber watch",
        price: "₹399",
        image: "35.jpg"
    },


    {
        id: 36,
        name: "oppo find x9s",
        price: "₹3,000",
        image: "36.jpg"
    },


    {
        id: 37,
        name: "vivo x300 fe ",
        price: "₹4,000",
        image: "37.jpg"
    },
  
{
        id: 38,
        name: "realme 16x 5g",
        price: "₹2,800",
        image: "38.jpg"
    },


    {
        id: 39,
        name: "apple iPhone 17pro max",
        price: "₹7,000",
        image: "39.jpg"
    },


    {
        id: 40,
        name: "sumsung s25 5g",
        price: "₹5,000",
        image: "40.jpg"
    },


  
];



// ==========================================
// PRODUCTS SHOW KARNA
// ==========================================

const productBox =
    document.getElementById("products");


products.forEach(function(product) {


    productBox.innerHTML += `

        <div class="product">


            <!-- PRODUCT IMAGE -->

            <a href="product.html?id=${product.id}">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="this.style.display='none'"
                >

            </a>


            <!-- PRODUCT NAME -->

            <h3>
                ${product.name}
            </h3>


            <!-- PRODUCT PRICE -->

            <p>
                ${product.price}
            </p>




                <div class="delivery">
    🚚 ${product.delivery || " Delivery in 7-10 Days"}
</div>

            


            <!-- BUY NOW -->

            <a href="product.html?id=${product.id}">

                <button>
                    Buy Now
                </button>

            </a>


        </div>

    `;

});



// ==========================================
// SWIPER
// ==========================================

var swiper = new Swiper(".mySwiper", {

    loop: true,


    autoplay: {

        delay: 3000,

        disableOnInteraction: false

    },


    pagination: {

        el: ".swiper-pagination",

        clickable: true

    }

});

  

// ===============================
// LIVE BOX RED / GREEN
// ===============================

const liveBox = document.querySelector(".live-box");
const liveDot = document.querySelector(".live-dot");
const liveText = document.querySelector(".live-text");

if (liveBox && liveDot && liveText) {

    function changeLiveColor() {

        // GREEN
        liveBox.style.borderColor = "green";
        liveText.style.color = "green";
        liveDot.style.backgroundColor = "green";

        // 1 second ke baad RED
        setTimeout(() => {

            liveBox.style.borderColor = "red";
            liveText.style.color = "red";
            liveDot.style.backgroundColor = "red";

        }, 1000);
    }

    // Turant start
    changeLiveColor();

    // Har 2 second mein repeat
    setInterval(changeLiveColor, 2000);
}



