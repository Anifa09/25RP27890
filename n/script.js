let images = [
    "image/images.jfif",
    "image/image2.jfif",
    "image/image3.jfif"
];

let index = 0;

setInterval(function() {
    index++;

    if (index >= images.length) {
        index = 0;
    }

    document.getElementById("slide").src = images[index];
}, 3000);

function filterProducts(category) {
    let products = document.querySelectorAll(".product");

    products.forEach(function(product) {
        if (category === "all") {
            product.style.display = "block";
        } else if (product.classList.contains(category)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let product = document.getElementById("product").value;
    let message = document.getElementById("message");

    if (name === "" || email === "" || phone === "" || product === "") {
        message.innerHTML = "Please fill all fields";
        return;
    }

    if (phone.length < 10) {
        message.innerHTML = "Enter a valid phone number";
        return;
    }

    message.innerHTML = "Order sent successfully!";
    document.getElementById("orderForm").reset();
});