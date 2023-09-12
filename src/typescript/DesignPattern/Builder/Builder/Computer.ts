class Computer {
  public constructor(
    private _computerType: string,
    private _cpu: string,
    private _mainboard: string,
    private _ram: string,
    private _gpu: string,
    private _powersupply: string,
    private _memoryType: string,
    private _memorySize: string,
    private _hasBattery: boolean
  ) {}

  public get computerType(): string {
    return this._computerType;
  }
  private set computerType(value: string) {
    this._computerType = value;
  }

  public get hasBattery(): boolean {
    return this._hasBattery;
  }
  private set hasBattery(value: boolean) {
    this._hasBattery = value;
  }
  public get memorySize(): string {
    return this._memorySize;
  }
  private set memorySize(value: string) {
    this._memorySize = value;
  }
  public get memoryType(): string {
    return this._memoryType;
  }
  private set memoryType(value: string) {
    this._memoryType = value;
  }
  public get powersupply(): string {
    return this._powersupply;
  }
  private set powersupply(value: string) {
    this._powersupply = value;
  }
  public get gpu(): string {
    return this._gpu;
  }
  private set gpu(value: string) {
    this._gpu = value;
  }
  public get ram(): string {
    return this._ram;
  }
  private set ram(value: string) {
    this._ram = value;
  }
  public get mainboard(): string {
    return this._mainboard;
  }
  private set mainboard(value: string) {
    this._mainboard = value;
  }
  public get cpu(): string {
    return this._cpu;
  }
  private set cpu(value: string) {
    this._cpu = value;
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
export default Computer;
