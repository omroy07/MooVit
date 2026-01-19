// Bhopal Restaurant Finder - Enhanced JavaScript
// Restaurant Data with Food Images
const restaurantsData = [
    {
        "id": 1,
        "name": "Winds n Waves",
        "type": "Restaurant & Bar",
        "cuisine": "North Indian, Continental, Chinese, Seafood",
        "rating": 4.5,
        "totalReviews": 1247,
        "cleanliness": 4.7,
        "foodQuality": 4.6,
        "serviceRating": 4.5,
        "ambienceRating": 4.8,
        "priceLevel": 3,
        "priceRange": "₹800-₹1500 for two",
        "averageCost": 1150,
        "distance": "4.2 km",
        "crowdLevel": "Moderately Busy",
        "crowdPercent": 65,
        "peakHours": ["1:00 PM - 3:00 PM", "8:00 PM - 10:00 PM"],
        "avgWaitTime": "15-20 mins",
        "address": "Van Vihar Road, Near Upper Lake, Bhopal",
        "landmark": "Opposite Van Vihar National Park",
        "phone": "+91-755-2661100",
        "website": "www.windsnwaves.com",
        "openNow": true,
        "timings": "11:00 AM - 11:30 PM",
        "weekendTimings": "11:00 AM - 12:00 AM",
        "specialties": ["Grilled Fish", "Tandoori Platter", "Lake View Seating", "Live Music", "Bar"],
        "mustTryDishes": ["Butter Garlic Prawns", "Chicken Tikka", "Paneer Lababdar"],
        "foodImage": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=800&h=500&fit=crop",
        "diningDiscount": false,
        "discountDetails": "",
        "swiggyAvailable": true,
        "zomatoAvailable": true,
        "swiggyLink": "https://www.swiggy.com/bhopal/winds-n-waves",
        "zomatoLink": "https://www.zomato.com/bhopal/winds-n-waves",
        "googleMapsLink": "https://maps.google.com/?q=Winds+n+Waves+Bhopal",
        "directionsLink": "https://www.google.com/maps/dir/?api=1&destination=23.2472,77.4126",
        "bookingLink": "Contact for reservations",
        "deliveryTime": "40-50 mins",
        "facilities": {
            "parking": true,
            "valetParking": true,
            "wifi": true,
            "cardAccepted": true,
            "outdoorSeating": true,
            "liveMusic": true,
            "bar": true,
            "privateRooms": false,
            "wheelchairAccessible": true,
            "kidsPlay": false
        },
        "popularFor": ["Date Night", "Family Dining", "Group Outings"],
        "lat": 23.2472,
        "lng": 77.4126
    },
    {
        "id": 2,
        "name": "Jehan Numa Palace Hotel - Shahanama Restaurant",
        "type": "Fine Dining - Heritage Hotel",
        "cuisine": "Mughlai, North Indian, Continental, Royal Cuisine",
        "rating": 4.8,
        "totalReviews": 2847,
        "cleanliness": 4.9,
        "foodQuality": 4.9,
        "serviceRating": 4.9,
        "ambienceRating": 5.0,
        "priceLevel": 4,
        "priceRange": "₹2000-₹3500 for two",
        "averageCost": 2750,
        "distance": "3.5 km",
        "crowdLevel": "Very Busy",
        "crowdPercent": 85,
        "peakHours": ["12:30 PM - 2:30 PM", "7:30 PM - 10:00 PM"],
        "avgWaitTime": "30-40 mins",
        "address": "157 Shamla Hills, Near Raj Bhavan, Bhopal",
        "landmark": "Opposite Raj Bhavan",
        "phone": "+91-755-2661100",
        "website": "www.jehannuma.com",
        "openNow": true,
        "timings": "7:00 AM - 11:00 PM",
        "weekendTimings": "7:00 AM - 11:00 PM",
        "specialties": ["Heritage Property", "Royal Dining", "Nawabi Cuisine", "Buffet", "Private Dining"],
        "mustTryDishes": ["Raan Biryani", "Galouti Kebab", "Nihari", "Shahi Tukda"],
        "foodImage": "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=500&fit=crop",
        "diningDiscount": false,
        "discountDetails": "",
        "swiggyAvailable": false,
        "zomatoAvailable": true,
        "swiggyLink": "",
        "zomatoLink": "https://www.zomato.com/bhopal/jehan-numa-palace",
        "googleMapsLink": "https://maps.google.com/?q=Jehan+Numa+Palace+Bhopal",
        "directionsLink": "https://www.google.com/maps/dir/?api=1&destination=23.2428,77.4217",
        "bookingLink": "www.jehannuma.com/booking",
        "deliveryTime": "Not Available",
        "facilities": {
            "parking": true,
            "valetParking": true,
            "wifi": true,
            "cardAccepted": true,
            "outdoorSeating": true,
            "liveMusic": true,
            "bar": true,
            "privateRooms": true,
            "wheelchairAccessible": true,
            "kidsPlay": false
        },
        "popularFor": ["Fine Dining", "Special Occasions", "Business Meetings", "Wedding Celebrations"],
        "lat": 23.2428,
        "lng": 77.4217
    },
    {
        "id": 3,
        "name": "Filfora",
        "type": "Restaurant - Mughlai Specialist",
        "cuisine": "Mughlai, North Indian, Kebabs",
        "rating": 4.6,
        "totalReviews": 1856,
        "cleanliness": 4.4,
        "foodQuality": 4.8,
        "serviceRating": 4.3,
        "ambienceRating": 4.2,
        "priceLevel": 2,
        "priceRange": "₹400-₹800 for two",
        "averageCost": 600,
        "distance": "5.8 km",
        "crowdLevel": "Very Busy",
        "crowdPercent": 90,
        "peakHours": ["1:00 PM - 3:00 PM", "8:00 PM - 11:00 PM"],
        "avgWaitTime": "25-35 mins",
        "address": "Koh-e-Fiza, Near Taj-ul-Masajid, Bhopal",
        "landmark": "Near Taj-ul-Masajid",
        "phone": "+91-755-2577777",
        "website": "",
        "openNow": true,
        "timings": "12:00 PM - 11:30 PM",
        "weekendTimings": "12:00 PM - 12:00 AM",
        "specialties": ["Shami Kebab", "Chicken Biryani", "Bhuna Gosht", "Kebab Platter"],
        "mustTryDishes": ["Shami Kebab", "Mutton Biryani", "Chicken Changezi", "Roomali Roti"],
        "foodImage": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=500&fit=crop",
        "diningDiscount": true,
        "discountPlatform": "Swiggy Dineout",
        "discountDetails": "20% off on total bill (max ₹100)",
        "swiggyAvailable": true,
        "zomatoAvailable": true,
        "swiggyLink": "https://www.swiggy.com/bhopal/filfora",
        "zomatoLink": "https://www.zomato.com/bhopal/filfora",
        "googleMapsLink": "https://maps.google.com/?q=Filfora+Koh-e-Fiza+Bhopal",
        "directionsLink": "https://www.google.com/maps/dir/?api=1&destination=23.2365,77.4156",
        "bookingLink": "Contact for reservations",
        "deliveryTime": "35-45 mins",
        "facilities": {
            "parking": true,
            "valetParking": false,
            "wifi": false,
            "cardAccepted": true,
            "outdoorSeating": false,
            "liveMusic": false,
            "bar": false,
            "privateRooms": true,
            "wheelchairAccessible": false,
            "kidsPlay": false
        },
        "popularFor": ["Non-Veg Food", "Family Dining", "Late Night Dining"],
        "lat": 23.2365,
        "lng": 77.4156
    },
    {
        "id": 4,
        "name": "Bapu Ki Kutia",
        "type": "Restaurant - Pure Vegetarian",
        "cuisine": "North Indian, South Indian, Chinese, Gujarati Thali",
        "rating": 4.3,
        "totalReviews": 2145,
        "cleanliness": 4.2,
        "foodQuality": 4.5,
        "serviceRating": 4.2,
        "ambienceRating": 4.1,
        "priceLevel": 2,
        "priceRange": "₹300-₹600 for two",
        "averageCost": 450,
        "distance": "2.1 km",
        "crowdLevel": "Very Busy",
        "crowdPercent": 88,
        "peakHours": ["12:30 PM - 2:30 PM", "7:30 PM - 9:30 PM"],
        "avgWaitTime": "20-30 mins",
        "address": "6, New Market, TT Nagar, Bhopal",
        "landmark": "Near New Market",
        "phone": "+91-755-2540123",
        "website": "",
        "openNow": true,
        "timings": "11:00 AM - 10:30 PM",
        "weekendTimings": "11:00 AM - 11:00 PM",
        "specialties": ["Palak Paneer", "Veg Thali", "Dosa", "Punjabi Cuisine", "Family Restaurant"],
        "mustTryDishes": ["Paneer Butter Masala", "Dal Makhani", "Masala Dosa", "Rajasthani Thali"],
        "foodImage": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&h=500&fit=crop",
        "diningDiscount": true,
        "discountPlatform": "Zomato Gold",
        "discountDetails": "25% off on food bill",
        "swiggyAvailable": true,
        "zomatoAvailable": true,
        "swiggyLink": "https://www.swiggy.com/bhopal/bapu-ki-kutia",
        "zomatoLink": "https://www.zomato.com/bhopal/bapu-ki-kutia",
        "googleMapsLink": "https://maps.google.com/?q=Bapu+Ki+Kutia+New+Market+Bhopal",
        "directionsLink": "https://www.google.com/maps/dir/?api=1&destination=23.2346,77.4029",
        "bookingLink": "Contact for reservations",
        "deliveryTime": "30-40 mins",
        "facilities": {
            "parking": true,
            "valetParking": false,
            "wifi": false,
            "cardAccepted": true,
            "outdoorSeating": false,
            "liveMusic": false,
            "bar": false,
            "privateRooms": false,
            "wheelchairAccessible": true,
            "kidsPlay": false
        },
        "popularFor": ["Family Dining", "Pure Veg", "Lunch Thali", "South Indian Breakfast"],
        "lat": 23.2346,
        "lng": 77.4029
    },
    {
        "id": 5,
        "name": "Hakeem's",
        "type": "Restaurant - Non-Veg Specialist",
        "cuisine": "North Indian, Mughlai, Tandoor",
        "rating": 4.4,
        "totalReviews": 3245,
        "cleanliness": 4.1,
        "foodQuality": 4.7,
        "serviceRating": 4.3,
        "ambienceRating": 4.0,
        "priceLevel": 2,
        "priceRange": "₹400-₹800 for two",
        "averageCost": 600,
        "distance": "3.8 km",
        "crowdLevel": "Very Busy",
        "crowdPercent": 92,
        "peakHours": ["1:00 PM - 3:00 PM", "8:00 PM - 10:30 PM"],
        "avgWaitTime": "25-35 mins",
        "address": "Zone 1, MP Nagar & Bittan Market, Bhopal",
        "landmark": "MP Nagar Zone 1",
        "phone": "+91-755-2557890",
        "website": "",
        "openNow": true,
        "timings": "12:00 PM - 11:30 PM",
        "weekendTimings": "12:00 PM - 12:00 AM",
        "specialties": ["Butter Chicken", "Egg Tawa Masala", "Seekh Kebab", "Chicken Tikka"],
        "mustTryDishes": ["Butter Chicken", "Egg Curry", "Mutton Rogan Josh", "Tandoori Chicken"],
        "foodImage": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&h=500&fit=crop",
        "diningDiscount": true,
        "discountPlatform": "Swiggy Dineout",
        "discountDetails": "15% off on total bill",
        "swiggyAvailable": true,
        "zomatoAvailable": true,
        "swiggyLink": "https://www.swiggy.com/bhopal/hakeems",
        "zomatoLink": "https://www.zomato.com/bhopal/hakeems",
        "googleMapsLink": "https://maps.google.com/?q=Hakeems+MP+Nagar+Bhopal",
        "directionsLink": "https://www.google.com/maps/dir/?api=1&destination=23.2328,77.4125",
        "bookingLink": "Contact for reservations",
        "deliveryTime": "35-45 mins",
        "facilities": {
            "parking": true,
            "valetParking": false,
            "wifi": false,
            "cardAccepted": true,
            "outdoorSeating": false,
            "liveMusic": false,
            "bar": false,
            "privateRooms": true,
            "wheelchairAccessible": false,
            "kidsPlay": false
        },
        "popularFor": ["Non-Veg Food", "Family Dining", "Chicken Dishes"],
        "lat": 23.2328,
        "lng": 77.4125
    },
    {
        "id": 6,
        "name": "Indian Coffee House",
        "type": "Cafe - Heritage",
        "cuisine": "South Indian, Snacks, Coffee",
        "rating": 4.2,
        "totalReviews": 1201,
        "cleanliness": 3.9,
        "foodQuality": 4.3,
        "serviceRating": 4.0,
        "ambienceRating": 4.5,
        "priceLevel": 1,
        "priceRange": "₹200-₹400 for two",
        "averageCost": 300,
        "distance": "2.8 km",
        "crowdLevel": "Moderately Busy",
        "crowdPercent": 65,
        "peakHours": ["9:00 AM - 11:00 AM", "5:00 PM - 7:00 PM"],
        "avgWaitTime": "10-15 mins",
        "address": "Hamidia Road, Near Taj-ul-Masajid, Bhopal",
        "landmark": "Hamidia Road",
        "phone": "+91-755-2532100",
        "website": "",
        "openNow": true,
        "timings": "8:00 AM - 9:00 PM",
        "weekendTimings": "8:00 AM - 9:00 PM",
        "specialties": ["Kerala Biryani", "Filter Coffee", "Masala Dosa", "Heritage Cafe"],
        "mustTryDishes": ["Masala Dosa", "Filter Coffee", "Sambar Vada", "Idli"],
        "foodImage": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&h=500&fit=crop",
        "diningDiscount": false,
        "discountDetails": "",
        "swiggyAvailable": true,
        "zomatoAvailable": true,
        "swiggyLink": "https://www.swiggy.com/bhopal/indian-coffee-house",
        "zomatoLink": "https://www.zomato.com/bhopal/indian-coffee-house",
        "googleMapsLink": "https://maps.google.com/?q=Indian+Coffee+House+Bhopal",
        "directionsLink": "https://www.google.com/maps/dir/?api=1&destination=23.2678,77.4025",
        "bookingLink": "Walk-in only",
        "deliveryTime": "25-35 mins",
        "facilities": {
            "parking": false,
            "valetParking": false,
            "wifi": false,
            "cardAccepted": false,
            "outdoorSeating": false,
            "liveMusic": false,
            "bar": false,
            "privateRooms": false,
            "wheelchairAccessible": false,
            "kidsPlay": false
        },
        "popularFor": ["Breakfast", "Budget Dining", "Heritage Experience", "Coffee"],
        "lat": 23.2678,
        "lng": 77.4025
    },
    {
        "id": 7,
        "name": "10 Downing Street",
        "type": "Restaurant & Pub",
        "cuisine": "North Indian, Continental, Chinese, Bar",
        "rating": 4.3,
        "totalReviews": 839,
        "cleanliness": 4.5,
        "foodQuality": 4.4,
        "serviceRating": 4.3,
        "ambienceRating": 4.6,
        "priceLevel": 3,
        "priceRange": "₹1200-₹2000 for two",
        "averageCost": 1600,
        "distance": "3.2 km",
        "crowdLevel": "Very Busy",
        "crowdPercent": 80,
        "peakHours": ["8:00 PM - 11:30 PM"],
        "avgWaitTime": "20-30 mins",
        "address": "MP Nagar Zone 2, Bhopal",
        "landmark": "MP Nagar Zone 2",
        "phone": "+91-755-4200100",
        "website": "",
        "openNow": true,
        "timings": "12:00 PM - 12:00 AM",
        "weekendTimings": "12:00 PM - 1:00 AM",
        "specialties": ["Dance Floor", "Live Music", "Bar", "Pub", "DJ Nights"],
        "mustTryDishes": ["Chicken Wings", "Nachos", "Grilled Chicken", "Mocktails"],
        "foodImage": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=500&fit=crop",
        "diningDiscount": true,
        "discountPlatform": "Swiggy Dineout",
        "discountDetails": "20% off on food bill (drinks excluded)",
        "swiggyAvailable": false,
        "zomatoAvailable": true,
        "swiggyLink": "",
        "zomatoLink": "https://www.zomato.com/bhopal/10-downing-street",
        "googleMapsLink": "https://maps.google.com/?q=10+Downing+Street+Bhopal",
        "directionsLink": "https://www.google.com/maps/dir/?api=1&destination=23.2318,77.4154",
        "bookingLink": "Contact for reservations",
        "deliveryTime": "Not Available",
        "facilities": {
            "parking": true,
            "valetParking": true,
            "wifi": true,
            "cardAccepted": true,
            "outdoorSeating": false,
            "liveMusic": true,
            "bar": true,
            "privateRooms": true,
            "wheelchairAccessible": true,
            "kidsPlay": false
        },
        "popularFor": ["Nightlife", "Live Music", "Group Parties", "DJ Nights"],
        "lat": 23.2318,
        "lng": 77.4154
    },
    {
        "id": 8,
        "name": "Zam Zam Restaurant",
        "type": "Restaurant - Biryani Specialist",
        "cuisine": "Mughlai, Biryani, Kebabs",
        "rating": 4.5,
        "totalReviews": 2892,
        "cleanliness": 4.0,
        "foodQuality": 4.8,
        "serviceRating": 4.2,
        "ambienceRating": 3.8,
        "priceLevel": 2,
        "priceRange": "₹300-₹600 for two",
        "averageCost": 450,
        "distance": "1.8 km",
        "crowdLevel": "Very Busy",
        "crowdPercent": 95,
        "peakHours": ["12:30 PM - 2:30 PM", "8:00 PM - 10:30 PM"],
        "avgWaitTime": "30-40 mins",
        "address": "Hamidia Road, Near Moti Masjid, Bhopal",
        "landmark": "Near Moti Masjid",
        "phone": "+91-755-2535678",
        "website": "",
        "openNow": true,
        "timings": "11:00 AM - 11:00 PM",
        "weekendTimings": "11:00 AM - 11:30 PM",
        "specialties": ["Chicken Biryani", "Mutton Kebab", "Seekh Kebab", "Local Favorite"],
        "mustTryDishes": ["Chicken Biryani", "Mutton Biryani", "Shami Kebab", "Mughlai Paratha"],
        "foodImage": "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=500&fit=crop",
        "diningDiscount": false,
        "discountDetails": "",
        "swiggyAvailable": true,
        "zomatoAvailable": true,
        "swiggyLink": "https://www.swiggy.com/bhopal/zam-zam",
        "zomatoLink": "https://www.zomato.com/bhopal/zam-zam",
        "googleMapsLink": "https://maps.google.com/?q=Zam+Zam+Hamidia+Road+Bhopal",
        "directionsLink": "https://www.google.com/maps/dir/?api=1&destination=23.2689,77.4098",
        "bookingLink": "Walk-in only",
        "deliveryTime": "30-40 mins",
        "facilities": {
            "parking": false,
            "valetParking": false,
            "wifi": false,
            "cardAccepted": false,
            "outdoorSeating": false,
            "liveMusic": false,
            "bar": false,
            "privateRooms": false,
            "wheelchairAccessible": false,
            "kidsPlay": false
        },
        "popularFor": ["Biryani", "Budget Non-Veg", "Quick Meals", "Local Favorite"],
        "lat": 23.2689,
        "lng": 77.4098
    }
];

