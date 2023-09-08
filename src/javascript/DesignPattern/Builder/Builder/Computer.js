"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Computer {
    constructor(computerType, cpu, mainboard, ram, gpu, powersupply, memoryType, memorySize, hasBattery) {
        this.computerType = computerType;
        this.cpu = cpu;
        this.mainboard = mainboard;
        this.ram = ram;
        this.gpu = gpu;
        this.powersupply = powersupply;
        this.memoryType = memoryType;
        this.memorySize = memorySize;
        this.hasBattery = hasBattery;
    }
    toString() {
        return ("Computer{" +
            "computerType='" +
            this.computerType +
            "'" +
            ", cpu='" +
            this.cpu +
            "'" +
            ", mainboard='" +
            this.mainboard +
            "'" +
            ", ram='" +
            this.ram +
            "'" +
            ", gpu='" +
            this.gpu +
            "'" +
            ", powersupply='" +
            this.powersupply +
            "'" +
            ", memoryType='" +
            this.memoryType +
            "'" +
            ", memorySize=" +
            this.memorySize +
            ", hasBattery=" +
            this.hasBattery +
            "}");
    }
}
exports.default = Computer;
