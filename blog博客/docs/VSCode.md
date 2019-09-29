# VSCode

VSCode 是微软推出的一款轻量级的文本编辑器，采取了和 VS 相同的 UI 界面，搭配合适的插件可以优化前端开发的体验。

VSCode 智能感知、内建调试工具、Git 源码控制集成。智能感知提供了程序间调用跳转的功能，VS Code 先为代码创建概要，找到所有引用，最后跳转到相应定义。

调试工具包含常见的断点、单步调试、变量检查等功能。VS Code 架构设计非常出色，无须修改应用就可以增加额外的语言支持。

## 特点

- 跨平台，支持 Windows 7/8/10、Linux、MacOS
- 支持 JavaScrip、C#、C++、Python、PHP、Markdown 等多种编程语言
- 支持语法高亮、智能代码补全、代码片段、代码对比等等
- 支持 GIT 版本管理
- 支持并排编辑
- 支持代码调试
- 支持第三方扩展

## 主页面布局

- 左侧栏：展示所要编辑的所有文件和文件夹的文件管理器，依次是`资源管理器`，`搜索`，`GIT`，`调试`，`插件`
- 右侧：打开文件的编辑区域，最多可同时打开三个编辑区域到侧边。
- 底栏：依次是`Git Branch`，`error&warning`，`编码格式`等。

## 常用插件

（参考地址：[http://blog.csdn.net/u011127019/article/details/53158660](http://blog.csdn.net/u011127019/article/details/53158660)）安装插件，只需点击插件的安装按钮，安装完成后重启 vscode 即可启用插件。

1. `HTML CSS Support`：让 html 标签上写 class 智能提示当前项目所支持的样式
2. `Debugger for Chrome`：让 vscode 映射 chrome 的 debug 功能，静态页面都可以用 vscode 来打断点调试
3. `Path Intellisense`：自动路径补全、默认不带这个功能
4. `Document this`：js 注释模板
5. `Atuo Rename Tag`：修改 html 标签，自动帮你完成尾部闭合标签的同步修改，和 webstorm 一样。
6. `Bootstarp 3 Sinnpet`： 支持 bootstarp
7. `Typings Installer`：安装 vscode 的代码提示依赖库，基于 typtings 的，比如提示 angular 或者 jQuery。
8. `ESLint`：ESlint 接管原生 js 提示，可以自定制体会规则。
9. `C#、C# Extensions`：对 C#的支持
10. `HTML Snippets`：超级实用且初级的 H5 代码片段以及提示
11. `JQuery Code Snippets`：jquery 提示工具
12. `vscode-icon`：让 vscode 资源目录加上图标

## 调试配置

```js
{
    "version": "0.2.0",
    "configurations": [{
    "name": "nodeLauch", //单独调试 js
    "type": "node",
    "request": "launch",
    // "program": "${workspaceRoot}/1.js",//这个配置成你要调试的文件、${file}当前打开的文件
    "program": "${workspaceRoot}/MY-Project\\js\\common\\tag\\tagHome.js"
},
{
    "name": "Launch Chrome and new instance of Chrome",
    "type": "chrome",
    "request": "launch",
    // "file": "${workspaceRoot}/My-WebAPP.WebAPI\\index.html",
    "url": "http://localhost:60180/login.html", //使用外部服务器时,请注释掉 file, 改用 url,
    "sourceMaps": true,
    // "webRoot": "E:\\MY-Project\\My-WebAPP.WebAPI"
    "webRoot": "${workspaceRoot}"
},
{
    "name": "Attach to Chrome",
    "type": "chrome",
    "request": "attach",
    "port": 9222,
    "sourceMaps": true,
    "webRoot": "${workspaceRoot}"
},
{
    // 启动后端服务
    {
      "type": "node",
      "request": "launch",
      "name": "Sth",
      "program": "${workspaceFolder}\\server\\app.js"
    }
}
```

## 常用功能

1. 分栏显示，最多三个
2. 调试方式：逐过程、逐语句都与 vs 相同
3. 注释、取消注释：Ctrl+/
4. 代码格式化：Shift+Alt+F
5. 转到定义：F12
6. 查找所有引用：shift+F12（vs 环境下 js 文件没有该功能）
7. 新建 HTML 文件：第一行输入“！”，将光标移动到“！”后按下 tab 键
8. 编辑 HTML 文件：直接输入标签名即可生成标签
