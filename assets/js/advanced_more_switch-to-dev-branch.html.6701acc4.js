"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[68464],{30093:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>l,data:()=>c});var e=a(86904);const i=[(0,e.Fv)('<h1 id="switch-to-the-dev-branch" tabindex="-1"><a class="header-anchor" href="#switch-to-the-dev-branch"><span>Switch to the dev branch</span></a></h1><p>The Zigbee2MQTT dev branch contains the latest features, improvements and supported devices. In case you want to try this, you can checkout the dev branch.</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>This branch is a development branch! It could be less stable than the release version!</p></div><h2 id="linux" tabindex="-1"><a class="header-anchor" href="#linux"><span>Linux</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Stop Zigbee2MQTT and go to directory</span></span>\n<span class="line"><span class="token function">sudo</span> systemctl stop zigbee2mqtt</span>\n<span class="line"><span class="token builtin class-name">cd</span> /opt/zigbee2mqtt</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Backup configuration</span></span>\n<span class="line"><span class="token function">cp</span> <span class="token parameter variable">-R</span> data data-backup</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Update</span></span>\n<span class="line"><span class="token function">git</span> fetch origin dev</span>\n<span class="line"><span class="token comment"># If you get an `error: pathspec &#39;dev&#39; did not match any file(s) known to git` execute: `git fetch origin --unshallow`</span></span>\n<span class="line"><span class="token function">git</span> checkout dev <span class="token comment"># Change &#39;dev&#39; to &#39;master&#39; to switch back to the release version</span></span>\n<span class="line"><span class="token function">git</span> pull</span>\n<span class="line"><span class="token function">npm</span> ci</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Restore configuration</span></span>\n<span class="line"><span class="token function">cp</span> <span class="token parameter variable">-R</span> data-backup/* data</span>\n<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> data-backup</span>\n<span class="line"></span>\n<span class="line"><span class="token comment"># Start Zigbee2MQTT</span></span>\n<span class="line"><span class="token function">sudo</span> systemctl start zigbee2mqtt</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h2><p>Use the Docker image with the <code>latest-dev</code> tag.</p><h2 id="home-assistant-addon" tabindex="-1"><a class="header-anchor" href="#home-assistant-addon"><span>Home Assistant addon</span></a></h2><p>Use the <a href="https://github.com/zigbee2mqtt/hassio-zigbee2mqtt" target="_blank" rel="noopener noreferrer"><code>edge</code></a> version.</p>',9)],t={},l=(0,a(22652).A)(t,[["render",function(n,s){return(0,e.uX)(),(0,e.CE)("div",null,i)}]]),c=JSON.parse('{"path":"/advanced/more/switch-to-dev-branch.html","title":"Switch to the dev branch","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebar":"auto"},"headers":[{"level":2,"title":"Linux","slug":"linux","link":"#linux","children":[]},{"level":2,"title":"Docker","slug":"docker","link":"#docker","children":[]},{"level":2,"title":"Home Assistant addon","slug":"home-assistant-addon","link":"#home-assistant-addon","children":[]}],"git":{"updatedTime":1725103681000},"filePathRelative":"advanced/more/switch-to-dev-branch.md"}')}}]);