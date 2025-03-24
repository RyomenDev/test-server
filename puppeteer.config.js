import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * @type {import("puppeteer").Configuration}
 */
export default { cacheDirectory: join(__dirname, ".cache", "puppeteer") };
