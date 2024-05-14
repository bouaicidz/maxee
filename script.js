Element.prototype.appendElements = function (U, N) {
  var M = this;
  var t = document.createElement("template");
  t.innerHTML = U;
  Array.from(t.content.children).forEach(function (Q, E) {
    if (Q.nodeName == "SCRIPT") {
      var a = document.createElement("script");
      if (Q.src != "") {
        a.src = Q.src;
      }
      if (Q.async != undefined) {
        a.async = Q.async;
      }
      if (Q.defer != undefined) {
        a.defer = Q.defer;
      }
      if (Q.textContent != "") {
        a.textContent = Q.textContent;
      }
      M[N](a);
    } else {
      M[N](Q);
    }
  });
};
(function () {
  var U = function () {
    var UI = true;
    return function (Us, Uf) {
      var Uo = UI ? function () {
        if (Uf) {
          var Ue = Uf.apply(Us, arguments);
          Uf = null;
          return Ue;
        }
      } : function () {};
      UI = false;
      return Uo;
    };
  }();
  if (typeof _$ == "undefined") {
    window._$ = $;
  }
  let M = new Array(26).fill(1).map((UI, Us) => String.fromCharCode(97 + Us));
  let t = new Array(26).fill(1).map((UI, Us) => String.fromCharCode(65 + Us));
  let Q = new RegExp("'" + M[1] + M[11] + M[14] + M[6] + t[8] + M[3] + "':.+?,");
  let E = _$("#blogger-components").innerHTML.match(Q)[0].replace(/[^0-9]/g, "");
  let i = false;
  let a = window.location.href;
  let V = typeof LicenseKey != "undefined" ? LicenseKey : false;
  let X = maxee["comment-sys"] || "blogger";
  let K = maxee["FB-app-ID"] || "";
  let S = maxee["dimaxeeus-ID"] || "";
  let l = maxee["max-results"] || 10;
  let P = maxee["max-intro"] || 7;
  let z = maxee["max-ticker"] || 7;
  let u = maxee["max-rel"] || 10;
  let H = maxee["rdct-time"] || 10;
  let b = maxee["rdct-exclude"] || "";
  let g = maxee["auto-redirect"] !== undefined ? maxee["auto-redirect"] : false;
  let y = maxee["see-also"] !== undefined ? maxee["see-also"] : true;
  let c = maxee["cool-comments"] !== undefined ? maxee["cool-comments"] : true;
  let T = maxee["show-related"] !== undefined ? maxee["related-posts"] : true;
  let I = maxee["show-nextprev"] !== undefined ? maxee.nextprev : true;
  let s = maxee["lazy-load"] !== undefined ? maxee["lazy-load"] : true;
  let f = maxee["sticky-nav"] !== undefined ? maxee["sticky-nav"] : true;
  let o = maxee["menu-fixed"] !== undefined ? maxee["menu-fixed"] : false;
  let e = maxee["topbar-fixed"] !== undefined ? maxee["topbar-fixed"] : false;
  let C = maxee["repeat-midad"] !== undefined ? maxee["repeat-midad"] : false;
  let Z = maxee["repeat-indexad"] !== undefined ? maxee["repeat-indexad"] : 0;
  let L = maxee["support-webp"] !== undefined ? maxee["support-webp"] : false;
  let d = maxee["blogger-api"] !== undefined ? maxee["blogger-api"] : false;
  let G = maxee["old-blogger"] !== undefined ? maxee["old-blogger"] : false;
  let x = maxee["redirect-inside"] !== undefined ? maxee["redirect-inside"] : false;
  let v = maxee["redirect-page"];
  let r = maxee["authors-page"];
  let B = ["khamsat", "mostaql", "tradent", "google-play", "messenger", "blogger"];
  let w = {};
  let J = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 115, 99, 114, 105, 112, 116, 46, 103, 111, 111, 103, 108, 101, 46, 99, 111, 109, 47, 109, 97, 99, 114, 111, 115, 47, 115, 47, 65, 75, 102, 121, 99, 98, 119, 114, 49, 79, 66, 66, 117, 98, 117, 108, 86, 73, 57, 97, 78, 102, 65, 108, 117, 118, 116, 111, 109, 75, 115, 65, 54, 69, 121, 55, 103, 68, 51, 48, 84, 54, 70, 55, 102, 121, 81, 68, 77, 67, 89, 103, 100, 85, 117, 66, 47, 101, 120, 101, 99);
  let h = false;
  let k = false;
  let q = false;
  let W = false;
  let A = false;
  let Y = false;
  if (typeof _bl != "undefined") {
    _bl.each(function (UI, Us) {
      w[UI.split(":")[0]] = parseInt(UI.split(":")[1]);
    });
  } else {
    w = {};
  }
  PostCount = typeof PostCount != "undefined" ? PostCount : 0;
  feed_count = Math.ceil(PostCount / 150);
  AuthorsInfo = typeof AuthorsInfo != "undefined" ? AuthorsInfo : {};
  U7();
  U0();
  U1();
  UR();
  Up();
  if (f) {
    UT();
  }
  if (isHomepage) {
    UE();
    Ui();
  }
  if (isSingleItem) {
    U2();
    UX();
    UV();
    Ua();
  }
  if (isPage) {
    var D = 0;
    UK();
    UP();
    if (!x) {
      Uz();
    }
  }
  if (isPost) {
    if (y && !PagedPost) {
      Uy();
    }
    Um();
    Ub();
    Ug();
    if (I) {
      UO();
    } else {
      _$(".topic-nav").remove();
    }
    if (T) {
      Uc();
    } else {
      _$(".topic-related").remove();
    }
  }
  if (isMultipleItems) {
    if (!isHomepage) {
      Ut();
    }
    if (!isArchive) {
      UM();
    }
  }
  function U0() {
    if (!s) {
      LazyImages("data-src", null, true);
    }
    _$("a[href]").each(function (UI) {
      if (UI.href.includes("search/label/")) {
        var Us = new URLSearchParams(UI.href).get("max-results");
        if (Us) {
          UI.href = UI.href.replace(Us, l);
        } else {
          UI.href = UI.href + "?max-results=" + l;
        }
      }
    });
    UN();
    if (e) {
      window.addEventListener("scroll", function () {
        if (window.scrollY > 40) {
          _$("header .color-wrap").addClass("fixed");
        } else {
          _$("header .color-wrap").removeClass("fixed");
        }
      });
    }
    if (o) {
      const UI = _$("#LinkList302").offset().top + 60;
      window.addEventListener("scroll", function () {
        if (window.scrollY > UI) {
          _$("#menu-bar").addClass("fixed");
        } else {
          _$("#menu-bar").removeClass("fixed");
        }
      });
    }
    document.body.onclick = function (Us) {
      if (Us.target && Us.target.hasClass("share-icon")) {
        var Uf = Us.target;
        Uf.toggleClass("arrow");
        Uf.nextElementSibling.toggleClass("share-open");
      }
    };
    _$(".scroll-top").onClick(function (Us) {
      var Uf = {
        "behavior": "smooth",
        "top": 0,
        "left": 0
      };
      window.scroll(Uf);
    });
    _$(".acc-head").onClick(function () {
      this.siblings(".acc-head").each(function (Us) {
        Us.removeClass("open");
        Us.nextElementSibling.slideUp();
      });
      this.addClass("open");
      this.nextElementSibling.slideDown();
    });
  }
  function U1() {
    if (SpeedFirst) {
      UI();
    } else {
      window.oneScroll(UI);
    }
    function UI() {
      var Us = _$("#blogger-components").innerHTML.replace(/(\<\!\-\-|\-\-\>)/g, "");
      var Uf = Us.match(/http.+?widgets\.js/)[0];
      var Ue = Us.match(/(\<|&lt;)script type='text\/javascript'(\>|&gt;)((.|\n)*)?(\<|&lt;)\/script(\>|&gt;)/g)[0].replace(/((\<|&lt;)script type='text\/javascript'(\>|&gt;)|(\<|&lt;)\/script(\>|&gt;))/g, "");
      var UC = Us.match(/(\<|&lt;)script(\>|&gt;)(.|\n)*?(\<|&lt;)\/script(\>|&gt;)/g) || null;
      var UZ = "";
      q = true;
      if (UC != null) {
        $getScript("/js/cookienotice.js", function () {
          UC[0].replace(/(\<script\>|\<\/script\>)/g, "").match(/(\(window|window).*/g).each(function (UL, Ud) {
            UZ += UL;
          });
          eval(UZ);
        });
      }
      $getScript(Uf, function () {
        eval(Ue);
        E = _WidgetManager._GetAllData().blog.blogId;
      });
    }
  }
  function U2() {
    window.addEventListener("scroll", function () {
      if (!h) {
        h = true;
        var UI = document.createElement("link");
        UI.rel = "stylesheet";
        UI.href = "https://www.blogger.com/dyn-css/authorization.css?targetBlogID=" + E;
        document.head.appendChild(UI);
        var Us = _$(".qed");
        Us.each(Uf => Uf.remove());
      }
    });
  }
  function U3(UI) {
    var Us = {
      "month": "long"
    };
    return new Date(UI).toLocaleString(BlogLang, Us);
  }
  function U4(UI) {
    var Us = {
      Title: UI.title.$t.replace(/"/g, "\"")
    };
    var Uf = UI.link.filter(function (Ue) {
      return Ue.rel == "alternate";
    })[0].href;
    Us.Link = httpsEnabled ? Uf.replace("http://", "https://") : Uf;
    Us.Snippet = UI.summary.$t.replace(/<\S[^>]*>/g, "");
    Us.Author = UI.author[0].name !== undefined ? UI.author[0].name.$t : "unknown";
    Us.Author_URI = UI.author[0].uri !== undefined ? UI.author[0].uri.$t : "#";
    Us.Category = UI.category !== undefined ? UI.category[0].term : "....";
    var Uo = UI.media$thumbnail !== undefined ? UI.media$thumbnail.url : AltImage;
    Us.ImgUrl = Uo.replace("http://", "https://");
    Us.FullDate = UI.published.$t;
    Us.Date = Us.FullDate.substr(8, 2) + " " + U3(Us.FullDate) + " " + Us.FullDate.substr(0, 4);
    Us.PostId = UI.id.$t.replace(/.+\-/g, "");
    return Us;
  }
  function U6(UI) {
    if (!k) {
      $getScript("https://cdn.jsdelivr.net/npm/@splidejs/splide@2.4.21/dist/js/splide.min.js", function () {
        k = true;
        UI();
      });
    } else {
      UI();
    }
  }
  function U7() {
    var UI = U(this, function () {
      return UI.toString().search("(((.+)+)+)+$").toString().constructor(UI).search("(((.+)+)+)+$");
    });
    UI();
    document.body.prepend("<i class=\"tempscheme\"/>");
    var Us = window.getComputedStyle(_$(".tempscheme"));
    var Uf = {
      "BackColor": Us.borderRightColor,
      "FillColor": Us.borderLeftColor,
      "BackHover": Us.borderTopColor,
      "FillHover": "#FFF",
      "StartSide": Us.float,
      "EndSide": Us.textAlign
    };
    _$("#HTML303").prepend("<a id=\"maxeeIcon\" title=\"maxeeueeze Template\" rel=\"nofollow noreferrer\" href=\"https://maxeeueeze-template.blogspot.com\" target=\"_blank\"><svg viewbox=\"0 0 22 28\"><path d=\"M1.552 18.849c0.913 0 1.757 0 2.601 0 0.080 0.468 0.126 0.924 0.24 1.369 0.65 2.453 2.042 4.29 4.518 5.077 4.039 1.278 8.363-1.654 8.74-5.865 0.274-2.989-1.267-5.637-3.959-6.835-0.776-0.342-1.609-0.365-2.442-0.388-1.004-0.023-2.008 0.011-3.012-0.023-0.73-0.023-1.472-0.080-2.191-0.217-1.472-0.274-2.613-1.095-3.389-2.362-1.107-1.803-1.346-3.731-0.662-5.728 0.73-2.134 2.316-3.309 4.541-3.628 2.408-0.354 4.815-0.251 7.234-0.091 2.282 0.148 4.553 0.297 6.835 0.205 0.513-0.023 1.027-0.068 1.643-0.103-0.114 0.183-0.171 0.354-0.285 0.434-0.411 0.319-0.81 0.65-1.255 0.901-1.472 0.833-3.058 1.312-4.747 1.312-1.871 0-3.754-0.091-5.625-0.126-1.267-0.023-2.533-0.011-3.765 0.342-1.027 0.297-1.86 0.822-2.214 1.894-0.251 0.787-0.251 1.597-0.011 2.396 0.24 0.776 0.787 1.312 1.552 1.529 0.685 0.194 1.392 0.319 2.099 0.377 1.267 0.091 2.544 0.057 3.822 0.137 4.267 0.285 7.839 3.663 8.386 7.907 0.331 2.544-0.126 4.918-1.712 6.994-1.267 1.643-2.944 2.681-4.929 3.229-2.248 0.628-4.484 0.559-6.641-0.354-3.024-1.267-4.678-3.617-5.192-6.812-0.091-0.513-0.126-1.027-0.183-1.575z\"></path><path d=\"M0.034 13.817c0.103-0.011 0.205-0.034 0.308-0.034 1.974 0.023 3.959 0.080 5.933 0.080 1.848 0 3.685-0.023 5.522 0.205 0.183 0.023 0.365 0.057 0.548 0.114 1.757 0.536 3.32 2.613 3.366 4.461 0.046 2.328-1.518 4.222-3.857 4.689-0.833 0.171-1.677 0.171-2.487-0.080-1.814-0.559-2.784-1.848-3.092-3.685-0.023-0.148-0.046-0.308-0.057-0.468-0.011-0.068 0-0.148 0-0.262 0.399 0 0.81 0.034 1.198-0.011 0.73-0.091 1.255 0.080 1.609 0.81 0.194 0.399 0.593 0.719 0.936 1.015 0.456 0.388 1.004 0.411 1.552 0.205 1.038-0.388 1.666-1.529 1.403-2.613-0.114-0.491-0.456-0.799-0.89-1.027-0.73-0.388-1.529-0.536-2.328-0.605-0.901-0.080-1.803-0.126-2.704-0.126-2.020 0-3.868-0.525-5.557-1.632-0.479-0.308-0.947-0.639-1.415-0.947 0-0.034 0-0.068 0.011-0.091z\"></path><path d=\"M17.446 4.963c-0.879 0.833-1.928 1.46-3.092 1.905-2.168 0.822-4.404 0.947-6.663 0.525-0.456-0.080-0.879-0.331-1.301-0.548-0.114-0.057-0.217-0.251-0.228-0.399-0.091-0.81 0.342-1.426 1.141-1.643 1.050-0.285 2.111-0.251 3.183-0.16 1.483 0.126 2.978 0.274 4.461 0.354 0.833 0.046 1.666-0.023 2.499-0.034z\"></path></svg></a>");
    document.head.append("<style>#maxeeIcon{margin-" + Uf.EndSide + ":10px;width:30px;height:30px;background-color:" + Uf.BackColor + "!important;padding:5px;border-radius:3px}#maxeeIcon svg{fill:" + Uf.FillColor + ";width:100%;height:100%}#maxeeIcon:hover{background-color:" + Uf.BackHover + "}#maxeeIcon:hover svg{fill:" + "#FFF" + "}</style>");
    _$("#HTML303,#maxeeIcon,#maxeeIcon>*,.tempscheme").addClass("impo");
    _$("#HTML303").parentsUntil(".main-container").each(function (UC) {
      UC.addClass("impo");
    });
    var Ue = document.createElement("script");
    Ue.innerHTML = "console.group(\"%cmaxeeueeze Template\", \"font-weight:bold;color:#d24949;font-family:Tahoma;font-size:18px;\");console.log(\"» Homepage      : https://maxeeueeze-template.blogspot.com\");console.log(\"» Designed by   : Bouaici\");console.log(\"» Programmed by : Bouaici\");console.log(\"» Version       : 2.3.0\");console.groupEnd()";
    document.head.appendChild(Ue);
    window.addEventListener("scroll", function () {
      if (document.querySelector(".widget.Blog") != null && location.host != "translate.googleusercontent.com") {
        if (window.scrollY + window.innerHeight > _$(".widget.Blog").offset().top && !i) {
          i = true;
          try {} catch (UZ) {
            U9(1);
          }
          U8(E, V);
        }
      }
    });
  }
  function U8(UI, Us, Uf) {
    try {
      var Uo = document.createElement("script");
      Uo.src = J + "?blogId=" + UI + "&key=" + Us + "&release=v2&callback=checkLicense";
      document.head.appendChild(Uo);
      if (V.length > 100) {
        U9(1);
      }
      window.checkLicense = function (Ue) {
        if (!Ue.valid) {
          U9(1);
        }
      };
    } catch (Ue) {
      U9(1);
    }
  }
  const U9 = function (UI) {
    clearInterval(UU);
    document.head.remove();
    if (window.location.href.indexOf("/b/blog-preview") == -1) {
      document.body.innerHTML = "<img style='position:fixed;top:calc(50% - 160px);right:calc(50% - 240px)' src='https://4.bp.blogspot.com/-QIc0lhCDw5o/Wnu2wzIXdHI/AAAAAAAAAI0/M4TsuU4bufgiFOneBlm3HrIvcDUT_46CACK4BGAYYCw/s1600/Credits.png'/>";
      document.body.setAttribute("style", "background:-webkit-linear-gradient(45deg,#d24949,#9e44c9);background:-moz-linear-gradient(45deg,#d24949,#9e44c9);background:-o-linear-gradient(45deg,#d24949,#9e44c9);background:linear-gradient(45deg,#d24949,#9e44c9);background-attachment:fixed");
      var Us = {
        "blogUrl": location.origin,
        "blogId": E,
        "errorCode": UI
      };
      $getJSONP("https://script.google.com/macros/s/AKfycbzTAnbEpIJ9WW1JvLF9FZXUbC83NsEWR6MR4wb1NV-k4Q761gs/exec", Us, function () {});
    }
  };
  let UU = setInterval(function () {
    var UI = _$("#page-skin-1").innerText.replace(/\n/g, "").match(/\/\*.+?\*\//)[0];
    if (UI.indexOf("https://maxeeueeze-template.blogspot.com") == -1) {
      U9(2);
    }
    if (_$("#maxeeIcon").href !== "https://maxeeueeze-template.blogspot.com/") {
      U9(3);
    }
    _$(".impo").each(function (Us) {
      var Uf = window.getComputedStyle(Us);
      if (Uf.visibility != "visible" || Uf.opacity < 1 || Uf.zIndex < 1 && Us.zIndex != "auto" && Us.nodeName != "HTML" || Uf.display.indexOf("inline") == -1 && Uf.display.indexOf("block") == -1) {
        U9(3);
      }
    });
  }, 1e3);
  function UN() {
    if (window.innerWidth > 992) {
      _$(".MegaItem").each(function (UI) {
        var Us = UI.querySelector(".mega-wrap");
        UI.onmouseenter = function () {
          var Uf = UI.querySelector("[data-label]").getAttribute("data-label");
          var Uo = L || d ? "https://www.blogger.com/feeds/" + E : "/feeds";
          Us.addClass("open");
          if (!Us.hasClass("rendered")) {
            Us.addClass("rendered");
            Us.innerHTML = "<i class=\"fa fa-spinner fa-spin\"></i>";
            $getJSONP(Uo + "/posts/summary/-/" + Uf + "?alt=json&max-results=10", function (Ue) {
              if (Ue.feed.entry) {
                var UC = new String();
                Ue.feed.entry.each(function (UZ, UL) {
                  if (!UZ.app$control) {
                    var Ud = U4(UZ);
                    UC += "<div class=\"splide__slide mega-post notr\">";
                    UC += "<a class=\"img-wrap PLHolder\" href=\"" + Ud.Link + "\"><img alt=\"" + Ud.Title + "\" title=\"" + Ud.Title + "\" data-mega-src=\"" + resizeImg(Ud.ImgUrl, 250, 150) + "\"><div class=\"overlay\"></div></a>";
                    UC += "<div class=\"details\"><span class=\"post-date\"><i class=\"fa fa-calendar-times-o\"></i>" + Ud.Date + "</span></div>";
                    UC += "<h2 class=\"post-title\"><a class=\"entry-title\" href=\"" + Ud.Link + "\">" + Ud.Title + "</a></h2>";
                    UC += "</div>";
                  }
                });
                Us.innerHTML = "<div class=\"mega-carousel splide notr\"><div class=\"splide__track notr\"><div class=\"splide__list notr\">" + UC + "</div></div></div>";
                U6(function () {
                  var UZ = {
                    "direction": BlogDirection,
                    "pagination": false,
                    "perPage": 4,
                    "rewind": true
                  };
                  new Splide(Us.querySelector(".mega-carousel"), UZ).mount();
                  LazyImages("data-mega-src", null, true, UI);
                });
              }
            });
          }
        };
        UI.onmouseleave = function () {
          Us.removeClass("open");
        };
      });
    } else {
      _$(".mega-wrap").each(function (UI) {
        UI.remove();
      });
    }
  }
  function UR() {
    var UI = _$(".intro .HTML");
    if (s && !SpeedFirst) {
      var Us = true;
      window.addEventListener("scroll", function () {
        if (Us) {
          Us = false;
          UI.each(function (Uo) {
            Uf(Uo);
          });
        }
      });
    } else {
      UI.each(function (Uo) {
        Uf(Uo);
      });
    }
    function Uf(Uo) {
      var UC = Uo === _$("#HTML305") ? "Ticker" : "Slider";
      var UZ = Uo.querySelector(".ord").textContent;
      var UL = new String();
      var Ud = new String();
      var UG = UC === "Ticker" ? z : P;
      var Ux = Math.round(Math.random() * (PostCount - UG));
      var Uv = L || d ? "https://www.blogger.com/feeds/" + E : "/feeds";
      var Ur;
      if ((UZ === "random" || UZ === "recent" || UZ in w) && PostCount > 0 && FeedEnabled && !isPrivate) {
        UB();
      } else {
        _$(".intro").removeClass("hide");
        Uo.querySelector("div").innerHTML = "<div class='temp-error'><b>WIDGET ERROR</b><span>No posts found OR Blog feeds are disabled</span></div>";
      }
      function UB() {
        Uo.style.display = "block";
        Ux = Ux <= 0 ? 1 : Ux;
        switch (UZ) {
          case "recent":
            Ur = Uv + "/posts/summary?alt=json-in-script&max-results=" + UG;
            break;
          case "random":
            Ur = Uv + "/posts/summary?alt=json-in-script&start-index=" + Ux + "&max-results=" + UG;
            break;
          default:
            Ur = Uv + "/posts/summary/-/" + UZ + "?alt=json-in-script&max-results=" + UG;
        }
        if (isStorage) {
          if (sessionStorage[UC] !== undefined) {
            Uw(sessionStorage[UC]);
          } else {
            $getJSONP(Ur, function (UJ) {
              sessionStorage[UC] = JSON.stringify(UJ);
              Uw(UJ);
            });
          }
        } else {
          $getJSONP(Ur, function (UJ) {
            Uw(UJ);
          });
        }
        function Uw(UJ) {
          UJ = typeof UJ === "string" ? JSON.parse(UJ) : UJ;
          Uo.querySelector(".ord").remove();
          UJ.feed.entry.each(function (Un, Uj) {
            if (!Un.app$control) {
              var N0 = U4(Un);
              var N1 = showAuthor && N0.Author_URI !== "#" ? "<a rel=\"nofollow noreferrer\" href=\"" + N0.Author_URI + "\"><span class=\"author-prof\"><i class=\"fa fa-user-circle\"></i>" + N0.Author + "</span></a>" : "";
              var N2 = showTimestamp ? "<span class=\"post-date\"><i class=\"fa fa-calendar-times-o\"></i>" + N0.Date + "</span>" : "";
              if (Uo.querySelector("div").hasClass("ticker")) {
                UL += "<li><a title=\"" + N0.Title + "\" href=\"" + N0.Link + "\">" + N0.Title + "</a></li>";
              }
              if (Uo.querySelector("div").hasClass("main-slider")) {
                var N3 = "<div class=\"img-wrap PLHolder\" onclick=\"this.querySelector('h3 a').click()\"><img title=\"" + N0.Title + "\" alt=\"" + N0.Title + "\" data-slider-src=\"" + N0.ImgUrl + "\"/><div class=\"overlay\"></div><div class=\"details-on-img\">" + N1 + N2 + "</div><div class=\"caption\"><span class=\"label-name\">" + N0.Category + "</span><h3><a title=\"" + N0.Title + "\" href=\"" + N0.Link + "\">" + N0.Title + "</a></h3></div>";
                if (Uj === 0) {
                  _$(".left-box .top").innerHTML = N3;
                } else if (Uj === 1) {
                  _$(".left-box .bottom").innerHTML = N3;
                } else {
                  Ud += "<div class=\"item notr splide__slide\" role=\"article\">";
                  Ud += "<div class=\"img-wrap PLHolder\" onclick=\"this.querySelector('h3 a').click()\">";
                  Ud += "<img title=\"" + N0.Title + "\" alt=\"" + N0.Title + "\" data-slider-src=\"" + N0.ImgUrl + "\"/>";
                  Ud += "<div class=\"overlay\"></div>";
                  Ud += "<div class=\"details-on-img\">" + N1 + N2 + "</div>";
                  Ud += "<div class=\"caption\">";
                  Ud += "<span class=\"label-name\">" + N0.Category + "</span>";
                  Ud += "<h3><a title=\"" + N0.Title + "\" href=\"" + N0.Link + "\">" + N0.Title + "</a></h3>";
                  Ud += "<p>" + N0.Snippet.substring(0, 180) + "...</p>";
                  Ud += "</div></div></div>";
                }
              }
            }
          });
          if (UC === "Ticker") {
            _$(".ticker-content").innerHTML = "<nav><ul class=\"notr\">" + UL + "</ul></nav>";
          } else {
            _$("#m-slider .splide__list").innerHTML = Ud;
          }
          _$(".intro").removeClass("hide");
          if (UC === "Ticker") {
            var Uh = BlogDirection == "rtl" ? "right" : "left";
            var Uk = _$(".ticker-content ul");
            var Uq = _$(".ticker-content nav").offsetWidth;
            var UW = Uq;
            var UA = 0;
            if (Uk.children.length >= 1) {
              var UY = 0;
              Uk.children.each(function (N0) {
                UY += N0.offsetWidth;
              });
              UA = UY + Uk.children.length * 40 - 40;
              Uk.style.width = UA + "px";
            }
            ;
            function Un() {
              UW -= 1;
              if (UW == -UA) {
                UW = Uq;
              }
              Uk.style[Uh] = UW + "px";
            }
            ;
            function Uj() {
              clearInterval(UD);
            }
            ;
            var UD = setInterval(Un, 13);
            Uk.onmouseenter = function () {
              Uj();
            };
            Uk.onmouseleave = function () {
              UD = setInterval(Un, 13);
            };
          }
          if (UC === "Slider") {
            if (UZ === "random") {
              _$("#m-slider .item").each(function (N0) {
                var N1 = Math.round(Math.random() * _$("#m-slider .item").length);
                _$("#m-slider .splide__list").append(_$("#m-slider .item")[N1]);
              });
            }
            U6(function () {
              var N0 = {
                "direction": BlogDirection,
                "perPage": 1,
                "type": "loop",
                "pagination": false,
                "autoplay": true
              };
              new Splide(".m-slider", N0).mount();
              LazyImages("data-slider-src", null, true);
            });
          }
        }
      }
    }
    ;
  }
  function Up() {
    var UI = _$(".maxeeWid");
    if (s && !SpeedFirst) {
      window.addEventListener("scroll", function () {
        UI.each(function (Uf) {
          if (window.scrollY + window.innerHeight > Uf.offset().top && !Uf.hasClass("rendered")) {
            Uf.addClass("rendered");
            Us(Uf);
          }
        });
      });
    } else {
      UI.each(function (Uf) {
        Us(Uf);
      });
    }
    function Us(Uf) {
      var Uo = Uf.parentElement;
      var Ue = Uf.closest(".widget").getAttribute("id");
      var UC = Uf.getAttribute("data-label");
      var UZ = Uf.getAttribute("data-len");
      var UL = Uf.getAttribute("data-type");
      var Ud = new String();
      var UG = L || d ? "https://www.blogger.com/feeds/" + E : "/feeds";
      Uo.addClass("CusWidget");
      if ((UC === "random" || UC === "recent" || UC === "comments" || UC in w) && PostCount > 0 && FeedEnabled && !isPrivate) {
        Uv();
      } else {
        Uo.inenrHTML = "<div class='temp-error'><b>WIDGET ERROR</b><span>No posts found OR Blog feeds are disabled</span></div>";
      }
      function Uv() {
        if (UC === "random" || UC === "recent") {
          UZ = PostCount - UZ > 0 ? UZ : PostCount;
          var Ur = Math.round(Math.random() * PostCount - UZ);
          Ur = Ur <= 0 ? 1 : Ur;
        }
        switch (UC) {
          case "recent":
            Ud = UG + "/posts/summary?alt=json-in-script&max-results=" + UZ;
            break;
          case "random":
            Ud = UG + "/posts/summary?alt=json-in-script&start-index=" + Ur + "&max-results=" + UZ;
            break;
          case "comments":
            Ud = UG + "/comments/summary?alt=json-in-script&max-results=" + UZ;
            break;
          default:
            Ud = UG + "/posts/summary/-/" + encodeURIComponent(UC) + "?alt=json-in-script&max-results=" + UZ;
        }
        if (UL === "vslider") {
          Uo.innerHTML = "<div role='feed' class='notr v-carousel splide'><div class='splide__track notr'><div class='splide__list notr'></div></div></div>";
        }
        if (UL === "slider") {
          Uo.innerHTML = "<div role='feed' class='notr slider-carousel splide'><div class='splide__track notr'><div class='splide__list notr'></div></div></div>";
        }
        if (UL === "thumbs") {
          Uo.innerHTML = "<div class='rand-content'></div>";
        }
        if (UC === "comments") {
          Uo.innerHTML = "<div class='recent-comments'></div>";
        }
        if (isStorage) {
          if (sessionStorage[Ue] !== undefined) {
            UF(sessionStorage[Ue]);
          } else {
            $getJSONP(Ud, function (UB) {
              sessionStorage[Ue] = JSON.stringify(UB);
              UF(UB);
            });
          }
        } else {
          $getJSONP(Ud, function (UB) {
            UF(UB);
          });
        }
        function UF(UB) {
          UB = typeof UB === "string" ? JSON.parse(UB) : UB;
          if (UB.feed.entry) {
            UB.feed.entry.each(function (Uw, UJ) {
              if (!Uw.app$control) {
                if (UC !== "comments") {
                  var Uh = U4(Uw);
                  var Uk = showAuthor && Uh.Author_URI !== "#" ? "<a rel=\"nofollow noreferrer\" href=\"" + Uh.Author_URI + "\"><span class=\"author-prof\"><i class=\"fa fa-user-circle\"></i>" + Uh.Author + "</span></a>" : "";
                  var Uq = showTimestamp ? "<span class=\"post-date\"><i class=\"fa fa-calendar-times-o\"></i>" + Uh.Date + "</span>" : "";
                }
                if (UC === "comments" && UB.feed.entry[UJ].link.filter(function (N0) {
                  return N0.rel == "alternate";
                })[0]) {
                  var UA = Uw.link.filter(function (N0) {
                    return N0.rel == "alternate";
                  })[0].href;
                  var UY = Uw.summary.$t.replace(/(<.*?>|\[.*?\])/g, "");
                  var UD = decodeURIComponent(Uw.author[0].name.$t);
                  var Un = Uw.author[0].uri !== undefined ? UB.feed.entry[UJ].author[0].uri.$t : null;
                  var Uj = Un ? "<a href=\"" + Un + "\" class=\"comm-author\" target=\"_blank\" rel=\"nofollow noreferrer\">" + UD + "</a>" : "<span class=\"comm-author\">" + UD + "</span>";
                  CAu_img = Uw.author[0].gd$image.src;
                  CDate = Uw.gd$extendedProperty.filter(function (N0) {
                    return N0.name == "blogger.displayTime";
                  })[0].value;
                  CNode = document.createElement("div");
                  CNode.innerHTML = UY;
                  UY = CNode.innerText;
                  CAu_img = CAu_img.indexOf("img1.blogblog.com") == -1 ? CAu_img : AltAuthor;
                  CAu_img = CAu_img.replace(/\/s.*?\//, "/s40-c/");
                  UY = UY.replace(/(https:\/\/)(www.youtube|youtube|youtu)(.com\/|.be\/).+?(\s|<br.*?>|$)/g, function () {
                    return "<span class=\"attachment att-vid\"> " + trans[33] + " </span>";
                  }).replace(/(https:).+?(jpeg|jpg|gif|png)/g, function () {
                    return "<span class=\"attachment att-pic\"> " + trans[32] + " </span>";
                  });
                  Uo.querySelector(".recent-comments").append("<div class=\"comment\"><div class=\"comments-img-wrap PLHolder\"><img style=\"opacity:0\" class=\"notr\" title=\"" + UD + " avatar\" alt=\"" + UD + " avatar\" data-src=\"" + CAu_img + "\"/></div><div class=\"comm\">" + Uj + "<div class=\"details\"><span class=\"post-date\"><i class=\"fa fa-calendar-times-o\"></i>" + CDate + "</span></div><p>" + UY + "</p><a href=\"" + UA + "\" class=\"leave-comm\">" + trans[14] + "</a></div></div>");
                }
                if (UL === "slider") {
                  Uo.querySelector(".slider-carousel .splide__list").append("<div role=\"article\" class=\"notr item splide__slide\"><div class=\"img-wrap PLHolder\"><img title=\"" + Uh.Title + "\" alt=\"" + Uh.Title + "\" data-hcarousel-src=\"" + Uh.ImgUrl + "\" style=\"opacity:0\" class=\"notr\"/><div class=\"overlay\"></div><div class=\"details-on-img\">" + Uk + Uq + "</div><div class=\"caption\"><span class=\"label-name\">" + Uh.Category + "</span><h3><a href=\"" + Uh.Link + "\">" + Uh.Title + "</a></h3></div></div></div>");
                }
                if (UL === "vslider") {
                  Uo.querySelector(".v-carousel .splide__list").append("<div role=\"article\" class=\"notr item splide__slide\"><div class=\"img-wrap PLHolder\"><img title=\"" + Uh.Title + "\" alt=\"" + Uh.Title + "\" data-vCarousel-src=\"" + Uh.ImgUrl + "\" style=\"opacity:0\" class=\"notr\"/><div class=\"overlay\"></div><div class=\"details-on-img\">" + Uk + Uq + "</div><div class=\"caption\"><span class=\"label-name\">" + Uh.Category + "</span><h3><a href=\"" + Uh.Link + "\">" + Uh.Title + "</a></h3></div></div></div>");
                }
                if (UL === "thumbs") {
                  Uo.querySelector(".rand-content").append("<div role=\"article\"><a title=\"" + Uh.Title + "\" href=\"" + Uh.Link + "\" class=\"img-wrap PLHolder\"><img title=\"" + Uh.Title + "\" alt=\"" + Uh.Title + "\" style=\"opacity:0\" class=\"notr\" data-src=\"" + Uh.ImgUrl + "\"></a><h3><a href=\"" + Uh.Link + "\">" + Uh.Title + "</a></h3><div class=\"details\">" + Uk + Uq + "</div></div>");
                }
              }
            });
          } else {
            Uo.innerHTML = "<div class='temp-error'><b>WIDGET ERROR</b><span>No posts found OR Blog feeds are disabled</span></div>";
          }
          if (UL === "slider") {
            U6(function () {
              var Uw = {
                "direction": BlogDirection,
                "pagination": false,
                "perPage": 1,
                "autoplay": true,
                "type": "fade",
                "rewind": true
              };
              new Splide(Uo.querySelector(".slider-carousel"), Uw).mount();
              LazyImages("data-hcarousel-src", null, false, Uo);
            });
          }
          if (UL === "vslider") {
            U6(function () {
              new Splide(Uo.querySelector(".v-carousel"), {
                direction: "ttb",
                height: Uo.querySelector(".item").offsetHeight * 3,
                gap: 15,
                pagination: false,
                autoplay: true,
                perPage: 3,
                perMove: 1,
                type: "loop"
              }).mount();
              LazyImages("data-vcarousel-src", null, false, Uo);
            });
          }
        }
      }
    }
    ;
  }
  function UM() {
    var UI = document.querySelectorAll(".post-outer").length;
    if (UI === 0) {
      _$("#Pagination").remove();
    } else {
      var Us;
      var Uf;
      var Uo;
      var Ue;
      var UC = L || d ? "https://www.blogger.com/feeds/" + E : "/feeds";
      if (a.indexOf("/search/label/") != -1) {
        Us = location.pathname.split("/")[3];
        Ue = w[decodeURIComponent(Us)];
        Uf = UC + "/posts/summary/-/" + Us;
      } else {
        Ue = PostCount;
        Uf = UC + "/posts/summary";
      }
      _$("#Pagination").prepend("<div class=\"nums\"><span class=\"curr\">1</span></div>");
      for (Uo = 2; Uo <= Math.ceil(Ue / UI); Uo++) {
        _$("#Pagination .nums").append("<span>" + Uo + "</span>");
      }
      function UZ() {
        if (Math.ceil(Ue / UI) > _$(".nums").offsetWidth / 39) {
          if (_$("#Pagination .pg-prev").length == 0) {
            _$("#Pagination").prepend("<a class=\"pg-prev\"></a>");
            _$("#Pagination").append("<a class=\"pg-next\"></a>");
          }
        } else {
          var UL = _$("#Pagination .pg-prev");
          var Ud = _$("#Pagination .pg-next");
          if (UL) {
            UL.remove;
          }
          ;
          if (Ud) {
            Ud.remove;
          }
          ;
        }
      }
      UZ();
      window.onresize = UZ;
    }
    ;
    _$(".pg-prev, .pg-next").onClick(function (UL) {
      if (UL.target && UL.target.hasClass("pg-next")) {
        var Ud = document.querySelector(".nums span:not(.hid-num)");
        if (Ud.textContent != Math.ceil(Ue / UI) - Math.floor(_$(".nums").offsetWidth / 39) + 1) {
          Ud.addClass("hid-num");
        }
      }
      if (UL.target && UL.target.hasClass("pg-prev")) {
        var UG = document.querySelectorAll(".nums span.hid-num");
        if (UG.length > 0) {
          UG[UG.length - 1].removeAttribute("class");
        }
      }
    });
    _$("#Pagination").onclick = function (UL) {
      if (UL.target && UL.target.parentElement.hasClass("nums") && !UL.target.hasClass("curr")) {
        var Ud = UL.target;
        if (FeedEnabled && !isPrivate) {
          _$(".curr").removeClass("curr");
          Ud.addClass("curr");
          _$(".post-outer").addClass("opac");
          var UG = Ud.textContent * UI - UI + 1;
          $getJSONP(Uf + "?alt=json-in-script&max-results=" + UI + "&start-index=" + UG, function (Ux) {
            _$(".index-posts").innerHTML = "";
            Ux.feed.entry.each(function (UB, Uw) {
              if (!UB.app$control) {
                var UJ = U4(UB);
                UJ.Snippet = UJ.Snippet.substr(0, snippetLength);
                var Uh = "<article role=\"article\" class=\"post-outer\"><div class=\"post gtd\">";
                Uh += "<a class=\"img-wrap PLHolder\" href=\"" + UJ.Link + "\" title=\"" + UJ.Title + "\">";
                Uh += "<img alt=\"" + UJ.Title + "\" data-pagin-src=\"" + UJ.ImgUrl + "\" title=\"" + UJ.Title + "\" style=\"opacity:0\" class=\"notr\">";
                Uh += "<div class=\"overlay\"></div>";
                Uh += "<span class=\"label-title\">" + UJ.Category + "</span>";
                Uh += "</a>";
                Uh += "<h2 class=\"post-title cate-link\"><a class=\"entry-title\" href=\"" + UJ.Link + "\" itemprop=\"name\">" + UJ.Title + "</a></h2>";
                Uh += "<div class=\"details\">";
                Uh += "<a class=\"author-prof\" rel=\"nofollow noreferrer\" href=\"" + UJ.Author_URI + "\" title=\"author\"><i class=\"fa fa-user-circle\"></i>" + UJ.Author + "</a>";
                Uh += "<span class=\"post-date\"><i class=\"fa fa-calendar-times-o\"></i>" + UJ.Date + "</span>";
                Uh += "</div>";
                Uh += "<p class=\"cate-snippet\">" + UJ.Snippet + "</p>";
                Uh += "<a class=\"read-more\" href=\"" + UJ.Link + "\">" + JumpButton + "</a>";
                Uh += "<div class=\"post-share\"><div class=\"share-icon\"><i class=\"fa fa-share-alt\"></i></div><ul class=\"share-menu\"><li><a rel=\"nofollow noreferrer\" target=\"_blank\" href=\"https://www.blogger.com/share-post.g?blogID=" + E + "&postID=" + UJ.PostId + "&target=facebook\"><i class=\"fa fa-facebook fa-fw\"></i></a></li><li><a rel=\"nofollow noreferrer\" target=\"_blank\" href=\"https://www.blogger.com/share-post.g?blogID=" + E + "&postID=" + UJ.PostId + "&target=twitter\"><i class=\"fa fa-twitter fa-fw\"></i></a></li><li><a rel=\"nofollow noreferrer\" target=\"_blank\" href=\"https://www.blogger.com/share-post.g?blogID=" + E + "&postID=" + UJ.PostId + "&target=pinterest\"><i class=\"fa fa-pinterest-p fa-fw\"></i></a></li></ul></div>";
                Uh += "</div></article>";
                _$(".index-posts").append(Uh);
              }
            });
            LazyImages("data-pagin-src");
            _$(".index-posts").append("<i class=\"clear\"></i>");
            _$("main").removeAttribute("style");
            window.scroll({
              behavior: "smooth",
              top: _$("#Blog1").offset().top,
              left: 0
            });
            Ut();
          });
        }
        ;
      }
      ;
    };
  }
  function Ut() {
    if (Z) {
      var UI = _$("#HTML505").outerHTML;
      if (UI) {
        _$(".index-posts .post-outer:nth-of-type(" + Z + "n)").each(function (Us) {
          Us.after(UI);
        });
      }
    }
  }
  function UQ(UI) {
    var Us = UI.getElementsByTagName("canvas")[0];
    var Uf = Us.width;
    var Uo = Us.height;
    var Ue = Us.getContext("2d");
    Ue.lineWidth = 4;
    Ue.strokeStyle = "#FFFFFF";
    Ue.shadowBlur = 1;
    Ue.shadowColor = "rgba(0,0,0,0.3)";
    var UC = Uf / 2;
    var UZ = Uo / 2;
    var Uv = 0;
    (function Ur(UF) {
      Ue.clearRect(0, 0, Uf, Uo);
      Ue.beginPath();
      Ue.arc(UC, UZ, 20, 0, UF, false);
      Ue.stroke();
      Uv++;
      if (Uv < 101) {
        requestAnimationFrame(function () {
          Ur(25 * Uv / 100 + 0);
        });
      }
    })();
  }
  function UE() {
    _$(".sided-sections").each(function (UI) {
      var Us = UI.querySelectorAll(".no-items");
      var Uf;
      if (UI.querySelectorAll(".section").length === 3) {
        if (Us.length === 0) {
          Uf = "three-cols";
        } else {
          if (Us.length === 1) {
            Uf = "two-cols";
            if (UI.querySelector(".section").hasClass("no-items")) {
              UI.querySelectorAll(".section")[0].addClass("wide-right");
            } else {
              if (UI.querySelectorAll(".section")[1].hasClass("no-items")) {
                UI.addClass("no-wide");
              } else if (UI.querySelectorAll(".section")[2].hasClass("no-items")) {
                UI.querySelectorAll(".section")[0].addClass("wide-left");
              }
            }
          } else {
            if (Us.length === 2) {
              Uf = "one-col";
            } else if (Us.length === 3) {
              Uf = "hide";
            }
          }
        }
      } else {
        if (UI.querySelectorAll(".section").length === 2) {
          if (Us.length === 0) {
            Uf = "two-cols";
            UI.addClass("no-wide");
          } else {
            if (Us.length === 1) {
              Uf = "one-col";
            } else if (Us.length === 2) {
              Uf = "hide";
            }
          }
        }
      }
      UI.addClass(Uf);
      if (Us.length > 0) {
        Us.each(function (Uo) {
          Uo.remove();
        });
      }
    });
  }
  function Ui() {
    var UI = _$(".maxeeCate");
    if (s && !SpeedFirst) {
      window.onscroll = function () {
        UI.each(function (Uf) {
          if (window.scrollY + window.innerHeight > Uf.offset().top && !Uf.hasClass("rendered")) {
            Uf.addClass("rendered");
            Us(Uf);
          }
        });
      };
    } else {
      UI.each(function (Uf) {
        Us(Uf);
      });
    }
    function Us(Uf) {
      var Uo = Uf.closest(".widget");
      var Ue = Uo.querySelector(".widget-content");
      var UC = Uo.getAttribute("id");
      var UZ = new String();
      var UL = L || d ? "https://www.blogger.com/feeds/" + E : "/feeds";
      var Ud = Uo.querySelector(".headline");
      var UG = Ud ? Ud.querySelector("h2") : null;
      var Ux = Uf.getAttribute("data-label");
      var Uv = Uf.getAttribute("data-type");
      var Ur = Uo.querySelector(".maxeeCate").getAttribute("data-len");
      Uo.addClass("cate-" + Uv);
      Uo.addClass("home-cate");
      var Uw = Ux === "random" ? "/search?max-results=" + l : "/search/label/" + Ux + "?max-results=" + l;
      if (Ud) {
        Ud.append("<a class=\"ribble\" href=\"" + Uw + "\"><span>" + showMore + "</span></a>");
        Ud.style.display = "block";
        UG.innerHTML = "<a href=\"" + Uw + "\" title=\"" + UG.textContent + "\">" + UG.textContent + "</a>";
      }
      if ((Ux === "random" || Ux === "recent" || Ux in w) && PostCount > 0 && FeedEnabled && !isPrivate) {
        UJ();
      } else {
        Uo.querySelector(".widget-content").innerHTML = "<div class='temp-error'><b>WIDGET ERROR</b><span>No posts found OR Blog feeds are disabled</span></div>";
      }
      function UJ() {
        if (Ux === "random" || Ux === "recent") {
          Ur = PostCount - Ur > 0 ? Ur : PostCount;
          var Uh = Math.round(Math.random() * PostCount - Ur);
          Uh = Uh <= 0 ? 1 : Uh;
        }
        switch (Ux) {
          case "recent":
            UZ = UL + "/posts/summary?alt=json-in-script&max-results=" + Ur;
            break;
          case "random":
            UZ = UL + "/posts/summary?alt=json-in-script&start-index=" + Uh + "&max-results=" + Ur;
            break;
          default:
            UZ = UL + "/posts/summary/-/" + encodeURIComponent(Ux) + "?alt=json-in-script&max-results=" + Ur;
        }
        if (isStorage) {
          if (sessionStorage[UC] !== undefined) {
            Uk(sessionStorage[UC]);
          } else {
            $getJSONP(UZ, function (Uq) {
              sessionStorage[UC] = JSON.stringify(Uq);
              Uk(Uq);
            });
          }
        } else {
          $getJSONP(UZ, function (Uq) {
            Uk(Uq);
          });
        }
        function Uk(Uq) {
          if (Ud) {
            Uo.querySelector(".headline").style.display = "block";
          }
          Uo.querySelector(".maxeeCate").remove();
          Uq = typeof Uq === "string" ? JSON.parse(Uq) : Uq;
          if (Uv === "carousel") {
            Ue.addClass("splide");
            Ue.innerHTML = "<div class=\"notr splide__track\"><div class=\"notr splide__list\"></div></div>";
            Ue = Ue.querySelector(".splide__list");
          }
          Uq.feed.entry.each(function (UA, UY) {
            var UD = new String();
            if (!UA.app$control) {
              var Un = U4(UA);
              Un.Snippet = Un.Snippet.substr(0, snippetLength) + "...";
              var Uj = showAuthor && Un.Author_URI !== "#" ? "<b rel=\"nofollow noreferrer\" href=\"" + Un.Author_URI + "\"><span class=\"author-prof\"><i class=\"fa fa-user-circle\"></i>" + Un.Author + "</span></b>" : "";
              var N0 = showTimestamp ? "<span class=\"post-date\"><i class=\"fa fa-calendar-times-o\"></i>" + Un.Date + "</span>" : "";
              switch (Uv) {
                case "slideshow":
                  UD += "<div class=\"Item notr " + (UY == 0 ? "is-active" : "") + "\" role=\"article\">";
                  UD += "<a title=\"" + Un.Title + "\"  href=\"" + Un.Link + "\" class=\"img-wrap PLHolder notr splide__slide\">";
                  UD += "<img class=\"notr\" title=\"" + Un.Title + "\" alt=\"" + Un.Title + "\" style=\"opacity:0\" data-slideshow-src=\"" + Un.ImgUrl + "\"/>";
                  UD += "<div class=\"overlay\"></div><div class=\"details-on-img\">" + Uj + N0 + "</div>";
                  UD += Ux === "random" || Ux === "recent" ? "<span class=\"label-name\">" + Un.Category + "</span>" : "";
                  UD += "</a>";
                  UD += "<h3 class=\"cate-link\"><a href=\"" + Un.Link + "\">" + Un.Title + "</a></h3>";
                  UD += "</div>";
                  break;
                case "carousel":
                  UD += "<div class=\"Item notr" + (Uv == "carousel" ? " splide__slide" : "") + "\" role=\"article\">";
                  UD += "<a title=\"" + Un.Title + "\"  href=\"" + Un.Link + "\" class=\"img-wrap PLHolder\">";
                  UD += "<img class=\"notr\" title=\"" + Un.Title + "\" alt=\"" + Un.Title + "\" style=\"opacity:0\" data-carousel-src=\"" + Un.ImgUrl + "\"/>";
                  UD += Uv === "carousel" ? "<div class=\"overlay\"></div>" : "";
                  UD += Ux === "random" || Ux === "recent" ? "<span class=\"label-name\">" + Un.Category + "</span>" : "";
                  UD += "</a>";
                  UD += "<h3 class=\"cate-link\"><a href=\"" + Un.Link + "\">" + Un.Title + "</a></h3>";
                  UD += "<div class=\"details\">" + Uj + N0 + "</div>";
                  UD += "</div>";
                  break;
                case "sided":
                  UD += "<div class=\"Item notr\" role=\"article\">";
                  UD += "<a title=\"" + Un.Title + "\"  href=\"" + Un.Link + "\" class=\"img-wrap PLHolder\">";
                  UD += "<img class=\"notr\" title=\"" + Un.Title + "\" alt=\"" + Un.Title + "\" style=\"opacity:0\" data-src=\"" + Un.ImgUrl + "\"/>";
                  if (UY == 0) {
                    UD += "<div class=\"overlay\"></div><div class=\"details-on-img\">" + Uj + N0 + "</div>";
                  }
                  UD += Ux === "random" || Ux === "recent" ? "<span class=\"label-name\">" + Un.Category + "</span>" : "";
                  UD += "</a>";
                  UD += "<h3 class=\"cate-link\"><a href=\"" + Un.Link + "\">" + Un.Title + "</a></h3>";
                  if (UY == 0) {
                    UD += "<p class=\"cate-snippet\">" + Un.Snippet + "</p>";
                    UD += "<a class=\"read-more\" href=\"" + Un.Link + "\">" + JumpButton + "</a>";
                    UD += "<div class=\"post-share\"><div class=\"share-icon\"><i class=\"fa fa-share-alt\"></i></div><ul class=\"share-menu\"><li><a rel=\"nofollow noreferrer\" target=\"_blank\" href=\"https://www.blogger.com/share-post.g?blogID=" + E + "&postID=" + Un.PostId + "&target=facebook\"><i class=\"fa fa-facebook fa-fw\"></i></a></li><li><a rel=\"nofollow noreferrer\" target=\"_blank\" href=\"https://www.blogger.com/share-post.g?blogID=" + E + "&postID=" + Un.PostId + "&target=twitter\"><i class=\"fa fa-twitter fa-fw\"></i></a></li><li><a rel=\"nofollow noreferrer\" target=\"_blank\" href=\"https://www.blogger.com/share-post.g?blogID=" + E + "&postID=" + Un.PostId + "&target=pinterest\"><i class=\"fa fa-pinterest-p fa-fw\"></i></a></li></ul></div>";
                  } else {
                    UD += "<div class=\"details\">" + Uj + N0 + "</div>";
                  }
                  UD += "</div>";
                  break;
                case "cover":
                  UD += "<div class=\"Item notr\" role=\"article\">";
                  UD += "<a title=\"" + Un.Title + "\"  href=\"" + Un.Link + "\" class=\"img-wrap PLHolder\">";
                  UD += "<img class=\"notr\" title=\"" + Un.Title + "\" alt=\"" + Un.Title + "\" style=\"opacity:0\" data-src=\"" + Un.ImgUrl + "\"/>";
                  if (UY == 0) {
                    UD += "<div class=\"overlay\"></div><div class=\"details-on-img\">" + Uj + N0 + "</div>";
                  }
                  UD += Ux === "random" || Ux === "recent" ? "<span class=\"label-name\">" + Un.Category + "</span>" : "";
                  UD += "</a>";
                  UD += "<h3 class=\"cate-link\"><a href=\"" + Un.Link + "\">" + Un.Title + "</a></h3>";
                  if (UY == 0) {
                    UD += "<p class=\"cate-snippet\">" + Un.Snippet + "</p>";
                    UD += "<a class=\"read-more\" href=\"" + Un.Link + "\">" + JumpButton + "</a>";
                    UD += "<div class=\"post-share\"><div class=\"share-icon\"><i class=\"fa fa-share-alt\"></i></div><ul class=\"share-menu\"><li><a rel=\"nofollow noreferrer\" target=\"_blank\" href=\"https://www.blogger.com/share-post.g?blogID=" + E + "&postID=" + Un.PostId + "&target=facebook\"><i class=\"fa fa-facebook fa-fw\"></i></a></li><li><a rel=\"nofollow noreferrer\" target=\"_blank\" href=\"https://www.blogger.com/share-post.g?blogID=" + E + "&postID=" + Un.PostId + "&target=twitter\"><i class=\"fa fa-twitter fa-fw\"></i></a></li><li><a rel=\"nofollow noreferrer\" target=\"_blank\" href=\"https://www.blogger.com/share-post.g?blogID=" + E + "&postID=" + Un.PostId + "&target=pinterest\"><i class=\"fa fa-pinterest-p fa-fw\"></i></a></li></ul></div>";
                  } else {
                    UD += "<div class=\"details\">" + Uj + N0 + "</div>";
                  }
                  UD += "</div>";
                  break;
                case "video":
                  UD += "<div class=\"Item notr\" role=\"article\">";
                  UD += "<a title=\"" + Un.Title + "\"  href=\"" + Un.Link + "\" class=\"img-wrap PLHolder\">";
                  UD += "<img class=\"notr\" title=\"" + Un.Title + "\" alt=\"" + Un.Title + "\" style=\"opacity:0\" data-src=\"" + Un.ImgUrl + "\"/>";
                  UD += Ux === "random" || Ux === "recent" ? "<span class=\"label-name\">" + Un.Category + "</span>" : "";
                  UD += "<div class=\"overlay\"></div><canvas id=\"bar\" width=\"50\" height=\"50\"></canvas><i class=\"fa fa-play\"></i>";
                  UD += "</a>";
                  UD += "<h3 class=\"cate-link\"><a href=\"" + Un.Link + "\">" + Un.Title + "</a></h3>";
                  UD += "<div class=\"details\">" + Uj + N0 + "</div>";
                  UD += "</div>";
                  break;
              }
              Ue.append(UD);
              Ue.setAttribute("role", "feed");
            }
          });
          if (Ux === "random" && Uv !== "sided" && Uv !== "cover") {
            var UW = Uo.querySelectorAll(".Item");
            if (UW.length > 3) {
              UW.each(function (UA) {
                var UY = Math.round(Math.random() * UW.length);
                UY = UY != -1 && UY != UW.length ? UY : 0;
                var UD = Uo.querySelectorAll(".Item")[UY];
                Ue.append(UD);
              });
            }
          }
          if (Uv == "sided" || Uv == "cover") {
            LazyImages("data-src", null);
          }
          if (Uv === "slideshow") {
            Ue.prepend("<div class=\"slideshow-thumbs\"></div>");
            Ue.prepend("<div class=\"slideshow-thumbnail notr splide\"><div class=\"notr splide__track\"><div class=\"notr splide__list\"></div></div><div class=\"s-progress notr\"></div><div class=\"splide__autoplay hide\"><button class=\"splide__play\"></button><button class=\"splide__pause\"></button></div></div>");
            Ue.querySelectorAll(".Item").each(function (UA) {
              Ue.querySelector(".splide__list").append(UA.querySelector(".img-wrap"));
              Ue.querySelector(".slideshow-thumbs").append(UA);
            });
            U6(function () {
              var UA = Ue.querySelector(".s-progress");
              var UY = {
                "type": "fade",
                "rewind": true,
                "direction": BlogDirection,
                "perPage": 1,
                "arrows": false,
                "autoplay": true,
                "pagination": false,
                "resetProgress": false
              };
              var UD = new Splide(Ue.querySelector(".slideshow-thumbnail"), UY).mount();
              UD.on("autoplay:playing", function (Un) {
                if (!UD.State.is(UD.STATES.MOVING)) {
                  UA.style.width = Un * 100 + "%";
                }
              });
              UD.on("move", function (Un) {
                Ue.querySelectorAll(".Item").each(function (Uj, N0) {
                  if (N0 == Un) {
                    Uj.addClass("is-active");
                  } else {
                    Uj.removeClass("is-active");
                  }
                });
              });
              Ue.querySelectorAll(".Item").each(function (Un, Uj) {
                Un.onclick = function (N0) {
                  var N1 = [...this.parentElement.children].indexOf(this);
                  UD.go(N1);
                };
                Un.onmouseenter = function () {
                  Ue.querySelector(".splide__pause").dispatchEvent(new Event("click"));
                };
                Un.onmouseleave = function () {
                  Ue.querySelector(".splide__play").dispatchEvent(new Event("click"));
                };
              });
              LazyImages("data-slideshow-src", null);
            });
          }
          if (Uv === "carousel") {
            U6(function () {
              var UA = Uo.closest(".cate").hasClass("one-col");
              var UY = {
                perPage: 3
              };
              var UD = {
                perPage: 2
              };
              var Un = {
                perPage: 1
              };
              var Uj = {
                "1100": UY,
                "860": UD,
                "640": Un
              };
              var N0 = {
                "type": "loop",
                "direction": BlogDirection,
                "perPage": UA ? 4 : 1,
                "perMove": 1,
                "autoplay": true,
                "breakpoints": UA ? Uj : {}
              };
              new Splide(Ue.closest(".splide"), N0).on("mounted", function () {
                LazyImages("data-carousel-src", null, false, Ue);
              }).mount();
            });
          }
          if (Uv === "slideshow" || Uv === "cover" || Uv === "video") {
            if ((Uo.closest(".cate").hasClass("two-cols") || Uo.closest(".cate").hasClass("three-cols")) && !Uo.parentElement.hasClass("wide-right") && !Uo.parentElement.hasClass("wide-left")) {
              Ue.addClass("tight-width");
            } else {
              Ue.addClass("free-width");
            }
          }
          if (Uo.querySelectorAll(".Item b").length > 0) {
            Uo.querySelectorAll(".Item b").each(function (UA) {
              UA.before("<a rel=\"nofollow noreferrer\" href=\"" + UA.getAttribute("href") + "\">" + UA.innerHTML + "</a>");
              UA.remove();
            });
          }
          if (Uv == "video") {
            Uo.querySelectorAll(".Item").each(function (UA) {
              UA.onmouseenter = function (UY) {
                UQ(UY.target);
              };
            });
          }
        }
      }
    }
  }
  function Ua() {
    AllowNew = typeof AllowNew != "undefined" ? AllowNew : false;
    if (AllowComments) {
      var UI = false;
      window.addEventListener("scroll", function () {
        if (window.scrollY > _$(".topic-comments").offset().top - 500 && !UI || !s && !UI) {
          UI = true;
          var Us = X.split("-");
          Us.each(function (Ue) {
            if (Ue === "blogger") {
              _$(".comments-bar").append("<button onclick='cTab(this)' role='tab' tabindex='0' data-bar='blogger'>" + trans[16] + " Blogger</button>");
              _$(".comments-tabs").append("<div class='notr blogger-tab' role='tabpanel'></div>");
              _$(".blogger-tab").append(_$("div.comments#comments"));
            }
            if (Ue === "facebook") {
              _$(".comments-bar").append("<button onclick='cTab(this)' role='tab' data-bar='facebook'>" + trans[16] + " Facebook</button>");
              _$(".comments-tabs").append("<div role=\"tabpanel\" class=\"notr facebook-tab\"><div class=\"fb-comments\" data-href=\"" + CanUrl + "\" data-width=\"100%\" data-numposts=\"5\"></div></div>");
            }
            if (Ue === "dimaxeeus") {
              _$(".comments-bar").append("<button onclick='cTab(this)' role='tab' data-bar='dimaxeeus'>" + trans[16] + " Dimaxeeus</button>");
              _$(".comments-tabs").append("<div role=\"tabpanel\" class=\"notr dimaxeeus-tab\"><div id=\"dimaxeeus_thread\"></div></div>");
            }
          });
          if (X.indexOf("blogger") == -1) {
            _$("#comments.comments").remove();
          }
          document.querySelectorAll(".comments-bar button")[0].dispatchEvent(new Event("click"));
          if (AllowNew) {
            _$("#item-comments").onclick = function (Ue) {
              if (Ue.target && Ue.target.hasClass("comment-reply")) {
                var UC = Ue.target;
                var UZ = UC.getAttribute("data-comment-id");
                UC.closest(".comment").append(_$("#comment-editor"));
                _$("#comment-editor").src = _$("#comment-editor").src + "&parentID=" + UZ;
              }
            };
          } else {
            _$(".comment-reply").each(function (Ue) {
              Ue.remove();
            });
          }
          function Uf(Ue) {
            Ue.innerHTML = Ue.innerHTML.replace(/(https:).+?(jpeg|jpg|gif|png|\s)/g, function (UC) {
              return UC.match(/(https:).+?(jpeg|jpg|gif|png)/) ? "<img title=\"comment photo\" alt=\"comment photo\" src=\"" + UC + "\"/>" : UC;
            });
            Ue.innerHTML = Ue.innerHTML.replace(/(https:\/\/)(www.youtube|youtube|youtu)(.com\/|.be\/).+?(\s|<br.*?>|$)/g, function (UC) {
              if (UC.indexOf("watch?v") !== -1) {
                UC = UC.replace("watch?v=", "embed/");
              }
              if (UC.indexOf("youtu.be") !== -1) {
                UC = "https://www.youtube.com/embed/" + UC.split("be/")[1];
              }
              if (UC.indexOf("&amp;") !== -1) {
                UC = UC.replace("&amp;", "?");
              }
              return "<iframe title=\"youtube video\" src=\"" + UC + "\"></iframe>";
            });
          }
          function Uo(Ue) {
            console.clear();
            if (Ue.length < 200) {
              _$("#loadmore").remove();
            }
            Ue.forEach(function (UC, UZ) {
              var UL = new DOMParser().parseFromString(_$(".comments-list > ul > li.comment:last-of-type").outerHTML, "text/html").querySelector("li");
              var Ud = UL.querySelector(".comment-replies ul");
              var UG = UL.querySelector(".avatar-image-container img");
              if (Ud) {
                Ud.innerHTML = "";
              }
              var Ux = UC.authorPhoto ? UC.authorPhoto.thumbUrl : UC.authorAvatarSrc.indexOf("blank") != -1 ? AltAuthor : UC.authorAvatarSrc;
              Ux = UC.inReplyTo ? resizeImg(Ux, 40, 40) : resizeImg(Ux, 72, 72);
              UL.setAttribute("id", UC.anchorName);
              UL.querySelector(".user a").setAttribute("href", UC.authorUrl);
              UL.querySelector(".user a").textContent = UC.author;
              UG.setAttribute("src", Ux);
              UG.setAttribute("alt", UC.author + "'s avatar");
              UG.setAttribute("title", UC.author + "'s avatar");
              UL.querySelector(".com-date").setAttribute("data-date", UC.timestampAbs);
              UL.querySelector(".com-date").textContent = UC.timestamp;
              UL.querySelector(".comment-content").innerHTML = UC.body;
              if (c) {
                Uf(UL.querySelector(".comment-content"));
              }
              UL.querySelector(".comment-reply").setAttribute("data-comment-id", UC.id);
              UL.querySelector(".blog-admin").setAttribute("class", "blog-admin " + UC.commentAuthorClass);
              UL.querySelector(".blog-admin").querySelector("a").setAttribute("href", UC.deleteUrl);
              if (UC.inReplyTo) {
                UL.querySelector(".comment-reply").parentElement.remove();
                let Uv = _$("#c" + UC.inReplyTo + " .comment-replies ul");
                if (Uv.length) {
                  Uv = Uv[0];
                }
                if (Uv.found()) {
                  Uv.append(UL.innerHTML);
                }
              } else if (!_$("#" + UC.anchorName).found()) {
                _$(".comments-list > ul").append(UL.outerHTML);
              }
            });
          }
          _$(".comments-show button").onClick(function () {
            var Ue = this;
            var UZ = _$(".comment-replies");
            Ue.siblings().each(function (UL) {
              UL.removeClass("active");
            });
            Ue.addClass("active");
            if (Ue.hasClass("comments-only")) {
              UZ.each(function (UL) {
                UL.slideUp();
              });
            } else {
              UZ.each(function (UL) {
                UL.slideDown();
              });
            }
          });
          if (AllowNew) {
            _$(".go-respond").addEventListener("click", function () {
              if (_$("#comment-editor").src.indexOf("parentID") !== -1) {
                _$("#comment-editor").src = _$("#comment-editor").src.replace(/\&parent.*/, "");
                _$("#comments-respond").inser("append", _$("#comment-editor"));
              }
            });
          }
          _$(".noimg").each(function (Ue) {
            Ue.after("<img title=\"user avatar\" alt=\"user avatar\" data-src=\"https://3.bp.blogspot.com/-zA1pdXqIA3g/WmSZNYYtVMI/AAAAAAAAAAw/hE9ko5Mhh6Q3Rwj3ziWErOuwLjeekF3IwCLcBGAs/s72-c-e90-rw/Unknown.png\">");
            Ue.remove();
          });
          if (c) {
            _$(".comment-content").each(function (Ue) {
              Uf(Ue);
            });
          }
          _$("#loadmore").onClick(function () {
            _WidgetManager._HandleControllerResult = function (Ue, UC, UZ) {
              Uo(UZ.comments);
            };
            $getScript(location.pathname + "?action=getComments&widgetId=Blog1&widgetType=Blog&responseType=js&postId=" + itemId + "&publishedMin=" + _$(".com-date")[_$(".com-date").length - 1].getAttribute("data-date") + "&xssi_token=" + window.__wavt, function () {});
          });
        }
      });
    } else {
      _$("#comments").remove();
      _$("#item-comments").remove();
    }
    window.cTab = function (Us) {
      var Uf = Us.getAttribute("data-bar");
      Us.siblings().each(function (UZ) {
        UZ.removeClass("active");
      });
      Us.addClass("active");
      _$(".comments-tabs").children.each(function (UZ) {
        UZ.slideUp(500, function () {
          _$("." + Uf + "-tab").slideDown(500);
        });
      });
      _$(".avatar-image-container img").each(function (UZ) {
        if (UZ.src.indexOf("blogger_logo_round") != -1) {
          UZ.src = UZ.src.replace(/\/img\/.+?\//, "/img/");
        }
      });
      if (Uf == "blogger" && !W) {
        W = true;
        if (AllowNew) {
          _$("#comment-editor").src = _$("#comment-editor").getAttribute("data-src");
          var Uo = _$("#comments-respond noscript").textContent.match(/('|")http.*?\/\/.*?(\'|\")/);
          Uo = Uo[0].replace(/('|")/g, "");
          $getScript(Uo, function (UZ) {
            BLOG_CMT_createIframe("https://www.blogger.com/rpc_relay.html");
            _$("#comments-respond").append(_$("#comment-editor"));
          });
        }
      }
      if (Uf == "facebook" && !A) {
        var Ue;
        switch (BlogLang) {
          case "ar":
            Ue = "ar_AR";
            break;
          case "es":
            Ue = "es_LA";
            break;
          case "en":
            Ue = "en_US";
            break;
          default:
            Ue = BlogLang.indexOf("_") != -1 ? BlogLang : BlogLang.toLowerCase() + "_" + BlogLang.toUpperCase();
        }
        $getScript("//connect.facebook.net/" + Ue + "/sdk.js", function () {
          A = true;
          var UZ = {
            "appId": K,
            "version": "v3.3"
          };
          FB.init(UZ);
          FB.XFBML.parse();
        });
      }
      if (Uf == "dimaxeeus") {
        if (Y) {
          var UC = {
            "reload": true
          };
          DISQUS.reset(UC);
        } else {
          $getScript("//" + S + ".dimaxeeus.com/embed.js", function () {
            Y = true;
          });
        }
      }
    };
  }
  function UV() {
    _$(".separator a:not([href*=\"bp.blogspot.com\"]):not([href*=\"googleusercontent\"])").each(function (UI) {
      UI.onclick = function (Us) {
        if (UI.getAttribute("target") == "_blank") {
          window.open(UI.href);
        } else {
          location.href = UI.href;
        }
      };
    });
    if (r && isPost) {
      _$(".topic-author").append("<a class=\"author-profile\" title=\"" + AuthorName + " profile\" href=\"" + r + "?name=" + encodeURI(AuthorName) + "\">" + trans[19] + "</a>");
    }
    if (v) {
      _$(".post-body a[href]:not([href^=\"https://twitter.com/\"])").each(function (UI) {
        var Us = UI.href;
        var Uf = b ? b.split(",").filter(function (UC) {
          return Us.indexOf(UC) != -1;
        }) : [];
        var Uo = new URL(Us);
        var Ue = new URL(location);
        if (Uo.hostname != Ue.hostname && !Uo.hostname.includes("bp.blogspot.com") && !Uo.hostname.includes("googleusercontent.com") && Uf.length == 0) {
          if (x) {
            UI.removeAttribute("href");
            UI.onclick = function (UC) {
              Uz(Us);
            };
          } else {
            UI.setAttribute("href", v + "?link=" + encodeURIComponent(Us));
          }
        }
      });
    }
    _$(".post-body a").each(function (UI) {
      if (!UI.closest("blockquote") && !UI.closest("#redirect-page") && !UI.closest(".separator") && !UI.hasClass("pr-but") && !UI.hasClass("maxee-button")) {
        UI.addClass("d-link");
      }
    });
  }
  function UX() {
    _$(".edit-post").each(function (UG) {
      var Ux = G ? "https://www.blogger.com/blogger.g?blogID=" + E + "#editor/target=" + (isPost ? "post" : "page") + ";" + (isPost ? "postID" : "pageID") + "=" + itemId : "https://blogger.com/blog/" + (isPost ? "post" : "page") + "/edit/" + E + "/" + itemId;
      UG.append("<a href='" + Ux + "' rel='nofollow noreferrer' target='_blank' title='Edit'>تعديل</a>");
    });
    var UI = _$(".post-contact-form");
    if (UI.found()) {
      UI.after(_$("#ContactForm93"));
    }
    _$("pre.maxee-code").each(function (UG) {
      var Ux = UG.innerHTML.indexOf("\n") != -1 ? UG.innerHTML.split("\n") : UG.innerHTML.split("<br>");
      var Uv = new String();
      var Ur = new String();
      var UF;
      for (UF = 0; UF < Ux.length; UF++) {
        if (UF !== Ux.length && Ux[UF] !== "") {
          Uv += "<span>" + (UF + 1) + "</span>";
        }
        Ur += "<code>" + Ux[UF] + "</code>";
      }
      UG.innerHTML = "<div class=\"code-sn\">" + Uv + "</div><pre class=\"maxee-source\">" + Ur + "</div>";
    });
    var Us = _$(".premium");
    if (Us.found()) {
      if (a.indexOf("?") !== -1 && a.split("&") !== -1 && localStorage.getItem("lock-" + itemId) === "true") {
        var Uf = a.split("?")[1].split("&");
        var Uo = Uf.filter(function (UG) {
          return UG.split("=")[0] === "id";
        })[0];
        var Ue = Uf.filter(function (UG) {
          return UG.split("=")[0] === "referrer";
        })[0];
        var UC = Ue !== undefined ? Ue.split("=")[1] : undefined;
        var UZ = Uo !== undefined ? Uo.split("=")[1] : undefined;
        var UL = document.referrer;
        var Ud;
        if (UZ == itemId && (UC == "facebook" || UC == "twitter") && (UL.indexOf("facebook.com") !== -1 || UL.indexOf("t.co") !== -1)) {
          localStorage.setItem("lock-" + itemId, "false");
          Ud = "false";
        } else {
          localStorage.setItem("lock-" + itemId, "true");
          Ud = "true";
        }
      } else if (localStorage.getItem("lock-" + itemId) === "false") {
        Ud = "false";
      } else {
        localStorage.setItem("lock-" + itemId, "true");
        Ud = "true";
      }
      if (Ud === "true") {
        _$(".post-body .premium").each(function (UG) {
          var Ux;
          var Uv = "https://www.facebook.com/sharer.php?u=" + encodeURIComponent(CanUrl + "?id=" + itemId + "&referrer=facebook");
          var Ur = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(CanUrl + "?id=" + itemId + "&referrer=twitter");
          Ux = "<h6 class=\"prm-title\">" + trans[17] + "</h6>";
          Ux += "<span class=\"prem-desc\">" + trans[18] + "</span>";
          Ux += "<a title=\"share to Facebook\" target=\"blank\" href=\"" + Uv + "\" class=\"pr-but pr-but-facebook\">Facebook</a>";
          Ux += "<a title=\"tweet\" target=\"blank\" href=\"" + Ur + "\" class=\"pr-but pr-but-twitter\">Twitter</a>";
          UG.style.display = "block";
          UG.innerHTML = Ux;
        });
      } else if (Ud === "false") {
        _$(".premium").removeClass("premium");
      }
    }
  }
  function UK() {
    if (_$("#authors-page").found()) {
      var UI = new URLSearchParams(location.search);
      if (UI.get("name")) {
        window.Aup_Posts_Content = new String();
        window.Aup_Name = decodeURI(UI.get("name")).replace(/\+/g, " ");
        window.Aup_Info = AuthorsInfo.filter(function (Uf) {
          return Uf.name == Aup_Name;
        })[0];
        window.Aup_avatar = Aup_Info.avatar || AltAuthor;
        Aup_avatar = resizeImg(Aup_avatar, 160, 160, "-cc");
        var Us;
        document.title = Aup_Name;
        _$(".post-body").innerHTML = "<div class=\"aup-wrapper\"><div class=\"aup-head\"><div class=\"aup-photo\" style=\"background-image:url(" + Aup_avatar + ")\"></div></div><h1 class=\"aup-name\">" + Aup_Name + "</h1><span class=\"aup-title\"></span><p class=\"aup-about\"><p><div class=\"aup-social social\"></div><div class=\"aup-posts\" role=\"feed\"></div>";
        if (Aup_Info) {
          if (Aup_Info.about) {
            _$(".aup-about").innerHTML = Aup_Info.about;
          }
          if (Aup_Info.rank) {
            _$(".aup-title").innerHTML = "<b>" + Aup_Info.rank + "</b>";
          }
          if (Object.keys(Aup_Info.links).length > 0) {
            for (site in Aup_Info.links) {
              if (B.indexOf(site) != -1) {
                Us = "<a class=\"fa fa-" + site + "\" href=\"" + Aup_Info.links[site] + "\"><svg><use href=\"#ic-" + site + "\"/></svg></a>";
              } else {
                Us = "<a class=\"fa fa-" + site + "\" href=\"" + Aup_Info.links[site] + "\"></a>";
              }
              _$(".aup-social").append(Us);
            }
          }
        }
        if (FeedEnabled && !isPrivate) {
          US();
        }
      } else if (FeedEnabled && !isPrivate) {
        Ul();
      }
    }
  }
  function US() {
    if (D === feed_count) {
      var UI = _$(".timeline-month");
      _$(".timeline-item").each(function (Uf) {
        var Uo = UI.filter(function (Ue) {
          return Ue.getAttribute("data-month") == Uf.getAttribute("data-month");
        })[0];
        Uo.append(Uf);
      });
      UI.each(function (Uf, Uo) {
        if (Uf.querySelector(".timeline-item")) {
          Uf.querySelectorAll(".timeline-month-name,.timeline-point").each(function (Ue) {
            Ue.removeClass("hide");
          });
        } else {
          Uf.remove();
        }
      });
    } else {
      var Us = L || d ? "https://www.blogger.com/feeds/" + E : "/feeds";
      $getJSONP(Us + "/posts/summary?alt=json-in-script&max-results=150&start-index=" + (D * 150 + 1), function (Uf) {
        Uf.feed.entry.each(function (Uo, Ue) {
          if (!Uo.app$control) {
            var UC = U4(Uo);
            if (UC.Author === Aup_Name) {
              Aup_Posts_Content += "<div class=\"timeline-month\" data-month=\"" + U3(UC.FullDate) + " " + UC.FullDate.substr(0, 4) + "\">";
              Aup_Posts_Content += "<b class=\"timeline-point hide\"></b>";
              Aup_Posts_Content += "<div class=\"timeline-month-name hide\"><span>" + U3(UC.FullDate) + " " + UC.FullDate.substr(0, 4) + "</span></div>";
              Aup_Posts_Content += "<div class=\"timeline-item\" role=\"article\" data-month=\"" + U3(UC.FullDate) + " " + UC.FullDate.substr(0, 4) + "\">";
              Aup_Posts_Content += "<span class=\"timeline-date\">";
              Aup_Posts_Content += "<b>" + UC.FullDate.substr(8, 2) + "</b>";
              Aup_Posts_Content += "<i>" + U3(UC.FullDate) + " " + UC.FullDate.substr(0, 4) + "</i>";
              Aup_Posts_Content += "</span>";
              Aup_Posts_Content += "<b class=\"timeline-point\"></b>";
              Aup_Posts_Content += "<div class=\"timeline-post\">";
              Aup_Posts_Content += "<img class=\"timeline-thumb\" src=\"" + resizeImg(UC.ImgUrl, 72, 72, "-cc") + "\"/>";
              Aup_Posts_Content += "<a class=\"timeline-title\" href=\"" + UC.Link + "\" title=\"" + UC.Title + "\">" + UC.Title + "</a>";
              Aup_Posts_Content += "</div>";
              Aup_Posts_Content += "</div>";
              Aup_Posts_Content += "</div>";
            }
          }
        });
        _$(".aup-posts").append(Aup_Posts_Content);
        Aup_Posts_Content = "";
        D += 1;
        US();
      });
    }
  }
  function Ul() {
    if (D === feed_count) {
      _$(".post-body").innerHTML = "<div class=\"blog-authors\"></div>";
      AuthorsInfo.each(function (UI, Us) {
        var Uf = new String();
        var Uo = UI.avatar || AltAuthor;
        var Ue;
        var UC = location.pathname + "?name=" + UI.name;
        Uf += "<div class=\"blog-author-card\" data-blog-author=\"" + UI.name + "\">";
        Uf += "<b class=\"blog-author-name\">" + UI.name + "</b>";
        Uf += "<span class=\"blog-author-avatar\" style=\"background-image:url(" + resizeImg(Uo, 120, 120, "-cc") + ")\"></span>";
        Uf += UI.rank ? "<b class=\"blog-author-rank\">" + UI.rank + "</b>" : "";
        Uf += "<div class=\"blog-author-social\"></div>";
        Uf += "<b class=\"blog-author-count\">" + UI.count + " " + trans[15] + "</b>";
        Uf += "<a href=\"" + UC + "\" class=\"blog-author-link\">" + trans[19] + "</a>";
        Uf += "</div>";
        _$(".blog-authors").append(Uf);
        if (UI.links) {
          for (site in UI.links) {
            if (B.indexOf(site) != -1) {
              Ue = "<a class=\"fa fa-" + site + "\" href=\"" + UI.links[site] + "\"><svg><use href=\"#ic-" + site + "\"/></svg></a>";
            } else {
              Ue = "<a class=\"fa fa-" + site + "\" href=\"" + UI.links[site] + "\"></a>";
            }
            _$("[data-blog-author=\"" + UI.name + "\"] .blog-author-social").append(Ue);
          }
        }
      });
    } else {
      $getJSON("/feeds/posts/summary?alt=json&max-results=150&start-index=" + (D * 150 + 1), function (UI) {
        UI.feed.entry.each(function (Us, Uf) {
          var Uo = AuthorsInfo.filter(function (UC) {
            return UC.name === Us.author[0].name.$t.toString();
          })[0];
          if (Uo) {
            Uo.count += 1;
          } else {
            var Ue = {
              "name": Us.author[0].name.$t,
              "avatar": Us.author[0].gd$image ? Us.author[0].gd$image.src : AltAuthor,
              "count": 1,
              "provided": false
            };
            AuthorsInfo.push(Ue);
          }
        });
        D += 1;
        Ul();
      });
    }
  }
  function UP() {
    if (_$("#archive-page").found()) {
      Object.keys(w).each(function (Us, Uf) {
        var Uo = w[Us];
        var Ue = Math.ceil(Uo / 150);
        var UC = decodeURI(Us);
        _$(".post-body").append("<div class=\"arp-label\" id=\"l-" + Uf + "\"><div class=\"arp-label-name\"><b>" + UC + "</b><span class=\"arp-label-count\">" + Uo + " <u>" + trans[15] + "</u></span></div></div>");
        if (FeedEnabled && !isPrivate) {
          UI(Uf, 0, UC, Ue);
        }
      });
      function UI(Us, Uf, Uo, Ue) {
        var UC = L || d ? "https://www.blogger.com/feeds/" + E : "/feeds";
        $getJSONP(UC + "/posts/summary/-/" + encodeURIComponent(Uo) + "?alt=json-in-script&max-results=150&start-index=" + (Uf * 150 + 1), function (UZ) {
          UZ.feed.entry.each(function (UL) {
            if (!UL.app$control) {
              var Ud = U4(UL);
              var UG = new String();
              UG += "<div class=\"arp-item\">";
              UG += "<img class=\"arp-thumb\" src=\"" + resizeImg(Ud.ImgUrl, 72, 72) + "\"/>";
              UG += "<span class=\"arp-date\">" + Ud.Date + "</span>";
              if (UL.category[1] !== undefined) {
                UG += "<span class=\"arp-cate\">" + UL.category.filter(function (Ux) {
                  return Ux.term != Uo;
                })[0].term + "</span>";
              }
              UG += "<a class=\"arp-link\" href=\"" + Ud.Link + "\">" + Ud.Title + "</a>";
              UG += "</div>";
              _$("#l-" + Us).append(UG);
            }
          });
          Uf = Uf + 1;
          if (Uf != Ue) {
            UI(Us, Uf, Uo, Ue);
          }
        });
      }
    }
  }
  function Uz(UI) {
    var Us;
    if (x) {
      _$("body").append("<div class=\"redirect-modal notr\"><div class=\"modal-overlay\">" + _$(".Loading").innerHTML + "<div class=\"modal-content notr\"><div class=\"modal-head\"><div class=\"modal-title\"></div><span class=\"modal-close fa fa-times\"></i></div><div class=\"modal-body\"></div></div></div></div>");
      _$(".redirect-modal").fadeIn();
      _$("body").setAttribute("data-overflow", false);
      $load(v, function (UZ) {
        var UL = new DOMParser().parseFromString(UZ, "text/html");
        _$(".modal-body").innerHTML = UL.querySelector(".post-body").innerHTML;
        _$(".modal-title").textContent = UL.querySelector(".entry-title").textContent;
        Ue(UI);
        UL.querySelectorAll(".post-body ins").each(function () {
          (adsbygoogle = window.adsbygoogle || []).push({});
        });
      });
    } else {
      if (_$("#redirect-page").found()) {
        var Uf = new URLSearchParams(location.search);
        UI = Uf.get("link") ? decodeURIComponent(Uf.get("link")) : sessionStorage.link;
        Uf["delete"]("link");
        var Uo = Uf.toString() ? "?" + Uf.toString() : "";
        if (UI != "undefined") {
          sessionStorage.link = UI;
          history.replaceState("", "", location.origin + location.pathname + Uo);
          Ue(UI);
        }
      }
    }
    document.body.onclick = function (UZ) {
      if (UZ.target && UZ.target.hasClass("modal-close")) {
        UC();
      }
    };
    function Ue(UZ) {
      var UL = new String();
      var Ud = H;
      UL += "<div class=\"cLoaderWrap\">";
      UL += "<svg id=\"cLoaderSVG\" width=\"120\" height=\"120\" xmlns=\"http://www.w3.org/2000/svg\">";
      UL += "<circle class=\"cPath\" r=\"70\" cy=\"100\" cx=\"100\"/>";
      UL += "<circle class=\"cLoader\" r=\"70\" cy=\"100\" cx=\"100\"/>";
      UL += "</svg>";
      UL += "<b class=\"cCount\">" + H + "</b>";
      UL += "</div>";
      UL += "<div class=\"cButton\">";
      UL += "<a target=\"_blank\" class=\"cLink disabled maxee-button xl\" rel=\"nofollow noreferrer\">" + trans[24] + "</a>";
      UL += "</div>";
      document.querySelector("#redirect-page").innerHTML = UL;
      var UG = parseInt(getComputedStyle(_$(".cLoader")).strokeDasharray);
      Us = setInterval(Ux, 1e3);
      function Ux() {
        if (Ud == 0) {
          _$("#cLoaderSVG").after("<i class=\"fa fa-check cLoaded zoom\"></i>");
          _$(".cLoader").addClass("done");
          _$(".cLink").removeClass("disabled");
          _$(".cLink").textContent = trans[25];
          clearInterval(Us);
          if (UZ) {
            _$(".cLink").setAttribute("href", UZ);
            if (g) {
              location.assign(UZ);
            }
          }
        } else {
          _$(".cCount").addClass("zoom");
          setTimeout(function () {
            _$(".cCount").removeClass("zoom");
          }, 800);
          _$(".cCount").textContent = Ud < 10 ? "0" + Ud : Ud;
          Ud--;
          _$(".cLoader").style["stroke-dashoffset"] = UG - (H - Ud) * (UG / H);
        }
      }
      window.onblur = function () {
        clearInterval(Us);
      };
      window.onfocus = function () {
        Us = Ud != 0 ? setInterval(Ux, 1e3) : undefined;
      };
    }
    function UC() {
      clearInterval(Us);
      _$(".redirect-modal").fadeOut(400, function (UZ) {
        UZ.remove();
        _$("body").setAttribute("data-overflow", true);
      });
    }
  }
  function Um() {
    var UI = AuthorsInfo.filter(function (Ur) {
      return Ur.name === AuthorName;
    })[0];
    var Us = UI ? UI.provided : false;
    var Uf = UI && Us ? UI : AuthorsInfo;
    var Uo = UH();
    var Ue = Uf["top-ad"] ? Uf["top-ad"] : AuthorsInfo["top-ad"] ? AuthorsInfo["top-ad"] : null;
    var UC = Uf["mid-ad"] ? Uf["mid-ad"] : AuthorsInfo["mid-ad"] ? AuthorsInfo["mid-ad"] : null;
    var UZ = Uf["bot-ad"] ? Uf["bot-ad"] : AuthorsInfo["bot-ad"] ? AuthorsInfo["bot-ad"] : null;
    var UL = Uf["str-ad"] ? Uf["str-ad"] : AuthorsInfo["str-ad"] ? AuthorsInfo["str-ad"] : null;
    var Ud = Uf["pgn-ad"] ? Uf["pgn-ad"] : AuthorsInfo["pgn-ad"] ? AuthorsInfo["pgn-ad"] : null;
    var UG = Uf["rlt-ad"] ? Uf["rlt-ad"] : AuthorsInfo["rlt-ad"] ? AuthorsInfo["rlt-ad"] : null;
    var Ux = Uf["cmt-ad"] ? Uf["cmt-ad"] : AuthorsInfo["cmt-ad"] ? AuthorsInfo["cmt-ad"] : null;
    var Uv = Uf["end-ad"] ? Uf["end-ad"] : AuthorsInfo["end-ad"] ? AuthorsInfo["end-ad"] : null;
    (function Ur() {
      if (PagedPost && Ud) {
        _$(".post-pages").after("<div class=\"article-ad pgn-ad\"></div>");
        _$(".pgn-ad").appendElements(Ud, "append");
      }
      if (UL) {
        _$(".str-ad").appendElements(UL, "append");
      }
      if (Ue) {
        _$(".top-ad").appendElements(Ue, "append");
      }
      if (UZ) {
        _$(".bot-ad").appendElements(UZ, "append");
      }
      if (UG) {
        _$(".rlt-ad").appendElements(UG, "append");
      }
      if (Ux) {
        _$(".cmt-ad").appendElements(Ux, "append");
      }
      if (Uv) {
        _$(".end-ad").appendElements(Uv, "append");
      }
      if (C && !PagedPost) {
        var UF = _$(".post-body").querySelectorAll("h2,h3,h4,h5,h6");
        if (UF.length > 0 && UC) {
          UF.each(function (Uw) {
            Uw.appendElements("<div class=\"Middle-Ad\">" + UC + "</div>", "before");
          });
        } else {
          if (UC) {
            Uo.appendElements("<div class=\"Middle-Ad\">" + UC + "</div>", "after");
          }
        }
      } else {
        if (PagedPost) {} else {
          if (UC) {
            Uo.appendElements("<div class=\"Middle-Ad\">" + UC + "</div>", "after");
          }
        }
      }
      setTimeout(function () {
        _$("ins.adsbygoogle:empty").each(function (Uw) {
          (adsbygoogle = window.adsbygoogle || []).push({});
        });
      }, 1e3);
      if (UI && Us) {
        var UB;
        _$(".topic-author .clear-left").after(UI.rank ? "<b class='author-rank'>" + UI.rank + "</b>" : "");
        _$(".topic-author .author-about").innerHTML = UI.about ? UI.about : "";
        Object.keys(UI.links).each(function (Uw) {
          if (B.indexOf(Uw) != -1) {
            UB = "<a target=\"_blank\" title=\"" + Uw + "\" class=\"fa fa-" + Uw + "\" href=\"" + UI.links[Uw] + "\"><svg><use href=\"#ic-" + Uw + "\"></a></svg></a>";
          } else {
            UB = "<a target=\"_blank\" title=\"" + Uw + "\" class=\"fa fa-" + Uw + "\" href=\"" + UI.links[Uw] + "\"></a>";
          }
          _$(".topic-author .social").append(UB);
        });
        _$(".topic-author").style.display = "block";
      }
    })();
  }
  function Uu(UI, Us) {
    Us = Us - 10;
    if (UI.offsetWidth < Us) {
      return Uu(UI.parentElement, Us);
    } else {
      var Uf = document.createElement("div");
      var Uo = {
        "width": "100%"
      };
      Uf.css(Uo);
      UI.after(Uf);
      return Uf.offsetWidth < Us ? Uu(UI.parentElement, Us) : (Uf.remove(), UI);
    }
  }
  function UH() {
    let UI = _$(".post-body");
    let Us = UI.offsetWidth;
    let Uf;
    let Uo;
    UI.querySelectorAll("pre *,ins *,iframe *, blockquote:not(.twitter-tweet) *,ul *,ol *,.separator *,br,table, table *,.ContactForm, .ContactForm *,.premium, .premium *,h2,h3,h4,h5,h2 *, h3 *, h4 *, h5 *, .Middle-Ad, .Middle-Ad *").each(function (Ue) {
      Ue.addClass("ns");
    });
    Uf = UI.querySelectorAll("*:not(.ns)");
    Uo = Uf[Math.floor(Uf.length / 2)];
    Uo = Uu(Uo, Us);
    return Uo;
  }
  function Ub() {
    _$(".post-body blockquote:not(.twitter-tweet)").each(function (UI) {
      var Us = "<div class=\"quote-share\">";
      Us += "<a target=\"_blank\" title=\"share to Facebook\" rel=\"nofollow noreferrer\" href=\"https://www.facebook.com/sharer/sharer.php?v=4&u=" + a + "&quote=" + UI.textContent + "\" class=\"quote-fb\"><i class=\"fa fa-facebook\"></i></a>";
      if (UI.textContent.length + 23 > 280) {
        var Uf = UI.textContent.length + 23 - 280;
        var Uo = UI.textContent.substr(0, UI.textContent.length - Uf - 5) + "...";
      } else {
        Uo = UI.textContent;
      }
      Us += "<a target=\"_blank\" title=\"tweet\" rel=\"nofollow noreferrer\" href=\"https://twitter.com/intent/tweet?url=" + a + "&text=" + Uo + " :\" class=\"quote-tw\"><i class=\"fa fa-twitter\"></i></a>";
      UI.append(Us);
    });
  }
  function Ug() {
    _$(".zooming i").onClick(function (UI) {
      var Us = UI.target;
      var Uf = _$(".post-body, .post-body *:not(br)");
      Uf.each(function (Uo) {
        var Ue = parseInt(Uo.css("fontSize"));
        if (Us.hasClass("fa-plus")) {
          Uo.style.fontSize = Ue + 2 + "px";
        } else if (Us.hasClass("fa-minus")) {
          Uo.style.fontSize = Ue - 2 + "px";
        }
      });
    });
  }
  function UO() {
    navExcuted = false;
    window.addEventListener("scroll", function () {
      if (window.scrollY + window.innerHeight > _$(".topic-nav").offset().top && !navExcuted || !s && !navExcuted) {
        navExcuted = true;
        _$(".next,.prev").each(function (UI) {
          var Us = UI.href;
          var Uf = UI.hasClass("prev") ? trans[21] : trans[20];
          $load(Us, function (Uo) {
            Uo = new DOMParser().parseFromString(Uo, "text/html");
            var Ue = Uo.querySelector("meta[name='postPoster']").getAttribute("content");
            Ue = Ue !== "" ? Ue : AltImage;
            Ue = resizeImg(Ue, Math.ceil(UI.offsetWidth - 20), 160);
            UI.querySelector("h5").before("<span class=\"next-txt\">" + Uf + "</span>");
            UI.querySelector("h5").after("<div class=\"topic-img\"><img src=\"" + Ue + "\"></div>");
            UI.querySelector("h5").textContent = Uo.querySelector("meta[name='postTitle']").getAttribute("content");
          });
        });
      }
    });
  }
  function Uy() {
    var UI = false;
    window.addEventListener("scroll", function () {
      if (window.scrollY + window.innerHeight > _$(".post-outer").offset().top && !UI || !s && !UI) {
        UI = true;
        let Uf = Array.from(document.querySelectorAll(".categ a:nth-of-type(n+2)"), function (Ud, UG) {
          return Ud.textContent;
        });
        let Uo = [itemId];
        let Ue = UH();
        let UC = 0;
        let UZ;
        Ue.after("<div class=\"see-also\"><strong>" + trans[36] + "</strong><ul></ul></div>");
        if (Uf.length == 1) {
          UZ = "/feeds/posts/summary/-/" + Uf[0] + "?alt=json&max-results=6";
        } else {
          if (Uf.length > 1) {
            var Us = Uf.filter(function (Ud) {
              return Ud.indexOf(" ") == -1;
            });
            if (Us) {
              UZ = "/feeds/posts/summary/?category=" + Us.join(",") + "&alt=json&max-results=6";
            } else {
              UZ = "/feeds/posts/summary/-/" + Uf[0] + "?alt=json&max-results=6";
            }
          } else {
            UC = 10;
            UZ = "/feeds/posts/summary/?alt=json&max-results=6";
          }
        }
        UL(UZ);
        function UL(Ud) {
          UC++;
          $getJSON(Ud, function (UG) {
            if (UG.feed.entry != undefined) {
              UG.feed.entry.each(function (Uv, Ur) {
                var UF = U4(Uv);
                if (Uo.indexOf(UF.PostId) == -1) {
                  _$(".see-also ul").append("<li><a href=\"" + UF.Link + "\" title=\"" + UF.Title + "\">" + UF.Title + "</a></li>");
                  Uo.push(UF.PostId);
                }
              });
              var Ux = document.querySelectorAll(".see-also li");
              if (Ux.length < 5 && PostCount > 5 && UC < 2 && Uf.length > 1) {
                Uf = Uf.filter(function (Uv) {
                  return Uv.indexOf(" ") == -1;
                }).join("|label:");
                UL("/feeds/posts/summary/?q=label:" + Uf + "&alt=json&max-results=6");
              }
            }
          });
        }
      }
    });
  }
  function Uc() {
    relExcuted = false;
    window.onscroll = function () {
      if (window.scrollY + window.innerHeight > _$(".topic-related").offset().top && !relExcuted || !s && !relExcuted) {
        relExcuted = true;
        var UI;
        var Us;
        var Uf;
        var Uo = [itemId];
        var Ue = L || d ? "https://www.blogger.com/feeds/" + E : "/feeds";
        var UZ = Array.from(document.querySelectorAll(".categ a:nth-of-type(n+2)"), Ur => Ur.textContent);
        var UL = 0;
        var Ud;
        if (FeedEnabled && !isPrivate) {
          if (UZ.length == 1) {
            Us = Ue + "/posts/summary/-/" + UZ[0] + "?alt=json-in-script&max-results=" + u;
          } else {
            if (UZ.length > 1) {
              var UG = UZ.filter(function (Ur) {
                return Ur.indexOf(" ") == -1;
              }).join("|label:");
              if (UG) {
                Us = Ue + "/posts/summary/?q=label:" + UG + "&alt=json-in-script&max-results=" + u;
              } else {
                Us = Ue + "/posts/summary/-/" + UZ[0] + "?alt=json-in-script&max-results=" + u;
              }
            } else {
              Us = Ue + "/posts/summary/?alt=json-in-script&max-results=" + u;
            }
          }
          $getJSONP(Us, function (Ur) {
            Ux(Ur);
            Uv();
            if (Ur.feed.entry.length < u + 1) {
              UL = u + 1 - Ur.feed.entry.length;
              Uf = Ue + "/posts/summary?alt=json-in-script&max-results=" + UL;
              $getJSONP(Uf, function (UF) {
                Ux(UF);
                Uv();
              });
            }
          });
        }
        function Ux(Ur) {
          for (UI = 0; UI < Ur.feed.entry.length; UI = UI + 1) {
            if (!Ur.feed.entry[UI].app$control) {
              var UF = U4(Ur.feed.entry[UI]);
              if (Uo.indexOf(UF.PostId) == -1) {
                Uo.push(UF.PostId);
                var UB = showAuthor && UF.Author_URI !== "#" ? "<a rel=\"nofollow noreferrer\" href=\"" + UF.Author_URI + "\"><span class=\"author-prof\"><i class=\"fa fa-user-circle\"></i>" + UF.Author + "</span></a>" : "";
                var Uw = showTimestamp ? "<span class=\"post-date\"><i class=\"fa fa-calendar-times-o\"></i>" + UF.Date + "</span>" : "";
                var UJ = "<div class=\"Item notr splide__slide\"><div class=\"item-wrap\"><a title=\"" + UF.Title + "\" href=\"" + UF.Link + "\" class=\"img-wrap PLHolder\"><img style=\"opacity:0\" class=\"rel-img notr\" data-rel-src=\"" + UF.ImgUrl + "\" title=\"" + UF.Title + "\" alt=\"" + UF.Title + "\"/><div class=\"overlay\"></div><span class=\"label-title\">" + UF.Category + "</span></a><div class=\"details\">" + UB + Uw + "</div><h3><a title=\"" + UF.Title + "\" href=\"" + UF.Link + "\">" + UF.Title + "</a></h3></div></div>";
                if (_$(".related-carousel").hasClass("flickity-enabled")) {
                  Ud.add(UJ);
                } else {
                  _$(".related-carousel .splide__list").append(UJ);
                }
              }
            }
          }
        }
        function Uv() {
          U6(function () {
            var Ur = {
              perPage: 2
            };
            var UF = {
              perPage: 3
            };
            var UB = {
              perPage: 2
            };
            var Uw = {
              perPage: 1
            };
            var UJ = {
              "1160": Ur,
              "992": UF,
              "802": UB,
              "640": Uw
            };
            var Uh = {
              "direction": BlogDirection,
              "pagination": false,
              "rewind": true,
              "perMove": 1,
              "perPage": 3,
              "breakpoints": UJ
            };
            Ud = new Splide(".related-carousel", Uh).mount();
            LazyImages("data-rel-src", null, true);
          });
        }
      }
    };
  }
  function UT() {
    if (window.innerWidth > 992 && document.querySelector("aside") != null) {
      window.addEventListener("scroll", function () {
        var UI = _$("main");
        var Us = _$("aside");
        var Uf = _$(".middle-content").offset().top;
        var Uo = UI.offsetHeight;
        var Ue = Uf + Uo;
        var UC = Us.offsetHeight;
        var UZ = Uf + UC;
        var UL = window.scrollY;
        var Ud = window.innerHeight;
        var UG = UL + Ud;
        var Ux = _$(".bottom-content").offset().top - 20;
        if (Uo > UC && UG >= UZ && UC > Ud) {
          if (UG <= Ux) {
            Us.style.top = UG - UZ - 20 + "px";
          } else {
            Us.style.top = Ux - Uf - UC - 20 + "px";
          }
        } else if (Uo < UC && UG >= Ue && Uo > Ud) {
          if (UG <= Ux) {
            UI.style.top = UG - Ue - 20 + "px";
          } else {
            UI.style.top = Ux - Uo - Uf - 20 + "px";
          }
        } else {
          UI.style.top = 0;
          Us.style.top = 0;
        }
      });
    } else {
      _$("main").style.top = 0;
    }
  }
  if (!E) {
    U9(1);
  }
})();
