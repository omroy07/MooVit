// City coordinates and detailed information for Madhya Pradesh transport network
const cities = {
    bhopal: {
        coords: [23.2599, 77.4126],
        name: "Bhopal",
        info: "Capital City - Major Transport Hub",
        address: "Bhopal Junction Railway Station, Hamidia Road, Bhopal, MP 462001",
        population: "1.8 Million",
        transportModes: "Bus, Train, Metro, Auto",
        majorStations: "Bhopal Junction, Habibganj"
    },
    indore: {
        coords: [22.7196, 75.8577],
        name: "Indore",
        info: "Commercial Capital - Cleanest City",
        address: "Indore Junction, MG Road, Indore, MP 452001",
        population: "2.1 Million",
        transportModes: "Bus, Train, Metro, Auto",
        majorStations: "Indore Junction, Rajendra Nagar"
    },
    gwalior: {
        coords: [26.2183, 78.1828],
        name: "Gwalior",
        info: "Historic City - Fort & Palace",
        address: "Gwalior Junction, Station Road, Gwalior, MP 474001",
        population: "1.1 Million",
        transportModes: "Bus, Train, Auto",
        majorStations: "Gwalior Junction, Birlanagar"
    },
    jabalpur: {
        coords: [23.1815, 79.9864],
        name: "Jabalpur",
        info: "Marble Rocks & Educational Hub",
        address: "Jabalpur Junction, Napier Town, Jabalpur, MP 482001",
        population: "1.2 Million",
        transportModes: "Bus, Train, Auto",
        majorStations: "Jabalpur Junction, Madan Mahal"
    },
    ujjain: {
        coords: [23.1765, 75.7885],
        name: "Ujjain",
        info: "Religious City - Mahakal Temple",
        address: "Ujjain Junction, Dewas Gate, Ujjain, MP 456001",
        population: "515,000",
        transportModes: "Bus, Train, Auto",
        majorStations: "Ujjain Junction"
    },
    sagar: {
        coords: [23.8388, 78.7378],
        name: "Sagar",
        info: "University Town",
        address: "Sagar Railway Station, Civil Lines, Sagar, MP 470002",
        population: "370,000",
        transportModes: "Bus, Train, Auto",
        majorStations: "Sagar Station"
    },
    ratlam: {
        coords: [23.3315, 75.0367],
        name: "Ratlam",
        info: "Railway Junction - Industrial City",
        address: "Ratlam Junction, Station Road, Ratlam, MP 457001",
        population: "280,000",
        transportModes: "Bus, Train, Auto",
        majorStations: "Ratlam Junction"
    },
    dewas: {
        coords: [22.9659, 76.0591],
        name: "Dewas",
        info: "Industrial Hub",
        address: "Dewas Railway Station, Station Road, Dewas, MP 455001",
        population: "290,000",
        transportModes: "Bus, Train, Auto",
        majorStations: "Dewas Station"
    }
};

// Transport data
let selectedRoutes = { bus: 0, train: 0, metro: 0 };
let selectedItems = [];
let currentTransportMode = 'bus';
let routeMap;
let fromMarker = null;
let toMarker = null;
let routeLine = null;
let cityMarkers = [];

// DOM elements
const fromCitySelect = document.getElementById('fromCity');
const toCitySelect = document.getElementById('toCity');
const travelDateInput = document.getElementById('travelDate');
const passengersInput = document.getElementById('passengers');
const searchButton = document.getElementById('searchRoutes');
const selectedRouteDiv = document.getElementById('selectedRoute');
const transportToggleButtons = document.querySelectorAll('.toggle-btn');
const routeItems = document.querySelectorAll('.route-item');
const scheduleTab = document.querySelectorAll('.schedule-tab');
const modeCards = document.querySelectorAll('.mode-card');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeMap();
    initializeEventListeners();
    setDefaultDate();
});

// Initialize interactive map
function initializeMap() {
    // Initialize main route map
    routeMap = L.map('routeMap').setView([23.5, 77.0], 7);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(routeMap);
    
    // Add city markers with interactive features
    addCityMarkers();
}

