const vscode = require('vscode');

const legend = new vscode.SemanticTokensLegend(['gmadVariable'], []);

const provider = {
  provideDocumentSemanticTokens(document) {
    const builder = new vscode.SemanticTokensBuilder(legend);

    // Passaggio 1: raccogli tutte le variabili dichiarate (sinistra di =)
    const declared = new Set();
    for (let i = 0; i < document.lineCount; i++) {
      const line = document.lineAt(i).text;
      const match = line.match(/^\s*([a-zA-Z_][a-zA-Z0-9_.]*)\s*=/);
      if (match) declared.add(match[1]);
    }

    // Passaggio 2: colora OGNI occorrenza delle variabili dichiarate
    for (let i = 0; i < document.lineCount; i++) {
      const text = document.lineAt(i).text;
      const regex = /\b([a-zA-Z_][a-zA-Z0-9_.]*)\b/g;
      let match;
      while ((match = regex.exec(text)) !== null) {
        if (declared.has(match[1])) {
          builder.push(i, match.index, match[1].length, 0);
        }
      }
    }

    return builder.build();
  }
};

function activate(context) {
    console.log('Congratulations, your extension "bdsim-language---gmad---syntax-highlighter" is now active!');
  context.subscriptions.push(
    vscode.languages.registerDocumentSemanticTokensProvider(
      { language: 'GMAD' },
      provider,
      legend
    )
  );
}

function deactivate() {}
module.exports = { activate, deactivate };