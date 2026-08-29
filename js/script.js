/* =========================================================
   LUXE HAIR
   SHARED WEBSITE JAVASCRIPT

   This file is deliberately shared by all pages.

   Current responsibilities:
   - Product data
   - Home page products
   - Shared cart
   - LocalStorage
   - Quantity controls
   - Wishlist interaction
   - Quick view
   - WhatsApp checkout
   - Scroll reveal
   - Home page search trigger
========================================================= */

/* =========================================================
   01. CONFIGURATION
========================================================= */

const SITE_WHATSAPP_NUMBER = "2348000000000";

const SITE_CART_STORAGE_KEY = "luxeHairCart";

/* =========================================================
   02. PRODUCT DATA
========================================================= */

const SITE_PRODUCTS = [
  {
    id: 1,
    name: "Silk Straight",
    category: "Straight",
    slug: "straight",
    length: "20 inches",
    price: 185000,
    badge: "Signature",
    image: "images/hair-one.webp",
    hoverImage: "images/hair-two.webp",
    description:
      "A sleek, polished straight texture with a soft natural finish and effortless movement.",
  },

  {
    id: 2,
    name: "Lagos Body Wave",
    category: "Body Wave",
    slug: "body-wave",
    length: "22 inches",
    price: 210000,
    badge: "Bestseller",
    image: "images/hair-three.webp",
    hoverImage: "images/hair-four.webp",
    description:
      "Soft flowing waves designed for volume, elegance and an effortlessly glamorous finish.",
  },

  {
    id: 3,
    name: "The Icon Bob",
    category: "Bob",
    slug: "bob",
    length: "12 inches",
    price: 145000,
    badge: "New",
    image: "images/hair-five.webp",
    hoverImage: "images/hair-six.webp",
    description:
      "A refined bob with a clean silhouette for a timeless and confident everyday look.",
  },

  {
    id: 4,
    name: "Soft Curl",
    category: "Curly",
    slug: "curly",
    length: "20 inches",
    price: 195000,
    badge: "Popular",
    image: "images/hair-seven.webp",
    hoverImage: "images/hair-eight.webp",
    description:
      "Defined curls with soft dimension and a rich luxurious finish.",
  },

  {
    id: 5,
    name: "Luxe Bone Straight",
    category: "Straight",
    slug: "straight",
    length: "24 inches",
    price: 245000,
    badge: "Premium",
    image: "images/hair-nine.webp",
    hoverImage: "images/hair-ten.webp",
    description:
      "Long, ultra-sleek strands with a smooth glossy finish made for statement looks.",
  },

  {
    id: 6,
    name: "Midnight Wave",
    category: "Body Wave",
    slug: "body-wave",
    length: "20 inches",
    price: 205000,
    badge: "Popular",
    image: "images/hair-eleven.webp",
    hoverImage: "images/hair-twelve.webp",
    description:
      "Full-bodied waves with movement, bounce and a sophisticated silhouette.",
  },

  {
    id: 7,
    name: "Cloud Curl",
    category: "Curly",
    slug: "curly",
    length: "18 inches",
    price: 180000,
    badge: "New",
    image: "images/hair-thirteen.webp",
    hoverImage: "images/hair-fourteen.webp",
    description:
      "Soft, voluminous curls designed for a romantic and effortlessly feminine finish.",
  },

  {
    id: 8,
    name: "Paris Bob",
    category: "Bob",
    slug: "bob",
    length: "10 inches",
    price: 135000,
    badge: "Limited",
    image: "images/hair-fifteen.webp",
    hoverImage: "images/hair-sixteen.webp",
    description:
      "A sophisticated short style inspired by Parisian simplicity and modern elegance.",
  },

  {
    id: 9,
    name: "Royal Straight",
    category: "Straight",
    slug: "straight",
    length: "26 inches",
    price: 275000,
    badge: "Luxury",
    image: "images/hair-seventeen.webp",
    hoverImage: "images/hair-eighteen.webp",
    description:
      "Extra-long silky strands for a dramatic, elegant and effortlessly luxurious appearance.",
  },

  {
    id: 10,
    name: "Velvet Wave",
    category: "Body Wave",
    slug: "body-wave",
    length: "24 inches",
    price: 235000,
    badge: "Trending",
    image: "images/hair-nineteen.webp",
    hoverImage: "images/hair-twenty.webp",
    description:
      "Rich, soft waves with luxurious volume and a naturally flowing finish.",
  },

  {
    id: 11,
    name: "Cocoa Curl",
    category: "Curly",
    slug: "curly",
    length: "22 inches",
    price: 215000,
    badge: "Hot Pick",
    image: "images/hair-twenty-one.webp",
    hoverImage: "images/hair-twenty-two.webp",
    description:
      "Luxuriously textured curls with beautiful fullness and natural-looking movement.",
  },

  {
    id: 12,
    name: "Milan Bob",
    category: "Bob",
    slug: "bob",
    length: "14 inches",
    price: 155000,
    badge: "Editor's Pick",
    image: "images/hair-twenty-three.webp",
    hoverImage: "images/hair-twenty-four.webp",
    description:
      "A polished modern bob with a sophisticated shape and an elevated finish.",
  },

  {
    id: 13,
    name: "Satin Straight",
    category: "Straight",
    slug: "straight",
    length: "18 inches",
    price: 165000,
    badge: "Everyday",
    image: "images/hair-twenty-five.webp",
    hoverImage: "images/hair-twenty-six.webp",
    description:
      "A refined straight style designed for effortless everyday elegance.",
  },

  {
    id: 14,
    name: "Muse Wave",
    category: "Body Wave",
    slug: "body-wave",
    length: "26 inches",
    price: 265000,
    badge: "Iconic",
    image: "images/hair-twenty-seven.webp",
    hoverImage: "images/hair-twenty-eight.webp",
    description:
      "Long, luxurious body waves with dramatic movement and effortless glamour.",
  },

  {
    id: 15,
    name: "Wild Rose Curl",
    category: "Curly",
    slug: "curly",
    length: "24 inches",
    price: 225000,
    badge: "Statement",
    image: "images/hair-twenty-nine.webp",
    hoverImage: "images/hair-thirty.webp",
    description:
      "Expressive, voluminous curls created for a bold and memorable silhouette.",
  },

  {
    id: 16,
    name: "The Muse Bob",
    category: "Bob",
    slug: "bob",
    length: "8 inches",
    price: 125000,
    badge: "New",
    image: "images/hair-31.webp",
    hoverImage: "images/hair-32.webp",
    description:
      "A chic, compact bob with a clean shape and contemporary luxury feel.",
  },

  {
    id: 17,
    name: "Luxe Wave",
    category: "Body Wave",
    slug: "body-wave",
    length: "22 inches",
    price: 220000,
    badge: "New",
    image: "images/hair-33.webp",
    hoverImage: "images/hair-34.webp",
    description: "Beautiful flowing waves with a soft, luxurious finish.",
  },

  {
    id: 18,
    name: "Royal Curl",
    category: "Curly",
    slug: "curly",
    length: "24 inches",
    price: 230000,
    badge: "Premium",
    image: "images/hair-35.webp",
    hoverImage: "images/hair-36.webp",
    description:
      "Full, defined curls with an elegant and luxurious appearance.",
  },

  {
    id: 19,
    name: "Signature Straight",
    category: "Straight",
    slug: "straight",
    length: "26 inches",
    price: 280000,
    badge: "Luxury",
    image: "images/hair-37.webp",
    hoverImage: "images/hair-38.webp",
    description: "Ultra-sleek straight hair with a polished premium finish.",
  },

  {
    id: 20,
    name: "Luxe Bob",
    category: "Bob",
    slug: "bob",
    length: "12 inches",
    price: 150000,
    badge: "New",
    image: "images/hair-39.webp",
    hoverImage: "images/hair-31.webp",
    description:
      "A sophisticated bob designed for a clean, modern and effortless look.",
  },
];
/* =========================================================
   HOME HERO SLIDER
   HOME PAGE ONLY
========================================================= */

