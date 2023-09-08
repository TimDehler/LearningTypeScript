"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerBuilderImpl = void 0;
const ComputerParts_1 = __importDefault(require("./ComputerParts"));
const Computer_1 = __importDefault(require("./Computer"));
class ComputerBuilderImpl {
    constructor() {
        this.computerParts = ComputerParts_1.default;
    }
    setComputerType(computertype) {
        this.computerType = computertype;
        return this;
    }
    setCpu(cpu) {
        this.cpu = cpu;
        return this;
    }
    setMainboard(mainboard) {
        this.mainboard = mainboard;
        return this;
    }
    setRam(ram) {
        this.ram = ram;
        return this;
    }
    setGpu(gpu) {
        this.gpu = gpu;
        return this;
    }
    setPowerSupply(powersupply) {
        this.powersupply = powersupply;
        return this;
    }
    setMemoryType(memoryType) {
        this.memoryType = memoryType;
        return this;
    }
    setMemorySize(memorySize) {
        this.memorySize = memorySize;
        return this;
    }
    setHasBattery(hasBattery) {
        this.hasBattery = hasBattery;
        return this;
    }
    build() {
        return new Computer_1.default(this.computerType, this.cpu, this.mainboard, this.ram, this.gpu, this.powersupply, this.memoryType, this.memorySize, this.hasBattery);
    }
    getComputerParts() {
        return this.computerParts;
    }
}
exports.ComputerBuilderImpl = ComputerBuilderImpl;
