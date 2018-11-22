"use strict";

class Sweet{
    constructor(name,weight){
        this.weight = weight;
        this.name = name;
    }
}

class Gift{
    constructor(sweets=[]) {
        this.sweets = sweets;
    }

    getWeight() {
        let totalWeight = 0;
        for (const sweet of this.sweets) {
            totalWeight += sweet.weight;
        }
        return totalWeight;
    }

    sort(critery){
        return this.sweets.sort(critery);
    }
    findByName(name){
        return this.sweets.filter(s=>s.name.includes(name));
    }
}

let gift = new Gift([new Sweet("chocolate",4),new Sweet("lollipop",8),new Sweet("candy",3),new Sweet("gum",5)]);
let collator = new Intl.Collator(gift);
console.log(gift.sort((a,b)=>a.weight-b.weight));
console.log(gift.sort((a,b)=>a.name > b.name ? 1 : -1 ));
console.log(gift.findByName('c'));
console.log(gift.findByName('chocolate'));