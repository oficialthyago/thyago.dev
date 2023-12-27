const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;
let autoPlayInterval;
let isTransitioning = false;

function goToItem(index) {
  if (isTransitioning) return;

  const previousItem = currentItem;
  currentItem = index;

  isTransitioning = true;
  items[previousItem].classList.remove("current-item");
  items[currentItem].classList.add("current-item", "transitioning");

  setTimeout(() => {
    items[previousItem].classList.remove("transitioning");
    isTransitioning = false;
  }, 1000); // Tempo da transição, em milissegundos (ajuste conforme necessário)
}

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    let nextItem = currentItem + 1;
    if (nextItem >= maxItems) {
      nextItem = 0;
    }
    goToItem(nextItem);
  }, 3000); // Intervalo de 3 segundos (3000 milissegundos)
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    stopAutoPlay();

    const isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    goToItem(currentItem);
    startAutoPlay();
  });
});

startAutoPlay(); // Iniciar o autoplay quando a página carregar
