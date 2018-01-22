# onlineticket.js
A node.js CLI for reading barcodes on public transport tickets (e.g. Deutsche Bahn). It's a command line wrapper for my [uic-918-3 package](https://github.com/justusjonas74/uic-918-3).

## Usage
```bash
# filename.png is a monchrome 1-bit barcode image.
onlineticket readFile filename.png
# Alias
onlineticket f filename.png
```
