// Schedule data with ratings and dates
let scheduleData = [
    { id: 'TRP-001', vehicle: 'VEH-001', vehicleType: 'AC Bus', driver: 'John Doe', route: 'Indore → Bhopal', departure: '08:00', eta: '12:30', status: 'Completed', rating: 4.5, ratingCount: 23, date: '2026-01-19' },
    { id: 'TRP-002', vehicle: 'VEH-004', vehicleType: 'Non-AC Bus', driver: 'Priya Sharma', route: 'Indore → Ujjain', departure: '09:00', eta: '10:30', status: 'Pending', rating: 4.2, ratingCount: 18, date: '2026-01-19' },
    { id: 'TRP-003', vehicle: 'VEH-007', vehicleType: 'Luxury', driver: 'Rahul Verma', route: 'Indore → Dewas', departure: '10:00', eta: '11:00', status: 'In Progress', rating: 4.8, ratingCount: 45, date: '2026-01-20' },
    { id: 'TRP-004', vehicle: 'VEH-011', vehicleType: 'AC Bus', driver: 'Anjali Patel', route: 'Bhopal → Gwalior', departure: '07:00', eta: '13:00', status: 'Completed', rating: 4.6, ratingCount: 31, date: '2026-01-21' },
    { id: 'TRP-005', vehicle: 'VEH-015', vehicleType: 'Mini Bus', driver: 'Vikram Singh', route: 'Bhopal → Jabalpur', departure: '06:30', eta: '12:00', status: 'Pending', rating: 4.3, ratingCount: 27, date: '2026-01-22' },
    { id: 'TRP-006', vehicle: 'VEH-018', vehicleType: 'Luxury', driver: 'Sneha Gupta', route: 'Indore → Bhopal', departure: '14:00', eta: '18:30', status: 'Cancelled', rating: 3.9, ratingCount: 12, date: '2026-01-23' }
];

// Route pricing data
const routePricing = {
    'Indore → Bhopal': { 'AC Bus': 450, 'Non-AC Bus': 280, 'Luxury': 650, 'Mini Bus': 350 },
    'Indore → Ujjain': { 'AC Bus': 180, 'Non-AC Bus': 120, 'Luxury': 250, 'Mini Bus': 150 },
    'Indore → Dewas': { 'AC Bus': 150, 'Non-AC Bus': 100, 'Luxury': 220, 'Mini Bus': 130 },
    'Bhopal → Gwalior': { 'AC Bus': 550, 'Non-AC Bus': 380, 'Luxury': 750, 'Mini Bus': 450 },
    'Bhopal → Jabalpur': { 'AC Bus': 480, 'Non-AC Bus': 320, 'Luxury': 680, 'Mini Bus': 400 }
};

let filteredData = [...scheduleData];
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let selectedDate = null;
let currentRatingTripId = null;
let selectedCalendarRoute = '';
let selectedCalendarVehicle = '';

