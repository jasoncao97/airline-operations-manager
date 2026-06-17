function getFlightRevenue(flights, bookings, flightNumber) {
    let passengerCount = 
        getPassengerCountForFlight(bookings, flightNumber);

    for (let i = 0; i < flights.length; i++) {
        if (flightNumber === flights[i].flightNumber) {
            let flightRevenue = 
                flights[i].ticketPrice * passengerCount;
            
            return flightRevenue;
        }
    }
    return "Flight not found";
}

function getTotalRevenue(flights, bookings) {
    let totalRevenue = 0;

    for (let i = 0; i < flights.length; i++) {
        let flight = flights[i];

        let flightRevenue =
            getFlightRevenue(flights, bookings, flight.flightNumber);

        totalRevenue += flightRevenue;
    }
    return totalRevenue;
}

function revenueReport(flights, bookings) {
    let totalRevenue = 
        getTotalRevenue(flights, bookings);

    for (let i = 0; i < flights.length; i++) {
        let flight = flights[i];

        let flightRevenue = 
            getFlightRevenue(flights, bookings, flight.flightNumber);

        console.log(
            flight.flightNumber + 
            " | Revenue: $" + 
            flightRevenue
        );
    }
    console.log("Total Revenue: $" + totalRevenue);
}