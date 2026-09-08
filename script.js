// ============================================
// DEFAULT VALUES
// ============================================

let totalSpaces = 50;

let occupiedSpaces = 36;


// ============================================
// UPDATE PARKING FUNCTION
// ============================================

function updateParking() {

    // Get user input

    const totalInput =
        document.getElementById("totalInput").value;

    const occupiedInput =
        document.getElementById("occupiedInput").value;


    totalSpaces =
        Number(totalInput);

    occupiedSpaces =
        Number(occupiedInput);


    // Validation

    if (totalSpaces <= 0) {

        alert(
            "Total parking spaces must be greater than 0."
        );

        return;
    }


    if (occupiedSpaces < 0) {

        alert(
            "Occupied spaces cannot be negative."
        );

        return;
    }


    if (occupiedSpaces > totalSpaces) {

        alert(
            "Occupied spaces cannot be greater than total spaces."
        );

        return;
    }


    // Calculate available spaces

    const availableSpaces =
        totalSpaces - occupiedSpaces;


    // Calculate occupancy percentage

    const occupancyRate =
        Math.round(
            (occupiedSpaces / totalSpaces) * 100
        );


    // ========================================
    // UPDATE DASHBOARD
    // ========================================

    document.getElementById(
        "totalSpaces"
    ).textContent =
        totalSpaces;


    document.getElementById(
        "occupiedSpaces"
    ).textContent =
        occupiedSpaces;


    document.getElementById(
        "availableSpaces"
    ).textContent =
        availableSpaces;


    document.getElementById(
        "occupancyRate"
    ).textContent =
        occupancyRate + "%";


    document.getElementById(
        "occupancyText"
    ).textContent =
        occupancyRate + "%";


    document.getElementById(
        "heroAvailable"
    ).textContent =
        availableSpaces;


    // ========================================
    // UPDATE PROGRESS BAR
    // ========================================

    document.getElementById(
        "progressFill"
    ).style.width =
        occupancyRate + "%";


    // ========================================
    // UPDATE PARKING SLOTS
    // ========================================

    createParkingSlots(
        totalSpaces,
        occupiedSpaces
    );
}


// ============================================
// CREATE PARKING SLOTS
// ============================================

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


    // Create new slots

    for (
        let i = 1;
        i <= total;
        i++
    ) {

        const slot =
            document.createElement("div");


        slot.classList.add(
            "slot"
        );


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


        // Click event

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


// ============================================
// INITIAL DISPLAY
// ============================================

updateParking();
