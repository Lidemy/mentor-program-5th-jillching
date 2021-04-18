## 交作業流程

1. 用Github Classroom 連結創造自己的 Repoitories
2.  將自己的Repoitories Git clone至你要的位置 => git clone https://github.com/jillching/gittest.git
3.  切換command line的位置至mentor-program-5th-jillching
4.  創建新的branch「week01」=> git branch week01  
<mark>切記不要直接用master</mark> 
5.  切換到week01 => git checkout week01
6.  把hw1.md寫完並儲存
7.  用git commit -am"week01" 儲存改變後的檔案
8.  記得用git status或git log檢查一下
9. 確認作業沒問題就上傳到github =>git push origin "week01" 
10. 到github上自己的Repoitories點選 compare&pull request或pull request
11. 按create pull request拿到PR連結
12. 自我檢測檢測完才能交作業
13. 待助教檢查完作業後會將week01 merge到master
14. 確認助教merge後，command line的位置切換branch至master
15. 將github上最新版本更新到local端的mentor-program-5th-jillching => git pull origin master
16. 更新完後將week01刪掉 => git branch -d "week01"