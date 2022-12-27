const $ = require('jquery');

const getDestination = () => {
    let destination = document.getElementById('destination').value;
    if (destination) {
        destination = destination.toLowerCase();
        destination = destination[0].toUpperCase() + destination.slice(1);
    }
    return destination;
}

const getStartingDate = () => {
    const startDate = document.getElementById('date_start').value.split('-');
    return startDate.join('/');
}

const getReturnDate = () => {
    const returnDate = document.getElementById('date_end').value.split('-');
    return returnDate.join('/');
}

export { getDestination, getStartingDate, getReturnDate };
