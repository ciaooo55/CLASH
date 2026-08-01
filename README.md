# 🌐 CLASH 代理规则配置库

![Type](https://img.shields.io/badge/type-rules%20%26%20configs-5C6BC0)
![Clash](https://img.shields.io/badge/Clash%20%2F%20Mihomo-compatible-00A8E8)
![Subconverter](https://img.shields.io/badge/Subconverter-INI-orange)
![Formats](https://img.shields.io/badge/formats-YAML%20%7C%20INI%20%7C%20LIST%20%7C%20JS-informational)

一个个人代理配置与分流规则集合，包含多份订阅转换 INI、按用途拆分的规则列表、Clash/Mihomo 域名嗅探基础 YAML，以及 Quantumult X、Storm 使用的网络响应脚本。

> [!WARNING]
> 本仓库不是代理客户端，也不提供节点或代理服务。根目录存在多个时期的配置版本，不能默认合并使用；脚本目录还包含会改写第三方应用网络响应的高风险代码。导入任何文件前，请先阅读内容、确认来源并遵守相关软件和服务条款。

## 📌 项目速览

| 项目 | 说明 |
| --- | --- |
| 仓库名 | `CLASH` |
| 项目类型 | 配置、规则和网络响应脚本集合 |
| 主要客户端 | Clash/Mihomo 兼容客户端、Quantumult X、Storm |
| 订阅转换 | 根目录及 `CLASH/` 子目录中的 `.ini` 模板 |
| 规则列表 | `rules/*.list` |
| 基础配置 | `clash-rule-base-v22-domain-sniffer.yaml` |
| 代理节点 | 不提供 |
| 统一安装器 | 不提供；按客户端选择并导入具体文件 |

## 🧩 仓库内容

### 订阅转换 INI

根目录与 `CLASH/` 目录保存多份 subconverter 风格模板，例如 `全.ini`、`CLASH 10.11.ini`、`CLASH10.12.ini` 和若干按日期或用途命名的版本。它们主要定义：

- `ruleset` 远程规则源及目标策略组；
- 手动选择、自动测速、直连、拦截和漏网流量等代理组；
- AI、GitHub、Apple、媒体、游戏和国内外流量的分流顺序；
- 重命名、规则生成和基础 Clash 配置等转换选项。

这些模板之间存在重复和历史演进关系。每次应选定一份主模板，而不是把所有 INI 拼接起来。

### `rules/` 规则列表

规则按用途拆分，当前包括 AI、Apple、FCM、GitHub、Telegram、TikTok、YouTube、微软、游戏、抖音、Soul、国内外媒体、直连、拦截和 IP 相关规则等。它们可由订阅转换模板通过 Raw URL 引用，也可在兼容客户端中按其支持方式单独使用。

规则文件只决定流量如何匹配和分组，不会提供代理节点，也不能保证隐私、匿名性或地区可用性。

### 域名嗅探基础 YAML

`clash-rule-base-v22-domain-sniffer.yaml` 是 Clash/Mihomo 基础配置示例，目标是改善连接记录只有目标 IP、导致 `DOMAIN` 规则无法命中的情况。它启用了：

- HTTP、TLS 和 QUIC 域名嗅探；
- TUN 自动路由与 `any:53` DNS 劫持；
- `fake-ip` 增强 DNS 模式；
- 国内 DNS、境外 DoH、`nameserver-policy` 与回退过滤；
- 本机 `127.0.0.1:9090` 外部控制器。

该文件的 `proxies`、`proxy-groups` 和 `rules` 为空，不能作为完整订阅直接使用；端口、TUN、DNS 和局域网设置必须按设备调整。

### `QuantumultX/` 与 `storm/`

这些目录保存针对特定应用和域名的响应改写脚本，其中部分代码经过混淆，部分会改变会员状态、库存或页面响应。此类脚本与普通分流规则的风险完全不同：它们可以读取并修改网络响应，可能失效、破坏应用行为、触发账号风险或违反服务条款。

本 README 不提供这些脚本的启用步骤。只有在你能完整审计源码、确认合法授权和目标域名时才考虑使用；无法审计的混淆脚本应保持禁用。

## 🚀 使用前准备

1. 安装你信任的兼容客户端或订阅转换服务。
2. 确认客户端支持目标格式和相关字段；不同 Clash 分支并非完全兼容。
3. 导出现有可用配置作为回滚备份。
4. 选择一份文件，逐行检查其中的 Raw URL、代理组名称、端口和 DNS 设置。
5. 仅在测试配置中导入，确认语法通过后再切换。

## 🧭 使用方法

### 作为订阅转换模板

1. 从根目录或 `CLASH/` 目录选定一份 `.ini`。
2. 检查全部 `ruleset=` 指向的远程地址是否仍可访问且内容可信。
3. 确认每条规则引用的策略组在 `custom_proxy_group=` 中存在。
4. 在自己的 subconverter 服务中选择该模板，并输入自己的订阅地址。
5. 预览转换结果，检查生成配置后再导入客户端。

不要把真实订阅地址、节点、认证参数或转换服务密钥写回本仓库。

### 单独引用规则

1. 在 `rules/` 中选择需要的 `.list` 文件。
2. 使用 GitHub Raw 地址或下载后的本地文件接入客户端。
3. 将规则映射到现有策略组，并注意规则从上到下的匹配优先级。
4. 更新规则后检查是否有新增域名、IP 段或策略变化。

### 参考域名嗅探配置

1. 打开 `clash-rule-base-v22-domain-sniffer.yaml`，不要直接覆盖当前配置。
2. 按客户端文档逐项合并 `sniffer`、`tun` 和 `dns` 部分。
3. 检查 `allow-lan`、`bind-address`、DNS 监听端口和外部控制器设置。
4. 用少量域名验证连接记录、DNS 模式和规则命中情况。
5. 若出现断网、DNS 泄漏、局域网不可用或循环代理，立即恢复旧配置。

## ⚙️ 配置检查清单

| 检查项 | 需要确认的内容 |
| --- | --- |
| 客户端兼容性 | 是否支持目标 INI/YAML 字段及规则语法 |
| 远程规则 | URL 所有者、更新时间、内容和可用性 |
| 策略组 | 规则目标组是否存在，名称是否完全一致 |
| 规则顺序 | 专用规则是否位于兜底规则之前 |
| DNS | `fake-ip`、DoH、DNS 劫持与系统网络是否兼容 |
| TUN | 是否有管理员权限，路由和网卡选择是否正确 |
| 局域网 | 是否真的需要 `allow-lan: true` 与 `0.0.0.0` 监听 |
| 控制器 | 外部控制器是否只监听可信地址并配置访问保护 |

## 🗂️ 目录结构

```text
CLASH/
├─ *.ini                                      # 多个时期的订阅转换模板
├─ CLASH/*.ini                                # 其他用途/版本模板
├─ rules/*.list                               # 分类分流规则
├─ clash-rule-base-v22-domain-sniffer.yaml    # 嗅探、TUN 与 DNS 基础示例
├─ QuantumultX/                                # Quantumult X 响应脚本
├─ storm/                                      # Storm 响应脚本
└─ README.md
```

## 🛡️ 安全与隐私

- 不要提交订阅 URL、节点信息、用户名、密码、Cookie、控制器密钥或私人域名。
- Raw 规则会随远端仓库更新；更新前后内容可能不同，生产环境应固定可信版本或自行托管。
- `allow-lan: true` 配合 `bind-address: "*"` 会扩大局域网暴露面，不需要时应关闭。
- DNS 监听 `0.0.0.0:53`、TUN 路由和 DNS 劫持会影响整台设备的网络行为。
- 外部控制器应限制在本机或可信网段，并按客户端能力设置访问密钥。
- 网络响应脚本可能接触个人数据并改变第三方服务结果；混淆代码无法充分审计时不要运行。
- 规则库不能替代可信 DNS、端到端加密、客户端安全更新或服务合规判断。

## 🧪 开发与验证

仓库目前没有统一的自动化测试或构建脚本。修改后至少完成以下检查：

1. 用目标客户端或 subconverter 实际解析所改的 INI/YAML。
2. 检查所有 `ruleset` 的目标策略组和远程 URL。
3. 对 `.list` 文件抽查语法、重复项、失效域名和规则顺序。
4. 对未混淆的 JavaScript 可先进行基础语法检查：

   ```powershell
   node --check .\QuantumultX\maoyan\anniu1.js
   ```

5. 在隔离测试配置中验证 DNS、TUN、规则命中和回滚。

客户端能够加载配置只代表语法可接受，不代表分流结果、安全性或第三方脚本行为正确。
