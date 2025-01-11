// Write a function debounce that delays the execution of a given function until after a specified wait time has passed since the last time the function was invoked.

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

const log = debounce(() => console.log('Debounced!'), 1000);
log();
log();
setTimeout(log, 500);  // Will not log
setTimeout(log, 1500); // Will log "Debounced!" after 1.5 seconds
