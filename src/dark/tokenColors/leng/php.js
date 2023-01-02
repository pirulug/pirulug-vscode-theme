const theme = require("../../theme");

module.exports = [
  {
    scope: [
      "keyword.operator.class.php",
      "punctuation.terminator.rule.scss",
      "keyword.operator.assignment.php",
      "punctuation.terminator.expression.php",
    ],
    settings: {
      foreground: "#5687c2",
    },
  },
  {
    scope: ["variable.language.this.php"],
    settings: {
      foreground: "#D4D4D4",
    },
  },
  {
    scope: ["variable.other.property.php"],
    settings: {
      foreground: "#22dc98",
    },
  },
];
