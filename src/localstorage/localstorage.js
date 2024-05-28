export const setToLocalStorage = (data) => {
    try {
        localStorage.setItem('contacts', JSON.stringify(data))
    } catch (error) {
        console.error("Error with setting data in local storage"+error);        
    }
}

export const getFromLocalStorage = () => {
    try {
        const stateStatus = localStorage.getItem('contacts') !== null ? JSON.parse(localStorage.getItem('contacts')) : [];
        return stateStatus;
    } catch (error) {
        console.error("Error with getting data from local storage"+error); 
    }
    
}