:::danger
待完善
:::

## 代码
``` js
/^(([a-zA-Z0-9]+|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\.){0,3}(com|cn|net|org|biz|gov\.cn|name|info|cc|tv|co|mobi|中国|公司|网络|xin|shop|ltd|vip|xyz|wang|top|club|site|luxe|ren|link|online|tech|store|red|pro|kim|ink|fun|group|work|pub|live|wiki|beer|art|fit|yoga|video|design|商标|在线|网店|商场|网址|中文网|我爱你|餐厅|集团)$/
```

## 正则分析
[在线分析-域名](https://regexper.com/#%2F%5E%28%28%5Ba-zA-Z0-9%5D%2B%7C%5Ba-zA-Z0-9%5D%5Ba-zA-Z0-9-%5D*%5Ba-zA-Z0-9%5D%29%5C.%29%7B0%2C3%7D%28com%7Ccn%7Cnet%7Corg%7Cbiz%7Cgov%5C.cn%7Cname%7Cinfo%7Ccc%7Ctv%7Cco%7Cmobi%7C%E4%B8%AD%E5%9B%BD%7C%E5%85%AC%E5%8F%B8%7C%E7%BD%91%E7%BB%9C%7Cxin%7Cshop%7Cltd%7Cvip%7Cxyz%7Cwang%7Ctop%7Cclub%7Csite%7Cluxe%7Cren%7Clink%7Conline%7Ctech%7Cstore%7Cred%7Cpro%7Ckim%7Cink%7Cfun%7Cgroup%7Cwork%7Cpub%7Clive%7Cwiki%7Cbeer%7Cart%7Cfit%7Cyoga%7Cvideo%7Cdesign%7C%E5%95%86%E6%A0%87%7C%E5%9C%A8%E7%BA%BF%7C%E7%BD%91%E5%BA%97%7C%E5%95%86%E5%9C%BA%7C%E7%BD%91%E5%9D%80%7C%E4%B8%AD%E6%96%87%E7%BD%91%7C%E6%88%91%E7%88%B1%E4%BD%A0%7C%E9%A4%90%E5%8E%85%7C%E9%9B%86%E5%9B%A2%29%24%2F "在线分析-域名")


## 规则说明

| 类型     | 规则                                                                                         | 说明                   |
| -------- | -------------------------------------------------------------------------------------------- | ---------------------- |
| 字符     | 仅支持数字、英文和“-”（英文中的连词号），"-"不能用作开头和结尾                             | 不区分英文字母的大小写 |
| 长度     | 域名长度的限制是63个字符,域名总长度则不能超过253个字符                                       |                        |
| 域名级别 | 各级域名之间用实点（.）连接 ，最少两级域名，如：qq.com，最多四级域名，如：haiyang.vip.qq.com | -                      |

## 常见顶级域名
### 英文域名

   | 域名  | 说明                                                                                                                                             | 域名    | 说明                                                                                                                                                                       |
   | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | .com  | company简称，表示公司企业                                                                                                                        | .cn     | 我国管理的国际顶级域名，是中国自己的互联网标识，cn一般代表中国                                                                                                             |
   | .net  | 一般用于从事Internet相关的网络服务的机构或公司                                                                                                   | .org    | 适用于各类组织机构，包括非盈利团体                                                                                                                                         |
   | .biz  | 是英文单词 "business"（商务）的缩写，代表着商业领域                                                                                              | .gov.cn | .gov.cn域名是中国政府机关等政府部门网站的重要标识，专门用于我国政府机关等部门                                                                                              |
   | .name | .name域名同.com、.net一样是国际顶级域名，独具特色，非常适合用于个人网站                                                                          | .info   | 代表信息服务，是信息时代最明确的标志                                                                                                                                       |
   | .cc   | .cc是国家和地区顶级域名，和我国的cn同属于ccTLD（country code top-level domains）；同时cc也是英文"Commercial Company"（商业公司）的缩写，含义明确 | .tv     | .tv域名作为全球视听时代的主流域名，已成为网络视频、音频服务提供者的首选域名                                                                                                |
   | .co   | 是英文"Corporation、Company"（商业公司）的缩写，含义明确、简单易记，方便公众理解。                                                               | .mobi   | mobi域名是全球唯一专为手机及移动终端设备打造的域名，由爱立信、GSM协会、Google、微软、诺基亚、三星电子、Syniverse科技、T-Mobile等全球顶级知名手机厂商和相关行业协会共同投资 |
   | .中国 | .中国域名是全球唯一的中文后缀顶级域名，是互联网最具品牌影响力的中文网络标识。已于2012-10-29开放注册，正式融入国际互联网                          | .公司   | .公司英文域名是新一代域名，是互联网的门牌号码。.公司域名具有显著的标识作用，能很好的体现企业自身的价值和定位。                                                             |
   | .网络 | .网络英文域名是新一代域名，是互联网的门牌号码。.网络域名具有很高的辨识度，非常适合应用于网络服务。                                               |         |                                                                                                                                                                            |

### 中文域名
   | 域名  | 说明 | 域名  | 说明 |
   | ----- | ---- | ----- | ---- |
   | .com  | -    | .net  | -    |
   | .cn   | -    | .biz  | -    |
   | .cc   | -    | .tv   | -    |
   | .中国 | -    | .公司 | -    |
   | .网络 | -    |       | -    |

### 新顶级域名
   | 域名    | 说明                           | 域名    | 说明                       |
   | ------- | ------------------------------ | ------- | -------------------------- |
   | .xin    | 网络诚信专属域名               | .shop   | 电商专属域名               |
   | .ltd    | 有限公司专属域名               | .vip    | 尊贵、特权                 |
   | .xyz    | 最有个性和创意的域名！         | .wang   | 寓意网络，互联网域名首选！ |
   | .top    | 寓意巅峰、突破，彰显蒸蒸日上！ | .club   | 俱乐部、社团专属域名！     |
   | .site   | 代表站点                       | .luxe   | 代表豪华、奢侈             |
   | .ren    | 以人为本的域名！               | .link   | 即刻链接世界               |
   | .online | 寓意在线                       | .tech   | 技术专属域名               |
   | .store  | 商店/零售                      | .red    | 寓意“红、火”             |
   | .pro    | 专业领域专属域名               | .kim    | 金牌网站                   |
   | .ink    | 墨迹域名                       | .fun    | 娱乐、趣闻                 |
   | .group  | 集团/团体专属域名              | .work   | 职业专属                   |
   | .pub    | 大众域名；知名的；出版         | .live   | 爱现场，爱生活             |
   | .wiki   | 维基百科                       | .beer   | 代表啤酒/酒吧              |
   | .art    | 艺术行业专属域名               | .fit    | 运动健康生态圈域名之选     |
   | .yoga   | 瑜伽社区灵动域名               | .video  | 互联网视频                 |
   | .design | 设计领域专属域名               | .商标   | 商标域名                   |
   | .在线   | 符合中国文化的在线中文域名     | .网店   | 电子商务域名               |
   | .商城   | 企业自主电商的标志             | .网址   | 网址专属                   |
   | .中文网 | 有效保护中文网址品牌           | .我爱你 | 极具爱意的域名！           |
   | .餐厅   | 餐饮行业专属的中文域名         | .集团   | 最具品牌实力的互联网标识！ |


## 参考资料
[阿里云域名注册](https://wanwang.aliyun.com/domain/com/?spm=5176.10695662.1158081.1.59854234Rd7DOs "阿里云域名注册")

[域名-百度百科](https://baike.baidu.com/item/%E5%9F%9F%E5%90%8D/86062?fr=aladdin "域名-百度百科")



