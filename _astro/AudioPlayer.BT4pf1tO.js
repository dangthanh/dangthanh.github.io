import{Q as S,R as _,k as w}from"./lit-html.CzCPjovT.js";/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h=globalThis,p=h.ShadowRoot&&(h.ShadyCSS===void 0||h.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,f=Symbol(),g=new WeakMap;let b=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==f)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(p&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=g.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&g.set(e,t))}return t}toString(){return this.cssText}};const P=i=>new b(typeof i=="string"?i:i+"",void 0,f),x=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,o,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[r+1],i[0]);return new b(e,i,f)},C=(i,t)=>{if(p)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),o=h.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}},m=p?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return P(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:k,defineProperty:U,getOwnPropertyDescriptor:A,getOwnPropertyNames:O,getOwnPropertySymbols:T,getPrototypeOf:R}=Object,c=globalThis,y=c.trustedTypes,M=y?y.emptyScript:"",L=c.reactiveElementPolyfillSupport,d=(i,t)=>i,u={toAttribute(i,t){switch(t){case Boolean:i=i?M:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},$=(i,t)=>!k(i,t),v={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),c.litPropertyMetadata??=new WeakMap;class a extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),o=this.getPropertyDescriptor(t,s,e);o!==void 0&&U(this.prototype,t,o)}}static getPropertyDescriptor(t,e,s){const{get:o,set:r}=A(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return o?.call(this)},set(n){const E=o?.call(this);r.call(this,n),this.requestUpdate(t,E,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(d("elementProperties")))return;const t=R(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(d("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d("properties"))){const e=this.properties,s=[...O(e),...T(e)];for(const o of s)this.createProperty(o,e[o])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,o]of e)this.elementProperties.set(s,o)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const o=this._$Eu(e,s);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const o of s)e.unshift(m(o))}else t!==void 0&&e.push(m(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return C(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,s);if(o!==void 0&&s.reflect===!0){const r=(s.converter?.toAttribute!==void 0?s.converter:u).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,o=s._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const r=s.getPropertyOptions(o),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:u;this._$Em=o,this[o]=n.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??$)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,r]of s)r.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}}a.elementStyles=[],a.shadowRootOptions={mode:"open"},a[d("elementProperties")]=new Map,a[d("finalized")]=new Map,L?.({ReactiveElement:a}),(c.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class l extends a{constructor(){super(...arguments),this.renderOptions={host:this},this.o=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this.o=S(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.o?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.o?.setConnected(!1)}render(){return _}}l._$litElement$=!0,l.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:l});const z=globalThis.litElementPolyfillSupport;z?.({LitElement:l});(globalThis.litElementVersions??=[]).push("4.1.0");class j extends l{static get properties(){return{isPlaying:{type:Boolean},isMuted:{type:Boolean},file:{type:String},audio:{type:Object},duration:{type:Number},volume:{type:Number},events:{type:Array,attribute:!1},currentTime:{type:Number}}}constructor(){super(),this.isPlaying=!1,this.currentTime=0,this.file="",this.volume=.75,this.audio=new Audio(this.file),this.setAudioEventsListeners()}firstUpdated(){this.file&&(this.audio=new Audio(this.file),this.audio.load(),this.connectedCallback())}connectedCallback(){super.connectedCallback();for(const t of this.events)this.audio.addEventListener(t.name,t.onEvent,!1)}attributesChangedCallback(t,e,s){t==="file"&&(this.audio.pause(),this.isPlaying=!1,this.audio=new Audio(s),this.audio.load(),this.connectedCallback()),super.attributeChangedCallback(t,e,s)}disconnectedCallback(){super.disconnectedCallback(),this.audio.pause();for(const t of this.events)this.audio.removeEventListener(t.name,t.onEvent,!1)}setAudioEventsListeners(){this.events=[{name:"loadeddata",onEvent:()=>{this.duration=this.audio.duration,this.audio.volume=.75}},{name:"timeupdate",onEvent:()=>{this.currentTime=this.audio.currentTime}},{name:"volumechange",onEvent:()=>{this.volume=this.audio.volume}},{name:"ended",onEvent:()=>{this.audio.currentTime=0,this.isPlaying=!1}}]}togglePlay(){this.isPlaying=!this.isPlaying,this.isPlaying&&this.audio.play(),this.isPlaying||this.audio.pause()}toTimecode(t){const e=Math.floor(t);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}setTime(t){const e=this.getBarPercentage(t,"timeline"),s=Math.floor(e*this.duration);this.audio.currentTime=s}setVolume(t){const e=this.getBarPercentage(t,"volume");this.audio.volume=e}getBarPercentage(t,e){const o=(t.target.className===e?t.target:t.target.parentElement).getBoundingClientRect();return(t.clientX-o.x)/o.width}toggleSoundMute(){this.isMuted=!this.isMuted,this.audio.muted=this.isMuted}render(){return w`
      <div class="audio-player">
        <div class="timeline" @click="${this.setTime}">
          <div
            class="progress-bar"
            style="width: ${this.currentTime/this.duration*100}%"
          ></div>
        </div>
        <div class="body">
          <div class="play-container">
            <div
              class="${this.isPlaying?"pause":"play"} button"
              @click="${this.togglePlay}"
            ></div>
          </div>
          <div class="text-container">
            <div class="duration">
              ${this.toTimecode(this.currentTime)} /
              ${this.toTimecode(this.duration)}
            </div>
          </div>
          <div class="sound-container">
            <div class="volume" @click="${this.setVolume}">
              <div
                class="volume-slider"
                style="width: ${this.volume*100}%"
              ></div>
            </div>
            <div class="sound-icon-container" @click="${this.toggleSoundMute}">
              <div
                class="sound button ${this.isMuted?"sound-off":"sound-on"}"
              ></div>
            </div>
          </div>
        </div>
      </div>
    `}static get styles(){return x`
      :host {
        --progress-bar-color: coral;
        --volume-slider-color: coral;
        --volume-slider-bg: white;
        --background-color: #444;
        --text-color: white;
        display: block;
        height: 50px;
        font-size: 14px;
        box-shadow: 2px 2px 5px 0 #0004;
      }
      .audio-player {
        display: grid;
        grid-template-rows: 7px auto;
        height: 100%;
        background: var(--background-color);
        color: var(--text-color);
      }
      .body {
        padding: 0 10px;
        display: grid;
        grid-gap: 10px;
        grid-template-columns: 40px auto 40px;
        align-items: center;
        justify-items: center;
      }

      .timeline {
        background: #747474;
        cursor: pointer;
      }
      .progress-bar {
        background: var(--progress-bar-color);
        height: 100%;
        width: 0%;
        transition: 0.1s;
      }

      .text-container {
        display: flex;
        justify-content: flex-end;
        width: 100%;
      }

      .button {
        cursor: pointer;
      }

      .play {
        border: 7px solid transparent;
        border-left: 12px solid #fff;
        position: relative;
        right: -4px;
      }

      .pause:before,
      .pause:after {
        content: "";
        position: absolute;
        width: 3px;
        top: 0;
        bottom: 0;
        background: #fff;
      }
      .pause {
        height: 13px;
        width: 11px;
        position: relative;
      }
      .pause:before {
        left: 0;
      }
      .pause:after {
        right: 0;
      }

      .sound-container {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }

      .sound-container:hover .volume {
        width: 100px;
      }

      .volume {
        cursor: pointer;
        background: var(--volume-slider-bg);
        position: absolute;
        right: 35px;
        transition: 0.25s;
        height: 15px;
        width: 0;
        overflow: hidden;
      }
      .volume-slider {
        background: var(--volume-slider-color);
        height: 100%;
        width: 24%;
      }

      .sound-icon-container {
        width: 25px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .sound {
        transform: scale(0.75);
        border: 6px solid transparent;
        border-right-color: #fff;
        border-left: none;
        padding: 6px 3px;
        box-shadow: inset 4px 0 #fff;
      }
      .sound.sound-on:after {
        content: "";
        border-radius: 50%;
        border: 7px double transparent;
        border-right-color: #fff;
        position: absolute;
        right: -18px;
        top: -6px;
        width: 10px;
        height: 10px;
      }
      .sound.sound-off:before,
      .sound.sound-off:after {
        content: "";
        position: absolute;
        right: -15px;
        top: 1px;
        width: 2px;
        height: 9px;
        background: #fff;
      }
      .sound.sound-off:before {
        transform: rotate(45deg);
      }
      .sound.sound-off:after {
        transform: rotate(-45deg);
      }
    `}}customElements.define("audio-player",j);export{j as AudioPlayer};
