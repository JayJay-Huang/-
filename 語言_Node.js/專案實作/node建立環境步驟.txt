--- 前置
>查看版本 : ● node –v
>查看npm : ● npm -v
>查看express : ● express –v
>下載node安裝檔

--- node
>建立package.json : ● npm init
>建立一個 index.js檔案
>Express 安裝至工作目錄 : ● npm install express --save
>安裝 nodemon : ● npm install nodemon -g --save

--- Db
>建立mssql模組 : ● npm install mssql --save
>Tedious模組 : ● npm install tedious --save
>firebase模組 : ● npm install firebase --save (未裝)

--- API
>node-fetch模組 : ● npm install node-fetch --save
>body-parser模組 : ● npm install body-parser --save (未裝)

--- 離線安裝
>執行 ng new 的時候，明確指定不要執行 npm install 的選項。( --skip-install )
● ng new ng-npm-cache --skip-install --skip-git
>進入暫時的 ng-npm-cache 目錄
● cd ng-npm-cache
>明確指定 --online 可以確保你不會抓到舊的離線快取套件。
加上 --cache 參數則是讓你指定「離線快取的 npm 套件」要放在哪個資料夾。
● npm install --online --cache = D:\npm-cache
>在安裝完成之後，將上述的 ng-npm-cache 目錄砍掉。
然後將 D:\npm-cache 壓縮起來，帶到公司的電腦，隨便解壓縮到任意目錄中。

--- API SSL
CA server
>Let's Encrypt
>OpenSSL : 製作憑證
(http://gnuwin32.sourceforge.net/packages/openssl.htm)
