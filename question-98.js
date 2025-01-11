// Write a function retry that retries a given asynchronous function a specified number of times before failing.
function retry(fn, retries) {
    return new Promise((resolve, reject) => {
        const attempt = (n) => {
            fn()
                .then(resolve)
                .catch((error) => {
                    if (n === 0) reject(error);
                    else attempt(n - 1);
                });
        };
        attempt(retries);
    });
}

const fetchData = () => new Promise((resolve, reject) => Math.random() > 0.7 ? resolve('Success') : reject('Fail'));
retry(fetchData, 3).then(console.log).catch(console.error);
