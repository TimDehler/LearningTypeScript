"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ComputerBuilder_1 = require("../Builder/ComputerBuilder");
const ComputerParts_1 = require("../Builder/ComputerParts");
const Director_1 = __importDefault(require("../Builder/Director"));
const pcBuilder = new ComputerBuilder_1.ComputerBuilderImpl();
const myPC = pcBuilder
    .setComputerType(ComputerParts_1.computertypes.CUSTOM)
    .setCpu(ComputerParts_1.cpus.INTEL)
    .setMainboard(ComputerParts_1.mainboards.GIGABYTE)
    .setRam(ComputerParts_1.rams["16GB"])
    .setGpu(ComputerParts_1.gpus.GFORCE)
    .setPowerSupply(ComputerParts_1.powersupplys["1200WATT"])
    .setMemoryType(ComputerParts_1.memoryTypes.SSD)
    .setMemorySize(ComputerParts_1.memorySizes["1TB"])
    .setHasBattery(false)
    .build();
console.log(myPC.toString());
const director = new Director_1.default();
const myGamingPC = director.constructGamingPc();
console.log(myGamingPC.toString());
console.log(myPC.computerType);
console.log(myGamingPC.computerType);
