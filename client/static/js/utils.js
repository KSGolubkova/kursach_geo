getRandom = () => {
    return (Math.random() * (78 - 41) + 78).toFixed(3) * 1;
}

function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}


setCurrentPosition = (position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    removeMark(id);
    addMark(id, latitude, longitude, username, MY_COLOR);
}


setFakePosition = () => {
    const newLatitude = getRandomInRange(41, 78, 5); 
    const newLongitude = getRandomInRange(19, 169, 5); 
    latitude = newLatitude;
    longitude = newLongitude;
    console.log(`Generated fake position: latitude=${newLatitude}, longitude=${newLongitude}`);
}


getFakePosition = (callback) => {
    callback({
        coords: {
            latitude: latitude,
            longitude: longitude,
        },
    });
}
