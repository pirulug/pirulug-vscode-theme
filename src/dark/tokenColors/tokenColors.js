const theme = require("../theme");

module.exports = [
  {
    settings: {
      background: "#272822",
      foreground: "#F8F8F2",
    },
  },
  {
    scope: ["meta.embedded", "source.groovy.embedded"],
    settings: {
      background: "#272822",
      foreground: "#F8F8F2",
    },
  },
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
      foreground: "#F8F8F2",
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
      foreground: "#F8F8F2",
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
      foreground: theme.orange,
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
      foreground: "#F8F8F0",
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
      foreground: "#CFCFC2",
    },
  },
  {
    name: "diff.header",
    scope: "meta.diff, meta.diff.header",
    settings: {
      foreground: "#75715E",
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
      foreground: theme.orange,
    },
  },
  // php
  {
    scope: ["entity.other.inherited-class.php", "entity.name.type.class.php"],
    settings: {
      fontStyle: "",
    },
  },
  {
    scope: ["storage.modifier.extends.php", "storage.modifier.php"],
    settings: {
      fontStyle: "italic",
    },
  },
  {
    scope: [
      "punctuation.section.embedded.begin.php",
      "punctuation.section.embedded.end.php",
    ],
    settings: {
      fontStyle: "italic bold",
      foreground: "#7068c1",
    },
  },
  {
    scope: [
      "keyword.operator.class.php",
      "punctuation.terminator.rule.scss",
      "keyword.operator.assignment.php",
      "punctuation.terminator.expression.php",
    ],
    settings: {
      fontStyle: "",
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
  // html
  {
    scope: [
      "punctuation.definition.tag.begin.html",
      "punctuation.definition.tag.end.html",
    ],
    settings: {
      fontStyle: "",
      foreground: theme.magenta,
    },
  },
  {
    scope: ["entity.other.attribute-name.html"],
    settings: {
      fontStyle: "bold",
      // foreground: theme.orange,
    },
  },
  {
    scope: ["comment.block.html"],
    settings: {
      fontStyle: "italic",
      // foreground: theme.orange,
    },
  },
  // SCSS
  {
    scope: [
      "punctuation.separator.key-value.scss",
      "punctuation.terminator.rule.scss",
    ],
    settings: {
      foreground: "#5687c2",
    },
  },
  {
    scope: ["comment.block.scss"],
    settings: {
      fontStyle: "italic",
    },
  },
  {
    scope: [
      "keyword.control.each.scss",
      "keyword.control.if.scss",
      "keyword.control.else.scss",
      "keyword.control.operator",
      "keyword.control.at-rule.import.scss",
      "keyword.other.important.scss",
    ],
    settings: {
      fontStyle: "italic bold",
    },
  },
  {
    scope: ["keyword.other.important.scss"],
    settings: {
      foreground: "#a54af5",
      fontStyle: "italic bold",
    },
  },
  //JSON
  {
    scope: [
      "support.type.property-name.json",
      "string.quoted.double.json",
      "string.quoted.single.js",
    ],
    settings: {
      fontStyle: "",
    },
  },
  {
    scope: ["support.type.property-name.json"],
    settings: {
      fontStyle: "",
      foreground: theme.red,
    },
  },
  // pug
  {
    scope: ["entity.other.attribute-name.tag.pug", "string.quoted.pug"],
    settings: {
      fontStyle: "",
    },
  },
  {
    scope: ["string.interpolated.pug"],
    settings: {
      foreground: theme.red,
    },
  },
];