// Global Variables
let map;
let markers = [];
let filteredRestaurants = restaurantsData;

// ✅ UPDATED: Initialize on page load - DEFAULT TO MAP VIEW
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    
    // Show Map View by default instead of List View
    showMapView();
    
    // Also display in list (hidden) for when user switches
    displayRestaurants(restaurantsData);
});

// Initialize Application
function initializeApp() {
    console.log('Bhopal Restaurant Finder initialized');
    console.log(`Loaded ${restaurantsData.length} restaurants`);
}

// Setup Event Listeners
function setupEventListeners() {
    // Filter buttons
    document.getElementById('applyFilters').addEventListener('click', applyFilters);
    document.getElementById('clearFilters').addEventListener('click', clearFilters);
    
    // Sort
    document.getElementById('sortBy').addEventListener('change', function() {
        applyFilters();
    });
    
    // View toggle
    document.getElementById('listViewBtn').addEventListener('click', showListView);
    document.getElementById('mapViewBtn').addEventListener('click', showMapView);
    
    // Search input with debounce
    let searchTimeout;
    document.getElementById('searchInput').addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(applyFilters, 300);
    });
    
    // Modal close
    document.querySelector('.close').addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('restaurantModal');
        if (event.target === modal) {
            closeModal();
        }
    });
}

