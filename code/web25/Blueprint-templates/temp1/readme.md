# 第一步驟

```css
body{
    background-image: url(../../share/bg.gif);
    display: flex;
    justify-content: center;

}

.container{
    background-color: white;
    width:1200px;

}

.header{
    background-color: orange;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
}

.header ul{}
.header li{
    list-style: none;
    float: left;
}
.header li a{}
.header a{margin: 5px;}
.header a:hover{}
```


# 這是很細的地方, 如果是用插入圖片(HTML中)會有4px的空白
## 是baseline 預設的結果因為base line到botton有4px的空間,只要改成 Bottom 白線就會消失


.banner img{
    vertical-align: bottom;
}


# 偽類別

對小孩

:frist-child

:last-child

:nth-child(n)

=number or 2n or 3n n是倍數

# 對同樣的類別

:frist-of-type

:last-of-type


:nth-of-type()

# 文字的平移位置簡單的方法

text-indent: 20px;