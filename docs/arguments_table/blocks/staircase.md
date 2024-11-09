# 阶梯式 Staircase

!!! warning "Conflicts"

    该参数与以下项冲突（不可同时启用）
    
    - 使用结构

## 简介
启用该参数则会生成阶梯式像素画，并自动切换调色板选集到阶梯式选集

## 参数细节
类型：`bool`

## 详解

### 什么是阶梯式
简单来说，阶梯式像素画是一种立体的像素画，画的正面朝向竖直方向的正方向也就是 $y+$ 方向。在经过[压缩](#_8)之前，画的每一列（相同 $x$ 下 $z$ 轴的一列方块）会连续地高低起伏。

### 阶梯式有什么用
当你想要将像素画放进地图而不是简单地通过肉眼观察的时候，就需要用到阶梯式。阶梯式相比平铺地图画在地图中可以显示更多的颜色。

### 阶梯式的原理
阶梯式专为地图画而设计，是因为地图的特殊性质。

- 地图的尺寸与分辨率

地图的尺寸均为 $128\times 128$，默认缩放等级（Zoom Level）是 $0$。可以显示的区域大小是

$$
AreaSize=128\times 2^{Zoom Level}\times128\times 2^{Zoom Level}
$$

其中每个像素点可以代表的方块数量是

$$
1\space Map Pixel Represents=2^{Zoom Level}
$$

但显示的区域大小和分辨率并无关系，分辨率一直都是 $128\times 128$，所以提高缩放等级并不能让画面更精细。

**唯一一种能提高画面效果的办法是用多张地图拼起来**

- 地图如何显示方块

> 由于之前论证了地图缩放等级无法影响画面效果，所以下面的公式均在缩放等级 $Zoom Level=0$ 的情况下讨论。当 $Zoom Level$ 不为 $0$ 时计算方法会有所变化

与直接用肉眼观察不同，一个方块在地图上的颜色与其纹理无关。

一个方块在地图上的颜色由两个值决定：**基色** 与 **阴影**。

基色是一个静态的数值，每个方块有其对应的基色，对于 Java 版，方块基色表可以查看 [Wiki](https://minecraft.wiki/w/Map_item_format)。对于基岩版，可以查看[这里](../../ref/mapcolors.md)。

一个方块的阴影值由其北侧方块的相对位置决定，假设一个方块的高度坐标为 $y_{South}$，其北侧方块的高度坐标为 $y_{North}$。则其 **阴影ID** 为

$$
ShadowID=\left\{\begin{aligned}
    0,\space y_{South}<y_{North}\\
    1,\space y_{South}=y_{North}\\
    2,\space y_{South}>y_{North}
\end{aligned}\right.
$$

> 水的阴影较为特殊，但我已经将水从调色板中移除，所以这里不做讨论

实际上阴影ID还可以为 $3$，但无法通过正常途径获得，在 [*joodicator/mcmapimg*](https://github.com/joodicator/mcmapimg/blob/master/mcmapimg/mcmapimg.py) 项目中有以下代码：

```python
shade_mul = \
    180 if shade_id == 0 else \
    220 if shade_id == 1 else \
    255 if shade_id == 2 else \
    220 if shade_id == 3 and version == '1.8.0-' else \
    135 if shade_id == 3 and version == '1.8.1+' else None
```

通过阴影ID可以得到对应的 **阴影值** ：

$$
Shadow=\left\{\begin{aligned}
    180,\space ShadowID=0\\
    220,\space ShadowID=1\\
    255,\space ShadowID=2
\end{aligned}\right.
$$

最后通过基色与阴影值得到 **地图色** ：

$$
MapColor=BaseColor * Shadow \div 255
$$

代码形式：

```typescript
let mapColor: RGB = new RGB();
mapColor.r = baseColor.r * shadow / 255;
mapColor.g = baseColor.g * shadow / 255;
mapColor.b = baseColor.b * shadow / 255;
```

所以可以很轻松地意识到，如果只是平铺的地图画，一种方块只能显示一种颜色，但如果使用阶梯式，一种方块就能三种可能的颜色，大大地拓展了可选的颜色数量，提升了画面效果。

### 基岩版的特性
前面提到，当北侧方块比当前方块的相对位置较高或较低时，会改变当前方块的地图色。但与 Java 版不同的是，在 Java 版中，北侧方块可以只高或者低出一格，与其相差很多格的效果都是相同的，但在基岩版中，如果两个方块只相差一格，则会产生 **马赛克样式的图案**，把相差高度改到两格或以上就可以消除马赛克，所以 Colorify 的默认阶梯式间隔高度是 $2$ 而不是 $1$，但相应的会占据更多的空间，您可以在高级参数中的阶梯式竖向间隔一参数修改此项数值。

### 阶梯式的压缩
由于阶梯式是立体的，相比平面式像素画会占用更多的竖向空间，然而竖向空间是有限的，所以我加入了一种无损的压缩办法来尽可能地使其占用的竖向空间变小，并加入了整体偏移，使得 **绝大部分** 的方块都会生成在基准点的上方，以便生成时控制阶梯式像素画的大概位置。

> 暂时不会考虑加入有损压缩法

关于压缩的具体实现，可以参考源代码中的 `lib\backend\utils\common\offset_request.dart` 里 `OffsetRequestMatrix` 类的 `archieve` 方法。

### 搭桥
由于基岩版还没有真正意义上的投影Mod，所以暂时不会加入搭桥功能。

### 参考
如果您感兴趣，您也可以参考以下链接：

- SlopeCraft 文档: 原理简介

[https://slopecraft.readthedocs.io/principles-introduction/](https://slopecraft.readthedocs.io/principles-introduction/)

- Minecraft Wiki：Map Item Format

[https://minecraft.wiki/w/Map_item_format](https://minecraft.wiki/w/Map_item_format)

- MCModify: Map.java

[https://github.com/LB--/MCModify/blob/java/src/main/java/com/lb_stuff/mcmodify/minecraft/Map.java](https://github.com/LB--/MCModify/blob/java/src/main/java/com/lb_stuff/mcmodify/minecraft/Map.java)

- minecraftmap: \_\_init\_\_.py

[https://github.com/spookymushroom/minecraftmap/blob/master/minecraftmap/\_\_init\_\_.py](https://github.com/spookymushroom/minecraftmap/blob/master/minecraftmap/__init__.py)

- mcmapimg: mcmapimg.py

[https://github.com/joodicator/mcmapimg/blob/master/mcmapimg/mcmapimg.py](https://github.com/joodicator/mcmapimg/blob/master/mcmapimg/mcmapimg.py)