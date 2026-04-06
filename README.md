<div align="center">

<img src="p-icon.jpg" width="150" />

# Pirulug VS Code Theme

![GitHub package.json version](https://img.shields.io/github/package-json/v/pirulug/pirulug-vscode-theme?color=ff0055&style=for-the-badge)
[![GitHub issues](https://img.shields.io/github/issues/pirulug/pirulug-vscode-theme?color=%23ff0055&style=for-the-badge)](https://github.com/pirulug/pirulug-vscode-theme/issues)
[![GitHub forks](https://img.shields.io/github/forks/pirulug/pirulug-vscode-theme?color=ff0055&style=for-the-badge)](https://github.com/pirulug/pirulug-vscode-theme/network)
[![GitHub stars](https://img.shields.io/github/stars/pirulug/pirulug-vscode-theme?color=ff0055&style=for-the-badge)](https://github.com/pirulug/pirulug-vscode-theme/stargazers)
[![GitHub license](https://img.shields.io/github/license/pirulug/pirulug-vscode-theme?color=ff0055&style=for-the-badge)](https://github.com/pirulug/pirulug-vscode-theme/blob/master/LICENSE.txt)

A clean, minimal, and premium VS Code theme that comes in Dark and Light variants. Focused on readability, productivity, and modern aesthetics.

![preview-dark](https://i.imgur.com/iRELxVN.png)

![preview-light](https://i.imgur.com/xX4j9e3.png)

</div>

## Features

- **Harmonized Colors**: Perfectly balanced palettes for both variants, sharing the same "Pirulug" brand identity.
- **Premium Syntax Highlighting**: Semantic-aware highlighting with italics and bold weights for a professional look.
- **Optimized for Web Development**: Enhanced support for **PHP, SCSS, HTML, CSS, JS, and Pug**.
- **Minimalist Interface**: Reduced UI noise to keep you focused on your code.

## Installation

1. Install theme from the [Marketplace](https://marketplace.visualstudio.com/items?itemName=Pirulug.pirulug-vscode-theme)
2. Go to `File > Preferences > Color Theme`
3. Select `Pirulug Dark` or `Pirulug Light`

## Development

If you want to contribute or build the theme from source:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Generate the theme JSON files from the source files in `src/`:
   ```bash
   npm run build
   ```
4. Package the extension into a `.vsix` file:
   ```bash
   # Install vsce first if you haven't: npm install -g @vscode/vsce
   vsce package
   ```

## License

[MIT License](LICENSE) 

## Author

Created by [Pirulug](https://github.com/pirulug).