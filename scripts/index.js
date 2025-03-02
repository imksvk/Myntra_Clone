let itemscontainer = document.querySelector(".itemscontainer");

let innerhtml = '';
items.forEach((item)=>{
    innerhtml += `
<div class="itemcontainer">
    <img class="itemimage" src="${item.image}" alt="">
    <div class="rating"> ${item.rating.stars} ⭐ | ${item.rating.count}</div>
    <div class="companyname">${item.company}</div>
    <div class="itemname">${item.item_name}</div>
    <div class="price">
        <span class="currentprice">RS ${item.current_price}</span>
        <span class="originalprice">Rs ${item.original_price}</span>
        <span class="discount">${item.discount_percentage}% OFF</span>
    </div>
    <button class="btnaddbag">Add to Bag</button>
</div>
`
});

itemscontainer.innerHTML = innerhtml;



















