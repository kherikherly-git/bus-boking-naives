# Bus Booking Naives 🚌

A complete bus booking simulation system for East Africa, focusing on Tanzania with routes to neighboring countries (Kenya, Uganda, Rwanda, and Burundi).

## Features

### 🏠 Home Screen
- Welcome message with system overview
- Quick access to domestic and international routes
- Why Choose Us section

### 🚌 Route Browsing
- Browse available buses for selected route type
- Filter between domestic and international routes
- View detailed information:
  - Bus company name and type
  - Departure and arrival times
  - Journey duration
  - Available seats
  - Price per ticket
  - Amenities/Features

### 📋 Domestic Routes (Tanzania)
Popular bus companies and routes:

#### Major Routes:
- **Dar Express**: Dar es Salaam ↔ Arusha (8 hours, 45,000 TZS)
- **Coastal King**: Dar es Salaam ↔ Mbeya (12 hours, 35,000 TZS)
- **Mountain Rider**: Dar es Salaam ↔ Iringa (8 hours, 50,000 TZS)
- **City Connect**: Dar es Salaam ↔ Morogoro (3 hours, 15,000 TZS)
- **Northern Quest**: Arusha ↔ Moshi (2.5 hours, 25,000 TZS)
- **Kilimanjaro Express**: Moshi ↔ Dar es Salaam (10 hours, 55,000 TZS)
- **Lake Tanganyika**: Mbeya ↔ Kigoma (10 hours, 40,000 TZS)
- **Dar Express Night**: Sleeper service Dar es Salaam ↔ Mbeya (12 hours, 60,000 TZS)

### 🌍 International Routes
Cross-border connections:

#### To Kenya:
- **East Africa Connect**: Dar es Salaam ↔ Nairobi (10 hours, 120,000 TZS)
- **Lake Victoria Express**: Arusha ↔ Kisumu (9 hours, 110,000 TZS)
- **Mombasa Shuttle**: Dar es Salaam ↔ Mombasa (6 hours, 80,000 TZS)

#### To Uganda:
- **Kampala Highway**: Dar es Salaam ↔ Kampala (26 hours, 180,000 TZS)

#### To Rwanda:
- **Kigali Express**: Dar es Salaam ↔ Kigali (13 hours, 150,000 TZS)

#### To Burundi:
- **Burundi Link**: Dar es Salaam ↔ Gitega (13 hours, 140,000 TZS)

### 🛒 Booking Process
1. Select buses from available routes
2. Choose number of tickets (up to available seats)
3. Review booking details
4. Enter passenger information:
   - Full name
   - Email
   - Phone number
   - Gender
   - ID type (National ID, Passport, Driving License)
   - ID number

### 💳 Payment Methods
Supported payment options:

#### Mobile Money (Tanzania):
- **Tigo Money** 📱
- **Airtel Money** 📱
- **Vodacom M-Pesa** 📱

#### Bank Transfer (Tanzania):
- **NMB Bank** 🏦
- **CRDB Bank** 🏦
- **Tanzania Post Bank** 🏦

### ✅ Confirmation & Tickets
- Payment confirmation notification
- Individual ticket generation with:
  - Unique ticket number
  - Booking reference
  - Route details
  - Departure/arrival times
  - Price per ticket
- Email confirmation sent to passenger
- Option to book another trip or return home

## Project Structure

```
bus-booking-naives/
├── index.html       # Main HTML file
├── styles.css       # Complete styling
├── data.js          # Bus data, routes, and payment methods
├── app.js           # Main application logic
└── README.md        # This file
```

## How to Use

1. Clone or download the repository
2. Open `index.html` in a modern web browser
3. Start with the home screen
4. Select route type (Domestic or International)
5. Browse available buses
6. Select bus(es) and quantity
7. Enter passenger details
8. Choose payment method
9. Confirm payment
10. View and save your tickets

## Technical Features

### Design
- Responsive layout (works on desktop, tablet, mobile)
- Smooth animations and transitions
- Modern gradient backgrounds
- Card-based UI components

### Functionality
- Single-page application (SPA) with screen navigation
- Dynamic seat availability display
- Real-time booking summary
- Unique ticket generation
- Booking reference system

### Browser Compatibility
- Chrome/Chromium
- Firefox
- Safari
- Edge

## Features Included

✅ Route browsing (domestic & international)
✅ Bus selection with seat availability
✅ Multiple ticket purchase
✅ Passenger information collection
✅ Multiple payment methods
✅ Real-time payment processing (simulated)
✅ Ticket generation
✅ Confirmation notifications
✅ Booking history capability
✅ Responsive design
✅ User-friendly interface

## Future Enhancements

Potential features for expansion:
- Database integration for persistent bookings
- Real payment gateway integration
- Email notification system
- SMS confirmations
- Seat map visualization
- Booking modification/cancellation
- Loyalty program
- Real-time seat availability updates
- Multiple language support
- Admin dashboard

## Currency

All prices are displayed in **TZS (Tanzanian Shilling)**

## Notes

- This is a simulation/prototype system
- Payment processing is simulated and no actual transactions occur
- All bus companies, routes, and times are for demonstration purposes
- Seat numbers and availability are randomly generated

## License

Free to use and modify for educational purposes.

## Support

For issues or suggestions, please contact the development team.

---

**Happy Travels with Bus Booking Naives! 🚌✨**