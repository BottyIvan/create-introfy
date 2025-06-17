import { Command } from "commander";
import { runPrompts } from "./prompts.js";
const program = new Command();

program
  .name("Introfy CLI")
  .description("CLI tool for rapid project scaffolding")
  .version("1.0.0");

program.parse();

async function main() {
  await runPrompts();
}

main();
