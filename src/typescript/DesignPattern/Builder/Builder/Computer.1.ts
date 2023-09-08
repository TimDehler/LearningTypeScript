export class Computer {
  public get cpu(): string {
    return this._cpu;
  }
  public set cpu(value: string) {
    this._cpu = value;
  }

  public constructor(
    private _computerType: string,
    private _cpu: string,
    private mainboard: string,
    private ram: string,
    private gpu: string,
    private powersupply: string,
    private memoryType: string,
    private memorySize: string,
    private hasBattery: boolean
  ) {}

  public get computerType(): string {
    return this._computerType;
  }
  public set computerType(value: string) {
    this._computerType = value;
  }

  public toString(): string {
    return (
      "Computer{" +
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
      "}"
    );
  }
}
