const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Analog",
    price: 1190,
    colors: [
      {
        code: "black",
        img: "./img/analog1.jpeg",
      },
      {
        code: "darkred",
        img: "./img/analog2.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "smart",
    price: 1490,
    colors: [
      {
        code: "lightgray",
        img: "./img/smart watch 1.jpg",
      },
      {
        code: "green",
        img: "./img/smartwatch 2.jpeg",
      },
    ],
  },
  {
    id: 3,
    title: "analog and digital",
    price: 1090 ,
    colors: [
      {
        code: "blue",
        img: "./img/analog and digital 1.jpeg",
      },
      {
        code: "black",
        img: "./img/analog and digital 2.jpeg",
      },
    ],
  },
  {
    id: 4,
    title: "fittness",
    price: 1290,
    colors: [
      {
        code: "darkgray",
        img: "./img/fitness1.jpeg",
      },
      {
        code: "pink",
        img: "./img/fitness2.jpeg",
      },
    ],
  },
  {
    id: 5,
    title: "mechanical",
    price: 1990,
    colors: [
      {
        code: "gray",
        img: "./img/mechanical1.jpg",
      },
      {
        code: "black",
        img: "./img/mechanical2.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
  
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

   
    choosenProduct = products[index];

   
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
})