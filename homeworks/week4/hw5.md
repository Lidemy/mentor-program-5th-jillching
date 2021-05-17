## 請以自己的話解釋 API 是什麼
API白話來說就是處理交換資料的店員或販賣機，譬如我今天中午想吃排骨飯，因此我跟店員點了一份排骨飯，店員進廚房拿排骨飯，然後送來給我，店員就是API。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
305 - 要求的網頁必須透過 Server 指定的代理（proxy）才能觀看存取，但由於代理 (Proxy) 頻內設置的安全性問題，已棄用。  
401 - 拒絕存取，因缺少對要求的資源有有效驗證憑證 (credential)或該憑證無效，因此被拒絕。  
504 - 閘道逾時，未在時限內收到上游伺服器的回應，故無法完成請求。  



## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL: https://lidemy-http-challenge.herokuapp.com/api  

| 說明  | Method | path | 參數 | 範例 |
|:------------- |:---------------:| -------------:| -------------:| --------------:|
| 回傳所有餐廳資料      | GET | /restaurants | _limit:限制回傳資料數量 | /restaurants?_limit=5 |
| 回傳單一餐廳資料     | GET  | /restaurants/:id | 無 | /restaurants/5 |
| 刪除餐廳 | DELETE  | /restaurants/:id | 無 | /restaurants/5 |
| 新增餐廳 | POST | /restaurants | name: 餐廳名 | 無 |
| 更改餐廳 | PATCH | /restaurants/:id | name: 餐廳名 | 無 |














