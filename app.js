let totalPrice = 0;
var btn = document.getElementById('btn')

function add() {
    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);

    if (!name || isNaN(price) || price <= 0) {
        alert("Please enter a valid item name and price.");
        return;
    }

    const table = document.getElementById('productTable');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td><center>${name}</center></td>
        <td><center>Rs ${price}</center></td>
        <td>
               <button class = "action-btn edit-btn" onclick="editProduct(this)">Edit</button>
               <button class = "action-btn delete-btn" onclick="deleteProduct(this, ${price})">Delete</button>
        </td>
    `;

    table.appendChild(row);

    totalPrice += price;
    updateTotal();

    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
}

function deleteProduct(button, price) {
    const row = button.parentElement.parentElement;
    row.remove();

    totalPrice -= price;
    updateTotal();
}

function editProduct(button) {
    const row = button.parentElement.parentElement;
    const nameCell = row.cells[0];
    const priceCell = row.cells[1];

    const newName = prompt("Edit Product Name:", nameCell.textContent);
    const newPrice = prompt("Edit Product Price:", priceCell.textContent);

    if (newName && !isNaN(newPrice) && parseFloat(newPrice) > 0) {
        totalPrice -= parseFloat(priceCell.textContent);
        nameCell.textContent = newName;
        priceCell.textContent = parseFloat(newPrice);
        totalPrice += parseFloat(newPrice);
        updateTotal();
    } else {
        alert("Invalid inputs. Please try again. Enter any value");
    }
}

function updateTotal() {
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}