class Computer {
  public constructor(
    public computerType: string,
    public cpu: string,
    public mainboard: string,
    public ram: string,
    public gpu: string,
    public powersupply: string,
    public memoryType: string,
    public memorySize: string,
    public hasBattery: boolean
  ) {}

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

export default Computer;
