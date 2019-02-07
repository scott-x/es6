import { promisify } from 'util';
import { resolve } from 'path';
import { readFile } from 'fs';

async function init(){
	let data = await promisify(readFile)(resolve(__dirname,'../package.json'));
    data=JSON.parse(data)
    console.log(data.name);
}
init()