import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["test/**/*.test.ts"],
    coverage: {
      provider: "v8",
      include: ["src/**/*.ts"],
      // src/probe/ is vendored verbatim from well-known-probe-js (it has its own
      // published test suite there). Excluded so coverage focuses on the action's
      // runner.ts orchestration code.
      exclude: [
        "src/cli.ts",
        "src/index.ts",
        "src/types.ts",
        "src/probe/**"
      ],
      thresholds: {
        statements: 75,
        branches: 60,
        functions: 40,
        lines: 75
      }
    }
  }
});
