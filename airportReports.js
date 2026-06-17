function getDepartureCountForAirport(flights, airportCode) {
    let departureCount = 0;

    for (let i = 0; i < flights.length; i++) {
        if (airportCode === flights[i].origin) {
            departureCount++;
        }
    }
    return departureCount;
}

function getArrivalCountForAirport(flights, airportCode) {
    let arrivalCount = 0;

    for (let i = 0; i < flights.length; i++) {
        if (airportCode === flights[i].destination) {
            arrivalCount++;
        }
    }
    return arrivalCount;
}

function airportActivityReport(airports, flights) {
    for (let i = 0; i < airports.length; i++) {
        let airport = airports[i];

        let departureCount = 
            getDepartureCountForAirport(flights, airport.code);

        let arrivalCount =
            getArrivalCountForAirport(flights, airport.code);

        console.log(
            airport.code +
            " | " +
            airport.city +
            ", " +
            airport.country +
            " | Departures: " +
            departureCount +
            " | Arrivals: " +
            arrivalCount
        );
    }
}