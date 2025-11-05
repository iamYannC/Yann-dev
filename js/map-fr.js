let mapLoaded = false;

document.getElementById('viewMapBtn').addEventListener('click', function() {
    const mapSection = document.getElementById('mapSection');
    const btn = this;
    
    // Toggle visibility with smooth animation
    if (!mapSection.classList.contains('open')) {
        // Opening the map
        mapSection.style.display = 'block';
        
        // Force browser reflow to enable CSS transition
        void mapSection.offsetHeight;
        
        // Add open class for smooth expansion
        requestAnimationFrame(() => {
            mapSection.classList.add('open');
        });
        btn.textContent = 'Ferme la carte';
        
        // Scroll to map after animation starts
        setTimeout(() => {
            mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        
        // Load map only once
        if (!mapLoaded) {
            loadMap();
            mapLoaded = true;
        }
    } else {
        // Closing the map
        mapSection.classList.remove('open');
        btn.textContent = '🚴‍♂️ Montre-moi la carte';
        
        // Hide after animation completes
        setTimeout(() => {
            if (!mapSection.classList.contains('open')) {
                mapSection.style.display = 'none';
            }
        }, 600); // Match CSS transition duration
    }
});

function loadMap() {
    // Load Leaflet CSS
    const leafletCSS = document.createElement('link');
    leafletCSS.rel = 'stylesheet';
    leafletCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
    document.head.appendChild(leafletCSS);
    
    // Load Leaflet JS
    const leafletJS = document.createElement('script');
    leafletJS.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
    leafletJS.onload = initializeMap;
    document.body.appendChild(leafletJS);
}

function initializeMap() {
    // cities array is loaded from map-cities.js
    // Initialize the map with controlled bounds (Americas)
const map = L.map('map', {
  minZoom: 2,
  maxZoom: 19,
  maxBounds: [
    [-70, -180], // southwest corner
    [85, 60]     // northeast corner
  ],
  maxBoundsViscosity: 0.7 // how strongly the map resists moving outside bounds
});

// Initial center and zoom
map.setView([10, -80], 3);
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    // Create custom icon

const cityIcon = L.divIcon({
    className: 'custom-marker',
    html: '<div style="background-color: #FF8C61; width: 6px; height: 6px; border-radius: 50%; border: 1px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.4);"></div>',
    iconSize: [4, 4],
    iconAnchor: [4, 4]
});
    // Add markers for each city
    cities.forEach(city => {
        const marker = L.marker([city.lat, city.lng], { icon: cityIcon })
            .addTo(map)
            .bindPopup(`
                <strong>${city.name}, ${city.state}</strong><br>
                ${city.info}<br>
                <em>Lat: ${city.lat.toFixed(4)}, Lng: ${city.lng.toFixed(4)}</em>
            `);
    });

    // Create path between cities
    const pathCoordinates = cities.map(city => [city.lat, city.lng]);
    

     // Draw a soft dashed path line
     const pathLine = L.polyline(pathCoordinates, {
        color:'#656769',           
        weight: 3,                  // Thinner line
        opacity: 0.8,               
        dashArray: '2, 10',         
        smoothFactor: 8,            
        lineCap: 'round',           
        lineJoin: 'round'           
           }).addTo(map);

    // Fit map bounds to show entire path
    map.fitBounds(pathLine.getBounds(), { padding: [50, 50] });
}