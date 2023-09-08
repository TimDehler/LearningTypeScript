import Computer from "./Computer";
import { ComputerBuilderImpl } from "./ComputerBuilder";
import {
  computertypes,
  cpus,
  gpus,
  mainboards,
  memorySizes,
  memoryTypes,
  powersupplys,
  rams,
} from "./ComputerParts";

class Director {
  public constructGamingPc(): Computer {
    return new ComputerBuilderImpl()
      .setComputerType(computertypes.GAMINGPC)
      .setCpu(cpus.AMD)
      .setGpu(gpus.AMD)
      .setHasBattery(false)
      .setMainboard(mainboards.MSI)
      .setMemorySize(memorySizes["1TB"])
      .setMemoryType(memoryTypes.SSD)
      .setPowerSupply(powersupplys["1200WATT"])
      .setRam(rams["16GB"])
      .build();
  }

  public constructOfficePc(): Computer {
    return new ComputerBuilderImpl()
      .setComputerType(computertypes.OFFICEPC)
      .setCpu(cpus.INTEL)
      .setGpu(gpus.GFORCE)
      .setHasBattery(false)
      .setMainboard(mainboards.GIGABYTE)
      .setMemorySize(memorySizes["500GB"])
      .setMemoryType(memoryTypes.HDD)
      .setPowerSupply(powersupplys["600WATT"])
      .setRam(rams["4GB"])
      .build();
  }

  public constructLaptop(): Computer {
    return new ComputerBuilderImpl()
      .setComputerType(computertypes.LAPTOP)
      .setCpu(cpus.INTEL)
      .setGpu(gpus.GFORCE)
      .setHasBattery(true)
      .setMainboard(mainboards.GIGABYTE)
      .setMemorySize(memorySizes["500GB"])
      .setMemoryType(memoryTypes.HDD)
      .setPowerSupply(powersupplys["600WATT"])
      .setRam(rams["8GB"])
      .build();
  }
}

export default Director;
