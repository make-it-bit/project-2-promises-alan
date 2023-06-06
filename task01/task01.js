const getWeather = (isRaining) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isRaining) {
        resolve(2);
      } else {
        reject(new Error("Bruh, it is raining!"));
      }
    }, 2000);
  });
};

getWeather(false)
  .then((result) => {
    console.log(`It is raining. The result is ${result}.`);
  })
  .catch((error) => {
    console.log(error); // does not run
  })
  .finally(() => {
    console.log("Imma go for a walk anyway"); // runs in every case.
  });

getWeather(true)
  .then((result) => {
    console.log(`It is raining. The result is ${result}.`); // does not run
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Imma go for a walk anyway"); // runs in every case.
  });
