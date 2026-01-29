const theme = require("../theme");

// Base Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_base-colors

module.exports = {
  focusBorder: theme.primary,
  foreground: theme.foreground,
  "widget.shadow": theme.transparent,
  "selection.background": theme.primary + "33",
  descriptionForeground: theme.foregroundDark,
  errorForeground: theme.red,
};
