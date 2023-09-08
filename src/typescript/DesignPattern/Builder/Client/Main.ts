import Computer from "../Builder/Computer";
import {
  ComputerBuilder,
  ComputerBuilderImpl,
} from "../Builder/ComputerBuilder";
import {
  computertypes,
  cpus,
  gpus,
  mainboards,
  memorySizes,
  memoryTypes,
  powersupplys,
  rams,
} from "../Builder/ComputerParts";
import Director from "../Builder/Director";

const pcBuilder: ComputerBuilder = new ComputerBuilderImpl();

const myPC: Computer = pcBuilder
  .setComputerType(computertypes.CUSTOM)
  .setCpu(cpus.INTEL)
  .setMainboard(mainboards.GIGABYTE)
  .setRam(rams["16GB"])
  .setGpu(gpus.GFORCE)
  .setPowerSupply(powersupplys["1200WATT"])
  .setMemoryType(memoryTypes.SSD)
  .setMemorySize(memorySizes["1TB"])
  .setHasBattery(false)
  .build();

console.log(myPC.toString());

const director: Director = new Director();

const myGamingPC: Computer = director.constructGamingPc();
console.log(myGamingPC.toString());

console.log(myPC.computerType);
console.log(myGamingPC.computerType);
