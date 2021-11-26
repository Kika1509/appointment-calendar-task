//Randomly define few even and odd days, and reserved appointments

const dayOdd1 = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {id: 1, number: 1, isReserved:true, periods: 2},
    {id: 2, number: 2, periods: 2},
    {id: 3, number: 3, periods: 2},
    {id: 4, number: 4, isReserved:true,periods: 2},
    {id: 5, number: 5, periods: 2},
    {id: 6, number: 6, periods: 2},
    null,
    null,
    {id: 7, number: 7, periods: 2},
    {id: 8, number: 8, isReserved:true,periods: 2},
    {id: 9, number: 9, periods: 2},
    {id: 10, number: 10, isReserved:true,periods: 2},
    {id: 11, number: 11, periods: 2},
    {id: 12, number: 12, periods: 2}
];

const dayOdd4 = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {id: 1, number: 1, isReserved:true, periods: 2},
    {id: 2, number: 2, periods: 2},
    {id: 3, number: 3, periods: 2},
    {id: 4, number: 4, periods: 2},
    {id: 5, number: 5, periods: 2},
    {id: 6, number: 6, periods: 2},
    null,
    null,
    {id: 7, number: 7, periods: 2},
    {id: 8, number: 8, periods: 2},
    {id: 9, number: 9, isReserved:true, periods: 2},
    {id: 10, number: 10, periods: 2},
    {id: 11, number: 11, periods: 2},
    {id: 12, number: 12, isReserved:true, periods: 2}
];



const dayEven1 = [

    {id: 1, number: 1, isReserved:true, periods: 2},
    {id: 2, number: 2, isReserved:true, periods: 2},
    {id: 3, number: 3, periods: 2},
    {id: 4, number: 4, periods: 2},
    {id: 5, number: 5, periods: 2},
    {id: 6, number: 6, periods: 2},
    null,
    null,
    {id: 7, number: 7, periods: 2},
    {id: 8, number: 8, periods: 2},
    {id: 9, number: 9, periods: 2},
    {id: 10, number: 10, periods: 2},
    {id: 11, number: 11, periods: 2},
    {id: 12, number: 12, periods: 2},

];

const dayEven3 = [

    {id: 1, number: 1, periods: 2},
    {id: 2, number: 2, periods: 2},
    {id: 3, number: 3, isReserved:true,periods: 2},
    {id: 4, number: 4, isReserved:true,periods: 2},
    {id: 5, number: 5, isReserved:true,periods: 2},
    {id: 6, number: 6, periods: 2},
    null,
    null,
    {id: 7, number: 7, periods: 2},
    {id: 8, number: 8, periods: 2},
    {id: 9, number: 9, periods: 2},
    {id: 10, number: 10, periods: 2},
    {id: 11, number: 11, periods: 2},
    {id: 12, number: 12, periods: 2},

];

//Define non working day
const nonWorkingDay = [
    null,
    null
]

//Return one of two versions of odd day
export function returnOddDay(date) {
    if (date % 4 === 0) {
        return dayOdd4;
    }
    return dayOdd1;
}

//Return one of two versions of even day
export function returnEvenDay(date) {
    if (date % 3 === 0) {
        return dayEven3;
    }
    return dayEven1;
}

//Retrun non working day
export function returnNonWorkingDay() {
    return nonWorkingDay;
}

