import heroimg from "../assets/hero.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/nike-air-red.png";
import psale2 from "../assets/nike-adapt-bb.png";
import psale3 from "../assets/nike-adapt-bb-smart.png";

import Product1 from "../assets/Product1.png";
import Product2 from "../assets/Product2.png";
import Product3 from "../assets/Product3.png";
import Product4 from "../assets/Product4.png";
import Product5 from "../assets/Product5.png";
import Product6 from "../assets/Product6.png";
import Product7 from "../assets/Product7.png";
import Product8 from "../assets/Product8.png";
import Product9 from "../assets/Product9.png";
import Product10 from "../assets/Product10.png";
import Product11 from "../assets/Product11.png";
import Product12 from "../../public/Product12.png";

import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import behance from "../assets/behance.png";

const heroapi = {
  title: "Nike Jordan Dior",
  subtitle: "Limited Edition",
  img: heroimg,
  btntext: "Explore Product",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    {
      icon: linkedin,
      link: "https://www.linkedin.com/in/shriyansh-lohia-623595270/",
    },
    { icon: github, link: "https://github.com/whoshriyansh" },
    {
      icon: behance,
      link: "https://www.behance.net/whoshriyansh",
    },
  ],
};

const popularsales = {
  title: "Popular Sales",
  items: [
    {
      id: "price_1Nl03FSAiRWNMRKtbuWZbUGL",
      title: "Nike Jordan Purple 2",
      text: "Men's Classic Sneakers",
      rating: "4.9",
      btn: "Buy Now",
      img: psale2,
      price: "200",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "price_1Nl04qSAiRWNMRKtKM4XMqgc",
      title: "Nike Jordan Red 2",
      text: "MEN's Sneakers",
      rating: "4.5",
      btn: "Buy Now",
      img: psale1,
      price: "200",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "price_1Nl05iSAiRWNMRKtbXwUZxbn",
      title: "Nike Jordan White",
      text: "Men's Classic Sneakers",
      rating: "5+",
      btn: "Buy Now",
      img: psale3,
      price: "200",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "HIGHLIGHTS",
  title: "NIKE JUMPMAN TWO TREY- Black",
  text: "Like Two Trey on MJ's licence plate, let your presence be known. This new generation of Jordan celebrates Mike's time in Chicago, complete with high-quality leather uppers and Air cushioned soles. ",
  btn: "Explore More",
  url: "https://www.nike.com/in/t/jumpman-two-trey-shoes-rhmBzG",
  img: hightlightimg,
};

const sneaker = {
  heading: "FEATURED",
  title: "NIKE JUMPMAN TWO TREY- White",
  text: "Made as an homage to the on-court styles worn during his championship years, the Two Trey's midsole design references both the AJ11 and the AJ12.",
  btn: "Explore More",
  url: "https://www.nike.com/lu/en/t/jumpman-two-trey-shoes-4zwQLV",
  img: sneakershoe,
};

const toprateslaes = {
  title: "Top Rated Sales",
  items: [
    {
      id: "price_1Nl0AESAiRWNMRKtuz43YjAB",
      title: "Nike Jordan Blue",
      text: "Men's Classic Sneakers",
      rating: "5+",
      btn: "Buy Now",
      img: Product7,
      price: "150",
      color: "from-sky-900 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "price_1Nl09ISAiRWNMRKtI6chYMUD",
      title: "Nike Air Force Green",
      text: "Men's Classic Sneakers",
      rating: "5+",
      btn: "Buy Now",
      img: Product2,
      price: "150",
      color: "from-green-900 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "price_1Nl06wSAiRWNMRKtRSQnG4Z2",
      title: "Nike Jordan Red",
      text: "Men's Classic Sneakers",
      rating: "5+",
      btn: "Buy Now",
      img: Product3,
      price: "150",
      color: "from-red-900 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "price_1Nl07BSAiRWNMRKtDNrR6mzJ",
      title: "Nike Jordan off-white",
      text: "Men's Classic Sneakers",
      rating: "5+",
      btn: "Buy Now",
      img: Product4,
      price: "150",
      color: "from-orange-900 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "price_1Nl07cSAiRWNMRKt30RKg0iB",
      title: "Nike Jordan Brown",
      text: "Men's Classic Sneakers",
      rating: "5+",
      btn: "Buy Now",
      img: Product5,
      price: "150",
      color: "from-yellow-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "price_1Nl07zSAiRWNMRKtA8Fu0mJI",
      title: "Nike Jordan Blue",
      text: "Men's Classic Sneakers",
      rating: "5+",
      btn: "Buy Now",
      img: Product6,
      price: "150",
      color: "from-blue-900 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "price_1Nl08RSAiRWNMRKtFmCgw7by",
      title: "Nike Jordan Red&Yellow",
      text: "Men's Classic Sneakers",
      rating: "5+",
      btn: "Buy Now",
      img: Product1,
      price: "150",
      color: "from-yellow-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "price_1Nl08mSAiRWNMRKtIvDpdoos",
      title: "Nike Jordan OffWhite",
      text: "Men's Classic Sneakers",
      rating: "5+",
      btn: "Buy Now",
      img: Product9,
      price: "150",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "price_1Nl093SAiRWNMRKtuRMBoH27",
      title: "Nike Jordan Purple",
      text: "Men's Classic Sneakers",
      rating: "5+",
      btn: "Buy Now",
      img: Product10,
      price: "150",
      color: "from-indigo-900 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "price_1Nl06dSAiRWNMRKtuYYB1dEe",
      title: "Nike Jordan Green 2",
      text: "Men's Classic Sneakers",
      rating: "5+",
      btn: "Buy Now",
      img: Product12,
      price: "150",
      color: "from-green-900 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "price_1Nl06dSAiRWNMRKtuYYB1dEe",
      title: "Nike Jordan Black",
      text: "Men's Classic Sneakers",
      rating: "5+",
      btn: "Buy Now",
      img: Product11,
      price: "150",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "price_1Nl06FSAiRWNMRKtSpIqq1AZ",
      title: "Nike Jordan Blue 2",
      text: "Men's Classic Sneakers",
      rating: "5+",
      btn: "Buy Now",
      img: Product8,
      price: "150",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};

const story = {
  title: "Top Stories",
  news: [
    {
      title: "Coaching",
      text: "Over the past decade, yoga participation in the United States has nearly tripled. This comes as no surprise to Fabian Domenech, who found his practice when he was juggling an aspiring fashion career, a full-time service industry job, and a CrossFit coaching schedule in the fast-paced city of London. Thanks to yoga, meditation and his extensive world travels, he’s since learned the power of self-love and the importance of detachment. On this episode, the Nike yoga teacher and CrossFit coach joins host Jaclyn Byrer to get real about mental health, share the feeling of community and belonging he finds in sport, and tell us what we can expect from each of his classes.",
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_584,c_limit/69a1236a-9a98-42b9-9d2a-720215e85e87/nike-yoga-teacher-fabian-domenech-on-being-your-true-self.jpg",
      url: "https://www.nike.com/a/fabian-domenech-on-discovering-yourself-through-meditation-and-yoga",
      like: "3/5",
      time: "11 Mins",
      by: "Jared Ebanks",
      btn: "Read More",
    },
    {
      title: "Never Done Skateboarding",
      text: "Ah, twenty years of Nike SB. What started off as a big brand on the outskirts of an insular movement turned into a welcome champion or the sport, pushing the culture and footwear innovation forward like only Nike can. But the SB story is full of twists, turns, sends, and bails – all leading to where we, and skateboarding, are today. Let’s take a stroll down memory lane",
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_584,c_limit/ee2aae1c-d0a0-42c7-b06e-2e3853c90c27/never-done-skateboarding.jpg",
      time: "41 Mins",
      like: "5/5",
      url: "https://www.nike.com/a/never-done-skateboarding",
      by: "Michael Le",
      btn: "Read More",
    },
    {
      title: "The Look of Nike F.C",
      text: "Growing up playing football in Hong Kong, then rediscovering a love for the game through zine culture after moving to London, Nicole now sees sport inspiring all aspects of life—from her art, to her clothes, to the grassroots team and inclusive community she's co-founded.",
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_584,c_limit/1e189433-b5b2-4d23-8165-8b12b83ce9f0/the-look-of-nike-f-c-nicole.png",
      time: "2 Hours",
      url: "https://www.nike.com/in/a/the-look-of-nike-fc-nicole",
      like: "5/5",
      by: "Michael Le",
      btn: "Read More",
    },
    {
      title: "The Look of Nike F.C",
      text: "Football inspires my work and my style, says Maria Maleh, a multi-talented creative director and co-founder of the grassroots club Hamster F.C. I'm a huge fan of beautiful kits—their colour palettes, materials, typography and fit",
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_584,c_limit/0c3c1aa7-374e-4cde-bfa7-c576fb8f07cc/the-look-of-nike-f-c-maria.png",
      time: "7 Months",
      url: "https://www.nike.com/in/a/the-look-of-nike-fc-maria",
      like: "5/5",
      by: "Sneaker News",
      btn: "Read More",
    },
    {
      title: "Your Pregnancy Workouts",
      text: "If you're exhausted or otherwise ready to dial it back a bit, do so. Otherwise, use rate of perceived exertion (RPE), a 0-to-10 scale where 0 is lying on the sofa watching Netflix and 10 is one of the hardest workouts you've ever done. Keep the intensity to no more than a 7 or 8 out of 10, says Amanda Williams, MD, a board-certified obstetrician-gynaecologist in Oakland, California, and a member of the Nike (M)ove Like a Mother advisory board. Sound different from the old heart-rate metric you've heard about? That's because that guideline is, well, old, says Dr Williams.",
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_584,c_limit/8a9857ee-d087-4d3b-ab7a-0e607302e8dc/can-you-do-intense-workouts-during-pregnancy.jpg",
      time: "1 Months",
      url: "https://www.nike.com/in/a/prenatal-workout-intensity",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Read More",
    },
    {
      title: "Trained Podcast",
      text: "Though rarely talked about today, the Tigerbelles, Tennessee State University's women's athletics team, is one of the most accomplished sports clubs in the state's history. During the reign of legendary coach Ed Temple, the historically all-Black team produced 40 Olympic athletes who took home 23 medals—many while living in the Jim Crow South, prior to Title IX. ",
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_584,c_limit/70c26ff7-403f-4207-b76c-e5364a707e79/the-history-of-the-tigerbelles-according-to-chandra-cheeseborough.jpg",
      time: "25 Days",
      url: "https://www.nike.com/in/a/the-history-of-the-tigerbelles-according-to-chandra-cheeseborough",
      like: "3/5",
      by: "Jared Ebanks",
      btn: "Read More",
    },
    {
      title: "Changing Women's Football",
      text: "Sitting in a changing room with her teammates at their football club in São Paulo, Brazil, she spoke about the 2019 tournament, which was broadcast on national television in her country for the first time ever.",
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_593,c_limit/80f33f8b-6761-4e06-937e-2e522e425549/women-s-football-ripple-effect.jpg",
      url: "https://www.nike.com/in/a/womens-ripple-effect",
      time: "6 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More",
    },
    {
      title: "A Running Story",
      text: "His running story is more about hands than feet. The same sport, the same drive. The only difference is an extra piece of rope between hands. With every step forwards, companionship, encouragement and passion are passed from one end to the other.",
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_593,c_limit/b282f791-ab22-4dac-964a-a355a218289f/behind-some-visually-impaired-runners-are-running-pacers.jpg",
      url: "https://www.nike.com/in/a/running-story-that-starts-with-a-rope",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More",
    },
    {
      title: "Never Done Rising",
      text: "The nighttime aesthetic seen here is applied to the tumbled black leather panels of the upper and perforated mesh construction of the tongue while Royal trim and forefoot Swooshes provide additional intrigue to the darkened palette.",
      img: "https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_593,c_limit/d513ae70-189e-449b-9e1c-d285e2bce161/never-done-rising.jpg",
      url: "https://www.nike.com/in/a/never-done-rising",
      time: "5 Days",
      like: "4/5",
      by: "Micael Le",
      btn: "Read More",
    },
  ],
};

const footerAPI = {
  titles: [
    { title: "About Nike" },
    { title: "Get Help" },
    { title: "Company" },
  ],
  links: [
    [
      { link: "News" },
      { link: "Careers" },
      { link: "Investors" },
      { link: "Prupose" },
      { link: "Sustainability" },
    ],
    [
      { link: "Order Status" },
      { link: "Shipping & Delivery" },
      { link: "Contact Us" },
      { link: "FAQ" },
      { link: "Blog" },
    ],
    [
      { link: "Gift Cards" },
      { link: "Promotions" },
      { link: "Find A Store" },
      { link: "Send Us Feeback" },
    ],
  ],
};

export {
  heroapi,
  footerAPI,
  story,
  sneaker,
  highlight,
  toprateslaes,
  popularsales,
};
