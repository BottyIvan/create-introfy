# create-introfy

> [!CAUTION]
> Some features of Introfy are still under development and may not be fully functional. Stay tuned for updates!

**create-introfy** is a CLI tool for rapid scaffolding of projects based on the [Introfy](https://github.com/BottyIvan/introfy) template.

## Features

- Clones the Introfy template from GitHub
- Interactive prompts for name, description, repo, and configuration
- Automatically installs dependencies
- Updates project configuration

## Installation

```bash
npm install -g create-introfy
```

## Usage

```bash
create-introfy
```

Follow the prompts to configure your new project.

## Local Development

1. Clone this repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the CLI in development mode:

   ```bash
   npm run dev
   ```

## Project Structure

- `src/cli/` — CLI entrypoint and user prompts
- `src/core/` — Scaffolding and configuration functions
- `src/utils/` — Utilities (git, install, prompt)

## Requirements

- Node.js >= 18

## License

MIT
