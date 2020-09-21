"use strict";

function Vehicle(name, brand, price) {
  this.name = name;
  this.brand = brand;
  this.price = price;

  this.getDiscountedPrice = function (per) {
    var discount = this.price * per / 100;
    this.price = this.price + discount;
  };
}

Vehicle.prototype.hasAccessories = true;

Vehicle.prototype.showAccessories = function () {
  console.log('AC', 'console', 'musicsystem');
};

var vehicle = new Vehicle("XUV", "Mahindra", 1400000);
console.log(vehicle);