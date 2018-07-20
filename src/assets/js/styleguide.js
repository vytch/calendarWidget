import highlight from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import Clipboard from 'clipboard/dist/clipboard.min.js';

highlight.initHighlightingOnLoad();

new Clipboard('.clipboard-button');
