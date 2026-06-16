let airports = [
    {
        code: "YVR",
        city: "Vancouver",
        country: "Canada"
    },
    {
        code: "YYC",
        city: "Calgary",
        country: "Canada"
    },
    {
        code: "YYZ",
        city: "Toronto",
        country: "Canada"
    },
    {
        code: "YUL",
        city: "Montreal",
        country: "Canada"
    },
    {
        code: "SEA",
        city: "Seattle",
        country: "USA"
    },
    {
        code: "LAX",
        city: "Los Angeles",
        country: "USA"
    },
    {
        code: "JFK",
        city: "New York",
        country: "USA"
    },
    {
        code: "ORD",
        city: "Chicago",
        country: "USA"
    }
];

let flights = [
    {
        airline: "Air Canada",
        flightNumber: "AC205",

        origin: "YVR",
        destination: "YYZ",

        seats: 180,

        ticketPrice: 420,
        durationMinutes: 270,

        status: "On Time"
    },
    {
        airline: "Air Canada",
        flightNumber: "AC310",

        origin: "YYZ",
        destination: "YVR",

        seats: 180,

        ticketPrice: 410,
        durationMinutes: 275,

        status: "Delayed"
    },
    {
        airline: "Air Canada",
        flightNumber: "AC118",

        origin: "YUL",
        destination: "YYC",

        seats: 150,

        ticketPrice: 360,
        durationMinutes: 245, 

        status: "On Time"
    },
    {
        airline: "Air Canada",
        flightNumber: "AC450",

        origin: "YYC",
        destination: "YUL",

        seats: 150,

        ticketPrice: 355,
        durationMinutes: 240,

        status: "Cancelled"
    },
    {
        airline: "WestJet",
        flightNumber: "WS220",

        origin: "YYC",
        destination: "YVR",

        seats: 160,

        ticketPrice: 280,
        durationMinutes: 95,

        status: "On Time"        
    },
    {
        airline: "WestJet",
        flightNumber: "WS305",

        origin: "YVR",
        destination: "YYC",

        seats: 160,

        ticketPrice: 275,
        durationMinutes: 90,

        status: "Delayed"       
    },
    {
        airline: "WestJet",
        flightNumber: "WS610",

        origin: "YYZ",
        destination: "YYC",

        seats: 170,

        ticketPrice: 390,
        durationMinutes: 240,

        status: "On Time" 
    },
    {
        airline: "WestJet",
        flightNumber: "WS780",

        origin: "YVR",
        destination: "LAX",

        seats: 150,

        ticketPrice: 450,
        durationMinutes: 180,

        status: "On Time" 
    },
    {
        airline: "Delta",
        flightNumber: "DL401",

        origin: "SEA",
        destination: "LAX",

        seats: 140,

        ticketPrice: 220,
        durationMinutes: 165,

        status: "On Time" 
    },
    {
        airline: "Delta",
        flightNumber: "DL550",

        origin: "LAX",
        destination: "JFK",

        seats: 190,

        ticketPrice: 520,
        durationMinutes: 330,

        status: "Delayed" 
    },
    {
        airline: "Delta",
        flightNumber: "DL700",

        origin: "JFK",
        destination: "SEA",

        seats: 160,

        ticketPrice: 480,
        durationMinutes: 355,

        status: "Cancelled" 
    },
    {
        airline: "United",
        flightNumber: "UA330",

        origin: "ORD",
        destination: "LAX",

        seats: 175,

        ticketPrice: 430,
        durationMinutes: 260,

        status: "On Time"      
    },
    {
        airline: "United",
        flightNumber: "UA415",

        origin: "LAX",
        destination: "ORD",

        seats: 175,

        ticketPrice: 425,
        durationMinutes: 255,

        status: "On Time"  
    },
    {
        airline: "United",
        flightNumber: "UA820",

        origin: "ORD",
        destination: "YVR",

        seats: 165,

        ticketPrice: 500,
        durationMinutes: 285,

        status: "On Time"   
    },
    {
        airline: "United",
        flightNumber: "UA905",

        origin: "YVR",
        destination: "SEA",

        seats: 120,

        ticketPrice: 250,
        durationMinutes: 60,
        
        status: "On Time" 
    }
];

