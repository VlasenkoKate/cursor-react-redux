const avatar1 =
  "https://pbs.twimg.com/profile_images/1393259395967078408/qbrUinsS_400x400.jpg";
const postpicture1 =
  "https://pbs.twimg.com/media/EsS7_nxVEAEBiL_?format=jpg&name=900x900";

const avatar2 =
  "https://pbs.twimg.com/profile_images/1299844050208555008/7wMQaJRA_400x400.jpg";
const postpicture2 =
  "https://pbs.twimg.com/media/Du6Iv_hW0AAdyFY?format=jpg&name=medium";

const avatar3 =
  "https://pbs.twimg.com/profile_images/1416443682157473795/dGtFbtht_400x400.jpg";
const postpicture3 =
  "https://pbs.twimg.com/media/DfRizWnU8AA7g7n?format=jpg&name=medium";

const initialState = {
  posts: [
    {
      id: 1,
      authorName: "Mark Hamill",
      avatar: avatar1,
      nickname: "@HamillHimsel",
      postText: "Do you have a favorite starwars/BernieSanders meme?",
      date: "Jan, 22",
      likes: 39,
      postpicture: postpicture1,
      shares: 1123,
      comments: 12,
    },
    {
      id: 2,
      authorName: "Ryan Reynolds",
      avatar: avatar2,
      nickname: "@VancityReynolds",
      postText: "These assholes told me it was a sweater party.",
      date: "Dec 21",
      likes: 100,
      postpicture: postpicture2,
      shares: 1917,
      comments: 789,
    },
    {
      id: 3,
      authorName: "Elon Musk",
      avatar: avatar3,
      nickname: "@elonmusk",
      postText:
        "Nothing makes your baby more zen than a few gentle puffs of a TBC Flamethrower",
      date: "Jun 9",
      likes: 280,
      postpicture: postpicture3,
      shares: 24,
      comments: 519,
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "add-new-post": {
      return {
        ...state,
        posts: [
          {
            id: state.posts.length + 1,
            authorName: action.payload.authorName,
            avatar: action.payload.avatar,
            nickname: action.payload.nickname,
            postText: action.payload.postText,
            date: new Date().toString().slice(4, 10),
            likes: 1,
            postpicture: action.payload.postpicture,
            shares: 1,
            comments: 1,
          },
          ...state.posts,
        ],
      };
    }
    default: {
      return state;
    }
  }
}
