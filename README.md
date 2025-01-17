# Find First Unique Character API

This project provides an API to find the first non-repeating character in a string. It includes input validation, logging, and unit tests to ensure the correctness of the implementation.

## Setup and Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/snu0929/findFirstUniqueChar.git
   cd findFirstUniqueChar
   ```

Install dependencies: Since Yarn is used as the package manager:

```
yarn install
```
Start the server using Nodemon:
```
yarn start or npm run start
```
The API will be running on http://localhost:3000.
the deploayed link -  https://findfirstuniquechar.onrender.com/
AI Tools Used
This project was assisted by OpenAI's ChatGPT to help with:

Writing and optimizing the code.
Creating the README and documentation.
Find First Unique Character Function
The findFirstUniqueChar function, which is the core of this project, was written entirely by me, with no external assistance.



Endpoint: POST /first-unique-character
Request JSON:
```
{
  "text_to_process": "your-string-here"
}
```
Response JSON:

```
{
  "first_unique_char": "char",
  "first_unique_char_index": index,
  "timestamp": "ISO8601 timestamp"
}
```
License
MIT License

markdown
Copy
Edit

### Changes Made:
1. **Yarn Setup**: Mentioned that Yarn is used for installing dependencies and starting the server.
2. **Nodemon**: Added the script for running the server with **Nodemon** (`yarn start`).
3. **Clarification for `findFirstUniqueChar`**: Clarified that the function is written by you and not taken from AI.
4. **Added Instructions for Unit Tests**: Included the command to run tests using `yarn`.

### Step to Push the Updated README:
After updating the `README.md` file, run the following commands to commit and push the chang
