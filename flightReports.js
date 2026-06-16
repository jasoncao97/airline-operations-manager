function showAllFlights(flights) {
    for (let i = 0; i < flights.length; i++) {
        console.log(
            flights[i].flightNumber + 
            " | " +
            flights[i].airline +
            " | " +
            flights[i].origin +
            " | " +
            flights[i].destination +
            " | " +
            flights[i].status
        );
    }
}

function findFlightByNumber(flights, flightNumber) {
    for (let i = 0; i < flights.length; i ++) {
        if (flightNumber === flights[i].flightNumber) {
            return flights[i].flightNumber +
            " | " +
            flights[i].airline +
            " | " +
            flights[i].origin +
            " | " + 
            flights[i].destination +
            " | " +
            flights[i].status;
        }
    }
    return "Flight not found";
}

function findFlightsByDestination(flights, destination) {
    let foundFlight = false;

    for (let i = 0; i < flights.length; i++) {
        if (destination === flights[i].destination) {
            console.log(
                flights[i].flightNumber + 
                " | " +
                flights[i].airline +
                " | " +
                flights[i].origin +
                " | " +
                flights[i].destination +
                " | " +
                flights[i].status   
            );
            
            foundFlight = true;
        }
    }
    if (foundFlight === false) {
        console.log("Flight not found");
    }
}