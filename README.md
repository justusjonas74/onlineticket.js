# onlineticket.js
A node.js CLI for reading barcodes on public transport tickets (e.g. Deutsche Bahn). It's a command line wrapper for my [uic-918-3 package](https://github.com/justusjonas74/uic-918-3). Check out this repository for more informations about the parsing logic etc.

This tool is a JavaScript port of Hagen Fritzsch's Python script  [onlineticket](https://github.com/rumpeltux/onlineticket/).


## Install
```bash
# Install global is recommended
npm install -g onlineticket
```

## Usage
```bash
# filename.png is a monchrome 1-bit barcode image.
onlineticket --image path/to/file/filename.png
# Alias
onlineticket -i path/to/file/filename.png
```

## Contributing
Feel free to contribute.