// Bhopal city locations
const bhopalLocations = {
    busStands: [
        { name: "Habibganj Bus Stand", coords: [23.2286, 77.4386], info: "Main bus terminal", address: "Habibganj, Bhopal", rating: 4.2 },
        { name: "ISBT Bhopal", coords: [23.2485, 77.4064], info: "Inter-State Bus Terminal", address: "Hoshangabad Road, Bhopal", rating: 4.5 },
        { name: "Bairagarh Bus Stand", coords: [23.2644, 77.3428], info: "Local & regional buses", address: "Bairagarh, Bhopal", rating: 4.0 },
        { name: "Govindpura Bus Stop", coords: [23.2156, 77.4767], info: "City bus terminal", address: "Govindpura, Bhopal", rating: 3.8 }
    ],
    restaurants: [
        { name: "Indian Coffee House", coords: [23.2632, 77.4029], info: "Classic South Indian cuisine", address: "MP Nagar, Bhopal", rating: 4.6 },
        { name: "Bapu Ki Kutia", coords: [23.2420, 77.4127], info: "Vegetarian restaurant", address: "Arera Colony, Bhopal", rating: 4.4 },
        { name: "Manohar Dairy", coords: [23.2599, 77.4126], info: "Famous for sweets & snacks", address: "New Market, Bhopal", rating: 4.7 },
        { name: "Kwality's", coords: [23.2656, 77.4025], info: "Multi-cuisine restaurant", address: "MP Nagar, Bhopal", rating: 4.3 },
        { name: "Under The Mango Tree", coords: [23.2403, 77.4147], info: "Fine dining", address: "Jehan Numa Palace, Bhopal", rating: 4.8 }
    ],
    hotels: [
        { name: "Jehan Numa Palace Hotel", coords: [23.2403, 77.4147], info: "5-star heritage hotel", address: "157 Shamla Hills, Bhopal", rating: 4.9 },
        { name: "Courtyard by Marriott", coords: [23.2311, 77.4373], info: "4-star hotel near station", address: "Maharana Pratap Nagar, Bhopal", rating: 4.6 },
        { name: "Noor-Us-Sabah Palace", coords: [23.2553, 77.4028], info: "Heritage hotel", address: "Koh-e-Fiza, Bhopal", rating: 4.5 },
        { name: "Hotel Lake View Ashok", coords: [23.2519, 77.4081], info: "Government hotel", address: "Shamla Hills, Bhopal", rating: 4.2 },
        { name: "Sayaji Hotel", coords: [23.2294, 77.4367], info: "Business hotel", address: "Plot No. 6, Malviya Nagar, Bhopal", rating: 4.4 }
    ]
};

// Transport routes
const transportRoutes = [
    { from: [23.2286, 77.4386], to: [23.2485, 77.4064], name: "Route 1: Habibganj - ISBT" },
    { from: [23.2485, 77.4064], to: [23.2644, 77.3428], name: "Route 2: ISBT - Bairagarh" },
    { from: [23.2599, 77.4126], to: [23.2156, 77.4767], name: "Route 3: City Center - Govindpura" }
];

// DOM Elements
const tbody = document.getElementById('scheduleTableBody');
const searchInput = document.getElementById('searchInput');
const routeFilter = document.getElementById('routeFilter');
const statusFilter = document.getElementById('statusFilter');
const vehicleTypeFilter = document.getElementById('vehicleTypeFilter');
const dateFilter = document.getElementById('dateFilter');
const resetFilters = document.getElementById('resetFilters');
const ratingModal = document.getElementById('ratingModal');
const closeModal = document.querySelector('.close-modal');
const ratingStars = document.querySelectorAll('#ratingStars i');
const submitRating = document.getElementById('submitRating');
const bookTripBtn = document.getElementById('bookTripBtn');
const calendarRouteSelect = document.getElementById('calendarRouteSelect');
const calendarVehicleSelect = document.getElementById('calendarVehicleSelect');
const bookingRoute = document.getElementById('bookingRoute');
const numPassengers = document.getElementById('numPassengers');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderTable();
    renderCalendar();
    initializeChart();
    initializeBhopalMap();
    initializeEventListeners();
    setDefaultBookingDate();
    updateStats();
});

// Render table
function renderTable() {
    tbody.innerHTML = '';
    
    if (filteredData.length === 0) {
        tbody.innerHTML = '<tr><td colspan="9" style="text-align: center; color: #6B7280;">No trips found matching your filters</td></tr>';
        return;
    }
    
    filteredData.forEach((trip) => {
        const row = document.createElement('tr');
        const statusClass = trip.status.toLowerCase().replace(' ', '');
        const stars = generateStarRating(trip.rating);
        
        row.innerHTML = `
            <td>${trip.id}</td>
            <td>${trip.vehicle}<br><small style="color: #6B7280;">${trip.vehicleType}</small></td>
            <td>${trip.driver}</td>
            <td>${trip.route}</td>
            <td>${trip.departure}</td>
            <td>${trip.eta}</td>
            <td><span class="status-badge status-${statusClass}">${trip.status}</span></td>
            <td>
                <div class="rating-stars">${stars}</div>
                <span class="rating-count">(${trip.ratingCount})</span>
            </td>
            <td>
                <button class="action-btn view-btn" onclick="viewTrip('${trip.id}')">
                    <i class="fas fa-eye"></i> View
                </button>
                <button class="action-btn rate-btn" onclick="openRatingModal('${trip.id}')">
                    <i class="fas fa-star"></i> Rate
                </button>
            </td>
        `;
        
        tbody.appendChild(row);
    });
}

