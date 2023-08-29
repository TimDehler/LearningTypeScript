"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TrafficLightState_1 = __importDefault(require("./TrafficLightState"));
class OffState extends TrafficLightState_1.default {
    constructor(trafficlight) {
        super(trafficlight);
    }
    switchOn() {
        this.getTrafficLight().current = this.getTrafficLight().greenState;
    }
}
exports.default = OffState;
