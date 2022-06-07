import{_ as s,o as a,c as n,a as l}from"./app.da97164f.js";const p='{"title":"部署 Kami","description":"","frontmatter":{},"headers":[{"level":2,"title":"开始！","slug":"开始！"},{"level":2,"title":"拉取源文件","slug":"拉取源文件"},{"level":2,"title":"安装依赖","slug":"安装依赖"},{"level":2,"title":"构建","slug":"构建"},{"level":2,"title":"pm2 托管（启动）","slug":"pm2-托管（启动）"},{"level":2,"title":"反向代理","slug":"反向代理"},{"level":2,"title":"PS","slug":"ps"}],"relativePath":"deploy/kami/index.md"}',o={},e=[l('<h1 id="部署-kami" tabindex="-1">部署 Kami <a class="header-anchor" href="#部署-kami" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本文默认您已安装 服务端，若未安装请移步至 <a href="/deploy/core/core.html">Core 安装</a>，即本节内容从 <a href="/deploy/core/core.html">Core 安装</a>继承，所需要的前置内容已经在该节阐明！</p></div><h2 id="开始！" tabindex="-1">开始！ <a class="header-anchor" href="#开始！" aria-hidden="true">#</a></h2><h2 id="拉取源文件" tabindex="-1">拉取源文件 <a class="header-anchor" href="#拉取源文件" aria-hidden="true">#</a></h2><div class="language-bash"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#E0A569;">cd</span></span>\n<span class="line"><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> mx-space</span></span>\n<span class="line"><span style="color:#DBD7CA;">git clone https://github.com/mx-space/kami.git</span></span>\n<span class="line"><span style="color:#758575;"># 网络不好的情况，请使用下面的命令。</span></span>\n<span class="line"><span style="color:#DBD7CA;">git clone https://hub.fastgit.xyz/mx-space/kami.git</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#B58451;">cd</span></span>\n<span class="line"><span style="color:#B58451;">cd</span><span style="color:#393A34;"> mx-space</span></span>\n<span class="line"><span style="color:#393A34;">git clone https://github.com/mx-space/kami.git</span></span>\n<span class="line"><span style="color:#A0ADA0;"># 网络不好的情况，请使用下面的命令。</span></span>\n<span class="line"><span style="color:#393A34;">git clone https://hub.fastgit.xyz/mx-space/kami.git</span></span>\n<span class="line"></span></code></pre></div><p>更换分支到最后一个稳定版本</p><div class="language-bash"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> kami </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> git fetch --tags </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> git checkout </span><span style="color:#C98A7D;">$(git rev-list --tags --max-count=1)</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#B58451;">cd</span><span style="color:#393A34;"> kami </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> git fetch --tags </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> git checkout </span><span style="color:#B56959;">$(git rev-list --tags --max-count=1)</span></span>\n<span class="line"></span></code></pre></div><p>拉取图片文件</p><div class="language-bash"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#DBD7CA;">git lfs fetch --all</span></span>\n<span class="line"><span style="color:#DBD7CA;">git lfs pull</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#393A34;">git lfs fetch --all</span></span>\n<span class="line"><span style="color:#393A34;">git lfs pull</span></span>\n<span class="line"></span></code></pre></div><p>注意：如果无法正常拉取，可以到 GitHub 上手动下载。</p><p>执行该命令</p><div class="language-bash"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#DBD7CA;"> cp .env.example .env</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#393A34;"> cp .env.example .env</span></span>\n<span class="line"></span></code></pre></div><p>编辑 <code>.env</code>，示例如下：</p><div class="language-bash"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#758575;"># API 地址</span></span>\n<span class="line"><span style="color:#DBD7CA;">NEXT_PUBLIC_API_URL=https://server.test.cn/api/v2</span></span>\n<span class="line"><span style="color:#758575;"># GATEWAY 地址</span></span>\n<span class="line"><span style="color:#DBD7CA;">NEXT_PUBLIC_GATEWAY_URL=https://server.test.cn</span></span>\n<span class="line"><span style="color:#758575;">#前端使用的配置项名字</span></span>\n<span class="line"><span style="color:#DBD7CA;">NEXT_PUBLIC_SNIPPET_NAME=kami</span></span>\n<span class="line"><span style="color:#758575;"># 如果使用 CDN, 修改产物前缀</span></span>\n<span class="line"><span style="color:#DBD7CA;">ASSETPREFIX=</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#A0ADA0;"># API 地址</span></span>\n<span class="line"><span style="color:#393A34;">NEXT_PUBLIC_API_URL=https://server.test.cn/api/v2</span></span>\n<span class="line"><span style="color:#A0ADA0;"># GATEWAY 地址</span></span>\n<span class="line"><span style="color:#393A34;">NEXT_PUBLIC_GATEWAY_URL=https://server.test.cn</span></span>\n<span class="line"><span style="color:#A0ADA0;">#前端使用的配置项名字</span></span>\n<span class="line"><span style="color:#393A34;">NEXT_PUBLIC_SNIPPET_NAME=kami</span></span>\n<span class="line"><span style="color:#A0ADA0;"># 如果使用 CDN, 修改产物前缀</span></span>\n<span class="line"><span style="color:#393A34;">ASSETPREFIX=</span></span>\n<span class="line"></span></code></pre></div><p>去掉注释，保存即可。</p><h2 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a></h2><div class="language-bash"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#DBD7CA;">pnpm i</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#393A34;">pnpm i</span></span>\n<span class="line"></span></code></pre></div><h2 id="构建" tabindex="-1">构建 <a class="header-anchor" href="#构建" aria-hidden="true">#</a></h2><div class="language-bash"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#DBD7CA;">pnpm build</span></span>\n<span class="line"><span style="color:#758575;">#备用命令</span></span>\n<span class="line"><span style="color:#DBD7CA;">npm run build</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#393A34;">pnpm build</span></span>\n<span class="line"><span style="color:#A0ADA0;">#备用命令</span></span>\n<span class="line"><span style="color:#393A34;">npm run build</span></span>\n<span class="line"></span></code></pre></div><h2 id="pm2-托管（启动）" tabindex="-1">pm2 托管（启动） <a class="header-anchor" href="#pm2-托管（启动）" aria-hidden="true">#</a></h2><div class="language-bash"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#DBD7CA;">npm run prod:pm2</span></span>\n<span class="line"><span style="color:#758575;"># pm2 start</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#393A34;">npm run prod:pm2</span></span>\n<span class="line"><span style="color:#A0ADA0;"># pm2 start</span></span>\n<span class="line"></span></code></pre></div><h2 id="反向代理" tabindex="-1">反向代理 <a class="header-anchor" href="#反向代理" aria-hidden="true">#</a></h2><p>点击网站—网站，设置前端网站（<a href="http://www.test.cn" target="_blank" rel="noopener noreferrer">www.test.cn</a>），</p><p>我们点击左侧的 <code>配置文件</code>（网站设置）</p><p>在 <code>access_log</code> 字段上面，添加如下配置:</p><div class="language-nginx"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#758575;">#PROXY-START/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#4D9375;">location</span><span style="color:#DBD7CA;"> ^</span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> /</span></span>\n<span class="line"><span style="color:#DBD7CA;">{</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_pass </span><span style="color:#DBD7CA;">http://127.0.0.1:2323</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_set_header </span><span style="color:#DBD7CA;">Host </span><span style="color:#858585;">$</span><span style="color:#B8A965;">host</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_set_header </span><span style="color:#DBD7CA;">X-Real-IP </span><span style="color:#858585;">$</span><span style="color:#B8A965;">remote_addr</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_set_header </span><span style="color:#DBD7CA;">X-Forwarded-For </span><span style="color:#858585;">$</span><span style="color:#B8A965;">proxy_add_x_forwarded_for</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_set_header </span><span style="color:#DBD7CA;">REMOTE-HOST </span><span style="color:#858585;">$</span><span style="color:#B8A965;">remote_addr</span><span style="color:#858585;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> add_header </span><span style="color:#DBD7CA;">X-Cache </span><span style="color:#858585;">$</span><span style="color:#B8A965;">upstream_cache_status</span><span style="color:#858585;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#758575;">#Set Nginx Cache</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> set </span><span style="color:#858585;">$</span><span style="color:#B8A965;">static_fileSw1Jy3nG</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">0</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> ( </span><span style="color:#858585;">$</span><span style="color:#B8A965;">uri</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">~* </span><span style="color:#C98A7D;">&quot;\\.(gif|png|jpg|css|js|woff|woff2)$&quot;</span><span style="color:#DBD7CA;"> )</span></span>\n<span class="line"><span style="color:#DBD7CA;">    {</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">\tset </span><span style="color:#858585;">$</span><span style="color:#B8A965;">static_fileSw1Jy3nG</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">1</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">\texpires </span><span style="color:#DBD7CA;">12h</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">        }</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> ( </span><span style="color:#858585;">$</span><span style="color:#B8A965;">static_fileSw1Jy3nG</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">= </span><span style="color:#DBD7CA;">0 )</span></span>\n<span class="line"><span style="color:#DBD7CA;">    {</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> add_header </span><span style="color:#DBD7CA;">Cache-Control no-cache</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">    }</span></span>\n<span class="line"><span style="color:#DBD7CA;">}</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#758575;">#PROXY-END/</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#A0ADA0;">#PROXY-START/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#1C6B48;">location</span><span style="color:#393A34;"> ^</span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> /</span></span>\n<span class="line"><span style="color:#393A34;">{</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_pass </span><span style="color:#393A34;">http://127.0.0.1:2323</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_set_header </span><span style="color:#393A34;">Host </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">host</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_set_header </span><span style="color:#393A34;">X-Real-IP </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">remote_addr</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_set_header </span><span style="color:#393A34;">X-Forwarded-For </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">proxy_add_x_forwarded_for</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_set_header </span><span style="color:#393A34;">REMOTE-HOST </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">remote_addr</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> add_header </span><span style="color:#393A34;">X-Cache </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">upstream_cache_status</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">#Set Nginx Cache</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> set </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">static_fileSw1Jy3nG</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">0</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> ( </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">uri</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">~* </span><span style="color:#B56959;">&quot;\\.(gif|png|jpg|css|js|woff|woff2)$&quot;</span><span style="color:#393A34;"> )</span></span>\n<span class="line"><span style="color:#393A34;">    {</span></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">\tset </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">static_fileSw1Jy3nG</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">1</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">\texpires </span><span style="color:#393A34;">12h</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">        }</span></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> ( </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">static_fileSw1Jy3nG</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">= </span><span style="color:#393A34;">0 )</span></span>\n<span class="line"><span style="color:#393A34;">    {</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> add_header </span><span style="color:#393A34;">Cache-Control no-cache</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">    }</span></span>\n<span class="line"><span style="color:#393A34;">}</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A0ADA0;">#PROXY-END/</span></span>\n<span class="line"></span></code></pre></div><p>保存即可。</p><p>然后那么局部配置文件示例如下：</p><div class="language-nginx"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#758575;">#PROXY-START/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#4D9375;">location</span><span style="color:#DBD7CA;"> ^</span><span style="color:#CB7676;">~</span><span style="color:#DBD7CA;"> /</span></span>\n<span class="line"><span style="color:#DBD7CA;">{</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_pass </span><span style="color:#DBD7CA;">http://127.0.0.1:2323</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_set_header </span><span style="color:#DBD7CA;">Host </span><span style="color:#858585;">$</span><span style="color:#B8A965;">host</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_set_header </span><span style="color:#DBD7CA;">X-Real-IP </span><span style="color:#858585;">$</span><span style="color:#B8A965;">remote_addr</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_set_header </span><span style="color:#DBD7CA;">X-Forwarded-For </span><span style="color:#858585;">$</span><span style="color:#B8A965;">proxy_add_x_forwarded_for</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_set_header </span><span style="color:#DBD7CA;">REMOTE-HOST </span><span style="color:#858585;">$</span><span style="color:#B8A965;">remote_addr</span><span style="color:#858585;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> add_header </span><span style="color:#DBD7CA;">X-Cache </span><span style="color:#858585;">$</span><span style="color:#B8A965;">upstream_cache_status</span><span style="color:#858585;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#758575;">#Set Nginx Cache</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> set </span><span style="color:#858585;">$</span><span style="color:#B8A965;">static_fileSw1Jy3nG</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">0</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> ( </span><span style="color:#858585;">$</span><span style="color:#B8A965;">uri</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">~* </span><span style="color:#C98A7D;">&quot;\\.(gif|png|jpg|css|js|woff|woff2)$&quot;</span><span style="color:#DBD7CA;"> )</span></span>\n<span class="line"><span style="color:#DBD7CA;">    {</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">\tset </span><span style="color:#858585;">$</span><span style="color:#B8A965;">static_fileSw1Jy3nG</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">1</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">\texpires </span><span style="color:#DBD7CA;">12h</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">        }</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> ( </span><span style="color:#858585;">$</span><span style="color:#B8A965;">static_fileSw1Jy3nG</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">= </span><span style="color:#DBD7CA;">0 )</span></span>\n<span class="line"><span style="color:#DBD7CA;">    {</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> add_header </span><span style="color:#DBD7CA;">Cache-Control no-cache</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">    }</span></span>\n<span class="line"><span style="color:#DBD7CA;">}</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#758575;">#PROXY-END/</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> access_log </span><span style="color:#DBD7CA;"> /www/wwwlogs/www.test.cn.log</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> error_log </span><span style="color:#DBD7CA;"> /www/wwwlogs/www.test.cn.log</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">}</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#A0ADA0;">#PROXY-START/</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#1C6B48;">location</span><span style="color:#393A34;"> ^</span><span style="color:#AB5959;">~</span><span style="color:#393A34;"> /</span></span>\n<span class="line"><span style="color:#393A34;">{</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_pass </span><span style="color:#393A34;">http://127.0.0.1:2323</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_set_header </span><span style="color:#393A34;">Host </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">host</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_set_header </span><span style="color:#393A34;">X-Real-IP </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">remote_addr</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_set_header </span><span style="color:#393A34;">X-Forwarded-For </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">proxy_add_x_forwarded_for</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_set_header </span><span style="color:#393A34;">REMOTE-HOST </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">remote_addr</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> add_header </span><span style="color:#393A34;">X-Cache </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">upstream_cache_status</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">#Set Nginx Cache</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> set </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">static_fileSw1Jy3nG</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">0</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> ( </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">uri</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">~* </span><span style="color:#B56959;">&quot;\\.(gif|png|jpg|css|js|woff|woff2)$&quot;</span><span style="color:#393A34;"> )</span></span>\n<span class="line"><span style="color:#393A34;">    {</span></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">\tset </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">static_fileSw1Jy3nG</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">1</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">\texpires </span><span style="color:#393A34;">12h</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">        }</span></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> ( </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">static_fileSw1Jy3nG</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">= </span><span style="color:#393A34;">0 )</span></span>\n<span class="line"><span style="color:#393A34;">    {</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> add_header </span><span style="color:#393A34;">Cache-Control no-cache</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">    }</span></span>\n<span class="line"><span style="color:#393A34;">}</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A0ADA0;">#PROXY-END/</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> access_log </span><span style="color:#393A34;"> /www/wwwlogs/www.test.cn.log</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> error_log </span><span style="color:#393A34;"> /www/wwwlogs/www.test.cn.log</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">}</span></span>\n<span class="line"></span></code></pre></div><p>接下来访问 <a href="https://www.test.cn/" target="_blank" rel="noopener noreferrer">https://www.test.cn/</a> ，看看运行是否正常，若有不正常请自行参与文档解决，或者提 <a href="https://github.com/mx-space/docs/issues" target="_blank" rel="noopener noreferrer">issue</a></p><h2 id="ps" tabindex="-1">PS <a class="header-anchor" href="#ps" aria-hidden="true">#</a></h2><p>可能需要的章节 <a href="/options/">Kami 设置</a></p><p>可能需要的章节 <a href="/options/serverless.html">云函数配置</a></p>',33)];var c=s(o,[["render",function(s,l,p,o,c,r){return a(),n("div",null,e)}]]);export{p as __pageData,c as default};
