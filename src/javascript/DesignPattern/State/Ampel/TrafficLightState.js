"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TrafficLightStateImpl {
    constructor(trafficLight) {
        this.trafficLight = trafficLight;
    }
    getTrafficLight() {
        return this.trafficLight;
    }
    getColor() {
        throw Error("This method makes no sense in this context");
    }
    nextColor() {
        throw Error("This method makes no sense in this context");
    }
    switchOn() {
        throw Error("This method makes no sense in this context");
    }
    switchOff() {
        throw Error("This method makes no sense in this context");
    }
}
exports.default = TrafficLightStateImpl;
