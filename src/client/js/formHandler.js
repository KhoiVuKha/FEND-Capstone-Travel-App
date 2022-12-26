/* Global variables */

/* Function to handle submit events */
const handleSubmit = async (event) => {
    console.log("::: Form Submitted ::: -> handleSubmit event")
    event.preventDefault();
}

/* TODO: Function to POST data */
const postData = async (url = "", data = {}) => {
    console.log("[Client] postData");
};

/* TODO: Function to update UI */
const updateUI = (data) => {
    console.log("[Client] updateUI");
};

export {
    handleSubmit
}