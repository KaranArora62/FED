let cart2 = [
    {
        productName: "Apple iphone 14",
        price: 58100
    },
    {
        productName: "Samsung S23",
        price: 49500
    },
    {
        productName: "Samsung Book 3",
        price: 21
    },
];

let total = 0;

cart2.forEach((item, index) => {

    let mainDiv = document.createElement("div");
    mainDiv.style.border = "1px solid #ccc"
    mainDiv.style.padding = "10px"
    mainDiv.style.marginBottom = "10px"
    mainDiv.classList.add("product");
    mainDiv.setAttribute("id", `product${index+1}`);
    document.body.appendChild(mainDiv);

    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let button = document.createElement("button");

    mainDiv.appendChild(h2);
    mainDiv.appendChild(p);
    mainDiv.appendChild(button);

    h2.textContent = item.productName;
    p.textContent = `Price: $${item.price}`;
    button.textContent = "Add to Cart";
    button.onclick = function() {
        addToCart(item.productName, item.price);
    };
});

let cartDiv = document.createElement("div");
let h2Cart = document.createElement("h2");
let ul = document.createElement("ul");
let pTotal = document.createElement("p");
document.body.appendChild(cartDiv)
cartDiv.setAttribute("id","cart")
cartDiv.appendChild(h2Cart)
cartDiv.appendChild(ul)
cartDiv.appendChild(pTotal)
h2Cart.textContent = "Shopping Cart"
ul.setAttribute("id","cart-items")
pTotal.setAttribute("id", "cart-total");
pTotal.innerHTML = `Total : $${total}`

let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    total += price;
    updateCartUI();
}

function removeFromCart(index) {
    const removedItem = cart.splice(index, 1)[0];
    total -= removedItem.price;
    updateCartUI();
}

function updateCartUI() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    if (!cartItemsElement || !cartTotalElement) {
        console.log("Cart UI elements not found");
        return;
    }

    cartItemsElement.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartItemsElement.appendChild(li);
    });

    cartTotalElement.textContent = `Total : $${total}`;
}
