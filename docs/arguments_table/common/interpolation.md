# 裁剪插值法 Interpolation

## 简介
裁剪使用的插值函数

## 参数细节
类型：`Selection`

可选项：

- Nearest : `Interpolation.Nearest`

最近邻插值。选取最近的像素。速度最快，质量较低。

- Cubic   : `Interpolation.Cubic`

三次样条插值。相邻像素的立方混合。速度最慢，质量较高。

- Linear  : `Interpolation.Linear`

线性插值。相邻像素的立方混合。

- Average : `Interpolation.Average`

平均值法。对相邻像素的颜色进行平均。