import * as vscode from 'vscode'

import _passages from './passages.json'

const passages: { verses: string; passage: string }[] = _passages

export function activate(context: vscode.ExtensionContext) {
  const randomPassage = passages[Math.floor(Math.random() * passages.length)]
  vscode.window.showInformationMessage(`${randomPassage.passage} - ${randomPassage.verses}`)
}

export function deactivate() {}
