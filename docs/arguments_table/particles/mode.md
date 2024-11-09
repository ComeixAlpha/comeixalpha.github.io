# 模式 Mode

## 简介
粒子画的生成模式

## 参数细节
类型：`Seletion`

可选值：

- Match
- Dust

## 详解
- 匹配模式-Match

如果选择了此模式，则生成时 Colorify 会从 **MAPPINGS 映射表** 里寻找与每个像素点色值在 RGB 空间欧氏距离小于等于 30 的所有待选项中距离最近也就是理论颜色最接近的映射项的粒子ID作为对应像素点的粒子ID。如果全部映射项的距离都大于 30，则该像素点便不会拥有粒子，对应在游戏里即该点为空。

当启用打包功能时，该模式会自动生成所需的所有粒子。这些粒子均为（我魔改的）*minecraft:endrod* 的变种，移除了生命周期帧动画和动量，可以简单理解为变得更加简单而静态了，目的是为了减少性能消耗，因为一幅粒子画通常会有大量粒子同时存在。当然，您也可以不用这些粒子，使用您自己的粒子。**但注意请在映射表中一并写上粒子的命名空间以保证规范性与一致性**。

- 尘模式-Dust

!!! warning "Conflicts"

    - 尘模式在使用 WebSocket 时失效
    - 使用尘模式时自动启用打包功能

该模式名字取自 JE 中会变色的粒子 *dust*。与 Match 模式不同的是，该模式下生成的 Resource pack（资源包）中的自定义粒子只会有一个：*colorify.dust.json*。该粒子的颜色是动态的，外形与 JE 的 dust 粒子类似，Colorify 通过 Script API 的 [MolangVariableMap](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/molangvariablemap?view=minecraft-bedrock-stable) 来动态控制该粒子的颜色。该模式会准确记录所有像素点的 RGB 精确值，并静态地写入脚本中，所以该模式可以说是最方便且效果最好的方案，但相对的，Script API（脚本引擎）的 Stable 版本需要较高的游戏版本才能运行，最低是 1.20.80（对应的 @minecraft/server 的版本是 [1.10.0-stable](https://www.npmjs.com/package/@minecraft/server/v/1.10.0)）。

>如果您有 Script API 开发的经验，可以通过调整 manifest 中的 @minecraft/server 版本至您游戏版本适用的 beta 版本以在更低版本使用 Dust 模式。当然你也有可能甚至需要修改脚本，因为类似 Vector3 的变动会导致传入的参数类型等等的更改。