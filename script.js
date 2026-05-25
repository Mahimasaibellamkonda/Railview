function searchTrain() {

    let train = document.getElementById("trainName").value.toLowerCase();
    let result = document.getElementById("result");

    let trains = [
        {
            name: "express",
            departure: "10:00 AM",
            arrival: "4:00 PM",
            seats: "Available ✅"
        },
        {
            name: "superfast",
            departure: "6:00 AM",
            arrival: "1:00 PM",
            seats: "Not Available ❌"
        },
        {
            name: "rajdhani",
            departure: "8:00 PM",
            arrival: "6:00 AM",
            seats: "Available ✅"
        }
    ];

    let found = trains.find(t => t.name === train);

    if (found) {
        result.innerHTML = `
            <h3>${found.name.toUpperCase()}</h3>
            Departure: ${found.departure} <br>
            Arrival: ${found.arrival} <br>
            Seats: ${found.seats}
        `;
    } else {
        result.innerHTML = "❗ Train not found";
    }
}