import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w+)\((FIN|PTF|PAY)-(\d+)\): (.+)$/,
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
        // Validação personalizada para garantir que o scope esteja correto
        "custom-scope": ({ scope, subject }) => {
          // Regex para garantir que o scope tenha o formato adequado
          const validScopePattern = /^(FIN|PTF|PAY)-\d+$/;

          console.log("scope", scope);
          console.log("subject", subject);
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
