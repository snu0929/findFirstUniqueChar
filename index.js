const express = require("express");
const app = express();

app.use(express.json());

app.post("/first-unique-character", (req, res) => {
  const { text_to_process } = req.body;

  const timestamp = new Date().toISOString();
  console.log(
    `[${timestamp}] Endpoint /first-unique-character called with input: ${text_to_process}`
  );

  if (!text_to_process || typeof text_to_process !== "string") {
    return res.status(400).json({
      error:
        "Invalid input. Please provide a valid string in 'text_to_process'.",
    });
  }

  const index = findFirstUniqueChar(text_to_process);
  const response = {
    first_unique_char: index !== -1 ? text_to_process[index] : null,
    first_unique_char_index: index,
    timestamp: new Date().toISOString(),
  };

  res.json(response);
});

function findFirstUniqueChar(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === undefined) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === 1) {
      return i;
    }
  }

  return -1;
}

const PORT = 8285;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
