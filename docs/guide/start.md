# 快速上手

### 安装

目前支持 npm 或 yarn 的方式安装，它能更好地和 [webpack][webpack] 或 [vite][vite] 打包工具配合使用。

```bash
# with npm
npm install @zhengxs/vux -S

# with yarn
yarn add @zhengxs/vux
```

### 引入

在 `main.js` 中写入如下内容：

```javascript
import { createApp } from 'vue';

import Vux from '@zhengxs/vux'
import '@zhengxs/vux/dist/index.css'

import App from './App.vue'

createApp(App)
  .use(Vux)
  .mount('#app')
```

[webpack]: https://webpack.docschina.org/
[vite]: https://vitejs.dev/
