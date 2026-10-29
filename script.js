// --- PRODUCT LIST ---
const products = [
  {
    id: "character",
    name: "Spider-Man Model #1-Lite",
    price: 9.99,
    thumbnail: "assets/thumbnails/SpiderU.png",
    payhipLink: "https://payhip.com/b/8PQBV", 
    description: "Mainly for starters, but still very useful in productions, and experiments."
  },

  {
    id: "lowpoly-sword",
    name: "Low Poly Sword",
    price: 0.00,
    thumbnail: "assets/thumbnails/Low Poly Sword.png",
    payhipLink: "https://payhip.com/b/IRosc",
    description: "Free model asset."
  },

  {
    id: "shield",
    name: "Captain America Shield",
    price: 14.99,
    thumbnail: "assets/thumbnails/0040.png",
    payhipLink: "https://payhip.com/b/3h9LG",
    description: "Material Detailed Shield."
  },

  {
    id: "heavy-sword",
    name: "Plasma Heavy Weight Sword",
    price: 0.00,
    thumbnail: "assets/thumbnails/Low Poly Heavy Sword.png",
    payhipLink: "https://payhip.com/b/u6BjA",
    description: "Free model asset."
  },

  // ⭐ NEW PRODUCT ADDED ⭐
  {
    id: "ray-sword",
    name: "Ray Powered Sword",
    price: 1.00,
    thumbnail: "assets/thumbnails/Brodie's Sword.png",
    payhipLink: "https://payhip.com/b/zX6xn",
    description: "Copyright asset-Brickwood"
  },

    // ⭐ NEW PRODUCT ADDED ⭐
  {
    id: "Tron-weapon",
    name: "TRON DISK",
    price: 0.00,
    thumbnail: "assets/thumbnails/TronDisk.png",
    payhipLink: "https://payhip.com/b/J4UB5",
    description: "Free model asset."
  },

      // ⭐ NEW PRODUCT ADDED ⭐
  {
    id: "Coffee/Mug/Cup/-Brickwood_Model",
    name: "Brickwood Mug",
    price: 6.00,
    thumbnail: "assets/thumbnails/Brickwood_Mug.png",
    payhipLink: "https://payhip.com/b/HNuw1",
    description: "Special Brickwood Mug/Files"
  },

        // ⭐ NEW PRODUCT ADDED ⭐
  {
    id: "Stand/Test Object/Material Display/-Brickwood_Model",
    name: "Brickwood Material Displayer",
    price: 1.00,
    thumbnail: "assets/thumbnails/CarPaint_Material_Blender.jpg",
    payhipLink: "https://payhip.com/b/MXYmJ",
    description: "Special Brickwood Material Displayer/Files"
  },

          // ⭐ NEW PRODUCT ADDED ⭐
  {
    id: "Object/Brickwood Model/Speaker",
    name: "Logi Speaker",
    price: 0.00,
    thumbnail: "assets/thumbnails/Will's logi Speaker.png",
    payhipLink: "https://payhip.com/b/XGdWr",
    description: "Free model asset."
  },

];

// --- RENDER PRODUCTS ---
const gallery = document.getElementById("gallery");

function renderProducts(list) {
  gallery.innerHTML = "";

  list.forEach((product) => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <img class="card-img" src="${product.thumbnail}" alt="${product.name}" />
      <div class="card-body">
        <h2 class="card-title">${product.name}</h2>
        <p class="card-desc">${product.description}</p>
        <div class="card-footer">
          <span class="price">$${product.price.toFixed(2)}</span>
          <div class="card-actions">
            <button class="btn btn-outline" data-id="${product.id}" data-action="details">
              View Details
            </button>
            <button class="btn btn-primary" data-id="${product.id}" data-action="buy">
              Buy
            </button>
          </div>
        </div>
      </div>
    `;

    gallery.appendChild(card);
  });
}

renderProducts(products);

// --- CLICK HANDLERS ---
gallery.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  const id = btn.getAttribute("data-id");
  const action = btn.getAttribute("data-action");
  const product = products.find((p) => p.id === id);
  if (!product) return;

  if (action === "details") {
    alert(
      `${product.name}\n\n${product.description}\n\nPrice: $${product.price.toFixed(2)}`
    );
  }

  if (action === "buy") {
    // Redirect to Payhip product page
    window.location.href = product.payhipLink;
  }
});

// --- SEARCH ---
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query)
  );

  renderProducts(filtered);
});
