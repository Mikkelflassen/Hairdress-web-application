// Initialize and add the map
let map;

async function initMap() {
    // The location of of the barber shops
    const position1 = { lat: 56.159395, lng: 10.209922 };
    const position2 = { lat: 56.159955, lng: 10.209942 };
    const position3 = { lat: 56.158915, lng: 10.209322 };
    const position4 = { lat: 56.158595, lng: 10.206012 };
    const position5 = { lat: 56.158315, lng: 10.209992 }; 
    const position6 = { lat: 56.157515, lng: 10.208992 };
    const position7 = { lat: 56.158515, lng: 10.209892 };
    const position8 = { lat: 56.157815, lng: 10.208792 };  // to add new ones, make sure to change the (position-number) and cordinates- only change the last 3-4 digit to keep it in aarhus

    // Libraries request
    const { Map } = await google.maps.importLibrary("maps");
    // maybe this will be needed - const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered in Aarhus
    map = new Map(document.getElementById("map"), {
        zoom: 15,
        center: position1,
        mapId: "DEMO_MAP_ID",
    });

   // Custom colors
const greenIcon = {
    url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
  };
  const redIcon = {
    url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
  };
  const yellowIcon = {
    url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
  };
  
  // Create more icons
  const marker1 = new google.maps.Marker({
    position: position1,
    map: map,
    title: "Hairdresser 1",
    icon: greenIcon,
  });
  const marker2 = new google.maps.Marker({
    position: position2,
    map: map,
    title: "Hairdresser 2",
    icon: redIcon,
  });
  const marker3 = new google.maps.Marker({
    position: position3,
    map: map,
    title: "Hairdresser 3",
    icon: yellowIcon,
  });
  const marker4 = new google.maps.Marker({ 
    position: position4,
    map: map,
    title: "Hairdresser 4",
    icon: greenIcon,
  });

  const marker5 = new google.maps.Marker({
    position: position5,
    map: map,
    title: "Hairdresser 5",
    icon: yellowIcon,
  });
  // copy paste this to add more hairdressers
  
  const marker6 = new google.maps.Marker({ 
    position: position6, // change the number here 
    map: map,
    title: "Hairdresser 6", //remeber to change the number
    icon: redIcon, //change this depending on the availability of the shop
  });
const marker7 = new google.maps.Marker({
  position: position7,
  map: map,
  title: "Hairdresser 7",
  icon: redIcon,
});
const marker8 = new google.maps.Marker({
  position: position8,
  map: map,
  title: "Hairdresser 8",
  icon: greenIcon,
});
  // add here and change the number and the titel

    // Add click event listener to the markers
    google.maps.event.addListener(marker1, 'click', () => handleMarkerClick(marker1));
    google.maps.event.addListener(marker2, 'click', () => handleMarkerClick(marker2));
    google.maps.event.addListener(marker3, 'click', () => handleMarkerClick(marker3));
    google.maps.event.addListener(marker4, 'click', () => handleMarkerClick(marker4));
    google.maps.event.addListener(marker5, 'click', () => handleMarkerClick(marker5));
    google.maps.event.addListener(marker6, 'click', () => handleMarkerClick(marker6));
    google.maps.event.addListener(marker7, 'click', () => handleMarkerClick(marker7));
    google.maps.event.addListener(marker8, 'click', () => handleMarkerClick(marker8)); // to add more copy-paste and change the markerNumber
}

    // Add click event listeners to time slots
    document.querySelectorAll('.time-slot-available').forEach(slot => {
      slot.addEventListener('click', () => {
          const time = slot.getAttribute('data-time');
          console.log(`Time slot clicked: ${time}`);
          alert(`Time slot ${time} has been booked.`);
          // Change the status of the time slot to not-available
          slot.classList.remove('time-slot-available');
          slot.classList.add('time-slot-not-available');
          slot.textContent = `${time} - Booked`;
          slot.setAttribute('data-available', 'false');
      });
  });


// Function to handle marker click event
function handleMarkerClick(marker) {
  console.log("Marker clicked:", marker.title);

  // Hide all hairdresser info containers
  const allHairdresserInfo = document.querySelectorAll(".hairdresser-info");
  allHairdresserInfo.forEach(info => {
      info.style.display = "none";
  });

  // Get the hairdresser info container corresponding to the clicked marker
  const hairdresserInfo = document.getElementById(`hairdresser-info${marker.title.split(" ")[1]}`);

  // Display the hairdresser info container
  hairdresserInfo.style.display = "block";
}

initMap();

