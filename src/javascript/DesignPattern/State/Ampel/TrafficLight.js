"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GreenState_1 = __importDefault(require("./GreenState"));
const OffState_1 = __importDefault(require("./OffState"));
const RedState_1 = __importDefault(require("./RedState"));
const RedYellowState_1 = __importDefault(require("./RedYellowState"));
const YellowState_1 = __importDefault(require("./YellowState"));
class TrafficLight {
    constructor() {
        this.redState = new RedState_1.default(this);
        this.greenState = new GreenState_1.default(this);
        this.yellowState = new YellowState_1.default(this);
        this.redYellowState = new RedYellowState_1.default(this);
        this.offState = new OffState_1.default(this);
        this.current = this.offState;
    }
    getColor() {
        return this.current.getColor();
    }
    nextColor() {
        this.current.nextColor();
    }
    switchOn() {
        this.current.switchOn();
    }
    switchOff() {
        this.current.switchOff();
    }
}
exports.default = TrafficLight;
