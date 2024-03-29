const theme = require("../theme");

// Editor Colors
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-colors

module.exports = {
  "editor.background": theme.background,
  "editor.foreground": theme.foreground,
  "editorLineNumber.foreground": "#545454",
  "editorLineNumber.activeForeground": theme.foregroundDark,
  "editorCursor.foreground": theme.foreground,
  "editor.selectionBackground": "#FFFFFF3D",
  // "editor.selectionHighlightBackground": "#FFFFFF3D",
  "editor.inactiveSelectionBackground": "#FFFFFF1F",
  "editor.wordHighlightBackground": theme.transparent,
  "editor.wordHighlightStrongBackground": theme.transparent,
  "editor.findMatchBackground": "#FFFFFF3D",
  "editor.findMatchHighlightBackground": "#FFFFFF1F",
  // "editor.findRangeHighlightBackground": "#FFFFFF1F",
  "editor.hoverHighlightBackground": "#FFFFFF1F",
  "editor.lineHighlightBackground": "#FFFFFF0F",
  // "editor.lineHighlightBorder": "#30373A",
  "editorLink.activeForeground": theme.blue,
  "editor.rangeHighlightBackground": "#30373A",
  "editorWhitespace.foreground": "#545454",
  "editorIndentGuide.background": "#FFFFFF1F",
  "editorIndentGuide.activeBackground": theme.foregroundDark,
  "editorRuler.foreground": "#FFFFFF1F",
  "editorCodeLens.foreground": theme.foregroundDark,
  "editorBracketMatch.background": theme.transparent,
  "editorBracketMatch.border": "#FFFFFF4D",
  "editorOverviewRuler.border": "#30373A",
  // "editor.stackFrameHighlightBackground": "red",
  // "editor.focusedStackFrameHighlightBackground": "red",

  "editorOverviewRuler.findMatchForeground": "#FFFFFF0F",
  "editorOverviewRuler.rangeHighlightForeground": "#FFFFFF0F",
  "editorOverviewRuler.selectionHighlightForeground": "#FFFFFF0F",
  "editorOverviewRuler.wordHighlightForeground": "#FFFFFF0F",
  "editorOverviewRuler.wordHighlightStrongForeground": "#FFFFFF0F",
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
