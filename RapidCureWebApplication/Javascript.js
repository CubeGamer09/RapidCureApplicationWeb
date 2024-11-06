function showConfirmationPopup() {
    // Display a date input prompt
    const date = prompt("Please enter the date (YYYY-MM-DD):");
    if (!date) {
        alert("No date selected.");
        return;
    }

    // Display a time input prompt
    const time = prompt("Please enter the time (HH:MM):");
    if (!time) {
        alert("No time selected.");
        return;
    }

    // Confirmation alert with the selected date and time
    if (confirm(`Confirm Date: ${date}\nConfirm Time: ${time}`)) {
        alert("Date and time confirmed!");
    } else {
        alert("Date and time selection cancelled.");
    }
}