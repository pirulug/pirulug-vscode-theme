const theme = require("../theme");

// Panel Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_panel-colors

module.exports = {
  "panel.background": theme.background,
  "panel.border": theme.backgroundLight,
  "panelTitle.activeBorder": theme.primary,
  "panelTitle.activeForeground": theme.foreground,
  "panelTitle.inactiveForeground": theme.foregroundDark
};
