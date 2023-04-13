import heroimg from "../assets/hero.webp";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip1 from "../assets/video/clip-01.MP4";
import clip2 from "../assets/video/clip-02.MP4";
import clip3 from "../assets/video/clip-03.MP4";
import vcover1 from "../assets/video/vcover-1.png";
import vcover2 from "../assets/video/vcover-2.png";
import vcover3 from "../assets/video/vcover-3.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product-09.png";
import product2 from "../assets/product-01.png";
import product3 from "../assets/product-03.png";
import product4 from "../assets/product-08.png";
import product5 from "../assets/product-05.png";
import product6 from "../assets/product-17.png";
import product7 from "../assets/product-07.png";
import product8 from "../assets/product-10.png";
import product9 from "../assets/product-02.png";
import product10 from "../assets/product-14.png";
import product11 from "../assets/product-13.png";
import product12 from "../assets/product-06.png";


import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const heroapi = {
  title: "Shop the world’s best selection of",
  subtitle: "headphones and home audio",
  img: heroimg,
  btntext: "Explore Product",
  videos: [
    { imgsrc: vcover1, clip: clip1 },
    { imgsrc: vcover2, clip: clip2 },
    { imgsrc: vcover3, clip: clip3 },
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "Popular Sales",
  items: [
    {
      id: "0p0x1",
      title: "AudioBlaze Prodigy",
      text: "Unleash Your Sound",
      rating: "4.9",
      btn: "Buy Now",
      img: psale2,
      price: "110",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "BassBlast Elite",
      text: "Feel the Bass",
      rating: "4.5",
      btn: "Buy Now",
      img: psale1,
      price: "85",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "ClearVibe Ultra",
      text: "Crystal Clear Audio",
      rating: "5+",
      btn: "Buy Now",
      img: psale3,
      price: "99",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "SMARTWATCH",
  title: "STAY CONNECTED WITH SMARTWATCH COLLECTION",
  text: "Upgrade your lifestyle with our smartwatches. Stay connected, track your fitness, and look great with our selection of stylish and functional devices. Shop now!",
  btn: "Explore More",
  img: hightlightimg,
};

const sneaker = {
  heading: "FEATURED",
  title: "Fitness and activity tracking",
  text: "Track your fitness goals anytime, anywhere, Stay on top of your health with our activity tracking smartwatches, GPS functionality for outdoor activities. Shop now!",
  btn: "Explore More",
  // url: "https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/",
  img: sneakershoe
};

const toprateslaes = {
  title: "Top Rated Sales",
  items: [
    {
      id: "0M0x1",
      title: "PulseWave Prodigy",
      text: "Pump Up the Beat",
      rating: "5+",
      btn: "Buy Now",
      img: product7,
      price: "119",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "SonicSurge Elite",
      text: "Elevate Your Audio",
      rating: "5+",
      btn: "Buy Now",
      img: product2,
      price: "119",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "SoundStream Prime",
      text: "Immersive Sound Experience",
      rating: "5+",
      btn: "Buy Now",
      img: product3,
      price: "119",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "BassBoost Beyond",
      text: "Powerful Bass Performance",
      rating: "5+",
      btn: "Buy Now",
      img: product4,
      price: "119",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "AcousticFlow Prodigy",
      text: "Uninterrupted Sound Flow",
      rating: "5+",
      btn: "Buy Now",
      img: product5,
      price: "119",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "UltraSonic Beyond",
      text: "Extreme Audio Clarity",
      rating: "5+",
      btn: "Buy Now",
      img: product6,
      price: "119",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "PureTone Elite",
      text: "Pure Audio Perfection",
      rating: "5+",
      btn: "Buy Now",
      img: product1,
      price: "119",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "ProAudio Ultra",
      text: "Professional Audio Quality",
      rating: "5+",
      btn: "Buy Now",
      img: product9,
      price: "119",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "StudioEcho Prodigy",
      text: "Studio-Quality Sound",
      rating: "5+",
      btn: "Buy Now",
      img: product10,
      price: "119",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "EliteSound Prime",
      text: "Unrivaled Audio Excellence",
      rating: "5+",
      btn: "Buy Now",
      img: product12,
      price: "119",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "ProNoise Ultra",
      text: "Noise-Free Audio Performance",
      rating: "5+",
      btn: "Buy Now",
      img: product11,
      price: "119",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "Hi-ResAudio Beyond",
      text: "High-Resolution Audio Experience",
      rating: "5+",
      btn: "Buy Now",
      img: product8,
      price: "119",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};


const story = {
  title: "Top Stories",
  news: [
    {
      title: "Jayson Tatum Debuts",
      text: "Jordan Brands signature model for the past few years, Jayson Tatum will be dawning the Air Jordan 37 this season before attaining potentially his first signature sneaker with Jumpman, which he rumored to be in the works recently via his Twitter.",
      img: "https://cdn.shopify.com/s/files/1/0065/4432/6771/products/HeartLand_360x.png?v=1678903772",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Bro’s Nike Zoom Freak 4",
      text: "Arriving right time for the Fall, this upcoming take on the Zoom Freak 4 seemingly draws inspiration from Thanksgiving. Orange and brown, two staples of the holiday, are used throughout the upper, dressing the parts not bathed in shades of grey.",
      img: "https://cdn.shopify.com/s/files/1/0065/4432/6771/products/ath-m50xds_01_1_360x.jpg",
      time: "41 Mins",
      like: "5/5",
      by: "Michael Le",
      btn: "Read More"
    },
    {
      title: "Nike Air Max Plus",
      text: "The Nike Air Max Plus has enjoyed the reveal of several colorways these last few of months. And as we officially embark on the Fall season, an additional set have been added to the calendar, including this newly-revealed grey and orange colorway.",
      img: "https://cdn.shopify.com/s/files/1/0065/4432/6771/products/IMG_7498_03x_d8fd9f0f-1c03-4f8f-9a23-fc60b90a1cf5_360x.jpg",
      time: "2 Hours",
      like: "5/5",
      by: "Michael Le",
      btn: "Read More"
    },
    {
      title: "Air Jordan Retro High OG",
      text: "Air Jordan Retro High OG popular series of AJ1s with the popular color-blocking with the original Yellow Toe flavor. The colorway was revealed back PE by musician Zach Myers, nearly four years later, Jordan fanatics will finally get their shot a GR release.",
      img: "https://cdn.shopify.com/s/files/1/0065/4432/6771/products/fokus-mystique-front-wht_1800x1800_7350aed0-dfd6-4053-b11e-de588b0a8c45_360x.png",
      time: "7 Months",
      like: "5/5",
      by: "Sneaker News",
      btn: "Read More"
    },
    {
      title: "Nike Air Zoom GT Cut 2",
      text: "The Bred coloryway of Zoom GT Cut 2 will be first to release this Friday, For Nike Members Nation World Wide while Sabrina Ionescus colorway is set for an October 13th release date. In the meantime, enjoy official images of both colorways below.",
      img: "https://cdn.shopify.com/s/files/1/0065/4432/6771/products/assets_Asset_Hierarchy_Consumer_Assets_Accessories_Headphones_Earbuds_2022_WH-1000XM5_Product_Images_Black_eComm_7_WH-1000XM5_swivel_black_740x.jpg",
      time: "1 Months",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Puma Announces Breanna",
      text: "For the first time in over a decade, a signature basketball silhouette is being made for one of the WNBA’s best and brightest stars, Olympic Gold Medalist and Seattle Storm superstar Breanna Stewart. Puma Stewie 1 Quiet Fire will be available this Friday.",
      img: "https://cdn.shopify.com/s/files/1/0065/4432/6771/products/mtw_3_black_earbuds_front_1_final_200x.jpg",
      time: "25 Days",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Read More"
    },
    {
      title: "Nike Air Force Orange Color",
      text: "From lace toggles to city-inspired makeovers, the Nike Air Force 1 has delivered a number of unique modifications. Here though, the brand is taking things down quite a few notches, opting for a simple colorway helmed primarily by black and Laser Orange.",
      img: "https://cdn.shopify.com/s/files/1/0065/4432/6771/products/GO-blu-08_200x.jpg",
      time: "6 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
    {
      title: "Hello Kitty and Adidas",
      text: "The world of Sanrio is vast and replete with many an iconic character. Few among the family, though, rival the immense influence of Hello Kitty, who’s played mascot for everything from Pringles merchandise to sneaker collaborations.",
      img: "https://cdn.shopify.com/s/files/1/0065/4432/6771/products/LCD-X_1_200x.jpg",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
    {
      title: "Air Force 1 Low Expands",
      text: "The nighttime aesthetic seen here is applied to the tumbled black leather panels of the upper and perforated mesh construction of the tongue while Royal trim and forefoot Swooshes provide additional intrigue to the darkened palette.",
      img: "https://cdn.shopify.com/s/files/1/0065/4432/6771/products/NODE_BLK_Top_3-4_360x.jpg",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More"
    },
  ],
};


const footerAPI = {
  titles: [ {title: "About Nike"},{title: "Get Help"},{title: "Company"} ],
  links: [
    [
      {link: "News"},
      {link: "Careers"},
      {link: "Investors"},
      {link: "Prupose"},
      {link: "Sustainability"},
    ],
    [
      {link: "Order Status"},
      {link: "Shipping & Delivery"},
      {link: "Payment Options"},
      {link: "Gift Card Balance"},
      {link: "Contact Us"},
      {link: "FAQ"},
      {link: "Blog"},
    ],
    [
      {link: "Gift Cards"},
      {link: "Promotions"},
      {link: "Find A Store"},
      {link: "Signup"},
      {link: "Nike Jouneral"},
      {link: "Send Us Feeback"},
    ],
  ]
};


export { heroapi, footerAPI, story, sneaker, highlight, toprateslaes, popularsales };