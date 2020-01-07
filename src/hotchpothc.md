# App.js에 연습했던 code


내가 건드린 settings

> snippet suggestion
> word based suggestion

## JSX Expressionsno 1
/*
(
   <div className="App">
   <h1>The App Component</h1>
   </div>

   );
   */
  // 위의 html code를 react로 바꾸면 아래처럼 복잡해 진다. 그러므로 jsx(JavaScriptXml)를 쓰는 것이다.
/* React.createElement(
   'div',
   { className: 'App' },
   React.createElement('h1', null, 'The App Component')
) 
*/

## JSX Expressions no 2
/*       const name = "Larry";
      const showHello = true;
      const showMath = true;
      const num1 = 40;
      const num2 = 23;

      let math;
      if (showMath) {
         math = (  // 괄호
            <h4>
               {num1} + {num2} = {num1 + num2}
            </h4>
         ) // 줄바꿈을 할때는 괄호 속에 넣고 한줄 일때는 안 넣어도 된다.?
      } else {
         math = null;
      }
*/


jsx 되는 global setting.json

``` json
{
    "window.zoomLevel": 1,
    "markdown-preview-enhanced.mermaidTheme": "forest",
    "markdown.preview.fontFamily": "'Nanum Gothic', 'sans-serif', 'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe WPC', 'Segoe UI', 'Droid Sans' ",
    "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
    "debug.console.fontFamily": "'Fira Code'",
    "terminal.integrated.fontFamily": "'Fira Code'",
    "editor.minimap.enabled": true,
    "editor.renderWhitespace": "none",
    "files.autoSave": "afterDelay",
    "editor.fontSize": 16,
    "editor.fontFamily": "'Fira Code', Consolas, 'Courier New', monospace",
    "editor.detectIndentation": false,
    "editor.wordWrap": "bounded",
    "[markdown]": {
        "editor.wordWrap": "on",
        "editor.quickSuggestions": true,
    },

    "editor.tokenColorCustomizations": {
        "[New Moon]": {
            "comments": "#1c991c", // comment
            "types": "#3c99b6", // css properties
            "keywords": "#c488fd", // @import 
            "numbers": "#e72e0e", // number
            "functions": "#3499db", // import 'url',
            "strings": "#eca92ec0", // html attributes
            "variables": "#dbca8f", // JS fucntion, if else 등.
        }
    },
    "workbench.colorCustomizations": {
        // explorer list
      "list.activeSelectionBackground": "#ff4800",
        "list.activeSelectionForeground": "#ffffff", 
        // foreGround 
        "foreground": "#ffffff", // overall 글자색
        "tab.activeForeground": "#e2e2e2",
        "dropdown.Fforeground": "#ffffff",
        "descriptionForeground": "#cfbaba", // welcome화면 일반 글씨
        "sideBarSectionHeader.foreground": "#ffffff",
        "focusBorder": "#9fff9c79", // NOTE: sideBar의 파일의 rename 등을 하려고 선택했을 때.
        // border 
        "tab.activeBorder": "#09ff00",
        "dropdown.border": "#00d9ff",
        "textLink.activeForeground": "#4c00ff",
        "activityBar.border": "#8b8888", // Activity Bar border color with the Side Bar.
        "tab.hoverBorder": "#4fdafdce",
        "tab.unfocusedActiveBorder": "#c98d8d",
        "editor.wordHighlightBackground": "#a793939d",
        "tab.unfocusedHoverBackground": "#4fdafdce",
        // selection 
        "selection.background": "#a8931a", // NOTE: sideBar의 파일의 rename 등을 하려고 선택할 때.
        "editor.selectionHighlightBackground": "#69ac5b97",
        "editor.selectionHighlightBorder": "#23a79cb2",
        "editorCursor.background": "#ff0000",

        "editor.selectionBackground": "#72e92d72",
        // widget 
        "widget.shadow": "#119db6", // ctrl + f, ctrl + h 등을 했을 때 나오는 widget 박스 그림자.
        "editorSuggestWidget.selectedBackground": "#746e30a1",
        // background 
        "editor.lineHighlightBackground": "#a8a15c41",
        "editor.lineHighlightBorder": "#c44a1a52",
        "textBlockQuote.background": "#dfac4d69",
        "textBlockQuote.border": "#48e948e5",
        "tab.activeBackground": "#119db6",
        "dropdown.background": "#2396aa",
        "dropdown.listBackground": "#119db6c0",
        "sideBarSectionHeader.background": "#4f8115",
        // sideBar 제목 표시줄
        "editor.background": "#333333",
        // sideBar 
        "sideBar.background": "#4b4b4bbb",
        "sideBar.dropBackground": "#ff0000",
        // editor group
        "editorBracketMatch.background": "#acd1345d", // Background color behind matching brackets.
        "editorBracketMatch.border": "#b46c9f5d",
        //Color for matching brackets boxes.
        "editorGroup.dropBackground": "#4fdafdce",
        "editorGroupHeader.tabsBackground": "#555555",
        // terminal
        "terminal.border": "#ff0000",
        "terminal.background": "#464646",
        //list - 왼쪽 탐색 창 목록 관련
        "list.hoverForeground": "#ffffff",
        "list.hoverBackground": "#119db667",
        // 선택된 항목에서 focus가 빠졌을 때, 선택은 유지되며 바뀔 색깔 지정.
        "list.inactiveSelectionForeground": "#00d9ff",
        // Main menu Bar - 인터페이스 상단메뉴 관련
        "menubar.selectionForeground": "#eeeeee", //Foreground color of the selected menu item in the menubar.
        "menubar.selectionBackground": "#4fdafdce", //Background color of the selected menu item in the menubar.
        "menubar.selectionBorder": "#4fdafdce", //Border color of the selected menu item in the menubar.
        // dropdown 되어 나타나는 메뉴에 관한...
        "menu.foreground": "#ffffff", //Foreground color of menu items.
        "menu.background": "#119db6", //Background color of menu items.
        "menu.selectionForeground": "#ffffff", //Foreground color of the selected menu item in menus.
        "menu.selectionBackground": "#0c788b", //Background color of the selected menu item in menus.
        "menu.selectionBorder": "#0c788b", //Border color of the selected menu item in menus.
        "menu.separatorBackground": "#ff0000", //Color of a separator menu item in menus.
        "scrollbar.shadow": "#ce474775", //Scrollbar slider shadow to indicate that the view is scrolled.
        "scrollbarSlider.activeBackground": "#ff910060", //Scrollbar slider background color when clicked on.
        "scrollbarSlider.background": "#1fbbae67", //Scrollbar slider background color.
        "scrollbarSlider.hoverBackground": "#d67a12ad", //Scrollbar slider background color when hovering.   
        "progressBar.background": "#ff0000"
        //Background color of the progress bar shown for long running operations. 
    },
    //"sync.gist": "f94339cb7ca018162b50150cf0c1a360",
    //"sync.quietSync": true,
    "editor.mouseWheelZoom": true,
    //"browser-preview.startUrl": "https://www.w3.org/TR/html5-diff/",
    //"browser-preview.verbose": true,
    //"browser-preview.chromeExecutable": "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    //"favorites.storageRegistry": [],
    //"browser-preview.format": "png",
    "liveServer.settings.donotVerifyTags": true,
    "markdown-preview-enhanced.codeBlockTheme": "monokai.css",
    "workbench.colorTheme": "New Moon",
    "files.autoGuessEncoding": true,
    "files.defaultLanguage": "html",
    "liveServer.settings.port": 5500,
    "liveServer.settings.CustomBrowser": "chrome",
    "liveServer.settings.fullReload": true,
    "liveServer.settings.useLocalIp": true,
    "editor.cursorSmoothCaretAnimation": true,
    "terminal.integrated.cursorStyle": "line",
    "terminal.integrated.cursorBlinking": true,
    "editor.acceptSuggestionOnEnter": "smart",
    "diffEditor.ignoreTrimWhitespace": false,
    "editor.find.autoFindInSelection": "always",
    "editor.formatOnPaste": true,
    "markdown.preview.fontSize": 16,
    //"emmet.triggerExpansionOnTab": true,
    //"emmet.extensionsPath": "",
    //"workbench.settings.useSplitJSON": true,
    //"editor.renderControlCharacters": true,
    //"emmet.showSuggestionsAsSnippets": true,
    "editor.suggestFontSize": 14,
    "emmet.includeLanguages": {
       "javascript": "javascriptreact"
    },
    "emmet.syntaxProfiles": {
       "javascript": "jsx",
       "nunjucks": "html"
       // "javascriptreact": "jsx",
    },
    "[jsonc]": {
        "editor.defaultFormatter": "HookyQR.beautify"
    },
    "editor.formatOnType": true,
    "[scss]": {
        "editor.defaultFormatter": "HookyQR.beautify"
    },
    "[html]": {
        "editor.defaultFormatter": "HookyQR.beautify"
   },
   "html.format.endWithNewline": true,
    "editor.tabCompletion": "on",
    "search.quickOpen.includeSymbols": true,
    "browser-preview.startUrl": "",
    "workbench.activityBar.visible": true,
    "sasslint.trace.server": "messages",
   "vsicons.dontShowNewVersionMessage": true,
    "browser-preview.format": "png",
    /* "editor.quickSuggestions": {
        "other": true,
        "comments": false,
        "strings": false
    }, */
    "emmet.triggerExpansionOnTab": true,
    "editor.tabSize": 3,
    "workbench.iconTheme": "vscode-icons",
    "liveSassCompile.settings.excludeList": [
      "**/node_modules/**",
      ".vscode/**",
    ],
        "liveSassCompile.settings.formats": [
          {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "~/../css"
          }
      ],
      "liveSassCompile.settings.generateMap": false,
      "git.allowForcePush": true,
      "git.enableSmartCommit": true,
      "liveSassCompile.settings.showOutputWindow": false,
      "editor.minimap.showSlider": "always",
      "explorer.incrementalNaming": "smart",
      "[javascript]": {
         "editor.defaultFormatter": "vscode.typescript-language-features"
      },
      "workbench.settings.useSplitJSON": true,
      "editor.fontLigatures": true,
      "typescript.format.insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces": true,
      "typescript.locale": "ko",
      "typescript.tsserver.trace": "messages",
      "typescript.tsc.autoDetect": "watch",
      "npm.enableRunFromFolder": true,
      "npm.enableScriptExplorer": true,
      "typescript.npm": "E:\\Users\\Administrator\\AppData\\Roaming\\npm",
      "liveServer.settings.donotShowInfoMsg": true,
      "jshint.lintHTML": true,
      "jshint.trace.server": "messages",
      "editor.snippetSuggestions": "top",
      "editor.suggest.localityBonus": true,
      
        
}
```



