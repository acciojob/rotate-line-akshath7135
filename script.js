//your JS code here. If required.
let angle = 0; // Initialize the rotation angle

// Function to rotate the line
function rotateLine() {
    angle += 2; // Increase the angle by 2 degrees
    const line = document.getElementById('line'); // Select the line element
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; // Apply the rotation
}

// Set an interval to update the rotation every 20 milliseconds
setInterval(rotateLine, 20);
