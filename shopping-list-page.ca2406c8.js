!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequired7c6=i),i.register("iE7OH",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("cs7FV",(function(t,n){e(t.exports,"onOpenMobileMenu",(function(){return r}));var o=i("4Nugj");function r(e){o.default.iconCloseMobileMenuEl.classList.contains("is-hidden")?(o.default.mobileDivEl.classList.remove("is-hidden-modal"),o.default.iconOpenMobileMenuEl.classList.add("is-hidden"),o.default.iconCloseMobileMenuEl.classList.remove("is-hidden")):(o.default.mobileDivEl.classList.add("is-hidden-modal"),o.default.iconOpenMobileMenuEl.classList.remove("is-hidden"),o.default.iconCloseMobileMenuEl.classList.add("is-hidden"))}})),i.register("4Nugj",(function(t,n){e(t.exports,"default",(function(){return o}));var o={modal:document.querySelector(".backdrop"),modalContent:document.querySelector(".modal"),modalCloseBtn:document.querySelector("[data-modal-close]"),mainGalleryEl:document.querySelector(".container-main-gallery"),mainGalleryTitleEl:document.querySelector(".category-title"),mainGalleryTitleSpanEl:document.querySelector(".category-title-span"),categoriesList:document.querySelector(".categories-list"),userLoginBtn:document.querySelector(".user-login"),authFormBackdrop:document.querySelector(".auth-backdrop"),authFormCloseBtn:document.querySelector(".auth-form-close-btn"),authForm:document.querySelector(".js-register-form"),supportEl:document.querySelector(".support-container"),supportRenderEl:document.querySelector(".support-render"),iconSvgBtnEl:document.querySelector(".support-icon"),supportLoadBtn:document.querySelector(".support-button"),footerProfilesEl:document.querySelector(".profile-list"),pixelJsCakeBtn:document.querySelector(".pixel-js-cake-btn"),spinnerEl:document.querySelector(".breeding-rhombus-spinner"),wrapperBookEl:document.querySelector(".wrapper-book"),buttonAddBookEl:document.querySelector(".form__button"),addedTextEl:document.querySelector(".added-text"),scrollUpBtnEl:document.querySelector(".scroll-up"),iconSupportEl:document.querySelector(".support-icon"),checkboxEl:document.querySelector('input[type="checkbox"]'),signUpFormBtn:document.getElementById("signup-formbtn"),loginFormBtn:document.getElementById("signin-formbtn"),nameInput:document.getElementById("uname"),emailInput:document.getElementById("uemail"),passwordInput:document.getElementById("upassword"),btnLogin:document.getElementById("btnLogin"),btnSignup:document.getElementById("btnSignup"),btnLogout:document.getElementById("btnLogout"),authSubmitBtn:document.getElementById("authform-submitBtn"),burgerBtnEl:document.querySelector(".js-open-mobile-menu"),mobileDivEl:document.querySelector(".js-mobile-menu"),iconOpenMobileMenuEl:document.querySelector(".icon-burger-mobile-menu"),iconCloseMobileMenuEl:document.querySelector(".icon-close-mobile-menu"),profileNameEl:document.querySelector("[data-profile-name]"),mProfileNameEl:document.querySelector("[data-profile-mname]"),headerProfileEl:document.getElementById("header-profile-btn"),headerSignupEl:document.getElementById("header-signup"),headerlogoutBtn:document.getElementById("header-logout"),mHeaderProfileEl:document.getElementById("mobile-header-profile-btn"),mheaderSignupEl:document.getElementById("mobile-header-signup"),mheaderlogoutBtn:document.getElementById("mobile-header-logout"),headerShoppingBtn:document.getElementById("header-shopping-link"),footerShoppingBtn:document.getElementById("footer-shopping-link"),addRemoveShoppingBtn:document.getElementById("add-remove-shopping-btn"),shoppingList:document.querySelector(".shopping-list-js"),emptyList:document.querySelector(".empty-list-js"),groupBtnEl:document.querySelector(".button-group-logo"),cardListEl:document.querySelector(".card-list"),checkIconEl:document.querySelector(".group-logo-icon"),teamParEl:document.querySelector(".our-team")}})),i.register("xpKCW",(function(n,o){e(n.exports,"icons",(function(){return h})),e(n.exports,"renderRowGallery",(function(){return y}));var r=i("4Nugj"),l=i("4mtOU"),c=i("2NuD8"),u=i("eiUc4"),a=i("3F2fL"),s=i("4wc3d"),d=i("cogyY"),p=i("9uEWU"),g=i("bygx3"),m=i("ddcZI"),h=[{id:1,title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",icon:t(l),position:"01",className:"icon",width:"131",height:"32"},{id:2,title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",icon:t(c),position:"02",className:"icon",width:"62",height:"32"},{id:3,title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",icon:t(u),position:"03",className:"icon",width:"101",height:"32"},{id:4,title:"RAZOM",url:"https://www.razomforukraine.org/",icon:t(a),position:"04",className:"icon",width:"82",height:"32"},{id:5,title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",icon:t(s),position:"05",className:"icon",width:"55",height:"32"},{id:6,title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",icon:t(d),position:"06",className:"icon",width:"115",height:"32"},{id:7,title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",icon:t(p),position:"07",className:"icon",width:"129",height:"35"},{id:8,title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",icon:t(g),position:"08",className:"icon",width:"81",height:"39"},{id:9,title:"UNITED24",url:"https://u24.gov.ua/uk",icon:t(m),position:"09",className:"icon",width:"149",height:"15"}],f=4,E=6;function y(e){var t=e.slice(0,6).map((function(e){return' <a class="support-link link"  href="'.concat(e.url,'" target="_blank">\n\n          ').concat(e.position,'\n          <img src="').concat(e.icon,'" class = "support-item" width="').concat(e.width,'" height="').concat(e.height,'"  alt="" loading="lazy"/> \n        </a>')})).join("");r.default.supportRenderEl.innerHTML=t}window.innerWidth>=360&&window.innerWidth<=767&&(E=4,f=6);var b=document.querySelector(".support-icon"),v=h.slice(0,E),S=!0;y(v),r.default.supportLoadBtn.addEventListener("click",(function(){if(S){if(9===v[v.length-1].id)return S=!1;var e=h.findIndex((function(e){return e.id===v[v.length-1].id}));v.push(h[e+1]),v.shift()}else{if(1===v[0].id)return S=!0;var t=h.findIndex((function(e){return e.id===v[0].id}));v.unshift(h[t-1]),v.pop()}v[0].id!==f&&1!==v[0].id||(S=!S);y(v),S?b.classList.remove("up"):b.classList.add("up")}))})),i.register("4mtOU",(function(e,t){e.exports=i("aNJCr").getBundleURL("1Vwc0")+i("iE7OH").resolve("3ZQG8")})),i.register("aNJCr",(function(t,n){var o;e(t.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var r={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=r[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),r[e]=t),t}})),i.register("2NuD8",(function(e,t){e.exports=i("aNJCr").getBundleURL("1Vwc0")+i("iE7OH").resolve("lT5Sb")})),i.register("eiUc4",(function(e,t){e.exports=i("aNJCr").getBundleURL("1Vwc0")+i("iE7OH").resolve("lkTUI")})),i.register("3F2fL",(function(e,t){e.exports=i("aNJCr").getBundleURL("1Vwc0")+i("iE7OH").resolve("cUmEl")})),i.register("4wc3d",(function(e,t){e.exports=i("aNJCr").getBundleURL("1Vwc0")+i("iE7OH").resolve("6puB0")})),i.register("cogyY",(function(e,t){e.exports=i("aNJCr").getBundleURL("1Vwc0")+i("iE7OH").resolve("af08D")})),i.register("9uEWU",(function(e,t){e.exports=i("aNJCr").getBundleURL("1Vwc0")+i("iE7OH").resolve("4Iq1S")})),i.register("bygx3",(function(e,t){e.exports=i("aNJCr").getBundleURL("1Vwc0")+i("iE7OH").resolve("lWsFU")})),i.register("ddcZI",(function(e,t){e.exports=i("aNJCr").getBundleURL("1Vwc0")+i("iE7OH").resolve("5grJL")})),i.register("hfTVu",(function(n,o){e(n.exports,"onRollingOutClick",(function(){return f}));var r=i("3zXFp"),l=i("g6uv9"),c=i("9Jd6R"),u=i("iQdLv"),a=i("aUfjh"),s=i("e9ZMY"),d=i("h7Pds"),p=i("8BbCK"),g=i("abPoD"),m=i("4Nugj"),h=[{id:1,link:"https://github.com/vitaliipshenychnyi",src:t(l),alt:"vitaliypshenychnyi"},{id:2,link:"https://github.com/WOWmasterJulia",src:t(c),alt:"julialuzina"},{id:3,link:"https://github.com/Vanchenko",src:t(u),alt:"evgenvanchenko"},{id:4,link:"https://github.com/Doluvit",src:t(a),alt:"vitaliydolyuk"},{id:5,link:"https://github.com/Matsypura",src:t(r),alt:"andriymatcipura"},{id:6,link:"https://github.com/LizaPikovskaya",src:t(s),alt:"lizapikovska"},{id:7,link:"https://github.com/AleksandrBreslavets",src:t(d),alt:"olexanderbreslavets"},{id:8,link:"https://github.com/nedinix",src:t(p),alt:"hennadiyyarosh"},{id:9,link:"https://github.com/ivan-2908",src:t(g),alt:"ivanrusnak"}];function f(e){m.default.cardListEl.childElementCount?(m.default.checkIconEl.classList.remove("return-check"),m.default.cardListEl.classList.add("is-hidden"),m.default.teamParEl.classList.add("is-hidden"),m.default.cardListEl.innerHTML=""):(m.default.checkIconEl.classList.add("return-check"),m.default.teamParEl.classList.remove("is-hidden"),m.default.cardListEl.classList.remove("is-hidden"),m.default.cardListEl.innerHTML=h.map((function(e){var t=e.id,n=e.link,o=e.src,r=e.alt;return'<li class="card-item" data-id='.concat(t,'>\n<a href="').concat(n,'" class="card-link" target="_blank">\n<img src="').concat(o,'" alt="').concat(r,'">\n</a>\n</li>')})).join(" "))}})),i.register("3zXFp",(function(e,t){e.exports=i("aNJCr").getBundleURL("1Vwc0")+i("iE7OH").resolve("hQKmN")})),i.register("g6uv9",(function(e,t){e.exports=i("aNJCr").getBundleURL("1Vwc0")+i("iE7OH").resolve("7g4Ii")})),i.register("9Jd6R",(function(e,t){e.exports=i("aNJCr").getBundleURL("1Vwc0")+i("iE7OH").resolve("3uWCI")})),i.register("iQdLv",(function(e,t){e.exports=i("aNJCr").getBundleURL("1Vwc0")+i("iE7OH").resolve("KtZhs")})),i.register("aUfjh",(function(e,t){e.exports=i("aNJCr").getBundleURL("1Vwc0")+i("iE7OH").resolve("8sijK")})),i.register("e9ZMY",(function(e,t){e.exports=i("aNJCr").getBundleURL("1Vwc0")+i("iE7OH").resolve("cGK19")})),i.register("h7Pds",(function(e,t){e.exports=i("aNJCr").getBundleURL("1Vwc0")+i("iE7OH").resolve("4KAoE")})),i.register("8BbCK",(function(e,t){e.exports=i("aNJCr").getBundleURL("1Vwc0")+i("iE7OH").resolve("erXUd")})),i.register("abPoD",(function(e,t){e.exports=i("aNJCr").getBundleURL("1Vwc0")+i("iE7OH").resolve("kR5SC")})),i.register("bTwnY",(function(t,n){e(t.exports,"changeTheme",(function(){return l}));var o=i("4Nugj"),r=localStorage.getItem("theme");function l(){o.default.checkboxEl.checked?(document.body.classList.add("dark"),localStorage.setItem("theme","dark")):(document.body.classList.remove("dark"),localStorage.setItem("theme","light"))}r&&(document.body.classList.add(r),o.default.checkboxEl.checked="dark"===r)})),i("iE7OH").register(JSON.parse('{"1Vwc0":"shopping-list-page.ca2406c8.js","3ZQG8":"stc_logo_2x.86697aa4.png","lT5Sb":"hope_logo_2x.79c38b0f.png","lkTUI":"imc_logo_2x.bbad0e73.png","cUmEl":"razom_logo_2x.3819b38d.png","6puB0":"aah_logo_2x.c55a422a.png","af08D":"pritula_logo_2x.e697c812.png","4Iq1S":"msf_logo_2x.1fec69d6.png","lWsFU":"wv_logo_2x.4b9a1c80.png","5grJL":"united_logo_2x.0e642edc.png","hQKmN":"andriymatcipura@2x.58e29e7b.jpg","7g4Ii":"vitaliypshenychnyi@2x.566cd484.jpg","3uWCI":"julialuzina@2x.091401f6.jpg","KtZhs":"evgenvanchenko@2x.7d2ed229.jpg","8sijK":"vitaliydolyuk@2x.12fd621a.jpg","cGK19":"lizapikovska@2x.d5d09dd1.jpg","4KAoE":"olexanderbreslavets@2x.39c73fce.jpg","erXUd":"hennadiyyarosh@2x.e2f94562.jpg","kR5SC":"ivanrusnak@2x.1c1c73ce.jpg"}'))}();
//# sourceMappingURL=shopping-list-page.ca2406c8.js.map
