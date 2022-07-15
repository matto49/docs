import{_ as s,o as a,c as n,a as p,b as l}from"./app.b0118de6.js";const o='{"title":"Mix Space Core 部署","description":"","frontmatter":{},"headers":[{"level":2,"title":"视频教程","slug":"视频教程"},{"level":2,"title":"域名解析","slug":"域名解析"},{"level":2,"title":"准备环境","slug":"准备环境"},{"level":3,"title":"系统","slug":"系统"},{"level":3,"title":"安装面板","slug":"安装面板"},{"level":3,"title":"新建网站并配置 SSL","slug":"新建网站并配置-ssl"},{"level":3,"title":"安装 docker","slug":"安装-docker"},{"level":2,"title":"安装 Core","slug":"安装-core"},{"level":3,"title":"准备","slug":"准备"},{"level":3,"title":"生成容器","slug":"生成容器"},{"level":2,"title":"反向代理","slug":"反向代理"},{"level":3,"title":"Mix Space Core","slug":"mix-space-core"},{"level":2,"title":"初始化","slug":"初始化"}],"relativePath":"deploy/core/core.md"}',e={},c=[p('<h1 id="mix-space-core-部署" tabindex="-1">Mix Space Core 部署 <a class="header-anchor" href="#mix-space-core-部署" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>推荐使用 Docker Compose 部署整个环境。<a href="/deploy/">请点这里</a></p></div><h2 id="视频教程" tabindex="-1">视频教程 <a class="header-anchor" href="#视频教程" aria-hidden="true">#</a></h2><p><a href="https://www.bilibili.com/video/BV14N4y137ZW" target="_blank" rel="noopener noreferrer">哔哩哔哩 - 超可爱的前后端分离博客Mix-space搭建教程</a></p>',4),l("iframe",{src:"//player.bilibili.com/player.html?aid=897657356&cid=753224871&page=1",scrolling:"no",allowfullscreen:"true",style:{width:"100%",height:"60vmin"}}," ",-1),p('<p>配合文档食用效果更佳。</p><h2 id="域名解析" tabindex="-1">域名解析 <a class="header-anchor" href="#域名解析" aria-hidden="true">#</a></h2><p>国内服务器请完成备案后再进行。</p><p>本文档示例域名：</p><p><code>Mix Space Core</code> : <code>server.test.cn</code></p><p><code>kami</code> : <code>www.test.cn</code></p><h2 id="准备环境" tabindex="-1">准备环境 <a class="header-anchor" href="#准备环境" aria-hidden="true">#</a></h2><h3 id="系统" tabindex="-1">系统 <a class="header-anchor" href="#系统" aria-hidden="true">#</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>❗ 注意：文档未考虑对 Windows 的支持工作，Windows 的使用者请自行处理兼容性问题；</p><p>Linux 内核版本 &gt; 4.18，建议使用 5.X 版本的内核；内存 &gt; 1 GiB ！</p></div><p>例如 Ubuntu、Debian 最新版等等，不建议使用 CentOS（终究是要停更的）。</p><p><strong>推荐使用较高版本的 Linux 内核。</strong></p><h3 id="安装面板" tabindex="-1">安装面板 <a class="header-anchor" href="#安装面板" aria-hidden="true">#</a></h3><p>安装<a href="https://www.bt.cn/bbs/thread-19376-1-1.html" target="_blank" rel="noopener noreferrer">宝塔面板</a>，在宝塔面板—软件商店，安装 <code>pm2管理器</code> ，<code>Nginx</code>。</p><p>Node 版本选择 Node 16.X ，稳定版本是 Node 16.16.x</p><p>Debian / Ubuntu ，RedHat (CentOS)系同理（自行参考）</p><div class="language-bash"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#DBD7CA;">sudo apt update </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> sudo apt install git curl vim wget git-lfs -y</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#393A34;">sudo apt update </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> sudo apt install git curl vim wget git-lfs -y</span></span>\n<span class="line"></span></code></pre></div><p>RedHat系，例如 CentOS</p><div class="language-bash"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#DBD7CA;">yum/dnf check-update </span><span style="color:#CB7676;">&amp;&amp;</span><span style="color:#DBD7CA;"> yum/dnf git curl vim wget git-lfs</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#393A34;">yum/dnf check-update </span><span style="color:#AB5959;">&amp;&amp;</span><span style="color:#393A34;"> yum/dnf git curl vim wget git-lfs</span></span>\n<span class="line"></span></code></pre></div><p>安装相关软件</p><div class="language-bash"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#758575;"># 安装相关软件</span></span>\n<span class="line"><span style="color:#DBD7CA;">sudo su</span></span>\n<span class="line"><span style="color:#DBD7CA;">npm install -g pnpm pm2</span></span>\n<span class="line"><span style="color:#758575;"># 如果安装比较慢，可以使用以下命令切换镜像源</span></span>\n<span class="line"><span style="color:#DBD7CA;">npm config </span><span style="color:#E0A569;">set</span><span style="color:#DBD7CA;"> registry http://mirrors.cloud.tencent.com/npm/</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#A0ADA0;"># 安装相关软件</span></span>\n<span class="line"><span style="color:#393A34;">sudo su</span></span>\n<span class="line"><span style="color:#393A34;">npm install -g pnpm pm2</span></span>\n<span class="line"><span style="color:#A0ADA0;"># 如果安装比较慢，可以使用以下命令切换镜像源</span></span>\n<span class="line"><span style="color:#393A34;">npm config </span><span style="color:#B58451;">set</span><span style="color:#393A34;"> registry http://mirrors.cloud.tencent.com/npm/</span></span>\n<span class="line"></span></code></pre></div><h3 id="新建网站并配置-ssl" tabindex="-1">新建网站并配置 SSL <a class="header-anchor" href="#新建网站并配置-ssl" aria-hidden="true">#</a></h3><p>在宝塔面板上新建以上网站，部署好 SSL 证书并开启强制 HTTPS</p><div class="danger custom-block"><p class="custom-block-title">WARNING</p><p>🧨 警告：前端要求强制 HTTPS，未配置 SSL 将无法正常访问。</p></div><h3 id="安装-docker" tabindex="-1">安装 docker <a class="header-anchor" href="#安装-docker" aria-hidden="true">#</a></h3><div class="language-bash"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#DBD7CA;">curl -fsSL https://get.docker.com </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> bash -s docker</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#758575;"># 如果安装比较慢，推荐使用以下命令</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">curl -fsSL https://get.docker.com </span><span style="color:#CB7676;">|</span><span style="color:#DBD7CA;"> bash -s docker --mirror Aliyun</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#393A34;">curl -fsSL https://get.docker.com </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> bash -s docker</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A0ADA0;"># 如果安装比较慢，推荐使用以下命令</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">curl -fsSL https://get.docker.com </span><span style="color:#AB5959;">|</span><span style="color:#393A34;"> bash -s docker --mirror Aliyun</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre></div><p>检查是否安装完成</p><div class="language-bash"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#DBD7CA;">docker compose version</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#393A34;">docker compose version</span></span>\n<span class="line"></span></code></pre></div><p>正常输出版本号即可</p><h2 id="安装-core" tabindex="-1">安装 Core <a class="header-anchor" href="#安装-core" aria-hidden="true">#</a></h2><h3 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-hidden="true">#</a></h3><p>为了方便管理建议将 <code>docker-compose.yml</code> 放到 <code>mx-space/server</code> 下</p><div class="language-bash"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#E0A569;">cd</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">mkdir -p mx-space/server</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#E0A569;">cd</span><span style="color:#DBD7CA;"> mx-space/server</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">wget https://fastly.jsdelivr.net/gh/mx-space/core@master/docker-compose.yml</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">wget https://fastly.jsdelivr.net/gh/mx-space/core@master/.env.example -O .env</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#B58451;">cd</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">mkdir -p mx-space/server</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#B58451;">cd</span><span style="color:#393A34;"> mx-space/server</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">wget https://fastly.jsdelivr.net/gh/mx-space/core@master/docker-compose.yml</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">wget https://fastly.jsdelivr.net/gh/mx-space/core@master/.env.example -O .env</span></span>\n<span class="line"></span></code></pre></div><p>用宝塔或者 <code>vim</code> 编辑这个 <code>.env</code> 文件，文件示例如下</p><div class="language-"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#dbd7ca;"># THIS ENV FILE EXAMPLE ONLY FOR DOCKER COMPOSE</span></span>\n<span class="line"><span style="color:#dbd7ca;"># SEE https://docs.docker.com/compose/environment-variables/#the-env-file</span></span>\n<span class="line"><span style="color:#dbd7ca;">JWT_SECRET=7294c34e0b28ad28          #此处填写一个长度不小于16个字符，不大于32个字符的字符串，示例如：hash 的 md5 值</span></span>\n<span class="line"><span style="color:#dbd7ca;">ALLOWED_ORIGINS=test.cn,www.test.cn  #此处填写被允许的域名，通常是kami的域名，如果允许多个域名访问，用英文逗号,分隔</span></span>\n<span class="line"><span style="color:#dbd7ca;"></span></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#393a34;"># THIS ENV FILE EXAMPLE ONLY FOR DOCKER COMPOSE</span></span>\n<span class="line"><span style="color:#393a34;"># SEE https://docs.docker.com/compose/environment-variables/#the-env-file</span></span>\n<span class="line"><span style="color:#393a34;">JWT_SECRET=7294c34e0b28ad28          #此处填写一个长度不小于16个字符，不大于32个字符的字符串，示例如：hash 的 md5 值</span></span>\n<span class="line"><span style="color:#393a34;">ALLOWED_ORIGINS=test.cn,www.test.cn  #此处填写被允许的域名，通常是kami的域名，如果允许多个域名访问，用英文逗号,分隔</span></span>\n<span class="line"><span style="color:#393a34;"></span></span></code></pre></div><h3 id="生成容器" tabindex="-1">生成容器 <a class="header-anchor" href="#生成容器" aria-hidden="true">#</a></h3><div class="language-bash"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#758575;"># 拉取最新镜像</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">sudo docker compose pull</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#758575;"># 启动容器</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">sudo docker compose up -d</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#A0ADA0;"># 拉取最新镜像</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">sudo docker compose pull</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A0ADA0;"># 启动容器</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">sudo docker compose up -d</span></span>\n<span class="line"></span></code></pre></div><h2 id="反向代理" tabindex="-1">反向代理 <a class="header-anchor" href="#反向代理" aria-hidden="true">#</a></h2><h3 id="mix-space-core" tabindex="-1">Mix Space Core <a class="header-anchor" href="#mix-space-core" aria-hidden="true">#</a></h3><p>进入宝塔面板—网站，设置后端网站（<a href="http://server.test.cn" target="_blank" rel="noopener noreferrer">server.test.cn</a>)</p><p>我们点击左侧的 <code>配置文件</code>（网站设置）</p><p>在 <code>access_log</code> 字段上面，添加如下配置:</p><div class="language-nginx"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#758575;">#PROXY-START/</span></span>\n<span class="line"><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">/socket.io </span><span style="color:#DBD7CA;">{</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_http_version </span><span style="color:#DBD7CA;">1.1</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_buffering </span><span style="color:#DBD7CA;">off</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_set_header </span><span style="color:#DBD7CA;">Upgrade </span><span style="color:#858585;">$</span><span style="color:#B8A965;">http_upgrade</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_set_header </span><span style="color:#DBD7CA;">Connection </span><span style="color:#C98A7D;">&quot;Upgrade&quot;</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_pass </span><span style="color:#DBD7CA;">http://127.0.0.1:2333/socket.io</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">}</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#4D9375;">location</span><span style="color:#DBD7CA;"> /</span></span>\n<span class="line"><span style="color:#DBD7CA;">{</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_pass </span><span style="color:#DBD7CA;">http://127.0.0.1:2333/</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_set_header </span><span style="color:#DBD7CA;">Host </span><span style="color:#858585;">$</span><span style="color:#B8A965;">host</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_set_header </span><span style="color:#DBD7CA;">X-Real-IP </span><span style="color:#858585;">$</span><span style="color:#B8A965;">remote_addr</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_set_header </span><span style="color:#DBD7CA;">X-Forwarded-For </span><span style="color:#858585;">$</span><span style="color:#B8A965;">proxy_add_x_forwarded_for</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_set_header </span><span style="color:#DBD7CA;">REMOTE-HOST </span><span style="color:#858585;">$</span><span style="color:#B8A965;">remote_addr</span><span style="color:#858585;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> add_header </span><span style="color:#DBD7CA;">X-Cache </span><span style="color:#858585;">$</span><span style="color:#B8A965;">upstream_cache_status</span><span style="color:#858585;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#758575;">#Set Nginx Cache</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> set </span><span style="color:#858585;">$</span><span style="color:#B8A965;">static_fileJsNv8TWb</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">0</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> ( </span><span style="color:#858585;">$</span><span style="color:#B8A965;">uri</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">~* </span><span style="color:#C98A7D;">&quot;\\.(gif|png|jpg|css|js|woff|woff2)$&quot;</span><span style="color:#DBD7CA;"> )</span></span>\n<span class="line"><span style="color:#DBD7CA;">    {</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">\tset </span><span style="color:#858585;">$</span><span style="color:#B8A965;">static_fileJsNv8TWb</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">1</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">\texpires </span><span style="color:#DBD7CA;">12h</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">        }</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> ( </span><span style="color:#858585;">$</span><span style="color:#B8A965;">static_fileJsNv8TWb</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">= </span><span style="color:#DBD7CA;">0 )</span></span>\n<span class="line"><span style="color:#DBD7CA;">    {</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> add_header </span><span style="color:#DBD7CA;">Cache-Control no-cache</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">    }</span></span>\n<span class="line"><span style="color:#DBD7CA;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#758575;">#PROXY-END/</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#A0ADA0;">#PROXY-START/</span></span>\n<span class="line"><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">/socket.io </span><span style="color:#393A34;">{</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_http_version </span><span style="color:#393A34;">1.1</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_buffering </span><span style="color:#393A34;">off</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_set_header </span><span style="color:#393A34;">Upgrade </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">http_upgrade</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_set_header </span><span style="color:#393A34;">Connection </span><span style="color:#B56959;">&quot;Upgrade&quot;</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_pass </span><span style="color:#393A34;">http://127.0.0.1:2333/socket.io</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">}</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#1C6B48;">location</span><span style="color:#393A34;"> /</span></span>\n<span class="line"><span style="color:#393A34;">{</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_pass </span><span style="color:#393A34;">http://127.0.0.1:2333/</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_set_header </span><span style="color:#393A34;">Host </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">host</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_set_header </span><span style="color:#393A34;">X-Real-IP </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">remote_addr</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_set_header </span><span style="color:#393A34;">X-Forwarded-For </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">proxy_add_x_forwarded_for</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_set_header </span><span style="color:#393A34;">REMOTE-HOST </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">remote_addr</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> add_header </span><span style="color:#393A34;">X-Cache </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">upstream_cache_status</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">#Set Nginx Cache</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> set </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">static_fileJsNv8TWb</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">0</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> ( </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">uri</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">~* </span><span style="color:#B56959;">&quot;\\.(gif|png|jpg|css|js|woff|woff2)$&quot;</span><span style="color:#393A34;"> )</span></span>\n<span class="line"><span style="color:#393A34;">    {</span></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">\tset </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">static_fileJsNv8TWb</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">1</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">\texpires </span><span style="color:#393A34;">12h</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">        }</span></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> ( </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">static_fileJsNv8TWb</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">= </span><span style="color:#393A34;">0 )</span></span>\n<span class="line"><span style="color:#393A34;">    {</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> add_header </span><span style="color:#393A34;">Cache-Control no-cache</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">    }</span></span>\n<span class="line"><span style="color:#393A34;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A0ADA0;">#PROXY-END/</span></span>\n<span class="line"></span></code></pre></div><p>保存即可。或者也可以像视频一样在 网站设置-反向代理 处添加一个目标 URL 为 <code>http://127.0.0.1:2333</code> 的反代后再直接用上面的内容覆盖原来的反代配置文件。</p><p>然后那么局部配置文件示例如下：</p><div class="language-nginx"><pre class="shiki shiki-dark" style="background-color:#121212;"><code><span class="line"><span style="color:#758575;">#PROXY-START/</span></span>\n<span class="line"><span style="color:#CB7676;">location</span><span style="color:#DBD7CA;"> </span><span style="color:#A1B567;">/socket.io </span><span style="color:#DBD7CA;">{</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_http_version </span><span style="color:#DBD7CA;">1.1</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_buffering </span><span style="color:#DBD7CA;">off</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_set_header </span><span style="color:#DBD7CA;">Upgrade </span><span style="color:#858585;">$</span><span style="color:#B8A965;">http_upgrade</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_set_header </span><span style="color:#DBD7CA;">Connection </span><span style="color:#C98A7D;">&quot;Upgrade&quot;</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_pass </span><span style="color:#DBD7CA;">http://127.0.0.1:2333/socket.io</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">}</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#4D9375;">location</span><span style="color:#DBD7CA;"> /</span></span>\n<span class="line"><span style="color:#DBD7CA;">{</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_pass </span><span style="color:#DBD7CA;">http://127.0.0.1:2333/</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_set_header </span><span style="color:#DBD7CA;">Host </span><span style="color:#858585;">$</span><span style="color:#B8A965;">host</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_set_header </span><span style="color:#DBD7CA;">X-Real-IP </span><span style="color:#858585;">$</span><span style="color:#B8A965;">remote_addr</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_set_header </span><span style="color:#DBD7CA;">X-Forwarded-For </span><span style="color:#858585;">$</span><span style="color:#B8A965;">proxy_add_x_forwarded_for</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> proxy_set_header </span><span style="color:#DBD7CA;">REMOTE-HOST </span><span style="color:#858585;">$</span><span style="color:#B8A965;">remote_addr</span><span style="color:#858585;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> add_header </span><span style="color:#DBD7CA;">X-Cache </span><span style="color:#858585;">$</span><span style="color:#B8A965;">upstream_cache_status</span><span style="color:#858585;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#758575;">#Set Nginx Cache</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> set </span><span style="color:#858585;">$</span><span style="color:#B8A965;">static_fileJsNv8TWb</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">0</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> ( </span><span style="color:#858585;">$</span><span style="color:#B8A965;">uri</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">~* </span><span style="color:#C98A7D;">&quot;\\.(gif|png|jpg|css|js|woff|woff2)$&quot;</span><span style="color:#DBD7CA;"> )</span></span>\n<span class="line"><span style="color:#DBD7CA;">    {</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">\tset </span><span style="color:#858585;">$</span><span style="color:#B8A965;">static_fileJsNv8TWb</span><span style="color:#DBD7CA;"> </span><span style="color:#6394BF;">1</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">\texpires </span><span style="color:#DBD7CA;">12h</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">        }</span></span>\n<span class="line"><span style="color:#DBD7CA;">    </span><span style="color:#4D9375;">if</span><span style="color:#DBD7CA;"> ( </span><span style="color:#858585;">$</span><span style="color:#B8A965;">static_fileJsNv8TWb</span><span style="color:#DBD7CA;"> </span><span style="color:#CB7676;">= </span><span style="color:#DBD7CA;">0 )</span></span>\n<span class="line"><span style="color:#DBD7CA;">    {</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> add_header </span><span style="color:#DBD7CA;">Cache-Control no-cache</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">    }</span></span>\n<span class="line"><span style="color:#DBD7CA;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#758575;">#PROXY-END/</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> access_log </span><span style="color:#DBD7CA;"> /www/wwwlogs/server.test.cn.log</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">   </span><span style="color:#4D9375;"> error_log </span><span style="color:#DBD7CA;"> /www/wwwlogs/server.test.cn.log</span><span style="color:#858585;">;</span></span>\n<span class="line"><span style="color:#DBD7CA;">}</span></span>\n<span class="line"></span></code></pre><pre class="shiki shiki-light" style="background-color:#ffffff;"><code><span class="line"><span style="color:#A0ADA0;">#PROXY-START/</span></span>\n<span class="line"><span style="color:#AB5959;">location</span><span style="color:#393A34;"> </span><span style="color:#6C7834;">/socket.io </span><span style="color:#393A34;">{</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_http_version </span><span style="color:#393A34;">1.1</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_buffering </span><span style="color:#393A34;">off</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_set_header </span><span style="color:#393A34;">Upgrade </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">http_upgrade</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_set_header </span><span style="color:#393A34;">Connection </span><span style="color:#B56959;">&quot;Upgrade&quot;</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_pass </span><span style="color:#393A34;">http://127.0.0.1:2333/socket.io</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">}</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#1C6B48;">location</span><span style="color:#393A34;"> /</span></span>\n<span class="line"><span style="color:#393A34;">{</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_pass </span><span style="color:#393A34;">http://127.0.0.1:2333/</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_set_header </span><span style="color:#393A34;">Host </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">host</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_set_header </span><span style="color:#393A34;">X-Real-IP </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">remote_addr</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_set_header </span><span style="color:#393A34;">X-Forwarded-For </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">proxy_add_x_forwarded_for</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> proxy_set_header </span><span style="color:#393A34;">REMOTE-HOST </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">remote_addr</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> add_header </span><span style="color:#393A34;">X-Cache </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">upstream_cache_status</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#A0ADA0;">#Set Nginx Cache</span></span>\n<span class="line"></span>\n<span class="line"></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> set </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">static_fileJsNv8TWb</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">0</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> ( </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">uri</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">~* </span><span style="color:#B56959;">&quot;\\.(gif|png|jpg|css|js|woff|woff2)$&quot;</span><span style="color:#393A34;"> )</span></span>\n<span class="line"><span style="color:#393A34;">    {</span></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">\tset </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">static_fileJsNv8TWb</span><span style="color:#393A34;"> </span><span style="color:#296AA3;">1</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">\texpires </span><span style="color:#393A34;">12h</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">        }</span></span>\n<span class="line"><span style="color:#393A34;">    </span><span style="color:#1C6B48;">if</span><span style="color:#393A34;"> ( </span><span style="color:#8E8F8B;">$</span><span style="color:#8C862B;">static_fileJsNv8TWb</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">= </span><span style="color:#393A34;">0 )</span></span>\n<span class="line"><span style="color:#393A34;">    {</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> add_header </span><span style="color:#393A34;">Cache-Control no-cache</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">    }</span></span>\n<span class="line"><span style="color:#393A34;">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A0ADA0;">#PROXY-END/</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> access_log </span><span style="color:#393A34;"> /www/wwwlogs/server.test.cn.log</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">   </span><span style="color:#1C6B48;"> error_log </span><span style="color:#393A34;"> /www/wwwlogs/server.test.cn.log</span><span style="color:#8E8F8B;">;</span></span>\n<span class="line"><span style="color:#393A34;">}</span></span>\n<span class="line"></span></code></pre></div><h2 id="初始化" tabindex="-1">初始化 <a class="header-anchor" href="#初始化" aria-hidden="true">#</a></h2><p>访问 <code>https://server.test.cn/proxy/qaqdmin</code> 来进行初始化，否则前端将会出现异常报错。</p>',47)];var r=s(e,[["render",function(s,p,l,o,e,r){return a(),n("div",null,c)}]]);export{o as __pageData,r as default};
