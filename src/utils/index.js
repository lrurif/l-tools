/**
 * 递归遍历出所有js文件，并生成对象树，基于webpack,使用时需要将此代码放到指定文件夹，不能以函数导入，否则会无效
 */
const modules = {}
const modulesFiles = require.context('./modules', true, /\.js$/);
console.log(modulesFiles.keys(), 'modulesFiles');
modulesFiles.keys().forEach(key => {
	const name = key.replace(/^\.\//, '');
	const fileArr = name.split("/")
	getAllModule(modules, fileArr, key)
});

function getAllModule(container, fileArr, key) {
	const item = fileArr.shift();
	if(fileArr.length === 0){;
		const name = item.replace(/\.js$/, '');
		const source = modulesFiles(key);
		container[name] = source;
		return;
	}else {
		container[item]?container[item]:container[item] = {}
		container = container[item];
		return getAllModule(container, fileArr, key);
	}
}
export default modules;
