
const createFlight = (flight) => {
    
    //Flight
  const flightDom = document.createElement("div");
  flightDom.className = "flight";

  //Name
 const name =document.createElement("div")
 name.className = "name";
 name.innerText = flight.name

  //Plane
  const plane = document.createElement("div");
  plane.className = "plane";
  plane.innerText =  flight.plane;

  //Departure
  const departureDate = document.createElement("div");
  departureDate.className = "departureDate";
  departureDate.innerText = flight.departureDate;

   //origin
   const origin = document.createElement("div");
   origin.className = "origin";
   origin.innerText = flight.origin;

   //arrivalDate

   const arrivalDate = document.createElement("div");
   arrivalDate.className = "arrivalDate"
   arrivalDate.innerText = flight.arrivalDate

   //destination

   const destination = document.createElement("div")
   destination.className = "destination"
   destination.innerText = flight.destination

    //stop

    const stop = document.createElement("div");
    stop.className = "stop";
    stop.innerText = flight.stop;

  flightDom.append(
      name,
      plane,
      departureDate,
      origin, 
      arrivalDate, 
      destination, 
      stop
  )
  return flightDom;
}

export default createFlight