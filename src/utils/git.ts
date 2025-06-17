import { promisify } from "util";
import { exec } from "child_process";

/**
 * Utility function to get the GitHub username from the git configuration.
 * @returns {Promise<string>} - The GitHub username or an empty string if not found.
 */
const getGitHubUsername = async (): Promise<string> => {
  const execAsync = promisify(exec);
  try {
    const { stdout } = await execAsync("git config --get user.name");
    return stdout.trim();
  } catch {
    // If the username is not found, return an empty string without throwing an error
    return "";
  }
};

export { getGitHubUsername };
