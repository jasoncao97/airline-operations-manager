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

## Session 3 - Data Design

Completed:
- Built airports dataset
- Built flights dataset
- Finalized booking architecture

Key Decisions:
- Use airport codes as references
- Remove passenger count from flights
- Store duration in minutes
- Use independent booking IDs
- Use realistic passenger names
- Store check-in status as boolean

Next Session:
- Build bookings dataset
- Verify flight-booking relationships
- Prepare for report functions