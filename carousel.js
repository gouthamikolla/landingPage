document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsHTML = Array.from(items, () => {
    return `<span class="carousel__button"></span>`;
  });
});
