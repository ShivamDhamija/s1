var ProductShow=document.getElementById("ProductShow");

var productName=document.getElementById("productName");
var description=document.getElementById("productDescription");
var price=document.getElementById("productPrice");
var quantity=document.getElementById("productQuantity");

var products;

function init()
{
   products = getProductsFromStorage();
  if(products.length==0)
  ProductShow.innerHTML="<h1>No Entery...</h1>";
  else
  products.forEach(function(product)
  { 
    appendINProductShow(product)
  })
}

init();

function appendINProductShow(product){
    var div=document.createElement("div");
    var nameLable=document.createElement(("lable"));
    var priceLable=document.createElement(("lable"));
   
    nameLable.innerText="Product Name";
    priceLable.innerText="Product Price";
    
    var nameLableText=document.createElement(("input"));
    var priceLableText=document.createElement(("input"));
   
    nameLableText.value=product.ProductName;
   priceLableText.value=product.ProductPrice;

   nameLableText.setAttribute("readonly",true);
   priceLableText.setAttribute("readonly",true);

   nameLableText.style.backgroundColor="white";
   priceLableText.style.backgroundColor="white";
   
   var showBTN=document.createElement("button");
   
    showBTN.setAttribute("id",product.index);
    
    showBTN.innerText="Description";

    div.appendChild(nameLable);
    div.appendChild(nameLableText);
    nameLable.setAttribute("class","form-label col Margin");
    nameLableText.setAttribute("class","form-control col Margin");

    div.appendChild(priceLable);
     div.appendChild(priceLableText);
    priceLable.setAttribute("class","form-label col Margin");
    priceLableText.setAttribute("class","form-control col Margin");

    div.appendChild(showBTN);
 
    showBTN.setAttribute("class","btn btn-primary Margin");
    showBTN.setAttribute("data-bs-toggle","modal")
    showBTN.setAttribute("data-bs-target","#exampleModal");

    div.setAttribute("class","col-4");

    ProductShow.appendChild(div);

    showBTN.addEventListener("click",function(event){
      var id=event.target.id;

    showDescription(id);
     
 });

}

function showDescription(id){

    products = getProductsFromStorage();
   
    var ind=products.filter(function(e){
         if(e.index==id)
        {
          return e;
        }
        }) ;

    productName.value=ind[0].ProductName;
    description.value=ind[0].ProductDescription;
    price.value=ind[0].ProductPrice;
    quantity.value=ind[0].ProductQuantity;
  
}


function getProductsFromStorage()
{
  var products = localStorage.getItem("products");

  return products ? JSON.parse(products) : [];
}