import TrafficLight from "./TrafficLight";

export interface TrafficLightInterface {
  getColor: Function;
  nextColor: Function;
  switchOn: Function;
  switchOff: Function;
}

class TrafficLightStateImpl implements TrafficLightInterface {
  private trafficLight: TrafficLight;

  constructor(trafficLight: TrafficLight) {
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

export default TrafficLightStateImpl;
