function handleMarkerClick(hairdresser) {
    console.log("Marker clicked:", hairdresser.name); // Log the clicked hairdresser's name
    // Example: Display available times for booking for the clicked hairdresser
    alert("Available times for booking at " + hairdresser.name + ": Monday to Friday, 9:00 AM to 6:00 PM");
}