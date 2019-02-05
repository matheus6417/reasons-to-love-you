<template>
  <div>
    <div id="loader"> </div>
    <div id="main" class="main" :class="bgColor">
      <div class="logo semi-trans" v-on:click="getquote">
        <span v-html="totalQuotes"> </span><span> motivos para te amar</span>
      </div>
      <div class="mantra-screen">
        <div class="mantra current" style="display: block;">
          <div class="inner-wrapper">
            <div class="center-align">
             <div class="mantra-wrap">
                <blockquote id="quote" v-html="quote">
                </blockquote>
              </div>
              <div class="credit-wrap"><span class="line"></span><span class="cboldup" v-html="idQuote"> </span><span
                  class="cboldup"> Escrito por</span>
                <h3><span class="founder-name">Matheus Cezar</span><br><span class="founder-clink"><em>Para: Elizabeth
                      Freitas</em></span></h3>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
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
      }
    },
    mounted: function () {
      this.getquote()
    },
    methods: {
      getquote: function () {
        if (process.client) {
          var vm = this;
          document.getElementById("main").style.opacity = "0";
          axios.get(
            "https://spreadsheets.google.com/feeds/list/1xoDmLyNhhAyjq_5SOU5-OStrZz3i1vkLIvsUNT-mvCI/od6/public/basic?alt=json"
          ).then(function (response) {
            vm.totalQuotes = response.data.feed.entry.length;
            var num = Math.floor(Math.random() * response.data.feed.entry.length) + 0;
            vm.quote = response.data.feed.entry[num];
            vm.idQuote = "#" + num;
            var content = vm.quote.content.$t.replace(/<(?:.|\n)*?>/gm, "");
            content = content.slice(9, content.lenght);
            vm.quote = content;
            vm.bgColor = vm.o[vm.o.length * Math.random() | 0];
            console.log("Motivo #" + num + ': "' + content + '"');
            document.getElementById("main").style.opacity = "1";
          }).catch(function (error) {
            console.log(error);
          });
        }
      }
    }
  };

