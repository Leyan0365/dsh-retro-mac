<h3 align="center">
	<img src="https://raw.githubusercontent.com/Leyan0365/dsh-retro-mac/main/assets/preview.svg" width="720" alt="预览"/><br/>
	复古麦金塔 · <a href="https://github.com/deepseek-ai/deepseek-harness">DeepSeek Harness</a> 皮肤
</h3>

<p align="center">
	<em>像 1997 年那样工作。 · Work like it's 1997.</em>
</p>

<p align="center">
	<a href="https://github.com/Leyan0365/dsh-retro-mac/stargazers"><img src="https://img.shields.io/github/stars/Leyan0365/dsh-retro-mac?style=for-the-badge&colorA=363a4f&colorB=b7bdf8"></a>
	<a href="https://github.com/Leyan0365/dsh-retro-mac/forks"><img src="https://img.shields.io/github/forks/Leyan0365/dsh-retro-mac?style=for-the-badge&colorA=363a4f&colorB=cba6f7"></a>
	<a href="https://github.com/Leyan0365/dsh-retro-mac/issues"><img src="https://img.shields.io/github/issues/Leyan0365/dsh-retro-mac?style=for-the-badge&colorA=363a4f&colorB=f5a97f"></a>
	<a href="https://github.com/Leyan0365/dsh-retro-mac/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Leyan0365/dsh-retro-mac?style=for-the-badge&colorA=363a4f&colorB=a6da95"></a>
</p>

<p align="center">
	<a href="README.md">English</a> | 中文
</p>

为 DeepSeek Harness Web GUI 打造的一套经典 **Mac OS 8/9 Platinum** 皮肤——回到 1997 年：铂金灰界面、Chicago/Geneva/Monaco 字体、条纹壁纸、浮雕控件与硬阴影。

> ⭐ 喜欢的话给仓库点个 star，帮助更多人发现这个插件。

## 为什么值得一试

- **怀旧，但做得认真** —— 忠实还原 System 7 → Mac OS 9 设计语言，不是简单的灰色主题：铂金 chrome、经典字体、条纹桌面、浮雕按钮、硬阴影。
- **完全自包含** —— Chicago 字体以 base64 内联、条纹壁纸纯 CSS 生成。整个插件只有一个 47KB 文件，**零外部资源、零下载**。
- **一套插件四种主题** —— **铂金**（浅）与**石墨**（深）双皮肤，各配**经典蓝**或 **System Teal 青**高亮——致敬 Appearance Manager 的可自定义高亮色盘。
- **沉浸感十足** —— Web 外壳消费的全部 103 个设计 token 都被重新映射，界面不再漏出任何现代 DeepSeek 蓝灰色。
- **尊重你的默认设置** —— 切回内置外观会逐像素还原，不留任何注入样式。

## 特性

- **双皮肤 × 四主题** —— **铂金**（浅）/**石墨**（深）× **经典蓝**/**System Teal**。
- **103 个 token 全覆盖** —— 全部设计 token 被重新映射，构建时自动校验。
- **Chicago 网页字体，零外部依赖** —— 免费 ChicagoFLF 克隆以 base64 `@font-face` 内联；Geneva 与 Monaco 使用系统字体，带优雅回退。
- **条纹壁纸** —— System 7 / Mac OS 8 标志性桌面图案，纯 CSS 生成，无图片下载、无版权问题。
- **铂金浮雕控件** —— 经典 2px 内嵌高光/阴影斜面按钮、双线框默认按钮、内凹输入框、带黑色箭头符号的方形滚动条、`2px 2px 0` 硬阴影、近乎零圆角。
- **理发店条纹进度条** —— 不确定进度指示渲染成经典条纹走马灯。
- **Happy Mac 彩蛋** —— 可选启动画面（内联 SVG，默认关闭），设置行里有开关。
- **记住你的选择** —— 皮肤、高亮色与启动屏按浏览器持久化在 `localStorage`。
- **对默认皮肤零侵入** —— 随时切回，逐像素还原。
- **无障碍友好** —— 尊重 `prefers-reduced-motion`，需要时禁用全部微交互。

## 环境要求

- DeepSeek Harness web profile（`dsh web` / `dsh --profile web`）
- 支持 ES module 与 CSS 自定义属性的现代浏览器

## 安装

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

然后重启 web profile 并刷新页面。设置里会出现 **复古麦金塔** 设置行，包含：

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
