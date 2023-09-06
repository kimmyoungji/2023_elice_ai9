//randomuser.me 라는 API는 무작위로 생성된 사용자의 프로필 이미지를 포함해 디테일한 정보까지 어디서든 요청 가능합니다.

document.getElementById("myBtn").addEventListener("click", getData);

function getData() {
  // console.log('test');

  // 1. fetch()로 API를 이용합니다.
  Promise.resolve(fetch("https://randomuser.me/api/?results=100"))
    .then((response) => response.json())
    .then((data) => {
      let user = data.results;
      console.log(user);

      // 사용자 정보를 요청합니다.
      let output = "<h2><center>사용자 정보 받기</center></h2>";

      // 2. forEach()를 사용해서 user의 각 데이터를 output에 추가합니다.
      user.forEach((lists) => {
        output =
          output +
          `<div class="container">
<div class="card mt-4 bg-light">
<ul class="list-group">
<li class="list-group-item list-group-item-primary"><h2>Name: ${lists.name.first}</h2></li>
<li class="list-group-item"><img src="${lists.picture.large}"></li>
<li class="list-group-item">Phone Number: ${lists.cell}</li>
<li class="list-group-item">DOB: ${lists.dob.date}</li>
<li class="list-group-item">Age: ${lists.dob.age}</li>
<li class="list-group-item">Email ID: ${lists.email}</li>
<li class="list-group-item">City: ${lists.location.city}</li>
<li class="list-group-item">Country: ${lists.location.country}</li>
<li class="list-group-item">PostCode: ${lists.location.postcode}</li>
</ul>
</div>
</div>`;
      });
      document.getElementById("output").innerHTML = output;
    });
}
