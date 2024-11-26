import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w+)\((FIN|PTF|PAY)-(\d+)\): (.+)$/, // A regex captura "PTF-1", "FIN-123", etc.
      headerCorrespondence: ["type", "scope", "id", "subject"],
    },
  },
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "chore"],
    ],
    "subject-empty": [2, "never"],
  },
  plugins: [
    {
      rules: {
        "custom-scope": ({ scope }) => {
          const validScopePattern = /^(FIN|PTF|PAY)-\d+$/;

          if (!scope || !validScopePattern.test(scope)) {
            return [
              false,
              "O escopo do commit deve ser um dos prefixos FIN, PTF ou PAY seguido de um número, ex: PTF-123.",
            ];
          }

          return [true];
        },
      },
    },
  ],
};

export default Configuration;
