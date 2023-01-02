const theme = require("../theme");

// Activity Bar
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_activity-bar

module.exports = {
  "activityBar.background": theme.background,
  "activityBar.dropBackground": theme.backgroundDark,
  "activityBar.foreground": theme.foreground,
  "activityBar.inactiveForeground": theme.foregroundDark,
  "activityBar.border": theme.backgroundLight,
  "activityBarBadge.background": theme.primary,
  "activityBarBadge.foreground": theme.foreground,
};
