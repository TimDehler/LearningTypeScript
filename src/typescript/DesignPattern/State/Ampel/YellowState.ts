import { get } from "http";
import TrafficLight from "./TrafficLight";

import TrafficLightColorState from "./TrafficLightColorState";

class YellowState extends TrafficLightColorState {
  constructor(trafficlight: TrafficLight) {
    super(trafficlight);
  }

  getColor(): string {
    return "Yellow";
  }

  nextColor(): void {
    this.getTrafficLight().current = this.getTrafficLight().redYellowState;
  }
}

export default YellowState;
