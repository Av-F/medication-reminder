const API = "http://localhost:8000/api";

export async function getNotificationDetails() {
    const response = await fetch(`${API}/notifications`);

    if (!response.ok) {
        throw new Error("Failed to load notifications.");
    }

    return response.json();
}