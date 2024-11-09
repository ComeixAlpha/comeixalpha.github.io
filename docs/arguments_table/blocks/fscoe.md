# Floyd-Steinberg 系数 Coefficient

## 简介
该项控制的是 Floyd-Steinberg 算法中的分数常数的分母

## 参数细节
类型：`double`

取值范围：

$$
Coe\in R-0
$$

## 详解
下面是 Floyd-Steinberg 算法的系数矩阵，该参数控制的即 $v$ 的值，默认为 $16$

$$
\left[
\begin{matrix}
\space & \space & * & \frac{7}{v}\\
\cdots & \frac{3}{v} & \frac{5}{v} & \frac{1}{v} & \cdots\\
\end{matrix}
\right]
$$