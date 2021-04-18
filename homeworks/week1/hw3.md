## 教你朋友 CLI

>### 首先我們要先知道什麼是command line

一般使用者習慣在圖型使用者介面(GUI)做操作，command line 中文是命令行介面，就是透過文字查看、控制或處理電腦裡的檔案，用文字就能達到與圖型使用者介面一樣的功能，例如 h0w 哥想要建立資料夾，除了按右鍵新增，也能用 command line 創建。

>### 完成h0w哥的需求

1. 打開 command line ， windows 叫做命令提示字元(CMD)， MAC 叫做終端機(ternimal)。
2. 先輸入 pwd 了解自己的所在位置  
` jillsizuka➜~» pwd `  
會出現現在的位置  
` /Users/jillsizuka `
3. h0w 哥的需求是建立一個叫做 wifi 的資料夾，並且在裡面建立一個叫 afu.js 的檔案。  
首先要確定 wifi 資料夾要放在哪，用 cd + 路徑來切換位置，例如要建立在桌面上，則輸入
` jillsizuka➜~» cd Desktop `  
  or  
` jillsizuka➜~» cd /Users/jillsizuka/Desktop/ `  
4. 切換好路徑，就能創建資料夾  
` jillsizuka➜~» mkdir wifi `  
5. 建立好 wifi 資料夾後，記得切換至 wifi 資料夾  
` jillsizuka➜~» cd /Users/jillsizuka/Desktop/wifi `  
6. 最後新增 afu.js  
` jillsizuka➜~» touch afu.js `  
