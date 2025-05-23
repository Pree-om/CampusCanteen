// Sample food items categorized
const foodItems = [
  {
    id: 1,
    name: "Samosa",
    description: "Tasty and fresh samosa made in our canteen.",
    price: 114,
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Indian-Punjabi-Samosa-Recipe-500x500.jpg",
    category: "Snacks"
  },
  {
    id: 2,
    name: "Veg Puff",
    description: "Tasty and fresh veg puff made in our canteen.",
    price: 41,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzIzkadmbOY5EWi3Fi664EdIpXoQ2B6bQJjw&s",
    category: "Snacks"
  },
  {
    id: 3,
    name: "Cheese Sandwich",
    description: "Tasty and fresh cheese sandwich made in our canteen.",
    price: 23,
    image: "https://www.bhg.com/thmb/H6G2G-KzMaxmin4WJRYHZU4-oaQ=/1244x0/filters:no_upscale():strip_icc()/grilled-cheese-sandwiches-RU197054-0026ddec06634f3eb9b1a3649a114e3d.jpg",
    category: "Snacks"
  },
  {
    id: 4,
    name: "French Fries",
    description: "Tasty and fresh french fries made in our canteen.",
    price: 95,
    image: "https://assets.epicurious.com/photos/591a062b0001d22594f5cae5/1:1/w_2560%2Cc_limit/triple-cooked-fries-051517.jpg",
    category: "Snacks"
  },
  {
    id: 5,
    name: "Paneer Tikka",
    description: "Tasty and fresh paneer tikka made in our canteen.",
    price: 72,
    image: "https://sharethespice.com/wp-content/uploads/2024/02/Paneer-Tikka-Featured.jpg",
    category: "Snacks"
  },
  {
    id: 6,
    name: "Masala Dosa",
    description: "Crispy dosa with flavorful potato filling.",
    price: 65,
    image: "https://sukhis.com/app/uploads/2020/01/Dosa.jpg",
    category: "Snacks"
  },
  {
    id: 7,
    name: "Idli Sambar",
    description: "Soft idlis served with delicious sambar.",
    price: 40,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYnB0e64TbPy7uYjekAeEMM_XXYNZgMPvu5w&s",
    category: "Snacks"
  },
  {
    id: 8,
    name: "Vada Pav",
    description: "Mumbai's favorite spicy potato burger.",
    price: 25,
    image: "https://vegecravings.com/wp-content/uploads/2017/02/Vada-Pav-Recipe-Step-By-Step-Instructions-3.jpg",
    category: "Snacks"
  },
  {
    id: 9,
    name: "Chole Bhature",
    description: "Spicy chickpeas with fluffy fried bread.",
    price: 80,
    image: "https://static.toiimg.com/photo/98230357.cms",
    category: "Main Course"
  },
  {
    id: 10,
    name: "Rajma Chawal",
    description: "Kidney beans curry with steamed rice.",
    price: 70,
    image: "https://veganbell.com/wp-content/uploads/2025/02/Rajma-Chawal-Recipe-Featured-Image-819x1024.jpg.webp",
    category: "Main Course"
  },
  {
    id: 11,
    name: "Butter Chicken",
    description: "Creamy tomato-based chicken curry.",
    price: 150,
    image: "https://thefoodieglobetrotter.com/wp-content/uploads/2020/05/Takeout-Kit-Indian-Butter-Chicken-Tikka-Masala-Basmati-Rice-Meal-Kit.jpg",
    category: "Main Courser"
  },
  {
    id: 12,
    name: "Paneer Butter Masala",
    description: "Cottage cheese in rich buttery gravy.",
    price: 130,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2GVSX6yMjCLHtHBaQwyqjUw1rkC1sF9H8g&s",
    category: "Main Course"
  },
  {
    id: 13,
    name: "Dal Tadka",
    description: "Tempered lentils with aromatic spices.",
    price: 60,
    image: "https://www.theskburger.com/wp-content/uploads/2022/12/1x1-restaurant-style-tadka-dal-recipe-how-to-make-dal-tadka.jpg",
    category: "Main Course"
  },
  {
    id: 14,
    name: "Vegetable Biryani",
    description: "Fragrant rice cooked with mixed vegetables.",
    price: 110,
    image: "https://sandhyahariharan.co.uk/wp-content/uploads/2015/12/vegetable-biryani-1-of-3.jpg",
    category: "Main Course"
  },
  {
    id: 15,
    name: "Chicken Biryani",
    description: "Flavorful rice dish with succulent chicken.",
    price: 140,
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",
    category: "Main Course"
  },
  {
    id: 16,
    name: "Mango Lassi",
    description: "Refreshing yogurt drink with mango.",
    price: 45,
    image: "https://shivanilovesfood.com/wp-content/uploads/2023/03/Healthy-Mango-Lassi-7.jpg",
    category: "Beverages"
  },
  {
    id: 17,
    name: "Masala Chai",
    description: "Spiced Indian tea with milk.",
    price: 20,
    image: "https://www.thespicehouse.com/cdn/shop/articles/Chai_Masala_Tea_1200x1200.jpg?v=1606936195",
    category: "Beverages"
  },
  {
    id: 18,
    name: "Cold Coffee",
    description: "Chilled coffee with milk and sugar.",
    price: 50,
    image: "https://www.milkmaid.in/sites/default/files/2024-05/Cold-Coffee-335x300.jpg",
    category: "Beverages"
  },
  {
    id: 19,
    name: "Fresh Lime Soda",
    description: "Sparkling soda with lime and mint.",
    price: 30,
    image: "https://rajasthanimisthanbhandar.com/wp-content/uploads/2024/09/1.webp",
    category: "Beverages"
  },
  {
    id: 20,
    name: "Gulab Jamun",
    description: "Sweet fried dough balls in syrup.",
    price: 35,
    image: "https://www.samosasingh.com/wp-content/uploads/2020/11/GulabJamun-1024x678.jpg",
    category: "Desserts"
  },
  {
    id: 21,
    name: "Rasmalai",
    description: "Cottage cheese patties in sweet milk.",
    price: 45,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRe_iE1P5sbsw7izWdPDzEIn-R8tK-3yRbLA&s",
    category: "Desserts"
  },
  {
    id: 22,
    name: "Vegetable Cutlet",
    description: "Crispy fried vegetable patties.",
    price: 40,
    image: "https://bonmasala.com/wp-content/uploads/2023/01/Veg-cutlet.webp",
    category: "Snacks"
  },
  {
    id: 23,
    name: "Pav Bhaji",
    description: "Spicy vegetable mash with buttered buns.",
    price: 75,
    image: "https://www.cookshideout.com/wp-content/uploads/2015/05/Instant-Pot-Pav-Bhaji_FI.jpg",
    category: "Snacks"
  },
  {
    id: 24,
    name: "Aloo Paratha",
    description: "Stuffed potato flatbread with butter.",
    price: 55,
    image: "https://www.whiskaffair.com/wp-content/uploads/2020/06/Aloo-Paratha-2-3.jpg",
    category: "Main Course"
  },
  {
    id: 25,
    name: "Poha",
    description: "Flattened rice with peanuts and spices.",
    price: 35,
    image: "https://delishbite.in/wp-content/uploads/2022/12/blog1.jpg",
    category: "Snacks"
  },
  {
    id: 26,
    name: "Upma",
    description: "Savory semolina porridge with vegetables.",
    price: 30,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO1dMVNIQGmVsN91sSz6SK22k0Hd0UpqXoZw&s",
    category: "Snacks"
  },
  {
    id: 27,
    name: "Dhokla",
    description: "Steamed savory chickpea flour cake.",
    price: 50,
    image: "https://www.cookwithmanali.com/wp-content/uploads/2023/02/Khaman-Dhokla.jpg",
    category: "Snacks"
  },
  {
    id: 28,
    name: "Kachori",
    description: "Flaky pastry stuffed with spicy lentils.",
    price: 25,
    image: "https://indianfoods.co.in/wp-content/uploads/2024/09/moong-dal-kachori-min_11zon.jpg",
    category: "Snacks"
  },
  {
    id: 29,
    name: "Jalebi",
    description: "Crispy orange-colored sweet pretzels.",
    price: 30,
    image: "https://sinfullyspicy.com/wp-content/uploads/2014/10/1200-by-1200-images-1.jpg",
    category: "Desserts"
  },
  {
    id: 30,
    name: "Rasgulla",
    description: "Spongy cottage cheese balls in syrup.",
    price: 35,
    image: "https://classicradheysweets.in/cdn/shop/products/RASGULLA.png?v=1638877825",
    category: "Desserts"
  },
  {
    id: 31,
    name: "Vegetable Fried Rice",
    description: "Stir-fried rice with mixed vegetables.",
    price: 90,
    image: "https://www.seriouseats.com/thmb/tuMCogfAOy2zNdVqE7ydUwuru9Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-vegetable-fried-rice-recipe-hero-2-fed2a62b8bce4c51b945d9c24c2edb68.jpg",
    category: "Main Course"
  },
  {
    id: 32,
    name: "Chicken Fried Rice",
    description: "Stir-fried rice with chicken pieces.",
    price: 120,
    image: "https://static01.nyt.com/images/2024/05/08/multimedia/rb-chicken-curry-fried-rice-qtvc/rb-chicken-curry-fried-rice-qtvc-mediumSquareAt3X.jpg",
    category: "Main Course"
  },
  {
    id: 33,
    name: "Egg Curry",
    description: "Boiled eggs in spicy gravy.",
    price: 85,
    image: "https://vikalinka.com/wp-content/uploads/2024/03/Egg-Curry-9-Edit.jpg",
    category: "Main Course"
  },
  {
    id: 34,
    name: "Palak Paneer",
    description: "Cottage cheese in spinach gravy.",
    price: 110,
    image: "https://ministryofcurry.com/wp-content/uploads/2017/04/Instant-Pot-Palak-Paneer-SQ.jpg",
    category: "Main Course"
  },
  {
    id: 35,
    name: "Mushroom Masala",
    description: "Mushrooms cooked in spicy gravy.",
    price: 95,
    image: "https://shwetainthekitchen.com/wp-content/uploads/2023/03/mutter-mushroom.jpg",
    category: "Main Course"
  },
  {
    id: 36,
    name: "Tandoori Roti",
    description: "Traditional Indian clay oven bread.",
    price: 15,
    image: "https://sinfullyspicy.com/wp-content/uploads/2024/05/1200-by-1200-images.jpg",
    category: "Main Course"
  },
  {
    id: 37,
    name: "Garlic Naan",
    description: "Leavened bread with garlic butter.",
    price: 25,
    image: "https://static.toiimg.com/photo/52291229.cms",
    category: "Main Course"
  },
  {
    id: 38,
    name: "Plain Dosa",
    description: "Crispy rice crepe with chutney.",
    price: 50,
    image: "https://img-global.cpcdn.com/recipes/ebd986d16b8781ab/400x400cq70/photo.jpg",
    category: "Snacks"
  },
  {
    id: 39,
    name: "Onion Uttapam",
    description: "Thick savory pancake with onions.",
    price: 60,
    image: "https://sandhyahariharan.co.uk/wp-content/uploads/2014/04/uttapam-2-of-2.jpg",
    category: "Snacks"
  },
  {
    id: 40,
    name: "Mysore Bonda",
    description: "Deep-fried savory lentil dumplings.",
    price: 35,
    image: "https://images.herzindagi.info/image/2024/Mar/mysore-street-food-items.jpg",
    category: "Snacks"
  },
  {
    id: 41,
    name: "Medu Vada",
    description: "Savory doughnut-shaped lentil fritters.",
    price: 40,
    image: "https://traditionallymodernfood.com/wp-content/uploads/2021/08/vada-recipe-ulundhu-vadai-medu-vada-5-scaled.jpeg",
    category: "Snacks"
  },
  {
    id: 42,
    name: "Chicken Tikka",
    description: "Grilled chicken chunks with spices.",
    price: 160,
    image: "https://shahzadidevje.com/wp-content/uploads/2023/02/Tandoori-Chicken-tikka-2-2.jpg",
    category: "Main Course"
  },
  {
    id: 43,
    name: "Fish Curry",
    description: "Fish cooked in coconut-based gravy.",
    price: 180,
    image: "https://www.licious.in/blog/wp-content/uploads/2022/03/shutterstock_1891229335-min-750x750.jpg",
    category: "Main Course"
  },
  {
    id: 44,
    name: "Prawn Masala",
    description: "Prawns cooked in spicy onion-tomato gravy.",
    price: 200,
    image: "https://www.funfoodfrolic.com/wp-content/uploads/2020/12/Chettinad-Prawn-Masala-Thumbnail.jpg",
    category: "Main Course"
  },
  {
    id: 45,
    name: "Mutton Rogan Josh",
    description: "Aromatic lamb curry from Kashmir.",
    price: 220,
    image: "https://www.chefkunalkapur.com/wp-content/uploads/2021/03/Mutton-Roganjosh-scaled.jpg?v=1620401698",
    category: "Main Course"
  },
  {
    id: 46,
    name: "Vegetable Spring Roll",
    description: "Crispy rolls with vegetable filling.",
    price: 65,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb_mhvxaDu7x_E0c0AqSM07zCuQ2RXTLlE4w&s",
    category: "Snacks"
  },
  {
    id: 47,
    name: "Chicken Momos",
    description: "Steamed dumplings with chicken filling.",
    price: 90,
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdo2iBRpatYx9gLgDtUrX1y_wKrPT5NOQSbcf59ngne0v-quXAb6QLIZ4fGv37OSC_RemyRijRGOSAfnLUZzR7Gh4fiiYL1WwiVvQ67BT067Yk654Z9A61atOdYwIOUta4eiJVHY0-eEM/s2000/IMG_20200908_191431_compress69.jpg",
    category: "Snacks"
  },
  {
    id: 48,
    name: "Kheer",
    description: "Traditional rice pudding with nuts.",
    price: 40,
    image: "https://www.sharmispassions.com/wp-content/uploads/2015/06/seviyan-kheer5.jpg",
    category: "Desserts"
  },
  {
    id: 49,
    name: "Falooda",
    description: "Vermicelli dessert with ice cream.",
    price: 60,
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2024/02/Rose-falooda-b92944d.jpg?quality=90&resize=556,505",
    category: "Desserts"
  },
  {
    id: 50,
    name: "Badam Milk",
    description: "Sweet almond-flavored milk drink.",
    price: 50,
    image: "https://www.indianveggiedelight.com/wp-content/uploads/2023/04/badam-milk-featured.jpg",
    category: "Beverages"
  }
];

