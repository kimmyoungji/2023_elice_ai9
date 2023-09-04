let count = 0;

function getCount() {
  return count;
}

function resetCount() {
  count = 0;
}

// setTimeout의 동기적 구현
function incrementSync() {
  let time1 = Date.now();
  while (true) {
    let time2 = Date.now();
    if (time2 - time1 > 3000) {
      break;
    }
  }
  count++;
}

function incrementAsync(callback) {
  setTimeout(() => {
    count++;
    callback();
  }, 3000);
}

module.exports = { getCount, resetCount, incrementSync, incrementAsync };
