// --- GET PRODUCT INFO FROM URL ---
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get("name");
const productPrice = urlParams.get("price");
const productImg = urlParams.get("img");
const model = urlParams.get("model");

// --- FILL PAGE ---
document.getElementById("product-name").textContent = productName;
document.getElementById("product-price").textContent = "$" + productPrice;
document.getElementById("product-img").src = productImg;

// --- BLOCK CUSTOM CARD PAYMENT ---
document.getElementById("pay-btn").addEventListener("click", () => {
  const name = document.getElementById("card-name").value.trim();
  const number = document.getElementById("card-number").value.trim();
  const exp = document.getElementById("card-exp").value.trim();
  const cvc = document.getElementById("card-cvc").value.trim();

  if (!name || !number || !exp || !cvc) {
    alert("Please fill in all card information before paying.");
    return;
  }

  alert("This card form is not connected to real payments. Please use PayPal.");
});

// --- PAYPAL BUTTON ---
paypal.Buttons({
  createOrder: function(data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: { value: productPrice },
        description: productName
      }]
    });
  },

  onApprove: function(data, actions) {
    return actions.order.capture().then(function(details) {

      // --- PAYMENT FLAG ---
      localStorage.setItem("paid", "true");

      // --- REDIRECT TO DOWNLOAD PAGE WITH MODEL FILE ---
      window.location.href = "download.html?model=" + encodeURIComponent(model);
    });
  },

  onCancel: function() {
    alert("Payment canceled. You must complete payment to access the product.");
  }
}).render("#paypal-button-container");
