## es7
v1.0只支持es6的语法，若使用async function则会报错，因为那是es7的新特性
若要使用es7还必需安装2个插件：
bable的运行环境以及babel插件编译的运行环境
```
npm i -S babel-plugin-transform-runtime babel-runtime
```
### 配置`.babelrc`
```
{
  "presets": [
      [
        "env",
        {
          "targets":{
             "node": "current"
          }
        }
      ]
  ],
  "plugins":[
     [
       "transform-runtime",{
          "polyfill":false,
          "regenerator":true
       }
      
     ]
  ]
}
```
src/index.js
```
import { promisify } from 'util';
import { resolve } from 'path';
import { readFile } from 'fs';

async function init(){
  let data = await promisify(readFile)(resolve(__dirname,'../package.json'));
    data=JSON.parse(data)
    console.log(data.name);
}
init()
```
```
npm run build
```