const defaults = { retries: 3 };
const config = { timeout: 100 };
const result = { ...defaults, ...config };
console.log(result);