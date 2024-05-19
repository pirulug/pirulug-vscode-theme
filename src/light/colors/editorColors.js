const theme = require("../theme");

// Editor Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-colors

module.exports = {
  "editor.background": theme.background,
  "editor.foreground": theme.foreground,
  "editorLineNumber.foreground": "#545454",
  "editorLineNumber.activeForeground": theme.foregroundDark,
  "editorCursor.foreground": theme.foreground,

  "editor.selectionBackground": theme.selectionBackground,
  // "editor.selectionHighlightBackground": "#0000003D",

  "editor.inactiveSelectionBackground": "#0000001F",
  "editor.wordHighlightBackground": theme.transparent,
  "editor.wordHighlightStrongBackground": theme.transparent,
  "editor.findMatchBackground": "#0000003D",
  "editor.findMatchHighlightBackground": "#0000001F",
  // "editor.findRangeHighlightBackground": "#0000001F",
  "editor.hoverHighlightBackground": "#0000001F",
  "editor.lineHighlightBackground": "#0000000F",
  // "editor.lineHighlightBorder": "#30373A",
  "editorLink.activeForeground": theme.blue,
  "editor.rangeHighlightBackground": "#30373A",
  "editorWhitespace.foreground": "#545454",
  "editorIndentGuide.background": "#0000001F",
  "editorIndentGuide.activeBackground": theme.foregroundDark,
  "editorRuler.foreground": "#0000001F",
  "editorCodeLens.foreground": theme.foregroundDark,
  "editorBracketMatch.background": theme.transparent,
  "editorBracketMatch.border": "#0000004D",
  "editorOverviewRuler.border": "#30373A",
  // "editor.stackFrameHighlightBackground": "red",
  // "editor.focusedStackFrameHighlightBackground": "red",

  "editorOverviewRuler.findMatchForeground": "#0000000F",
  "editorOverviewRuler.rangeHighlightForeground": "#0000000F",
  "editorOverviewRuler.selectionHighlightForeground": "#0000000F",
  "editorOverviewRuler.wordHighlightForeground": "#0000000F",
  "editorOverviewRuler.wordHighlightStrongForeground": "#0000000F",
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
