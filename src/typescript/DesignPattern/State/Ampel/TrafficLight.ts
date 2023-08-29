import GreenState from "./GreenState";
import OffState from "./OffState";
import RedState from "./RedState";
import RedYellowState from "./RedYellowState";
import TrafficLightStateImpl, {
  TrafficLightInterface,
} from "./TrafficLightState";
import YellowState from "./YellowState";

class TrafficLight implements TrafficLightInterface {
  redState = new RedState(this);
  greenState = new GreenState(this);
  yellowState = new YellowState(this);
  redYellowState = new RedYellowState(this);

  offState = new OffState(this);

  current: TrafficLightStateImpl = this.offState;

  getColor() {
    return this.current.getColor();
  }
  nextColor() {
    this.current.nextColor();
  }
  switchOn() {
    this.current.switchOn();
  }
  switchOff() {
    this.current.switchOff();
  }
}

export default TrafficLight;
