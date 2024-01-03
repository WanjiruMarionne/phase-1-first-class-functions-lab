const returnFirstTwoDrivers = function (driversArray) {
    return (driversArray.slice(0,2));
};

const returnLastTwoDrivers = function (driversArray) {
    return (driversArray.slice(-2));
};

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function (fareMultiple) {
    return function (fare) {
        return fareMultiple * fare;
    }
}

const fareDoubler = createFareMultiplier (2)

const fareTripler = createFareMultiplier (3)

function selectDifferentDrivers (driversArray, selectingDrivers) {
    return selectingDrivers (driversArray);
}
