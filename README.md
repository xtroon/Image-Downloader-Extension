# Image Downloader Chrome Extension

A simple and elegant Chrome extension to download all images from any webpage with a single click.

## Features

- 🖼️ Displays all images found on the current page
- ⬇️ Download images individually with a single click
- 🎨 Modern, clean UI with purple gradient theme
- ⚡ Fast and lightweight
- 🔄 Filters duplicate image URLs automatically

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/image-downloader-extension.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable **Developer mode** (top right corner)

4. Click **Load unpacked** and select the project folder

5. The extension icon will appear in your Chrome toolbar

## Usage

1. Click the extension icon in your Chrome toolbar
2. The popup will show all images found on the current page
3. Hover over any image to reveal the download button
4. Click the download button to save the image

## File Structure

- `manifest.json` - Extension configuration
- `index.html` - Popup UI
- `style.css` - Styling
- `script.js` - Popup logic
- `content.js` - Content script for detecting images
- `background.js` - Background service worker
- `logo.svg` - Extension icon
- `download.svg` - Download button icon

## License

MIT License - feel free to use and modify

## Author

Image Downloader Extension
