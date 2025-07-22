const mathOperations = function () {
    const add = function (x, y) {
        return x + y;
    };

    const subtract = function (x, y) {
        return x - y;
    };

    const multiply = function (x, y) {
        return x * y;
    };

    const divide = function (x, y) {
        return x / y;
    };

    // מחזיר אובייקט עם כל הפונקציות
    return {
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide
    };
};

const m = mathOperations()
    console.log (m.add(13, 29))
    console.log (m.multiply(1.75, 24))
    console.log (m.multiply(7, m.divide(36, 6)))