</script>
<style>
  #main {
    transition: all 1s;
  }

  .bg231a9d57 {
    background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)
  }

  .bgc26d1917 {
    background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)
  }

  .bg3bbd4fca {
    background-image: linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)
  }

  .bg0692f640 {
    background-image:
      linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)
  }

  .bgcc5b74c4 {
    background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)
  }

  .bg5a2d6289 {
    background-image:
      linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)
  }

  .bg0f0f448e {
    background-image:
      linear-gradient(120deg, #f6d365 0%, #fda085 100%)
  }

  .bgaf3ac0ca {
    background-image: linear-gradient(to top, #fbc2eb 0%,
      #a6c1ee 100%)
  }

  .bgc222d2bb {
    background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)
  }

  .bg45fe2c19 {
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)
  }

  .bgf36ca093 {
    background-image:
      linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)
  }

  .bgf294ce39 {
    background-image: linear-gradient(120deg, #84fab0 0%,
      #8fd3f4 100%)
  }

  .bg3ba57143 {
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)
  }

  .bg675d0497 {
    background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)
  }

  .bgdc9d8ddc {
    background-image:
      linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)
  }

  .bg7977d314 {
    background-image: linear-gradient(120deg, #e0c3fc 0%,
      #8ec5fc 100%)
  }

  .bg1b86f6a0 {
    background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%)
  }

  .bg41a75efc {
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)
  }

  .bg12a22a86 {
    background-image:
      linear-gradient(to right, #4facfe 0%, #00f2fe 100%)
  }

  .bgc81add8f {
    background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%)
  }

  .bg78009f12 {
    background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%)
  }

  .bg757b1e21 {
    background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%)
  }

  .bg1eafd85b {
    background-image:
      linear-gradient(to top, #a8edea 0%, #fed6e3 100%)
  }

  .bg89823765 {
    background-image: linear-gradient(to top, #5ee7df 0%,
      #b490ca 100%)
  }

  .bgd12e4f4b {
    background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%)
  }

  .bg83fe2bef {
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)
  }

  .bg8b512038 {
    background-image:
      radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)
  }

  .bgc12cb83d {
    background-image:
      linear-gradient(135deg, #667eea 0%, #764ba2 100%)
  }

  .bg91f2cf1e {
    background-image: linear-gradient(135deg, #fdfcfb 0%,
      #e2d1c3 100%)
  }

  .bgfc9f8f3d {
    background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)
  }

  .bg0e60e201 {
    background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%)
  }

  .bg4e94898b {
    background-image:
      linear-gradient(to top, #9890e3 0%, #b1f4cf 100%)
  }

  .bg42a2b846 {
    background-image: linear-gradient(to top, #ebc0fd 0%,
      #d9ded8 100%)
  }

  .bg64ff2cbf {
    background-image: linear-gradient(to top, #96fbc4 0%, #f9f586 100%)
  }

  .bg3091677d {
    background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%)
  }

  .bg4c2fd764 {
    background-image:
      linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%)
  }

  .bg23e48b91 {
    background-image: linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%)
  }

  .bge3186902 {
    background-image:
      linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)
  }

  .bga4c47961 {
    background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%)
  }

  .bg31202a1e {
    background-image:
      linear-gradient(to top, #37ecba 0%, #72afd3 100%)
  }

  .bg6f68d060 {
    background-image: linear-gradient(to top, #ebbba7 0%,
      #cfc7f8 100%)
  }

  .bge4d42f9e {
    background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)
  }

  .bg404b1fb1 {
    background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)
  }

  .bgb7a31572 {
    background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%)
  }

  .bgf9375071 {
    background-image:
      linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)
  }

  .bgbf989fd1 {
    background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)
  }

  .bg7f32556a {
    background-image: linear-gradient(to top, #feada6 0%,
      #f5efef 100%)
  }

  .bg7a4e3191 {
    background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)
  }

  .bg5e1b388f {
    background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%)
  }

  .bg4cdab899 {
    background-image:
      linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)
  }

  .bg1ee7ee91 {
    background-image: linear-gradient(to top, #c1dfc4 0%,
      #deecdd 100%)
  }

  .bg8e145bfd {
    background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%)
  }

  .bg3ff22c3c {
    background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%)
  }

  .bgb519384d {
    background-image:
      linear-gradient(to right, #74ebd5 0%, #9face6 100%)
  }

  .bga8ffaa02 {
    background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)
  }

  .bg69d0a1ac {
    background-image: linear-gradient(to top, #a3bded 0%, #6991c7 100%)
  }

  .bgceefa852 {
    background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%)
  }

  .bg187174e4 {
    background-image:
      linear-gradient(to top, #a7a6cb 0%, #8989ba 52%, #8989ba 100%)
  }

  .bg08d3970f {
    background-image: linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)
  }

  .bg3349cd4a {
    background-image: linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%,
      #7046aa 71%, #0c1db8 87%, #020f75 100%)
  }

  .bg9e359275 {
    background-image: linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%)
  }

  .bg8e7c0300 {
    background-image:
      linear-gradient(to top, #f43b47 0%, #453a94 100%)
  }

  .bgb8e4dd66 {
    background-image: linear-gradient(to top, #4fb576 0%,
      #44c489 30%, #28a9ae 46%, #28a2b7 59%, #4c7788 71%, #6c4f63 86%, #432c39 100%)
  }

  .bg87b7cc07 {
    background-image:
      linear-gradient(to top, #0250c5 0%, #d43f8d 100%)
  }

  .bg80580692 {
    background-image: linear-gradient(to top, #88d3ce 0%,
      #6e45e2 100%)
  }

  .bgfa9cac2d {
    background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)
  }

  .bgccbd7913 {
    background-image: linear-gradient(to top, #7028e4 0%, #e5b2ca 100%)
  }

  .bg447223ce {
    background-image:
      linear-gradient(15deg, #13547a 0%, #80d0c7 100%)
  }

  .bg6a254b2d {
    background-image: linear-gradient(to left, #BDBBBE 0%,
      #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0,
      0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%);
  }

  .bgfaa99fc6 {
    background-image: linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%,
      #9795d4 75%, #a2a1dc 87%, #b5aee4 100%)
  }

  .bg002e898e {
    background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%)
  }

  .bge3da3eb7 {
    background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)
  }

  .bg04367106 {
    background-image: linear-gradient(to right, #434343 0%, black 100%)
  }

  .bga06283e7 {
    background-image:
      linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)
  }

  .bge1749b55 {
    background-image:
      linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)
  }

  .bg65d470eb {
    background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)
  }

  .bgc4ccefd4 {
    background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%)
  }

  .bg622b59a6 {
    background-image: linear-gradient(to right, #868f96 0%, #596164 100%)
  }

  .bg5777e2da {
    background-image:
      linear-gradient(to top, #c79081 0%, #dfa579 100%)
  }

  .bg2bfc13ad {
    background-image: linear-gradient(45deg, #8baaaa 0%,
      #ae8b9c 100%)
  }

  .bg601a0c86 {
    background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%)
  }

  .bg5328c35b {
    background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)
  }

  .bg24811486 {
    background-image:
      linear-gradient(-20deg, #6e45e2 0%, #88d3ce 100%)
  }

  .bgadd55c84 {
    background-image: linear-gradient(-20deg, #d558c8 0%,
      #24d292 100%)
  }

  .bg26f1cc54 {
    background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%)
  }

  .bge3490bbe {
    background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)
  }

  .bgb5baac8a {
    background-image: linear-gradient(to top, #5f72bd 0%, #9b23ea 100%)
  }

  .bg8ab6342e {
    background-image:
      linear-gradient(to top, #09203f 0%, #537895 100%)
  }

  .bg5bf68675 {
    background-image: linear-gradient(-20deg, #ddd6f3 0%,
      #faaca8 100%, #faaca8 100%)
  }

  .bg20ddc953 {
    background-image: linear-gradient(-20deg, #dcb0ed 0%, #99c99c 100%)
  }

  .bg39098865 {
    background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)
  }

  .bga926e7f2 {
    background-image: linear-gradient(to top, #c71d6f 0%, #d09693 100%)
  }

  .bg341d1096 {
    background-image:
      linear-gradient(60deg, #96deda 0%, #50c9c3 100%)
  }

  .bg502b8047 {
    background-image: linear-gradient(to top, #f77062 0%,
      #fe5196 100%)
  }

  .bg15d443c0 {
    background-image: linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%)
  }

  .bg212ad96e {
    background-image: linear-gradient(to right, #a8caba 0%, #5d4157 100%)
  }

  .bg6525858c {
    background-image:
      linear-gradient(60deg, #29323c 0%, #485563 100%)
  }

  .bg2cd931c4 {
    background-image: linear-gradient(-60deg, #16a085 0%,
      #f4d03f 100%)
  }

  .bg0e653981 {
    background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%)
  }

  .bge9177094 {
    background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)
  }

  .bgd0333408 {
    background-image:
      linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)
  }

  .bgf84fb994 {
    background-image: linear-gradient(to top, #4481eb 0%,
      #04befe 100%)
  }

  .bg281ec4f4 {
    background-image: linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)
  }

  .bg0b52c4d2 {
    background-image: linear-gradient(45deg, #874da2 0%, #c43a30 100%)
  }

  .bgdb1dc884 {
    background-image:
      linear-gradient(to top, #4481eb 0%, #04befe 100%)
  }

  .bg127512b5 {
    background-image: linear-gradient(to top, #e8198b 0%,
      #c7eafd 100%)
  }

  .bg30ab018a {
    background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%),
      radial-gradient(91% 146%, rgba(255, 255, 255, 0.50) 47%, rgba(0, 0, 0, 0.50) 100%);
  }

  .bg42987704 {
    background-image:
      linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%)
  }

  .bge8b8a56f {
    background-image: linear-gradient(60deg, #64b3f4 0%,
      #c2e59c 100%)
  }

  .bg8a9bb613 {
    background-image: linear-gradient(to top, #3b41c5 0%, #a981bb 49%, #ffc8a9 100%)
  }

  .bg5f0cb5fc {
    background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%)
  }

  .bg1db7d585 {
    background-image:
      linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%)
  }

  .bg29e88a6c {
    background-image: linear-gradient(45deg, #ee9ca7 0%, #ffdde1 100%)
  }

  .bgab873c60 {
    background-image:
      linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%)
  }

  .bg5465e7fc {
    background-image: linear-gradient(to top, #209cff 0%, #68e0cf 100%)
  }

  .bg791234bf {
    background-image: linear-gradient(to top, #bdc2e8 0%, #bdc2e8 1%,
      #e6dee9 100%)
  }

  .bgfd4fe5b7 {
    background-image: linear-gradient(to top, #e6b980 0%, #eacda3 100%)
  }

  .bg35b4d85d {
    background-image: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)
  }

  .bg071011c7 {
    background-image:
      linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%)
  }

  .bg0bd783fc {
    background-image: linear-gradient(to top,
      #9be15d 0%, #00e3ae 100%)
  }

  .bgf97526fc {
    background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%)
  }

  .bg258495ad {
    background-image: linear-gradient(to right, #ffc3a0 0%, #ffafbd 100%)
  }

  .bga2d81192 {
    background-image:
      linear-gradient(to top, #cc208e 0%, #6713d2 100%)
  }

  .bg993cd76a {
    background-image: linear-gradient(to top, #b3ffab 0%,
      #12fff7 100%)
  }

  .bg4411a39b {
    background-image: linear-gradient(-45deg, #FFC796 0%, #FF6B95 100%)
  }

  .bg2c36b142 {
    background-image: linear-gradient(to right, #243949 0%, #517fa4 100%)
  }

  .bg019db301 {
    background-image:
      linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%)
  }

  .bga2a651f6 {
    background-image: linear-gradient(to top, #dfe9f3 0%,
      white 100%)
  }

  .bge8b77f5e {
    background-image: linear-gradient(to right, #00dbde 0%, #fc00ff 100%)
  }

  .bgf1e3dbd8 {
    background-image: linear-gradient(to right, #f9d423 0%, #ff4e50 100%)
  }

  .bgba14e34f {
    background-image:
      linear-gradient(to top, #50cc7f 0%, #f5d100 100%)
  }

  .bge0f2a1ce {
    background-image: linear-gradient(to right, #0acffe 0%, #495aff 100%)
  }

  .bg1ab8c0fd {
    background-image: linear-gradient(-20deg, #616161 0%, #9bc5c3 100%)
  }

  .bgfc8f5d4b {
    background-image: linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%)
  }

  .bg90379e42 {
    background-image: linear-gradient(to top, #df89b5 0%, #bfd9fe 100%)
  }

  .bg987ee0b0 {
    background-image:
      linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%)
  }

  .bg12424624 {
    background-image: linear-gradient(to right, #d7d2cc 0%, #304352 100%)
  }

  .bg26a9b54d {
    background-image: linear-gradient(to top, #e14fad 0%, #f9d423 100%)
  }

  .bg79eb30c3 {
    background-image: linear-gradient(to top, #b224ef 0%, #7579ff 100%)
  }

  .bg75843632 {
    background-image:
      linear-gradient(to right, #c1c161 0%, #c1c161 0%, #d4d4b1 100%)
  }

  .bgbbff99e8 {
    background-image: linear-gradient(to right, #ec77ab 0%, #7873f5 100%)
  }

  .bg88f14950 {
    background-image: linear-gradient(to top, #007adf 0%, #00ecbc 100%)
  }

  .bg38090296 {
    background-image: linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%)
  }

  .bgfe1b9434 {
    background-image:
      linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%)
  }

  .bgcf9271b3 {
    background-image:
      linear-gradient(-225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%)
  }

  .bg758f871d {
    background-image:
      linear-gradient(-225deg, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100%)
  }

  .bg52d8fce8 {
    background-image:
      linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)
  }

  .bg0853a3bb {
    background-image:
      linear-gradient(-225deg, #A8BFFF 0%, #884D80 100%)
  }

  .bg1284c6a2 {
    background-image: linear-gradient(-225deg, #5271C4 0%, #B19FFF 48%, #ECA1FE 100%)
  }

  .bg6dd459a6 {
    background-image: linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%,
      #FF719A 100%)
  }

  .bg256e7f9f {
    background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%)
  }

  .bg85ff9fe4 {
    background-image: linear-gradient(-225deg, #B6CEE8 0%, #F578DC 100%)
  }

  .bg7f61aa6b {
    background-image:
      linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)
  }

  .bg1ae700bf {
    background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)
  }

  .bge133631b {
    background-image: linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%)
  }

  .bg070811d1 {
    background-image: linear-gradient(-225deg, #CBBACC 0%, #2580B3 100%)
  }

  .bge4c46acb {
    background-image:
      linear-gradient(-225deg, #B7F8DB 0%, #50A7C2 100%)
  }

  .bgfc504f88 {
    background-image: linear-gradient(-225deg, #7085B6 0%, #87A7D9 50%, #DEF3F8 100%)
  }

  .bgaf908f7c {
    background-image: linear-gradient(-225deg, #77FFD2 0%, #6297DB 48%,
      #1EECFF 100%)
  }

  .bg9ed8353b {
    background-image: linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)
  }

  .bg12a3468d {
    background-image: linear-gradient(-225deg, #D4FFEC 0%, #57F2CC 48%, #4596FB 100%)
  }

  .bgd2a6437f {
    background-image: linear-gradient(-225deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 100%)
  }

  .bg5fe2a818 {
    background-image:
      linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%)
  }

  .bg54654377 {
    background-image:
      linear-gradient(-225deg, #65379B 0%, #886AEA 53%, #6457C6 100%)
  }

  .bg0c0139a9 {
    background-image:
      linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%)
  }

  .bg44badff1 {
    background-image:
      linear-gradient(-225deg, #7742B2 0%, #F180FF 52%, #FD8BD9 100%)
  }

  .bga51b3b52 {
    background-image:
      linear-gradient(-225deg, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%)
  }

  .bg39fa3e62 {
    background-image:
      linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%)
  }

  .bgf4b73ded {
    background-image:
      linear-gradient(-225deg, #FF057C 0%, #7C64D5 48%, #4CC3FF 100%)
  }

  .bgeba6f4be {
    background-image:
      linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%)
  }

  .bgc1ac87c4 {
    background-image:
      linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)
  }

  .bg0d9e365b {
    background-image:
      linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)
  }

  .bgc4890c8b {
    background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)
  }

  @font-face {
    font-family: circular_book;
    src:
      url(~assets/fonts/Circular/lineto-circular-book.eot);
    src: url(~assets/fonts/Circular/lineto-circular-book-1.eot) format("embedded-opentype"), url(~assets/fonts/Circular/lineto-circular-book.woff) format("woff"),
      url(~assets/fonts/Circular/lineto-circular-book.ttf) format("truetype"),
      url(~assets/fonts/Circular/lineto-circular-book.svg) format("svg");
    font-weight: 400;
    font-style: normal
  }

  @font-face {
    font-family: circular_medium;
    src: url(~assets/fonts/Circular/lineto-circular-medium.eot);
    src:
      url(~assets/fonts/Circular/lineto-circular-medium-1.eot) format("embedded-opentype"),
      url(~assets/fonts/Circular/lineto-circular-medium.woff) format("woff"),
      url(~assets/fonts/Circular/lineto-circular-medium.ttf) format("truetype"),
      url(~assets/fonts/Circular/lineto-circular-medium.svg) format("svg");
    font-weight: 400;
    font-style: normal
  }

  @font-face {
    font-family: circular_bold;
    src: url(~assets/fonts/Circular/lineto-circular-bold.eot);
    src:
      url(~assets/fonts/Circular/lineto-circular-bold-1.eot) format("embedded-opentype"),
      url(~assets/fonts/Circular/lineto-circular-bold.woff) format("woff"),
      url(~assets/fonts/Circular/lineto-circular-bold.ttf) format("truetype"),
      url(~assets/fonts/Circular/lineto-circular-bold.svg) format("svg");
    font-weight: 400;
    font-style: normal
  }

  @font-face {
    font-family: circular_black;
    src: url(~assets/fonts/Circular/lineto-circular-black.eot);
    src:
      url(~assets/fonts/Circular/lineto-circular-black-1.eot) format("embedded-opentype"),
      url(~assets/fonts/Circular/lineto-circular-black.woff) format("woff"),
      url(~assets/fonts/Circular/lineto-circular-black.ttf) format("truetype"),
      url(~assets/fonts/Circular/lineto-circular-black.svg) format("svg");
    font-weight: 400;
    font-style: normal
  }

  @font-face {
    font-family: icomoon;
    src: url(~assets/fonts/Icons/icomoon.eot);
    src: url(~assets/fonts/Icons/icomoon.eot) format("embedded-opentype"), url(~assets/fonts/Icons/icomoon.ttf) format("truetype"),
      url(~assets/fonts/Icons/icomoon.woff) format("woff"), url(~assets/fonts/Icons/icomoon.svg) format("svg");
    font-weight: 400;
    font-style: normal
  }

  [class*="icon-"],
  [class^=icon-] {
    font-family: icomoon !important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
  }

  a,
  abbr,
  acronym,
  address,
  applet,
  article,
  aside,
  audio,
  b,
  big,
  blockquote,
  body,
  canvas,
  caption,
  center,
  cite,
  code,
  dd,
  del,
  details,
  dfn,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  html,
  i,
  iframe,
  img,
  ins,
  kbd,
  label,
  legend,
  li,
  mark,
  menu,
  nav,
  object,
  ol,
  output,
  p,
  pre,
  q,
  ruby,
  s,
  samp,
  section,
  small,
  span,
  strike,
  strong,
  sub,
  summary,
  sup,
  table,
  tbody,
  td,
  tfoot,
  th,
  thead,
  time,
  tr,
  tt,
  u,
  ul,
  var,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline
  }

  html {
    line-height: 1
  }

  table {
    border-collapse: collapse;
    border-spacing: 0
  }

  caption,
  td,
  th {
    text-align: left;
    font-weight: 400;
    vertical-align: middle
  }

  blockquote,
  q {
    quotes: none
  }

  blockquote:after,
  blockquote:before,
  q:after,
  q:before {
    content: "";
    content: none
  }

  a img {
    border: none
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section,
  summary {
    display: block
  }

  [class*="icon-"],
  [class^=icon-] {
    display: inline-block
  }

  .icon-archives:before {
    content: "\e90b"
  }

  .icon-left-arrow:before {
    content: "\e90c"
  }

  .icon-right-arrow:before {
    content: "\e90d"
  }

  .icon-pinterest:before {
    content: "\e900"
  }

  .icon-email:before {
    content: "\e901"
  }

  .icon-facebook:before {
    content: "\e902"
  }

  .icon-googleplus:before {
    content: "\e903"
  }

  .icon-instagram:before {
    content: "\e904"
  }

  .icon-tumblr:before {
    content:
      "\e905"
  }

  .icon-twitter:before {
    content: "\e906"
  }

  .icon-paperplane:before {
    content: "\e907"
  }

  .icon-share:before {
    content: "\e909"
  }

  .icon-story:before {
    content: "\e90a"
  }

  .icon-plus:before {
    content: "\e90e"
  }

  .icon-logotype:before {
    content: "\e908"
  }

  .icon-close:before {
    content: "\e90f"
  }

  .full-logo {
    background-image:
      url(~assets/img/icons-s5cd628bebb.png);
    background-position: -92px -284px;
    background-repeat: no-repeat;
    overflow:
      hidden;
    display: inline-block;
    height: 72px;
    width: 115px
  }

  @media all and (max-width:767px) {
    .full-logo {
      background-position: -105px -448px;
      height: 57px;
      width: 90px
    }
  }

  @media all and (-webkit-min-device-pixel-ratio:2) and (max-width:767px),
  all and (min--moz-device-pixel-ratio:2) and (max-width:767px),
  all and (-o-min-device-pixel-ratio:2 / 1) and (max-width:767px),
  all and (min-device-pixel-ratio:2) and (max-width:767px),
  all and (min-resolution:192dpi) and (max-width:767px),
  all and (min-resolution:2dppx) and (max-width:767px) {
    .full-logo {
      background-image:
        url(~assets/img/icons2x-s667950b8d3.png) !important;
      background-size: 300px 480px !important;
      background-position:
        -105px -423px !important
    }
  }

  @media all and (-webkit-min-device-pixel-ratio:2) and (min-width:768px),
  all and (min--moz-device-pixel-ratio:2) and (min-width:768px),
  all and (-o-min-device-pixel-ratio:2 / 1) and (min-width:768px),
  all and (min-device-pixel-ratio:2) and (min-width:768px),
  all and (min-resolution:192dpi) and (min-width:768px),
  all and (min-resolution:2dppx) and (min-width:768px) {
    .full-logo {
      background-image:
        url(~assets/img/icons2x-s667950b8d3.png);
      background-size: 300px 480px;
      background-position: -93px -269px
    }
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0
  }

  *,
  :after,
  :before {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing:
      border-box
  }

  html {
    height: 100%
  }

  body.locked,
  html.locked {
    overflow: hidden
  }

  body {
    font-family: circular_book,
      Helvetica, sans-serif;
    font-weight: lighter;
    color: #000;
    font-size: 100%;
    height: 100%;
    -webkit-font-smoothing:
      antialiased
  }

  body.archives-open {
    height: auto
  }

  .hidden {
    display: none
  }

  .inactive {
    cursor: default !important
  }

  .mbg-color {
    background-color: #fff
  }

  .m-color {
    color: #000
  }

  dd,
  li,
  p {
    line-height: 1.5em
  }

  ::-moz-selection {
    background-color: #ddd
  }

  ::selection {
    background-color: #ddd
  }

  ::-webkit-input-placeholder {
    color: #ebebeb
  }

  ::-moz-placeholder {
    color: #ebebeb
  }

  :-ms-input-placeholder {
    color: #ebebeb
  }

  h1 {
    font-size: 4.375em;
    line-height:
      80px;
    font-family: circular_black, Helvetica, sans-serif;
    font-weight: lighter;
    color: #fff
  }

  @media all and (max-width:767px) {
    h1 {
      font-size: 2.5em;
      line-height: 50px
    }
  }

  h2 {
    font-size: 2.8125em;
    line-height: 56px;
    font-family: circular_bold, Helvetica, sans-serif;
    font-weight: lighter
  }

  @media all and (max-width:767px) {
    h2 {
      font-size: 1.875em;
      line-height: 38px
    }
  }

  h3 {
    font-size: 2.1875em;
    line-height: 45px;
    font-family: circular_book,
      Helvetica, sans-serif;
    font-weight: lighter
  }

  @media all and (max-width:767px) {
    h3 {
      font-size: 1.5em;
      line-height:
        30px
    }
  }

  h4 {
    font-size: 1.5625em;
    line-height: 35px;
    font-family: circular_book, Helvetica, sans-serif;
    font-weight:
      lighter
  }

  @media all and (max-width:767px) {
    h4 {
      font-size: 1.25em;
      line-height: 28px
    }
  }

  h5 {
    font-size: 1.25em;
    line-height: 30px
  }

  @media all and (max-width:767px) {
    h5 {
      font-size: 1em;
      line-height: 20px
    }
  }

  h6 {
    font-size: 1em;
    line-height: 24px;
    color: #666
  }

  @media all and (max-width:767px) {
    h6 {
      font-size: .875em;
      line-height: 18px
    }
  }

  p {
    font-size: 1.25em;
    line-height: 30px;
    color: #111
  }

  @media all and (max-width:767px) {
    p {
      font-size: 1em;
      line-height:
        22px
    }
  }

  .cboldup {
    font-family: circular_bold, Helvetica, sans-serif;
    font-weight: lighter;
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
    letter-spacing: .125em
  }

  @media all and (max-width:767px) {
    .cboldup {
      font-size: 12px;
      line-height: 12px
    }
  }

  a,
  a:link,
  a:visited {
    text-decoration: none;
    color: #000
  }

  a.line-link,
  a:link.line-link,
  a:visited.line-link {
    border-bottom: solid 2px #000;
    padding-bottom: 8px
  }

  a:active,
  a:hover {
    text-decoration: none;
    color: #fff
  }

  a:active.line-link,
  a:hover.line-link {
    border-color: #fff
  }

  a:active.semi-trans.active,
  a:active.semi-trans:hover,
  a:hover.semi-trans.active,
  a:hover.semi-trans:hover {
    color:
      #000
  }

  blockquote {
    font-size: 2.1875em;
    line-height: 45px;
    text-align: center;
    color: #fff;
    font-family:
      circular_black, Helvetica, sans-serif;
    font-weight: lighter
  }

  img,
  video {
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: block
  }

  ol,
  ul {
    list-style: none;
    padding: 0;
    margin: 0
  }

  .simple-btn {
    opacity: .6;
    display: inline-block;
    color: #000;
    border: 2px solid #000;
    height: 40px;
    line-height: 35px;
    padding: 0 20px;
    border-radius: 40px;
    cursor:
      pointer;
    background-color: transparent;
    -webkit-transition: all .25s cubic-bezier(.23, 1, .32, 1);
    transition: all .25s cubic-bezier(.23, 1, .32, 1)
  }

  @media all and (max-width:767px) {
    .simple-btn {
      height: 35px;
      line-height: 28px
    }
  }

  .simple-btn:link,
  .simple-btn:visited {
    color: #000;
    opacity: .6
  }

  .simple-btn:hover {
    opacity: 1
  }

  form {
    text-align:
      center
  }

  form label {
    opacity: .6;
    font-size: 1.5625em;
    line-height: 35px;
    position: absolute;
    top: 35px;
    left: 0;
    width: 100%;
    -webkit-transition: all .25s cubic-bezier(.23, 1, .32, 1);
    transition: all .25s cubic-bezier(.23, 1, .32,
      1)
  }

  @media all and (max-width:767px) {
    form label {
      font-size: 1.125em;
      line-height: 25px;
      top: 15px
    }
  }

  form input.filled~label,
  form input:focus~label {
    font-size: 14px;
    top: 0;
    opacity: 1
  }

  @media all and (max-width:767px) {

    form input.filled~label,
    form input:focus~label {
      font-size: 12px;
      top: -11px
    }
  }

  form input[type=text],
  form input[type=email] {
    opacity: .6;
    font-family: circular_book, Helvetica, sans-serif;
    font-weight: lighter;
    text-align:
      center;
    display: block;
    font-size: 1.5625em;
    line-height: 35px;
    width: 100%;
    border: 0;
    background-color: transparent;
    padding: 35px 0 15px;
    border-bottom: solid 2px #000
  }

  @media all and (max-width:767px) {

    form input[type=text],
    form input[type=email] {
      font-size: 1.125em;
      line-height: 25px;
      padding: 15px 0
    }
  }

  form input[type=submit] {
    opacity: .6;
    color: #000;
    border-color: #000
  }

  form input[type=submit]:hover {
    opacity: 1
  }

  iframe {
    width: 0;
    height: 0
  }

  .main {
    height: 100%;
    clear: both;
    overflow: auto;
    position: absolute;
  }
    #loader {
        background: white;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: fixed;
    }
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height:
      100%;
    background-color: #fff;
    color: #000;
    z-index: 9999;
    display: table;
    padding: 40px 30px;
    text-align: center
  }

  .loading-overlay .center-align {
    display: table-cell;
    vertical-align: middle
  }

  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .8);
    z-index: 6666;
    display: none
  }

  .close-btn {
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 20;
    cursor: pointer;
    opacity: .6
  }

  .close-btn:hover {
    opacity: 1
  }

  .close-btn .icon-close {
    font-size: 20px;
    line-height: 20px
  }

  .semi-trans {
    opacity: .3;
    -webkit-transition: all .25s cubic-bezier(.23, 1, .32, 1);
    transition: all .25s cubic-bezier(.23, 1, .32, 1)
  }

  .semi-trans.simple-btn {
    opacity: .3;
    border-color: #000;
    color: #000
  }

  .semi-trans.simple-btn.active,
  .semi-trans.simple-btn:focus,
  .semi-trans.simple-btn:hover {
    opacity: 1
  }

  .semi-trans:link,
  .semi-trans:visited {
    color: #000;
    opacity: .3
  }



  .mdate {
    display: inline-block;
    vertical-align:
      middle;
    opacity: .3
  }

  @media all and (max-width:767px) {
    .mdate {
      line-height: 15px;
      text-align: center
    }
  }

  .mdate span {
    vertical-align: middle;
    display: inline-block
  }

  @media all and (max-width:767px) {
    .mdate span {
      margin-bottom: 3px;
      letter-spacing: .02em
    }
  }

  @media all and (max-width:767px) {
    .mdate .month {
      font-size: .75em;
      line-height: 12px;
      margin-bottom: 0
    }
  }

  .mdate .day {
    font-size: 1.875em;
    letter-spacing: .05em;
    margin-bottom: 3px
  }

  @media all and (max-width:767px) {
    .mdate .day {
      font-size: .8125em;
      line-height: 12px;
      margin-bottom: 3px
    }
  }

  .mdate .year {
    font-size: .9375em
  }

  @media all and (max-width:767px) {
    .mdate .year {
      font-size: .8125em;
      letter-spacing: 0;
      display:
        block
    }
  }

  .header {
    z-index: 5555;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 115px;
    padding: 45px;
    overflow: hidden;
    clear: both
  }

  @media all and (min-width:768px) and (max-width:1023px) {
    .header {
      padding: 45px 30px
    }
  }

  @media all and (max-width:767px) {
    .header {
      padding: 15px 20px;
      line-height: 45px;
      height: 80px
    }
  }

  .header.archives-open .mdate,
  .header.archives-open .next-mantra,
  .header.archives-open .prev-mantra {
    opacity: .1
  }

  .header.archives-open .icon-archives:before {
    content: "\e90f"
  }

  .header .left {
    float: left
  }

  .header .right {
    float:
      right
  }

  .header .mdate {
    display: inline-block;
    vertical-align: middle;
    opacity: .3
  }

  @media all and (max-width:767px) {
    .header .mdate .year {
      display: none
    }
  }

  .header .next-mantra,
  .header .prev-mantra {
    font-size: 1.1875em;
    display:
      inline-block;
    vertical-align: middle;
    cursor: pointer
  }

  @media all and (max-width:767px) {

    .header .next-mantra,
    .header .prev-mantra {
      padding: 15px 7px
    }
  }

  .header .next-mantra.inactive,
  .header .prev-mantra.inactive {
    opacity: .1
  }

  .header .prev-mantra {
    margin-right: 20px
  }

  @media all and (max-width:767px) {
    .header .prev-mantra {
      margin-right: 0
    }
  }

  .header .next-mantra {
    margin-left: 20px
  }

  @media all and (max-width:767px) {
    .header .next-mantra {
      margin-left: 0
    }
  }

  .header .archives-btn {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer
  }

  .header .archives-btn span {
    display: inline-block;
    vertical-align: middle
  }

  .header .archives-btn .cboldup {
    margin-right: 8px
  }

  @media all and (max-width:767px) {
    .header .archives-btn .cboldup {
      display: none
    }
  }

  .header .archives-btn .icon-archives {
    font-size: 20px
  }

  .header .archives-btn.inactive {
    opacity: .1
  }

  .header .chrome-ext {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px
  }

  @media all and (max-width:767px) {
    .header .chrome-ext {
      display: none
    }
  }

  .logo {
          opacity: 0.22;
       text-align: center;
    z-index: 8888;
    position: fixed;
    top: 25px;
    left: 50%;
    width: 140px;
    margin-left: -70px;
    cursor: pointer;
    transition: all .35s cubic-bezier(.23,1,.32,1);
    font-family: circular_black,Helvetica,sans-serif;
    font-weight: lighter;
    color: #fff;
    text-align: left;
    width: 100%;
    font-size: 6.2rem;
    line-height: 1.05em;
    -webkit-filter: invert(0) grayscale(1) drop-shadow(.01em .01em 2em #000);
    filter: invert(0) grayscale(1) drop-shadow(.01em .01em 2em #000);
}

  @media all and (max-width:767px) {
    .logo {
      top: 15px
    }
  }

  .logo.about-open {
    opacity: .6
  }


  @media all and (max-width:767px) {
    .logo.about-open {
      font-size: 40px;
      line-height: 30px
    }
  }

  .logo.about-open .full-logo {
    background-image: url(~assets/img/icons-s5cd628bebb.png);
    background-position: -80px -186px;
    background-repeat: no-repeat;
    overflow: hidden;
    display: inline-block;
    height: 88px;
    width: 140px
  }

  @media all and (max-width:767px) {
    .logo.about-open .full-logo {
      background-position: -92px -366px;
      height: 72px;
      width: 115px
    }
  }

  @media all and (-webkit-min-device-pixel-ratio:2) and (max-width:767px),
  all and (min--moz-device-pixel-ratio:2) and (max-width:767px),
  all and (-o-min-device-pixel-ratio:2 / 1) and (max-width:767px),
  all and (min-device-pixel-ratio:2) and (max-width:767px),
  all and (min-resolution:192dpi) and (max-width:767px),
  all and (min-resolution:2dppx) and (max-width:767px) {
    .logo.about-open .full-logo {
      background-image:
        url(~assets/img/icons2x-s667950b8d3.png) !important;
      background-size: 300px 480px !important;
      background-position:
        -93px -346px !important
    }
  }

  @media all and (-webkit-min-device-pixel-ratio:2) and (min-width:768px),
  all and (min--moz-device-pixel-ratio:2) and (min-width:768px),
  all and (-o-min-device-pixel-ratio:2 / 1) and (min-width:768px),
  all and (min-device-pixel-ratio:2) and (min-width:768px),
  all and (min-resolution:192dpi) and (min-width:768px),
  all and (min-resolution:2dppx) and (min-width:768px) {
    .logo.about-open .full-logo {
      background-image:
        url(~assets/img/icons2x-s667950b8d3.png);
      background-size: 300px 480px;
      background-position: -80px -80px
    }
  }

  .footer {
    z-index: 5555;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 40px 45px;
    overflow: hidden;
    clear: both
  }

  @media all and (min-width:768px) and (max-width:1023px) {
    .footer {
      padding: 40px 30px
    }
  }

  @media all and (max-width:767px) {
    .footer {
      position: static;
      padding: 20px;
      background-color: rgba(0, 0, 0, .1)
    }
  }

  .footer.archives-open {
    display: none
  }

  .footer.archives-open .left,
  .footer.archives-open .right {
    opacity: 0
  }

  .footer .left {
    float: left
  }

  @media all and (max-width:767px) {
    .footer .left {
      float: none;
      text-align: center
    }
  }

  .footer .right {
    float: right
  }

  @media all and (max-width:767px) {
    .footer .right {
      float: none;
      text-align: center
    }
  }

  .footer .right a,
  .footer .right span {
    line-height: 40px;
    margin-left: 12px;
    cursor: pointer
  }

  @media all and (max-width:767px) {

    .footer .right a,
    .footer .right span {
      margin: 0 6px
    }
  }

  .footer .simple-btn {
    margin-right: 15px
  }

  @media all and (min-width:768px) and (max-width:1023px) {
    .footer .simple-btn {
      margin-right: 10px
    }
  }

  @media all and (max-width:767px) {
    .footer .simple-btn {
      margin-right: 0;
      margin-bottom: 10px
    }
  }

  .footer .social-follow {
    display:
      inline-block;
    vertical-align: middle
  }

  .footer .social-follow a,
  .footer .social-follow span {
    font-size: 14px
  }

  .footer .social-follow a span {
    margin: 0
  }

  .footer .social-follow .more-social {
    display: none
  }

  .footer .social-follow .more-social.show {
    display: inline-block
  }

  @media all and (max-width:767px) {
    .footer .social-follow .more-social {
      display: inline-block
    }
  }

  .footer .chrome-ext {
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px
  }

  @media all and (max-width:950px) {
    .footer .chrome-ext {
      display: none
    }
  }

  .mantra-screen {
    height: 100%;
    width: 100%;
    background: url(~assets/img/quotes.png) -50px center no-repeat;
    position: relative;
    overflow: hidden
  }

  @media all and (max-width:767px) {
    .mantra-screen {
      background-size: 70%;
      background-position: 105% 150px
    }
  }

  .mantra-screen .inner-wrapper {
    display: table;
    height: 100%;
    width: 100%
  }

  @media all and (max-width:767px) {
    .mantra-screen .inner-wrapper {
      display: block
    }
  }

  .mantra-screen .center-align {
    display: table-cell;
    vertical-align: middle;
  }

  @media all and (max-width:767px) {
    .mantra-screen .center-align {
      display: block
    }
  }

  .mantra-screen .mantra {
    padding: 115px 45px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto
  }

  @media all and (min-width:768px) and (max-width:1023px) {
    .mantra-screen .mantra {
      padding: 115px 30px
    }
  }

  @media all and (max-width:767px) {
    .mantra-screen .mantra {
      padding: 150px 35px 50px;
      display: none
    }
  }

  @media all and (max-width:767px) {
    .mantra-screen .mantra.current {
      position: relative;
      display: block
    }
  }

  .mantra-screen .mantra.current .credit-wrap {
    position: fixed
  }

  @media all and (max-width:767px) {
    .mantra-screen .mantra.current .credit-wrap {
      position: relative
    }
  }

  .mantra-screen .mantra .mantra-wrap {
    position: relative;
    left: 50%;
    margin-left:
      -65px;
    width: 55%;
    max-width: 730px;
    padding-right: 50px
  }

  @media all and (max-width:767px) {
    .mantra-screen .mantra .mantra-wrap {
      position: static;
      margin-left: 0;
      padding-right: 0;
      width: 100%
    }
  }

  .mantra-screen .mantra .mantra-wrap blockquote,
  .mantra-screen .mantra .mantra-wrap p {
    font-family: circular_black, Helvetica, sans-serif;
    font-weight:
      lighter;
    color: #fff;
    text-align: left;
    width: 100%;
    font-size: 4.375em;
    line-height: 1.05em;
    filter: invert(0) grayscale(1) drop-shadow(0.01em .01em 2em black);
  }

  @media all and (max-width:767px) {

    .mantra-screen .mantra .mantra-wrap blockquote,
    .mantra-screen .mantra .mantra-wrap p {
      font-size: 2.5em
    }
  }

  .mantra-screen .mantra .credit-wrap {
    position: absolute;
    width: 50%;
    left: 0;
    top: 50%;
    margin-top: -44px;
    padding-right: 180px;
    text-align:
      right;
    opacity: 0.74;
    filter: invert(0) grayscale(1) drop-shadow(0.01em .01em 3em black);
  }

  @media all and (max-width:767px) {
    .mantra-screen .mantra .credit-wrap {
      width: 100%;
      position: relative;
      margin-top: 30px;
      padding-right: 0;
      padding-left: 50px;
      text-align: left
    }
  }

  .mantra-screen .mantra .credit-wrap a:link,
  .mantra-screen .mantra .credit-wrap a:visited,
  .mantra-screen .mantra .credit-wrap h3,
  .mantra-screen .mantra .credit-wrap span {
    color: #fff;
    line-height: 28px
  }

  @media all and (max-width:767px) {

    .mantra-screen .mantra .credit-wrap a:link,
    .mantra-screen .mantra .credit-wrap a:visited,
    .mantra-screen .mantra .credit-wrap h3,
    .mantra-screen .mantra .credit-wrap span {
      line-height: 22px
    }
  }

  .mantra-screen .mantra .credit-wrap .cboldup {
    font-family: circular_black,
      Helvetica, sans-serif;
    font-weight: lighter
  }

  .mantra-screen .mantra .credit-wrap h3 {
    font-size: 1.25em;
    line-height:
      28px
  }

  @media all and (max-width:767px) {
    .mantra-screen .mantra .credit-wrap h3 {
      font-size: 1em;
      line-height: 22px
    }
  }

  .mantra-screen .mantra .credit-wrap h3 a:link,
  .mantra-screen .mantra .credit-wrap h3 a:visited {
    padding-bottom: 4px
  }

  .mantra-screen .mantra .credit-wrap h3 a:hover {
    color: #fff;
    border-bottom: solid 2px #fff
  }

  .mantra-screen .mantra .credit-wrap .line {
    width: 60px;
    height: 2px;
    background-color: #fff;
    position: absolute;
    right: 100px;
    top: 42px
  }

  @media all and (max-width:767px) {
    .mantra-screen .mantra .credit-wrap .line {
      width: 30px;
      top: 30px;
      left: 0;
      right:
        auto
    }
  }

  .mantra-screen .tools-wrap {
    position: fixed;
    left: 45px;
    top: 50%;
    margin-top: -37px;
    z-index: 9955
  }

  @media all and (min-width:768px) and (max-width:1023px) {
    .mantra-screen .tools-wrap {
      left: 30px
    }
  }

  @media all and (max-width:767px) {
    .mantra-screen .tools-wrap {
      position: static;
      margin-top: 0;
      padding: 0 35px 50px
    }
  }

  .mantra-screen .tools-wrap .share-btn,
  .mantra-screen .tools-wrap .story-btn {
    color: #000;
    opacity: .75;
    padding: 10px 0;
    display: block;
    cursor: pointer;
    position: relative;
    z-index: 5
  }

  @media all and (max-width:767px) {

    .mantra-screen .tools-wrap .share-btn,
    .mantra-screen .tools-wrap .story-btn {
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px
    }
  }

  .mantra-screen .tools-wrap .share-btn [class*="icon-"],
  .mantra-screen .tools-wrap .share-btn [class^=icon-],
  .mantra-screen .tools-wrap .story-btn [class*="icon-"],
  .mantra-screen .tools-wrap .story-btn [class^=icon-] {
    width: 18px
  }

  .mantra-screen .tools-wrap .share-btn .icon-share,
  .mantra-screen .tools-wrap .story-btn .icon-share {
    font-size: 20px
  }

  .mantra-screen .tools-wrap .share-btn:hover,
  .mantra-screen .tools-wrap .story-btn:hover {
    color: #000;
    opacity: 1
  }

  .mantra-screen .tools-wrap .share-btn:hover .cboldup,
  .mantra-screen .tools-wrap .story-btn:hover .cboldup {
    display: inline-block
  }

  .mantra-screen .tools-wrap .share-btn:hover.active .cboldup,
  .mantra-screen .tools-wrap .share-btn:hover.inactive .cboldup,
  .mantra-screen .tools-wrap .story-btn:hover.active .cboldup,
  .mantra-screen .tools-wrap .story-btn:hover.inactive .cboldup {
    display: none
  }

  @media all and (max-width:767px) {

    .mantra-screen .tools-wrap .share-btn:hover.active .cboldup,
    .mantra-screen .tools-wrap .share-btn:hover.inactive .cboldup,
    .mantra-screen .tools-wrap .story-btn:hover.active .cboldup,
    .mantra-screen .tools-wrap .story-btn:hover.inactive .cboldup {
      display: inline-block
    }
  }

  .mantra-screen .tools-wrap .share-btn.active,
  .mantra-screen .tools-wrap .story-btn.active {
    color: #000;
    opacity: 1
  }

  .mantra-screen .tools-wrap .share-btn.active .cboldup,
  .mantra-screen .tools-wrap .story-btn.active .cboldup {
    display: none
  }

  @media all and (max-width:767px) {

    .mantra-screen .tools-wrap .share-btn.active .cboldup,
    .mantra-screen .tools-wrap .story-btn.active .cboldup {
      display: inline-block
    }
  }

  .mantra-screen .tools-wrap .share-btn.inactive,
  .mantra-screen .tools-wrap .story-btn.inactive {
    color: #000;
    opacity: .15
  }

  .mantra-screen .tools-wrap .share-btn.inactive .cboldup,
  .mantra-screen .tools-wrap .story-btn.inactive .cboldup {
    display: none
  }

  @media all and (max-width:767px) {

    .mantra-screen .tools-wrap .share-btn.inactive .cboldup,
    .mantra-screen .tools-wrap .story-btn.inactive .cboldup {
      display: inline-block
    }
  }

  .mantra-screen .tools-wrap .share-btn span,
  .mantra-screen .tools-wrap .story-btn span {
    vertical-align: middle;
    margin-right: 8px
  }

  .mantra-screen .tools-wrap .share-btn span.cboldup,
  .mantra-screen .tools-wrap .story-btn span.cboldup {
    font-size: 12px
  }

  @media all and (min-width:768px) and (max-width:1023px) {

    .mantra-screen .tools-wrap .share-btn span.cboldup,
    .mantra-screen .tools-wrap .story-btn span.cboldup {
      display: none
    }
  }

  @media all and (max-width:767px) {

    .mantra-screen .tools-wrap .share-btn span.cboldup,
    .mantra-screen .tools-wrap .story-btn span.cboldup {
      display: inline-block
    }
  }

  .mantra-screen .tools-wrap .share-btn span.cboldup.show,
  .mantra-screen .tools-wrap .story-btn span.cboldup.show {
    display: inline-block
  }

  .mantra-screen .tools-wrap .social-share {
    height: 160px;
    width: 80px;
    position: absolute;
    top: -40px;
    z-index: 1
  }

  @media all and (max-width:767px) {
    .mantra-screen .tools-wrap .social-share {
      position: static;
      display: inline-block;
      vertical-align:
        middle;
      width: auto;
      height: auto;
      margin-right: 15px
    }
  }

  .mantra-screen .tools-wrap .social-share a:link,
  .mantra-screen .tools-wrap .social-share a:visited {
    position: absolute;
    display: block;
    width: 32px;
    height: 32px;
    line-height: 32px;
    border: 2px solid #000;
    border-radius: 50px;
    font-size: 12px;
    text-align: center;
    color: #000;
    -webkit-transition: all .3s cubic-bezier(.23, 1, .32, 1);
    transition: all .3s cubic-bezier(.23, 1, .32, 1)
  }

  @media all and (max-width:767px) {

    .mantra-screen .tools-wrap .social-share a:link,
    .mantra-screen .tools-wrap .social-share a:visited {
      position: static;
      display: inline-block;
      vertical-align: middle;
      margin: 0 2px;
      opacity: 1 !important
    }
  }

  .mantra-screen .tools-wrap .social-share a:link.s1,
  .mantra-screen .tools-wrap .social-share a:visited.s1 {
    top: 0;
    left: 0;
    opacity: 0
  }

  .mantra-screen .tools-wrap .social-share a:link.s1.animate,
  .mantra-screen .tools-wrap .social-share a:visited.s1.animate {
    opacity: 1
  }

  .mantra-screen .tools-wrap .social-share a:link.s2,
  .mantra-screen .tools-wrap .social-share a:visited.s2 {
    top: 0;
    left: 0;
    opacity: 0
  }

  .mantra-screen .tools-wrap .social-share a:link.s2.animate,
  .mantra-screen .tools-wrap .social-share a:visited.s2.animate {
    top: 25px;
    left: 30px;
    opacity: 1
  }

  .mantra-screen .tools-wrap .social-share a:link.s3,
  .mantra-screen .tools-wrap .social-share a:visited.s3 {
    top: 25px;
    left: 30px;
    opacity: 0
  }

  .mantra-screen .tools-wrap .social-share a:link.s3.animate,
  .mantra-screen .tools-wrap .social-share a:visited.s3.animate {
    top: 61px;
    left: 45px;
    opacity: 1
  }

  .mantra-screen .tools-wrap .social-share a:link.s4,
  .mantra-screen .tools-wrap .social-share a:visited.s4 {
    top: 61px;
    left: 45px;
    opacity: 0
  }

  .mantra-screen .tools-wrap .social-share a:link.s4.animate,
  .mantra-screen .tools-wrap .social-share a:visited.s4.animate {
    top: 97px;
    left: 30px;
    opacity: 1
  }

  .mantra-screen .tools-wrap .social-share a:link.s5,
  .mantra-screen .tools-wrap .social-share a:visited.s5 {
    top: 97px;
    left: 30px;
    opacity: 0
  }

  .mantra-screen .tools-wrap .social-share a:link.s5.animate,
  .mantra-screen .tools-wrap .social-share a:visited.s5.animate {
    top: 125px;
    left: 0;
    opacity: 1
  }

  .mantra-screen .tools-wrap .social-share a:hover {
    background-color: #000
  }

  .story-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width:
      100%;
    height: 100%;
    z-index: 9988;
    display: none
  }

  .story-overlay .story {
    width: 100%;
    height: 100%;
    max-width: 800px;
    padding: 20px 90px 40px 110px;
    text-align: left;
    position: relative;
    display: table;
    overflow: auto;
    -webkit-overflow-scrolling: touch
  }

  @media all and (max-width:767px) {
    .story-overlay .story {
      padding: 60px 30px;
      display: block
    }
  }

  @media all and (max-height:550px) {
    .story-overlay .story {
      display: block;
      padding: 150px 90px 150px 110px;
      overflow: auto
    }
  }

  .story-overlay .story h3 {
    color: #fff;
    font-size: 1.75em;
    line-height: 35px;
    font-family: circular_medium, Helvetica, sans-serif;
    font-weight: lighter;
    margin-bottom: 35px
  }

  @media all and (max-width:767px) {
    .story-overlay .story h3 {
      font-size: 1.375em;
      line-height: 28px
    }
  }

  .story-overlay .story h4 {
    margin-bottom: 15px;
    opacity: .6;
    font-size: 100%;
    line-height: 1.4em
  }

  @media all and (max-width:767px) {
    .story-overlay .story h4 {
      font-size: 14px
    }
  }

  .story-overlay .story p {
    font-size: 1.5625em;
    line-height: 35px;
    color:
      #fff;
    margin-bottom: 35px
  }

  @media all and (max-width:767px) {
    .story-overlay .story p {
      font-size: 1.25em;
      line-height: 28px
    }
  }

  .story-overlay .story .center-align {
    display: table-cell;
    vertical-align: middle
  }

  @media all and (max-height:550px) {
    .story-overlay .story .center-align {
      display: block;
      height: auto
    }
  }

  @media all and (max-width:767px) {
    .story-overlay .story .center-align {
      display: block;
      height: auto
    }
  }

  .story-overlay .story .company-link {
    padding-top: 5px
  }

  .story-overlay .story .company-link .cboldup,
  .story-overlay .story .company-link a:link,
  .story-overlay .story .company-link a:visited {
    opacity: .6
  }

  .story-overlay .story .company-link a:hover {
    opacity: 1;
    color: #000;
    border-color: #000
  }

  .archives-screen {
    display: none;
    overflow: auto;
    -webkit-overflow-scrolling: touch
  }

  .archives-screen .mantra {
    opacity: 0;
    margin-top: 100px;
    position: relative;
    float: left;
    width: 33.3%;
    height: 450px;
    padding: 30px;
    background-color: #000;
    cursor: pointer;
    border-style: solid;
    border-width: 5px;
    -webkit-transition: all .3s cubic-bezier(.23, 1, .32, 1);
    transition: all .3s cubic-bezier(.23, 1,
      .32, 1)
  }

  @media all and (min-width:1600px) {
    .archives-screen .mantra {
      width: 25%
    }
  }

  @media all and (min-width:768px) and (max-width:1023px) {
    .archives-screen .mantra {
      width: 50%
    }
  }

  @media all and (max-width:767px) {
    .archives-screen .mantra {
      float: none;
      width: 100%;
      height: auto;
      min-height: 300px;
      padding: 45px 20px
    }
  }

  .archives-screen .mantra.in-view {
    margin-top: 0;
    opacity: 1
  }

  .archives-screen .mantra:hover {
    border-color: rgba(0,
      0, 0, .1) !important
  }

  .archives-screen .mantra .inner-wrapper {
    width: 100%;
    height: 100%;
    display: table
  }

  @media all and (max-width:767px) {
    .archives-screen .mantra .inner-wrapper {
      height: auto;
      min-height: 300px
    }
  }

  .archives-screen .mantra .center-align {
    display: table-cell;
    vertical-align: middle
  }

  .archives-screen .mantra blockquote {
    text-align:
      left;
    font-size: 2.5em;
    line-height: 1.2em
  }

  @media all and (max-width:767px) {
    .archives-screen .mantra blockquote {
      font-size: 2.1875em
    }
  }

  .archives-screen .mantra .mdate {
    position: absolute;
    bottom: 30px;
    right: 30px;
    text-align:
      right;
    width: 100%
  }

  @media all and (max-width:767px) {
    .archives-screen .mantra .mdate {
      bottom: 20px;
      right: 20px
    }
  }

  .archives-screen .mantra .mdate .cboldup {
    font-size: .75em
  }

  @media all and (max-width:767px) {
    .archives-screen .mantra .mdate .cboldup {
      display: inline-block;
      vertical-align: middle
    }
  }

  .archives-screen .mantra .mdate .day {
    font-size: 1.25em
  }

  .archives-screen .mantra .mcredit {
    position: absolute;
    bottom: 30px;
    left: 30px
  }

  @media all and (max-width:767px) {
    .archives-screen .mantra .mcredit {
      bottom: 20px;
      left: 20px
    }
  }

  .archives-screen .mantra .mcredit .line {
    width: 20px;
    height: 2px;
    background-color: #fff;
    display: inline-block;
    vertical-align: middle;
    margin-right:
      8px
  }

  .archives-screen .mantra .mcredit h3 {
    font-size: 1em;
    line-height: 18px;
    display: inline-block;
    vertical-align:
      middle;
    color: #fff
  }

  .about-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 7777;
    display: none
  }

  .about-overlay.open .about .inner-wrapper {
    opacity: 1
  }

  .about-overlay .about {
    width: 0;
    height:
      100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 95px;
    text-align: center;
    position: relative
  }

  @media all and (max-width:767px) {
    .about-overlay .about {
      padding: 40px 30px
    }
  }

  @media all and (max-height:550px) {
    .about-overlay .about {
      display: block;
      padding-top: 150px;
      overflow: auto;
      -webkit-overflow-scrolling: touch
    }
  }

  .about-overlay .about .inner-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    display: table;
    opacity: 0;
    -webkit-transition:
      all .35s cubic-bezier(.23, 1, .32, 1);
    transition: all .35s cubic-bezier(.23, 1, .32, 1)
  }

  .about-overlay .about h2 {
    color: #fff;
    font-family: circular_book, Helvetica, sans-serif;
    font-weight: lighter
  }

  .about-overlay .about .simple-btn {
    margin-top: 50px
  }

  .about-overlay .about small {
    display: block;
    margin-bottom: 15px;
    opacity: .6
  }

  .about-overlay .about .line-link {
    opacity: .6
  }

  .about-overlay .about .line-link:hover {
    opacity: 1
  }

  .about-overlay .about .center-align {
    display: table-cell;
    vertical-align: middle
  }

  @media all and (max-height:550px) {
    .about-overlay .about .center-align {
      display: block
    }
  }

  .about-overlay .about .btm {
    position: absolute;
    bottom: 0;
    left: 0;
    width:
      100%
  }

  @media all and (max-height:550px) {
    .about-overlay .about .btm {
      position: static;
      margin-top: 80px
    }
  }

  .subscribe-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    display: none
  }

  .subscribe-overlay.open .subscribe .inner-wrapper {
    opacity: 1
  }

  .subscribe-overlay .subscribe {
    width: 0;
    height:
      100%;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    overflow: auto;
    -webkit-overflow-scrolling: touch
  }

  .subscribe-overlay .subscribe .inner-wrapper {
    width: 100%;
    height: 100%;
    position:
      relative;
    opacity: 0;
    -webkit-transition: all .35s cubic-bezier(.23, 1, .32, 1);
    transition: all .35s cubic-bezier(.23,
      1, .32, 1)
  }

  .subscribe-overlay .subscribe h3 {
    color: #fff;
    max-width: 400px;
    margin: 0 auto 25px;
    font-family:
      circular_medium, Helvetica, sans-serif;
    font-weight: lighter
  }

  .subscribe-overlay .subscribe h4 {
    max-width: 400px;
    margin: 0 auto 30px;
    color: #000;
    font-size: 1.375em;
    line-height: 30px;
    opacity: .6
  }

  @media all and (max-width:767px) {
    .subscribe-overlay .subscribe h4 {
      font-size: 1.125em;
      line-height: 26px
    }
  }

  .subscribe-overlay .subscribe .simple-btn {
    margin-top: 25px
  }

  .subscribe-overlay .subscribe .center-align {
    display: table-cell;
    vertical-align:
      middle
  }

  .subscribe-overlay .subscribe .top {
    width: 100%;
    height: 60%;
    padding: 50px 90px;
    display: table
  }

  @media all and (max-width:767px) {
    .subscribe-overlay .subscribe .top {
      padding: 50px 30px 30px
    }
  }

  .subscribe-overlay .subscribe .btm {
    width: 100%;
    height: 40%;
    padding: 50px 90px;
    background-color: rgba(0, 0, 0, .05);
    display: table
  }

  @media all and (max-width:767px) {
    .subscribe-overlay .subscribe .btm {
      padding: 30px
    }
  }

  .subscribe-overlay .subscribe .social-follow a:link,
  .subscribe-overlay .subscribe .social-follow a:visited {
    opacity: .6;
    color: #000;
    border: 2px solid #000;
    display: inline-block;
    vertical-align: middle;
    width: 50px;
    height: 50px;
    line-height: 49px;
    border-radius:
      100px;
    margin: 0 3px;
    -webkit-transition: all .25s cubic-bezier(.23, 1, .32, 1);
    transition: all .25s cubic-bezier(.23,
      1, .32, 1)
  }

  @media all and (max-width:767px) {

    .subscribe-overlay .subscribe .social-follow a:link,
    .subscribe-overlay .subscribe .social-follow a:visited {
      width: 40px;
      height: 40px;
      line-height: 39px
    }
  }

  .subscribe-overlay .subscribe .social-follow a:link.pinterest,
  .subscribe-overlay .subscribe .social-follow a:visited.pinterest {
    line-height: 57px
  }

  @media all and (max-width:767px) {

    .subscribe-overlay .subscribe .social-follow a:link.pinterest,
    .subscribe-overlay .subscribe .social-follow a:visited.pinterest {
      line-height: 46px
    }
  }

  .subscribe-overlay .subscribe .social-follow a:hover {
    opacity: 1;
    background-color: #000
  }

  .subscribe-overlay .subscribe .social-follow .icon-pinterest {
    font-size: 28px
  }

  @media all and (max-width:767px) {
    .subscribe-overlay .subscribe .social-follow .icon-pinterest {
      font-size: 25px
    }
  }

  .subscribe-overlay .subscribe .form-wrapper {
    max-width: 450px;
    margin: 0 auto
  }

  .subscribe-overlay .subscribe .form-wrapper .mc-field-group {
    position: relative
  }

  .subscribe-overlay .subscribe .form-wrapper #mc_embed_signup input.mce_inline_error {
    border-color: #444
  }

  .subscribe-overlay .subscribe .form-wrapper #mc_embed_signup div.mce_inline_error,
  .subscribe-overlay .subscribe .form-wrapper #mce-success-response {
    margin: 0;
    padding: 13px 10px 5px;
    background-color: transparent;
    color: #000;
    font-size: .8125em;
    line-height: 16px;
    font-family:
      circular_book, Helvetica, sans-serif;
    font-weight: lighter
  }

</style>