// Apply Filters
function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const cuisine = document.getElementById('cuisineFilter').value;
    const minRating = parseFloat(document.getElementById('ratingFilter').value);
    const priceLevel = document.getElementById('priceFilter').value;
    const maxDistance = document.getElementById('distanceFilter').value;
    const crowdLevel = document.getElementById('crowdFilter').value;
    const discountFilter = document.getElementById('discountFilter').value;
    const deliveryFilter = document.getElementById('deliveryFilter').value;
    const openNow = document.getElementById('openNowFilter').checked;
    const hasBar = document.getElementById('barFilter').checked;
    const hasOutdoor = document.getElementById('outdoorFilter').checked;
    const hasMusic = document.getElementById('musicFilter').checked;
    
    filteredRestaurants = restaurantsData.filter(restaurant => {
        // Search filter
        if (searchTerm) {
            const searchableText = `${restaurant.name} ${restaurant.cuisine} ${restaurant.address} ${restaurant.specialties.join(' ')}`.toLowerCase();
            if (!searchableText.includes(searchTerm)) return false;
        }
        
        // Cuisine filter
        if (cuisine !== 'all') {
            const cuisineLower = restaurant.cuisine.toLowerCase();
            if (!cuisineLower.includes(cuisine.replace('-', ' '))) return false;
        }
        
        // Rating filter
        if (minRating > 0 && restaurant.rating < minRating) return false;
        
        // Price filter
        if (priceLevel !== 'all' && restaurant.priceLevel !== parseInt(priceLevel)) return false;
        
        // Distance filter
        if (maxDistance !== 'all') {
            const distance = parseFloat(restaurant.distance);
            if (distance > parseFloat(maxDistance)) return false;
        }
        
        // Crowd filter
        if (crowdLevel !== 'all') {
            const crowd = restaurant.crowdPercent;
            if (crowdLevel === 'not-busy' && crowd >= 50) return false;
            if (crowdLevel === 'moderate' && (crowd < 50 || crowd > 75)) return false;
            if (crowdLevel === 'busy' && crowd <= 75) return false;
        }
        
        // Discount filter
        if (discountFilter !== 'all') {
            if (discountFilter === 'true' && !restaurant.diningDiscount) return false;
            if (discountFilter === 'swiggy-dineout' && restaurant.discountPlatform !== 'Swiggy Dineout') return false;
            if (discountFilter === 'zomato-gold' && restaurant.discountPlatform !== 'Zomato Gold') return false;
        }
        
        // Delivery filter
        if (deliveryFilter !== 'all') {
            if (deliveryFilter === 'swiggy' && !restaurant.swiggyAvailable) return false;
            if (deliveryFilter === 'zomato' && !restaurant.zomatoAvailable) return false;
            if (deliveryFilter === 'both' && (!restaurant.swiggyAvailable || !restaurant.zomatoAvailable)) return false;
        }
        
        // Open now filter
        if (openNow && !restaurant.openNow) return false;
        
        // Bar filter
        if (hasBar && !restaurant.facilities.bar) return false;
        
        // Outdoor seating filter
        if (hasOutdoor && !restaurant.facilities.outdoorSeating) return false;
        
        // Live music filter
        if (hasMusic && !restaurant.facilities.liveMusic) return false;
        
        return true;
    });
    
    // Sort results
    const sortBy = document.getElementById('sortBy').value;
    filteredRestaurants = sortRestaurants(filteredRestaurants, sortBy);
    
    // Update display
    displayRestaurants(filteredRestaurants);
    updateResultsCount(filteredRestaurants.length);
    
    // Update map if in map view
    if (map) {
        updateMapMarkers();
    }
}

