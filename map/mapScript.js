// Initialize the map and set its view to a specific location and zoom level
var map = L.map('map').setView([51.505, -0.09], 13); // Centered on London

// Set up the OpenStreetMap layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker at the map's center
var marker = L.marker([10.505, -0.09]).addTo(map);// put the corent location in here
marker.bindPopup("<b>Hello!</b><br>This is a sample location.").openPopup();

// Add a circle overlay
var circle = L.circle([2.508, -1.11], {
  color: 'blue',
  fillColor: '#30f',
  fillOpacity: 0.5,
  radius: 300
}).addTo(map);
circle.bindPopup("I am a circle.");

// Add a polygon overlay
var polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(map);
polygon.bindPopup("I am a polygon.");

