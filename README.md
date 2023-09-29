# element-theme-css
> 使用原生css变量重写element-ui样式，运行时可以轻松实现动态修改主题等需求（详见动态修改主题示例）。


## 安装
```shell
npm i @emmafgy/element-theme-css -S
```

## 使用

引入全部样式(推荐)，不需要在引入element-ui官方样式。
```javascript
import '@emmafgy/element-theme-css';
```

按需引入
```javascript
import '@emmafgy/element-theme-css/lib/input.css';
import '@emmafgy/element-theme-css/lib/select.css';

```

## 运行时动态修改主题示例
1、建立工具函数(在需要的地方导入)
```js
export const setCssProperty = (name: string, value: string): void => {
  // 获取文档的根元素，即:root
  const root = document.documentElement;
  // 使用setProperty方法来修改--color-primary的值
  root.style.setProperty(name, value);
};

export const getCssProperty = (name: string): string => {
  // 获取根元素的计算样式对象
  const rootStyles = window.getComputedStyle(document.documentElement);
  // 获取--color-primary的值
  return rootStyles.getPropertyValue(name);
};

export const setThemeColor = (color: string): void => {
  setCssProperty('--color-primary', color);
};

export const getThemeColor = (): string => {
  return getCssProperty('--color-primary');
};

```
2、使用第一步工具函数导出的setThemeColor函数即可，比如：切换主题色为red
```js
setThemeColor('red')
```

3、当然可以通过工具函数setCssProperty设置任意变量值，比如：设置成功颜色--color-success为green
```
setCssProperty('--color-success','green')
```
所有可设置变量:[https://github.com/emmafgy/element2-theme-css-var/blob/master/src/common/var.scss](https://github.com/emmafgy/element2-theme-css-var/blob/master/src/common/var.scss)