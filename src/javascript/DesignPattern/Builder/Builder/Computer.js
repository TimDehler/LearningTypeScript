"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Computer {
    constructor(_computerType, _cpu, _mainboard, _ram, _gpu, _powersupply, _memoryType, _memorySize, _hasBattery) {
        this._computerType = _computerType;
        this._cpu = _cpu;
        this._mainboard = _mainboard;
        this._ram = _ram;
        this._gpu = _gpu;
        this._powersupply = _powersupply;
        this._memoryType = _memoryType;
        this._memorySize = _memorySize;
        this._hasBattery = _hasBattery;
    }
    get computerType() {
        return this._computerType;
    }
    set computerType(value) {
        this._computerType = value;
    }
    get hasBattery() {
        return this._hasBattery;
    }
    set hasBattery(value) {
        this._hasBattery = value;
    }
    get memorySize() {
        return this._memorySize;
    }
    set memorySize(value) {
        this._memorySize = value;
    }
    get memoryType() {
        return this._memoryType;
    }
    set memoryType(value) {
        this._memoryType = value;
    }
    get powersupply() {
        return this._powersupply;
    }
    set powersupply(value) {
        this._powersupply = value;
    }
    get gpu() {
        return this._gpu;
    }
    set gpu(value) {
        this._gpu = value;
    }
    get ram() {
        return this._ram;
    }
    set ram(value) {
        this._ram = value;
    }
    get mainboard() {
        return this._mainboard;
    }
    set mainboard(value) {
        this._mainboard = value;
    }
    get cpu() {
        return this._cpu;
    }
    set cpu(value) {
        this._cpu = value;
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
