const withCallback = (cb) => setTimeout(cb, 0);
withCallback(() => console.log('This was executed using an asynchronous callback'));

const withPromise = () => Promise.resolve('This was executed using Promises');
withPromise().then((res) => console.log(res));
