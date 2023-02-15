export const Singers = {
  type: "array",
  items: {
    type: "object",
    properties: {
      _id: {
        type: "string",
        description: "The id of the singer",
        example: "63df7c861e058751374893da",
      },
      name: {
        type: "string",
        description: "The name of the figure",
        example: "Wolf",
      },
      startedEpisode: {
        type: "string",
        description: "started in episode",
        example: 1,
      },
      episodeCount: {
        type: "string",
        description: "episodes",
        example: 4,
      },
      participant: {
        type: "string",
        description: "The name of the participant",
      },
      place: {
        type: "string",
        description: "The place of the participant",
      },
      image: {
        type: "string",
        description: "image",
        example:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nieuwsblad.be%2Fcnt%2Fdmf20230113_93972818&psig=AOvVaw0Fc9wv7rEh6qf3mg8jPArh&ust=1676572839643000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJirj9eWmP0CFQAAAAAdAAAAABAE",
      },
    },
  },
};

export const Error = {
  description: "Internal Server Error",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "singer is not defined",
          },
        },
      },
    },
  },
};

export const DeleteResponse = {
  type: "object",
  properties: {
    acknowledged: {
      type: "boolean",
      description: "The status of the deletion",
      example: true,
    },
    deletedCount: {
      type: "number",
      description: "The number of deleted documents",
      example: 1,
    },
  },
};
