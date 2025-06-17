import fs from "fs";
import path from "path";

/**
 * Updates the introfy configuration file with the provided parameters.
 *
 * @param {string} projectPath - The path to the project directory.
 * @param {string} name - The name of the application.
 * @param {string} description - The description of the application.
 * @param {string} githubUsername - The GitHub username for the repository.
 * @param {string} githubRepo - The GitHub repository name.
 * @param {number} recentDays - The number of recent days to consider for activity.
 */
async function updateConfig(
  projectPath: string,
  name: string,
  description: string,
  githubUsername: string,
  githubRepo: string,
  recentDays: number
) {
  const configPath = path.join(projectPath, "introfy.config.js");
  let configContent = fs.readFileSync(configPath, "utf-8");

  configContent = configContent.replace(
    /const APP_NAME = .*?;/,
    `const APP_NAME = "${name}";`
  );
  configContent = configContent.replace(
    /const APP_DESCRIPTION = .*?;/,
    `const APP_DESCRIPTION = "${description}";`
  );
  configContent = configContent.replace(
    /username: ".*?"/,
    `username: "${githubUsername}"`
  );
  configContent = configContent.replace(
    /repository: ".*?"/,
    `repository: "${githubRepo}"`
  );
  configContent = configContent.replace(
    /recentDays: \d+/,
    `recentDays: ${recentDays}`
  );

  fs.writeFileSync(configPath, configContent, "utf-8");
}

export { updateConfig };
