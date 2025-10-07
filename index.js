const fetchData = (url) => {
  const valueElement = document.getElementById("value");
  fetch(url, {
    "method": "GET"
  }).then(response => response.json())
    .then(data => {
      valueElement.style.fontSize = "24px";
      valueElement.innerText = data.data[0].mmr;
    })
    .catch(() => {
      valueElement.style.fontSize = "10px";
      valueElement.innerText = "Player not found";
    });
}

(async () => {
  const fetchConfig = await fetch("./config.json");
  const CONFIG = await fetchConfig.json();

  const player = CONFIG.player;
  const game = CONFIG.game;
  const URL = `https://corsproxy.io/?url=${encodeURIComponent(
    `https://lounge.mkcentral.com/api/player/leaderboard?game=${game}&search=${player}`
  )}`;

  setInterval(() => {
    fetchData(URL);
  }, 60 * 5 * 1000); // 5 minutes

  fetchData(URL);
})();