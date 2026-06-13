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