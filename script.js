// function fetchUserInfo(callback) {
//   setTimeout(() => {
//     const data = { id: 1, name: "Alex" };
//     callback(data);
//   }, 1000);
// }

// function fetchUserGames(id, callback) {
//   setTimeout(() => {
//     const data = ["game1", "game2"];
//     callback(data);
//   }, 1000);
// }

// function run(params) {
//   fetchUserInfo((userInfo) => {
//     console.log(userInfo);
//     fetchUserGames(userInfo.id, (userGames) => {
//       console.log(userGames);
//     });
//   });
// }

// run();

// ЛАСт

// function fetchUserData(params) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = { id: 1, name: "Alex" };

//       resolve(data);
//     }, 1000);
//   });
// }

// function fetchUserGames(params) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = ["game1", "game2"];

//       resolve(data);
//     }, 1000);
//   });
// }

// function run(params) {
//   fetchUserData()
//     .then((userData) => {
//       return fetchUserGames(userData.id);
//     })
//     .then((userGames) => {
//       console.log(userGames);
//     });
// }

// run();

function fetchGames(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const gamesFromServer = [
        {
          id: 1,
          name: "Witcher",
        },
        {
          id: 2,
          name: "Dota",
        },
      ];
      resolve(gamesFromServer);
    }, 2000);
  });
}

function renderLoading(params) {
  const body = document.querySelector("body");
  const loading = document.createElement("div");
  loading.id = "loading";
  loading.textContent = "ЗАгрузка";
  body.append(loading);
}

function renderGames(games) {
  const body = document.querySelector("body");
  const loading = document.querySelector("#loading");
  loading.remove();

  games.forEach((game) => {
    const gameElement = document.createElement("div");
    gameElement.innerText = `Игра: ${game.name}`;
    gameElement.className = "game-element";

    body.append(gameElement);
  });
}

renderLoading();

fetchGames().then((games) => {
  renderGames(games);
});
