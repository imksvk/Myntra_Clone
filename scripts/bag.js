let bagitemsobjects;
onLOad();

function onLOad(){
    loadbagitems();
    displaybagitems();
    displaybagicon();
}

function loadbagitems(){
    console.log(bagitems)
 bagitemsobjects  =  bagitems.map(itemid=>{
        for(let i=0; i<items.length; i++){
            if(items[i].id == itemid){
                return items[i];
            }
        }
    })
    console.log(bagitemsobjects)
}


function displaybagitems(){
    let containerelement = document.querySelector(".bagitemscontainer");
    innerhtml = '' ;
    bagitemsobjects.forEach(bagitem => {
        innerhtml += generateitemhtml(bagitem);
    });
    containerelement.innerHTML = innerhtml;
}


function removefrombag(itemid){
  bagitems =   bagitems.filter(bagitemid => bagitemid != itemid);
  localStorage.setItem('bagitems',JSON.stringify(bagitems));
  loadbagitems();
  displaybagicon();
  displaybagitems();
}


function generateitemhtml(item){

    return `
    <div class="bagitemcontainer">
            <div class="itemleftpart">
              <img class="bagitemimg" src="../${item.image}">
            </div>
            <div class="itemrightpart">
              <div class="company">${item.company}</div>
              <div class="itemname">${item.item_name}</div>
              <div class="pricecontainer">
                <span class="currentprice">Rs ${item.current_price}</span>
                <span class="originalprice">Rs ${item.original_price}</span>
                <span class="discountpercentage">(${item.discount_percentage}% OFF)</span>
              </div>
              <div class="returnperiod">
                <span class="returnperioddays">${item.return_period} days</span> return available
              </div>
              <div class="deliverydetails">
                Delivery by
                <span class="deliverydetailsdays">${item.delivery_date}</span>
              </div>
            </div>

            <div class="removefromcart" onclick="removefrombag(${item.id})">X</div>
          </div>
    `


}