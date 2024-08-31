"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[36848],{69280:(e,n,t)=>{t.r(n),t.d(n,{comp:()=>m,data:()=>v});var i=t(86904);const s=(0,i.Lk)("h1",{id:"iluminize-511-524",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#iluminize-511-524"},[(0,i.Lk)("span",null,"Iluminize 511.524")])],-1),a=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1),l=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"511.524")],-1),o=(0,i.Lk)("td",null,"Vendor",-1),c=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Zigbee 3.0 wall dimmer CCT 4 zones")],-1),d=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"action, linkquality")],-1),r=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/511.524.png",alt:"Iluminize 511.524"})])],-1),u=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pair-the-device" tabindex="-1"><a class="header-anchor" href="#pair-the-device"><span>Pair the device</span></a></h3><ol><li>Enable &#39;Permit Join (All)&#39;</li><li>Connect the device to power</li><li>Press the On/Off button in the center till the status LED blinks</li><li>Press &#39;S1&#39; to pair the device</li></ol><h3 id="scenes" tabindex="-1"><a class="header-anchor" href="#scenes"><span>Scenes</span></a></h3><p>The 4 scenes can not be setup via the web-ui. They have to be setup on the wall dimmer itself. For that bring all the lights into the desired configuration (on/off/brightness/color temp) and press the desired scene button (S1/S2/S3/S4) for a few seconds till the status LED blinks. Short press the scene button to restore the scene.</p><h3 id="central-on-off-button" tabindex="-1"><a class="header-anchor" href="#central-on-off-button"><span>Central On/Off button</span></a></h3><p>The central On/Off button turns on/off ALL connected devices! It is not group-aware!</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',8),h=(0,i.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>recall_*</code>, <code>on</code>, <code>off</code>, <code>brightness_step_down</code>, <code>brightness_step_up</code>, <code>brightness_move_down</code>, <code>brightness_move_up</code>, <code>brightness_stop</code>, <code>color_move</code>, <code>color_temperature_move</code>, <code>hue_move</code>, <code>color_loop_set</code>, <code>enhanced_move_to_hue_and_saturation</code>, <code>hue_stop</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),p={},m=(0,t(22652).A)(p,[["render",function(e,n){const t=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[s,(0,i.Lk)("table",null,[a,(0,i.Lk)("tbody",null,[l,(0,i.Lk)("tr",null,[o,(0,i.Lk)("td",null,[(0,i.bF)(t,{to:"/supported-devices/#v=Iluminize"},{default:(0,i.k6)((()=>[(0,i.eW)("Iluminize")])),_:1})])]),c,d,r])]),u,(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>[(0,i.eW)("How to use device type specific configuration")])),_:1})])]),h])}]]),v=JSON.parse('{"path":"/devices/511.524.html","title":"Iluminize 511.524 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Iluminize 511.524 control via MQTT","description":"Integrate your Iluminize 511.524 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-05-28T23:00:00.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pair the device","slug":"pair-the-device","link":"#pair-the-device","children":[]},{"level":3,"title":"Scenes","slug":"scenes","link":"#scenes","children":[]},{"level":3,"title":"Central On/Off button","slug":"central-on-off-button","link":"#central-on-off-button","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1725103681000},"filePathRelative":"devices/511.524.md"}')}}]);