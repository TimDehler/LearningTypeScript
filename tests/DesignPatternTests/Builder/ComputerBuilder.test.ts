import { ComputerBuilderImpl } from "../../../src/typescript/DesignPattern/Builder/Builder/ComputerBuilder";
import Computer from "../../../src/typescript/DesignPattern/Builder/Builder/Computer";
import {
  computertypes,
  cpus,
  gpus,
  mainboards,
  memorySizes,
  memoryTypes,
  powersupplys,
  rams,
} from "../../../src/typescript/DesignPattern/Builder/Builder/ComputerParts";
import Director from "../../../src/typescript/DesignPattern/Builder/Builder/Director";

test("testing custom builder", () => {
  const testPC: Computer = new ComputerBuilderImpl()
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

  expect(testPC.computerType).toEqual(computertypes.CUSTOM);
  expect(testPC.cpu).toEqual(cpus.INTEL);
  expect(testPC.mainboard).toEqual(mainboards.GIGABYTE);
  expect(testPC.ram).toEqual(rams["16GB"]);
  expect(testPC.gpu).toEqual(gpus.GFORCE);
  expect(testPC.powersupply).toEqual(powersupplys["1200WATT"]);
  expect(testPC.memoryType).toEqual(memoryTypes.SSD);
  expect(testPC.memorySize).toEqual(memorySizes["1TB"]);
  expect(testPC.hasBattery).toEqual(false);
});

test("testing default pcs from director", () => {
  //const gamingPC = new Director().constructGamingPc();
  const gamingPC = "das ist doof";

  expect(gamingPC.computerType).toEqual(computertypes.GAMINGPC);
  expect(gamingPC.cpu).toEqual(cpus.AMD);
  expect(gamingPC.mainboard).toEqual(mainboards.MSI);
  expect(gamingPC.ram).toEqual(rams["16GB"]);
  expect(gamingPC.gpu).toEqual(gpus.AMD);
  expect(gamingPC.powersupply).toEqual(powersupplys["1200WATT"]);
  expect(gamingPC.memoryType).toEqual(memoryTypes.SSD);
  expect(gamingPC.memorySize).toEqual(memorySizes["1TB"]);
  expect(gamingPC.hasBattery).toEqual(false);
});

/* test("not all fields are set on the builder", () => {
  const testPC: Computer = new ComputerBuilderImpl()
    .setComputerType(computertypes.CUSTOM)
    .setCpu(cpus.INTEL)
    .setMainboard(mainboards.GIGABYTE)
    .setRam(rams["16GB"])
    .setHasBattery(false)
    .build();


}); */
