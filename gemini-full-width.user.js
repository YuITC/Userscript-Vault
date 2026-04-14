// ==UserScript==
// @name         Gemini Full Width UI
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Expands the width of the chat interface in Google Gemini safely.
// @author       Tai Nguyen Phu
// @match        https://gemini.google.com/*
// @updateURL    https://raw.githubusercontent.com/YuITC/Userscript-Vault/refs/heads/Main/gemini-full-width.user.js
// @downloadURL  https://raw.githubusercontent.com/YuITC/Userscript-Vault/refs/heads/Main/gemini-full-width.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addStyle(css) {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    }

    const customCSS = `
        /* 1. Unlock the parent wrapper to 100% so the scrollbar sticks to the right edge */
        main > div > div,
        [class*="conversation-container"],
        [class*="bottom-container"] {
            max-width: 100% !important;
        }

        /* 2. Expand chat bubbles and input form to 90% and center them horizontally */
        model-response,
        user-query,
        .message-content,
        [class*="message-container"],
        [class*="input-area"],
        main form {
            max-width: 90% !important;
            width: 100% !important;
            margin-left: auto !important;
            margin-right: auto !important;
        }

        /* 3. Ensure Code blocks and Markdown content stretch to fill the 90% container */
        markdown-content,
        code-block,
        [class*="code-block"],
        pre {
            max-width: 100% !important;
            width: 100% !important;
        }

        /* 4. Completely fix Tables AND their invisible wrapper divs */
        markdown-content table,
        markdown-content div:has(table),
        [class*="table"] {
            max-width: 100% !important;
            width: 100% !important;
        }

        /* Fix basic table display issues */
        .markdown table {
            display: table !important;
        }
    `;

    addStyle(customCSS);
})();