// Sort Restaurants
function sortRestaurants(restaurants, sortBy) {
    const sorted = [...restaurants];
    
    switch(sortBy) {
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'distance':
            return sorted.sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance));
        case 'crowd-low':
            return sorted.sort((a, b) => a.crowdPercent - b.crowdPercent);
        case 'crowd-high':
            return sorted.sort((a, b) => b.crowdPercent - a.crowdPercent);
        case 'price-low':
            return sorted.sort((a, b) => a.priceLevel - b.priceLevel);
        case 'price-high':
            return sorted.sort((a, b) => b.priceLevel - a.priceLevel);
        case 'reviews':
            return sorted.sort((a, b) => b.totalReviews - a.totalReviews);
        default:
            return sorted;
    }
}

// Display Restaurants
function displayRestaurants(restaurants) {
    const container = document.getElementById('restaurantList');
    
    if (restaurants.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 50px; grid-column: 1/-1;">
                <i class="fas fa-search" style="font-size: 4rem; color: #ccc; margin-bottom: 20px;"></i>
                <h2 style="color: #888;">No restaurants found</h2>
                <p style="color: #aaa;">Try adjusting your filters</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = restaurants.map(restaurant => createRestaurantCard(restaurant)).join('');
    
    // Add click listeners to cards
    restaurants.forEach(restaurant => {
        const card = document.getElementById(`restaurant-${restaurant.id}`);
        if (card) {
            card.addEventListener('click', () => showRestaurantDetail(restaurant));
        }
    });
}

// ✅ UPDATED: Create Restaurant Card WITH FOOD IMAGES
function createRestaurantCard(restaurant) {
    const crowdClass = restaurant.crowdPercent < 50 ? 'crowd-low' : 
                       restaurant.crowdPercent < 75 ? 'crowd-moderate' : 'crowd-high';
    
    const priceSymbol = '₹'.repeat(restaurant.priceLevel);
    
    return `
        <div class="restaurant-card" id="restaurant-${restaurant.id}">
            <div class="restaurant-image" style="background: url('${restaurant.foodImage}') center/cover;">
                ${restaurant.diningDiscount ? 
                    `<div class="discount-badge"><i class="fas fa-tag"></i> ${restaurant.discountPlatform}</div>` 
                    : ''}
                ${restaurant.openNow ? 
                    '<div class="open-badge"><i class="fas fa-clock"></i> Open Now</div>' : 
                    '<div class="closed-badge"><i class="fas fa-clock"></i> Closed</div>'}
            </div>
            <div class="restaurant-info">
                <div class="restaurant-header">
                    <div>
                        <h3 class="restaurant-name">${restaurant.name}</h3>
                        <p class="restaurant-type">${restaurant.type}</p>
                    </div>
                    <div class="rating-badge">
                        <i class="fas fa-star"></i> ${restaurant.rating}
                    </div>
                </div>
                
                <p class="restaurant-cuisine"><i class="fas fa-pizza-slice"></i> ${restaurant.cuisine}</p>
                
                <div class="restaurant-details">
                    <div class="detail-row">
                        <i class="fas fa-rupee-sign"></i>
                        <span>${priceSymbol} • ${restaurant.priceRange}</span>
                    </div>
                    <div class="detail-row">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${restaurant.distance} • ${restaurant.landmark}</span>
                    </div>
                    <div class="detail-row">
                        <i class="fas fa-clock"></i>
                        <span>${restaurant.timings}</span>
                    </div>
                    <div class="detail-row">
                        <i class="fas fa-comments"></i>
                        <span>${restaurant.totalReviews.toLocaleString()} reviews</span>
                    </div>
                    <div class="detail-row">
                        <i class="fas fa-broom"></i>
                        <span>Cleanliness: ${restaurant.cleanliness}/5</span>
                    </div>
                </div>
                
                <div class="crowd-indicator">
                    <i class="fas fa-users"></i>
                    <div class="crowd-bar">
                        <div class="crowd-fill" style="width: ${restaurant.crowdPercent}%"></div>
                    </div>
                    <span class="crowd-text ${crowdClass}">${restaurant.crowdLevel}</span>
                </div>
                
                <div class="specialties">
                    ${restaurant.specialties.slice(0, 3).map(spec => 
                        `<span class="specialty-tag"><i class="fas fa-check-circle"></i> ${spec}</span>`
                    ).join('')}
                </div>
                
                <div class="restaurant-actions">
                    <button class="action-btn btn-directions" onclick="event.stopPropagation(); openDirections('${restaurant.directionsLink}')">
                        <i class="fas fa-directions"></i> Directions
                    </button>
                    <button class="action-btn btn-call" onclick="event.stopPropagation(); callRestaurant('${restaurant.phone}')">
                        <i class="fas fa-phone"></i> Call
                    </button>
                    ${restaurant.swiggyAvailable ? 
                        `<button class="action-btn btn-menu" onclick="event.stopPropagation(); openLink('${restaurant.swiggyLink}')">
                            <i class="fas fa-motorcycle"></i> Swiggy
                        </button>` : ''}
                    ${restaurant.zomatoAvailable ? 
                        `<button class="action-btn btn-booking" onclick="event.stopPropagation(); openLink('${restaurant.zomatoLink}')">
                            <i class="fas fa-utensils"></i> Zomato
                        </button>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Show Restaurant Detail Modal
function showRestaurantDetail(restaurant) {
    const modal = document.getElementById('restaurantModal');
    const modalBody = document.getElementById('modalBody');
    
    const crowdClass = restaurant.crowdPercent < 50 ? 'crowd-low' : 
                       restaurant.crowdPercent < 75 ? 'crowd-moderate' : 'crowd-high';
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${restaurant.name}</h2>
            <p style="color: #888; font-size: 1.1rem;">${restaurant.type}</p>
            <p style="color: #667eea; font-size: 1rem; margin-top: 5px;">
                <i class="fas fa-pizza-slice"></i> ${restaurant.cuisine}
            </p>
            
            <div class="modal-ratings">
                <div class="rating-item">
                    <div class="rating-circle">${restaurant.rating}</div>
                    <span class="rating-label">Overall</span>
                </div>
                <div class="rating-item">
                    <div class="rating-circle" style="background: #ffa502;">${restaurant.foodQuality}</div>
                    <span class="rating-label">Food</span>
                </div>
                <div class="rating-item">
                    <div class="rating-circle" style="background: #ff6348;">${restaurant.serviceRating}</div>
                    <span class="rating-label">Service</span>
                </div>
                <div class="rating-item">
                    <div class="rating-circle" style="background: #1e90ff;">${restaurant.cleanliness}</div>
                    <span class="rating-label">Cleanliness</span>
                </div>
                <div class="rating-item">
                    <div class="rating-circle" style="background: #a55eea;">${restaurant.ambienceRating}</div>
                    <span class="rating-label">Ambience</span>
                </div>
            </div>
        </div>
        
        <div class="modal-section">
            <h3><i class="fas fa-info-circle"></i> Details</h3>
            <div class="detail-row" style="margin-bottom: 10px;">
                <i class="fas fa-rupee-sign"></i>
                <span><strong>${restaurant.priceRange}</strong> (Avg: ₹${restaurant.averageCost})</span>
            </div>
            <div class="detail-row" style="margin-bottom: 10px;">
                <i class="fas fa-map-marker-alt"></i>
                <span>${restaurant.address}</span>
            </div>
            <div class="detail-row" style="margin-bottom: 10px;">
                <i class="fas fa-phone"></i>
                <span><a href="tel:${restaurant.phone}">${restaurant.phone}</a></span>
            </div>
            <div class="detail-row" style="margin-bottom: 10px;">
                <i class="fas fa-clock"></i>
                <span>${restaurant.timings}</span>
            </div>
            <div class="detail-row" style="margin-bottom: 10px;">
                <i class="fas fa-calendar-weekend"></i>
                <span>Weekend: ${restaurant.weekendTimings}</span>
            </div>
            <div class="detail-row" style="margin-bottom: 10px;">
                <i class="fas fa-route"></i>
                <span>${restaurant.distance} from city center</span>
            </div>
            ${restaurant.website ? `
            <div class="detail-row" style="margin-bottom: 10px;">
                <i class="fas fa-globe"></i>
                <span><a href="http://${restaurant.website}" target="_blank">${restaurant.website}</a></span>
            </div>
            ` : ''}
        </div>
        
        <div class="modal-section">
            <h3><i class="fas fa-users"></i> Crowd Information</h3>
            <div class="crowd-indicator" style="margin: 15px 0;">
                <i class="fas fa-users"></i>
                <div class="crowd-bar">
                    <div class="crowd-fill" style="width: ${restaurant.crowdPercent}%"></div>
                </div>
                <span class="crowd-text ${crowdClass}">${restaurant.crowdLevel} (${restaurant.crowdPercent}%)</span>
            </div>
            <p><strong>Average Wait Time:</strong> ${restaurant.avgWaitTime}</p>
            <p><strong>Peak Hours:</strong></p>
            <ul>
                ${restaurant.peakHours.map(time => `<li>${time}</li>`).join('')}
            </ul>
        </div>
        
        ${restaurant.diningDiscount ? `
        <div class="modal-section" style="background: #fff3cd; padding: 15px; border-radius: 8px;">
            <h3 style="color: #ff4757;"><i class="fas fa-tag"></i> Dining Discount Available</h3>
            <p><strong>${restaurant.discountPlatform}</strong></p>
            <p>${restaurant.discountDetails}</p>
        </div>
        ` : ''}
        
        <div class="modal-section">
            <h3><i class="fas fa-star"></i> Specialties & Must Try</h3>
            <div class="specialties">
                ${restaurant.specialties.map(spec => 
                    `<span class="specialty-tag"><i class="fas fa-check-circle"></i> ${spec}</span>`
                ).join('')}
            </div>
            <p style="margin-top: 15px;"><strong>Must Try Dishes:</strong></p>
            <ul>
                ${restaurant.mustTryDishes.map(dish => `<li>${dish}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section">
            <h3><i class="fas fa-cog"></i> Facilities</h3>
            <div class="facilities-grid">
                <div class="facility-item ${restaurant.facilities.parking ? 'facility-available' : 'facility-unavailable'}">
                    <i class="fas ${restaurant.facilities.parking ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                    <span>Parking</span>
                </div>
                <div class="facility-item ${restaurant.facilities.valetParking ? 'facility-available' : 'facility-unavailable'}">
                    <i class="fas ${restaurant.facilities.valetParking ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                    <span>Valet</span>
                </div>
                <div class="facility-item ${restaurant.facilities.wifi ? 'facility-available' : 'facility-unavailable'}">
                    <i class="fas ${restaurant.facilities.wifi ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                    <span>WiFi</span>
                </div>
                <div class="facility-item ${restaurant.facilities.cardAccepted ? 'facility-available' : 'facility-unavailable'}">
                    <i class="fas ${restaurant.facilities.cardAccepted ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                    <span>Cards</span>
                </div>
                <div class="facility-item ${restaurant.facilities.outdoorSeating ? 'facility-available' : 'facility-unavailable'}">
                    <i class="fas ${restaurant.facilities.outdoorSeating ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                    <span>Outdoor</span>
                </div>
                <div class="facility-item ${restaurant.facilities.liveMusic ? 'facility-available' : 'facility-unavailable'}">
                    <i class="fas ${restaurant.facilities.liveMusic ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                    <span>Live Music</span>
                </div>
                <div class="facility-item ${restaurant.facilities.bar ? 'facility-available' : 'facility-unavailable'}">
                    <i class="fas ${restaurant.facilities.bar ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                    <span>Bar</span>
                </div>
                <div class="facility-item ${restaurant.facilities.privateRooms ? 'facility-available' : 'facility-unavailable'}">
                    <i class="fas ${restaurant.facilities.privateRooms ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                    <span>Private Rooms</span>
                </div>
                <div class="facility-item ${restaurant.facilities.wheelchairAccessible ? 'facility-available' : 'facility-unavailable'}">
                    <i class="fas ${restaurant.facilities.wheelchairAccessible ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                    <span>Wheelchair</span>
                </div>
                <div class="facility-item ${restaurant.facilities.kidsPlay ? 'facility-available' : 'facility-unavailable'}">
                    <i class="fas ${restaurant.facilities.kidsPlay ? 'fa-check-circle' : 'fa-times-circle'}"></i>
                    <span>Kids Play</span>
                </div>
            </div>
        </div>
        
        <div class="modal-section">
            <h3><i class="fas fa-motorcycle"></i> Delivery & Dining</h3>
            <p><strong>Delivery Time:</strong> ${restaurant.deliveryTime}</p>
            <div style="display: flex; gap: 10px; margin-top: 15px; flex-wrap: wrap;">
                ${restaurant.swiggyAvailable ? `
                    <button class="action-btn btn-menu" onclick="openLink('${restaurant.swiggyLink}')">
                        <i class="fas fa-motorcycle"></i> Order on Swiggy
                    </button>
                ` : ''}
                ${restaurant.zomatoAvailable ? `
                    <button class="action-btn btn-booking" onclick="openLink('${restaurant.zomatoLink}')">
                        <i class="fas fa-utensils"></i> Order on Zomato
                    </button>
                ` : ''}
            </div>
        </div>
        
        <div class="modal-section">
            <h3><i class="fas fa-heart"></i> Popular For</h3>
            <div class="specialties">
                ${restaurant.popularFor.map(tag => 
                    `<span class="specialty-tag"><i class="fas fa-heart"></i> ${tag}</span>`
                ).join('')}
            </div>
        </div>
        
        <div class="modal-section">
            <h3><i class="fas fa-map-marked-alt"></i> Actions</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px;">
                <button class="action-btn btn-directions" onclick="openDirections('${restaurant.directionsLink}')">
                    <i class="fas fa-directions"></i> Get Directions
                </button>
                <button class="action-btn btn-call" onclick="callRestaurant('${restaurant.phone}')">
                    <i class="fas fa-phone"></i> Call Now
                </button>
                <button class="action-btn btn-booking" onclick="openLink('${restaurant.googleMapsLink}')">
                    <i class="fas fa-map"></i> View on Maps
                </button>
                ${restaurant.bookingLink && restaurant.bookingLink !== 'Walk-in only' && restaurant.bookingLink !== 'Contact for reservations' ? `
                    <button class="action-btn btn-menu" onclick="openLink('${restaurant.bookingLink}')">
                        <i class="fas fa-calendar-check"></i> Book Table
                    </button>
                ` : ''}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Close Modal
function closeModal() {
    document.getElementById('restaurantModal').style.display = 'none';
}

// Update Results Count
function updateResultsCount(count) {
    document.getElementById('resultsCount').textContent = `Showing ${count} restaurant${count !== 1 ? 's' : ''}`;
}

// Clear Filters
function clearFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('cuisineFilter').value = 'all';
    document.getElementById('ratingFilter').value = '0';
    document.getElementById('priceFilter').value = 'all';
    document.getElementById('distanceFilter').value = 'all';
    document.getElementById('crowdFilter').value = 'all';
    document.getElementById('discountFilter').value = 'all';
    document.getElementById('deliveryFilter').value = 'all';
    document.getElementById('openNowFilter').checked = false;
    document.getElementById('barFilter').checked = false;
    document.getElementById('outdoorFilter').checked = false;
    document.getElementById('musicFilter').checked = false;
    document.getElementById('sortBy').value = 'rating';
    
    filteredRestaurants = restaurantsData;
    displayRestaurants(restaurantsData);
    updateResultsCount(restaurantsData.length);
    
    // Update map if exists
    if (map) {
        updateMapMarkers();
    }
}

// Show List View
function showListView() {
    document.getElementById('restaurantList').style.display = 'grid';
    document.getElementById('mapContainer').style.display = 'none';
    document.getElementById('listViewBtn').classList.add('active');
    document.getElementById('mapViewBtn').classList.remove('active');
}

// Show Map View
function showMapView() {
    document.getElementById('restaurantList').style.display = 'none';
    document.getElementById('mapContainer').style.display = 'block';
    document.getElementById('listViewBtn').classList.remove('active');
    document.getElementById('mapViewBtn').classList.add('active');
    
    if (!map) {
        initializeMap();
    }
    updateMapMarkers();
}

// Initialize Map
function initializeMap() {
    map = L.map('map').setView([23.2599, 77.4126], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
}

// Update Map Markers
function updateMapMarkers() {
    // Clear existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];
    
    // Add new markers
    filteredRestaurants.forEach(restaurant => {
        const marker = L.marker([restaurant.lat, restaurant.lng])
            .addTo(map)
            .bindPopup(`
                <div style="min-width: 200px;">
                    <h3 style="margin: 0 0 10px 0;">${restaurant.name}</h3>
                    <p style="margin: 5px 0;"><strong>Rating:</strong> ${restaurant.rating} ⭐</p>
                    <p style="margin: 5px 0;"><strong>Cuisine:</strong> ${restaurant.cuisine}</p>
                    <p style="margin: 5px 0;"><strong>Price:</strong> ${restaurant.priceRange}</p>
                    <button onclick="showRestaurantDetailById(${restaurant.id})" 
                            style="margin-top: 10px; padding: 8px 15px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer;">
                        View Details
                    </button>
                </div>
            `);
        
        markers.push(marker);
    });
    
    // Fit bounds if there are markers
    if (markers.length > 0) {
        const group = L.featureGroup(markers);
        map.fitBounds(group.getBounds().pad(0.1));
    }
}

// Show Restaurant Detail by ID (for map popups)
function showRestaurantDetailById(id) {
    const restaurant = restaurantsData.find(r => r.id === id);
    if (restaurant) {
        showRestaurantDetail(restaurant);
    }
}

// Open Directions
function openDirections(link) {
    window.open(link, '_blank');
}

// Call Restaurant
function callRestaurant(phone) {
    window.location.href = `tel:${phone}`;
}

// Open Link
function openLink(url) {
    if (url && url !== 'Not Available' && url !== '') {
        window.open(url, '_blank');
    } else {
        alert('Link not available for this restaurant');
    }
}

// Console log for debugging
console.log('Restaurant Finder loaded successfully');
console.log(`Total restaurants: ${restaurantsData.length}`);
console.log('Sample restaurant:', restaurantsData[0]);
