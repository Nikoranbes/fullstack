import express from "express";

const app = express();

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why don't scientists trust atoms?",
      punchline: "Because they make up everything!",
    },
    {
      id: 2,
      joke: "Why did the math book look sad?",
      punchline: "Because it had too many problems.",
    },
    {
      id: 3,
      joke: "Why don't skeletons fight each other?",
      punchline: "They don't have the guts.",
    },
    {
      id: 4,
      joke: "What do you call fake spaghetti?",
      punchline: "An impasta!",
    },
    {
      id: 5,
      joke: "Why did the scarecrow win an award?",
      punchline: "Because he was outstanding in his field!",
    },
  ];
  res.json(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is runnig at http://localhost:${port}`);
});