// Add city markers with hover and click functionality
function addCityMarkers() {
    Object.entries(cities).forEach(([cityKey, cityData]) => {
        // Create custom blue marker icon
        const blueIcon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="background-color: #4A90E2; border: 3px solid white; border-radius: 50%; width: 24px; height: 24px; box-shadow: 0 2px 8px rgba(74, 144, 226, 0.5);"></div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12],
            popupAnchor: [0, -12]
        });
        
        // Create marker
        const marker = L.marker(cityData.coords, { icon: blueIcon })
            .addTo(routeMap);
        
        // Bind popup with detailed information
        const popupContent = `
            <div style="min-width: 200px;">
                <h4 style="margin: 0 0 10px 0; color: #2c3e50; font-size: 16px;">📍 ${cityData.name}</h4>
                <p style="margin: 5px 0; color: #666; font-size: 13px;"><strong>Info:</strong> ${cityData.info}</p>
                <p style="margin: 5px 0; color: #666; font-size: 12px;"><strong>Address:</strong> ${cityData.address}</p>
                <p style="margin: 5px 0; color: #666; font-size: 12px;"><strong>Population:</strong> ${cityData.population}</p>
                <p style="margin: 5px 0; color: #666; font-size: 12px;"><strong>Transport:</strong> ${cityData.transportModes}</p>
                <p style="margin: 5px 0; color: #4A90E2; font-size: 12px; font-weight: 600;"><strong>Stations:</strong> ${cityData.majorStations}</p>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        
        // Bind tooltip for hover effect
        const tooltipContent = `<strong>${cityData.name}</strong><br>${cityData.info}`;
        marker.bindTooltip(tooltipContent, {
            permanent: false,
            direction: 'top',
            offset: [0, -10],
            className: 'custom-tooltip'
        });
        
        // Store marker reference
        cityMarkers.push({ key: cityKey, marker: marker });
    });
}

// Initialize all event listeners
function initializeEventListeners() {
    // Search button
    searchButton.addEventListener('click', handleSearch);
    
    // Transport mode toggle buttons
    transportToggleButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            transportToggleButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentTransportMode = this.dataset.transport;
        });
    });
    
    // Route items
    routeItems.forEach(item => {
        item.addEventListener('click', function() {
            routeItems.forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
            displayRouteDetails(this);
        });
    });
    
    // Schedule tabs
    scheduleTab.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            
            // Update active tab
            scheduleTab.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update active content
            document.querySelectorAll('.schedule-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`${tabId}-schedule`).classList.add('active');
        });
    });
    
    // Transport mode cards
    modeCards.forEach(card => {
        card.addEventListener('click', function() {
            modeCards.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const mode = this.dataset.mode;
            showNotification(`${mode.charAt(0).toUpperCase() + mode.slice(1)} mode selected`);
        });
    });
    
    // Map control buttons
    document.getElementById('resetMapView').addEventListener('click', () => {
        routeMap.setView([23.5, 77.0], 7);
        showNotification('Map view reset');
    });
    
    document.getElementById('showAllRoutes').addEventListener('click', showAllRoutes);
    document.getElementById('clearRoutes').addEventListener('click', clearRoutes);
    
    // Safety buttons
    document.getElementById('sosButton').addEventListener('click', () => {
        showNotification('⚠️ SOS Alert Activated! Emergency services contacted.', 'warning');
    });
    
    document.getElementById('shareLocation').addEventListener('click', () => {
        showNotification('📍 Location shared with emergency contacts');
    });
    
    document.getElementById('helplineBtn').addEventListener('click', () => {
        document.querySelector('.emergency-section').scrollIntoView({ behavior: 'smooth' });
    });
}

// Handle route search
function handleSearch() {
    const fromCity = fromCitySelect.value;
    const toCity = toCitySelect.value;
    const travelDate = travelDateInput.value;
    const passengers = passengersInput.value;
    
    if (!fromCity || !toCity) {
        showNotification('⚠️ Please select both origin and destination cities', 'warning');
        return;
    }
    
    if (fromCity === toCity) {
        showNotification('⚠️ Origin and destination cannot be the same', 'warning');
        return;
    }
    
    // Calculate distance and fare
    const distance = calculateDistance(cities[fromCity].coords, cities[toCity].coords);
    const fare = calculateFare(distance, currentTransportMode, passengers);
    
    // Display route on map
    displayRouteOnMap(fromCity, toCity);
    
    // Display selected route information
    selectedRouteDiv.classList.remove('hidden');
    selectedRouteDiv.innerHTML = `
        <strong>Route Details:</strong><br>
        📍 From: ${cities[fromCity].name} → To: ${cities[toCity].name}<br>
        📏 Distance: ${distance.toFixed(0)} km<br>
        🚌 Mode: ${currentTransportMode.charAt(0).toUpperCase() + currentTransportMode.slice(1)}<br>
        👥 Passengers: ${passengers}<br>
        📅 Date: ${travelDate || 'Not selected'}<br>
        💰 <strong>Estimated Fare: ₹${fare}</strong>
    `;
    
    showNotification('✅ Route calculated successfully!');
}

// Display route on map
function displayRouteOnMap(fromCity, toCity) {
    // Clear previous markers and lines
    clearRoutes();
    
    const fromCoords = cities[fromCity].coords;
    const toCoords = cities[toCity].coords;
    
    // Create custom icons
    const startIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="background-color: #4caf50; border: 3px solid white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 10px rgba(76, 175, 80, 0.5); font-size: 16px;">🚩</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
    
    const endIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="background-color: #e74c3c; border: 3px solid white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 10px rgba(231, 76, 60, 0.5); font-size: 16px;">🎯</div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
    
    // Add markers
    fromMarker = L.marker(fromCoords, { icon: startIcon })
        .addTo(routeMap)
        .bindPopup(`<strong>Origin:</strong> ${cities[fromCity].name}`);
    
    toMarker = L.marker(toCoords, { icon: endIcon })
        .addTo(routeMap)
        .bindPopup(`<strong>Destination:</strong> ${cities[toCity].name}`);
    
    // Draw route line
    routeLine = L.polyline([fromCoords, toCoords], {
        color: '#4A90E2',
        weight: 4,
        opacity: 0.7,
        dashArray: '10, 10',
        dashOffset: '0'
    }).addTo(routeMap);
    
    // Animate the dash
    animateDash();
    
    // Fit map to show the route
    const bounds = L.latLngBounds([fromCoords, toCoords]);
    routeMap.fitBounds(bounds, { padding: [50, 50] });
}

// Animate dashed line
function animateDash() {
    if (!routeLine) return;
    
    let offset = 0;
    setInterval(() => {
        offset += 1;
        if (routeLine) {
            routeLine.setStyle({ dashOffset: offset });
        }
    }, 50);
}

// Show all possible routes
function showAllRoutes() {
    clearRoutes();
    
    const routes = [
        ['bhopal', 'indore'],
        ['bhopal', 'gwalior'],
        ['indore', 'ujjain'],
        ['gwalior', 'jabalpur']
    ];
    
    routes.forEach(([from, to]) => {
        const fromCoords = cities[from].coords;
        const toCoords = cities[to].coords;
        
        L.polyline([fromCoords, toCoords], {
            color: '#8b5cf6',
            weight: 3,
            opacity: 0.5
        }).addTo(routeMap);
    });
    
    showNotification('📍 Showing all major routes');
}

// Clear routes from map
function clearRoutes() {
    if (fromMarker) routeMap.removeLayer(fromMarker);
    if (toMarker) routeMap.removeLayer(toMarker);
    if (routeLine) routeMap.removeLayer(routeLine);
    
    fromMarker = null;
    toMarker = null;
    routeLine = null;
}

// Calculate distance between two coordinates (Haversine formula)
function calculateDistance(coords1, coords2) {
    const R = 6371; // Earth's radius in km
    const lat1 = coords1[0] * Math.PI / 180;
    const lat2 = coords2[0] * Math.PI / 180;
    const deltaLat = (coords2[0] - coords1[0]) * Math.PI / 180;
    const deltaLon = (coords2[1] - coords1[1]) * Math.PI / 180;
    
    const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    
    return R * c;
}

// Calculate fare based on distance and transport mode
function calculateFare(distance, mode, passengers) {
    let baseRate;
    
    switch(mode) {
        case 'bus':
            baseRate = distance < 50 ? 1.5 : distance < 200 ? 1.8 : 2.0;
            break;
        case 'train':
            baseRate = 1.2;
            break;
        case 'metro':
            baseRate = 0.8;
            break;
        default:
            baseRate = 1.5;
    }
    
    const totalFare = Math.round(distance * baseRate * passengers);
    return totalFare;
}

// Display route details
function displayRouteDetails(routeElement) {
    const routeHeader = routeElement.querySelector('.route-header').textContent;
    const routeDetails = routeElement.querySelector('.route-details').textContent;
    
    selectedRouteDiv.classList.remove('hidden');
    selectedRouteDiv.innerHTML = `
        <strong>${routeHeader}</strong><br>
        ${routeDetails}
    `;
    
    showNotification('Route selected successfully');
}

// Set default date to today
function setDefaultDate() {
    const today = new Date().toISOString().split('T')[0];
    travelDateInput.value = today;
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.background = type === 'warning' ? '#ff9800' : '#4caf50';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Capitalize first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
