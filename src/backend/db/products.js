import { v4 as uuid } from "uuid";
import {
  TeesTwo,
  TeesFive,
  TeesSix,
  TeesSeven,
  TeesEight,
  TeesNine,
  TeesTen,
  PoloTshirtOne,
  PoloTshirtTwo,
  IplTshirtOne,
  IplTshirtTwo,
  IplTshirtThree,
  IplTshirtFour,
  HoodieOne,
  HoodieTwo,
  HoodieThree,
  HoodieFour,
  StickerTwo,
  StickerThree,
  StickerFour,
  StickerFive,
} from "../../assets/index";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

let ratingList = [1, 2, 3, 4, 5];
export const products = [
  {
    _id: uuid(),
    title: "Don’t Drink and Root Unisex T-Shirt",
    price: 1000,
    discountPrecentage:50,
    categoryName: "tees",
    subCategoryName: "tees",
    img: TeesTen,
    itemDisc: `Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.Fits just right, not too tight, not too loose.`,
    altImage: `tees image`,
    rating: ratingList[parseInt(Math.random() * 5)],
    oos: false,
    isWhislisted: true,
  },
  {
    _id: uuid(),
    title: `Don’t Grow up its a Trap T-Shirt`,
    price: 800,
    discountPrecentage:50,
    categoryName: "tees",
    subCategoryName: "tees",
    img: TeesTwo,
    itemDisc: `Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.Fits just right, not too tight, not too loose.`,
    altImage: "item image",
    rating: ratingList[parseInt(Math.random() * 5)],
    oos: false,
    isWhislisted: false,
  },
  {
    _id: uuid(),
    title: `Music Makes Me Happy Half Sleeve T-Shirt`,
    price: 1000,
    discountPrecentage:50,
    categoryName: "tees",
    subCategoryName: "tees",
    img: TeesFive,
    itemDisc: `Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.Fits just right, not too tight, not too loose.`,
    altImage: "item image",
    rating: ratingList[parseInt(Math.random() * 5)],
    oos: false,
    isWhislisted: false,
  },
  {
    _id: uuid(),
    title: `Hey girl, You are the CSS to my HTML T-Shirt`,
    price: 1400,
    discountPrecentage:50,
    categoryName: "tees",
    subCategoryName: "tees",
    img: TeesSix,
    itemDisc: `Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.Fits just right, not too tight, not too loose.`,
    altImage: "item image",
    rating: ratingList[parseInt(Math.random() * 5)],
    oos: false,
    isWhislisted: false,
  },
  {
    _id: uuid(),
    title: `Don’t Quit! T-Shirt`,
    price: 1000,
    discountPrecentage:50,
    categoryName: "tees",
    subCategoryName: "tees",
    img: TeesSeven,
    itemDisc: `Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.Fits just right, not too tight, not too loose.`,
    altImage: "item image",
    rating: ratingList[parseInt(Math.random() * 5)],
    oos: false,
    isWhislisted: false,
  },
  {
    _id: uuid(),
    title: `Batman T-shirt`,
    price: 1000,
    discountPrecentage:50,
    categoryName: "tees",
    subCategoryName: "tees",
    img: TeesEight,
    itemDisc: `Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.Fits just right, not too tight, not too loose.`,
    altImage: "item image",
    rating: ratingList[parseInt(Math.random() * 5)],
    oos: false,
    isWhislisted: true,
  },
  {
    _id: uuid(),
    title: `Stay Weird T-shirt`,
    price: 500,
    discountPrecentage:50,
    categoryName: "tees",
    subCategoryName: "tees",
    img: TeesNine,
    itemDisc: `Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.Fits just right, not too tight, not too loose.`,
    altImage: "item image",
    rating: ratingList[parseInt(Math.random() * 5)],
    oos: false,
    isWhislisted: false,
  },
  {
    _id: uuid(),
    title: `VS Code Polo T-Shirt`,
    price: 1200,
    discountPrecentage:50,
    categoryName: "tees",
    subCategoryName: "polo tees",
    img: PoloTshirtOne,
    itemDisc: `Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.Fits just right, not too tight, not too loose.`,
    altImage: "item image",
    rating: ratingList[parseInt(Math.random() * 5)],
    oos: false,
    isWhislisted: false,
  },
  {
    _id: uuid(),
    title: `React Polo T-Shirt`,
    price: 1300,
    discountPrecentage:50,
    categoryName: "tees",
    subCategoryName: "polo tees",
    img: PoloTshirtTwo,
    itemDisc: `Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.Fits just right, not too tight, not too loose.`,
    altImage: "item image",
    rating: ratingList[parseInt(Math.random() * 5)],
    oos: false,
    isWhislisted: false,
  },
  {
    _id: uuid(),
    title: `Dhoni 7 Tribute Half Sleeve T-Shirt`,
    price: 900,
    discountPrecentage:50,
    categoryName: "tees",
    subCategoryName: "ipl tees",
    img: IplTshirtOne,
    itemDisc: `Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.Fits just right, not too tight, not too loose.`,
    altImage: "item image",
    rating: ratingList[parseInt(Math.random() * 5)],
    oos: false,
    isWhislisted: true,
  },
  {
    _id: uuid(),
    title: `Hitman Rohit Half Sleeve T-Shirt`,
    price: 600,
    discountPrecentage:50,
    categoryName: "tees",
    subCategoryName: "ipl tees",
    img: IplTshirtTwo,
    itemDisc: `Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.Fits just right, not too tight, not too loose.`,
    altImage: "item image",
    rating: ratingList[parseInt(Math.random() * 5)],
    oos: false,
    isWhislisted: false,
  },
  {
    _id: uuid(),
    title: `Virat Kohli GOAT Half Sleeve T-Shirt`,
    price: 600,
    discountPrecentage:50,
    categoryName: "tees",
    subCategoryName: "ipl tees",
    img: IplTshirtThree,
    itemDisc: `Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.Fits just right, not too tight, not too loose.`,
    altImage: "item image",
    rating: ratingList[parseInt(Math.random() * 5)],
    oos: false,
    isWhislisted: false,
  },
  {
    _id: uuid(),
    title: `Run Machine Half Sleeve T-Shirt`,
    price: 700,
    discountPrecentage:50,
    categoryName: "tees",
    subCategoryName: "ipl tees",
    img: IplTshirtFour,
    itemDisc: `Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.Fits just right, not too tight, not too loose.`,
    altImage: "item image",
    rating: ratingList[parseInt(Math.random() * 5)],
    oos: false,
    isWhislisted: false,
  },

  //! Hoodies here
  {
    _id: uuid(),
    title: `Hakuna Matata Hoodie`,
    price: 1400,
    discountPrecentage:50,
    categoryName: "hoodies",
    subCategoryName: "hoodies",
    img: HoodieOne,
    itemDisc: `Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.Fits just right, not too tight, not too loose.`,
    altImage: "item image",
    rating: ratingList[parseInt(Math.random() * 5)],
    oos: false,
    isWhislisted: false,
  },
  {
    _id: uuid(),
    title: `Linux May Be Source Be With You Hoodie`,
    price: 1800,
    discountPrecentage:50,
    categoryName: "hoodies",
    subCategoryName: "hoodies",
    img: HoodieTwo,
    itemDisc: `Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.Fits just right, not too tight, not too loose.`,
    altImage: "item image",
    rating: ratingList[parseInt(Math.random() * 5)],
    oos: false,
    isWhislisted: false,
  },
  {
    _id: uuid(),
    title: `Martin Garrix Hoodie`,
    price: 1600,
    discountPrecentage:50,
    categoryName: "hoodies",
    subCategoryName: "hoodies",
    img: HoodieThree,
    itemDisc: `Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.Fits just right, not too tight, not too loose.`,
    altImage: "item image",
    rating: ratingList[parseInt(Math.random() * 5)],
    oos: false,
    isWhislisted: false,
  },
  {
    _id: uuid(),
    title: `Things I Hate Hoodie`,
    price: 2000,
    discountPrecentage:50,
    categoryName: "hoodies",
    subCategoryName: "hoodies",
    img: HoodieFour,
    itemDisc: `Classic, lightweight jersey fabric comprising 100% cotton with ribbed knit crew neck.Fits just right, not too tight, not too loose.`,
    altImage: "item image",
    rating: ratingList[parseInt(Math.random() * 5)],
    oos: false,
    isWhislisted: false,
  },

  //! Stickers here
  {
    _id: uuid(),
    title: `It works on my machine sticker`,
    price: 100,
    discountPrecentage:50,
    categoryName: "stickers",
    subCategoryName: "stickers",
    img: StickerTwo,
    itemDisc: `Laptop Stickers Enable You And Your Device A Unique Look Which Are Cool, Trendy & Personalized, These stickers are Easy To Install & Remove Without Leaving Any Gum Or Residue. `,
    altImage: "item image",
    rating: ratingList[parseInt(Math.random() * 5)],
    oos: false,
    isWhislisted: false,
  },
  {
    _id: uuid(),
    title: `React sticker`,
    price: 200,
    discountPrecentage:50,
    categoryName: "stickers",
    subCategoryName: "stickers",
    img: StickerThree,
    itemDisc: `Laptop Stickers Enable You And Your Device A Unique Look Which Are Cool, Trendy & Personalized, These stickers are Easy To Install & Remove Without Leaving Any Gum Or Residue. `,
    altImage: "item image",
    rating: ratingList[parseInt(Math.random() * 5)],
    oos: false,
    isWhislisted: false,
  },
  {
    _id: uuid(),
    title: `Linux sticker`,
    price: 120,
    discountPrecentage:50,
    categoryName: "stickers",
    subCategoryName: "stickers",
    img: StickerFour,
    itemDisc: `Laptop Stickers Enable You And Your Device A Unique Look Which Are Cool, Trendy & Personalized, These stickers are Easy To Install & Remove Without Leaving Any Gum Or Residue. `,
    altImage: "item image",
    rating: ratingList[parseInt(Math.random() * 5)],
    oos: false,
    isWhislisted: true,
  },
  {
    _id: uuid(),
    title: `Automate and Chill sticker`,
    price: 100,
    discountPrecentage:50,
    categoryName: "stickers",
    subCategoryName: "stickers",
    img: StickerFive,
    itemDisc: `Laptop Stickers Enable You And Your Device A Unique Look Which Are Cool, Trendy & Personalized, These stickers are Easy To Install & Remove Without Leaving Any Gum Or Residue. `,
    altImage: "item image",
    rating: ratingList[parseInt(Math.random() * 5)],
    oos: false,
    isWhislisted: false,
  },
];
