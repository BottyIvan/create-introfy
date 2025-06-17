import chalk from "chalk";
import { exec } from "child_process";
import { promisify } from "util";

/**
 * Utility function to install npm dependencies.
 * @param {string} projectName - The name of the project directory where dependencies will be installed.
 * @returns {Promise<void>}
 */
const installDependencies = async (projectName: string): Promise<void> => {
  const execAsync = promisify(exec);

  console.log(chalk.yellow(`\n➡️ Installing dependencies...\n`));

  try {
    await execAsync(`cd ${projectName} && npm install`);
    console.log(chalk.green("✅ Dependencies installed successfully!"));
  } catch (error) {
    console.error(chalk.red("❌ Error installing dependencies:"), error);
    process.exit(1);
  }
};

export { installDependencies };
