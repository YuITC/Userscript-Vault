// ==UserScript==
// @name         Gemini Full Width UI
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Expands the width of the chat interface in Google Gemini for larger screens.
// @author       Tai Nguyen Phu
// @match        https://gemini.google.com/*
// @updateURL    https://raw.githubusercontent.com/YuITC/Userscript-Vault/Main/gemini-full-width.user.js
// @downloadURL  https://raw.githubusercontent.com/YuITC/Userscript-Vault/Main/gemini-full-width.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to inject CSS into the page
    function addStyle(css) {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.appendChild(document.createTextNode(css));
        document.head.appendChild(style);
    }

    // Override max-width properties
    // Gemini typically limits the chat width to around 800px.
    // You can adjust the 90% below to 100% or a specific pixel value (e.g., 1200px) based on your preference.
    const customCSS = `
        /* Expand main chat containers */
        main > div > div,
        .message-content,
        [class*="message-container"],
        [class*="conversation-container"],
        chat-app,
        model-response,
        user-query {
            max-width: 90% !important;
            width: 100% !important;
        }
    `;

    // Execute the function
    addStyle(customCSS);
})();
