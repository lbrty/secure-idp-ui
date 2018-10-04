/*
 * Golang style promise resolution
 * so when it gets used with async/await
 * you can just use it like
 * const [err, response] = await(waiter(myPromise))
 * Found at: https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/
 */
export const waiter = promise => {
  return promise.then(res => [null, res]).catch(err => [err, null]);
};
