import TrafficLight from "./TrafficLight";
import TrafficLightColorState from "./TrafficLightColorState";

class RedYellowState extends TrafficLightColorState {
  constructor(trafficlight: TrafficLight) {
    super(trafficlight);
  }

  getColor(): string {
    return "RedYellow";
  }

  nextColor(): void {
    this.getTrafficLight().current = this.getTrafficLight().greenState;
  }
}

export default RedYellowState;
