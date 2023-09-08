"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ComputerBuilder_1 = require("./ComputerBuilder");
const ComputerParts_1 = require("./ComputerParts");
class Director {
    constructGamingPc() {
        return new ComputerBuilder_1.ComputerBuilderImpl()
            .setComputerType(ComputerParts_1.computertypes.GAMINGPC)
            .setCpu(ComputerParts_1.cpus.AMD)
            .setGpu(ComputerParts_1.gpus.AMD)
            .setHasBattery(false)
            .setMainboard(ComputerParts_1.mainboards.MSI)
            .setMemorySize(ComputerParts_1.memorySizes["1TB"])
            .setMemoryType(ComputerParts_1.memoryTypes.SSD)
            .setPowerSupply(ComputerParts_1.powersupplys["1200WATT"])
            .setRam(ComputerParts_1.rams["16GB"])
            .build();
    }
    constructOfficePc() {
        return new ComputerBuilder_1.ComputerBuilderImpl()
            .setComputerType(ComputerParts_1.computertypes.OFFICEPC)
            .setCpu(ComputerParts_1.cpus.INTEL)
            .setGpu(ComputerParts_1.gpus.GFORCE)
            .setHasBattery(false)
            .setMainboard(ComputerParts_1.mainboards.GIGABYTE)
            .setMemorySize(ComputerParts_1.memorySizes["500GB"])
            .setMemoryType(ComputerParts_1.memoryTypes.HDD)
            .setPowerSupply(ComputerParts_1.powersupplys["600WATT"])
            .setRam(ComputerParts_1.rams["4GB"])
            .build();
    }
    constructLaptop() {
        return new ComputerBuilder_1.ComputerBuilderImpl()
            .setComputerType(ComputerParts_1.computertypes.LAPTOP)
            .setCpu(ComputerParts_1.cpus.INTEL)
            .setGpu(ComputerParts_1.gpus.GFORCE)
            .setHasBattery(true)
            .setMainboard(ComputerParts_1.mainboards.GIGABYTE)
            .setMemorySize(ComputerParts_1.memorySizes["500GB"])
            .setMemoryType(ComputerParts_1.memoryTypes.HDD)
            .setPowerSupply(ComputerParts_1.powersupplys["600WATT"])
            .setRam(ComputerParts_1.rams["8GB"])
            .build();
    }
}
exports.default = Director;
