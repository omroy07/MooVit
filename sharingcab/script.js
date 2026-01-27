// Global Variables
let currentMonth = 0;
let selectedRoute = 'fastest';
let scheduledRides = [];
let matchedRides = [];
let currentFriendCode = '';

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    setupEventListeners();
    generateCalendar();
    loadMockData();
});

function initializePage() {
    // Set default date to today
    const today = new Date();
    document.getElementById('rideDate').valueAsDate = today;
    
    // Set default time
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    document.getElementById('rideTime').value = `${hours}:${minutes}`;
}

function setupEventListeners() {
    // Detour slider
    const detourSlider = document.getElementById('detourSlider');
    detourSlider.addEventListener('input', function() {
        document.getElementById('detourValue').textContent = this.value;
    });

    // Recurring ride checkbox
    document.getElementById('recurringRide').addEventListener('change', function() {
        const options = document.getElementById('recurringOptions');
        options.classList.toggle('hidden', !this.checked);
    });

    // Route type buttons
    document.querySelectorAll('.route-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.route-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedRoute = this.dataset.route;
            updateRouteDisplay();
        });
    });

    // Generate Friend Code
    document.getElementById('generateCodeBtn').addEventListener('click', generateFriendCode);

    // Location change listeners
    document.getElementById('pickupLocation').addEventListener('change', updateRouteDisplay);
    document.getElementById('dropLocation').addEventListener('change', updateRouteDisplay);
}

// Friend Code Generation
function generateFriendCode() {
    const code = 'FC' + Math.random().toString(36).substring(2, 8).toUpperCase();
    currentFriendCode = code;
    document.getElementById('friendCode').textContent = code;
    document.getElementById('friendCodeDisplay').classList.remove('hidden');
}

function copyFriendCode() {
    navigator.clipboard.writeText(currentFriendCode);
    alert('Friend code copied: ' + currentFriendCode);
}

// Route Display Update
function updateRouteDisplay() {
    const pickup = document.getElementById('pickupLocation').value;
    const drop = document.getElementById('dropLocation').value;

    if (pickup && drop) {
        // Animate route
        const activeRoute = document.getElementById('activeRoute');
        activeRoute.style.opacity = '1';
        activeRoute.style.transition = 'stroke-dashoffset 2s ease';

        // Update route info based on route type
        const routeData = {
            fastest: { distance: '195 km', duration: '3h 15min', cost: '₹450' },
            cheapest: { distance: '210 km', duration: '4h 20min', cost: '₹320' },
            safest: { distance: '198 km', duration: '3h 45min', cost: '₹420' }
        };

        const data = routeData[selectedRoute];
        document.getElementById('routeDistance').textContent = data.distance;
        document.getElementById('routeDuration').textContent = data.duration;
        document.getElementById('routeCost').textContent = data.cost;
    }
}

// Find Matching Rides
function findMatches() {
    const pickup = document.getElementById('pickupLocation').value;
    const drop = document.getElementById('dropLocation').value;
    const genderPref = document.getElementById('genderPref').checked;
    const silentRide = document.getElementById('silentRide').checked;
    const chatFriendly = document.getElementById('chatFriendly').checked;
    const luggageFriendly = document.getElementById('luggageFriendly').checked;

    if (!pickup || !drop) {
        alert('Please select pickup and drop locations');
        return;
    }

    // Generate mock matches
    matchedRides = generateMockMatches(genderPref, silentRide, chatFriendly, luggageFriendly);
    displayMatches();
}

