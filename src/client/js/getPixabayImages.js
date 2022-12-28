const getPixabayImages = async (
    photoType,
    category,
    isSafeSearch,
    orderBy,
    imageFormat,
    destination ) => {
    // Replace any spaces in the destination string, with the + symbol
    const pixabayDestination = destination.split(' ').join('+');

    // https://pixabay.com/api/docs/
    const pixabayRequestBody = {
        baseURL: `https://pixabay.com/api/?q=${pixabayDestination}&image_type=${photoType}&category=${category}&safesearch=${isSafeSearch}&order=${orderBy}&orientation=${imageFormat}`,
    };

    const pixabayResponse = await fetch('http://localhost:8080/pixabay-images', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(pixabayRequestBody),
    });

    const pixabayData = await pixabayResponse.json();
    return pixabayData;
};

export { getPixabayImages };