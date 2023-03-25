import{_ as s,h as a,j as p,S as l}from"./chunks/framework.53cf1b48.js";const n=JSON.parse('{"title":"常见问题","description":"","frontmatter":{"title":"常见问题"},"headers":[],"relativePath":"help/index.md"}'),o={name:"help/index.md"},e=[l('<h1 id="升级" tabindex="-1">升级 <a class="header-anchor" href="#升级" aria-label="Permalink to &quot;升级&quot;">​</a></h1><p>根据部署方式的不同，对应的升级步骤也有不同，分为手动部署和预设脚本部署两个部分说明。</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>前端更新目前仅针对手动部署更新。</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>完成更新后建议在<a href="/changelog/">变更日志</a>处查询新版本需要更改的配置，以保证各项功能都可以正常使用。</p></div><h2 id="手动部署" tabindex="-1">手动部署 <a class="header-anchor" href="#手动部署" aria-label="Permalink to &quot;手动部署&quot;">​</a></h2><h3 id="前端-kami-未魔改" tabindex="-1">前端（Kami）未魔改 <a class="header-anchor" href="#前端-kami-未魔改" aria-label="Permalink to &quot;前端（Kami）未魔改&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>该方法适合于对 Kami 源代码没有做改动的用户。</p></div><p>直接在 <code>kami</code> 文件夹下执行 <code>git pull origin master</code>：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/mx-space/kami</span></span>\n<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>\n<span class="line"></span></code></pre></div><p>安装依赖、构建、启动前端：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span></span>\n<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span>\n<span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span>\n<span class="line"></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>你应该理解的是，即便是你没有对 Kami 进行任何魔改，仍有可能出现代码不能自动合并的问题，对于这种情况，建议参考下面的已魔改部分完成升级。</p></div><h3 id="前端已魔改" tabindex="-1">前端已魔改 <a class="header-anchor" href="#前端已魔改" aria-label="Permalink to &quot;前端已魔改&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>此方法适用于对前端魔改后的升级，我们认为你修改了 &#39;kami/src&#39; 里面的源代码，这样的话，容易出现合并冲突，建议手动替换。</p></div><p>将 <code>kami</code> 文件夹改为任意名字，例如修改为 <code>kami.d</code>，然后拉取 kami 前端仓库，更新到稳定版本：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/mx-space</span></span>\n<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/mx-space/kami.git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--depth=1</span></span>\n<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">kami</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--tags</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$(</span><span style="color:#FFCB6B;">git</span><span style="color:#C3E88D;"> rev-list --tags --max-count=1</span><span style="color:#89DDFF;">)</span></span>\n<span class="line"></span></code></pre></div><p>然后将更新前之前配置时修改过的文件，如在 <code>kami.d</code> 中的 <code>.env</code> 和 <code>public</code> 文件夹复制到 <code>kami</code>，将你的修改的部分依次修改替换完成。</p><p>安装依赖、构建、启动前端：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span></span>\n<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span>\n<span class="line"><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span>\n<span class="line"></span></code></pre></div><h3 id="后端-core-升级" tabindex="-1">后端（Core）升级 <a class="header-anchor" href="#后端-core-升级" aria-label="Permalink to &quot;后端（Core）升级&quot;">​</a></h3><p>进入 core 文件夹执行：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/mx-space/core</span></span>\n<span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">compose</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">compose</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">up</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span></span>\n<span class="line"></span></code></pre></div><h2 id="预设脚本部署" tabindex="-1">预设脚本部署 <a class="header-anchor" href="#预设脚本部署" aria-label="Permalink to &quot;预设脚本部署&quot;">​</a></h2><p>对于预设脚本部署方式，仓库已提供对应的升级脚本，直接过一遍：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/docker</span></span>\n<span class="line"><span style="color:#FFCB6B;">bash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./update.sh</span></span>\n<span class="line"></span></code></pre></div><p>即可完成升级。</p><h1 id="重启" tabindex="-1">重启 <a class="header-anchor" href="#重启" aria-label="Permalink to &quot;重启&quot;">​</a></h1><p>重启时 Kami 前端可能不会跟随系统自启：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/mx-space/kami</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">pm2</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span></span>\n<span class="line"></span></code></pre></div><h1 id="备份与回滚" tabindex="-1">备份与回滚 <a class="header-anchor" href="#备份与回滚" aria-label="Permalink to &quot;备份与回滚&quot;">​</a></h1><p>在 Mix Space 中内有备份功能，并且每日默认自动备份，数据无价请定期手动下载备份包。</p><h2 id="备份" tabindex="-1">备份 <a class="header-anchor" href="#备份" aria-label="Permalink to &quot;备份&quot;">​</a></h2><p>在后端中 其他-备份 中点击立即备份，即备份到绝对目录:</p><p><code>~/mx-space/server/data/mx-space/backup/20xx-xx-xx_xx:xx:xx/backup-20xx-xx-xx_xx:xx:xx.zip</code></p><p>如果你没修改的话，详见后端面板 设定-系统-备份。</p><h2 id="回滚" tabindex="-1">回滚 <a class="header-anchor" href="#回滚" aria-label="Permalink to &quot;回滚&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Linux 和 macOS 可直接上传备份包，并且无需修改包名一致即可回滚，以下操作仅针对使用 Windows 用户访问后端的情况。</p></div><p>在后端中 其他-备份 中点击立即备份，将之前在电脑里的 <code>backup.zip</code> 上传到刚刚生成的备份目录里进行重命名替换。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>例: 假如刚刚生成的备份是 backup-2022-09-01_23:33:33.zip 将想进行回滚的备份包 backup-2022-01-14_05:14:19.zip 修改为刚刚生成的备份一样的名字：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">mv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/mx-space/server/data/mx-space/backup/</span><span style="color:#F78C6C;">2022</span><span style="color:#C3E88D;">-</span><span style="color:#F78C6C;">01</span><span style="color:#C3E88D;">-14_05:</span><span style="color:#F78C6C;">14</span><span style="color:#C3E88D;">:</span><span style="color:#F78C6C;">19</span><span style="color:#C3E88D;">/backup-</span><span style="color:#F78C6C;">2022</span><span style="color:#C3E88D;">-</span><span style="color:#F78C6C;">01</span><span style="color:#C3E88D;">-14_05:</span><span style="color:#F78C6C;">14</span><span style="color:#C3E88D;">:19.zip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">backup-</span><span style="color:#F78C6C;">2022</span><span style="color:#C3E88D;">-</span><span style="color:#F78C6C;">09</span><span style="color:#C3E88D;">-01_23:</span><span style="color:#F78C6C;">33</span><span style="color:#C3E88D;">:33.zip</span></span>\n<span class="line"></span></code></pre></div></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>⚠️ 该操作涉及修改数据库，请多备份几个工作日的 backup，数据无价请谨慎操作！</p><p>一般情况下回滚只会导致 analyze 数据页丢失 IP &amp; PV 的数据。</p></div><p>替换完成会提示“数据库有变动，将在 x 秒后重载页面”，重载先检查文章评论等有没有丢失。</p><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这里是读者出现的常见问题。</p></div><p>这块内容将会把最近收集到的 issues 整合起来。</p>',44)];const c=s(o,[["render",function(s,l,n,o,c,t){return a(),p("div",null,e)}]]);export{n as __pageData,c as default};
