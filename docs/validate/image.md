## 代码
``` js
/^[^\s](.*)+\.(jpg|bmp|gif|ico|svg|jpeg|png|psd|pcx|dxf|cdr)$/
```

## 正则分析
[在线分析-图片格式](https://regexper.com/?#%2F%5E%5B%5E%5Cs%5D%28.*%29%2B%5C.%28jpg%7Cbmp%7Cgif%7Cico%7Csvg%7Cjpeg%7Cpng%7Cpsd%7Cpcx%7Cdxf%7Ccdr%29%24%2F "在线分析-图片格式")


## 规则说明
:::tip 说明
图片路径由: 图片的路径/+图片名称+".图片格式"
:::
| 类型 | 说明                                 | 备注 |
| :--- | :----------------------------------- | :--- |
| -    | 以”.+图片格式后缀名”结尾           |      |
| -    | 图片名称由任意字符组成，但是不能为空 |      |
| -    | 图片路径由任意字符组成，可以为空     |      |
| -    | 图片格式后缀名只能是下面表格中的类型 |      |
| -    | 图片格式后缀名只能是小写英文字母     |      |

## 常见格式
| 编号 | 后缀名 | 说明                                                                                              |
| ---- | ------ | ------------------------------------------------------------------------------------------------- |
| 1    | jpeg   | [jpeg-格式说明](https://baike.baidu.com/item/JPEG%E6%A0%BC%E5%BC%8F?fromtitle=JPEG&fromid=213408) |
| 2    | jpg    | [jpg-格式说明](https://baike.baidu.com/item/JPEG%E6%A0%BC%E5%BC%8F?fromtitle=JPEG&fromid=213408)  |
| 3    | bmp    | [bmp-格式说明](https://baike.baidu.com/item/BMP/35116)                                            |
| 4    | gif    | [gif-格式说明](https://baike.baidu.com/item/GIF/217778)                                           |
| 5    | ico    | [ico-格式说明](https://baike.baidu.com/item/ICO%E5%9B%BE%E6%A0%87/10007886)                       |
| 6    | svg    | [svg-格式说明](https://baike.baidu.com/item/SVG/63178)                                            |
| 7    | png    | [png-格式说明](https://baike.baidu.com/item/png)                                                  |
| 8    | psd    | [psd-格式说明](https://baike.baidu.com/item/PSD/60413)                                            |
| 9    | pcx    | [bmp-格式说明](https://baike.baidu.com/item/pcx)                                                  |
| 10   | dxf    | [dxf-格式说明](https://baike.baidu.com/item/DXF)                                                  |
| 11   | cdr    | [cdr-格式说明](https://baike.baidu.com/item/CDR%E5%9B%BE%E5%83%8F%E6%A0%BC%E5%BC%8F/3237747)      |