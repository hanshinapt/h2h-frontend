const fs = require('fs');
const path = require('path');

const ASSETS_DIR = 'app/assets';

const assetFilePaths = [];

function walkDir(dirPath) {
	const files = fs.readdirSync(dirPath);

	for (let file of files) {
		console.log(dirPath);
		const filePath = path.join(dirPath, file);
		const stat = fs.statSync(filePath);

		if (stat.isDirectory()) {
			walkDir(filePath);
		} else {
			assetFilePaths.push(filePath);
		}
	}
}

walkDir(ASSETS_DIR);

const assetFilenames = assetFilePaths.map((filePath) => {
	const relativePath = path.relative(ASSETS_DIR, filePath);
	return relativePath.split(path.sep).join('/');
});

const json = JSON.stringify(assetFilenames);

fs.writeFileSync('assets.json', json, 'utf8');
