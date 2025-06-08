// ==UserScript==
// @name         Discord Collapsible Channel
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Discord
// @author       You
// @match        https://discord.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
  "use strict";

  // Your custom CSS
  const customCSS = `

	div[class*='sidebarList']{
  width: 16px !important;
	transition: width 0.3s !important;
}
	div[class*='sidebarList']:hover {
	        width:240px !important;
	}
    `;

  // Injecting the custom CSS into the page
  GM_addStyle(customCSS);
})();
