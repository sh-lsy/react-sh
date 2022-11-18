## react-ts

### 项目搭建

- `create-react-app react-ts --template typescript`

- `npm install @craco/craco@alpha -D` @craco/craco 暂时不支持 react-scripts 5.0

  - 项目根目录创建一个 `craco.config.js` 用于修改默认配置

  - ```js
    const path = require('path')

    const resolve = (dir) => path.resolve(__dirname, dir)

    module.exports = {
      webpack: {
        alias: {
          '@': resolve('src')
        }
      }
    }
    ```

- `npm install prettier -D`

- `npm install eslint -D`

- 
