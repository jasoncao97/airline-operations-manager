function dailySummaryReport(airports, flights, bookings) {
    let totalAirports = airports.length;
    let totalFlights = flights.length;
    let totalBookings = bookings.length;

    let checkedInPassengers = 
        getCheckedInPassengerCount(bookings);

    let delayedCancelledFlights =
        getFlightsRequiringAttentionCount(flights);

    let totalRevenue = 
        getTotalRevenue(flights, bookings);

    console.log("Total Airports: " + totalAirports);
    console.log("Total Flights: " + totalFlights);
    console.log("Total Bookings: " + totalBookings);
    console.log("Checked In Passengers: " + checkedInPassengers);
    console.log("Flights Delayed/Cancelled: " + delayedCancelledFlights);
    console.log("Total Revenue: $" + totalRevenue);
}

function operationsDashboard(airports, flights, bookings) {

    console.log("===== AIRLINE OPERATIONS DASHBOARD =====");
    console.log("");

    console.log("===== DAILY SUMMARY =====");
    console.log("");
    dailySummaryReport(airports, flights, bookings);
    console.log("");  

    console.log("===== AIRPORT ACTIVITY =====");
    console.log("");
    airportActivityReport(airports, flights);
    console.log("");  

    console.log("===== CAPACITY REPORT =====");
    console.log("");    
    capacityReport(flights, bookings);
    console.log("");

    console.log("===== REVENUE REPORT =====");
    console.log("");    
    revenueReport(flights, bookings);
    console.log("");

    console.log("===== FLIGHTS REQUIRING ATTENTION =====");
    console.log("");
    findFlightsRequiringAttention(flights, bookings);
    console.log("");
    
    console.log("===== BOARDING READINESS =====");
    console.log("");
    boardingReadinessReport(flights, bookings);
    console.log("");
}

operationsDashboard(airports, flights, bookings);