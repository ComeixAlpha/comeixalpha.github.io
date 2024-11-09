# 基础偏移 Basic Offset

## 简介

将生成基准点从执行坐标偏移一个基本量。

!!! tip "Tip"
    在 v6.0.7 以前的版本，此参数是为了（特别是通过 WebSocket 传输）防止生成时玩家被方块挤压而发生移动，导致后续的生成都随着玩家的位置而移动。但现在的 WebSocket 生成会记录执行坐标，已经不会再有挤压的问题，但也保留了此项参数。

## 参数细节
类型：`List<int>`

取值范围：

$$
\displaylines {
             X\in\mathbb{Z}
    \newline Y\in\mathbb{Z}
    \newline Z\in\mathbb{Z}
}
$$