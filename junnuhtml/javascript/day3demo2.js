var mobile={
        name:"Iphone XR",
        brand:"Apple",
        price:48000,
        features:{ os: "ios", ram: 4},
        accessories:["charger","headphones"],
    };
var mobile1={
    name:"OnePlus 7 McLaren Edition",
    brand:"OnePlus",
    price:52000,
    features:{ os: "android", ram:6},
    accessories:["WirelessCharger","Earbuds"],
    }
var discountedPrice = function(per){
    console.log('Discounted price is '+this.price*per/100)
}
var print = function(){
    console.log('Name: '+this.name);
    console.log('Brand: '+this.brand);
}
var addAccess = function(acc1,acc2){
    console.log('Acc '+acc1+", "+acc2);
}

print.call(mobile)
discountedPrice.call(mobile,10);
addAccess.call(mobile,'earphones','charger');