interface StringBuilder {
  getBuildString: Function;
  setBuildString: Function;
  addToString: Function;
}

class StringBuilderImpl implements StringBuilder {
  private static instance: StringBuilder;

  private constructor() {}

  private buildString: string = "";

  public static getInstance = (): StringBuilder => {
    if (!StringBuilderImpl.instance) {
      StringBuilderImpl.instance = new StringBuilderImpl();
    }
    return StringBuilderImpl.instance;
  };

  getBuildString = (): string => {
    return this.buildString;
  };

  setBuildString = (valueToSet: string): void => {
    this.buildString = valueToSet;
  };

  addToString = (valueToAdd: string) => {
    this.buildString += valueToAdd;
  };
}

export { StringBuilderImpl, StringBuilder };
