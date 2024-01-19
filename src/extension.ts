import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import axios from "axios";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "urlAssetsToLocal",
    async (uri: vscode.Uri) => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showWarningMessage("没有打开的编辑器。");
        return;
      }

      const document = editor.document;
      const fileContent = document.getText();
      const urls = extractUrls(fileContent);

      if (urls.length === 0) {
        vscode.window.showInformationMessage("没有找到可下载的URL资源。");
        return;
      }

      for (const url of urls) {
        try {
          const fileName = await downloadResource(url, uri.fsPath);
          await replaceUrlWithImportStatement(document, url, fileName);
        } catch (error) {
          vscode.window.showErrorMessage(`下载失败: ${url}`);
        }
      }

      vscode.window.showInformationMessage("所有URL资源已成功下载。");
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}

function extractUrls(fileContent: string): string[] {
  const urlRegex = /http[s]?:\/\/[^ \n"']+/g;
  return fileContent.match(urlRegex) || [];
}

async function downloadResource(
  url: string,
  filePath: string
): Promise<string> {
  const fileName = path.basename(url);
  const dirPath = path.join(path.dirname(filePath), "assets");

  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  const response = await axios.get(url, { responseType: "stream" });
  const writer = fs.createWriteStream(path.join(dirPath, fileName));

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", () => resolve(fileName));
    writer.on("error", reject);
  });
}
async function replaceUrlWithImportStatement(
  document: vscode.TextDocument,
  url: string,
  fileName: string
) {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }

  const moduleName = fileName.replace(/\.[^/.]+$/, ""); // 移除文件扩展名
  const importStatement = `import ${moduleName} from './assets/${fileName}';`;

  let text = document.getText();
  const regex = new RegExp(`['"\`]${url}['"\`]`, "g");

  // 检查import语句是否已存在
  if (!text.includes(importStatement)) {
    text = importStatement + "\n" + text;
  }

  text = text.replace(regex, moduleName);

  const fullRange = new vscode.Range(
    document.positionAt(0),
    document.positionAt(text.length)
  );

  await editor.edit((editBuilder) => {
    editBuilder.replace(fullRange, text);
  });
}
