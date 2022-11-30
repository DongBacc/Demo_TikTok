import { Heart, Letters } from "../Context/context";
const Reducer = (state, action) => {
  switch (action) {
    case Heart:
      return {
        ...state,
        facolor: "red",
        soncolor: "pink"
      };
    case Letters:
      return {
        ...state,
        facolor: "black",
        soncolor: "white"
      };
    default:
      new Error("invalid action");
  }
};

export { Reducer };
