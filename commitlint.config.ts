import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w+)\((FIN|PTF|PAY)-(\d+)\): (.+)$/, // A regex valida o commit com prefixo e número
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

          return [true]; // Se o escopo for válido
        },
      },
    },
  ],
};

export default Configuration;
