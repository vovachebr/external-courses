"use strict";

class Room{
    constructor(devices=[]){
        this.devices = devices;
    }

    toggleDevice(name){
        let device = this.devices.find(d=>d.name === name);
        device.isWork = !device.isWork;
        return device.isWork;
    }

    countPower(){
        let poweredDevices = this.devices.filter(d => d.isWork);   
        let totalPower = 0;
        for (const device of poweredDevices) {
            totalPower+=device.power;
        }
        return totalPower;
    }

    findByName(name){
        return this.devices.filter(d=>d.name.includes(name));
    }
}

class Device{
    constructor(name,power){
        this.name = name;
        this.power = power;
        this.isWork = false;
    }
}

var room = new Room([new Device("vacuum cleaner", 800),new Device("laptop", 400),new Device("tv", 600), new Device("lamp", 150)]);
console.log(room.countPower());
console.log(room.findByName("la"));
console.log(room.toggleDevice("vacuum cleaner"));
console.log(room.toggleDevice("laptop"));
console.log(room.findByName("laptop"));
console.log(room.countPower());