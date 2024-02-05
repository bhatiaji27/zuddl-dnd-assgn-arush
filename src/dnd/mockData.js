import { colors } from "@atlaskit/theme";
import sanviImg from "./static/sanvi.jpeg";
import amanImg from "./static/aman.jpeg";
import jivikaImg from "./static/jivika.png";
import arushImg from "./static/arush.jpeg";

const arush = {
  id: "1",
  name: "Arush",
  avatarUrl: arushImg,
  colors: {
    soft: colors.Y50,
    hard: colors.N400A
  }
};

const aman = {
  id: "2",
  name: "aman",
  avatarUrl: amanImg,
  colors: {
    soft: colors.G50,
    hard: colors.N400A
  }
};

const sanvi = {
  id: "3",
  name: "sanvi",
  avatarUrl: sanviImg,
  colors: {
    soft: colors.B50,
    hard: colors.N400A
  }
};

const jivika = {
  id: "4",
  name: "jivika",
  avatarUrl: jivikaImg,
  colors: {
    soft: colors.P50,
    hard: colors.N400A
  }
};

export const authors = [arush, aman, sanvi, jivika];

const tabs = ['Resources', 'Assigned', 'In progress', 'Completed'];

export const quotes = [
  {
    id: "1",
    content: "Sometimes life is scary and dark",
    author: aman,
  },
  {
    id: "2",
    content:
      "Sucking at something is the first step towards being sorta good at something.",
    author: arush
  },
  {
    id: "3",
    content: "You got to focus on what's real, man",
    author: arush
  },
  {
    id: "4",
    content: "Is that where creativity comes from? From sad biz?",
    author: sanvi
  },
  {
    id: "5",
    content: "Homies help homies. Always",
    author: sanvi
  },
  {
    id: "6",
    content: "Responsibility demands sacrifice",
    author: jivika
  },
  {
    id: "7",
    content: "That's it! The answer was so simple, I was too smart to see it!",
    author: jivika
  },
  {
    id: "8",
    content:
      "People make mistakes. It's all a part of growing up and you never really stop growing",
    author: sanvi
  },
  {
    id: "9",
    content: "Don't you always call sweatpants 'give up on life pants,' arush?",
    author: sanvi
  },
  {
    id: "10",
    content: "I should not have drunk that much tea!",
    author: jivika
  },
  {
    id: "11",
    content: "Please! I need the real you!",
    author: jivika
  },
  {
    id: "12",
    content: "Haven't slept for a solid 83 hours, but, yeah, I'm good.",
    author: jivika
  }
];

// So we do not have any clashes with our hardcoded ones
let idCount = quotes.length + 1;

export const getQuotes = (count) =>
  Array.from({ length: count }, (v, k) => k).map(() => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];

    const custom = {
      ...random,
      id: `G${idCount++}`
    };

    return custom;
  });

// export const getAuthors = (count) =>
//   Array.from({ length: count }, (v, k) => k).map(() => {
//     const random = tabs[Math.floor(Math.random() * authors.length)];

//     const custom = {
//       ...random,
//       id: `author-${idCount++}`
//     };

//     console.log('a', custom)

//     return custom;
//   });

const getByAuthor = (author, items) =>
  items.filter((quote) => quote.author === author);

export const authorQuoteMap = authors.reduce(
  (previous, author) => ({
    ...previous,
    [author.name]: getByAuthor(author, quotes)
  }),
  {}
);

export const generateQuoteMap = (quoteCount) =>
  tabs.reduce(
    (previous, tab) => ({
      ...previous,
      [tab]: getQuotes(quoteCount / authors.length)
    }),
    {}
);
