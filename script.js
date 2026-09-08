/* =====================================================
   SMARTPARK - PARKING SPACE OCCUPANCY ANALYSIS
   ===================================================== */


/* ================= VARIABLES ================= */

let totalSpaces = 50;

let availableSpaces = 14;

let occupiedSpaces = 36;


/* ================= UPDATE PARKING ================= */

function updateParking() {

    // Get values entered by user

    const totalInput =
        document.getElementById("totalInput").value;

    const availableInput =
        document.getElementById("availableInput").value;


    totalSpaces = Number(totalInput);

    availableSpaces = Number(availableInput);


    /* ================= VALIDATION ================= */

    if (totalSpaces <= 0) {

        alert(
            "Total parking spaces must be greater than 0."
        );

        return;
    }


    if (availableSpaces < 0) {

        alert(
            "Available spaces cannot be negative."
        );

        return;
    }


    if (availableSpaces > totalSpaces) {

        alert(
            "Available spaces cannot be greater than total spaces."
        );

        return;
    }


    /* ================= CALCULATION ================= */

    occupiedSpaces =
        totalSpaces - availableSpaces;


    const occupancyRate =
        Math.round(
            (occupiedSpaces / totalSpaces) * 100
        );


    /* ================= UPDATE DASHBOARD ================= */

    document.getElementById(
        "totalSpaces"
    ).textContent = totalSpaces;


    document.getElementById(
        "occupiedSpaces"
    ).textContent = occupiedSpaces;


    document.getElementById(
        "availableSpaces"
    ).textContent = availableSpaces;


    document.getElementById(
        "occupancyRate"
    ).textContent = occupancyRate + "%";


    /* ================= HERO ================= */

    document.getElementById(
        "heroAvailable"
    ).textContent = availableSpaces;


    /* ================= PROGRESS BAR ================= */

    document.getElementById(
        "occupancyText"
    ).textContent = occupancyRate + "%";


    document.getElementById(
        "progressFill"
    ).style.width =
        occupancyRate + "%";


    /* ================= PARKING SLOTS ================= */

    createParkingSlots(
        totalSpaces,
        occupiedSpaces
    );


    /* ================= ANALYSIS ================= */

    updateAnalysis(
        occupancyRate
    );

}


/* =====================================================
   CREATE PARKING SLOTS
   ===================================================== */

function createParkingSlots(
    total,
    occupied
) {

    const parkingGrid =
        document.getElementById(
            "parkingGrid"
        );


    // Clear old slots

    parkingGrid.innerHTML = "";


    /* ================= CREATE NEW SLOTS ================= */

    for (
        let i = 1;
        i <= total;
        i++
    ) {

        const slot =
            document.createElement("div");


        slot.classList.add("slot");


        /* ================= OCCUPIED ================= */

        if (i <= occupied) {

            slot.classList.add(
                "occupied"
            );

            slot.textContent =
                "P" + i;


            slot.title =
                "Parking Slot P" +
                i +
                " - Occupied";


        }


        /* ================= AVAILABLE ================= */

        else {

            slot.classList.add(
                "available"
            );

            slot.textContent =
                "P" + i;


            slot.title =
                "Parking Slot P" +
                i +
                " - Available";

        }


        /* ================= CLICK EVENT ================= */

        slot.addEventListener(
            "click",
            function () {

                if (
                    slot.classList.contains(
                        "occupied"
                    )
                ) {

                    alert(
                        slot.textContent +
                        " is OCCUPIED"
                    );

                }

                else {

                    alert(
                        slot.textContent +
                        " is AVAILABLE"
                    );

                }

            }
        );


        parkingGrid.appendChild(
            slot
        );

    }

}


/* =====================================================
   ANALYSIS
   ===================================================== */

function updateAnalysis(
    currentOccupancy
) {

    /*
       These values simulate analysis
       from a parking dataset.
    */


    const highest =
        Math.min(
            100,
            currentOccupancy + 20
        );


    const lowest =
        Math.max(
            0,
            currentOccupancy - 25
        );


    const average =
        Math.round(
            (highest + lowest + currentOccupancy) / 3
        );


    document.getElementById(
        "highestOccupancy"
    ).textContent =
        highest + "%";


    document.getElementById(
        "lowestOccupancy"
    ).textContent =
        lowest + "%";


    document.getElementById(
        "averageOccupancy"
    ).textContent =
        average + "%";

}


/* =====================================================
   HOURLY CHART
   ===================================================== */

const hourlyCanvas =
    document.getElementById(
        "hourlyChart"
    );


const hourlyChart =
    new Chart(
        hourlyCanvas,
        {

            type: "line",

            data: {

                labels: [
                    "8 AM",
                    "9 AM",
                    "10 AM",
                    "11 AM",
                    "12 PM",
                    "1 PM",
                    "2 PM",
                    "3 PM",
                    "4 PM",
                    "5 PM",
                    "6 PM"
                ],

                datasets: [

                    {

                        label:
                            "Occupied Spaces",

                        data: [
                            12,
                            18,
                            24,
                            29,
                            34,
                            39,
                            47,
                            44,
                            38,
                            30,
                            22
                        ],

                        borderWidth: 3,

                        tension: 0.4,

                        fill: false

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                scales: {

                    y: {

                        beginAtZero: true

                    }

                }

            }

        }
    );


/* =====================================================
   WEEKLY CHART
   ===================================================== */

const dailyCanvas =
    document.getElementById(
        "dailyChart"
    );


const dailyChart =
    new Chart(
        dailyCanvas,
        {

            type: "bar",

            data: {

                labels: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],

                datasets: [

                    {

                        label:
                            "Average Occupied Spaces",

                        data: [
                            32,
                            35,
                            37,
                            34,
                            41,
                            28,
                            24
                        ],

                        borderWidth: 1

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                scales: {

                    y: {

                        beginAtZero: true

                    }

                }

            }

        }
    );


/* =====================================================
   INITIALIZE WEBSITE
   ===================================================== */

updateParking();
