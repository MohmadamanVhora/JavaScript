function validation() {
  var productId = document.getElementById("product-id").value;
  var productName = document.getElementById("product-name").value;
  var image = document.getElementById("product-image").value;
  var price = document.getElementById("product-price").value;
  var description = document.getElementById("product-description").value;

  if (productId == "") {
    alert("ID is required");
    return false;
  }

  if (productName == "") {
    alert("Name is required");
    return false;
  }

  if (price == "") {
    alert("Price is required");
    return false;
  }

  if (description == "") {
    alert("Desciption is required");
    return false;
  }
  return true;
}

function showProduct() {
  var productList;
  if (localStorage.getItem("productList") == null) {
    productList = [];
  } else {
    productList = JSON.parse(localStorage.getItem("productList"));
  }
  displayProduct(productList);
}

document.onload = showProduct();

function addProduct() {
  if (validation() == true) {
    var productId = document.getElementById("product-id").value;
    var productName = document.getElementById("product-name").value;
    var image = document.getElementById("product-image").value;
    var price = document.getElementById("product-price").value;
    var description = document.getElementById("product-description").value;

    var productList;
    if (localStorage.getItem("productList") == null) {
      productList = [];
    } else {
      productList = JSON.parse(localStorage.getItem("productList"));
    }

    productList.push({
      productId: productId,
      productName: productName,
      image: image,
      price: price,
      description: description,
    });

    localStorage.setItem("productList", JSON.stringify(productList));
    showProduct();
    clearInput();
  }
}

function deleteProduct(index) {
  var productList;
  if (localStorage.getItem("productList") == null) {
    productList = [];
  } else {
    productList = JSON.parse(localStorage.getItem("productList"));
  }

  productList.splice(index, 1);
  localStorage.setItem("productList", JSON.stringify(productList));
  showProduct();
}

function updateProduct(index) {
  document.getElementById("add").style.display = "none";
  document.getElementById("update").style.display = "block";

  var productList;
  if (localStorage.getItem("productList") == null) {
    productList = [];
  } else {
    productList = JSON.parse(localStorage.getItem("productList"));
  }

  document.getElementById("product-id").value = productList[index].productId;
  document.getElementById("product-name").value = productList[index].productName;
  document.getElementById("product-image").value = productList[index].image;
  document.getElementById("product-price").value = productList[index].price;
  document.getElementById("product-description").value = productList[index].description;

  document.getElementById("update").onclick = function () {
    if (validation() == true) {
      productList[index].productId = document.getElementById("product-id").value;
      productList[index].productName = document.getElementById("product-name").value;
      productList[index].image = document.getElementById("product-image").value;
      productList[index].price = document.getElementById("product-price").value;
      productList[index].description = document.getElementById("product-description").value;

      localStorage.setItem("productList", JSON.stringify(productList));
      showProduct();
      clearInput();

      document.getElementById("add").style.display = "block";
      document.getElementById("update").style.display = "none";
    }
  };
}

function clearInput() {
  document.getElementById("product-id").value = "";
  document.getElementById("product-name").value = "";
  document.getElementById("product-image").value = "";
  document.getElementById("product-price").value = "";
  document.getElementById("product-description").value = "";
}

function filterProducts() {
  const filterValue = document.getElementById("filter-product-id").value;
  const filterProductList = JSON.parse(localStorage.getItem("productList"));
  const filteredProducts = filterProductList.filter(product => product.productId === filterValue);
  displayProduct(filteredProducts);
}

function sortProducts() {
  const sortCriteria = document.getElementById("sort-criteria").value;
  const sortedProducts = JSON.parse(localStorage.getItem("productList"));

  sortedProducts.sort((a, b) => {
    if (a[sortCriteria] < b[sortCriteria]) {
      return -1;
    }
    if (a[sortCriteria] > b[sortCriteria]) {
      return 1;
    }
    return 0;
  });
  displayProduct(sortedProducts);
}

function displayProduct(products) {
  var html = "";
  products.forEach(function (element, index) {
    html += "<tr>";
    html += "<td>" + element.productId + "</td>";
    html += "<td>" + element.productName + "</td>";
    html += "<td>" + element.price + "</td>";
    html += "<td>" + element.description + "</td>";
    html += `<td> <button onclick='updateProduct(` + index + `)' class="btn btn-warning px-3">Edit</button> <button onclick='deleteProduct(` + index + `)' class="btn btn-danger ms-2">Delete</button></td>`;
    html += "</tr>";
  });
  document.querySelector("#product-table tbody").innerHTML = html;
}
