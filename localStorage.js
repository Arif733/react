// localStorage.js

// Function to retrieve data from localStorage
export function getData(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error retrieving data from localStorage:', error);
      return null;
    }
  }
  
  // Function to save data to localStorage
  export function saveData(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
      return false;
    }
  }
  
  // Function to clear data from localStorage
  export function clearData(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error clearing data from localStorage:', error);
      return false;
    }
  }
