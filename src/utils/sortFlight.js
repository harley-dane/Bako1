const sortFlight = (data) => {
    const organizeFlights = data.flights.sort((a, b) => {
        return( 
         new Date(a.departureDate).getTime() - 
         new Date(b.departureDate).getTime()
     );
     });
     return organizeFlights
}
   
export default sortFlight