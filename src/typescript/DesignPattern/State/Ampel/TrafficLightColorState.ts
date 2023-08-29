import TrafficLight from "./TrafficLight";
import TrafficLightStateImpl from "./TrafficLightState";

class TrafficLightColorState extends TrafficLightStateImpl {
  constructor(trafficLight: TrafficLight) {
    super(trafficLight);
  }

  switchOff() {
    this.getTrafficLight().current = this.getTrafficLight().offState;
  }
}

export default TrafficLightColorState;
