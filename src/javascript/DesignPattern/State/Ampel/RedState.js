"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TrafficLightColorState_1 = __importDefault(require("./TrafficLightColorState"));
class RedState extends TrafficLightColorState_1.default {
    constructor(trafficlight) {
        super(trafficlight);
    }
    getColor() {
        return "Red";
    }
    nextColor() {
        this.getTrafficLight().current = this.getTrafficLight().redYellowState;
    }
}
exports.default = RedState;
