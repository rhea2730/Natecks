const API_BASE_URL = "http://192.168.0.125:8000"; // Adjust with your backend IP

export const fetchWaterBill = async (meterNumber: string) => {
    try {
        const response = await fetch(`${API_BASE_URL}/water-bill/${meterNumber}/`);
        if (!response.ok) throw new Error("Failed to fetch bill");
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
};
