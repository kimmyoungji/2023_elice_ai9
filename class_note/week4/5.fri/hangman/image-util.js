const GallowsImage = "./assets/gallows.png";
const BodyImage = "./assets/body.png";
const LeftArmImage = "./assets/left-arm.png";
const RightArmImage = "./assets/right-arm.png";
const LeftLegImage = "./assets/left-leg.png";
const RightLegImage = "./assets/right-leg.png";
const HeadImage = "./assets/head.png";

export function calculateImageSize(width, height, percent) {
  const calculatedPercent = percent / 100;
  const calculatedWidth = width * calculatedPercent;
  const calculatedHeight = height * calculatedPercent;

  return [calculatedWidth, calculatedHeight];
}

const imageData = [
  // dx, dy가 뭐지?
  { name: "right-leg", url: RightLegImage, dx: 242, dy: 290 },
  { name: "left-leg", url: LeftLegImage, dx: 193, dy: 290 },

  { name: "right-arm", url: RightArmImage, dx: 240, dy: 200 },
  { name: "left-arm", url: LeftArmImage, dx: 135, dy: 200 },

  { name: "body", url: BodyImage, dx: 185, dy: 180 },
  { name: "head", url: HeadImage, dx: 190, dy: 60 },
  { name: "gallows", url: GallowsImage, dx: 10, dy: 20 },
];

export function loadImage(url, name, dx, dy) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = url;

    image.addEventListener("load", () => resolve({ image, name, dx, dy }));
    image.addEventListener("error", () =>
      reject(new Error(`Error on loading ${url}`))
    );
  });
}

export function fetchAllImages() {
  return Promise.all(
    imageData.map((item) => loadImage(item.url, item.name, item.dx, item.dy))
  );
}
