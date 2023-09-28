var fs = require('fs');
var path = require('path');
var Components = require('../components.json');

Components = Object.keys(Components);
var basepath = path.resolve(__dirname, '..');

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

var isSCSS = true;
var indexContent = isSCSS ? '@import "./base.scss";\n' : '@import "./base.css";\n';
Components.forEach(function (key) {
  if (['icon', 'option', 'option-group'].indexOf(key) > -1) return;
  var fileName = key + (isSCSS ? '.scss' : '.css');
  indexContent += '@import "./' + fileName + '";\n';
  var filePath = path.resolve(basepath, 'src', fileName);
  if (!fileExists(filePath)) {
    fs.writeFileSync(filePath, '', 'utf8');
    console.log(' 创建遗漏的 ', fileName, ' 文件');
  }
});
fs.writeFileSync(path.resolve(basepath, 'src', isSCSS ? 'index.scss' : 'index.css'), indexContent);

