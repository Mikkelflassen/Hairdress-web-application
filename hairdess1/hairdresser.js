// Initialize and add the map
let map;

async function initMap() {
    // The location
    const position1 = { lat: 56.159395, lng: 10.209922 };
    const position2 = { lat: 56.159955, lng: 10.209942 };
    const position3 = { lat: 56.158915, lng: 10.209322 };
    const position4 = { lat: 56.158215, lng: 10.208022 };

    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map,
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
        icon: redIcon, //change color 
    });

    // Add click event listener to the markers
    google.maps.event.addListener(marker1, 'click', () => handleMarkerClick(marker1));
    google.maps.event.addListener(marker2, 'click', () => handleMarkerClick(marker2));
    google.maps.event.addListener(marker3, 'click', () => handleMarkerClick(marker3));

    // Add click event listeners to time slots
    document.querySelectorAll('.time-slot-available').forEach(slot => {
        slot.addEventListener('click', () => {
            const time = slot.getAttribute('data-time');
            console.log(`Time slot clicked: ${time}`);
            // Change the status of the time slot to not-available
            slot.classList.remove('time-slot-available');
            slot.classList.add('time-slot-not-available');
            slot.textContent = `${time} - Booked`;
            slot.setAttribute('data-available', 'false');
        });
    });
}

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
