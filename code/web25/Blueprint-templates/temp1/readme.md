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


# 這是很細的地方, 如果是用插入圖片會有4px的空白
## 是base line 只要改成 Bottom 白線就會消失

.banner img{
    vertical-align: bottom;
}