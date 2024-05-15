var counter = document.getElementById("counter");

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

var min = 436082;
var max = 1000000;

async function run() {
  while (min < max) {
    await sleep(Math.floor(Math.random() * 1500));
    min += Math.floor(Math.random() * 10);
    counter.textContent = new Intl.NumberFormat("en-US").format(min);
    console.log(counter.textContent);
  }
}

run();
