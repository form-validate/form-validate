## 代码
``` js
/^[^\s](.*)+\.(avi|mov|asf|wmv|navi|3gp|ra|rm|ram|rmvb|mkv|flv|mp4)$/
```

## 正则分析
[在线分析-视频格式](https://regexper.com/?#%2F%5E%5B%5E%5Cs%5D%28.*%29%2B%5C.%28avi%7Cmov%7Casf%7Cwmv%7Cnavi%7C3gp%7Cra%7Crm%7Cram%7Crmvb%7Cmkv%7Cflv%7Cmp4%29%24%2F "在线分析-视频格式")


## 规则说明
:::tip 说明
视频路径由: 视频的路径/+视频名称+”.视频格式”
:::
| 类型 | 说明                                 | 备注 |
| :--- | :----------------------------------- | :--- |
| -    | 以”.+视频格式后缀名”结尾           |      |
| -    | 视频名称由任意字符组成，但是不能为空 |      |
| -    | 视频路径由任意字符组成，可以为空     |      |
| -    | 视频格式后缀名只能是下面表格中的类型 |      |
| -    | 视频格式后缀名只能是小写英文字母     |      |

## 常见格式
| 编号 | 后缀名 | 说明                                                            |
| ---- | ------ | --------------------------------------------------------------- |
| 1    | AVI    | [AVI-格式说明](https://baike.baidu.com/item/AVI/213655)         |
| 2    | MOV    | [MOV-格式说明](https://baike.baidu.com/item/MOV)                |
| 3    | ASF    | [ASF-格式说明](https://baike.baidu.com/item/ASF/3918)           |
| 4    | WMV    | [WMV-格式说明](https://baike.baidu.com/item/WMV)                |
| 5    | NAVI   | [NAVI-格式说明](https://baike.baidu.com/item/nAVI/838785)       |
| 6    | 3GP    | [3GP-格式说明](https://baike.baidu.com/item/3gp)                |
| 7    | REAL   | [REAL-格式说明](https://baike.baidu.com/item/RealVideo/8576859) |
| 8    | MKV    | [MKV-格式说明](https://baike.baidu.com/item/mkv)                |
| 9    | FLV    | [FLV-格式说明](https://baike.baidu.com/item/flv)                |
| 10   | MP4    | [MP4-格式说明](https://baike.baidu.com/item/mp4/9218018)        |