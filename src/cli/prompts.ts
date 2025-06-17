import { intro, outro } from "@clack/prompts";
import { scaffoldProject } from "../core/scaffold.js";
import { promptText } from "../utils/prompts.js";
import { getGitHubUsername } from "../utils/git.js";
import { installDependencies } from "../utils/install.js";
import { updateConfig } from "../core/config.js";
import chalk from "chalk";

const localGitHubUsername = await getGitHubUsername();

/**
 * Runs the CLI prompts to gather user input for project setup.
 * This function will prompt the user for various details about the project,
 * scaffold the project structure, install dependencies, and update the configuration.
 */
export async function runPrompts() {
  intro(`${chalk.blue("📦 Introfy CLI")}`);

  const projectName = await promptText({
    message: "Project name?",
    placeholder: "my-app",
    defaultValue: "my-app",
    validate: (value: string) =>
      !value || value.trim() === ""
        ? "Project name cannot be empty"
        : undefined,
  });

  const projectDescription = await promptText({
    message: "Project description:",
    placeholder: "An interesting new project",
    defaultValue: "An interesting new project",
    validate: (value: string) =>
      !value || value.trim() === "" ? "Description cannot be empty" : undefined,
  });

  const githubUsername = await promptText({
    message: "GitHub username:",
    placeholder: localGitHubUsername || "your-github-username",
    defaultValue: localGitHubUsername || "your-github-username",
    validate: (value: string) =>
      !value || value.trim() === "" ? "Username cannot be empty" : undefined,
  });

  const githubRepo = await promptText({
    message: "GitHub repository name:",
    placeholder: projectName,
    defaultValue: projectName,
    validate: (value: string) =>
      !value || value.trim() === ""
        ? "Repository name cannot be empty"
        : undefined,
  });

  const recentDaysStr = await promptText({
    message: "How many days for recent releases?",
    placeholder: "7",
    defaultValue: "7",
    validate: (value: string) =>
      isNaN(Number(value)) || Number(value) < 1
        ? "Enter a valid number"
        : undefined,
  });

  const recentDays = Number(recentDaysStr);

  try {
    // Scaffold the project
    await scaffoldProject(projectName);
    // Install dependencies
    await installDependencies(projectName);
    // Update the configuration
    await updateConfig(
      projectName,
      projectName,
      projectDescription,
      githubUsername,
      githubRepo,
      recentDays
    );
    outro(`🚀 ${chalk.green("Project created successfully!")}`);
  } catch (err) {
    outro(`${chalk.red("Error during project creation:")} ${err}`);
    process.exit(1);
  }
}
