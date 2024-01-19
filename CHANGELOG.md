# Change Log

All notable changes to this project will be documented in this file.

The project adheres to [Semantic Versioning](https://semver.org/).

## [1.0.0] - 2024-01-20

### Added

- **Automatic URL Detection**: The plugin can now automatically identify and extract all external URL links in the opened file.
- **Local Resource Download**: Implemented a feature to download identified URL resources to the project's `assets` folder.
- **Intelligent Path Replacement**: The plugin automatically replaces original URLs with local paths conforming to the ES6 module standard.
- **Webpack Compatibility**: Ensured that the plugin supports modern JavaScript module bundlers like Webpack, ensuring correct path resolution.
- **Context Menu Integration**: Added a new option in the context menu to allow users to easily select “UrlAssets To Local” for processing files.
- **User Interface Improvements**: Updated the plugin's user interface for enhanced user experience and ease of use.
- **Performance Optimization**: Code structure and performance have been optimized for better efficiency and reliability.
