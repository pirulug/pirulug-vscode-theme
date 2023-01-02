const theme = require("../theme");

module.exports = [
  {
    name: "Comment",
    scope: "comment",
    settings: {
      foreground: theme.comment,
      fontStyle: "italic",
    },
  },
  {
    name: "String",
    scope: "string",
    settings: {
      foreground: theme.yellow,
    },
  },
  {
    name: "Template Definition",
    scope: [
      "punctuation.definition.template-expression",
      "punctuation.section.embedded",
    ],
    settings: {
      foreground: theme.primary,
    },
  },
  {
    name: "Reset JavaScript string interpolation expression",
    scope: ["meta.template.expression"],
    settings: {
      foreground: theme.dark,
    },
  },
  {
    name: "Number",
    scope: "constant.numeric",
    settings: {
      foreground: theme.purple,
    },
  },
  {
    name: "Built-in constant",
    scope: "constant.language",
    settings: {
      foreground: theme.purple,
    },
  },
  {
    name: "User-defined constant",
    scope: "constant.character, constant.other",
    settings: {
      foreground: theme.purple,
    },
  },
  {
    name: "Variable",
    scope: "variable",
    settings: {
      fontStyle: "",
      foreground: "",
    },
  },
  {
    name: "Keyword",
    scope: "keyword",
    settings: {
      foreground: theme.magenta,
      fontStyle: "italic",
    },
  },
  {
    name: "Storage",
    scope: "storage",
    settings: {
      fontStyle: "",
      foreground: theme.magenta,
    },
  },
  {
    name: "Storage type",
    scope: "storage.type",
    settings: {
      fontStyle: "italic",
      foreground: theme.cyan,
    },
  },
  {
    name: "Class name",
    scope: "entity.name.type, entity.name.class",
    settings: {
      fontStyle: "underline",
      foreground: theme.green,
    },
  },
  {
    name: "Inherited class",
    scope: "entity.other.inherited-class",
    settings: {
      fontStyle: "italic underline",
      foreground: theme.green,
    },
  },
  {
    name: "Function name",
    scope: "entity.name.function",
    settings: {
      fontStyle: "",
      foreground: theme.green,
    },
  },
  {
    name: "Function argument",
    scope: "variable.parameter",
    settings: {
      fontStyle: "italic",
      foreground: "",
    },
  },
  {
    name: "Tag name",
    scope: "entity.name.tag",
    settings: {
      fontStyle: "",
      foreground: theme.magenta,
    },
  },
  {
    name: "Tag attribute",
    scope: "entity.other.attribute-name",
    settings: {
      fontStyle: "",
      foreground: theme.green,
    },
  },
  {
    name: "Library function",
    scope: "support.function",
    settings: {
      fontStyle: "",
      foreground: theme.cyan,
    },
  },
  {
    name: "Library constant",
    scope: "support.constant",
    settings: {
      fontStyle: "",
      foreground: theme.cyan,
    },
  },
  {
    name: "Library class/type",
    scope: "support.type, support.class",
    settings: {
      fontStyle: "italic",
      foreground: theme.cyan,
    },
  },
  {
    name: "Library variable",
    scope: "support.other.variable",
    settings: {
      fontStyle: "",
    },
  },
  {
    name: "Invalid",
    scope: "invalid",
    settings: {
      background: theme.magenta,
      fontStyle: "",
      foreground: theme.dark,
    },
  },
  {
    name: "Invalid deprecated",
    scope: "invalid.deprecated",
    settings: {
      background: theme.purple,
      foreground: "#F8F8F0",
    },
  },
  {
    name: "JSON String",
    scope: "meta.structure.dictionary.json string.quoted.double.json",
    settings: {
      foreground: theme.dark,
    },
  },
  {
    name: "diff.header",
    scope: "meta.diff, meta.diff.header",
    settings: {
      foreground: theme.gray,
    },
  },
  {
    name: "diff.deleted",
    scope: "markup.deleted",
    settings: {
      foreground: theme.magenta,
    },
  },
  {
    name: "diff.inserted",
    scope: "markup.inserted",
    settings: {
      foreground: theme.green,
    },
  },
  {
    name: "diff.changed",
    scope: "markup.changed",
    settings: {
      foreground: theme.yellow,
    },
  },
  {
    scope: "constant.numeric.line-number.find-in-files - match",
    settings: {
      foreground: theme.purple,
    },
  },
  {
    scope: "entity.name.filename.find-in-files",
    settings: {
      foreground: theme.yellow,
    },
  },
  {
    name: "Markup Quote",
    scope: "markup.quote",
    settings: {
      foreground: theme.magenta,
    },
  },
  {
    name: "Markup Lists",
    scope: "markup.list",
    settings: {
      foreground: theme.yellow,
    },
  },
  {
    name: "Markup Styling",
    scope: "markup.bold, markup.italic",
    settings: {
      foreground: theme.cyan,
    },
  },
  {
    name: "Markup Inline",
    scope: "markup.inline.raw",
    settings: {
      fontStyle: "",
      foreground: theme.orange,
    },
  },
  {
    name: "Markup Headings",
    scope: "markup.heading",
    settings: {
      foreground: theme.green,
    },
  },
  {
    name: "Markup Setext Header",
    scope: "markup.heading.setext",
    settings: {
      fontStyle: "",
      foreground: theme.green,
    },
  },
  {
    scope: "token.info-token",
    settings: {
      foreground: theme.blue,
    },
  },
  {
    scope: "token.warn-token",
    settings: {
      foreground: theme.orange,
    },
  },
  {
    scope: "token.error-token",
    settings: {
      foreground: theme.red,
    },
  },
  {
    scope: "token.debug-token",
    settings: {
      foreground: theme.orange,
    },
  },
  {
    name: "this.self",
    scope: "variable.language",
    settings: {
      foreground: "",
    },
  },
];
