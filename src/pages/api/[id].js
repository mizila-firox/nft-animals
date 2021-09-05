import one from "../../../public/one.png";
import two from "../../../public/two.png";
// console.log(one);
// console.log(two);

const nfts = {
  0: {
    title: "Small Unicorn",
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "Small Unicorn",
      },
      description: {
        type: "string",
        name: "Small Unicorn",
        price: 0.01,
        // description: "",
      },
      image: {
        type: "string",
        description: one,
      },
    },
  },
  1: {
    title: "Bigger Unicorn",
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "Bigger Unicorn",
      },
      description: {
        type: "string",
        name: "Bigger Unicorn",
        price: 0.01,
        // description: "",
      },
      image: {
        type: "string",
        description: two,
      },
    },
  },
};

export const api = (req, res) => {
  const { id } = req.query;

  // console.log(nfts[0]);

  console.log(nfts[id].properties.image.description.src);

  res.status(200).json(nfts[id]);
};

export default api;
