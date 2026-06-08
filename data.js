// Bus routes and company data for East Africa
const busData = {
    // Domestic Tanzania buses
    domestic: [
        {
            id: 1,
            name: 'Dar Express',
            type: 'Luxury Coach',
            origin: 'Dar es Salaam',
            destination: 'Arusha',
            departureTime: '08:00',
            arrivalTime: '16:00',
            duration: '8 hours',
            price: 45000,
            seatsAvailable: 12,
            totalSeats: 50,
            features: ['WiFi', 'AC', 'Power Outlets'],
            image: '🚌'
        },
        {
            id: 2,
            name: 'Coastal King',
            type: 'Standard Coach',
            origin: 'Dar es Salaam',
            destination: 'Mbeya',
            departureTime: '07:00',
            arrivalTime: '19:00',
            duration: '12 hours',
            price: 35000,
            seatsAvailable: 25,
            totalSeats: 50,
            features: ['AC', 'Food Included'],
            image: '🚌'
        },
        {
            id: 3,
            name: 'Mountain Rider',
            type: 'Premium Coach',
            origin: 'Dar es Salaam',
            destination: 'Iringa',
            departureTime: '10:00',
            arrivalTime: '18:00',
            duration: '8 hours',
            price: 50000,
            seatsAvailable: 5,
            totalSeats: 40,
            features: ['WiFi', 'AC', 'Premium Seats', 'Meals'],
            image: '🚌'
        },
        {
            id: 4,
            name: 'City Connect',
            type: 'Standard Coach',
            origin: 'Dar es Salaam',
            destination: 'Morogoro',
            departureTime: '06:00',
            arrivalTime: '09:00',
            duration: '3 hours',
            price: 15000,
            seatsAvailable: 30,
            totalSeats: 50,
            features: ['AC'],
            image: '🚌'
        },
        {
            id: 5,
            name: 'Northern Quest',
            type: 'Luxury Coach',
            origin: 'Arusha',
            destination: 'Moshi',
            departureTime: '09:00',
            arrivalTime: '11:30',
            duration: '2.5 hours',
            price: 25000,
            seatsAvailable: 8,
            totalSeats: 45,
            features: ['WiFi', 'AC', 'Snacks'],
            image: '🚌'
        },
        {
            id: 6,
            name: 'Kilimanjaro Express',
            type: 'Premium Coach',
            origin: 'Moshi',
            destination: 'Dar es Salaam',
            departureTime: '06:00',
            arrivalTime: '16:00',
            duration: '10 hours',
            price: 55000,
            seatsAvailable: 3,
            totalSeats: 50,
            features: ['WiFi', 'AC', 'Meals', 'Entertainment'],
            image: '🚌'
        },
        {
            id: 7,
            name: 'Lake Tanganyika',
            type: 'Standard Coach',
            origin: 'Mbeya',
            destination: 'Kigoma',
            departureTime: '08:00',
            arrivalTime: '18:00',
            duration: '10 hours',
            price: 40000,
            seatsAvailable: 15,
            totalSeats: 50,
            features: ['AC', 'Food'],
            image: '🚌'
        },
        {
            id: 8,
            name: 'Dar Express Night',
            type: 'Sleeper Coach',
            origin: 'Dar es Salaam',
            destination: 'Mbeya',
            departureTime: '20:00',
            arrivalTime: '08:00 +1',
            duration: '12 hours',
            price: 60000,
            seatsAvailable: 6,
            totalSeats: 40,
            features: ['WiFi', 'AC', 'Sleeper Beds', 'Meals'],
            image: '🚌'
        }
    ],
    // International buses to neighboring countries
    international: [
        {
            id: 101,
            name: 'East Africa Connect',
            type: 'International Coach',
            origin: 'Dar es Salaam, Tanzania',
            destination: 'Nairobi, Kenya',
            departureTime: '08:00',
            arrivalTime: '18:00',
            duration: '10 hours',
            price: 120000,
            seatsAvailable: 4,
            totalSeats: 45,
            features: ['WiFi', 'AC', 'Border Assistance', 'Meals'],
            country: 'Kenya',
            image: '🌍'
        },
        {
            id: 102,
            name: 'Kampala Highway',
            type: 'International Coach',
            origin: 'Dar es Salaam, Tanzania',
            destination: 'Kampala, Uganda',
            departureTime: '10:00',
            arrivalTime: '12:00 +1',
            duration: '26 hours',
            price: 180000,
            seatsAvailable: 7,
            totalSeats: 50,
            features: ['WiFi', 'AC', 'Sleeper Beds', 'Meals', 'Border Assistance'],
            country: 'Uganda',
            image: '🌍'
        },
        {
            id: 103,
            name: 'Kigali Express',
            type: 'International Coach',
            origin: 'Dar es Salaam, Tanzania',
            destination: 'Kigali, Rwanda',
            departureTime: '07:00',
            arrivalTime: '20:00',
            duration: '13 hours',
            price: 150000,
            seatsAvailable: 10,
            totalSeats: 45,
            features: ['WiFi', 'AC', 'Meals', 'Border Assistance'],
            country: 'Rwanda',
            image: '🌍'
        },
        {
            id: 104,
            name: 'Burundi Link',
            type: 'International Coach',
            origin: 'Dar es Salaam, Tanzania',
            destination: 'Gitega, Burundi',
            departureTime: '09:00',
            arrivalTime: '22:00',
            duration: '13 hours',
            price: 140000,
            seatsAvailable: 8,
            totalSeats: 45,
            features: ['WiFi', 'AC', 'Meals', 'Border Assistance'],
            country: 'Burundi',
            image: '🌍'
        },
        {
            id: 105,
            name: 'Mombasa Shuttle',
            type: 'Standard Coach',
            origin: 'Dar es Salaam, Tanzania',
            destination: 'Mombasa, Kenya',
            departureTime: '06:00',
            arrivalTime: '12:00',
            duration: '6 hours',
            price: 80000,
            seatsAvailable: 12,
            totalSeats: 50,
            features: ['AC', 'Food'],
            country: 'Kenya',
            image: '🌍'
        },
        {
            id: 106,
            name: 'Lake Victoria Express',
            type: 'International Coach',
            origin: 'Arusha, Tanzania',
            destination: 'Kisumu, Kenya',
            departureTime: '08:00',
            arrivalTime: '17:00',
            duration: '9 hours',
            price: 110000,
            seatsAvailable: 6,
            totalSeats: 45,
            features: ['WiFi', 'AC', 'Meals'],
            country: 'Kenya',
            image: '🌍'
        }
    ]
};

// Payment methods
const paymentMethods = [
    {
        id: 'tigo',
        name: 'Tigo Money',
        icon: '📱',
        type: 'Mobile Money',
        description: 'Pay via Tigo mobile money'
    },
    {
        id: 'airtel',
        name: 'Airtel Money',
        icon: '📱',
        type: 'Mobile Money',
        description: 'Pay via Airtel mobile money'
    },
    {
        id: 'vodacom',
        name: 'M-Pesa',
        icon: '📱',
        type: 'Mobile Money',
        description: 'Pay via Vodacom M-Pesa'
    },
    {
        id: 'nb',
        name: 'NMB Bank',
        icon: '🏦',
        type: 'Bank Transfer',
        description: 'Direct bank transfer via NMB'
    },
    {
        id: 'crdb',
        name: 'CRDB Bank',
        icon: '🏦',
        type: 'Bank Transfer',
        description: 'Direct bank transfer via CRDB'
    },
    {
        id: 'tz',
        name: 'Tanzania Post Bank',
        icon: '🏦',
        type: 'Bank Transfer',
        description: 'Direct bank transfer via TPB'
    }
];