// Generate star rating
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Filter functions
function applyFilters() {
    filteredData = scheduleData.filter(trip => {
        const searchTerm = searchInput.value.toLowerCase();
        const matchesSearch = trip.id.toLowerCase().includes(searchTerm) ||
                            trip.driver.toLowerCase().includes(searchTerm) ||
                            trip.vehicle.toLowerCase().includes(searchTerm) ||
                            trip.route.toLowerCase().includes(searchTerm);
        
        const matchesRoute = !routeFilter.value || trip.route === routeFilter.value;
        const matchesStatus = !statusFilter.value || trip.status === statusFilter.value;
        const matchesVehicleType = !vehicleTypeFilter.value || trip.vehicleType === vehicleTypeFilter.value;
        const matchesDate = !dateFilter.value || trip.date === dateFilter.value;
        
        return matchesSearch && matchesRoute && matchesStatus && matchesVehicleType && matchesDate;
    });
    
    renderTable();
    updateStats();
}

// Reset filters
function resetAllFilters() {
    searchInput.value = '';
    routeFilter.value = '';
    statusFilter.value = '';
    vehicleTypeFilter.value = '';
    dateFilter.value = '';
    filteredData = [...scheduleData];
    renderTable();
    updateStats();
    showNotification('Filters reset successfully');
}

// Calendar functions
function renderCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    const currentMonthElement = document.getElementById('currentMonth');
    
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December'];
    
    currentMonthElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const today = new Date();
    
    calendarGrid.innerHTML = '';
    
    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-date disabled';
        calendarGrid.appendChild(emptyCell);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dateCell = document.createElement('div');
        dateCell.className = 'calendar-date';
        
        const cellDate = new Date(currentYear, currentMonth, day);
        const dateString = cellDate.toISOString().split('T')[0];
        
        // Check availability and pricing
        const availability = getDateAvailability(dateString);
        const pricing = getDatePricing(dateString);
        
        // Create date content
        const dateNumber = document.createElement('div');
        dateNumber.className = 'date-number';
        dateNumber.textContent = day;
        
        const dateInfo = document.createElement('div');
        dateInfo.className = 'date-info';
        dateInfo.textContent = availability.text;
        
        dateCell.appendChild(dateNumber);
        dateCell.appendChild(dateInfo);
        
        // Add pricing if available
        if (pricing > 0 && availability.status !== 'full') {
            const priceTag = document.createElement('div');
            priceTag.className = 'price-tag';
            priceTag.textContent = `₹${pricing}`;
            dateCell.appendChild(priceTag);
        }
        
        // Mark today
        if (cellDate.toDateString() === today.toDateString()) {
            dateCell.classList.add('today');
        }
        
        // Mark selected date
        if (selectedDate && cellDate.toDateString() === selectedDate.toDateString()) {
            dateCell.classList.add('selected');
        }
        
        // Add availability class
        if (cellDate >= today) {
            dateCell.classList.add(availability.status);
        } else {
            dateCell.classList.add('disabled');
        }
        
        // Add click event (only for future dates)
        if (cellDate >= today) {
            dateCell.addEventListener('click', () => selectDate(cellDate));
        }
        
        calendarGrid.appendChild(dateCell);
    }
}

