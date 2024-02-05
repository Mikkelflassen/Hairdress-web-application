// Initialize and add the map
let map;

async function initMap() {
    // The location of Uluru
    const position1 = { lat: 56.159395, lng: 10.209922 };
    const position2 = { lat: 56.159955, lng: 10.209942 };
    const position3 = { lat: 56.158915, lng: 10.209322 };

    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at Uluru
    map = new Map(document.getElementById("map"), {
        zoom: 14,
        center: position1,
        mapId: "DEMO_MAP_ID",
    });

   // Create marker icons with custom colors
const greenIcon = {
    url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
  };
  const redIcon = {
    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
  };
  const yellowIcon = {
    url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
  };
  
  // Create markers at different positions with custom icons
  const marker1 = new google.maps.Marker({
    position: position1,
    map: map,
    title: "Marker 1",
    icon: greenIcon,
  });
  const marker2 = new google.maps.Marker({
    position: position2,
    map: map,
    title: "Marker 2",
    icon: redIcon,
  });
  const marker3 = new google.maps.Marker({
    position: position3,
    map: map,
    title: "Marker 3",
    icon: yellowIcon,
  });

    // Add click event listener to the markers
    google.maps.event.addListener(marker1, 'click', () => handleMarkerClick(marker1));
    google.maps.event.addListener(marker2, 'click', () => handleMarkerClick(marker2));
    google.maps.event.addListener(marker3, 'click', () => handleMarkerClick(marker3));
}

// Function to handle marker click event
function handleMarkerClick(marker) {
    console.log("Marker clicked:", marker.title);
}


initMap();


