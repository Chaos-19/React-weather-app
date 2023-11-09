const getTimeInString = date => {
    return `${date.getHours().toString().padStart(2, "0")}:${date
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
};
const checkIfTheNearest = value => {
    return getTimeInString(value) === findNearestTime();
};

function findNearestTime() {
    const targetTimes = [
        new Date("2023-11-07 00:00:00"),
        new Date("2023-11-07 03:00:00"),
        new Date("2023-11-07 06:00:00"),
        new Date("2023-11-07 09:00:00"),
        new Date("2023-11-07 12:00:00"),
        new Date("2023-11-07 15:00:00"),
        new Date("2023-11-07 18:00:00"),
        new Date("2023-11-07 21:00:00")
    ];
    var currentDate = new Date();

    var nearestTime = targetTimes.reduce(function (prev, curr) {
        return Math.abs(curr - currentDate) < Math.abs(prev - currentDate)
            ? curr
            : prev;
    });

    return getTimeInString(nearestTime);
}

const filterNearestTimeForcat = data => {
    const store = [];
    return data.filter((value, index, array) => {
        if (
            !store.includes(new Date(value.dt_txt).getDate()) &&
            checkIfTheNearest(new Date(value.dt_txt))
        ) {
            store.push(new Date(value.dt_txt).getDate());
            return value.dt_txt;
        }
        return;
    });
};

export default filterNearestTimeForcat;
