const nfts = {
  0: {
    title: "Swiss Village Lake",
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "Identifies the asset to which this NFT represents",
      },
      description: {
        type: "string",
        description: "A Swiss village",
      },
      image: {
        type: "string",
        description:
          "https://live.staticflickr.com/4086/5221038493_a9b268c417_c.jpg",
      },
    },
  },
  1: {
    title: "Swiss Landscape",
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "Identifies the asset to which this NFT represents",
      },
      description: {
        type: "string",
        description: "Describes the asset to which this NFT represents",
      },
      image: {
        type: "string",
        description:
          "https://engineerontour.com/wp-content/uploads/2020/02/village-3334823.jpg",
        // "A URI pointing to a resource with mime type image/* representing the asset to which this NFT represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive.",
      },
    },
  },
};

export const api = (req, res) => {
  const { id } = req.query;

  res.status(200).json({ id });
};

export default api;
