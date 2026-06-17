# Project Journal

## Session 1 - Project Planning

Completed:
- Selected Airline Operations Manager project
- Defined project scope
- Created Must Have features
- Created Nice To Have features
- Created Stretch Goals
- Defined Success Criteria
- Created project file structure
- Created standalone GitHub repository
- Completed initial Git setup and first push

Key Decisions:
- Use real airlines and airport codes
- Use realistic operational data rather than live data
- Organize project into multiple files
- Build a realistic daily operations reporting system

Lessons Learned:
- Real projects begin with planning before coding
- Git repositories should represent products, not course modules
- Project organization is as important as writing code

Next Session:
- Design flight dataset
- Design booking dataset
- Define file responsibilities
- Begin project architecture

## Session 2 - Project Architecture

Completed:
- Designed overall application architecture
- Defined Airports dataset
- Defined Flights dataset
- Defined Bookings dataset
- Chose dataset sizes
- Defined responsibilities for each project file
- Defined function map for reports and operations

Key Decisions:
- Create separate Airports dataset instead of storing city information on every flight
- Use airport codes as unique airport identifiers
- Use flight numbers as unique flight identifiers
- Add booking IDs to booking records
- Use relationships between datasets (Bookings → Flights → Airports)
- Use realistic airline and airport data with realistic operational values

Dataset Design:

Airports:
- 8 airports

Flights:
- 15 flights

Bookings:
- 50 bookings

Data Structures:

Airport:
- code
- city
- country

Flight:
- airline
- flightNumber
- origin
- destination
- seats
- passengers
- ticketPrice
- status

Booking:
- bookingId
- passengerName
- flightNumber
- checkedIn

Lessons Learned:
- Good software starts with good data design
- Avoid duplicating data when possible
- Functions should exist because the business needs them, not because a programming concept needs to be practiced
- Data relationships are the foundation of larger software systems
- Project architecture decisions should be made before coding

Architecture Reflection:
- I found it difficult to create datasets and functions from scratch
- A useful approach is:
  1. Identify the user
  2. Determine what they care about
  3. Determine what questions they need answered
  4. Build data and functions around those questions
- Goal for future projects:
  - Contribute more to dataset design
  - Contribute more to feature planning
  - Gradually take ownership of architecture decisions

Next Session:
- Build airports dataset in data.js
- Build flights dataset in data.js
- Build bookings dataset in data.js
- Verify data relationships
- Prepare for report function development

## Session 3 - Data Design & Creation

Completed:

* Built airports dataset
* Built flights dataset
* Built bookings dataset
* Verified relationships between datasets

Key Decisions:

* Airport codes act as identifiers
* Flight numbers act as identifiers
* Booking IDs remain independent from flight numbers
* Passenger counts will be derived from bookings
* Flight duration stored in minutes
* Check-in status stored as boolean values

Lessons Learned:

* Data design is the foundation of software systems
* Relationships between datasets are more important than individual records
* Store data in the format that is easiest to work with
* Avoid storing duplicate information

Architecture Reflection:

* It is becoming easier to think about data structures before coding
* Realistic datasets make reports feel more like software and less like exercises
* Good architecture decisions simplify future features

Next Session:

* Create first report functions
* Show all flights
* Find flight by number
* Find flights by destination
* Count passengers using bookings

## Session 4 - Report Development & Helper Functions

Completed:

* Built showAllFlights()
* Built findFlightByNumber()
* Built findFlightsByDestination()
* Built getTotalPassengers()
* Built getCheckedInPassengerCount()
* Built getPassengersOnFlight()
* Built getPassengerCountForFlight()
* Built getCheckedInPassengerCountForFlight()
* Built getAvailableSeats()
* Built capacityReport()
* Built findFlightsRequiringAttention()
* Built boardingReadinessReport()

Key Decisions:

* Separate helper functions from report functions
* Passenger counts should be calculated from bookings rather than stored on flights
* Checked-in passenger counts should be calculated from bookings rather than stored on flights
* Use helper functions instead of duplicating business logic
* Use flight variables within larger loops to improve readability
* Return raw values from helper functions and formatted output from report functions
* Use business-focused report names rather than technical names

Architecture Decisions:

Booking Helpers:

* getTotalPassengers()
* getCheckedInPassengerCount()
* getPassengersOnFlight()
* getPassengerCountForFlight()
* getCheckedInPassengerCountForFlight()

Flight Helpers:

* getAvailableSeats()

Reports:

* showAllFlights()
* findFlightByNumber()
* findFlightsByDestination()
* capacityReport()
* findFlightsRequiringAttention()
* boardingReadinessReport()

Lessons Learned:

* Helper functions should perform calculations and return data
* Report functions should format and display information
* Functions can call other functions to avoid duplicated logic
* Multiple datasets can work together through shared identifiers
* Loop through the dataset you want one row of output for
* Not every function needs a “not found” message
* Different function types require different error handling approaches
* Readability becomes more important as functions become larger

Architecture Reflection:

* I am becoming more comfortable identifying when logic should be extracted into helper functions
* I am starting to think about where functions belong within the project structure
* I found it helpful to think about business requirements before writing code
* Combining datasets feels more like building software than practicing isolated programming concepts
* Naming functions and reports clearly is an important design decision

Most Important Takeaway:

A useful approach for building software features is:

1. Identify the business question
2. Determine which dataset owns the information
3. Build helper functions to retrieve the data
4. Build reports using those helper functions
5. Reuse logic instead of duplicating it

Next Session:

* Build operations dashboard
* Introduce report orchestration
* Connect airports and flights datasets
* Build airport activity reports
* Continue improving software architecture and code organization