const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '../public/feeds');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'electronics.json');
const ITEM_COUNT = 300;

const BRANDS = ['Sony', 'Samsung', 'LG', 'Apple', 'Xiaomi', 'Asus', 'Dell', 'HP', 'Lenovo', 'Bose'];
const PRODUCTS = ['Smartphone', 'Laptop', 'Headphones', 'Monitor', 'Smartwatch', 'Tablet', 'Camera', 'Speaker', 'Keyboard', 'Mouse'];
const ADJECTIVES = ['Pro', 'Ultra', 'Max', 'Lite', 'Air', 'Mini', 'Plus', 'Elite', 'Gaming', 'Studio'];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max) {
  return (Math.random() * (max - min) + min).toFixed(1);
}

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateDescription() {
  const phrases = [
    "Experience the ultimate performance with this device.",
    "Designed for professionals who demand the best.",
    "Features a stunning display and all-day battery life.",
    "Compact and lightweight, perfect for travel.",
    "Immersive sound quality that brings your music to life.",
    "Capture every moment with crystal-clear precision.",
    "Boost your productivity with lightning-fast processing.",
    "Sleek design meets powerful functionality.",
    "Stay connected wherever you go.",
    "The perfect companion for your daily adventures."
  ];
  
  let description = "";
  while (description.length < 200) {
    description += getRandomItem(phrases) + " ";
  }
  return description.trim().substring(0, 250) + "...";
}

const items = [];

for (let i = 1; i <= ITEM_COUNT; i++) {
  const id = `el-${String(i).padStart(3, '0')}`;
  const brand = getRandomItem(BRANDS);
  const product = getRandomItem(PRODUCTS);
  const adjective = getRandomItem(ADJECTIVES);
  const name = `${brand} ${product} ${adjective} ${getRandomInt(100, 900)}`;
  
  const price = getRandomInt(50, 2000) * 10; // Prices like 500, 1200, etc.
  const oldPrice = Math.floor(price * getRandomFloat(1.1, 1.5));
  const rating = parseFloat(getRandomFloat(4.0, 5.0));
  
  // Using picsum.photos with seed for consistent random images
  const image = `https://picsum.photos/seed/${id}/400/300`;

  items.push({
    id,
    name,
    image,
    description: generateDescription(),
    rating,
    price,
    oldPrice
  });
}

if (!fs.existsSync(OUTPUT_DIR)){
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(items, null, 2));
console.log(`Successfully generated ${items.length} items in ${OUTPUT_FILE}`);
