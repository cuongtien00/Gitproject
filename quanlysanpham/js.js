let productList = ["ip X","ip 11", "ip 12"];
function showAllProduct() {
    let content ="";
    for (let i = 0; i < productList.length; i++) {
        content += '<tr>\n' +
            '        <td>'+productList[i]+'</td>\n' +
            '        <th><button onclick="deleteProduct('+i+')">Delete</button></th>\n' +
            '        <th><button onclick="editProduct('+i+')">Edit</button></th>\n' +
            '    </tr>'
    }
    document.getElementById("products").innerHTML = content;
    document.getElementById("result").innerHTML = productList.length + " product"
}
function addProduct() {
    let newP = document.getElementById("addP").value;
    productList.push(newP);
    showAllProduct();
    document.getElementById("addP").value ="";
}
function deleteProduct(index) {
    productList.splice(index,1);
    showAllProduct()
}
function editProduct(index) {
    let newValue = prompt("Moi nhap",productList[index]);
    productList[index]= newValue;
    showAllProduct();
}