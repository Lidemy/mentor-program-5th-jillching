## 跟你朋友介紹 Git

>###  git是什麼

git是一種版本控制的工具，就像玩RPG遊戲時會儲存進度，以避免錯失寶物或闖關失敗，日常中你經常會創建、編輯、刪除各種檔案，可能個人作業也可能多人作業，這時候就需要在不同階段「儲存進度」來做版本控制，讓你或協作者能清楚知道哪個檔案被新增、哪些檔案被編輯或哪些檔案被刪除了，git就是一個很聰明的版本控制系統，幫助我們清楚發生了哪些事。

>###  菜哥的需求-管理笑話

1. 首先打開 command line 用`cd` 切換到要你要做版本控制的資料夾  
` jillsizuka➜~»cd /Users/jillsizuka/Desktop/TSAIJoke/ ` 
2. 確定切換到你要做版本控制的資料夾後輸入  
` git init `   
enter 後這個資料夾就能使用git相關指令
3. 首先菜哥新增了一個 joke.md ，這時輸入`git status` 可以查看檔案是否有被追蹤，輸入後會發現 joke.md 在 Untracked files 中，這代表 joke.md 尚未被 git 追蹤
4. 此時要輸入`git add`將 joke.md 加入 staging area (索引)才會被追蹤  
` git add joke.md`   
or  
` git add .`   將所有檔案加入 staging area 
5.  此時再輸入一次`git status` 會發現檔案狀態變成Changes to be committed，這代表 joke.md 已被 git 追蹤
6. 接著待 joke.md 編輯完，輸入`git commit+"版本名"`即可建立第一個笑話的版本  
`git commit -m "joke_01"`
7. 這時再輸入一次`git status` ，會看到下面訊息
`On branch master nothing to commit, working tree clean`  
代表第一個笑話的版本已成功被建立，因此 staging area 已被清空
8. 此外，你也可以用`git log`看所有已儲存的版本，在這裡可以看到每個版本的版本號
9. 若菜哥想看一下前一個版本的笑話，可以輸入`git checkout + 版本號`
`git checkout + aj839vw38j4g88sgnio885452500876`  
看完輸入`git checkout master`即可回到最新版本
10. 如果今天菜哥有新的笑話，想先分開做版本控制，最後再合併，那麼菜哥可以創一個分支，讓新笑話為支線，預設的分支(branch)為 master，新的 branch 設為 newjoke  
`git branch newjoke`
11. 切換分支用`git checkout`  
 `git checkout newjoke`
 command line上會顯示目前所在的branch
12. 菜哥覺得他不想只放在電腦上，也想上傳到github，想與其他有共同愛好的朋友協作，此時可以先在github創建一個專案(repository) TSAIJoke，並且可以得到專案的git連結。
13. 接著輸入下面指令即能將檔案放上github  
`git remote add origin https://github.com/jillsizuka/TSAIJoke.git`
14. 如果菜哥想用筆名「TSAI」更新，那麼可以用下面指令達成
`git config --global user.name TSAI`
15. 之後若菜哥更新笑話的版本就能用`git push origin + branch`更新github專案
`git push origin master`  
`git push origin newjoke`
16. 若同好更新了github專案，菜哥也能用`git pull origin + branch`更新電腦的笑話版本
`git pull origin master`  
`git pull origin newjoke`
17. 若菜哥的同好在github上有另一個repository，菜哥可以輸入`git clone`下載至電腦上  
`git clone https://github.com/jillsizuka/TSAIJoke.git`
