const timeout = (ms) => {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, ms);
    });
};

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 40);
};

const generateData = async () => {
    await timeout(1000);
    return Array.from({ length: 20 }, 
        generateRandomNumber);
};

const convertToFeet = async (meters) => {
    await timeout(3500);
    return meters * 3.2808;
};

const processData = async (data, callback) => {
    const array = data.map(async (value) => 
    await callback(value));
    return await Promise.all(array);
};

const logResult = (meters, feet) => {
    console.log(`Converted ${meters}m to ${feet}ft`);
};

(async () => {
    console.log("Start");
    const meters = await generateData();
    const feets = await processData(meters, convertToFeet);
    for (let i = 0; i < meters.length; i++) {
        logResult(meters[i], feets[i]);
    }
    console.log("Finish");
})();