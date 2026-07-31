const API = "http://localhost:8000/api";

export async function getPrescriptionDetails() {
    const response = await fetch(`${API}/prescriptions`);

    if (!response.ok) {
        throw new Error("Unable to load prescriptions");
    }

    return await response.json();
}