!function(){var t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};console.log(t.btnStart),t.btnStart.addEventListener("click",(function(a){n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),t.btnStart.disabled=!0,t.btnStop.disabled=!1}),1e3)})),t.btnStop.addEventListener("click",(function(a){clearInterval(n),t.btnStart.disabled=!1,t.btnStop.disabled=!0}));var n=null}();
//# sourceMappingURL=01-color-switcher.80deed37.js.map