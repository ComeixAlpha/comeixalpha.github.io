# 裁剪 Clips

## 简介
裁剪图片到指定大小，单位为格（方块）

## 参数细节
类型：`List<String>`

取值范围：

$$
\displaylines{
Width \in [1, \infty)
\newline Height \in [1, \infty)
}
$$

## 其他
使用 `Image.copyResize` 来裁剪图片到指定大小，单位为格（方块）：
```dart
/// Returns a resized copy of the src Image. 
/// If height isn't specified, then it will be determined by the 
/// aspect ratio of src and width. If width isn't specified, then 
/// it will be determined by the aspect ratio of src and height. 
Image copyResize(
    Image src, {
    int? width,
    int? height,
    bool? maintainAspect,
    Color? backgroundColor,
    Interpolation interpolation = Interpolation.nearest,
})
```

插值法由[裁剪插值法](./interpolation.md)参数决定