import type { UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w+)\((FIN|PTF|PAY)\): (.+)$/,
      headerCorrespondence: ["type", "scope", "id", "subject"],
    },
  },
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "chore"],
    ],
    ["custom-scope"]: [2, "always"],
  },
  plugins: [
    {
      rules: {
        // Validação personalizada para garantir que o scope esteja correto
        "custom-scope": ({ id, scope }) => {
          // Regex para garantir que o scope tenha o formato adequado
          const validScopePattern = /^(FIN|PTF|PAY)$/;

          console.log(id, scope);
          console.log("id", id);
          console.log("scope", scope);
          if (!scope || !validScopePattern.test(scope) || id <= 0) {
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
