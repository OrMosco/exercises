const StringFormatter = () => {
    const capitalizeFirst = function (str) {
        if (str.length === 0) {
            return "";
        }
        const firstLetter = str[0].toUpperCase();
        const rest = str.slice(1).toLowerCase();
        return firstLetter + rest;
    };

    const toSkewerCase = (str) => str.replace(/ /g, "-");

    return {
        capitalizeFirst,
        toSkewerCase
    };
};

const formatter = StringFormatter();

console.log(formatter.capitalizeFirst("banana")); // Banana
console.log(formatter.toSkewerCase("yellow fruit")); // yellow-fruit
