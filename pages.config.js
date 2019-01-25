const fs= require("fs");
const glob = require("glob");//允许你使用*等符号，来写一个glob规则

const pages = {};
let entries = [];
try {
    entries = glob("src/pages/*/main.js", { sync: true });
} catch (err) {
    entries = [];
    throw err;
}
console.log(entries);
entries.forEach((item) => {
    // key值
    const pageName = item.split('/')[2];
    console.log(pageName);
    // 入口
    const entry = `src/pages/${pageName}/main.js`;
    // 模板
    const template = `public/${pageName}.html`;
    // 输出
    const filename = `${pageName}.html`;
    //title
    const title = `${pageName} Page`;

    pages[pageName] = {
        entry:entry,
        template:template,
        filename:filename,
        title:title,
        chunks: ['chunk-vendors', 'chunk-common', `${pageName}`]
    }
})
module.exports = pages;