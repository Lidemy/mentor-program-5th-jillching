## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1. embed:本身沒有內容是一個空元素，用於在網頁中嵌入外部內容，可嵌入不同檔案類型，例如音樂、Flash、PDF 等等。
2. select:下拉式選單，讓使用者可以從一堆選項中選擇出一個或多個選項， 在 select 裡面用 option 標籤來建立個別選項。
3.   del:用來標示被刪除的文字內容，文字上會多一條刪除線。

## 請問什麼是盒模型（box modal）
HTML 裡的每一個元素都可以視為一個 box model ， 透過 CSS 的 border、padding、width、margin、background-color 等等的屬性去構成 box model 。

![box-model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png)
![content](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/standard-box-model.png)

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
inline 調 width、height、margin的上下都沒有作用，但 padding 有作用；block 則都可以調整，自由度很高，一個元素會佔滿一整行；inline-block 結合 inline 和 block 的優點，元素外像 block 一樣可以元素並排，元素內則可以調各種屬性。


## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

static 為網頁預設的定位方式，元素會照著瀏覽器預設的配置自動排版在頁面上；relative 為相對定位，元素會以原本的位置作為參考點，依照設定的屬性調整定位，並且不會影響到其他元素位置；absolute 為絕對定位，元素會以往上找最接近的非 static 元素作為參考點，若找不到就會以 body 作參考點，依照設定的屬性調整定位，並且此元素會從正常的排版流程抽離，後面的元素會遞補上來；fixed 為固定定位，相對於 viewport 做定位，無論怎麼捲動都會固定在設定的位置上。