## 使用到的插件

1. A-super-comprehensive
2. Auto Rename Tag
3. Chinese
4. Debugger for Chrome
5. ESLint
6. JS-CSS-HTML Formatter
7. koroFileHeader
8. language-stylus
9. nopen in browser
10. Path Intellisecse
11. Prettier-Code formatter
12. Vetur
13. vscode-icons-mac

## setting.json

```
"php.validate.executablePath": "D:\\Xampp\\php\\php.exe",
	"window.zoomLevel": 0,
	"javascript.updateImportsOnFileMove.enabled": "always",
	"explorer.confirmDelete": false,
	"workbench.sideBar.location": "left",
	"workbench.iconTheme": "vscode-icons-mac",
	"npm.enableScriptExplorer": true,
	"open-in-browser.default": "chrome",
	"editor.multiCursorModifier": "ctrlCmd",
	/*
   * terminal
   *
   * cmd - 系统终端
   * bash - git bash
   */
	// "terminal.integrated.shell.windows": "D:\\Git\\Git\\bin\\bash.exe",
	"terminal.integrated.shell.windows": "D:\\Git\\Git\\bin\\bash.exe",
	"[html]": {
		"editor.defaultFormatter": "vscode.html-language-features"
	},
	"[css]": {
		"editor.defaultFormatter": "lonefy.vscode-JS-CSS-HTML-formatter"
	},
	"[javascript]": {
		"editor.defaultFormatter": "lonefy.vscode-JS-CSS-HTML-formatter"
	},
	// 头部文件注释
	"fileheader.customMade": {
		"Description": "",
		"Author": "曹冠雄",
		"Date": "",
		"LastEditTime": "",
	},
	// 自动添加文件头部注释(可选项)
	"fileheader.configObj": {
		"autoAdd": false // 将该选项设置为true即可开启
	},
	// "editor.formatOnPaste": true,
	// "editor.formatOnSave": true,
	// eslint
	"eslint.validate": [
		{
			"language": "vue",
			"autoFix": true
		},
		{
			"language": "html",
			"autoFix": true
		},
		{
			"language": "javascript",
			"autoFix": true
		}
	],
	// 使用 js-beautify-html 插件格式化 html
	"vetur.format.defaultFormatter.html": "js-beautify-html",
	// 格式化插件的配置
	"vetur.format.defaultFormatterOptions": {
		// 对 vue 文件的 js 部分进行格式化限制
		"prettier": {
			"printWidth": 150,
			"wrapAttributes": true
		},
		"js-beautify-html": {
			"wrap_line_length": 150,
			// auto,force,force-aligned,force-expand-multiline,aligned-multiple,preserve,preserve-aligned
			// "wrap_attributes": "force-expand-multiline", //特性换行
			"wrap_attributes": "preserve", //结束标签
			"end_with_newline": true
		}
	},
	"[markdown]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	},
	"[json]": {
		"editor.defaultFormatter": "vscode.json-language-features"
	}
```