function generateMockMatches(genderPref, silent, chat, luggage) {
    const femaleMatches = [
        {
            id: 1,
            route: 'Bhopal → Indore',
            price: 380,
            time: '09:30 AM',
            seats: 2,
            gender: 'female',
            driver: 'Priya Sharma',
            preferences: ['silent', 'luggage'],
            rating: 4.8
        },
        {
            id: 2,
            route: 'MP Nagar → Vijay Nagar',
            price: 420,
            time: '10:15 AM',
            seats: 3,
            gender: 'female',
            driver: 'Anjali Patel',
            preferences: ['chat', 'luggage'],
            rating: 4.9
        }
    ];

    const mixedMatches = [
        {
            id: 3,
            route: 'Bhopal → Indore',
            price: 350,
            time: '09:45 AM',
            seats: 3,
            gender: 'mixed',
            driver: 'Rahul Kumar',
            preferences: ['chat'],
            rating: 4.7
        },
        {
            id: 4,
            route: 'Hoshangabad Road → Rajwada',
            price: 400,
            time: '11:00 AM',
            seats: 2,
            gender: 'mixed',
            driver: 'Amit Verma',
            preferences: ['silent', 'luggage'],
            rating: 4.6
        }
    ];

    // Filter based on gender preference
    if (genderPref) {
        if (femaleMatches.length > 0) {
            return femaleMatches;
        } else {
            // Show modal for mixed ride
            setTimeout(() => showGenderModal(), 500);
            return [];
        }
    }

    return [...femaleMatches, ...mixedMatches];
}

function displayMatches() {
    const container = document.getElementById('matchesList');
    
    if (matchedRides.length === 0) {
        container.innerHTML = '<p class="matches-subtitle">No matches found. Try adjusting your preferences.</p>';
        return;
    }

    container.innerHTML = matchedRides.map(match => `
        <div class="match-card ${match.gender === 'female' ? 'female-only' : ''}">
            <div class="match-header">
                <div class="match-route">${match.route}</div>
                <div class="match-price">₹${match.price}</div>
            </div>
            <div class="match-details">
                <div class="match-detail">⏰ ${match.time}</div>
                <div class="match-detail">💺 ${match.seats} seats available</div>
                <div class="match-detail">👤 ${match.driver}</div>
                <div class="match-detail">⭐ ${match.rating}/5.0</div>
            </div>
            <div class="match-tags">
                ${match.gender === 'female' ? '<span class="tag female">👩 Women Only</span>' : ''}
                ${match.preferences.includes('silent') ? '<span class="tag silent">🤫 Silent Ride</span>' : ''}
                ${match.preferences.includes('chat') ? '<span class="tag chat">💬 Chat Friendly</span>' : ''}
                ${match.preferences.includes('luggage') ? '<span class="tag luggage">🧳 Luggage OK</span>' : ''}
            </div>
            <div class="match-actions">
                <button class="btn-secondary" onclick="viewDetails(${match.id})">View Details</button>
                <button class="btn-primary" onclick="bookRide(${match.id})">Book Now</button>
            </div>
        </div>
    `).join('');
}

// Gender Preference Modal
function showGenderModal() {
    document.getElementById('genderModal').classList.add('active');
}

function closeGenderModal() {
    document.getElementById('genderModal').classList.remove('active');
}

function acceptMixedRide() {
    closeGenderModal();
    // Uncheck gender preference and search again
    document.getElementById('genderPref').checked = false;
    findMatches();
}

// Booking Functions
function bookRide(matchId) {
    const match = matchedRides.find(m => m.id === matchId);
    if (match) {
        const ride = {
            id: Date.now(),
            ...match,
            date: document.getElementById('rideDate').value,
            status: 'pending'
        };
        scheduledRides.push(ride);
        alert(`Ride booked successfully with ${match.driver}!\nTotal: ₹${match.price}`);
        updateUpcomingRides();
        generateCalendar();
    }
}

function viewDetails(matchId) {
    const match = matchedRides.find(m => m.id === matchId);
    alert(`Ride Details:\n\nDriver: ${match.driver}\nRoute: ${match.route}\nTime: ${match.time}\nPrice: ₹${match.price}\nRating: ${match.rating}/5.0\nSeats: ${match.seats} available`);
}

