const enterNumber = () => {
  return new Promise((resolve, reject) => {
    const userNumber = Number(window.prompt("Enter a number from 1 to 6: "));
    const randomNumber = Math.floor(Math.random() * 6 + 1);

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 6) {
      reject(new Error("Error: You must enter a number between 1 and 6"));
    }

    if (userNumber === randomNumber) {
      resolve({
        points: 2,
        randomNumber,
      });
    } else if (
      userNumber === randomNumber - 1 ||
      userNumber === randomNumber + 1
    ) {
      resolve({
        points: 1,
        randomNumber,
      });
    } else {
      resolve({
        point: 0,
        randomNumber,
      });
    }
  });
};

const continueGame = () => {
  return new Promise((resolve) => {
    if (window.confirm("Do you want to continue?")) resolve(true);
    else resolve(false);
  });
};

const handleGuess = async () => {
  try {
    const result = await enterNumber();
    console.log(
      `Dice: ${result.randomNumber}, you got ${result.points} points`
    );
    const isCountinue = await continueGame();

    if (isCountinue) handleGuess();
    else alert("Game ends");
  } catch (error) {
    console.log("error: ", error);
  }
};

handleGuess();
