# 版本-扁平化 Version & Flattening

## 简介

控制调色板里部分方块的 ID 与状态以兼容[扁平化](https://minecraft.wiki/w/Bedrock_Edition_Flattening)各个阶段的版本

## 参数细节

类型：`String`

要求：需要满足正则表达式 `/\d+\.\d+(\.\d+)?/`

## 详解
截止 **v6.0.9**，有以下扁平化映射

<table>
    <tr>
        <td>版本</td>
        <td>旧</td>
        <td>新</td>
    </tr>
    <tr>
        <td rowspan="17">1.19.70</td>
    </tr>
    <tr>
      <td>wool ["color"="white"]</td>
      <td>white_wool</td>
    </tr>
    <tr>
      <td>wool ["color"="silver"]</td>
      <td>light_gray_wool</td>
    </tr>
    <tr>
      <td>wool ["color"="gray"]</td>
      <td>gray_wool</td>
    </tr>
    <tr>
      <td>wool ["color"="black"]</td>
      <td>black_wool</td>
    </tr>
    <tr>
      <td>wool ["color"="brown"]</td>
      <td>brown_wool</td>
    </tr>
    <tr>
      <td>wool ["color"="red"]</td>
      <td>red_wool</td>
    </tr>
    <tr>
      <td>wool ["color"="orange"]</td>
      <td>orange_wool</td>
    </tr>
    <tr>
      <td>wool ["color"="yellow"]</td>
      <td>yellow_wool</td>
    </tr>
    <tr>
      <td>wool ["color"="lime"]</td>
      <td>lime_wool</td>
    </tr>
    <tr>
      <td>wool ["color"="green"]</td>
      <td>green_wool</td>
    </tr>
    <tr>
      <td>wool ["color"="cyan"]</td>
      <td>cyan_wool</td>
    </tr>
    <tr>
      <td>wool ["color"="light_blue"]</td>
      <td>light_blue_wool</td>
    </tr>
    <tr>
      <td>wool ["color"="blue"]</td>
      <td>blue_wool</td>
    </tr>
    <tr>
      <td>wool ["color"="purple"]</td>
      <td>purple_wool</td>
    </tr>
    <tr>
      <td>wool ["color"="magenta"]</td>
      <td>magenta_wool</td>
    </tr>
    <tr>
      <td>wool ["color"="pink"]</td>
      <td>pink_wool</td>
    </tr>
    <tr>
        <td rowspan="22">1.20.0</td>
    </tr>
    <tr>
      <td>carpet ["color"="white"]</td>
      <td>white_carpet</td>
    </tr>
    <tr>
      <td>carpet ["color"="orange"]</td>
      <td>orange_carpet</td>
    </tr>
    <tr>
      <td>carpet ["color"="magenta"]</td>
      <td>magenta_carpet</td>
    </tr>
    <tr>
      <td>carpet ["color"="light_blue"]</td>
      <td>light_blue_carpet</td>
    </tr>
    <tr>
      <td>carpet ["color"="yellow"]</td>
      <td>yellow_carpet</td>
    </tr>
    <tr>
      <td>carpet ["color"="lime"]</td>
      <td>lime_carpet</td>
    </tr>
    <tr>
      <td>carpet ["color"="pink"]</td>
      <td>pink_carpet</td>
    </tr>
    <tr>
      <td>carpet ["color"="gray"]</td>
      <td>gray_carpet</td>
    </tr>
    <tr>
      <td>carpet ["color"="silver"]</td>
      <td>light_gray_carpet</td>
    </tr>
    <tr>
      <td>carpet ["color"="cyan"]</td>
      <td>cyan_carpet</td>
    </tr>
    <tr>
      <td>carpet ["color"="purple"]</td>
      <td>purple_carpet</td>
    </tr>
    <tr>
      <td>carpet ["color"="blue"]</td>
      <td>blue_carpet</td>
    </tr>
    <tr>
      <td>carpet ["color"="brown"]</td>
      <td>brown_carpet</td>
    </tr>
    <tr>
      <td>carpet ["color"="green"]</td>
      <td>green_carpet</td>
    </tr>
    <tr>
      <td>carpet ["color"="red"]</td>
      <td>red_carpet</td>
    </tr>
    <tr>
      <td>log ["old_log_type"="oak"]</td>
      <td>oak_log</td>
    </tr>
    <tr>
      <td>log ["old_log_type"="spruce"]</td>
      <td>spruce_log</td>
    </tr>
    <tr>
      <td>log ["old_log_type"="birch"]</td>
      <td>birch_log</td>
    </tr>
    <tr>
      <td>log ["old_log_type"="jungle"]</td>
      <td>jungle_log</td>
    </tr>
    <tr>
      <td>log2 ["new_log_type"="acacia"]</td>
      <td>acacia_log</td>
    </tr>
    <tr>
      <td>log2 ["new_log_type"="dark_oak"]</td>
      <td>dark_oak_log</td>
    </tr>
    <tr>
        <td rowspan="17">1.20.10</td>
    </tr>
    <tr>
      <td>concrete ["color"="white"]</td>
      <td>white_concrete</td>
    </tr>
    <tr>
      <td>concrete ["color"="silver"]</td>
      <td>light_gray_concrete</td>
    </tr>
    <tr>
      <td>concrete ["color"="gray"]</td>
      <td>gray_concrete</td>
    </tr>
    <tr>
      <td>concrete ["color"="black"]</td>
      <td>black_concrete</td>
    </tr>
    <tr>
      <td>concrete ["color"="brown"]</td>
      <td>brown_concrete</td>
    </tr>
    <tr>
      <td>concrete ["color"="red"]</td>
      <td>red_concrete</td>
    </tr>
    <tr>
      <td>concrete ["color"="orange"]</td>
      <td>orange_concrete</td>
    </tr>
    <tr>
      <td>concrete ["color"="yellow"]</td>
      <td>yellow_concrete</td>
    </tr>
    <tr>
      <td>concrete ["color"="lime"]</td>
      <td>lime_concrete</td>
    </tr>
    <tr>
      <td>concrete ["color"="green"]</td>
      <td>green_concrete</td>
    </tr>
    <tr>
      <td>concrete ["color"="cyan"]</td>
      <td>cyan_concrete</td>
    </tr>
    <tr>
      <td>concrete ["color"="light_blue"]</td>
      <td>light_blue_concrete</td>
    </tr>
    <tr>
      <td>concrete ["color"="blue"]</td>
      <td>blue_concrete</td>
    </tr>
    <tr>
      <td>concrete ["color"="purple"]</td>
      <td>purple_concrete</td>
    </tr>
    <tr>
      <td>concrete ["color"="magenta"]</td>
      <td>magenta_concrete</td>
    </tr>
    <tr>
      <td>concrete ["color"="pink"]</td>
      <td>pink_concrete</td>
    </tr>
    <tr>
        <td rowspan="33">1.20.30</td>
    </tr>
    <tr>
      <td>concrete_powder ["color"="white"]</td>
      <td>white_concrete_powder</td>
    </tr>
    <tr>
      <td>concrete_powder ["color"="silver"]</td>
      <td>light_gray_concrete_powder</td>
    </tr>
    <tr>
      <td>concrete_powder ["color"="gray"]</td>
      <td>gray_concrete_powder</td>
    </tr>
    <tr>
      <td>concrete_powder ["color"="black"]</td>
      <td>black_concrete_powder</td>
    </tr>
    <tr>
      <td>concrete_powder ["color"="brown"]</td>
      <td>brown_concrete_powder</td>
    </tr>
    <tr>
      <td>concrete_powder ["color"="red"]</td>
      <td>red_concrete_powder</td>
    </tr>
    <tr>
      <td>concrete_powder ["color"="orange"]</td>
      <td>orange_concrete_powder</td>
    </tr>
    <tr>
      <td>concrete_powder ["color"="yellow"]</td>
      <td>yellow_concrete_powder</td>
    </tr>
    <tr>
      <td>concrete_powder ["color"="lime"]</td>
      <td>lime_concrete_powder</td>
    </tr>
    <tr>
      <td>concrete_powder ["color"="green"]</td>
      <td>green_concrete_powder</td>
    </tr>
    <tr>
      <td>concrete_powder ["color"="cyan"]</td>
      <td>cyan_concrete_powder</td>
    </tr>
    <tr>
      <td>concrete_powder ["color"="light_blue"]</td>
      <td>light_blue_concrete_powder</td>
    </tr>
    <tr>
      <td>concrete_powder ["color"="blue"]</td>
      <td>blue_concrete_powder</td>
    </tr>
    <tr>
      <td>concrete_powder ["color"="purple"]</td>
      <td>purple_concrete_powder</td>
    </tr>
    <tr>
      <td>concrete_powder ["color"="magenta"]</td>
      <td>magenta_concrete_powder</td>
    </tr>
    <tr>
      <td>concrete_powder ["color"="pink"]</td>
      <td>pink_concrete_powder</td>
    </tr>
    <tr>
      <td>stained_hardened_clay ["color"="white"]</td>
      <td>white_terracotta</td>
    </tr>
    <tr>
      <td>stained_hardened_clay ["color"="orange"]</td>
      <td>orange_terracotta</td>
    </tr>
    <tr>
      <td>stained_hardened_clay ["color"="magenta"]</td>
      <td>magenta_terracotta</td>
    </tr>
    <tr>
      <td>stained_hardened_clay ["color"="light_blue"]</td>
      <td>light_blue_terracotta</td>
    </tr>
    <tr>
      <td>stained_hardened_clay ["color"="yellow"]</td>
      <td>yellow_terracotta</td>
    </tr>
    <tr>
      <td>stained_hardened_clay ["color"="lime"]</td>
      <td>lime_terracotta</td>
    </tr>
    <tr>
      <td>stained_hardened_clay ["color"="pink"]</td>
      <td>pink_terracotta</td>
    </tr>
    <tr>
      <td>stained_hardened_clay ["color"="gray"]</td>
      <td>gray_terracotta</td>
    </tr>
    <tr>
      <td>stained_hardened_clay ["color"="silver"]</td>
      <td>light_gray_terracotta</td>
    </tr>
    <tr>
      <td>stained_hardened_clay ["color"="cyan"]</td>
      <td>cyan_terracotta</td>
    </tr>
    <tr>
      <td>stained_hardened_clay ["color"="purple"]</td>
      <td>purple_terracotta</td>
    </tr>
    <tr>
      <td>stained_hardened_clay ["color"="blue"]</td>
      <td>blue_terracotta</td>
    </tr>
    <tr>
      <td>stained_hardened_clay ["color"="brown"]</td>
      <td>brown_terracotta</td>
    </tr>
    <tr>
      <td>stained_hardened_clay ["color"="green"]</td>
      <td>green_terracotta</td>
    </tr>
    <tr>
      <td>stained_hardened_clay ["color"="red"]</td>
      <td>red_terracotta</td>
    </tr>
    <tr>
      <td>stained_hardened_clay ["color"="black"]</td>
      <td>black_terracotta</td>
    </tr>
    <tr>
        <td rowspan="13">1.20.70</td>
    </tr>
    <tr>
      <td>wood ["wood_type"="acacia"]</td>
      <td>acacia_wood</td>
    </tr>
    <tr>
      <td>wood ["wood_type"="dark_oak"]</td>
      <td>dark_oak_wood</td>
    </tr>
    <tr>
      <td>wood ["wood_type"="oak"]</td>
      <td>oak_wood</td>
    </tr>
    <tr>
      <td>wood ["wood_type"="spruce"]</td>
      <td>spruce_wood</td>
    </tr>
    <tr>
      <td>wood ["wood_type"="birch"]</td>
      <td>birch_wood</td>
    </tr>
    <tr>
      <td>wood ["wood_type"="jungle"]</td>
      <td>jungle_wood</td>
    </tr>
    <tr>
      <td>wood ["wood_type"="acacia","stripped_bit"=true]</td>
      <td>stripped_acacia_wood</td>
    </tr>
    <tr>
      <td>wood ["wood_type"="dark_oak","stripped_bit"=true]</td>
      <td>stripped_dark_oak_wood</td>
    </tr>
    <tr>
      <td>wood ["wood_type"="oak","stripped_bit"=true]</td>
      <td>stripped_oak_wood</td>
    </tr>
    <tr>
      <td>wood ["wood_type"="spruce","stripped_bit"=true]</td>
      <td>stripped_spruce_wood</td>
    </tr>
    <tr>
      <td>wood ["wood_type"="birch","stripped_bit"=true]</td>
      <td>stripped_birch_wood</td>
    </tr>
    <tr>
      <td>wood ["wood_type"="jungle","stripped_bit"=true]</td>
      <td>stripped_jungle_wood</td>
    </tr>

</table>