// Calendar Functions
function generateCalendar() {
    const container = document.getElementById('calendarGrid');
    const date = new Date();
    date.setMonth(date.getMonth() + currentMonth);
    
    const year = date.getFullYear();
    const month = date.getMonth();
    
    // Update header
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];
    document.getElementById('calendarMonth').textContent = `${monthNames[month]} ${year}`;
    
    // Get first day and number of days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Day headers
    const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let html = dayHeaders.map(day => 
        `<div class="calendar-day calendar-day-header">${day}</div>`
    ).join('');
    
    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
        html += '<div class="calendar-day"></div>';
    }
    
    // Days
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
        const currentDate = new Date(year, month, day);
        const dateStr = currentDate.toISOString().split('T')[0];
        const hasRide = scheduledRides.some(ride => ride.date === dateStr);
        const isToday = currentDate.toDateString() === today.toDateString();
        
        html += `<div class="calendar-day ${hasRide ? 'has-ride' : ''} ${isToday ? 'today' : ''}">${day}</div>`;
    }
    
    container.innerHTML = html;
}

function changeMonth(delta) {
    currentMonth += delta;
    generateCalendar();
}

// Update Upcoming Rides
function updateUpcomingRides() {
    const container = document.getElementById('upcomingRidesList');
    
    if (scheduledRides.length === 0) {
        container.innerHTML = '<p class="matches-subtitle">No upcoming rides scheduled</p>';
        return;
    }
    
    // Sort by date
    const sorted = [...scheduledRides].sort((a, b) => new Date(a.date) - new Date(b.date));
    
    container.innerHTML = sorted.map(ride => {
        const rideDate = new Date(ride.date);
        const day = rideDate.getDate();
        const month = rideDate.toLocaleDateString('en-US', { month: 'short' });
        
        return `
            <div class="ride-card">
                <div class="ride-date-badge">
                    <div class="ride-day">${day}</div>
                    <div class="ride-month">${month}</div>
                </div>
                <div class="ride-info">
                    <h4>${ride.route}</h4>
                    <div class="ride-meta">
                        <span>⏰ ${ride.time}</span>
                        <span>👤 ${ride.driver}</span>
                        <span>💰 ₹${ride.price}</span>
                        <span class="tag ${ride.status === 'pending' ? 'warning' : 'success'}">${ride.status}</span>
                    </div>
                </div>
                <div class="ride-actions">
                    <button class="btn-icon btn-edit" onclick="editRide(${ride.id})" title="Edit">✏️</button>
                    <button class="btn-icon btn-cancel" onclick="showCancelModal(${ride.id})" title="Cancel">❌</button>
                </div>
            </div>
        `;
    }).join('');
}

// Edit & Cancel Rides
function editRide(rideId) {
    alert('Edit functionality - Modify time, seats, or preferences');
}

function showCancelModal(rideId) {
    const ride = scheduledRides.find(r => r.id === rideId);
    
    // Calculate impact
    document.getElementById('affectedPassengers').textContent = '2 passengers';
    document.getElementById('costChange').textContent = '+₹80 per person';
    document.getElementById('timeChange').textContent = '+25 minutes';
    document.getElementById('cancelFee').textContent = '₹50';
    
    document.getElementById('impactModal').classList.add('active');
    document.getElementById('impactModal').dataset.rideId = rideId;
}

function closeImpactModal() {
    document.getElementById('impactModal').classList.remove('active');
}

function confirmCancellation() {
    const rideId = parseInt(document.getElementById('impactModal').dataset.rideId);
    scheduledRides = scheduledRides.filter(r => r.id !== rideId);
    
    closeImpactModal();
    alert('Ride cancelled successfully. Refund will be processed within 3-5 days.');
    updateUpcomingRides();
    generateCalendar();
}

// Load Mock Data
function loadMockData() {
    scheduledRides = [
        {
            id: 1001,
            route: 'Bhopal → Indore',
            driver: 'Priya Sharma',
            time: '09:30 AM',
            price: 380,
            date: '2026-01-22',
            status: 'pending',
            gender: 'female'
        },
        {
            id: 1002,
            route: 'MP Nagar → Vijay Nagar',
            driver: 'Anjali Patel',
            time: '02:00 PM',
            price: 420,
            date: '2026-01-25',
            status: 'pending',
            gender: 'female'
        }
    ];
    
    updateUpcomingRides();
}
