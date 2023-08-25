// 1번
for (let i = 2; i <= 100; i = i + 2) {
    document.write(i);
}

// 2번
let num = 2;
while (num <= 100) {
    document.write(num);
    num += 2;
}

// 3번
const ans = [];

for (let i = 2; i <= 100; i += 2) {
    ans.push(i);
}

document.write(ans.join(""));