const HOME_HERO_SLIDES = [
  {
    eyebrow: "THE LUXE EDIT",

    title: "Hair that makes|an entrance.",

    description:
      "Refined textures. Effortless movement. Beautifully selected wigs for the woman who knows exactly how she wants to feel.",

    image: "images/hair-one.webp",
  },

  {
    eyebrow: "THE POLISHED EDIT",

    title: "Sleek hair.|Quiet confidence.",

    description:
      "Silky straight textures, beautiful lengths and an immaculate finish made for a signature look.",

    image: "images/hair-two.webp",
  },

  {
    eyebrow: "THE SOFT EDIT",

    title: "Make room|for movement.",

    description:
      "Soft waves with bounce, volume and effortless glamour designed to move beautifully with you.",

    image: "images/hair-three.webp",
  },

  {
    eyebrow: "THE STATEMENT EDIT",

    title: "More texture.|More personality.",

    description:
      "Expressive textures and beautiful silhouettes selected for women who want to be remembered.",

    image: "images/hair-four.webp",
  },
];

let HOME_HERO_INDEX = 0;
let HOME_HERO_TIMER = null;

function homeHeroShowSlide(index) {
  const slide = HOME_HERO_SLIDES[index];

  const image = document.getElementById("homeHeroImage");

  const eyebrow = document.getElementById("homeHeroEyebrow");

  const title = document.getElementById("homeHeroTitle");

  const description = document.getElementById("homeHeroDescription");

  const current = document.getElementById("homeHeroCurrent");

  if (!image || !eyebrow || !title || !description) {
    return;
  }

  /*
   * Fade the current image out
   */

  image.classList.add("is-changing");

  setTimeout(() => {
    /*
     * Change image
     */

    image.style.backgroundImage = `url("${slide.image}")`;

    /*
     * Change text
     */

    eyebrow.textContent = slide.eyebrow;

    const titleParts = slide.title.split("|");

    if (titleParts.length === 2) {
      title.innerHTML = `

        ${titleParts[0]}

        <em>
          ${titleParts[1]}
        </em>

      `;
    } else {
      title.textContent = slide.title;
    }

    description.textContent = slide.description;

    /*
     * Update counter
     */

    if (current) {
      current.textContent = String(index + 1).padStart(2, "0");
    }

    /*
     * Bring new image in
     */

    image.classList.remove("is-changing");
  }, 350);
}

