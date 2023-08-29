"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TrafficLightState_1 = __importDefault(require("./TrafficLightState"));
class TrafficLightColorState extends TrafficLightState_1.default {
    constructor(trafficLight) {
        super(trafficLight);
    }
    switchOff() {
        this.getTrafficLight().current = this.getTrafficLight().offState;
    }
}
exports.default = TrafficLightColorState;
