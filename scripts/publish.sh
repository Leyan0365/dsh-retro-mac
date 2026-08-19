#!/usr/bin/env bash
# dsh-retro-mac 一键发布脚本
# 用法：./scripts/publish.sh  （需已通过 npm login 或 NPM_TOKEN 认证）
#
# 注意：本机默认 registry 被环境变量设为淘宝镜像（registry.npmmirror.com），
# 发布必须显式指向官方 registry，否则包不会出现在 npm 官方源上。

set -euo pipefail
cd "$(dirname "$0")/.."

REGISTRY="https://registry.npmjs.org"

echo "==> 1/3 构建并校验"
npm run build
npm run check

echo "==> 2/3 打包预演（确认文件清单）"
npm pack --dry-run

echo "==> 3/3 发布到官方 npm registry"
if [ -n "${NPM_TOKEN:-}" ]; then
  # 通过环境变量 token 发布（不写入磁盘）
  npm publish --registry "$REGISTRY" --//registry.npmjs.org/:_authToken="$NPM_TOKEN"
else
  # 交互式登录后发布（会要求输入用户名/密码/邮箱）
  npm publish --registry "$REGISTRY"
fi

echo "==> 发布完成 ✅  https://www.npmjs.com/package/dsh-retro-mac"
