const returnFirstTwoDrivers = function (array) {
    let array2 = [array[0], array[1]]
    return array2
}

const returnLastTwoDrivers = function (array) {
    let array2 = [array[array.length-2], array[array.length-1]]
    return array2
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function (fare) {
        return fare * int
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

//const fareDoubler = function (fare) {
//    return createFareMultiplier(2)(fare)  
//}
//const fareTripler = function (fare) {
//    return createFareMultiplier(3)(fare)
//}

function selectDifferentDrivers(arrayOfDrivers, funct) {
    return funct(arrayOfDrivers)
}
