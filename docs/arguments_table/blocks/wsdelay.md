# WebSocket 通信间隔 Command Delay

## 简介
通过 WebSocket 发送每条命令时的发送间隔，单位为 $ms$

!!! warning "Warning"

    虽然此参数的默认值不是极限的 $1$ 而是 $10$，但 $10ms$ 是实测的几乎最低值，再缩小就会出现部分命令堵塞执行失败的情况，可以根据您的情况动态调整

## 参数细节
类型：`int`

默认值：$10$

取值范围：

$$
Delay\in [1,\infty)
$$