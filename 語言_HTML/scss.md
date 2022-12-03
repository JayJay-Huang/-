

# CSS 預處理器 (CSS Preprocessor)
為了解決 css
    1. 全域樣式會# 互相干擾 (不易進行 debug，可維護性差)
    2. 重複撰寫相同樣式 (程式碼不易閱讀)
CSS Preprocessor 誕生

主流預處理器
    Sass/SCSS：最廣為開發者使用
    Less：原先是基於 Ruby 開發，後來改用 Node.js 為基底實作
    Stylus：基於 Node.js 開發

需注意: 
不管使用哪種 CSS 預處理器，
程式碼都必須先編譯（compiled）成 CSS 的形式，
才能讓瀏覽器解讀並呈現出畫面。

# 變數 Variables
以錢字號 $ 來宣告變數
通常會寫在程式碼最上方

```scss
$font-stack:  Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

編譯後 CSS
```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

# 巢狀結構 Nesting

https://hackmd.io/@Heidi-Liu/sass-css-preprocessor#%E5%B7%A2%E7%8B%80%E7%B5%90%E6%A7%8B-Nesting