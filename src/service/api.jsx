const API_URL = "https://api.adviceslip.com/advice";

export const fetchAdvice = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.slip;
  } catch (error) {
    throw new Error("Failed to fetch advice: " + error.message);
  }
};

export const fetchAdvice_117 = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice/119");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.slip;
  } catch (error) {
    throw new Error("Failed to fetch advice: " + error.message);
  }
};
