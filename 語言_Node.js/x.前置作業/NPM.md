## NPM `使用介紹`

> 隨同NodeJS一起安裝的包 `管理工具`。

    npm -v // 檢查版本
    npm install npm -g // Win更新最新版本

---
## `查看command`

    npm help <command>

---

## `安裝modules`

    npm install <Module Name> // local
    npm install <Module Name> -g // global

> local : 安裝包在 `./node_modules`

> global : 

呼叫使用 : `require()`

    var <Module Name> = require('<Module Name>');

---

## `卸載moudles`

    npm uninstall <Module Name>

---
## `查看/更新moudles`

    npm ls -g  // 查看全域所有安裝
    npm ls  // 查看本地所有安裝
    npm search <Module Name>  // 查詢
    npm search <Module Name>  // 更新
    
