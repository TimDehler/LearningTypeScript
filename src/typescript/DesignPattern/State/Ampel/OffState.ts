import TrafficLight from "./TrafficLight";
import TrafficLightStateImpl from "./TrafficLightState";

class OffState extends TrafficLightStateImpl {
  constructor(trafficlight: TrafficLight) {
    super(trafficlight);
  }

  switchOn() {
    this.getTrafficLight().current = this.getTrafficLight().greenState;
  }
}

export default OffState;
