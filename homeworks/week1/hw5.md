## 請解釋後端與前端的差異。
>### 前端是什麼  

前端簡單來說就是網頁使用者看得到的部分，例如你打開Google首頁，你會看到搜尋框、Google logo、上排的按鈕，在搜尋框輸入你要查的關鍵字後，網頁會呈現結果給使用者，這段過程中使用者看到的都是前端，前端會將資料呈現給使用者，讓使用者以圖像化的方式使用網頁，前端包含網頁和 APP。

>###  後端是什麼  

後端是指使用者看不到的背後運行處理和執行資料的部分，例如你在google搜尋框輸入你要查的關鍵字後，此時後端收到 request 會透過 sever 到 Database 抓取資料，最後再將資料傳回Goolge頁面。

>###  前後端差異    

![](https://ithelp.ithome.com.tw/upload/images/20200420/20124548MtMDOLDe86.png)
圖來源https://ithelp.ithome.com.tw/articles/10231011  

透過上方的圖能很明顯知道前後端的差異，前端透過硬體、作業系統、瀏覽器和網路卡發出 request ， 接著後端 sever 跟 database 溝通，最後將資料回傳 response 給瀏覽器。


## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

Google 首頁瀏覽器會先向 DNS server 取的 IP 位置，接著會向此 IP 的 server 發 request，server 連結 database 找尋符合 JavaScript 的相關資料，最後回傳 response 至載具瀏覽器頁面上。


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

1. chmod，修改檔案目錄權限  
權限的數值分為 3 組，分別是 owner，群組用戶，其他用戶，這 3 組權限可以用數字或者英文字代號設定，以下是各數字及字母伐號的意思，例如輸入`chmod 755 test.md`，表示設定 test.md 的權限為 owner 可讀寫執行，群組用戶及其他用戶不能寫只能讀和執行。

~~~
r: 可讀權限, 數字是 4
w: 寫入權限, 數字是 2
x: 執行權限, 數字是 1
-: 刪除權限, 數字是 0
s: setuid 權限
~~~

2. less <file>，將檔案內容以分頁顯示在 terminal
3. head <file>，顯示前十行












