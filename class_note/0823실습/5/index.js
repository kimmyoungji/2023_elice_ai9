/*지시사항에 따라 작성해주세요.*/
const students = [
    {
        name: "john",
        studentId: 2020123456,
        major: "business",
    },
    {
        name: "elice",
        studentId: 2015111111,
        major: "statistics",
    },
    {
        name: "jennifer",
        studentId: 2017000000,
        major: "visual design",
    },
];

// 1번 : for문
/*1. elice를 찾아 전공을 'computer science'로 바꿔주세요.*/
for (let i = 0; i < students.length; i++) {
    //  1번 이름이 elice인 학생을 찾는다.
    if (students[i]["name"] === "elice") {
        students[i].major = "computer science";
    }
}
/*2. 웹 화면에 students 정보를 출력해 제대로 수정되었는지 확인해보세요.*/

for (let i = 0; i < students.length; i++) {
    document.write(`${students[i].name}'s major: ${students[i].major} <br/>`);
}

// 2번 : map
/*1. elice를 찾아 전공을 'computer science'로 바꿔주세요.*/
students.map((item) => {
    if (item.name === "elice") item.major = "computer science";
});

/*2. 웹 화면에 students 정보를 출력해 제대로 수정되었는지 확인해보세요.*/
students.map((item) => document.write(`${item.name}'s major: ${item.major} <br/>`));

// 3번 : for ... of
/* 1. elice를 찾아 전공을 'computer science'로 바꿔주세요. */
for (const student of students) {
    if (student.name == "elice") {
        student.major = "computer science";
    }
}

/* 2. 웹 화면에 students 정보를 출력해 제대로 수정되었는지 확인해보세요. */
for (const student of students) {
    document.write(`${student.name}'s major: ${student.major}<br>`);
}

// 4번 : find, 함수
/* 1. elice를 찾아 전공을 'computer science'로 바꿔주세요. */
students.find((item) => item.name === "elice").major = "computer science";

/*2. 웹 화면에 students 정보를 출력해 제대로 수정되었는지 확인해보세요.*/
const printStudent = function (student) {
    // console.log(student);
    return `${student.name}'s major: ${student.major}`;
};

for (let i = 0; i < students.length; i++) {
    console.log(printStudent(students[i]));
}