let bookings = [
    {
        bookingId: "BK001",
        passengerName: "Sarah Lee",
        flightNumber: "AC205",
        checkedIn: true
    },
    {
        bookingId: "BK002",
        passengerName: "Mike Chen",
        flightNumber: "AC205",
        checkedIn: true 
    },
    {
        bookingId: "BK003",
        passengerName: "Olivia Brown",
        flightNumber: "AC205",
        checkedIn: true
    },
    {
        bookingId: "BK004",
        passengerName: "Daniel Kim",
        flightNumber: "AC205",
        checkedIn: false
    },
    {
        bookingId: "BK005",
        passengerName: "Emma Wilson",
        flightNumber: "AC310",
        checkedIn: true
    },
    {
        bookingId: "BK006",
        passengerName: "Noah Davis",
        flightNumber: "AC310",
        checkedIn: true
    },
    {
        bookingId: "BK007",
        passengerName: "Ava Martinez",
        flightNumber: "AC310",
        checkedIn: false
    },
    {
        bookingId: "BK008",
        passengerName: "Liam Johnson",
        flightNumber: "AC118",
        checkedIn: true
    },
    {
        bookingId: "BK009",
        passengerName: "Sophia Garcia",
        flightNumber: "AC118",
        checkedIn: false
    },
    {
        bookingId: "BK010",
        passengerName: "Ethan Miller",
        flightNumber: "AC450",
        checkedIn: false 
    },
    {
        bookingId: "BK011",
        passengerName: "Isabella Moore",
        flightNumber: "AC450",
        checkedIn: false 
    },
    {
        bookingId: "BK012",
        passengerName: "Lucas Anderson",
        flightNumber: "WS220",
        checkedIn: true 
    },
    {
        bookingId: "BK013",
        passengerName: "Mia Thompson",
        flightNumber: "WS220",
        checkedIn: true 
    },
    {
        bookingId: "BK014",
        passengerName: "James White",
        flightNumber: "WS220",
        checkedIn: true     
    },
    {
        bookingId: "BK015",
        passengerName: "Charlotte Harris",
        flightNumber: "WS220",
        checkedIn: false    
    },
    {
        bookingId: "BK016",
        passengerName: "Benjamin Martin",
        flightNumber: "WS305",
        checkedIn: true    
    },
    {
        bookingId: "BK017",
        passengerName: "Amelia Clark",
        flightNumber: "WS305",
        checkedIn: true  
    },
    {
        bookingId: "BK018",
        passengerName: "Henry Lewis",
        flightNumber: "WS305",
        checkedIn: false  
    },
    {
        bookingId: "BK019",
        passengerName: "Harper Walker",
        flightNumber: "WS610",
        checkedIn: true  
    },
    {
        bookingId: "BK020",
        passengerName: "Alexander Young",
        flightNumber: "WS610",
        checkedIn: true  
    },
    {
        bookingId: "BK021",
        passengerName: "Evelyn Hall",
        flightNumber: "WS610",
        checkedIn: true  
    },
    {
        bookingId: "BK022",
        passengerName: "Jackson Allen",
        flightNumber: "WS610",
        checkedIn: true   
    },
    {
        bookingId: "BK023",
        passengerName: "Abigail Scott",
        flightNumber: "WS780",
        checkedIn: true   
    },
    {
        bookingId: "BK024",
        passengerName: "Sebastian Green",
        flightNumber: "WS780",
        checkedIn: true   
    },
    {
        bookingId: "BK025",
        passengerName: "Emily Adams",
        flightNumber: "WS780",
        checkedIn: false   
    },
    {
        bookingId: "BK026",
        passengerName: "Matthew Baker",
        flightNumber: "DL401",
        checkedIn: true 
    },
    {
        bookingId: "BK027",
        passengerName: "Elizabeth Nelson",
        flightNumber: "DL401",
        checkedIn: true   
    },
    {
        bookingId: "BK028",
        passengerName: "David Carter",
        flightNumber: "DL401",
        checkedIn: false   
    },
    {
        bookingId: "BK029",
        passengerName: "Sofia Mitchell",
        flightNumber: "DL550",
        checkedIn: true   
    },
    {
        bookingId: "BK030",
        passengerName: "Joseph Perez",
        flightNumber: "DL550",
        checkedIn: true         
    },
    {
        bookingId: "BK031",
        passengerName: "Grace Roberts",
        flightNumber: "DL550",
        checkedIn: true  
    },
    {
        bookingId: "BK032",
        passengerName: "Samuel Turner",
        flightNumber: "DL550",
        checkedIn: false  
    },
    {
        bookingId: "BK033",
        passengerName: "Chloe Phillips",
        flightNumber: "DL700",
        checkedIn: false  
    },
    {
        bookingId: "BK034",
        passengerName: "Andrew Campbell",
        flightNumber: "DL700",
        checkedIn: false  
    },
    {
        bookingId: "BK035",
        passengerName: "Victoria Parker",
        flightNumber: "UA330",
        checkedIn: true  
    },
    {
        bookingId: "BK036",
        passengerName: "Joshua Evans",
        flightNumber: "UA330",
        checkedIn: true  
    },
    {
        bookingId: "BK037",
        passengerName: "Lily Edwards",
        flightNumber: "UA330",
        checkedIn: true  
    },
    {
        bookingId: "BK038",
        passengerName: "Anthony Collins",
        flightNumber: "UA415",
        checkedIn: true  
    },
    {
        bookingId: "BK039",
        passengerName: "Hannah Stewart",
        flightNumber: "UA415",
        checkedIn: true  
    },
    {
        bookingId: "BK040",
        passengerName: "Christopher Sanchez",
        flightNumber: "UA415",
        checkedIn: false  
    },
    {
        bookingId: "BK041",
        passengerName: "Natalie Morris",
        flightNumber: "UA820",
        checkedIn: true  
    },
    {
        bookingId: "BK042",
        passengerName: "Ryan Rogers",
        flightNumber: "UA820",
        checkedIn: true  
    },
    {
        bookingId: "BK043",
        passengerName: "Zoe Reed",
        flightNumber: "UA820",
        checkedIn: true  
    },
    {
        bookingId: "BK044",
        passengerName: "Dylan Cook",
        flightNumber: "UA820",
        checkedIn: false  
    },
    {
        bookingId: "BK045",
        passengerName: "Audrey Morgan",
        flightNumber: "UA905",
        checkedIn: true   
    },
    {
        bookingId: "BK046",
        passengerName: "Caleb Bell",
        flightNumber: "UA905",
        checkedIn: true   
    },
    {
        bookingId: "BK047",
        passengerName: "Claire Murphy",
        flightNumber: "UA905",
        checkedIn: true   
    },
    {
        bookingId: "BK048",
        passengerName: "Owen Bailey",
        flightNumber: "UA905",
        checkedIn: true  
    },
    {
        bookingId: "BK049",
        passengerName: "Nora Rivera",
        flightNumber: "UA905",
        checkedIn: false  
    },
    {
        bookingId: "BK050",
        passengerName: "Isaac Cooper",
        flightNumber: "UA905",
        checkedIn: true  
    }
];