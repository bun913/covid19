(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{306:function(t,e,n){var content=n(310);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("790a7675",content,!0,{sourceMap:!1})},308:function(t,e,n){"use strict";var r=n(1).a.extend({props:{icon:{type:String}}}),o=(n(309),n(5)),c=n(39),l=n.n(c),d=n(299),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"174a4490",null);e.a=component.exports;l()(component,{VIcon:d.a})},309:function(t,e,n){"use strict";var r=n(306);n.n(r).a},310:function(t,e,n){(e=n(14)(!1)).push([t.i,".header[data-v-174a4490]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-174a4490]{font-size:30px;font-size:1.875rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-174a4490]{font-size:20px;font-size:1.25rem}}",""]),t.exports=e},319:function(t,e,n){var content=n(362);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("2110844c",content,!0,{sourceMap:!1})},320:function(t,e,n){var content=n(364);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("0f0f4320",content,!0,{sourceMap:!1})},324:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/04/04","url":"https://www.bousai.metro.tokyo.lg.jp/taisaku/saigai/1007261/1007578.html","text":"新型コロナウイルス感染症に関する知事からの情報発信について"},{"date":"2020/04/04","url":"https://www.fukushihoken.metro.tokyo.lg.jp/oshirase/corona_0401.html","text":"新型コロナウイルス感染症でこれから入院される方へ"}]}')},329:function(t,e,n){"use strict";var r=n(1).a.extend({props:{url:{type:String,default:""},text:{type:String,default:""},btnText:{type:String,default:""}},computed:{linkTag:function(){return this.isInternalLink?"nuxt-link":"a"},linkAttrs:function(){return this.isInternalLink?{to:this.url,class:"StaticInfo"}:{href:this.url,class:"StaticInfo"}},isInternalLink:function(){return!/^https?:\/\//.test(this.url)}}}),o=(n(363),n(5)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.linkTag,t._b({tag:"component"},"component",t.linkAttrs,!1),[n("span",[t._v(t._s(t.text))]),t._v(" "),t.btnText?n("div",{staticClass:"StaticInfo-Button"},[n("span",[t._v("\n      "+t._s(t.btnText)+"\n    ")])]):t._e()])}),[],!1,null,null,null);e.a=component.exports},330:function(t,e,n){"use strict";var r=n(1),o=n(108),c=r.a.extend({props:{items:{type:Array,required:!0}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)},formattedDate:function(t){return Object(o.a)(t)}}}),l=(n(361),n(5)),d=n(39),f=n.n(d),m=n(299),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("h3",{staticClass:"WhatsNew-heading"},[n("v-icon",{staticClass:"WhatsNew-heading-icon",attrs:{size:"24"}},[t._v("\n      mdi-information\n    ")]),t._v("\n    "+t._s(t.$t("最新のお知らせ"))+"\n  ")],1),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},t._l(t.items,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[n("a",{staticClass:"WhatsNew-list-item-anchor",attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer"}},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(e.date)+"\n        ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n          "),t.isInternalLink(e.url)?t._e():n("v-icon",{staticClass:"WhatsNew-item-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n            mdi-open-in-new\n          ")])],1)])])})),0)])}),[],!1,null,null,null);e.a=component.exports;f()(component,{VIcon:m.a})},361:function(t,e,n){"use strict";var r=n(319);n.n(r).a},362:function(t,e,n){(e=n(14)(!1)).push([t.i,".WhatsNew{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:10px;margin-bottom:20px}.WhatsNew-heading{display:flex;align-items:center;font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px;color:#4d4d4d;margin-left:12px}.WhatsNew-heading-icon{margin:3px}.WhatsNew .WhatsNew-list{padding-left:0;list-style-type:none}.WhatsNew .WhatsNew-list-item-anchor{display:inline-block;text-decoration:none;margin:5px;font-size:14px}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor{display:flex;flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor-link{flex:0 1 auto;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-link{padding-left:8px}}",""]),t.exports=e},363:function(t,e,n){"use strict";var r=n(320);n.n(r).a},364:function(t,e,n){(e=n(14)(!1)).push([t.i,".StaticInfo{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;background-color:#fff;border:1px solid #d9d9d9;box-shadow:0 0 2px rgba(0,0,0,.15);border-radius:4px;padding:.5em 1em;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.StaticInfo:hover{text-decoration:underline}.StaticInfo-Button{flex:1 0 auto;text-align:right}.StaticInfo-Button>span{padding:4px 8px;font-size:14px;font-size:0.875rem;display:inline-block;border-radius:4px;background-color:#fff;border:1px solid #008830;color:#008830;cursor:pointer}.StaticInfo-Button>span:hover{background-color:#008830;color:#fff}.StaticInfo-Button>span:hover>i{color:#fff !important}@media screen and (max-width: 600px){.StaticInfo-Button{margin-top:4px}}",""]),t.exports=e},378:function(t,e,n){var content=n(574);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("52197b41",content,!0,{sourceMap:!1})},573:function(t,e,n){"use strict";var r=n(378);n.n(r).a},574:function(t,e,n){(e=n(14)(!1)).push([t.i,".MainPage .Header[data-v-3b16d7f3]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width: 600px){.MainPage .Header[data-v-3b16d7f3]{flex-direction:column;align-items:baseline}}.MainPage .UpdatedAt[data-v-3b16d7f3]{font-size:14px;font-size:0.875rem;color:#707070;margin-bottom:.2rem}.MainPage .Annotation[data-v-3b16d7f3]{font-size:12px;font-size:0.75rem;color:#707070}@media screen and (min-width: 601px){.MainPage .Annotation[data-v-3b16d7f3]{margin:0 0 0 auto}}.MainPage .DataBlock[data-v-3b16d7f3]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-3b16d7f3]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-3b16d7f3]{padding:4px 8px}}",""]),t.exports=e},575:function(t,e,n){"use strict";n(24),n(11);var r=n(3),o=(n(62),n(178),n(37),n(7),n(6),n(16),n(36),n(40),n(180),n(1)),c=n(133),l=n(9);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f=["sm","md","lg","xl"],m=["start","end","center"];function h(t,e){return f.reduce((function(n,r){return n[t+Object(l.z)(r)]=e(),n}),{})}var v=function(t){return[].concat(m,["baseline","stretch"]).includes(t)},x=h("align",(function(){return{type:String,default:null,validator:v}})),w=function(t){return[].concat(m,["space-between","space-around"]).includes(t)},_=h("justify",(function(){return{type:String,default:null,validator:w}})),y=function(t){return[].concat(m,["space-between","space-around","stretch"]).includes(t)},C=h("alignContent",(function(){return{type:String,default:null,validator:y}})),j={align:Object.keys(x),justify:Object.keys(_),alignContent:Object.keys(C)},k={align:"align",justify:"justify",alignContent:"align-content"};function N(t,e,n){var r=k[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var O=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:v}},x,{justify:{type:String,default:null,validator:w}},_,{alignContent:{type:String,default:null,validator:y}},C),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var d in n)l+=String(n[d]);var f=O.get(l);return f||function(){var t,e;for(e in f=[],j)j[e].forEach((function(t){var r=n[t],o=N(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),O.set(l,f)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},638:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(308),c=n(330),l=n(329),d=n(107),f=n(324),m=n(444),h=n(433),v=n(439),x=n(438),w=n(436),_=n(440),y=n(441),C=n(442),j=n(434),k=n(435),N=n(108),O=r.a.extend({components:{PageHeader:o.a,WhatsNew:c.a,StaticInfo:l.a,ConfirmedCasesDetailsCard:m.a,TestedCasesDetailsCard:h.a,ConfirmedCasesNumberCard:v.a,ConfirmedCasesAttributesCard:x.a,TestedNumberCard:w.a,InspectionPersonsNumberCard:_.a,TelephoneAdvisoryReportsNumberCard:y.a,ConsultationDeskReportsNumberCard:C.a,MetroCard:j.a,AgencyCard:k.a},data:function(){var data={Data:d,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("都内の最新感染動向")},newsItems:f.newsItems};return data},computed:{updatedAt:function(){return Object(N.c)(this.$data.Data.lastUpdate)}},head:function(){return{title:this.$t("都内の最新感染動向")}}}),W=(n(573),n(5)),I=n(39),S=n.n(I),z=n(429),P=n(575),component=Object(W.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("div",{staticClass:"Header mb-3"},[n("page-header",{attrs:{icon:t.headerItem.icon}},[t._v("\n      "+t._s(t.headerItem.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新"))+" ")]),t._v(" "),n("time",{attrs:{datetime:t.updatedAt}},[t._v(t._s(t.Data.lastUpdate))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈"))+" ")])])],1),t._v(" "),n("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems}}),t._v(" "),n("static-info",{staticClass:"mb-4",attrs:{url:t.localePath("/flow"),text:t.$t("自分や家族の症状に不安や心配があればまずは電話相談をどうぞ"),"btn-text":t.$t("相談の手順を見る")}}),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("confirmed-cases-details-card"),t._v(" "),n("tested-cases-details-card"),t._v(" "),n("confirmed-cases-attributes-card"),t._v(" "),n("confirmed-cases-number-card"),t._v(" "),n("inspection-persons-number-card"),t._v(" "),n("tested-number-card"),t._v(" "),n("telephone-advisory-reports-number-card"),t._v(" "),n("consultation-desk-reports-number-card"),t._v(" "),n("metro-card"),t._v(" "),n("agency-card")],1),t._v(" "),n("v-divider")],1)}),[],!1,null,"3b16d7f3",null);e.default=component.exports;S()(component,{VDivider:z.a,VRow:P.a})}}]);