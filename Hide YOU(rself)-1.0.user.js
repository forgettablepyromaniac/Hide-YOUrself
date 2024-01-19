// ==UserScript==
// @name         Hide YOU(rself)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Hides the "You >" in the youtube sidebar. Works well with "https://openuserjs.org/scripts/cuzi/Youtube_-_Hide_default_playlists"
// @author       Terra
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function hideAnnoyingElement() {
        const intervalId = setInterval(() => {
            const elementToHide = document.querySelector('#header-entry > a:nth-child(1) > tp-yt-paper-item:nth-child(1)');
            if (elementToHide) {
                const parentElement = elementToHide.parentElement;
                if (parentElement) {
                    parentElement.style.display = "none";
                    clearInterval(intervalId); // Stop checking once the element is hidden
                }
            }
        }, 1000); // Check every second
    }
    hideAnnoyingElement();
})();