/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function busyWait(milliseconds) {
    return new Promise((resolve) => {
        const startTime = Date.now();
        const endTime = startTime + milliseconds;

        // Busy wait loop
        while (Date.now() < endTime) {
            // Do nothing, just wait
        }

        resolve(`Busy wait completed for ${milliseconds} milliseconds`);
    });
}

// Example usage:
busyWait(2000)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });

module.exports = busyWait;
