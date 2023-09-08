"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computer = void 0;
class Computer {
    get cpu() {
        return this._cpu;
    }
    set cpu(value) {
        this._cpu = value;
    }
    constructor(_computerType, _cpu, mainboard, ram, gpu, powersupply, memoryType, memorySize, hasBattery) {
        this._computerType = _computerType;
        this._cpu = _cpu;
        this.mainboard = mainboard;
        this.ram = ram;
        this.gpu = gpu;
        this.powersupply = powersupply;
        this.memoryType = memoryType;
        this.memorySize = memorySize;
        this.hasBattery = hasBattery;
    }
    get computerType() {
        return this._computerType;
    }
    set computerType(value) {
        this._computerType = value;
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
exports.Computer = Computer;
