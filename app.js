const URL = "https://68dd5b3fd7b591b4b78c316b.mockapi.io/products";

window.addEventListener("DOMContentLoaded", () => {
  displayProducts();
});

function displayProducts() {
  /* *** Fetch products from the API and display them on the webpage 
    {
        "name": "Digital Thermometer",
        "price": "25.00",
        "details": "Accurate and quick temperature measurement device.",
        "imageUrl": "https://loremflickr.com/320/240/thermometer?lock=49",
        "category": "Medical Devices",
        "stock": 80,
        "id": "49"
    },
    *** */
  console.log("Displaying products...");
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const productsContainer = document.querySelector(".products-container");
      const products = data.map(
        (product) => `<div class="product-card">
				<img
					src=${product.imageUrl}
					alt="Product image"
				/>
				<div class="product-info">
					<h3>${product.name}</h3>
					<div class="price">${product.price} LEI</div>
					<div class="buttons">
						<button class="details-btn">Details</button>
						<button class="cart-btn">Add to Cart</button>
					</div>
				</div>
        </div>`
      );
      console.log("Products displayed.", products);
      productsContainer.innerHTML = products.join("");
    })
    .catch((error) => console.error("Error fetching products:", error));
}
