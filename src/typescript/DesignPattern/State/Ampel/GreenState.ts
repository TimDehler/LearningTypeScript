import TrafficLight from "./TrafficLight";
import TrafficLightColorState from "./TrafficLightColorState";

class GreenState extends TrafficLightColorState {
  constructor(trafficlight: TrafficLight) {
    super(trafficlight);
  }

  getColor(): string {
    return "Green";
  }

  nextColor(): void {
    this.getTrafficLight().current = this.getTrafficLight().yellowState;
  }
}

export default GreenState;
