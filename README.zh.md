<h3 align="center">
	<img src="https://raw.githubusercontent.com/zhijun-dai/dsh-retro-mac/main/assets/preview.svg" width="720" alt="预览"/><br/>
	复古麦金塔 · <a href="https://github.com/deepseek-ai/deepseek-harness">DeepSeek Harness</a> 皮肤
</h3>

<p align="center">
	<a href="https://github.com/zhijun-dai/dsh-retro-mac/stargazers"><img src="https://img.shields.io/github/stars/zhijun-dai/dsh-retro-mac?style=for-the-badge&colorA=363a4f&colorB=b7bdf8"></a>
	<a href="https://github.com/zhijun-dai/dsh-retro-mac/issues"><img src="https://img.shields.io/github/issues/zhijun-dai/dsh-retro-mac?style=for-the-badge&colorA=363a4f&colorB=f5a97f"></a>
	<a href="https://github.com/zhijun-dai/dsh-retro-mac/blob/main/LICENSE"><img src="https://img.shields.io/github/license/zhijun-dai/dsh-retro-mac?style=for-the-badge&colorA=363a4f&colorB=a6da95"></a>
</p>

<p align="center">
	<a href="README.md">English</a> | 中文
</p>

为 DeepSeek Harness Web GUI 打造的一套经典 **Mac OS 8/9 Platinum** 皮肤——回到 1997 年：铂金灰界面、Chicago/Geneva/Monaco 字体、条纹壁纸、浮雕控件与硬阴影。

## 特性

- **双皮肤 × 四主题** —— **铂金**（浅色）与 **石墨**（深色）两套皮肤，各配**经典蓝**或 **System Teal 青**高亮——致敬 Appearance Manager 的可自定义高亮色盘。
- **103 个 token 全覆盖** —— Web 外壳消费的全部设计 token 都被重新映射，界面不再漏出任何现代 DeepSeek 蓝灰色。
- **Chicago 网页字体，零外部依赖** —— 免费 ChicagoFLF 克隆以 base64 `@font-face` 内联，插件是一个自包含文件；Geneva 与 Monaco 使用系统字体（带优雅回退）。
- **条纹壁纸** —— System 7 / Mac OS 8 标志性的桌面条纹用纯 CSS（`repeating-linear-gradient`）生成，无需下载图片、无版权问题。
- **铂金浮雕控件** —— 经典 2px 内嵌高光/阴影斜面的按钮、双线框默认按钮、内凹输入框、带黑色箭头符号的方形滚动条、`2px 2px 0` 硬阴影菜单、近乎零圆角。
- **理发店条纹进度条** —— 不确定进度指示渲染成经典条纹走马灯。
- **Happy Mac 彩蛋** —— 可选的启动画面（SVG 内联，默认关闭），设置行里有开关。
- **记住你的选择** —— 皮肤、高亮色与启动屏按浏览器持久化在 `localStorage`，启动时自动恢复。
- **对默认皮肤零侵入** —— 切回内置外观会逐像素还原，不留任何注入样式。
- **无障碍友好** —— 尊重 `prefers-reduced-motion`，需要减弱动效的用户所有微交互都会被禁用。

## 环境要求

- DeepSeek Harness web profile（`dsh web` / `dsh --profile web`）
- 支持 ES module 与 CSS 自定义属性的现代浏览器

## 安装

这是一个文件式 bundle 插件——像其他 DSH 插件包一样作为 profile 依赖添加：

```bash
# 在启动 dsh 的 npm exec 包装目录下执行
dsh plugin --profile web add dsh-retro-mac
```

或在 profile 的 `package.json` 中手动添加：

```json
{
  "dependencies": {
    "dsh-retro-mac": "^0.1.0"
  }
}
```

然后重启 web profile 并刷新页面。设置里会出现 **复古麦金塔** 设置行（Settings → Models 或主题选择器），包含：

- **皮肤**：`System`（内置）、`铂金`、`石墨`
- **高亮色**：`经典蓝`、`System Teal`
- **启动屏**：Happy Mac 启动画面开关

## 开发

```bash
# 从 src + themes 重新构建 lib/client.js（零依赖纯 Node）
npm run build

# 语法检查生成的 bundle
npm run check
```

构建会校验每个生成主题是否覆盖完整 103-key 基线并内联 Chicago 字体，主题表过期或不完整会直接报错。

## 许可证

[MIT](LICENSE) © dsh-retro-mac contributors
