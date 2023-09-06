const btn = document.getElementById("btn");
const mes = document.getElementById("message");

// 직렬예시
async function triathlon() {
  let swimEnd = await exercise(0, "swim");
  let bicycleEnd = await exercise(swimEnd, "bicycle");
  let runEnd = await exercise(bicycleEnd, "run");

  return runEnd;
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function exercise(startTime, name) {
  const exerciseInput = document.getElementById(name);
  // 1. 운동하는 데 걸리는 시간을 구하세요.
  const ms = parseInt(exerciseInput.value);
  // 2. setTimeout 대신 delay 함수를 사용해 비동기처리를 하세요.
  await delay(ms);
  const totalTime = startTime + ms;
  mes.innerHTML += `${name} finished at ${totalTime}`;
  // 3. 운동을 종료한 시간을 반환하세요.
  return totalTime;
}

btn.addEventListener("click", () => {
  triathlon().then((param) => {
    mes.innerText += `total time : ${param}`;
  });
});