/* =========================================================
   NEXT SLIDE
========================================================= */

function homeHeroNext() {
  HOME_HERO_INDEX = (HOME_HERO_INDEX + 1) % HOME_HERO_SLIDES.length;

  homeHeroShowSlide(HOME_HERO_INDEX);
}

/* =========================================================
   PREVIOUS SLIDE
========================================================= */

function homeHeroPrevious() {
  HOME_HERO_INDEX =
    (HOME_HERO_INDEX - 1 + HOME_HERO_SLIDES.length) % HOME_HERO_SLIDES.length;

  homeHeroShowSlide(HOME_HERO_INDEX);
}

/* =========================================================
   START AUTO SLIDER
========================================================= */

function homeHeroStartAutoSlide() {
  clearInterval(HOME_HERO_TIMER);

  HOME_HERO_TIMER = setInterval(() => {
    homeHeroNext();
  }, 5000);
}

/* =========================================================
   SETUP HERO
========================================================= */

function homeHeroSetup() {
  const hero = document.querySelector(".home-hero-slider");

  const image = document.getElementById("homeHeroImage");

  const nextButton = document.getElementById("homeHeroNext");

  const previousButton = document.getElementById("homeHeroPrev");

  /*
   * If we're not on the Home page,
   * do nothing.
   */

  if (!hero || !image) {
    return;
  }

  /*
   * Preload the hero images
   */

  HOME_HERO_SLIDES.forEach((slide) => {
    const preload = new Image();

    preload.src = slide.image;
  });

  /*
   * Display first slide
   */

  HOME_HERO_INDEX = 0;

  image.style.backgroundImage = `url("${HOME_HERO_SLIDES[0].image}")`;

  /*
   * NEXT
   */

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      homeHeroNext();

      homeHeroStartAutoSlide();
    });
  }

  /*
   * PREVIOUS
   */

  if (previousButton) {
    previousButton.addEventListener("click", () => {
      homeHeroPrevious();

      homeHeroStartAutoSlide();
    });
  }

  /*
   * Start automatic slider
   */

  homeHeroStartAutoSlide();
}

