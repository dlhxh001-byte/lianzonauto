# Lianzon Auto — Minimal Used Car Export Website

这一版为简约国际贸易风格，重点是：

- 首页大图 + 简洁文案
- 车型分类
- 四步出口流程
- 联系表单
- 中文 / English / Русский / العربية / Español
- Arabic 自动 RTL
- 右侧固定“头像 + 联系方式”悬浮栏，页面滚动时始终跟随
- 手机端自动改为底部 WhatsApp + Quote 固定栏
- WhatsApp / Facebook / Instagram / Email / WeChat

## 修改联系方式
打开 `config.js`：

```js
window.LIANZON_CONTACT = {
  whatsapp: "8613800000000",
  email: "sales@lianzonauto.com",
  facebook: "https://www.facebook.com/YOUR_FACEBOOK_PAGE",
  instagram: "https://www.instagram.com/YOUR_INSTAGRAM",
  wechat: "YOUR_WECHAT_ID"
};
```

其中 `whatsapp` 填国际区号+号码，不加 +、空格或短横线。

## 头像
右侧头像当前使用品牌 `LA` 圆形占位，不依赖图片。正式运营时可以把它替换成销售人员真实头像。

## 部署
直接把 `index.html`、`styles.css`、`script.js`、`config.js` 放到网站根目录即可。无需后端。
