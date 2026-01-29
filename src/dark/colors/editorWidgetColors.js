const theme = require("../theme");

// Editor Widget Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-widget-colors

module.exports = {
  "editorWidget.background": theme.backgroundDark,
  "editorWidget.border": theme.backgroundLight,
  "editorSuggestWidget.background": theme.backgroundDark,
  "editorSuggestWidget.border": theme.backgroundLight,
  "editorSuggestWidget.foreground": theme.foreground,
  // "editorSuggestWidget.highlightForeground": "#FF0000",
  "editorSuggestWidget.selectedBackground": theme.backgroundLight,
  "editorHoverWidget.background": theme.backgroundDark,
  "editorHoverWidget.border": theme.backgroundLight,
  "debugExceptionWidget.background": theme.backgroundDark,
  "debugExceptionWidget.border": theme.backgroundLight,
  "editorMarkerNavigation.background": theme.backgroundDark,
  "editorMarkerNavigationError.background": theme.red,
  "editorMarkerNavigationWarning.background": theme.yellow
};
