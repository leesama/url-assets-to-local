# Url Assets To Local

这个 Visual Studio Code 插件专为现代前端开发设计，可以自动将代码中的外部 URL 资源（如图片、样式表或脚本文件）下载到本地，并替换为 ES6 模块化的本地引用，从而提高开发效率并优化资源管理。

[中文](README_CN.md) | [English](README.md)

## 功能特点

- **自动识别 URL**: 自动识别并提取打开文件中的所有外部 URL 链接。
- **资源本地下载**: 将识别的 URL 资源下载到项目的 `assets` 文件夹。
- **智能路径替换**: 自动将原始 URL 替换为符合 ES6 模块化标准的本地路径。
- **Webpack 兼容**: 支持 Webpack 等现代 JavaScript 模块打包工具，确保路径正确解析。

## 使用指南

1. **安装插件**: 通过 Visual Studio Code 扩展市场搜索并安装此插件。
2. **准备文件**: 在 VS Code 中打开需要处理的 JavaScript 或 TypeScript 文件。
3. **简单操作**: 在编辑器内右键点击并选择 “UrlAssets To Local”。
4. **自动处理**: 插件会处理文件中的所有 URL，下载资源并完成路径替换。

## 适用范围与注意事项

- 插件**仅适用于遵循 ES6 模块化标准**的 JavaScript 和 TypeScript 文件。
- 请确保处理的 URL 来源可信，以避免安全风险。
- 所有资源将被下载到与当前文件同级目录下的 `assets` 文件夹。

## 如何贡献

欢迎在我们的 [GitHub 仓库](https://github.com/leesama/url-assets-to-local) 上报告问题或提交改进建议。

## 开源许可

本项目采用 [MIT 许可协议](LICENSE)，鼓励自由使用和分享。

---

**尽情享用！** 🚀

**Url Assets To Local** 由 [leesama](https://github.com/leesama/url-assets-to-local) 精心打造，并遵循 MIT 许可协议开源。如果您觉得这个插件对您有帮助，请在 [GitHub 仓库](https://github.com/leesama/url-assets-to-local) 上给我们一个星星以示支持！
