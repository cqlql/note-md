## subconverter 介绍
合并订阅、转换订阅、创建策略组等



## 合并订阅链接 -- subconverter
这里使用 subconverter 工具实现。[去下载](https://github.com/tindy2013/subconverter/releases)

下好后，运行 subconverter.exe，再关闭，这时会生成一个 pref.toml，编辑此文件，找到 default_url 字段，设置多个订阅链接，如下：

```yaml
default_url = ["https://1.txt","https://2.txt"]
```

接着再次运行 subconverter.exe，在 Clash 中输入合并后的订阅链接即可：

```yaml
http://localhost:25500/clash
```

其中 clash 指定最终转换的订阅链接类型



生成配置后就可以关闭了。需要更新订阅时再开启。或者一直开着更好，可以自动更新。



## 直接指定订阅链接 -- subconverter
例子指定了单个订阅链接，主要是为了使用 subconverter 生成负载均衡

```yaml
http://127.0.0.1:25500/clash?url=https://www.igogonet.cc/link/u4CuNx94Xgh6vmMd?clash=1
```

## 负载均衡 -- subconverter 
```toml
[[custom_groups]]
name = "🔰 节点选择"
type = "select"
rule = ["[]🔄 负载均衡--轮询","[]🔀 负载均衡--散列","[]♻️ 自动选择", "[]🎯 全球直连", ".*"]

[[custom_groups]]
name = "🔄 负载均衡--轮询"
type = "load-balance"
rule = ["[]♻️ 自动选择","[]🎯 全球直连",".*"]
interval = 300
timeout = 1
strategy = "round-robin"
url = "http://www.gstatic.com/generate_204"

[[custom_groups]]
name = "🔀 负载均衡--散列"
type = "load-balance"
rule = ["[]♻️ 自动选择","[]🎯 全球直连",".*"]
interval = 300
timeout = 1
strategy = "consistent-hashing"
url = "http://www.gstatic.com/generate_204"

```

## 负载均衡 -- Clash -- 预处理方式
通过配置 Clash 的 parsers（预处理）实现负载均衡，以下是预处理代码。还需要在订阅链接后加 `#slbable`

```yaml
parsers:
  - reg: 'slbable$'
    yaml:
      append-proxy-groups:
        - name: 负载均衡-散列
          type: load-balance
          url: 'http://www.google.com/generate_204'
          interval: 300
          strategy: consistent-hashing
        - name: 负载均衡-轮询
          type: load-balance
          url: 'http://www.google.com/generate_204'
          interval: 300
          strategy: round-robin
      commands:
        - proxy-groups.负载均衡-散列.proxies=[]proxyNames
        - proxy-groups.0.proxies.0+负载均衡-散列
        - proxy-groups.负载均衡-轮询.proxies=[]proxyNames
        - proxy-groups.0.proxies.0+负载均衡-轮询
```



## 扩展脚本

```js
function main(config) {
  // 将服务器添加到代理组中
  config["proxy-groups"][0].proxies.unshift('xx2')
  return config;
}
```
