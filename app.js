// Bus Booking System - Main Application

class BusBookingApp {
    constructor() {
        this.currentScreen = 'home';
        this.selectedBuses = [];
        this.cart = [];
        this.selectedPaymentMethod = null;
        this.userDetails = {};
        this.bookedTickets = [];
        this.init();
    }

    init() {
        this.render();
    }

    showScreen(screen) {
        this.currentScreen = screen;
        this.render();
    }

    render() {
        const app = document.getElementById('app');
        const header = this.getHeader();
        const content = this.getContent();
        
        app.innerHTML = header + content;
        this.attachEventListeners();
    }

    getHeader() {
        return `
            <div class="container">
                <header>
                    <h1>🚌 Bus Booking Naives</h1>
                    <p>Your Gateway to East Africa Travel</p>
                </header>
            </div>
        `;
    }

    getContent() {
        const container = `<div class="container">`;
        
        switch (this.currentScreen) {
            case 'home':
                return container + this.getHomeScreen() + '</div>';
            case 'browse':
                return container + this.getBrowseScreen() + '</div>';
            case 'booking':
                return container + this.getBookingScreen() + '</div>';
            case 'checkout':
                return container + this.getCheckoutScreen() + '</div>';
            case 'payment':
                return container + this.getPaymentScreen() + '</div>';
            case 'success':
                return container + this.getSuccessScreen() + '</div>';
            default:
                return container + this.getHomeScreen() + '</div>';
        }
    }

