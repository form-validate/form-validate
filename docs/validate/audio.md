## 代码
``` js
/^[^\s](.*)+\.(cda|wav|aiff|au|mpeg|mp3|midi|wma|vqf|ogg|amr)$/
```

## 正则分析
[在线分析-音频格式](https://regexper.com/?#%2F%5E%5B%5E%5Cs%5D%28.*%29%2B%5C.%28cda%7Cwav%7Caiff%7Cau%7Cmpeg%7Cmp3%7Cmidi%7Cwma%7Cvqf%7Cogg%7Camr%29%24%2F "在线分析-音频格式")


## 规则说明
:::tip 说明
音频路径由: 音频的路径/+音频名称+”.音频格式”
:::
| 类型 | 说明                                 | 备注 |
| :--- | :----------------------------------- | :--- |
| -    | 以”.+音频格式后缀名”结尾           |      |
| -    | 音频名称由任意字符组成，但是不能为空 |      |
| -    | 音频路径由任意字符组成，可以为空     |      |
| -    | 音频格式后缀名只能是下面表格中的类型 |      |
| -    | 音频格式后缀名只能是小写英文字母     |      |

## 常见格式
| 编号 | 后缀名 | 说明                                                                                                 |
| ---- | ------ | ---------------------------------------------------------------------------------------------------- |
| 1    | cda    | [cda-格式说明](https://baike.baidu.com/item/cda/13830481)                                            |
| 2    | WAV    | [WAV-格式说明](https://baike.baidu.com/item/WAV)                                                     |
| 3    | AIFF   | [AIFF-格式说明](https://baike.baidu.com/item/AIFF)                                                   |
| 4    | AU     | [AU-格式说明](https://baike.baidu.com/item/AU/17105762)                                              |
| 5    | MPEG   | [MPEG-格式说明](https://baike.baidu.com/item/MPEG)                                                   |
| 6    | mp3    | [mp3-格式说明](https://baike.baidu.com/item/mp3/23904?fromtitle=MP3%E6%A0%BC%E5%BC%8F&fromid=290526) |
| 7    | MPEG-4 | [MPEG-4-格式说明](https://baike.baidu.com/item/MPEG-4)                                               |
| 8    | MIDI   | [MIDI-格式说明](https://baike.baidu.com/item/MIDI%E6%96%87%E4%BB%B6%E6%A0%BC%E5%BC%8F/8225161)       |
| 9    | WMA    | [WMA-格式说明](https://baike.baidu.com/item/WMA/2175065)                                             |
| 10   | VQF    | [VQF-格式说明](https://baike.baidu.com/item/VQF)                                                     |
| 11   | Ogg    | [Ogg-格式说明](https://baike.baidu.com/item/OGG)                                                     |
| 12   | AMR    | [AMR-格式说明](https://baike.baidu.com/item/Amr%E6%A0%BC%E5%BC%8F)                                   |