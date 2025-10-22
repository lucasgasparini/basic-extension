# basic-extension

A minimal browser extension developed locally for learning.

This extension blurs text blocks on the page

## Development

<!-- - Run a local build/watch (if using a bundler):
  ```bash
  npm run build -- --watch
  ``` -->

- Load the extension in your browser:

  - Open chrome://extensions (or about:debugging in Firefox)
    - Enable "Developer mode"
    - Click "Load unpacked" and select the extension's root directory (where manifest.json lives)

  ## Usage

  - Open the extension by clicking on it in your browsers navigation bar
  - Type in the text you wanna blur
  - Turn the switch on and reload the page if necessary
  - The word informed and the block of text it's in will be blurred

  ## Project structure (example)

  - manifest.json — extension manifest
  - src/
  - background.js — background script
  - content.js — content script
  - popup.html / popup.js — popup UI

- dist/ — build output
