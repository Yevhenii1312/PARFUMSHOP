const perfumes = [
  {
    name: "Noir Étoile",
    description: "Тёплый древесный аромат с нотами ванили.",
    style: "Вечерний, элегантный",
    advantage: "Выразительный шлейф, который особенно раскрывается в прохладную погоду.",
    price: 89,
    rating: 4.9,
    delivery: "1–2 дня",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=85"
  },
  {
    name: "Fleur de Matin",
    description: "Лёгкий цветочный аромат для каждого дня.",
    style: "Романтичный, повседневный",
    advantage: "Лёгкое звучание подходит для офиса и не перегружает образ.",
    price: 72,
    rating: 4.8,
    delivery: "2–3 дня",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=85"
  },
  {
    name: "Bois Secret",
    description: "Свежий цитрус и спокойные древесные ноты.",
    style: "Свободный, современный",
    advantage: "Свежий старт и древесная база подходят для работы и прогулок.",
    price: 96,
    rating: 4.7,
    delivery: "1–2 дня",
    image:
      "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=800&q=85"
  },
  {
    name: "Rose Velours",
    description: "Мягкий аромат розы с выразительным шлейфом.",
    style: "Изысканный, романтичный",
    advantage: "Мягкая розовая нота выделяет аромат среди свежих композиций.",
    price: 78,
    rating: 4.6,
    delivery: "3–4 дня",
    image:
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=800&q=85"
  }
];

const productsContainer = document.querySelector("#products");

if (productsContainer) {
  productsContainer.innerHTML = perfumes
    .map(
      (perfume, index) => `
        <article class="product-card">
          <div
            class="product-image"
            style="background-image: url('${perfume.image}')"
            role="img"
            aria-label="Флакон аромата ${perfume.name}"
          ></div>

          <div class="product-info">
            <span class="product-rank">Место в рейтинге: ${index + 1}</span>
            <h3>${perfume.name}</h3>
            <p class="product-description">${perfume.description}</p>

            <div class="product-details">
              <span>★ ${perfume.rating}</span>
              <span>Доставка: ${perfume.delivery}</span>
            </div>

            <div class="product-extra">
              <p><strong>Стиль:</strong> ${perfume.style}</p>
              <p><strong>Преимущество:</strong> ${perfume.advantage}</p>
            </div>

            <p class="product-price">${perfume.price} €</p>
            <a class="product-button" href="product.html?id=${index}">
              Подробнее
            </a>
          </div>
        </article>
      `
    )
    .join("");
}

const detailContainer = document.querySelector("#product-detail");

if (detailContainer) {
  const productId = Number(
    new URLSearchParams(window.location.search).get("id")
  );
  const perfume = perfumes[productId];

  if (Number.isInteger(productId) && perfume) {
    document.title = `${perfume.name} — ParfumShop`;

    detailContainer.innerHTML = `
      <a class="back-link" href="index.html#catalog">← Вернуться в каталог</a>

      <div
        class="detail-image"
        style="background-image: url('${perfume.image}')"
        role="img"
        aria-label="Флакон аромата ${perfume.name}"
      ></div>

      <section class="detail-info">
        <p class="eyebrow">Аромат №${productId + 1} в нашей коллекции</p>
        <h1>${perfume.name}</h1>
        <p class="detail-description">${perfume.description}</p>
        <div class="detail-rating">★ ${perfume.rating} / 5</div>

        <div class="detail-facts">
          <p><strong>Подходящий стиль</strong><br>${perfume.style}</p>
          <p><strong>Преимущество</strong><br>${perfume.advantage}</p>
          <p><strong>Доставка</strong><br>${perfume.delivery}</p>
        </div>

        <p class="detail-price">${perfume.price} €</p>
        <a class="button" href="index.html#catalog">Вернуться к покупкам</a>
      </section>
    `;
  } else {
    detailContainer.innerHTML = `
      <section class="detail-info">
        <h1>Аромат не найден</h1>
        <a class="button" href="index.html#catalog">Перейти в каталог</a>
      </section>
    `;
  }
}