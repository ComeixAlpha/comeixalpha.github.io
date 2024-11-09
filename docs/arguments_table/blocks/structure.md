# 使用结构 Use Structure File

!!! warning "Conflicts"

    该参数与以下项冲突（不可同时启用）
    
    - 阶梯式
    - WebSocket

## 简介
启用该参数则会生成 `.mcstructure` 类型的文件而非 `.mcfunction`

## 参数细节
类型: `bool`

## 详解
结构文件是一种 [NBT](https://minecraft.wiki/w/NBT_format) 文件，同时适用于基岩版和 Java 版，在原版中可以被结构方块所加载，也可以使用 `/structure` 命令来加载。也可以通过一些工具转换为如`.litematica`、`.scheme`、`.bdx`等文件格式。

有关结构文件的详细组成，推荐参考：

[TriM-Organization/TrimMCStruct 文档](https://gitee.com/TriM-Organization/mcstructure/blob/main/docs/MCSTRUCTURE%20%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84.md)