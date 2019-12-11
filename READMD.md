# 快速构建cesium应用

## 安装

```
npm install cesium-rapid-util
```

## 使用

```
import { Viewer } from 'cesium'
import { TiandituProvider } from 'cesium-rapid-util'

const provider = new TiandituProvider({
    type: ProviderOption.Image,
    tKey: '您的秘钥,申请地址: https://www.tianditu.gov.cn/',
    hostSign: false
})

const container = document.createElement('div')

document.body.appendChild(container)

const viewer = new Viewer(container)
```
