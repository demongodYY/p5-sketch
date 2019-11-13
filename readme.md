# P5hub
一个基于 p5.js 创意绘画作品集网页，部署在 https://demongodyy.github.io/p5-sketch/
## 提交方法
1. 克隆代码
2. 在 js 文件夹中创建新的 JS 绘画文件
3. 在 js 文件夹中的 z-list.js 中添加自己的文件名（省略后缀.js）
4. 提交 PR
5. 合并代码后，绘画作品会自动出现在部署的 github page 上，你也可以部署自己的 page

## 基本绘画方法
```javascript
/***基本方法***/
function setup() {
  createCanvas(${width}, ${height});
  //初始化方法，在其中初始化画布
}

function draw() {
  //绘画方法，会自动在每一帧调用绘制
}

/***基本图形  []代表可选参数 ***/
arc(x, y, w, h, start, stop, [mode], [detail]); //弧线
ellipse(x, y, w, [h]); //椭圆
circle(x, y, d) //圆
line(x1, y1, x2, y2) //直线
rect(x, y, w, h, [tl], [tr], [br], [bl]) //矩形
rect(x, y, w, h, [tl], [tr], [br], [bl]) //三角形

/***颜色***/
stroke(color) //画笔边框颜色
fill(color) //画笔填充颜色
background(color) //背景颜色
```
更多详细文档，请参考[ p5.js 文档](https://p5js.org/reference/#/p5/)

## 绘画教程
- [快速开始](https://p5js.org/get-started/)
- [详细教程](https://p5js.org/learn/)
- [详细文档](https://p5js.org/reference/#/p5/)