import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "body-leading-blank": [2, "always"],
    "body-empty": [2, "never"],
    ["task"]: [2, "always"],
  },
  plugins: [
    {
      rules: {
        task: ({ scope }) => {
          const validScopePattern = /^(PTF-\d+|FIN--\d+|PAY-\d+)$/;

          if (!scope || !validScopePattern.test(scope)) {
            return [
              false,
              "O escopo do commit deve ser um dos prefixos FIN, PTF ou PAY, além de precisar conter o número da task. Ex: PTF-123",
            ];
          }

          return [true];
        },
      },
    },
  ],
};

export default Configuration;
