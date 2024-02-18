document.addEventListener("DOMContentLoaded", function() {
    const timeslotsContainer = document.getElementById("booking-slots1");
    const availableTimeslots = [
        "9:00", "9:30",
        "10:00", "10:30",
        "11:00", "11:30",
        "12:00", "12:30",
        "13:30", "14:30",
        "15:00", "15:30",
        "16:30", "17:00"
    ];
    const unavailableTimeslots = [
        "13:00",
        "14:00",
        "16:00",
        "17:30"
    ];

    // Retrieve booking data from localStorage or initialize if not exists
    let bookingData = JSON.parse(localStorage.getItem("bookingData")) || {};

    // Function to render timeslots
    function renderTimeslots() {
        timeslotsContainer.innerHTML = "";

        // Render available time slots
        availableTimeslots.forEach(slot => {
            renderTimeslot(slot, false);
        });

        // Render unavailable time slots
        unavailableTimeslots.forEach(slot => {
            renderTimeslot(slot, true);
        });
    }

    // Function to render a single timeslot
    function renderTimeslot(time, unavailable) {
        const timeslotButton = document.createElement("button");
        timeslotButton.textContent = time;
        timeslotButton.classList.add("time-slot");
        if (unavailable) {
            timeslotButton.classList.add("time-slot-not-available");
        } else {
            timeslotButton.classList.add("time-slot-available");
            timeslotButton.addEventListener("click", () => {
                toggleBooking(timeslotButton, time);
            });
            if (bookingData[time]) {
                timeslotButton.classList.add("time-slot-not-available");
            }
        }
        timeslotsContainer.appendChild(timeslotButton);
    }

    // Function to toggle booking status
    function toggleBooking(button, time) {
        if (bookingData[time]) {
            delete bookingData[time]; // Remove booking
        } else {
            bookingData[time] = true; // Book timeslot
        }
        localStorage.setItem("bookingData", JSON.stringify(bookingData));
        button.classList.toggle("time-slot-not-available");
    }

    // Initial render
    renderTimeslots();
});
