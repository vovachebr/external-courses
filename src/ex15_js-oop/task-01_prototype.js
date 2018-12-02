"use strict";

function Sweet(name, weight) {
    this.weight = weight;
    this.name = name;
}

function Gift(sweets) {
    this.sweets = sweets;
}

Gift.prototype.getWeight = function() {
    let totalWeight = 0;
    for (const sweet of this.sweets) {
        totalWeight += sweet.weight;
    }
    return totalWeight;
}

Gift.prototype.sort = function(critery) {
    return this.sweets.sort(critery);
}

Gift.prototype.findByName = function(name) {
    return this.sweets.filter(s => s.name.includes(name));
}

let gift = new Gift([new Sweet("chocolate", 4), new Sweet("lollipop", 8), new Sweet("candy", 3), new Sweet("gum", 5)]);
console.log(gift.sort((a, b) => a.weight - b.weight));
console.log(gift.sort((a, b) => a.name > b.name ? 1 : -1));
console.log(gift.findByName('c'));
console.log(gift.findByName('chocolate'));