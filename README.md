# Url Assets To Local

This Visual Studio Code plugin is designed for modern front-end development, automatically downloading external URL resources such as images, stylesheets, or script files to local, and replacing them with ES6 module-based local references. This enhances development efficiency and optimizes resource management.

[中文](README_CN.md) | [English](README.md)

## Features

- **Automatic URL Detection**: Automatically identifies and extracts all external URL links in the opened file.
- **Local Resource Download**: Downloads identified URL resources to the project’s `assets` folder.
- **Intelligent Path Replacement**: Automatically replaces original URLs with local paths conforming to the ES6 module standard.
- **Webpack Compatibility**: Ensures correct path resolution with modern JavaScript module bundlers like Webpack.

## Usage Guide

1. **Install the Plugin**: Search and install this plugin through the Visual Studio Code Extension Marketplace.
2. **Prepare the File**: Open the JavaScript or TypeScript file you need to process in VS Code.
3. **Simple Operation**: Right-click in the editor and choose “UrlAssets To Local”.
4. **Automated Processing**: The plugin processes all URLs in the file, downloads resources, and completes path replacement.

## Scope and Notes

- The plugin is **only applicable to JavaScript and TypeScript files following the ES6 module standard**.
- Ensure that the URLs you process are from trusted sources to avoid security risks.
- All resources will be downloaded to the `assets` folder in the same directory as the current file.

## How to Contribute

Feel free to report issues or submit improvement suggestions on our [GitHub repository](https://github.com/leesama/url-assets-to-local).

## Open Source License

This project is under the [MIT License](LICENSE), encouraging free use and sharing.

---

**Enjoy!** 🚀

**Url Assets To Local** is meticulously developed by [leesama](https://github.com/leesama/url-assets-to-local) and is open-sourced under the MIT license. If you find this plugin helpful, please give us a star on the [GitHub repository](https://github.com/leesama/url-assets-to-local) to show your support!
