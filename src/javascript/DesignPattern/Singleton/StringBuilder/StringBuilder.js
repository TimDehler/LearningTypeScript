"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringBuilderImpl = void 0;
class StringBuilderImpl {
    constructor() {
        this.buildString = "";
        this.getBuildString = () => {
            return this.buildString;
        };
        this.setBuildString = (valueToSet) => {
            this.buildString = valueToSet;
        };
        this.addToString = (valueToAdd) => {
            this.buildString += valueToAdd;
        };
    }
}
exports.StringBuilderImpl = StringBuilderImpl;
StringBuilderImpl.getInstance = () => {
    if (!StringBuilderImpl.instance) {
        StringBuilderImpl.instance = new StringBuilderImpl();
    }
    return StringBuilderImpl.instance;
};
