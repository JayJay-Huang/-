# NPM: Node Package Manager
node 套件管理員。

# NPM 指令稿:

## script 欄位
可以用來輸入 npm 指令。

ex:
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "node index.js",
    "app": "node app.js"
  },

> 當cmd 輸入「npm run app」等於 scripts 內預設的 "node app.js"。

## 檢視所有nmp指令碼: npm run

# 常用指令
## 安裝: npm install <moudle name>
## 全域安裝: npm install <moudle name> -g
## 本機安裝: npm install <moudle name>
local安裝會在 ./moudle下，global安裝會在 user/local 或 Node.js安裝目錄下(可以直接在命令列裡使用)。

## 開發模組: npm install <moudle name> --save-dev