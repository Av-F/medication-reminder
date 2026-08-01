const API = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export async function getSummaryStats() {
    const response = await fetch(`${API}/summary`);

    if (!response.ok) {
        throw new Error("Failed to load summary.");
    }

    return response.json();
}