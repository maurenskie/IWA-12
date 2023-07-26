// scripts.js

// Get all book elements by class name
const books = document.querySelectorAll("div[id^='book']");

// Loop through each book element
books.forEach((book, index) => {
    // Get status element for each book
    const statusElement = book.querySelector(".status");
    const statusText = statusElement.innerText.trim().toLowerCase();

    // Get all buttons for each book
    const reserveButton = book.querySelector(".reserve");
    const checkoutButton = book.querySelector(".checkout");
    const checkinButton = book.querySelector(".checkin");

    // Get the status object from STATUS_MAP based on the current status text
    const statusObject = STATUS_MAP[statusText];

    // Set the color of the status text
    statusElement.style.color = statusObject.color;

    // Disable the buttons if needed
    if (!statusObject.canReserve) {
        reserveButton.disabled = true;
    }

    if (!statusObject.canCheckout) {
        checkoutButton.disabled = true;
    }

    if (!statusObject.canCheckIn) {
        checkinButton.disabled = true;
    }

    // Set the buttons to grayscale (black and white)
    reserveButton.style.filter = "grayscale(100%)";
    checkoutButton.style.filter = "grayscale(100%)";
    checkinButton.style.filter = "grayscale(100%)";
});
