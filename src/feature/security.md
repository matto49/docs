# 信息加密与安全性

在 v3.41.0 后续版本，加入了敏感信息加密功能。默认为关。

为什么需要信息加密。

假设黑客通过某种手段数据库被脱库。如果开启了信息加密，即便是拿到了全部数据也不能解密某些关键数据，例如配置项中的各类 API Key。

但是，也需要谨慎开启此功能，开启后你需要记住加密秘钥。否则，你也将会永远丢失这些数据。

## 如何开启

你可以附加 `--encrypt_enable` 来启动服务。如：

```bash
node index.js --encrypt_enable
```

可以通过附加 `--encrypt_key <key>` 来指定加密密钥，长度必须为 64 位。请牢记此密钥。或者通过环境变量 `MX_ENCRYPT_KEY` 也可以指定密钥。

::: info
`MX_ENCRYPT_KEY` `--encrypt_key` 不是必须的，默认取机器的 [machine-id](https://www.npmjs.com/package/node-machine-id)。
:::

::: warning
此操作时不可逆的，操作前请备份数据库。
:::

## 自动化加密配置（进阶指令）（非必要）

::: danger
此操作时也是不可逆的，操作前请备份数据库。
:::

```bash
cd core
tsx src/migration/helper/encrypt-configs.ts 
```
