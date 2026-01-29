const theme = require("../theme");

// Editor Groups & Tabs
// https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-groups-tabs

module.exports = {
  "editorGroup.border": theme.backgroundLight,
  "editorGroup.dropBackground": theme.backgroundLight,
  "editorGroupHeader.noTabsBackground": theme.backgroundLight,
  "editorGroupHeader.tabsBackground": theme.backgroundDark,
  "editorGroupHeader.tabsBorder": theme.backgroundLight,
  "editorGroup.emptyBackground": theme.background,
  "editorGroup.focusedEmptyBorder": theme.primary,
  "tab.activeBackground": theme.background,
  "tab.activeForeground": theme.foreground,
  "tab.border": theme.backgroundLight,
  "tab.inactiveBackground": theme.backgroundDark,
  "tab.inactiveForeground": theme.foregroundDark,
  "tab.unfocusedActiveForeground": theme.foreground,
  "tab.unfocusedInactiveForeground": theme.foregroundDark,
  "tab.hoverBackground": theme.backgroundLight,
  "tab.unfocusedHoverBackground": theme.background,
  "tab.activeModifiedBorder": theme.primary,
  "tab.inactiveModifiedBorder": theme.primary,
  "tab.unfocusedActiveModifiedBorder": theme.primary,
  "tab.unfocusedInactiveModifiedBorder": theme.primary,
  // "tab.activeBorderTop": "#",
  // "tab.unfocusedActiveBorderTop": "#",
  // "tab.hoverBorder": "#30373A",
  // "tab.unfocusedHoverBorder": "#30373A",
  // "editor.selectionHighlightBorder": "#f00",
  // "editor.wordHighlightBorder": "#f00",
  // "editor.wordHighlightStrongBorder": "#f00",
  // "editor.findMatchBorder": theme.foregroundDark,
  // "editor.findMatchHighlightBorder": "#f09",
  // "editor.findRangeHighlightBorder": "#f00",
  // "editor.rangeHighlightBorder": "#f00",
};
