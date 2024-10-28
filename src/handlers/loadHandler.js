import data from "../data.js"
import dom from "../dom.js"
import sortFlight from "../utils/sortFlight.js";
import createFlight from "../components/createFlight.js"

const loadHandler = () => {
const organizeFlights =  sortFlight(data);

organizeFlights.forEach((flight) => {
const flightDom = createFlight(flight);
dom.parent.appendChild(flightDom)

});


}


export default loadHandler

