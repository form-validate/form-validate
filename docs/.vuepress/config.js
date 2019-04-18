module.exports = {
  title: 'form-validate', // 设置网站标题
  description: '常用表单验证正则表达式',
  base: '/form-validate/',
  themeConfig: {
    nav: [
      // {
      //   text: '接口定义',
      //   link: '/apiword'
      // }
    ],
    sidebar: [{
      title: '常用类',
      collapsable: true,
      children: [
        ['/validate/mobile', '国内手机号码-mobile'],
        ['/validate/email', '邮箱-email'],
        ['/validate/domain', '域名-domain'],
        ['/validate/telphone', '国内座机号码-telphone'],
        ['/validate/zipCode', '邮编-zipCode'],
        ['/validate/IDCardNo', '身份证号码二代-IDCardNo'],
        ['/validate/qq', 'QQ号码-qq'],
        ['/validate/weixin', '微信号-weixin'],
        ['/validate/image', '图片-image'],
        ['/validate/video', '视频-video'],
        ['/validate/audio', '音频-audio'],
        ['/validate/date', '日期格式-date'],
        ['/validate/ip', 'IP地址'],
        ['/validate/password', '密码强度'],
        ['/validate/bankCard', '银行卡'],
      ]
    }, {
      title: '各类证件号码',
      children: [
        ['/validate/driverNumber', '驾驶证号码'],
        ['/validate/vehicleNumber', '车牌号'],
        ['/validate/drivingLicense', '行驶证'],
        ['/validate/VIN', '车架号'],
        ['/validate/engineNumber', '发动机号'],
        ['/validate/officerCard', '军官证'],
        ['/validate/HKMacaoCard', '港澳通行证号'],
        ['/validate/TWCompatriotsCard', '台胞证号'],
        ['/validate/chinesePassport', '中国护照'],
        ['/validate/foreignPassport', '国外护照'],
        ['/validate/MTPforHKMacao', '回乡证'],
      ]
    }],
    sidebarDepth: 2
  }
}