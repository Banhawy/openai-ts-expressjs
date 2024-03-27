# TypScript X Express x Openai

This is a basic TypeScript Express application that utilizes Node.js for server-side functionality and integrates with Openai. It is configured with Nodemon for automatic server restarts during development and uses ts-node for TypeScript execution.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)
- [Openai API Key](https://platform.openai.com/docs/guides/authentication)

## Installation

1. Clone the repository to your local machine:

```sh
git clone https://github.com/c99rahul/ts-node-express.git
```

2. Navigate to the project directory:

```sh
cd openai-ts-expressjs
```

3. Install the project dependencies:

```sh
pnpm install
```

4. Create a `.env` file in the root of the project and add your Openai API key:

```sh
OPENAI_API_KEY=your-api-key-here
```

## Usage

To start the server in development, run the following command:

```sh
pnpm dev
```

The server will be available at `http://localhost:4000`.

Project structure:

```sh
.
├── src
│   ├── controllers
│   │   └── chat.ts
│   ├── routes
│   │   └── index.ts
│   └── index.ts 
├── .env
├── .gitignore
├── config.json
├── package.json
├── pnpm-lock.yaml
├── README.md
└── tsconfig.json
```

## License

This project is open source and available under the [MIT License](LICENSE).