let cart = [];

function displayMenu(items) {
  const menu = document.querySelector("#menu.grid");
  menu.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="card-body">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p class="price">₹${item.price}</p>
        <button class="btn-add-to-cart" onclick='addToCart(${JSON.stringify(item)})'>Add to Cart</button>

      </div>
    `;
    menu.appendChild(card);
  });
}

displayMenu(foodItems);

function filterMenu(category) {
  if (category === "All") {
    displayMenu(foodItems);
  } else {
    displayMenu(foodItems.filter(item => item.category === category));
  }
}

function addToCart(item) {
  const existing = cart.find(cartItem => cartItem.id === item.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  renderCart();
}

function renderCart() {
  const cartEl = document.getElementById("cart");
  cartEl.innerHTML = `<h3>Your Cart</h3>`;
  if (cart.length === 0) {
    cartEl.style.display = "none";
    return;
  }
  cartEl.style.display = "block";
  cart.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>${item.name} x ${item.quantity} = ₹${item.price * item.quantity}</p>
    `;
    cartEl.appendChild(div);
  });
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalEl = document.createElement("p");
  totalEl.innerHTML = `<strong>Total: ₹${total}</strong>`;
  cartEl.appendChild(totalEl);
  const placeBtn = document.createElement("button");
  placeBtn.textContent = "Place Order";
  placeBtn.onclick = placeOrder;
  cartEl.appendChild(placeBtn);
}

function placeOrder() {
  const order = {
    id: Date.now(),
    items: [...cart],
    total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    status: "Preparing"
  };
  const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
  existingOrders.push(order);
  localStorage.setItem("orders", JSON.stringify(existingOrders));
  cart = [];
  renderCart();
  alert("Order placed successfully!");
  showOrders();
}

function showOrders() {
  const ordersSection = document.getElementById("orders");
  const orders = JSON.parse(localStorage.getItem("orders") || "[]");
  ordersSection.innerHTML = `<h2 class='section-title'>My Orders</h2>`;
  if (orders.length === 0) {
    ordersSection.innerHTML += `<p>No orders placed yet.</p>`;
    return;
  }
  orders.forEach(order => {
    const div = document.createElement("div");
    div.className = "order-summary";
    div.innerHTML = `
      <p><strong>Order ID:</strong> ${order.id}</p>
      <ul>
        ${order.items.map(i => `<li>${i.name} x ${i.quantity}</li>`).join('')}
      </ul>
      <p><strong>Total:</strong> ₹${order.total}</p>
      <p><strong>Status:</strong> ${order.status}</p>
      <hr>
    `;
    ordersSection.appendChild(div);
  });
}

showOrders();
