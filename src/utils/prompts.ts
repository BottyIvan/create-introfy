import { text, isCancel, cancel } from "@clack/prompts";

/**
 * Prompts the user for text input.
 * @param {Object} options - The prompt options.
 * @param {string} options.message - The prompt message.
 * @param {string} [options.placeholder] - The placeholder text.
 * @param {string} [options.defaultValue] - The default value.
 * @param {function} [options.validate] - The validation function.
 * @returns {Promise<string>} - The user's input.
 */
const promptText = async ({
  message,
  placeholder,
  defaultValue,
  validate,
}: {
  message: string;
  placeholder?: string;
  defaultValue?: string;
  validate?: (value: string) => string | undefined;
}): Promise<string> => {
  const result = await text({
    message,
    placeholder,
    defaultValue,
    validate,
  });
  if (isCancel(result)) {
    cancel("Operation cancelled.");
    process.exit(0);
  }
  return result;
};

export { promptText };
