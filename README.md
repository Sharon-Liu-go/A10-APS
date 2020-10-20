# 會員登入頁面
輸入帳密，檢查是否為會員，是則登入會員頁面，否則通知帳密錯誤。

## 功能
使用者可以在首頁輸入:<br />
帳號<br />
密碼<br />
按下sign in <br />
若檢查為會員 => 進入會員頁面<br />
非會員則回到守業並告知帳密錯入，請再輸入一遍。<br/>


## 開發環境 <br />
Node.js: v10.15.0 <br />
Express: 4.17.1<br />
Express-handlebars: 5.1.0<br />
Visual Studio Code<br />
Mongo DB<br />

## 安裝與執行步驟
使用 git clone 複製專案到本機端<br />
在你電腦的terminal輸入以下指令: 看到done表示成功<br />

```
git clone https://github.com/Sharon-Liu-go/dine-remote.git
```

至存放檔案路徑下，安裝npm及nodemon套件:
```
npm install
```
```
npm install -g nodemon //若電腦已安裝nodemon為全域則不用
```

開啟 
```
nodemon app.js 或 nodemon dev 或 npm run dev
```
顯示 `http://localhost:3000` 後複製貼上至網頁

備註: 如果要匯入種子資料
```
npm run seed
```
然後再執行開啟
```
nodemon app.js 或 nodemon dev 或 npm run dev
```