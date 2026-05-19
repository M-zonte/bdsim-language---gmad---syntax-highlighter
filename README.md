# BDSim GMAD Syntax Highlighter

A VS Code extension that provides syntactic highlighting and semantic highlighting for `.gmad` files used by BDSim/GMAD.

## What it does
- Adds TextMate grammar for GMAD syntax (file in syntaxes/GMAD.tmLanguage.json).
- Register a Semantic Tokens provider (`extension.js`) that highlights declared variables: collects defined variables (left side of `=`) and colors all their occurrences in the document.
- Enable semantic highlighting configurable via `package.json` (token type `gmadVariable`).

## Features
- Keyword and syntax highlighting via TextMate grammar.
- Semantic highlighting of variables already declared in the same file (customizable default color).
- Automatic activation for files with `.gmad` extension.

## How to use
1. Open a file with `.gmad` extension in VS Code.
2. The extension fires automatically!!

In this example `beamEnergy` will be highlighted where it is used.

## Color configuration
You can customize the color of semantic variables via VS Code settings: in `settings.json` add a rule in `editor.semanticTokenColorCustomizations.rules` for `gmadVariable` (see `package.json` for the example setting used by the extension).

## Main files
- `extension.js`: provider for Semantic Tokens and language registration.
- `syntaxes/GMAD.tmLanguage.json`: TextMate grammar for GMAD syntax.
- `language-configuration.json`: language configuration (comments, brackets, etc.).

## Requirements
- VS Code 1.120.0 or higher (probably lower but didn't test for it).

## Known issues
- The semantic provider uses a simple heuristic (basic line-by-line parsing). May not recognize complex declarations or multiple scopes.

## Contribute
Open an issue or pull request if you want to improve the grammar, semantic provider or add tests.

---
Thanks for using the extension — let me know if you want me to add testing instructions or more detailed examples.