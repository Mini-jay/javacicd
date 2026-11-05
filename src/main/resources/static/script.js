
// Check application health
async function checkHealth() {
    const statusElement = document.querySelector(".top-status");

    try {
        const response = await fetch("/health");

        if (!response.ok) {
            throw new Error("Health check failed");
        }

        const message = await response.text();

        statusElement.innerHTML =
            '<span class="status-dot"></span>' + message;

        statusElement.style.color = "#4ade80";

    } catch (error) {
        statusElement.innerHTML =
            '<span class="status-dot"></span> Application Offline';

        statusElement.style.color = "#f87171";
    }
}

// Run health check when dashboard loads
document.addEventListener("DOMContentLoaded", () => {
    checkHealth();

    // Refresh health status every 30 seconds
    setInterval(checkHealth, 30000);
});
