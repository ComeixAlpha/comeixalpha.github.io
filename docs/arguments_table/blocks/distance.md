# 色差公式 Color Distance

## 简介
用于计算色差的公式（/方法）

## 参数细节
类型：`Selection`

可选项：

- RGB
- RGB+

## 详解
- RGB

即 RGB 三维空间下使用欧式距离计算

$$
Distance=\sqrt{(r_1-r_2)^2+(g_1-g_2)^2+(b_1-b_2)^2}
$$

- RGB+

参考了 **杨振亚,王勇,杨振东,王成道. RGB 颜色空间的矢量-角度距离色差公式[J]. 计算机工程与应用，2010,46(6)**，其具体公式为

$$
Distance=\sqrt{
    \frac
        {S_r^2\cdot w_r\cdot (r_1-r_2)^2+S_g^2\cdot w_g\cdot (g_1-g_2)^2+S_b^2\cdot w_b\cdot (b_1-b_2)^2}
        {(w_r+w_g+w_b)\cdot 255^2}
    +S_\theta\cdot S_{ratio}\cdot \theta^2
}
$$

其中

> 对于类似纯黑像素等 RGB 部分或者全部值都为 0 而有可能会造成公式分母为零的情况，具体实现都在可能为 0 的分母位置加上了一个微小量 1E-10

$$
\displaylines{
             S_r=\min(\frac{r_1+r_2}{\sum(r,g,b)},1)
    \newline
    \newline S_g=\min(\frac{g_1+g_2}{\sum(r,g,b)},1)
    \newline
    \newline S_b=\min(\frac{b_1+b_2}{\sum(r,g,b)},1)
    \newline
    \newline \sum(r,g,b)=\frac{1}{3}(r_1+r_2+g_1+g_2+b_1+b_2)
    \newline
    \newline \theta=\frac{2}{\pi}\arccos(\frac{r_1\cdot r_2+g_1\cdot g_2+b_1\cdot b_2}{\sqrt{(r_1^2+g_1^2+b_1^2)\cdot(r_2^2+g_2^2+b_2^2)}})
    \newline
    \newline S_\theta=S_{\theta r}+S_{\theta g}+S_{\theta b}
    \newline
    \newline Deno = \frac{\lvert r_1-r_2\rvert}{r_1+r_2}+\frac{\lvert g_1-g_2\rvert}{g_1+g_2}+\frac{\lvert b_1-b_2\rvert}{b_1+b_2}
    \newline
    \newline S_{\theta r}=\frac{\frac{\lvert r_1-r_2\rvert}{r_1+r_2}}{Deno},
             S_{\theta g}=\frac{\frac{\lvert g_1-g_2\rvert}{g_1+g_2}}{Deno},
             S_{\theta b}=\frac{\frac{\lvert b_1-b_2\rvert}{b_1+b_2}}{Deno}
    \newline
    \newline S_{ratio}=\frac{\max(r_1,r_2,g_1,g_2,b_1,b_2)}{255}
}
$$

在大部分情况下，使用 RGB+ 所生成出的像素画效果都会比 RGB 要好，但花费的时间会略有增长

## 其他

未来有可能会支持 CIEDE2000 等其他色差公式