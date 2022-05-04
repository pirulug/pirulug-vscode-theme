const theme = require("../theme");

module.exports = [
  {
    "settings": {
      "foreground": theme.purple
    }
  },
  {
    "scope": [
      "support.function",
      "keyword.operator.accessor",
      "meta.group.braces.round.function.arguments",
      "meta.template.expression",
      "markup.fenced_code meta.embedded.block"
    ],
    "settings": {
      "foreground": theme.purple
    }
  },
  {
    "scope": "emphasis",
    "settings": {
      "fontStyle": "italic"
    }
  },
  {
    "scope": [
      "strong",
      "markup.heading.markdown",
      "markup.bold.markdown"
    ],
    "settings": {
      "fontStyle": "bold",
      "foreground": theme.red
    }
  },
  {
    "scope": [
      "markup.italic.markdown"
    ],
    "settings": {
      "fontStyle": "italic"
    }
  },
  {
    "scope": "meta.link.inline.markdown",
    "settings": {
      "fontStyle": "underline",
      "foreground": theme.blue
    }
  },
  {
    "scope": [
      "string",
      "markup.fenced_code",
      "markup.inline"
    ],
    "settings": {
      "foreground": "#9db1c5"
    }
  },
  {
    "scope": [
      "comment",
      "string.quoted.docstring.multi"
    ],
    "settings": {
      "foreground": "#6b737c"
    }
  },
  {
    "scope": [
      "constant.language",
      "variable.language.this",
      "variable.other.object",
      "variable.other.class",
      "variable.other.constant",
      "meta.property-name",
      "support",
      "string.other.link.title.markdown"
    ],
    "settings": {
      "foreground": theme.blue
    }
  },
  {
    "scope": [
      "constant.numeric",
      "constant.other.placeholder",
      "constant.character.format.placeholder",
      "meta.property-value",
      "keyword.other.unit",
      "keyword.other.template",
      "entity.name.tag.yaml",
      "entity.other.attribute-name",
      "support.type.property-name.json"
    ],
    "settings": {
      "foreground": theme.black
    }
  },
  {
    "scope": [
      "keyword",
      "storage.modifier",
      "storage.type",
      "storage.control.clojure",
      "entity.name.function.clojure",
      "support.function.node",
      "punctuation.separator.key-value",
      "punctuation.definition.template-expression"
    ],
    "settings": {
      "foreground": theme.red
    }
  },
  {
    "scope": "variable.parameter.function",
    "settings": {
      "foreground": theme.orange
    }
  },
  {
    "scope": [
      "entity.name.type",
      "entity.other.inherited-class",
      "meta.function-call",
      "meta.instance.constructor",
      "entity.other.attribute-name",
      "entity.name.function",
      "constant.keyword.clojure"
    ],
    "settings": {
      "foreground": theme.purple
    }
  },
  {
    "scope": [
      "string.quoted",
      "string.regexp",
      "string.interpolated",
      "string.template",
      "string.unquoted.plain.out.yaml"
    ],
    "settings": {
      "fontStyle": "italic",
      "foreground": theme.green
    }
  },
  {
    "scope": [
      "entity.name.tag",
      "keyword.other.template"
    ],
    "settings": {
      "foreground": theme.magenta
    }
  },
  {
    "scope": "token.info-token",
    "settings": {
      "foreground": theme.purple
    }
  },
  {
    "scope": "token.warn-token",
    "settings": {
      "foreground": "#cd9731"
    }
  },
  {
    "scope": "token.error-token",
    "settings": {
      "foreground": "#cd3131"
    }
  },
  {
    "scope": "token.debug-token",
    "settings": {
      "foreground": "#800080"
    }
  },
  {
    "scope": [
      "punctuation.definition.arguments",
      "punctuation.definition.dict",
      "punctuation.separator",
      "meta.function-call.arguments"
    ],
    "settings": {
      "foreground": "#bbbbbb"
    }
  },
  {
    "name": "[Custom] Markdown links",
    "scope": "markup.underline.link",
    "settings": {
      "foreground": "#ffab70"
    }
  },
  {
    "name": "[Custom] Markdown list",
    "scope": [
      "beginning.punctuation.definition.list.markdown"
    ],
    "settings": {
      "foreground": "#FF7A84"
    }
  },
  {
    "name": "[Custom] Markdown punctuation definition",
    "scope": "punctuation.definition.metadata.markdown",
    "settings": {
      "foreground": "#ffab70"
    }
  },
  {
    "name": "[Custom] Markdown punctuation definition brackets",
    "scope": [
      "punctuation.definition.string.begin.markdown",
      "punctuation.definition.string.end.markdown"
    ],
    "settings": {
      "foreground": theme.cyan
    }
  }
];
