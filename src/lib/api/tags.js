export async function fetchTags() {
  try {
    const response = await fetch('http://114.24.81.210:8080');
    
    // Log the response details for debugging
    console.log('Tags API Response:', {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries())
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    // Log the full error details
    console.error('Tags API Error:', {
      name: error.name,
      message: error.message,
      cause: error.cause
    });
    
    // Provide more specific error messages
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('Network error: Unable to connect to the tags API. Please check your connection.');
    }
    
    throw error;
  }
}