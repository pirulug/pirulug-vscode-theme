const theme = require("../theme");

module.exports = [
  {
    settings: {
      background: theme.background,
      foreground: theme.foreground,
    },
  },
  {
    scope: ["meta.embedded", "source.groovy.embedded"],
    settings: {
      background: theme.background,
      foreground: theme.foreground,
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
      foreground: theme.foreground,
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
      foreground: theme.foreground,
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
      foreground: theme.foreground,
    },
  },
  {
    name: "Invalid deprecated",
    scope: "invalid.deprecated",
    settings: {
      background: theme.purple,
      foreground: theme.foreground,
    },
  },
  {
    name: "JSON String",
    scope: "meta.structure.dictionary.json string.quoted.double.json",
    settings: {
      foreground: theme.foregroundDark,
    },
  },
  {
    name: "diff.header",
    scope: "meta.diff, meta.diff.header",
    settings: {
      foreground: theme.comment,
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
    scope: [
      "entity.name.type.class.php",
      "entity.other.inherited-class.php"
    ],
    settings: {
      fontStyle: "italic bold",
      foreground: theme.purple
    },
  },
  {
    scope: [
      "entity.name.function.php",
      "support.function.construct.php",
      "support.function.magic.php"
    ],
    settings: {
      fontStyle: "italic bold",
      foreground: theme.blue
    },
  },
  {
    scope: [
      "storage.modifier.extends.php",
      "storage.modifier.php"
    ],
    settings: {
      fontStyle: "italic bold",
      foreground: theme.magenta
    },
  },
  {
    scope: [
      "support.function.php",
      "support.function.string.php",
      "support.function.array.php"
    ],
    settings: {
      fontStyle: "italic bold",
      foreground: theme.green
    },
  },
  {
    scope: [
      "punctuation.section.embedded.begin.php",
      "punctuation.section.embedded.end.php"
    ],
    settings: {
      fontStyle: "bold",
      foreground: theme.purple
    },
  },
  {
    scope: [
      "variable.other.php",
      "variable.other.property.php",
      "variable.other.readwrite.php"
    ],
    settings: {
      foreground: theme.cyan
    },
  },
  {
    scope: "keyword.control.php",
    settings: {
      fontStyle: "italic",
      foreground: theme.magenta
    }
  },
  // html
  {
    scope: [
      "punctuation.definition.tag.begin.html",
      "punctuation.definition.tag.end.html",
      "punctuation.separator.key-value.html",
      "punctuation.definition.string.begin.html",
      "punctuation.definition.string.end.html"
    ],
    settings: {
      foreground: theme.punctuation
    }
  },
  {
    scope: "entity.name.tag.html",
    settings: {
      fontStyle: "bold",
      foreground: theme.magenta
    }
  },
  {
    scope: "entity.other.attribute-name.html",
    settings: {
      fontStyle: "italic",
      foreground: theme.cyan
    }
  },
  {
    scope: "string.quoted.double.html",
    settings: {
      foreground: theme.yellow
    }
  },
  {
    scope: "comment.block.html",
    settings: {
      fontStyle: "italic",
      foreground: theme.comment
    }
  },
  // CSS / SCSS
  {
    scope: [
      "entity.name.tag.css",
      "entity.name.tag.scss",
      "entity.other.attribute-name.class.css",
      "entity.other.attribute-name.class.scss",
      "entity.other.attribute-name.id.css",
      "entity.other.attribute-name.id.scss"
    ],
    settings: {
      fontStyle: "bold",
      foreground: theme.green
    }
  },
  {
    scope: [
      "support.type.property-name.css",
      "support.type.property-name.scss"
    ],
    settings: {
       fontStyle: "italic",
       foreground: theme.cyan
    }
  },
  {
    scope: [
      "support.constant.property-value.css",
      "support.constant.property-value.scss"
    ],
    settings: {
      foreground: theme.orange
    }
  },
  {
    scope: [
      "variable.scss",
      "variable.parameter.scss",
      "variable.other.scss",
      "punctuation.definition.variable.scss"
    ],
    settings: {
      foreground: theme.purple
    }
  },
  {
    scope: "keyword.control.at-rule",
    settings: {
      fontStyle: "italic",
      foreground: theme.magenta
    }
  },
  // JS / TS
  {
    scope: [
      "storage.type.js",
      "storage.type.ts",
      "keyword.control.js",
      "keyword.control.ts",
      "keyword.operator.new.js",
      "keyword.operator.new.ts"
    ],
    settings: {
      fontStyle: "italic",
      foreground: theme.magenta
    }
  },
  {
    scope: [
      "entity.name.function.js",
      "entity.name.function.ts",
      "support.function.dom.js",
      "support.function.dom.ts"
    ],
    settings: {
      foreground: theme.blue
    }
  },
  {
    scope: "variable.language.this",
    settings: {
      fontStyle: "bold",
      foreground: theme.orange
    }
  },
  // pug
  {
    scope: [
      "entity.name.tag.pug",
      "storage.type.pug"
    ],
    settings: {
      fontStyle: "bold",
      foreground: theme.magenta,
    },
  },
  {
    scope: "entity.other.attribute-name.tag.pug",
    settings: {
      fontStyle: "italic",
      foreground: theme.cyan
    }
  },
  {
    scope: [
      "comment.line.pug",
      "comment.block.pug"
    ],
    settings: {
      fontStyle: "italic",
      foreground: theme.comment
    }
  },
  {
    scope: "string.interpolated.pug",
    settings: {
      foreground: theme.orange
    }
  },
];