// Get date availability
function getDateAvailability(dateString) {
    // Random availability for demonstration
    const random = Math.random();
    
    if (random > 0.8) {
        return { status: 'full', text: 'Sold Out' };
    } else if (random > 0.5) {
        return { status: 'limited', text: '5 seats left' };
    } else {
        return { status: 'available', text: '15+ seats' };
    }
}

// Get date pricing
function getDatePricing(dateString) {
    if (!selectedCalendarRoute || !selectedCalendarVehicle) {
        return 0;
    }
    
    if (routePricing[selectedCalendarRoute] && routePricing[selectedCalendarRoute][selectedCalendarVehicle]) {
        // Add dynamic pricing based on day of week
        const date = new Date(dateString);
        const dayOfWeek = date.getDay();
        const basePrice = routePricing[selectedCalendarRoute][selectedCalendarVehicle];
        
        // Weekend pricing (Saturday = 6, Sunday = 0)
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            return Math.round(basePrice * 1.2); // 20% increase
        }
        
        return basePrice;
    }
    
    return 0;
}

function selectDate(date) {
    selectedDate = date;
    renderCalendar();
    dateFilter.value = date.toISOString().split('T')[0];
    document.getElementById('bookingDate').value = date.toISOString().split('T')[0];
    showNotification(`Date selected: ${date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`);
    calculateFare();
}

function previousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
}

