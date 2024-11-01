function asteroidCollision(asteroids) {
    let stack = [];

    for (let asteroid of asteroids) {
        let isDestroyed = false;

        while (stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
            let topAsteroid = stack[stack.length - 1];

            if (Math.abs(asteroid) > topAsteroid) {
                stack.pop();
                continue;
            } else if (Math.abs(asteroid) === topAsteroid) {
                stack.pop();
            }

            isDestroyed = true;
            break;
        }

        if (!isDestroyed) {
            stack.push(asteroid);
        }
    }

    return stack;
}

// Example usage:
console.log(asteroidCollision([5, 10, -5])); // Output: [5, 10]
console.log(asteroidCollision([8, -8]));     // Output: []
console.log(asteroidCollision([10, 2, -5])); // Output: [10]
