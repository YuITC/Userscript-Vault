// ==UserScript==
// @name         Gemini Full Width Chat
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Expand toàn bộ khung chat Gemini
// @match        https://gemini.google.com/*
// @match        https://gemini.google.com/app/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    GM_addStyle(`
        /* Wrapper chính */
        main,
        main > div,
        main > div > div {
            width: 100% !important;
            max-width: 100% !important;
        }

        /* Gemini responses */
        .conversation-container {
            width: 100% !important;
            max-width: 100% !important;
        }

        /* User messages */
        user-query,
        user-query > div,
        user-query > div > div {
            width: 100% !important;
            max-width: 100% !important;
        }

        /* Model responses */
        model-response,
        model-response > div,
        model-response > div > div {
            width: 100% !important;
            max-width: 100% !important;
        }

        /* Composer / input */
        .text-input-field_textarea-wrapper,
        .text-input-field_textarea,
        textarea {
            max-width: 100% !important;
            width: 100% !important;
        }
    `);

    function expandChat() {

        // Gemini message blocks
        document.querySelectorAll('.conversation-container')
            .forEach(el => {
                el.style.maxWidth = '100%';
                el.style.width = '100%';
            });

        // User queries
        document.querySelectorAll('user-query, user-query > div, user-query > div > div')
            .forEach(el => {
                el.style.maxWidth = '100%';
                el.style.width = '100%';
            });

        // Model responses
        document.querySelectorAll('model-response, model-response > div, model-response > div > div')
            .forEach(el => {
                el.style.maxWidth = '100%';
                el.style.width = '100%';
            });

        // Main wrappers
        document.querySelectorAll('main, main > div, main > div > div')
            .forEach(el => {
                el.style.maxWidth = '100%';
                el.style.width = '100%';
            });
    }

    // Initial apply
    expandChat();

    // Re-apply when Gemini rerenders DOM
    const observer = new MutationObserver(() => {
        expandChat();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();
