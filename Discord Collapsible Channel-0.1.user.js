// ==UserScript==
// @name         Discord Collapsible Channel
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Discord
// @author       You
// @match        https://discord.com/*
// @grant        GM_addStyle
// @updateURL https://raw.githubusercontent.com/Tempmist/Collapse-Discord/refs/heads/main/Discord%20Collapsible%20Channel-0.1.user.js
// @downloadURL https://raw.githubusercontent.com/Tempmist/Collapse-Discord/refs/heads/main/Discord%20Collapsible%20Channel-0.1.user.js
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
 [aria-label="Servers sidebar"] {
  width: 16px !important;
	transition: width 0.3s !important;
}
[aria-label="Servers sidebar"]:hover {
	        width:70px !important
    `;

  // Injecting the custom CSS into the page
  GM_addStyle(customCSS);
})();
