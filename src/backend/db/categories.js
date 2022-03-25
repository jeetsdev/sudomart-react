import { v4 as uuid } from "uuid";
import {
  TeesFour,
  HoodieOne,
  StickerOne,
} from "../../assets/index";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Tees",
    description:"",
    image: {TeesFour}
  },
  {
    _id: uuid(),
    categoryName: "Hoodies",
    description:"",
    image:{HoodieOne}
  },
  {
    _id: uuid(),
    categoryName: "Stickers",
    description: "",
    image:{StickerOne}
  },
];
