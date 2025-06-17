import chalk from "chalk";
import degit from "degit";

/**
 * @file Scaffold a new project using the Introfy template.
 * @module core/scaffold
 */
const DEPOSIT_URL = "https://github.com/BottyIvan/introfy.git";

/**
 * Scaffold a new project using the Introfy template.
 * @param {string} projectName - The name of the project to create.
 */
const scaffoldProject = async (projectName: string) => {
  console.log(chalk.yellow(`\n➡️ Creating project "${projectName}"...\n`));

  const emitter = degit(DEPOSIT_URL, { cache: false, force: true });

  try {
    await emitter.clone(projectName);
    console.log(
      chalk.green(`✅ Project "${projectName}" created successfully!`)
    );
  } catch (error) {
    console.error(chalk.red("❌ Error while cloning the template."));
    console.error(error);
    process.exit(1);
  }
};

export { scaffoldProject };