/* =========================================================
   03. SHARED CART STATE
========================================================= */

let SITE_CART = siteLoadCart();

/* =========================================================
   04. STORAGE
========================================================= */

function siteLoadCart() {
  try {
    const saved = localStorage.getItem(SITE_CART_STORAGE_KEY);

    if (!saved) {
      return [];
    }

    const parsed = JSON.parse(saved);

    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("LUXE Hair: Could not load cart.", error);

    return [];
  }
}

function siteSaveCart() {
  try {
    localStorage.setItem(SITE_CART_STORAGE_KEY, JSON.stringify(SITE_CART));
  } catch (error) {
    console.error("LUXE Hair: Could not save cart.", error);
  }
}

/* =========================================================
   05. FORMATTERS
========================================================= */

function siteFormatPrice(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

function siteFindProduct(id) {
  return SITE_PRODUCTS.find((product) => product.id === Number(id));
}

function siteGetCartCount() {
  return SITE_CART.reduce((total, item) => total + item.quantity, 0);
}

function siteGetCartTotal() {
  return SITE_CART.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
}

function siteEscapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* =========================================================
   06. CART COUNT
========================================================= */

function siteUpdateCartCount() {
  const count = document.getElementById("siteCartCount");

  if (!count) {
    return;
  }

  count.textContent = siteGetCartCount();
}

/* =========================================================
   07. ADD TO CART
========================================================= */

function siteAddToCart(productId) {
  const product = siteFindProduct(productId);

  if (!product) {
    return;
  }

  const existing = SITE_CART.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    SITE_CART.push({
      id: product.id,

      name: product.name,

      category: product.category,

      length: product.length,

      price: product.price,

      image: product.image,

      quantity: 1,
    });
  }

  siteSaveCart();

  siteUpdateCartCount();

  siteRenderCart();

  siteOpenCart();
}

/* =========================================================
   08. UPDATE CART QUANTITY
========================================================= */

function siteUpdateCartQuantity(productId, change) {
  const item = SITE_CART.find((cartItem) => cartItem.id === Number(productId));

  if (!item) {
    return;
  }

  item.quantity += change;

  if (item.quantity <= 0) {
    SITE_CART = SITE_CART.filter(
      (cartItem) => cartItem.id !== Number(productId),
    );
  }

  siteSaveCart();

  siteUpdateCartCount();

  siteRenderCart();
}

/* =========================================================
   09. REMOVE CART ITEM
========================================================= */

function siteRemoveCartItem(productId) {
  SITE_CART = SITE_CART.filter((item) => item.id !== Number(productId));

  siteSaveCart();

  siteUpdateCartCount();

  siteRenderCart();
}

/* =========================================================
   10. OPEN CART
========================================================= */

function siteOpenCart() {
  const drawer = document.getElementById("siteCartDrawer");

  if (!drawer) {
    return;
  }

  if (typeof bootstrap === "undefined" || !bootstrap.Offcanvas) {
    return;
  }

  const instance = bootstrap.Offcanvas.getOrCreateInstance(drawer);

  instance.show();
}

/* =========================================================
   11. RENDER CART
========================================================= */

