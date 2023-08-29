import TrafficLight from "./TrafficLight";
import TrafficLightColorState from "./TrafficLightColorState";

class RedState extends TrafficLightColorState {
  constructor(trafficlight: TrafficLight) {
    super(trafficlight);
  }

  getColor(): string {
    return "Red";
  }

  nextColor(): void {
    this.getTrafficLight().current = this.getTrafficLight().redYellowState;
  }
}

export default RedState;
