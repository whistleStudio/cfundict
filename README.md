### [07261732] start

vue3视频看完， uniapp默认vite编译，好像scss变量有点问题

### [07271358]

headbar

### [07271745]

加popup

### [07281729]

drawer

### [07291743]

drawer样式基本OK

vue3 总线管理，实现同级组件间快速通讯

```  
npm i mitt //官方推荐
app.config.globalProperties.$bus = new mitt() //main.js中设置全局变量
{proxy} = getCurrentInstance()
proxy.$bus.emit("event")
proxy.$bus.on("event", ()=>{})
```

处理markdown在vue3中的展示问题

### [08011754]

- html页面显示还是用了老办法iframe

- 创建server服务, 请求封装，数据库cfunweb->doc集合->(用索引请求文档的src)

- 阿里云对象存储，静态页面托管；绑定域名，按照说明操作，开启静态网页功能，给个首页；后面请求原分配域名下载文件，请求新绑定域名为预览显示

### [08021741]

- 指定页面请求，目录首次动态加载完成
- web-view大小调整待解决

### [08041540]

- web-view小程序限制条件太多
- 该采用H5

v0 完成

### [10111215]

1 【调整】

- client

pageApi -> docApi; 目录样式微调

- server 

仅作为域名dictwx.cfunworld.com首页服务提供; nginx代理/api/ 请求 至cfweb后台