function siteRenderCart() {
  const cartItems = document.getElementById("siteCartItems");

  const cartEmpty = document.getElementById("siteCartEmpty");

  const cartFooter = document.getElementById("siteCartFooter");

  siteUpdateCartCount();

  if (!cartItems) {
    return;
  }

  if (!SITE_CART.length) {
    cartItems.innerHTML = "";

    if (cartEmpty) {
      cartEmpty.style.display = "flex";
    }

    if (cartFooter) {
      cartFooter.innerHTML = "";
    }

    return;
  }

  if (cartEmpty) {
    cartEmpty.style.display = "none";
  }

  cartItems.innerHTML = "";

  SITE_CART.forEach((item) => {
    const element = document.createElement("div");

    element.className = "site-cart__item";

    element.innerHTML = `

            <div class="site-cart__item-image">

                <img
                    src="${item.image}"
                    alt="${siteEscapeHTML(item.name)}"
                >

            </div>


            <div>

                <div class="site-cart__item-name">
                    ${siteEscapeHTML(item.name)}
                </div>

                <div class="site-cart__item-meta">
                    ${siteEscapeHTML(item.category)}
                    ·
                    ${siteEscapeHTML(item.length)}
                </div>

                <div class="site-cart__item-price">
                    ${siteFormatPrice(item.price)}
                </div>


                <div class="site-cart__quantity">

                    <button
                        type="button"
                        data-cart-change="-1"
                        data-product-id="${item.id}"
                        aria-label="Decrease quantity"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        type="button"
                        data-cart-change="1"
                        data-product-id="${item.id}"
                        aria-label="Increase quantity"
                    >
                        +
                    </button>

                </div>

            </div>


            <button
                type="button"
                class="site-cart__remove"
                data-cart-remove="${item.id}"
                aria-label="Remove ${siteEscapeHTML(item.name)}"
            >

                <i class="bi bi-trash3"></i>

            </button>

        `;

    cartItems.appendChild(element);
  });

  if (cartFooter) {
    cartFooter.innerHTML = `

            <div class="site-cart__total-row">

                <span class="site-cart__total-label">
                    Estimated Total
                </span>

                <strong class="site-cart__total">
                    ${siteFormatPrice(siteGetCartTotal())}
                </strong>

            </div>


            <button
                type="button"
                class="site-cart__checkout"
                id="siteWhatsappCheckout"
            >

                <i class="bi bi-whatsapp"></i>

                Checkout on WhatsApp

            </button>

        `;
  }
}

/* =========================================================
   12. WHATSAPP CHECKOUT
========================================================= */

