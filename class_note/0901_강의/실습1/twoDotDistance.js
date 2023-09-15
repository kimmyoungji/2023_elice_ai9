// 모듈을 객체화 시키도록 하자.
const twoDotDistance = {
  // 자료구조로 만들면 복잡한 데이터를 잘 정리 할 수 있을 것이다.
  point1: {
    x: 0,
    y: 0,
  },
  point2: {
    x: 0,
    y: 0,
  },

  setPoints: function (x1, y1, x2, y2) {
    this.point1.x = x1;
    this.point1.y = y1;
    this.point1.x = x2;
    this.point1.y = y2;
    return;
  },

  calculateDistance: function () {
    const x1 = this.point1.x;
    const y1 = this.point1.y;
    const x2 = this.point2.x;
    const y2 = this.point2.y;
    let result = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

    // 오류 점검하는 것을 빠뜨렸다.
    if (!isNaN(result)) {
      return result.toFixed(2);
    } else {
      return "0";
    }
  },
};

export default twoDotDistance;
