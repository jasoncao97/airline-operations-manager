Airline Operations Manager

PROBLEM STATEMENT

Airline operations staff need a system that tracks flights, passengers, bookings, capacity, and operational issues.

The system generates reports to help management identify cancellations, delays, overbooked flights, passenger totals, revenue opportunities, and flights requiring attention.

==================================================
MUST HAVE FEATURES
==================================================

1. Show All Flights

2. Find Flight By Flight Number

3. Find Flights By Destination

4. Total Passenger Count

5. Find Busiest Flight

6. Cancel Flight

7. Count Cancelled Flights

8. Count Delayed Flights

9. Flights Requiring Attention
   - Cancelled
   - Delayed
   - Overbooked

10. Count Checked-In Passengers

11. Check In Passenger

12. Show Passengers On A Flight

13. Generate Daily Operations Report

==================================================
NICE TO HAVE FEATURES
==================================================

14. Available Seat Report

15. Flights With Available Seats

16. Airport Traffic Report

17. Most Popular Destination

18. Flights By Status
    - On Time
    - Delayed
    - Cancelled

==================================================
STRETCH GOALS
==================================================

19. Revenue Report

20. Highest Revenue Flight

21. Boarding Readiness Report

22. Lowest Occupancy Flight

==================================================
DAILY OPERATIONS REPORT SHOULD INCLUDE
==================================================

- Total Flights
- Cancelled Flights
- Delayed Flights
- Total Passengers
- Checked-In Passengers
- Overbooked Flights
- Flights Requiring Attention
- Busiest Flight
- Most Popular Destination
- Highest Revenue Flight
- Total Revenue

==================================================
SUCCESS CRITERIA
==================================================

□ All Must Have Features Complete

□ All Nice To Have Features Complete

□ All Stretch Goals Complete

□ Project Organized Into Multiple Files

□ README.md Complete

□ Git Commits Organized

□ Daily Operations Report Runs Successfully

□ Code Is Readable And Well Named


FUTURE IMPROVEMENTS (NOT FOR MONTH 1)

- Flight Delays By Minutes
- Aircraft Types
- Gate Assignments
- Crew Scheduling
- Passenger Loyalty Program
- Weather Impacts
- Real Flight API Integration
- Database Storage
- Web Dashboard

==================================================
DATA STRUCTURE
==================================================

Airports:

{
    code,
    city,
    country
}

Flights:

{
    airline,
    flightNumber,
    origin,
    destination,
    seats,
    passengers,
    ticketPrice,
    status
}

Bookings:

{
    bookingId,
    passengerName,
    flightNumber,
    checkedIn
}

==================================================
FUNCTION MAP
==================================================

flightReports.js 

showAllFlights
findFlightByNumber
findFlightsByDestination
getTotalPassengers
findBusiestFlight
cancelFlight
countCancelledFlights
countDelayedFlights
findFlightsRequiringAttention
getAvailableSeats
findFlightsWithAvailableSeats
getAirportTrafficReport
findMostPopularDestination
getFlightsByStatus

bookingReports.js

countCheckedInPassengers
checkInPassenger
showPassengersOnFlight
countCheckedInPassengersForFlight
getBoardingReadinessForFlight

revenueReports.js

getTotalRevenue
findHighestRevenueFlight
getRevenueByFlight

app.js

generateDailyOperationsReport
runApp