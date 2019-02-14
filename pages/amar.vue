<template>
  <div>
    <div id="loader">
      <div class="wrapper">
        <div class="valentine popup-web slide1 slide2 slide3 slide4">
          <div class="valentine__interface">
            <div class="valentine__actions">
              <svg class="mg-right-lv2" width="56" id="valentine-action-no" viewBox="0 0 59.6 63">
                <path class="background" d="M29.1,62a30.1,30.1,0,0,1-10.8-1.9,26.1,26.1,0,0,1-15-14.5A33.9,33.9,0,0,1,17.1,4.5a24.7,24.7,0,0,1,7.7-3A29.1,29.1,0,0,1,47.7,7.1,26.3,26.3,0,0,1,58.4,25.9c.7,9.3-.4,16.6-3.3,22.4-4.8,9.6-14.5,12.6-21.9,13.5Z"></path>
                <path class="border" d="M29.1,63a30.9,30.9,0,0,1-11.2-2A27.1,27.1,0,0,1,2.3,46,34.9,34.9,0,0,1,16.6,3.7a25.7,25.7,0,0,1,8-3.1A30.1,30.1,0,0,1,48.3,6.3,27.3,27.3,0,0,1,59.4,25.8c.7,9.5-.4,17-3.4,23-5,10-15.1,13.1-22.7,14ZM30,2a24.9,24.9,0,0,0-5,.5,23.7,23.7,0,0,0-7.3,2.9A32.9,32.9,0,0,0,4.2,45.3,25.1,25.1,0,0,0,18.6,59.2a30.5,30.5,0,0,0,14.5,1.6C40.2,60,49.6,57,54.2,47.9,57,42.2,58.1,35,57.4,25.9A25.3,25.3,0,0,0,47.1,7.9,28.7,28.7,0,0,0,30,2Z"></path>
                <path class="symbol" d="M45.8,42.9l-13.1-12,9.7-10.7a1.3,1.3,0,1,0-2-1.8L30.7,29.1,18.8,18.2a1.3,1.3,0,0,0-1.8,2L28.9,31.1,18.1,42.9a1.3,1.3,0,0,0,.1,1.9,1.4,1.4,0,0,0,1.9-.1L30.8,32.9,44,44.9a1.3,1.3,0,0,0,1.8-2Z"></path>
              </svg>
              <svg width="56" id="valentine-action-yes" viewBox="0 0 62.8 61.6">
                <path class="background" d="M59.3,42.5a30.1,30.1,0,0,1-5.7,9.4,26.1,26.1,0,0,1-19,8.7A33.9,33.9,0,0,1,1.4,32.7a24.7,24.7,0,0,1,0-8.2A29.1,29.1,0,0,1,14.8,5.2,26.3,26.3,0,0,1,36.2,2c8.9,2.7,15.4,6.4,19.7,11.2,7.2,7.9,6.5,18.1,4.6,25.3A35.2,35.2,0,0,1,59.3,42.5Z"></path>
                <path class="border" d="M34.7,61.6h-.1A34.9,34.9,0,0,1,.4,32.9a25.7,25.7,0,0,1,0-8.6,30.1,30.1,0,0,1,14-20A27.3,27.3,0,0,1,36.5,1.1c9.1,2.8,15.7,6.6,20.2,11.5,7.5,8.3,6.8,18.8,4.9,26.2a36.3,36.3,0,0,1-1.3,4,30.9,30.9,0,0,1-5.9,9.7A27.1,27.1,0,0,1,34.7,61.6ZM29.1,2A26.4,26.4,0,0,0,15.4,6a28,28,0,0,0-13,18.7,23.7,23.7,0,0,0,0,7.9,32.9,32.9,0,0,0,32.3,27h.1a25.1,25.1,0,0,0,18.1-8.4,28.9,28.9,0,0,0,5.5-9.1h0a34.4,34.4,0,0,0,1.2-3.8c1.8-6.9,2.5-16.8-4.4-24.4C51,9.3,44.7,5.7,35.9,3A23.1,23.1,0,0,0,29.1,2Z"></path>
                <path class="symbol" d="M31.8,23.4s-3.2-5.8-8.4-5.3-9,7.7-4.5,14.7a34,34,0,0,0,11,10.6s12.8-4.3,15.2-11.6-1.5-12.5-5.4-12.5S31.8,23.4,31.8,23.4Z"></path>
              </svg>
            </div>
          </div>
          <div class="valentine__heart">
            <img class="hearts" src="~assets/img/heart_1.svg" />
            <img class="hearts" src="~assets/img/heart_2.svg" />
            <img class="hearts" src="~assets/img/heart_3.svg" />
            <img class="hearts" src="~assets/img/heart_4.svg" />
            <img class="hearts" src="~assets/img/heart_5.svg" />
            <img class="hearts" src="~assets/img/heart_6.svg" />
            <img class="hearts" src="~assets/img/heart_7.svg" />
            <img class="heart" src="~assets/img/heart.svg" />
            <!-- <div class="heart-text-1">It's a <b>Match!</b></div> -->
            <div class="spin">
              <img src="~assets/img/face.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="main" class="main" :class="bgColor">
      <div class="logo semi-trans" v-on:click="getquote">
        <span v-html="totalQuotes"> </span><span> motivos para te amar</span>
      </div>
      <div class="mantra-screen">
        <div class="mantra current" style="display: block;">
          <div class="inner-wrapper">
            <div class="center-align">
              <div class="mantra-wrap">
                <blockquote id="quote" v-html="quote"></blockquote>
              </div>
              <div class="credit-wrap">
                <span class="line"></span><span class="cboldup" v-html="idQuote"> </span><span class="cboldup"> Escrito
                  por</span>
                <h3>
                  <span class="founder-name">Matheus Cezar</span><br /><span class="founder-clink"><em>Para: Elizabeth
                      Freitas</em></span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from "axios";
  export default {
    name: "app",
    data() {
      return {
        totalQuotes: "",
        quote: "",
        idQuote: "",
        bgColor: "",
        o: ["bg231a9d57", "bgc26d1917", "bg3bbd4fca", "bg0692f640", "bgcc5b74c4", "bg5a2d6289", "bg0f0f448e",
          "bgaf3ac0ca", "bgc222d2bb", "bg45fe2c19", "bgf36ca093", "bgf294ce39", "bg3ba57143", "bg675d0497",
          "bgdc9d8ddc", "bg7977d314", "bg1b86f6a0", "bg41a75efc", "bg12a22a86", "bgc81add8f", "bg78009f12",
          "bg757b1e21", "bg1eafd85b", "bg89823765", "bgd12e4f4b", "bg83fe2bef", "bg8b512038", "bgc12cb83d",
          "bg91f2cf1e", "bgfc9f8f3d", "bg0e60e201", "bg4e94898b", "bg42a2b846", "bg64ff2cbf", "bg3091677d",
          "bg4c2fd764", "bg23e48b91", "bge3186902", "bga4c47961", "bg31202a1e", "bg6f68d060", "bge4d42f9e",
          "bg404b1fb1", "bgb7a31572", "bgf9375071", "bgbf989fd1", "bg7f32556a", "bg7a4e3191", "bg5e1b388f",
          "bg4cdab899", "bg1ee7ee91", "bg8e145bfd", "bg3ff22c3c", "bgb519384d", "bga8ffaa02", "bg69d0a1ac",
          "bgceefa852", "bg187174e4", "bg08d3970f", "bg3349cd4a", "bg9e359275", "bg8e7c0300", "bgb8e4dd66",
          "bg87b7cc07", "bg80580692", "bgfa9cac2d", "bgccbd7913", "bg447223ce", "bg6a254b2d", "bgfaa99fc6",
          "bg002e898e", "bge3da3eb7", "bg04367106", "bga06283e7", "bge1749b55", "bg65d470eb", "bgc4ccefd4",
          "bg622b59a6", "bg5777e2da", "bg2bfc13ad", "bg601a0c86", "bg5328c35b", "bg24811486", "bgadd55c84",
          "bg26f1cc54", "bge3490bbe", "bgb5baac8a", "bg8ab6342e", "bg5bf68675", "bg20ddc953", "bg39098865",
          "bga926e7f2", "bg341d1096", "bg502b8047", "bg15d443c0", "bg212ad96e", "bg6525858c", "bg2cd931c4",
          "bg0e653981", "bge9177094", "bgd0333408", "bgf84fb994", "bg281ec4f4", "bg0b52c4d2", "bgdb1dc884",
          "bg127512b5", "bg30ab018a", "bg42987704", "bge8b8a56f", "bg8a9bb613", "bg5f0cb5fc", "bg1db7d585",
          "bg29e88a6c", "bgab873c60", "bg5465e7fc", "bg791234bf", "bgfd4fe5b7", "bg35b4d85d", "bg071011c7",
          "bg0bd783fc", "bgf97526fc", "bg258495ad", "bga2d81192", "bg993cd76a", "bg4411a39b", "bg2c36b142",
          "bg019db301", "bga2a651f6", "bge8b77f5e", "bgf1e3dbd8", "bgba14e34f", "bge0f2a1ce", "bg1ab8c0fd",
          "bgfc8f5d4b", "bg90379e42", "bg987ee0b0", "bg12424624", "bg26a9b54d", "bg79eb30c3", "bg75843632",
          "bgbbff99e8", "bg88f14950", "bg38090296", "bgfe1b9434", "bgcf9271b3", "bg758f871d", "bg52d8fce8",
          "bg0853a3bb", "bg1284c6a2", "bg6dd459a6", "bg256e7f9f", "bg85ff9fe4", "bg7f61aa6b", "bg1ae700bf",
          "bge133631b", "bg070811d1", "bge4c46acb", "bgfc504f88", "bgaf908f7c", "bg9ed8353b", "bg12a3468d",
          "bgd2a6437f", "bg5fe2a818", "bg54654377", "bg0c0139a9", "bg44badff1", "bga51b3b52", "bg39fa3e62",
          "bgf4b73ded", "bgeba6f4be", "bgc1ac87c4", "bg0d9e365b", "bgc4890c8b"
        ]
      };
    },
    mounted: function () {
      this.getquote();
    },
    methods: {
      getquote: function () {
        document.getElementById("main").style.opacity = "0";
        if (process.client) {
          var vm = this;
          axios.get(
            "https://spreadsheets.google.com/feeds/list/1xoDmLyNhhAyjq_5SOU5-OStrZz3i1vkLIvsUNT-mvCI/od6/public/basic?alt=json"
          ).then(function (response) {
            vm.totalQuotes = response.data.feed.entry.length;
            var num = Math.floor(Math.random() * vm.totalQuotes);
            vm.quote = response.data.feed.entry[num];
            vm.idQuote = "#" + num;
            var content = vm.quote.content.$t;
            vm.quote = content.slice(9, content.lenght);
            vm.bgColor = vm.o[(vm.o.length * Math.random()) | 0];
            setTimeout(function () {
              document.getElementById("main").style.opacity = "1";
            }, 2000);
          });
        }
      }
    }
  };
</script>