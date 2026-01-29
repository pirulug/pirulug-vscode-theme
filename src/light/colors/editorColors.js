const theme = require("../theme");

// Editor Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-colors

module.exports = {
  "editor.background": theme.background,
  "editor.foreground": theme.foreground,
  "editorLineNumber.foreground": theme.foregroundDark,
  "editorLineNumber.activeForeground": theme.foreground,
  "editorCursor.foreground": theme.primary,

  "editor.selectionBackground": theme.selectionBackground,
  // "editor.selectionHighlightBackground": "#0000003D",

  "editor.inactiveSelectionBackground": theme.primary + "1F",
  "editor.wordHighlightBackground": theme.transparent,
  "editor.wordHighlightStrongBackground": theme.transparent,
  "editor.findMatchBackground": theme.primary + "3D",
  "editor.findMatchHighlightBackground": theme.primary + "1F",
  // "editor.findRangeHighlightBackground": "#0000001F",
  "editor.hoverHighlightBackground": theme.backgroundLight + "4D",
  "editor.lineHighlightBackground": theme.backgroundLight + "2D",
  // "editor.lineHighlightBorder": "#30373A",
  "editorLink.activeForeground": theme.blue,
  "editor.rangeHighlightBackground": theme.backgroundLight,
  "editorWhitespace.foreground": theme.foregroundDark,
  "editorIndentGuide.background": theme.foregroundDark + "1F",
  "editorIndentGuide.activeBackground": theme.foregroundDark,
  "editorRuler.foreground": theme.foregroundDark + "1F",
  "editorCodeLens.foreground": theme.foregroundDark,
  "editorBracketMatch.background": theme.transparent,
  "editorBracketMatch.border": theme.primary + "4D",
  "editorOverviewRuler.border": theme.backgroundLight,
  // "editor.stackFrameHighlightBackground": "red",
  // "editor.focusedStackFrameHighlightBackground": "red",

  "editorOverviewRuler.findMatchForeground": theme.primary + "0F",
  "editorOverviewRuler.rangeHighlightForeground": theme.primary + "0F",
  "editorOverviewRuler.selectionHighlightForeground": theme.primary + "0F",
  "editorOverviewRuler.wordHighlightForeground": theme.primary + "0F",
  "editorOverviewRuler.wordHighlightStrongForeground": theme.primary + "0F",
  "editorOverviewRuler.modifiedForeground": theme.blue,
  "editorOverviewRuler.addedForeground": theme.green,
  "editorOverviewRuler.deletedForeground": theme.red,
  "editorOverviewRuler.errorForeground": theme.red,
  "editorOverviewRuler.warningForeground": theme.yellow,
  "editorOverviewRuler.infoForeground": theme.blue,

  "editorError.foreground": theme.red,
  "editorError.border": theme.background,
  "editorWarning.foreground": theme.yellow,
  "editorWarning.border": theme.background,
  "editorGutter.background": theme.background,
  "editorGutter.modifiedBackground": theme.blue,
  "editorGutter.addedBackground": theme.green,
  "editorGutter.deletedBackground": theme.red,
};