// Initialize Bhopal Map
function initializeBhopalMap() {
    const map = L.map('bhopalMap').setView([23.2599, 77.4126], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);
    
    // Add bus stands
    bhopalLocations.busStands.forEach(location => {
        const marker = L.marker(location.coords, {
            icon: L.divIcon({
                html: '<div style="background-color: #4A90E2; border: 3px solid white; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 10px rgba(74, 144, 226, 0.5);"><i class="fas fa-bus" style="color: white; font-size: 14px;"></i></div>',
                className: '',
                iconSize: [32, 32],
                iconAnchor: [16, 16]
            })
        }).addTo(map);
        
        const popupContent = `
            <div style="min-width: 200px;">
                <h4 style="margin: 0 0 10px 0; color: #1F2937;"><i class="fas fa-bus"></i> ${location.name}</h4>
                <p style="margin: 5px 0; color: #6B7280; font-size: 13px;">${location.info}</p>
                <p style="margin: 5px 0; color: #6B7280; font-size: 12px;"><strong>Address:</strong> ${location.address}</p>
                <p style="margin: 5px 0; color: #FBBF24; font-size: 12px;">
                    <strong>Rating:</strong> ${generateStarRating(location.rating)} ${location.rating}/5
                </p>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        marker.bindTooltip(`<strong>${location.name}</strong><br>${location.info}`, {
            direction: 'top',
            offset: [0, -16]
        });
    });
    
    // Add restaurants
    bhopalLocations.restaurants.forEach(location => {
        const marker = L.marker(location.coords, {
            icon: L.divIcon({
                html: '<div style="background-color: #f59e0b; border: 3px solid white; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 10px rgba(245, 158, 11, 0.5);"><i class="fas fa-utensils" style="color: white; font-size: 14px;"></i></div>',
                className: '',
                iconSize: [32, 32],
                iconAnchor: [16, 16]
            })
        }).addTo(map);
        
        const popupContent = `
            <div style="min-width: 200px;">
                <h4 style="margin: 0 0 10px 0; color: #1F2937;"><i class="fas fa-utensils"></i> ${location.name}</h4>
                <p style="margin: 5px 0; color: #6B7280; font-size: 13px;">${location.info}</p>
                <p style="margin: 5px 0; color: #6B7280; font-size: 12px;"><strong>Address:</strong> ${location.address}</p>
                <p style="margin: 5px 0; color: #FBBF24; font-size: 12px;">
                    <strong>Rating:</strong> ${generateStarRating(location.rating)} ${location.rating}/5
                </p>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        marker.bindTooltip(`<strong>${location.name}</strong><br>${location.info}`, {
            direction: 'top',
            offset: [0, -16]
        });
    });
    
    // Add hotels
    bhopalLocations.hotels.forEach(location => {
        const marker = L.marker(location.coords, {
            icon: L.divIcon({
                html: '<div style="background-color: #10b981; border: 3px solid white; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 10px rgba(16, 185, 129, 0.5);"><i class="fas fa-hotel" style="color: white; font-size: 14px;"></i></div>',
                className: '',
                iconSize: [32, 32],
                iconAnchor: [16, 16]
            })
        }).addTo(map);
        
        const popupContent = `
            <div style="min-width: 200px;">
                <h4 style="margin: 0 0 10px 0; color: #1F2937;"><i class="fas fa-hotel"></i> ${location.name}</h4>
                <p style="margin: 5px 0; color: #6B7280; font-size: 13px;">${location.info}</p>
                <p style="margin: 5px 0; color: #6B7280; font-size: 12px;"><strong>Address:</strong> ${location.address}</p>
                <p style="margin: 5px 0; color: #FBBF24; font-size: 12px;">
                    <strong>Rating:</strong> ${generateStarRating(location.rating)} ${location.rating}/5
                </p>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        marker.bindTooltip(`<strong>${location.name}</strong><br>${location.info}`, {
            direction: 'top',
            offset: [0, -16]
        });
    });
    
    // Draw transport routes
    transportRoutes.forEach(route => {
        L.polyline([route.from, route.to], {
            color: '#8b5cf6',
            weight: 3,
            opacity: 0.6,
            dashArray: '10, 10'
        }).addTo(map).bindTooltip(route.name);
    });
}

// Initialize Chart
function initializeChart() {
    const ctx = document.getElementById('scheduleChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Completed Trips',
                data: [32, 35, 37, 34, 39, 42, 38],
                fill: false,
                borderColor: '#4A90E2',
                backgroundColor: '#4A90E2',
                tension: 0.4,
                pointBackgroundColor: '#4A90E2',
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 10
                    }
                }
            }
        }
    });
}

// Calculate fare
function calculateFare() {
    const route = bookingRoute.value;
    const passengers = parseInt(numPassengers.value) || 1;
    const vehicleType = 'AC Bus'; // Default vehicle type
    
    if (route && routePricing[route] && routePricing[route][vehicleType]) {
        const baseFare = routePricing[route][vehicleType];
        const totalFare = baseFare * passengers;
        
        document.getElementById('baseFare').textContent = baseFare;
        document.getElementById('farePassengers').textContent = passengers;
        document.getElementById('totalFare').textContent = totalFare;
        document.getElementById('farePreview').style.display = 'block';
    } else {
        document.getElementById('farePreview').style.display = 'none';
    }
}

// Rating modal functions
function openRatingModal(tripId) {
    currentRatingTripId = tripId;
    ratingModal.classList.add('show');
    resetRatingStars();
}

function closeRatingModal() {
    ratingModal.classList.remove('show');
    currentRatingTripId = null;
    resetRatingStars();
    document.getElementById('ratingComment').value = '';
}

function resetRatingStars() {
    ratingStars.forEach(star => {
        star.classList.remove('active');
        star.classList.remove('fas');
        star.classList.add('far');
    });
}

// View trip function
function viewTrip(tripId) {
    const trip = scheduleData.find(t => t.id === tripId);
    if (trip) {
        alert(`Trip Details:\n\nTrip ID: ${trip.id}\nVehicle: ${trip.vehicle} (${trip.vehicleType})\nDriver: ${trip.driver}\nRoute: ${trip.route}\nDeparture: ${trip.departure}\nETA: ${trip.eta}\nStatus: ${trip.status}\nRating: ${trip.rating}/5 (${trip.ratingCount} reviews)`);
    }
}

// Book trip function
function bookTrip() {
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const route = document.getElementById('bookingRoute').value;
    const date = document.getElementById('bookingDate').value;
    const time = document.getElementById('bookingTime').value;
    const passengers = document.getElementById('numPassengers').value;
    
    if (!name || !phone || !route || !date || !time) {
        showNotification('⚠️ Please fill in all required fields', 'warning');
        return;
    }
    
    showNotification(`✅ Booking confirmed for ${name}!\nTrip: ${route}\nDate: ${date} at ${time}\nPassengers: ${passengers}`, 'success');
    
    // Reset form
    document.getElementById('customerName').value = '';
    document.getElementById('customerPhone').value = '';
    document.getElementById('bookingRoute').value = '';
    document.getElementById('bookingDate').value = '';
    document.getElementById('bookingTime').value = '';
    document.getElementById('numPassengers').value = '1';
    document.getElementById('farePreview').style.display = 'none';
}

// Update stats
function updateStats() {
    const total = filteredData.length;
    const completed = filteredData.filter(t => t.status === 'Completed').length;
    const pending = filteredData.filter(t => t.status === 'Pending').length;
    const cancelled = filteredData.filter(t => t.status === 'Cancelled').length;
    
    document.getElementById('totalTrips').textContent = total;
    document.getElementById('completedTrips').textContent = completed;
    document.getElementById('pendingTrips').textContent = pending;
    document.getElementById('cancelledTrips').textContent = cancelled;
}

// Set default booking date
function setDefaultBookingDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('bookingDate').value = today;
    document.getElementById('bookingDate').min = today;
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'warning' ? '#f59e0b' : '#10b981'};
        color: white;
        padding: 15px 25px;
        border-radius: 12px;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        font-weight: 500;
        max-width: 400px;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Initialize event listeners
function initializeEventListeners() {
    // Filter inputs
    searchInput.addEventListener('input', applyFilters);
    routeFilter.addEventListener('change', applyFilters);
    statusFilter.addEventListener('change', applyFilters);
    vehicleTypeFilter.addEventListener('change', applyFilters);
    dateFilter.addEventListener('change', applyFilters);
    resetFilters.addEventListener('click', resetAllFilters);
    
    // Calendar navigation
    document.getElementById('prevMonth').addEventListener('click', previousMonth);
    document.getElementById('nextMonth').addEventListener('click', nextMonth);
    
    // Calendar filters
    calendarRouteSelect.addEventListener('change', function() {
        selectedCalendarRoute = this.value;
        renderCalendar();
    });
    
    calendarVehicleSelect.addEventListener('change', function() {
        selectedCalendarVehicle = this.value;
        renderCalendar();
    });
    
    // Booking inputs
    bookingRoute.addEventListener('change', calculateFare);
    numPassengers.addEventListener('input', calculateFare);
    bookTripBtn.addEventListener('click', bookTrip);
    
    // Rating modal
    closeModal.addEventListener('click', closeRatingModal);
    
    ratingStars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.dataset.rating);
            resetRatingStars();
            
            for (let i = 0; i < rating; i++) {
                ratingStars[i].classList.remove('far');
                ratingStars[i].classList.add('fas', 'active');
            }
            
            document.querySelector('.rating-text').textContent = `You rated ${rating} out of 5 stars`;
        });
    });
    
    submitRating.addEventListener('click', function() {
        const activeStars = document.querySelectorAll('#ratingStars i.active').length;
        const comment = document.getElementById('ratingComment').value;
        
        if (activeStars === 0) {
            showNotification('⚠️ Please select a rating', 'warning');
            return;
        }
        
        const trip = scheduleData.find(t => t.id === currentRatingTripId);
        if (trip) {
            trip.ratingCount++;
            trip.rating = ((trip.rating * (trip.ratingCount - 1)) + activeStars) / trip.ratingCount;
            trip.rating = Math.round(trip.rating * 10) / 10;
        }
        
        showNotification('✅ Thank you for your rating!');
        closeRatingModal();
        renderTable();
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === ratingModal) {
            closeRatingModal();
        }
    });
}
