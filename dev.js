const index = process.argv[2] || 0;
require("child_process").execSync(`pnpm --filter ${index} dev`, {
  stdio: "inherit",
});
