import TrafficLight from "../Ampel/TrafficLight";

const trafficLight: TrafficLight = new TrafficLight();

trafficLight.switchOn();

console.log(trafficLight.getColor());

trafficLight.nextColor();
console.log(trafficLight.getColor());

trafficLight.nextColor();
console.log(trafficLight.getColor());

trafficLight.switchOff();
