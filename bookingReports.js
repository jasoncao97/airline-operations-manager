function getTotalPassengers(bookings) {
    let totalPassengers = 0;

    for (let i = 0; i < bookings.length; i++) {
        totalPassengers++;
    }
    return totalPassengers;
}

function getCheckedInPassengerCount(bookings) {
    let checkedInCount = 0;

    for (let i = 0; i < bookings.length; i++) {
        if (bookings[i].checkedIn === true) {
            checkedInCount++
        }
    }
    return checkedInCount;
}

function getPassengersOnFlight(bookings, flightNumber) {
    let foundPassenger = false;

    for (let i = 0; i < bookings.length; i++) {
        if (flightNumber === bookings[i].flightNumber) {
            console.log(bookings[i].passengerName);

            foundPassenger = true;
        }
    }
    if (foundPassenger === false) {
        console.log("No passengers found");
    }
}

function getPassengerCountForFlight(bookings, flightNumber) {
    let passengerCount = 0;

    for (let i = 0; i < bookings.length; i++) {
        if (flightNumber === bookings[i].flightNumber) {
            passengerCount++;
        }
    }
    return passengerCount;
}

function getCheckedInPassengerCountForFlight(bookings, flightNumber) {
    let checkedInCount = 0;

    for (let i = 0; i < bookings.length; i++) {
        if (
            bookings[i].flightNumber === flightNumber &&
            bookings[i].checkedIn === true
        ) {
            checkedInCount++;
        }
    }
    return checkedInCount;
}