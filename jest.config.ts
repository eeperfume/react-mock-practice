import { createDefaultPreset, type JestConfigWithTsJest } from "ts-jest";

const presetConfig = createDefaultPreset({
  //...options
});

const jestConfig: JestConfigWithTsJest = {
  ...presetConfig,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};

export default jestConfig;
