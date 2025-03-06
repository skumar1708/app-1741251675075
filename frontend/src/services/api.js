export const fetchSnacks = async () => {
  try {
    const response = await fetch('/api/snacks');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching snacks:', error);
    throw error;
  }
};