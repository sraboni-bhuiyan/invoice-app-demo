//buyer info
const detailsButton = document.getElementById("detail-submit-btn").addEventListener("click", function () {
  const buyerDetails = document.getElementById("buyer-details-input");
  document.getElementById("buyer-info").innerText = buyerDetails.value;
  buyerDetails.value = "";
});

//items add
const addProductBtn = document.getElementById("add-details-btn").addEventListener("click", function () {
    const infoTable = document.getElementById("info-table");
    const itemName = document.getElementById("item-name-input");
    const itemPrice = document.getElementById("item-price-input");
    const itemQuantity = document.getElementById("item-quantity-input");
  
    if ( itemName.value == "" || itemPrice.value < 0 || itemQuantity.value < 0 || itemPrice.value == "" || itemQuantity.value == "" ) {
      console.log("invalid");
      return;
    }
  
    else {
  
    const totalPrice = parseFloat(itemPrice.value) * parseInt(itemQuantity.value);
    const tr = element("tr");
    const th = element("th");
  
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
  
    td3.classList.add("item-total");
    th.innerText = itemName.value;
    td1.innerText = itemPrice.value;
    td2.innerText = itemQuantity.value;
    td3.innerText = totalPrice;
  
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    infoTable.appendChild(tr);
    totalCalculation();
    }
  });
  
  function element(param) {
    return document.createElement(param);
  }
  
  function totalCalculation() {
    const subTotal = calculateSubTotal();
  
    const subTotalToDisplay = document.getElementById("sub-total");
    subTotalToDisplay.innerText = subTotal;
  
    const tax = subTotal * 0.2;
  
    document.getElementById("tax").innerText = tax.toFixed(2);
    document.getElementById("grand-total").innerText = subTotal + tax;
    document.getElementById("grand-total-2").innerText = subTotal + tax;
  }
  
  function calculateSubTotal() {
    let subTotal = 0;
  
    const cost = document.getElementsByClassName("item-total");
  
    for (let i = 0; i < cost.length; i++) {
      const element = cost[i];
      const price = parseInt(element.innerText);
  
      subTotal = subTotal + price;
    }
  
    return subTotal;
  }