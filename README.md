# es6有个新特性 import
要使用import关键字，需用到babel
```
npm  i babel-cli babel-preset-env -D
npm i nodemon -D
```
安装完成后，还需要在根目录下添加个配置文件`.babelrc`
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
	]
}
```
### package.json下自动编译脚本
意思是如果src目录有变化就自动编译
```
 "dev": "nodemon -w src --exec \"babel-node src --presets env\""
 也可写成
  "dev": "nodemon -w src --exec \"babel-node src/index --presets env\""
```
src/index.js
```
import fs from 'fs'
import { promisify } from 'util';
import { resolve as r } from 'path';
import { readFile, writeFileSync as wfs } from 'fs';
import * as qs from 'querystring'

promisify(readFile)(r(__dirname,'../package.json'))
  .then(data=>{
    data=JSON.parse(data)
    console.log(data.name);
    wfs(r(__dirname,'./name'),String(data.name),'utf8')
})

```