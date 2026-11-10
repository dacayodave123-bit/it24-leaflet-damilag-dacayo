const map = L.map('map').setView([8.3503, 124.8121], 15);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
}).addTo(map);

const locations = [
    { name: "Barangay Damilag", lat: 8.3503, lng: 124.8121 },
    { name: "Damilag Elementary School", lat: 8.3540, lng: 124.8060 },
    { name: "San Lorenzo Ruiz Church", lat: 8.3580, lng: 124.8180 },
    { name: "PCH 1 Park", lat: 8.3590, lng: 124.8160 },
    { name: "Damilag Industrial Area", lat: 8.35879, lng: 124.81805 }
];

// Add markers
locations.forEach(function(place) {
    L.marker([place.lat, place.lng])
        .addTo(map)
        .bindPopup(
            "<b>" + place.name + "</b><br>Damilag, Manolo Fortich, Bukidnon"
        );
});

L.circle([8.3503, 124.8121], {
    color: "blue",
    fillColor: "#0000ff",
    fillOpacity: 0.2,
    radius: 500
}).addTo(map);

map.on("click", function(event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    L.popup()
        .setLatLng(event.latlng)
        .setContent(
            "<b>Clicked Coordinates:</b><br>" +
            "Latitude: " + lat.toFixed(5) +
            "<br>Longitude: " + lng.toFixed(5)
        )
        .openOn(map);
});
