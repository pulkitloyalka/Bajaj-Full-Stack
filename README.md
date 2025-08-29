# Array Processor API

This project is a REST API built with Node.js and Express that processes an input array and returns various categorized data, including even and odd numbers, alphabets, special characters, and more.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/array-processor-api.git
   ```
2. Navigate to the project directory:
   ```
   cd array-processor-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the server, run:
```
npm start
```
The server will be running on `http://localhost:3000`.

## API Endpoints

### POST /bfhl

This endpoint processes an input array and returns categorized data.

#### Request Body

```json
{
  "array": [1, 2, "a", "b", "!", 3, 4, 5, "c", "@", 6]
}
```

#### Response

```json
{
  "evenNumbers": [2, 4, 6],
  "oddNumbers": [1, 3, 5],
  "alphabets": ["a", "b", "c"],
  "specialCharacters": ["!","@"],
  "sum": 21,
  "concatenatedString": "abc"
}
```

## Examples

### Example Request

```bash
curl -X POST http://localhost:3000/bfhl -H "Content-Type: application/json" -d '{"array": [1, 2, "a", "b", "!", 3, 4, 5, "c", "@", 6]}'
```

### Example Response

```json
{
  "evenNumbers": [2, 4, 6],
  "oddNumbers": [1, 3, 5],
  "alphabets": ["a", "b", "c"],
  "specialCharacters": ["!","@"],
  "sum": 21,
  "concatenatedString": "abc"
}
```

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.