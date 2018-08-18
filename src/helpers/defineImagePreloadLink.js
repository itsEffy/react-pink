// возвращает строку, описывающую тип девайса
const defineProbableDevice = UAheader => {
  // из планшетов понимает только iPad - очень трудно
  if (UAheader.search(/iPad/gi) >= 0) {
    return "tablet";
  }
  if (UAheader.search(/Mobile|Android|Opera Mini/g) >= 0) {
    return "mobile";
  }
  return "desktop";
};

// возвращает true, если экран с наибольшей вероятностью - retina
const defineRetina = UAheader => UAheader.search(/Mac/g) >= 0;

// возвращает true, если браузер скорее всего поддерживает WebP
const defineWebpSupport = UAheader =>
  UAheader.search(/Chrome|Opera Mini|UCBrowser|Samsung/g) >= 0;

// даннная функция пытается определить изображения, которые с наибольшей веростностью понадобятся странице. (реализовано по минимуму)
const defineImagePreloadLink = (route, UAheader) => {
  const probableDevice = defineProbableDevice(UAheader);
  const isRetina = defineRetina(UAheader);
  const supportsWebp = defineWebpSupport(UAheader);

  const imageVersion = `${probableDevice}${isRetina ? "@2x" : ""}`;
  const jpegOrWebp = supportsWebp ? "jpg" : "jpg"; // не ошибка, а сознательное решение покуда нет webp-версии фона
  const pngOrWebp = supportsWebp ? "webp" : "png";

  switch (route) {
    // фон и рука
    case "/":
      return `<link rel="preload" href="/img/index/bg-back-${imageVersion}.${jpegOrWebp}" as="image">
      <link rel="preload" href="/img/index/iphone-hand-${imageVersion}.${pngOrWebp}" as="image">`;
    // фон
    default:
      return `<link rel="preload" href="/img/index/bg-back-${imageVersion}.${jpegOrWebp}" as="image">`;
  }
};

export default defineImagePreloadLink;
