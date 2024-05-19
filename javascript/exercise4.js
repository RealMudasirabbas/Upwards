const shipments = {
    standard: {
        leadTime: 7,
        fee: 2,
    },
    express: {
        leadTime: 3,
        fee: 4.5,
    },
};

const onChangeBtn = document.getElementById("change-btn");
const dateObj = new Date();
const date = dateObj.toISOString();
const slicedDate = date.slice(0, 10);
const expectedDateForStandard = shipments.standard.leadTime + dateObj.getDate();
const expectedDateForExpress = shipments.express.leadTime + dateObj.getDate();
const newSlicedDateForStandard = date.slice(0, 8) + expectedDateForStandard;
const newSlicedDateForExpress = date.slice(0, 8) + expectedDateForExpress;

const select_options = document.getElementById("choose_options");

const orderDate = document.getElementById("order-date");
const deliveryDate = document.getElementById("delivery");
const deliveryFee = document.getElementById("delivery-fee");

select_options.addEventListener("change", () => {
    let index = select_options.selectedIndex;

    if (index === 0) {
        orderDate.innerHTML = "";
        deliveryDate.innerHTML = "";
        deliveryFee.innerHTML = "";
    } else if (index === 1) {
        orderDate.innerHTML = "Order Date: " + slicedDate;
        deliveryDate.innerHTML =
            "Expected Date Of Delivery: " + newSlicedDateForStandard;
        deliveryFee.innerHTML = "Delivery Fee: $" + shipments.standard.fee;
    } else if (index === 2) {
        orderDate.innerHTML = "Order Date: " + slicedDate;
        deliveryDate.innerHTML =
            "Expected Date Of Delivery: " + newSlicedDateForExpress;
        deliveryFee.innerHTML = "Delivery Fee: $" + shipments.express.fee;
    } else {
        orderDate.innerHTML = "";
        deliveryDate.innerHTML = "";
        deliveryFee.innerHTML = "";
    }
});

// Question No 2

const phones = {
    iphone_se_red: {
        name: "iPhone SE 64GB Red",
        price: "450",
        currency: "US$",
        imageUrl: "iPhone-SE-64GB-Red.webp",
    },
    iphone_11_black: {
        name: "iPhone 11 128GB Black",
        price: "869",
        currency: "EUR",
        imageUrl: "iPhone 11 128GB Black.jpg",
    },
    iphone_8_plus_silver: {
        name: "iPhone 8 Plus 64GB Silver",
        price: "519",
        currency: "US$",
        imageUrl: "iPhone 8 Plus 64GB Silver.png",
    },
};

const productImg = document.getElementById("product_image");
const phoneName = document.getElementById("phone_name");
const phonePrice = document.getElementById("phone_price");
const options = document.getElementsByName("product");
console.log(options);

function updateDetails() {
    if (options[0].checked) {
        productImg.src = phones.iphone_se_red.imageUrl;
        phoneName.innerHTML = phones.iphone_se_red.name;
        phonePrice.innerHTML =
            phones.iphone_se_red.currency + " " + phones.iphone_se_red.price;
    } else if (options[1].checked) {
        productImg.src = phones.iphone_11_black.imageUrl;
        phoneName.innerHTML = phones.iphone_11_black.name;
        phonePrice.innerHTML =
            phones.iphone_11_black.currency +
            " " +
            phones.iphone_11_black.price;
    } else if (options[2].checked) {
        productImg.src = phones.iphone_8_plus_silver.imageUrl;
        phoneName.innerHTML = phones.iphone_8_plus_silver.name;
        phonePrice.innerHTML =
            phones.iphone_8_plus_silver.currency +
            " " +
            phones.iphone_8_plus_silver.price;
    } else {
        console.log("I am a Rebel");
    }
}

for (let i = 0; i < options.length; i++) {
    
    options[i].addEventListener("change",updateDetails)
}

updateDetails()