function siteCheckoutOnWhatsApp() {
  if (!SITE_CART.length) {
    return;
  }

  const lines = ["Hello LUXE Hair, I would like to place an order:", ""];

  SITE_CART.forEach((item) => {
    const itemTotal = item.price * item.quantity;

    lines.push(
      `• ${item.name} — ` +
        `${item.length} × ${item.quantity} — ` +
        `${siteFormatPrice(itemTotal)}`,
    );
  });

  lines.push("");

  lines.push(`Estimated Total: ${siteFormatPrice(siteGetCartTotal())}`);

  const message = encodeURIComponent(lines.join("\n"));

  const url = `https://wa.me/${SITE_WHATSAPP_NUMBER}?text=${message}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

/* =========================================================
   13. HOME PRODUCT CARD
========================================================= */

function homeCreateProductCard(product) {
  return `

        <article
            class="home-product-card"
            data-product-id="${product.id}"
            data-reveal
        >


            <div class="home-product-card__visual">


                <!-- PRIMARY IMAGE -->

                <img
                    class="home-product-card__image home-product-card__image--primary"
                    src="${product.image}"
                    alt="${siteEscapeHTML(product.name)}"
                    loading="lazy"
                >


                <!-- SECONDARY IMAGE -->

                <img
                    class="home-product-card__image home-product-card__image--secondary"
                    src="${product.hoverImage}"
                    alt="${siteEscapeHTML(product.name)} alternate view"
                    loading="lazy"
                >


                <!-- BADGE -->

                <span class="home-product-card__badge">

                    ${siteEscapeHTML(product.badge)}

                </span>


                <!-- WISHLIST -->

                <button
                    type="button"
                    class="home-product-card__wishlist"
                    data-home-wishlist="${product.id}"
                    aria-label="Add ${siteEscapeHTML(product.name)} to wishlist"
                >

                    <i class="bi bi-heart"></i>

                </button>


                <!-- HOVER TEXT -->

                <span class="home-product-card__hover-label">

                    Move to explore

                </span>


                <!-- ACTIONS -->

                <div class="home-product-card__actions">


                    <button
                        type="button"
                        class="home-product-card__quick-view"
                        data-home-quick-view="${product.id}"
                    >

                        Quick view

                    </button>


                    <button
                        type="button"
                        class="home-product-card__add"
                        data-home-add-cart="${product.id}"
                        aria-label="Add ${siteEscapeHTML(product.name)} to cart"
                    >

                        <i class="bi bi-plus-lg"></i>

                    </button>


                </div>

            </div>



            <!-- INFO -->

            <div class="home-product-card__info">

                <div>

                    <div class="home-product-card__name">

                        ${siteEscapeHTML(product.name)}

                    </div>


                    <div class="home-product-card__meta">

                        ${siteEscapeHTML(product.category)}
                        ·
                        ${siteEscapeHTML(product.length)}

                    </div>


                    <div class="home-product-card__price">

                        ${siteFormatPrice(product.price)}

                    </div>

                </div>

            </div>


        </article>

    `;
}

/* =========================================================
   14. RENDER HOME PRODUCTS
========================================================= */

function homeRenderProducts() {
  const grid = document.getElementById("homeProductGrid");

  /*
   * The homepage quick-shop section
   * does not exist on other pages.
   */

  if (!grid) {
    return;
  }

  /*
   * Display 8 products.
   *
   * Desktop:
   * 4 products per row
   *
   * Therefore:
   * 8 products = 2 rows
   *
   * Mobile:
   * 2 products per row
   */

  const products = SITE_PRODUCTS.slice(0, 8);

  grid.innerHTML = products.map(homeCreateProductCard).join("");

  /*
   * Activate scroll reveal
   * for dynamically created cards.
   */

  siteObserveRevealElements();
}
/* =========================================================
   15. QUICK VIEW
========================================================= */

function homeOpenQuickView(productId) {
  const product = siteFindProduct(productId);

  if (!product) {
    return;
  }

  const content = document.getElementById("homeQuickViewContent");

  if (!content) {
    return;
  }

  content.innerHTML = `

        <div class="home-quick-view__grid">


            <div class="home-quick-view__image">

                <img
                    src="${product.image}"
                    alt="${siteEscapeHTML(product.name)}"
                >

            </div>


            <div class="home-quick-view__details">

                <div class="home-quick-view__category">

                    ${siteEscapeHTML(product.category)}
                    ·
                    ${siteEscapeHTML(product.length)}

                </div>


                <h2 class="home-quick-view__title">

                    ${siteEscapeHTML(product.name)}

                </h2>


                <p class="home-quick-view__description">

                    ${siteEscapeHTML(product.description)}

                </p>


                <div class="home-quick-view__price">

                    ${siteFormatPrice(product.price)}

                </div>


                <button
                    type="button"
                    class="home-quick-view__add"
                    data-home-quick-add="${product.id}"
                >

                    Add to shopping bag

                </button>

            </div>


        </div>

    `;

  const modal = document.getElementById("homeQuickViewModal");

  if (!modal) {
    return;
  }

  if (typeof bootstrap === "undefined" || !bootstrap.Modal) {
    return;
  }

  bootstrap.Modal.getOrCreateInstance(modal).show();
}

/* =========================================================
   16. WISHLIST INTERACTION
========================================================= */

function homeToggleWishlist(button) {
  button.classList.toggle("is-liked");

  const icon = button.querySelector("i");

  if (!icon) {
    return;
  }

  icon.classList.toggle("bi-heart");

  icon.classList.toggle("bi-heart-fill");
}

/* =========================================================
   17. SCROLL REVEAL
========================================================= */

let SITE_REVEAL_OBSERVER = null;

function siteCreateRevealObserver() {
  if (typeof IntersectionObserver === "undefined") {
    return null;
  }

  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const element = entry.target;

        const delay = element.dataset.revealDelay || "0";

        element.style.transitionDelay = `${delay}ms`;

        element.classList.add("is-revealed");

        /*
         * We only need to reveal each
         * element once.
         */

        SITE_REVEAL_OBSERVER.unobserve(element);
      });
    },
    {
      threshold: 0.12,

      rootMargin: "0px 0px -55px 0px",
    },
  );
}

function siteObserveRevealElements() {
  const elements = document.querySelectorAll("[data-reveal]:not(.is-revealed)");

  if (!elements.length) {
    return;
  }

  /*
   * If browser doesn't support IntersectionObserver,
   * don't leave the content invisible.
   */

  if (typeof IntersectionObserver === "undefined") {
    elements.forEach((element) => {
      element.classList.add("is-revealed");
    });

    return;
  }

  if (!SITE_REVEAL_OBSERVER) {
    SITE_REVEAL_OBSERVER = siteCreateRevealObserver();
  }

  elements.forEach((element) => {
    SITE_REVEAL_OBSERVER.observe(element);
  });
}

/* =========================================================
   18. HOME SEARCH BUTTON
========================================================= */

function homeSetupSearchTrigger() {
  const trigger = document.getElementById("homeSearchTrigger");

  if (!trigger) {
    return;
  }

  trigger.addEventListener("click", () => {
    /*
     * For now, Home's search button takes
     * the customer to the Shop page.
     */

    window.location.href = "shop.html";
  });
}

/* =========================================================
   19. GLOBAL CLICK HANDLER
========================================================= */

function siteSetupGlobalClicks() {
  document.addEventListener("click", (event) => {
    /* ---------------------------------------------
               HOME ADD TO CART
            ---------------------------------------------- */

    const addButton = event.target.closest("[data-home-add-cart]");

    if (addButton) {
      siteAddToCart(Number(addButton.dataset.homeAddCart));

      return;
    }

    /* ---------------------------------------------
               QUICK VIEW
            ---------------------------------------------- */

    const quickViewButton = event.target.closest("[data-home-quick-view]");

    if (quickViewButton) {
      homeOpenQuickView(Number(quickViewButton.dataset.homeQuickView));

      return;
    }

    /* ---------------------------------------------
               QUICK VIEW ADD
            ---------------------------------------------- */

    const quickAdd = event.target.closest("[data-home-quick-add]");

    if (quickAdd) {
      const productId = Number(quickAdd.dataset.homeQuickAdd);

      siteAddToCart(productId);

      const modal = document.getElementById("homeQuickViewModal");

      if (modal) {
        const instance = bootstrap.Modal.getInstance(modal);

        if (instance) {
          instance.hide();
        }
      }

      return;
    }

    /* ---------------------------------------------
               WISHLIST
            ---------------------------------------------- */

    const wishlistButton = event.target.closest("[data-home-wishlist]");

    if (wishlistButton) {
      homeToggleWishlist(wishlistButton);

      return;
    }

    /* ---------------------------------------------
               CART QUANTITY
            ---------------------------------------------- */

    const quantityButton = event.target.closest("[data-cart-change]");

    if (quantityButton) {
      siteUpdateCartQuantity(
        Number(quantityButton.dataset.productId),
        Number(quantityButton.dataset.cartChange),
      );

      return;
    }

    /* ---------------------------------------------
               CART REMOVE
            ---------------------------------------------- */

    const removeButton = event.target.closest("[data-cart-remove]");

    if (removeButton) {
      siteRemoveCartItem(Number(removeButton.dataset.cartRemove));

      return;
    }

    /* ---------------------------------------------
               WHATSAPP CHECKOUT
            ---------------------------------------------- */

    if (event.target.closest("#siteWhatsappCheckout")) {
      siteCheckoutOnWhatsApp();
    }
  });
}

/* =========================================================
   20. KEEP CART SYNCHRONIZED
========================================================= */

function siteRefreshCartFromStorage() {
  SITE_CART = siteLoadCart();

  siteUpdateCartCount();

  siteRenderCart();
}

/* =========================================================
   21. PAGE VISIBILITY / TAB RETURN
========================================================= */

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    siteRefreshCartFromStorage();
  }
});

/* =========================================================
   22. STORAGE EVENT
========================================================= */

window.addEventListener("storage", (event) => {
  if (event.key === SITE_CART_STORAGE_KEY) {
    SITE_CART = siteLoadCart();

    siteUpdateCartCount();

    siteRenderCart();
  }
});

/* =========================================================
   23. INITIALIZE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /*
   * Shared initialization
   */

  siteUpdateCartCount();

  siteRenderCart();

  siteSetupGlobalClicks();

  siteObserveRevealElements();

  /*
   * HOME HERO
   */

  homeHeroSetup();

  /*
   * Home-only initialization
   */

  homeRenderProducts();

  homeSetupSearchTrigger();
});
