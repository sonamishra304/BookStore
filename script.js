// Open Login Popup
document.querySelector("nav ul li:last-child a").onclick = function () {
    document.getElementById("popup").style.display = "block";
};

// Close Popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Show Register Form
function showRegister() {

    document.getElementById("popupTitle").innerHTML = "Register";

    document.getElementById("popupButton").innerHTML = "Register";

    document.getElementById("switchText").innerHTML =
        'Already have an account? <a href="#" onclick="showLogin()">Login</a>';

}

// Show Login Form
function showLogin() {

    document.getElementById("popupTitle").innerHTML = "Login";

    document.getElementById("popupButton").innerHTML = "Login";

    document.getElementById("switchText").innerHTML =
        'Don\'t have an account? <a href="#" onclick="showRegister()">Register</a>';

}
function searchBooks(){

    let input=document.getElementById("searchBox").value.toUpperCase();

    let books=document.querySelectorAll(".book-card");

    books.forEach(function(book){

        let title=book.querySelector("h3").innerText.toUpperCase();

        if(title.indexOf(input)>-1){

            book.style.display="block";

        }

        else{

            book.style.display="none";

        }

    });

}
// Cart Count

let cart = [];

function addToCart() {

    cart.push("Book");

    document.getElementById("cartCount").innerHTML = cart.length;

    displayCart();

}
function displayCart(){

    let cartItems=document.getElementById("cartItems");

    if(cart.length===0){

        cartItems.innerHTML="<p>No books added yet.</p>";

        return;

    }

    let html="";

    cart.forEach(function(book,index){

        html+=`
        <div class="cart-item">

            <h3>📚 Book ${index+1}</h3>

            <button onclick="removeBook(${index})">
                Remove
            </button>

        </div>
        `;

    });

    cartItems.innerHTML=html;

}

function removeBook(index){

    cart.splice(index,1);

    document.getElementById("cartCount").innerHTML=cart.length;

    displayCart();

}

function wishlist() {
    alert("❤️ Book Added to Wishlist!");
}
function viewBook(title, author, price) {

    alert(
        "📖 Book Details\n\n" +
        "Title: " + title + "\n" +
        "Author: " + author + "\n" +
        "Price: " + price + "\n" +
        "Rating: ⭐⭐⭐⭐☆"
    );

}