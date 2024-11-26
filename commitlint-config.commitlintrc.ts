export const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    prefix: (commit) => {
      const prefixes = ["PTF", "FIN", "BM"];
      const prefixRegex = new RegExp(`^(${prefixes.join("|")})-`);

      return prefixRegex.test(commit.header)
        ? []
        : [false, "Commit deve conter o time de desenvolvimento"];
    },
  },
};
