# basic-extension

A minimal browser extension developed locally for learning.

<!-- ## Installation
1. Clone the repository:
    ```bash
    git clone <repo-url> basic-extension
    cd basic-extension
    ```
2. Install dependencies:
    ```bash
    npm install
    # or
    yarn
    ``` -->

## Development

- Run a local build/watch (if using a bundler):
  ```bash
  npm run build -- --watch
  ```
- Load the extension in your browser:
  - Open chrome://extensions (or about:debugging in Firefox)
  - Enable "Developer mode"
  - Click "Load unpacked" and select the extension's root directory (where manifest.json lives)

<!-- ## Usage
- Open the extension popup or use the configured keyboard shortcut.
- Check the extension background page or content script console for logs. -->

## Project structure (example)

- manifest.json — extension manifest
- src/
  - background.js — background script
  - content.js — content script
  - popup.html / popup.js — popup UI
- dist/ — build output

<!-- ## License -->
