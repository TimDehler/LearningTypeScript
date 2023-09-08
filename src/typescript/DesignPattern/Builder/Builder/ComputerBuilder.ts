import computerParts, {
  computertypes,
  cpus,
  gpus,
  mainboards,
  memorySizes,
  memoryTypes,
  powersupplys,
  rams,
} from "./ComputerParts";
import Computer from "./Computer";

interface ComputerBuilder {
  setComputerType(computertype: computertypes): ComputerBuilder;
  setCpu(cpu: cpus): ComputerBuilder;
  setMainboard(mainboard: mainboards): ComputerBuilder;
  setRam(ram: rams): ComputerBuilder;
  setGpu(gpu: gpus): ComputerBuilder;
  setPowerSupply(powersupply: powersupplys): ComputerBuilder;
  setMemoryType(memoryType: memoryTypes): ComputerBuilder;
  setMemorySize(memorySize: memorySizes): ComputerBuilder;
  setHasBattery(hasBattery: boolean): ComputerBuilder;
  build(): Computer;
}

class ComputerBuilderImpl implements ComputerBuilder {
  private computerType!: computertypes;
  private cpu!: cpus;
  private mainboard!: mainboards;
  private ram!: rams;
  private gpu!: gpus;
  private powersupply!: powersupplys;
  private memoryType!: memoryTypes;
  private memorySize!: memorySizes;
  private hasBattery!: boolean;

  private computerParts = computerParts;

  public setComputerType(computertype: computertypes): ComputerBuilder {
    this.computerType = computertype;
    return this;
  }
  public setCpu(cpu: cpus): ComputerBuilder {
    this.cpu = cpu;
    return this;
  }
  public setMainboard(mainboard: mainboards): ComputerBuilder {
    this.mainboard = mainboard;
    return this;
  }
  public setRam(ram: rams): ComputerBuilder {
    this.ram = ram;
    return this;
  }
  public setGpu(gpu: gpus): ComputerBuilder {
    this.gpu = gpu;
    return this;
  }
  public setPowerSupply(powersupply: powersupplys): ComputerBuilder {
    this.powersupply = powersupply;
    return this;
  }
  public setMemoryType(memoryType: memoryTypes): ComputerBuilder {
    this.memoryType = memoryType;
    return this;
  }
  public setMemorySize(memorySize: memorySizes): ComputerBuilder {
    this.memorySize = memorySize;
    return this;
  }
  public setHasBattery(hasBattery: boolean): ComputerBuilder {
    this.hasBattery = hasBattery;
    return this;
  }

  build(): Computer {
    return new Computer(
      this.computerType,
      this.cpu,
      this.mainboard,
      this.ram,
      this.gpu,
      this.powersupply,
      this.memoryType,
      this.memorySize,
      this.hasBattery
    );
  }

  public getComputerParts() {
    return this.computerParts;
  }
}

export { ComputerBuilder, ComputerBuilderImpl };