    getHomeScreen() {
        return `
            <div class="screen active">
                <div style="text-align: center; padding: 40px 20px;">
                    <div style="font-size: 5em; margin-bottom: 20px;">✈️</div>
                    <h2 style="color: var(--primary); margin-bottom: 20px; font-size: 2em;">Welcome to Bus Booking Naives</h2>
                    <p style="color: var(--dark); font-size: 1.1em; margin-bottom: 30px; line-height: 1.6;">
                        Book your bus tickets across Tanzania and East Africa<br>
                        Fast, Reliable, and Affordable Travel Solutions
                    </p>
                    
                    <div class="grid-2" style="max-width: 600px; margin: 0 auto;">
                        <button class="btn btn-primary" onclick="app.showScreen('browse')" style="font-size: 1.1em; padding: 20px;">
                            🚌 Domestic Routes
                        </button>
                        <button class="btn btn-secondary" onclick="app.showScreen('browse')" style="font-size: 1.1em; padding: 20px;">
                            🌍 International Routes
                        </button>
                    </div>

                    <div style="margin-top: 40px; text-align: left; max-width: 600px; margin-left: auto; margin-right: auto;">
                        <h3 style="color: var(--primary); margin-bottom: 15px;">Why Choose Us?</h3>
                        <ul style="color: var(--dark); line-height: 2;">
                            <li>✅ Best Bus Companies in Tanzania</li>
                            <li>✅ Competitive Prices Across All Routes</li>
                            <li>✅ Multiple Payment Options</li>
                            <li>✅ Real-time Booking Confirmation</li>
                            <li>✅ International Travel Support</li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    getBrowseScreen() {
        const routeType = this.getRouteType();
        const buses = routeType === 'domestic' ? busData.domestic : busData.international;
        
        let busesHTML = '<div class="grid-3">';
        buses.forEach(bus => {
            const isSelected = this.selectedBuses.find(b => b.id === bus.id);
            busesHTML += `
                <div class="bus-card ${isSelected ? 'selected' : ''}" onclick="app.selectBus(${bus.id})">
                    <div class="bus-header">
                        <div class="bus-name">${bus.image} ${bus.name}</div>
                        <div class="bus-type">${bus.type}</div>
                    </div>
                    
                    <div class="route-info">
                        <div class="route-location">
                            <div class="location-name">${bus.origin.split(',')[0]}</div>
                            <div class="location-time">${bus.departureTime}</div>
                        </div>
                        <div class="route-arrow">→</div>
                        <div class="route-location">
                            <div class="location-name">${bus.destination.split(',')[0]}</div>
                            <div class="location-time">${bus.arrivalTime}</div>
                        </div>
                    </div>

                    <div class="duration">${bus.duration}</div>

                    <div class="bus-meta">
                        <div class="seats-available ${bus.seatsAvailable <= 5 ? 'low' : ''} ${bus.seatsAvailable === 0 ? 'full' : ''}">
                            ${bus.seatsAvailable > 0 ? `${bus.seatsAvailable} seats` : 'FULL'}
                        </div>
                        <div class="price">
                            ${bus.price.toLocaleString()}<span class="currency">TZS</span>
                        </div>
                    </div>

                    <div style="margin-top: 10px; font-size: 0.85em; color: var(--dark);">
                        ${bus.features.join(' • ')}
                    </div>
                </div>
            `;
        });
        busesHTML += '</div>';

        const typeTitle = routeType === 'domestic' ? 'Domestic Routes' : 'International Routes';
        
        return `
            <div class="screen active">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px;">
                    <h2 style="color: var(--primary);">Available ${typeTitle}</h2>
                    <button class="btn btn-secondary" onclick="app.toggleRouteType()">Switch to ${routeType === 'domestic' ? 'International' : 'Domestic'}</button>
                </div>

                ${busesHTML}

                <div style="margin-top: 30px; text-align: center;">
                    <button class="btn btn-primary" onclick="app.showScreen('home')" style="margin-right: 10px;">Back to Home</button>
                    ${this.selectedBuses.length > 0 ? `
                        <button class="btn btn-success" onclick="app.showScreen('booking')">Proceed to Booking (${this.selectedBuses.length})</button>
                    ` : ''}
                </div>
            </div>
        `;
    }

    getRouteType() {
        return document.title.includes('Domestic') ? 'domestic' : 'international';
    }

    toggleRouteType() {
        const currentType = this.getRouteType();
        if (currentType === 'domestic') {
            document.title = 'Bus Booking Naives - International';
            this.selectedBuses = [];
        } else {
            document.title = 'Bus Booking Naives - Domestic';
            this.selectedBuses = [];
        }
        this.render();
    }

    selectBus(busId) {
        const bus = this.getAllBuses().find(b => b.id === busId);
        const isSelected = this.selectedBuses.find(b => b.id === busId);
        
        if (isSelected) {
            this.selectedBuses = this.selectedBuses.filter(b => b.id !== busId);
        } else {
            if (bus.seatsAvailable > 0) {
                bus.quantity = 1;
                this.selectedBuses.push(bus);
            } else {
                alert('Sorry, this bus is fully booked!');
                return;
            }
        }
        this.render();
    }

    getAllBuses() {
        return [...busData.domestic, ...busData.international];
    }

    getBookingScreen() {
        let bookingHTML = '';
        
        this.selectedBuses.forEach((bus, index) => {
            bookingHTML += `
                <div class="summary-card">
                    <h3 style="color: var(--primary); margin-bottom: 15px;">${bus.name}</h3>
                    <div class="summary-row">
                        <span>Route:</span>
                        <span>${bus.origin} → ${bus.destination}</span>
                    </div>
                    <div class="summary-row">
                        <span>Duration:</span>
                        <span>${bus.duration}</span>
                    </div>
                    <div class="summary-row">
                        <span>Departure:</span>
                        <span>${bus.departureTime} | Arrival: ${bus.arrivalTime}</span>
                    </div>
                    <div class="summary-row">
                        <span>Price per Ticket:</span>
                        <span>${bus.price.toLocaleString()} TZS</span>
                    </div>
                    
                    <div class="quantity-selector">
                        <label>Number of Tickets:</label>
                        <button class="btn btn-secondary quantity-btn" onclick="app.decreaseQuantity(${index})">-</button>
                        <input type="number" class="quantity-input" value="${bus.quantity}" readonly>
                        <button class="btn btn-secondary quantity-btn" onclick="app.increaseQuantity(${index}, ${bus.seatsAvailable})">+</button>
                    </div>

                    <div class="summary-row total">
                        <span>Subtotal:</span>
                        <span>${(bus.price * bus.quantity).toLocaleString()} TZS</span>
                    </div>

                    <button class="btn btn-warning" onclick="app.removeBusFromSelection(${bus.id})" style="width: 100%; margin-top: 10px;">Remove</button>
                </div>
            `;
        });

        const totalPrice = this.selectedBuses.reduce((sum, bus) => sum + (bus.price * bus.quantity), 0);

        return `
            <div class="screen active">
                <h2 style="color: var(--primary); margin-bottom: 20px;">Booking Details</h2>
                
                ${bookingHTML}

                <div class="alert alert-info" style="margin: 20px 0;">
                    ℹ️ Complete all tickets before proceeding to checkout
                </div>

                <div class="summary-card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                    <div class="summary-row total" style="color: white;">
                        <span>TOTAL AMOUNT:</span>
                        <span style="font-size: 1.5em;">${totalPrice.toLocaleString()} TZS</span>
                    </div>
                </div>

                <div style="margin-top: 20px; text-align: center;">
                    <button class="btn btn-secondary" onclick="app.showScreen('browse')" style="margin-right: 10px;">Back to Browse</button>
                    <button class="btn btn-success" onclick="app.showScreen('checkout')">Proceed to Checkout</button>
                </div>
            </div>
        `;
    }

    increaseQuantity(index, maxSeats) {
        if (this.selectedBuses[index].quantity < maxSeats) {
            this.selectedBuses[index].quantity++;
            this.render();
        } else {
            alert(`Only ${maxSeats} seats available for this bus!`);
        }
    }

    decreaseQuantity(index) {
        if (this.selectedBuses[index].quantity > 1) {
            this.selectedBuses[index].quantity--;
            this.render();
        }
    }

    removeBusFromSelection(busId) {
        this.selectedBuses = this.selectedBuses.filter(b => b.id !== busId);
        this.render();
    }

    getCheckoutScreen() {
        let checkoutHTML = `
            <div class="screen active">
                <h2 style="color: var(--primary); margin-bottom: 20px;">Passenger Details</h2>

                <form style="max-width: 600px;">
                    <div class="form-group">
                        <label>Full Name *</label>
                        <input type="text" id="fullName" placeholder="Your full name" required>
                    </div>

                    <div class="grid-2">
                        <div class="form-group">
                            <label>Email Address *</label>
                            <input type="email" id="email" placeholder="your.email@example.com" required>
                        </div>
                        <div class="form-group">
                            <label>Phone Number *</label>
                            <input type="tel" id="phone" placeholder="+255 XXX XXX XXX" required>
                        </div>
                    </div>

                    <div class="grid-2">
                        <div class="form-group">
                            <label>Gender *</label>
                            <select id="gender" required>
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>ID Type *</label>
                            <select id="idType" required>
                                <option value="">Select ID Type</option>
                                <option value="National ID">National ID</option>
                                <option value="Passport">Passport</option>
                                <option value="Driving License">Driving License</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>ID Number *</label>
                        <input type="text" id="idNumber" placeholder="Your ID number" required>
                    </div>
                </form>

                <h3 style="color: var(--primary); margin-top: 30px; margin-bottom: 20px;">Order Summary</h3>
                <div class="summary-card">
        `;

        this.selectedBuses.forEach(bus => {
            checkoutHTML += `
                <div class="summary-row">
                    <span>${bus.name} x ${bus.quantity}</span>
                    <span>${(bus.price * bus.quantity).toLocaleString()} TZS</span>
                </div>
            `;
        });

        const totalPrice = this.selectedBuses.reduce((sum, bus) => sum + (bus.price * bus.quantity), 0);
        
        checkoutHTML += `
                    <div class="summary-row total">
                        <span>TOTAL:</span>
                        <span>${totalPrice.toLocaleString()} TZS</span>
                    </div>
                </div>

                <div style="margin-top: 20px; text-align: center;">
                    <button class="btn btn-secondary" onclick="app.showScreen('booking')" style="margin-right: 10px;">Back to Booking</button>
                    <button class="btn btn-success" onclick="app.proceedToPayment()">Proceed to Payment</button>
                </div>
            </div>
        `;

        return checkoutHTML;
    }

    proceedToPayment() {
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const gender = document.getElementById('gender').value;
        const idType = document.getElementById('idType').value;
        const idNumber = document.getElementById('idNumber').value;

        if (!fullName || !email || !phone || !gender || !idType || !idNumber) {
            alert('Please fill in all required fields!');
            return;
        }

        this.userDetails = {
            fullName,
            email,
            phone,
            gender,
            idType,
            idNumber
        };

        this.showScreen('payment');
    }

    getPaymentScreen() {
        let paymentHTML = '<div class="screen active"><h2 style="color: var(--primary); margin-bottom: 20px;">Select Payment Method</h2>';
        
        paymentHTML += '<p style="color: var(--dark); margin-bottom: 20px;">Choose your preferred payment method:</p>';
        paymentHTML += '<div class="payment-methods">';

        paymentMethods.forEach(method => {
            paymentHTML += `
                <div class="payment-option ${this.selectedPaymentMethod?.id === method.id ? 'selected' : ''}" 
                     onclick="app.selectPaymentMethod('${method.id}', '${method.name}')">
                    <div class="payment-icon">${method.icon}</div>
                    <div class="payment-name">${method.name}</div>
                    <div style="font-size: 0.85em; color: var(--dark); margin-top: 5px;">${method.type}</div>
                </div>
            `;
        });

        paymentHTML += '</div>';

        const totalPrice = this.selectedBuses.reduce((sum, bus) => sum + (bus.price * bus.quantity), 0);

        paymentHTML += `
            <div class="summary-card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; margin: 30px 0;">
                <div class="summary-row total" style="color: white;">
                    <span>Amount to Pay:</span>
                    <span style="font-size: 1.5em;">${totalPrice.toLocaleString()} TZS</span>
                </div>
            </div>

            <div class="alert alert-info" style="margin: 20px 0;">
                ℹ️ By clicking "Confirm Payment", you authorize the payment transaction
            </div>

            <div style="margin-top: 20px; text-align: center;">
                <button class="btn btn-secondary" onclick="app.showScreen('checkout')" style="margin-right: 10px;">Back to Checkout</button>
                <button class="btn btn-success" onclick="app.processPayment()" ${!this.selectedPaymentMethod ? 'disabled' : ''}>
                    Confirm Payment
                </button>
            </div>
        </div>`;

        return paymentHTML;
    }

    selectPaymentMethod(methodId, methodName) {
        const method = paymentMethods.find(m => m.id === methodId);
        this.selectedPaymentMethod = method;
        this.render();
    }

    processPayment() {
        if (!this.selectedPaymentMethod) {
            alert('Please select a payment method!');
            return;
        }

        // Generate booking reference and tickets
        const bookingRef = 'BN' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase();
        
        this.selectedBuses.forEach(bus => {
            for (let i = 0; i < bus.quantity; i++) {
                const ticketNumber = 'TKT' + Date.now() + Math.random().toString(36).substr(2, 7).toUpperCase();
                this.bookedTickets.push({
                    ticketNumber,
                    busName: bus.name,
                    from: bus.origin,
                    to: bus.destination,
                    departure: bus.departureTime,
                    arrival: bus.arrivalTime,
                    price: bus.price,
                    date: new Date().toLocaleDateString(),
                    bookingRef
                });
            }
        });

        this.showScreen('success');
    }

    getSuccessScreen() {
        const totalPrice = this.bookedTickets.reduce((sum, ticket) => sum + ticket.price, 0);
        
        let ticketsHTML = '';
        this.bookedTickets.forEach((ticket, index) => {
            ticketsHTML += `
                <div class="ticket">
                    <div class="ticket-header">
                        <div class="ticket-number">Ticket #${ticket.ticketNumber}</div>
                        <div style="text-align: right; font-size: 0.9em; color: var(--dark);">Booking Ref: ${ticket.bookingRef}</div>
                    </div>
                    <div class="ticket-content">
                        <div class="ticket-section">
                            <div class="ticket-label">From</div>
                            <div class="ticket-value">${ticket.from}</div>
                        </div>
                        <div class="ticket-section">
                            <div class="ticket-label">To</div>
                            <div class="ticket-value">${ticket.to}</div>
                        </div>
                        <div class="ticket-section">
                            <div class="ticket-label">Departure</div>
                            <div class="ticket-value">${ticket.departure}</div>
                        </div>
                        <div class="ticket-section">
                            <div class="ticket-label">Arrival</div>
                            <div class="ticket-value">${ticket.arrival}</div>
                        </div>
                    </div>
                    <div style="background: var(--warning); color: white; padding: 10px; text-align: center; border-radius: 5px; margin-top: 15px; font-weight: bold;">
                        ${ticket.price.toLocaleString()} TZS
                    </div>
                </div>
            `;
        });

        return `
            <div class="screen active">
                <div class="notification" style="background: var(--success);">
                    ✅ Payment Confirmed! Thank you for booking with us 🤖
                </div>

                <div class="success-message">
                    <div class="success-icon">🎉</div>
                    <h2>Booking Confirmed!</h2>
                    <p>Your tickets have been successfully booked and confirmed.</p>
                    <p style="font-size: 1.2em; color: var(--secondary); margin: 20px 0;">
                        We've sent a confirmation email to: <strong>${this.userDetails.email}</strong>
                    </p>
                </div>

                <div style="background: var(--light); padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <h3 style="color: var(--primary); margin-bottom: 15px;">Booking Information</h3>
                    <div style="line-height: 2;">
                        <div><strong>Passenger Name:</strong> ${this.userDetails.fullName}</div>
                        <div><strong>Phone:</strong> ${this.userDetails.phone}</div>
                        <div><strong>Total Amount Paid:</strong> ${totalPrice.toLocaleString()} TZS</div>
                        <div><strong>Payment Method:</strong> ${this.selectedPaymentMethod.name}</div>
                        <div><strong>Number of Tickets:</strong> ${this.bookedTickets.length}</div>
                        <div><strong>Booking Date:</strong> ${new Date().toLocaleString()}</div>
                    </div>
                </div>

                <h3 style="color: var(--primary); margin: 30px 0 20px 0;">Your Tickets</h3>
                ${ticketsHTML}

                <div class="alert alert-success" style="margin: 20px 0;">
                    ✅ Please screenshot or print your tickets for security purposes
                </div>

                <div style="margin-top: 30px; text-align: center;">
                    <button class="btn btn-primary" onclick="app.bookAgain()" style="margin-right: 10px;">
                        Book Another Trip
                    </button>
                    <button class="btn btn-secondary" onclick="app.goHome()">
                        Go to Home
                    </button>
                </div>
            </div>
        `;
    }

    bookAgain() {
        this.selectedBuses = [];
        this.cart = [];
        this.selectedPaymentMethod = null;
        this.userDetails = {};
        this.showScreen('home');
    }

    goHome() {
        this.selectedBuses = [];
        this.cart = [];
        this.selectedPaymentMethod = null;
        this.userDetails = {};
        this.bookedTickets = [];
        this.showScreen('home');
    }

    attachEventListeners() {
        // Event listeners are attached through inline onclick handlers
    }
}

// Initialize the app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', function() {
    app = new BusBookingApp();
});