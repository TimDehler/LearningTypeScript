"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TrafficLight_1 = __importDefault(require("../Ampel/TrafficLight"));
const trafficLight = new TrafficLight_1.default();
trafficLight.switchOn();
console.log(trafficLight.getColor());
trafficLight.nextColor();
console.log(trafficLight.getColor());
trafficLight.nextColor();
console.log(trafficLight.getColor());
trafficLight.switchOff();
