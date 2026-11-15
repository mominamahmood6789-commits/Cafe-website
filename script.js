// Task 1: Handle the feedback form

var form = document.getElementById("feedback-form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        var username = document.getElementById("username").value;

        var email = document.getElementById("email").value;

        var message = document.getElementById("form-message");

        if (username != "" && email != "") {

            message.textContent =
                "Thank you for visiting, " + username +
                "! We will contact you at " + email + ".";

        } else {

            message.textContent =
                "Please enter your name and email.";
        }

    });

}



// Task 2: Highlight a menu row when the mouse is over it

var rows = document.querySelectorAll("#menu-table tr");

for (var i = 1; i < rows.length; i++) {

    rows[i].addEventListener("mouseover", function() {

        this.style.backgroundColor = "#f5d7a1";

    });

    rows[i].addEventListener("mouseout", function() {

        this.style.backgroundColor = "";

    });

}



// Task 3: Change between light and dark mode

var themeButton = document.getElementById("theme-button");

if (themeButton) {

    themeButton.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

    });

}



// Task 4: Calculate the total price of selected items

var checkboxes =
    document.querySelectorAll(".menu-checkbox");

var total =
    document.getElementById("total");

function calculateTotal() {

    var price = 0;

    for (var i = 0; i < checkboxes.length; i++) {

        if (checkboxes[i].checked) {

            price = price + parseInt(checkboxes[i].value);

        }

    }

    if (total) {

        total.textContent = "Total: $" + price;

    }

}

for (var i = 0; i < checkboxes.length; i++) {

    checkboxes[i].addEventListener("change", calculateTotal);

}



// Task 5: Check the age for a student or senior discount

var birthYear = document.getElementById("birth-year");

if (birthYear) {

    birthYear.addEventListener("change", function() {

        var year = parseInt(birthYear.value);

        var age = 2026 - year;

        var discountMessage =
            document.getElementById("discount-message");

        if (isNaN(year)) {

            discountMessage.textContent =
                "Please enter a valid birth year.";

        } else if (age >= 13 && age <= 25) {

            discountMessage.textContent =
                "You qualify for our student discount!";

        } else if (age >= 60) {

            discountMessage.textContent =
                "You qualify for our senior discount!";

        } else {

            discountMessage.textContent =
                "You do not qualify for a special discount.";

        }

    });

}



// Task 6: Show and hide the extra About Us text

var readMoreButton =
    document.getElementById("read-more-button");

var moreText =
    document.getElementById("more-text");

if (readMoreButton) {

    readMoreButton.addEventListener("click", function() {

        if (moreText.classList.contains("hidden")) {

            moreText.classList.remove("hidden");

            readMoreButton.textContent = "Read Less";

        } else {

            moreText.classList.add("hidden");

            readMoreButton.textContent = "Read More";

        }

    });

}



// Task 7: Filter the menu by category

var filterButtons =
    document.querySelectorAll(".filter-button");

var menuItems =
    document.querySelectorAll(".menu-item");

for (var i = 0; i < filterButtons.length; i++) {

    filterButtons[i].addEventListener("click", function() {

        var selectedFilter =
            this.getAttribute("data-filter");

        for (var j = 0; j < menuItems.length; j++) {

            if (selectedFilter == "all") {

                menuItems[j].style.display = "";

            } else if (
                menuItems[j].classList.contains(selectedFilter)
            ) {

                menuItems[j].style.display = "";

            } else {

                menuItems[j].style.display = "none";

            }

        }

    });

}



// Task 8: Show whether the cafe is currently open

var status = document.getElementById("status");

if (status) {

    var currentHour = new Date().getHours();

    if (currentHour >= 8 && currentHour < 20) {

        status.textContent = "We are Open!";
        status.style.color = "lightgreen";

    } else {

        status.textContent = "Closed - Open at 8 AM";
        status.style.color = "red";

    }

}



// Task 9: Count the characters left in the special notes box

var specialNotes =
    document.getElementById("special-notes");

var characterCount =
    document.getElementById("character-count");

if (specialNotes) {

    specialNotes.addEventListener("input", function() {

        var remaining =
            100 - specialNotes.value.length;

        characterCount.textContent =
            remaining + " characters remaining";

    });

}