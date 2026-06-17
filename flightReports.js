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

function getAvailableSeats(flights, bookings, flightNumber) {
    let passengerCount = getPassengerCountForFlight(bookings, flightNumber);
    
    for (let i = 0; i < flights.length; i++) {
        if (flightNumber === flights[i].flightNumber) {
            let availableSeats =
                flights[i].seats - passengerCount;
            
            return availableSeats;
        }
    }
    return "Flight not found";
} 

function getFlightsRequiringAttentionCount(flights) {
    let attentionCount = 0;

    for (let i = 0; i < flights.length; i++) {
        if (
            flights[i].status === "Delayed" ||
            flights[i].status === "Cancelled"
        ) {
            attentionCount++;
        }
    }
    return attentionCount;
}

function findFlightsRequiringAttention(flights, bookings) {
    let foundFlight = false;

    for (let i = 0; i < flights.length; i++) {
        let flight = flights[i];

        let passengerCount =
            getPassengerCountForFlight(bookings, flight.flightNumber);

        if (
            flight.status === "Delayed" ||
            flight.status === "Cancelled"
        ) {
            foundFlight = true;

            console.log(
                flight.flightNumber +
                " | " +
                flight.status +
                " | Booked: " +
                passengerCount
            );
        }
    }
    if (foundFlight === false) {
        console.log("No flights require attention");
    }
}

function capacityReport(flights, bookings) {
    for (let i = 0; i < flights.length; i++) {
        let flight = flights[i];

        let passengerCount = 
            getPassengerCountForFlight(bookings, flight.flightNumber);

        let availableSeats = 
            getAvailableSeats(flights, bookings, flight.flightNumber);

        console.log(
            flight.flightNumber +
            " | Seats: " +
            flight.seats + 
            " | Booked: " +
            passengerCount +
            " | Available: " +
            availableSeats
        );
    }
}

function boardingReadinessReport(flights, bookings) {
    for (let i = 0; i < flights.length; i++) {
        let flight = flights[i];

        let passengerCount = 
            getPassengerCountForFlight(bookings, flight.flightNumber);

        let checkedInCount = 
            getCheckedInPassengerCountForFlight(bookings, flight.flightNumber);

        let remainingCount = 
            passengerCount - checkedInCount;

        console.log(
            flight.flightNumber +
            " | Booked: " +
            passengerCount +
            " | Checked In: " +
            checkedInCount +
            " | Remaining: " +
            remainingCount
        );
    }
}

