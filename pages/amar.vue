<template>
  <div>
    <div id="loader">
      <div class="wrapper">
        <div class="valentine popup-web slide1 slide2 slide3 slide4">
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
              <img src="~assets/img/face.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="main" class="main" :class="bgColor" v-on:click="getquote">
      <div class="logo semi-trans">
        <span v-html="totalQuotes"></span>
        <span>motivos para te amar</span>
      </div>
      <div class="mantra-screen">
        <div class="mantra current" style="display: block;">
          <div class="inner-wrapper">
            <div class="center-align">
              <div class="mantra-wrap">
                <blockquote id="quote" v-html="quote"></blockquote>
              </div>
              <div class="credit-wrap">
                <span class="line"></span>
                <span class="cboldup" v-html="idQuote"></span>
                <span class="cboldup">
                  Escrito
                  por
                </span>
                <h3>
                  <span class="founder-name">Matheus Cezar</span>
                  <br />
                  <span class="founder-clink">
                    <em>
                      Para: Elizabeth
                      Freitas
                    </em>
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="actions-row">
          <div class="reaction-wrapper">
            <figure
              id="r1"
              :class="{'slide-out-fwd-top' : reactedWith === 1}"
              @click.stop="setReaction(1)"
              class="animations-page-grid__thumb"
              style="background-image: url('/r2.gif');"
            ></figure>
          </div>
          <div class="reaction-wrapper">
            <figure
              id="r2" 
              :class="{'slide-out-fwd-top' : reactedWith === 2}"
              @click.stop="setReaction(2)"
              class="animations-page-grid__thumb"
              style="background-image: url('/r3.gif');"
            ></figure>
          </div>
          <div class="reaction-wrapper">
            <figure
              id="r3"
              :class="{'slide-out-fwd-top' : reactedWith === 3}"
              @click.stop="setReaction(3)"
              class="animations-page-grid__thumb"
              style="background-image: url('/r1.gif');"
            ></figure>
          </div>
          <div class="reaction-wrapper">
            <figure
              id="r4"
              :class="{'slide-out-fwd-top' : reactedWith === 4}"
              @click.stop="setReaction(4)"
              class="animations-page-grid__thumb"
              style="background-image: url('/r4.gif');"
            ></figure>
          </div>
          <div class="reaction-wrapper">
            <figure
              id="r5"
              :class="{'slide-out-fwd-top' : reactedWith === 5}"
              @click.stop="setReaction(5)"
              class="animations-page-grid__thumb"
              style="background-image: url('/r5.gif');"
            ></figure>
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
      reactedWith:null,
      allquotes: {},
      totalQuotes: "",
      quote: "",
      idQuote: "",
      bgColor: "",
      o: [
        "bg231a9d57",
        "bgc26d1917",
        "bg3bbd4fca",
        "bg0692f640",
        "bgcc5b74c4",
        "bg5a2d6289",
        "bg0f0f448e",
        "bgaf3ac0ca",
        "bgc222d2bb",
        "bg45fe2c19",
        "bgf36ca093",
        "bgf294ce39",
        "bg3ba57143",
        "bg675d0497",
        "bgdc9d8ddc",
        "bg7977d314",
        "bg1b86f6a0",
        "bg41a75efc",
        "bg12a22a86",
        "bgc81add8f",
        "bg78009f12",
        "bg757b1e21",
        "bg1eafd85b",
        "bg89823765",
        "bgd12e4f4b",
        "bg83fe2bef",
        "bg8b512038",
        "bgc12cb83d",
        "bg91f2cf1e",
        "bgfc9f8f3d",
        "bg0e60e201",
        "bg4e94898b",
        "bg42a2b846",
        "bg64ff2cbf",
        "bg3091677d",
        "bg4c2fd764",
        "bg23e48b91",
        "bge3186902",
        "bga4c47961",
        "bg31202a1e",
        "bg6f68d060",
        "bge4d42f9e",
        "bg404b1fb1",
        "bgb7a31572",
        "bgf9375071",
        "bgbf989fd1",
        "bg7f32556a",
        "bg7a4e3191",
        "bg5e1b388f",
        "bg4cdab899",
        "bg1ee7ee91",
        "bg8e145bfd",
        "bg3ff22c3c",
        "bgb519384d",
        "bga8ffaa02",
        "bg69d0a1ac",
        "bgceefa852",
        "bg187174e4",
        "bg08d3970f",
        "bg3349cd4a",
        "bg9e359275",
        "bg8e7c0300",
        "bgb8e4dd66",
        "bg87b7cc07",
        "bg80580692",
        "bgfa9cac2d",
        "bgccbd7913",
        "bg447223ce",
        "bg6a254b2d",
        "bgfaa99fc6",
        "bg002e898e",
        "bge3da3eb7",
        "bg04367106",
        "bga06283e7",
        "bge1749b55",
        "bg65d470eb",
        "bgc4ccefd4",
        "bg622b59a6",
        "bg5777e2da",
        "bg2bfc13ad",
        "bg601a0c86",
        "bg5328c35b",
        "bg24811486",
        "bgadd55c84",
        "bg26f1cc54",
        "bge3490bbe",
        "bgb5baac8a",
        "bg8ab6342e",
        "bg5bf68675",
        "bg20ddc953",
        "bg39098865",
        "bga926e7f2",
        "bg341d1096",
        "bg502b8047",
        "bg15d443c0",
        "bg212ad96e",
        "bg6525858c",
        "bg2cd931c4",
        "bg0e653981",
        "bge9177094",
        "bgd0333408",
        "bgf84fb994",
        "bg281ec4f4",
        "bg0b52c4d2",
        "bgdb1dc884",
        "bg127512b5",
        "bg30ab018a",
        "bg42987704",
        "bge8b8a56f",
        "bg8a9bb613",
        "bg5f0cb5fc",
        "bg1db7d585",
        "bg29e88a6c",
        "bgab873c60",
        "bg5465e7fc",
        "bg791234bf",
        "bgfd4fe5b7",
        "bg35b4d85d",
        "bg071011c7",
        "bg0bd783fc",
        "bgf97526fc",
        "bg258495ad",
        "bga2d81192",
        "bg993cd76a",
        "bg4411a39b",
        "bg2c36b142",
        "bg019db301",
        "bga2a651f6",
        "bge8b77f5e",
        "bgf1e3dbd8",
        "bgba14e34f",
        "bge0f2a1ce",
        "bg1ab8c0fd",
        "bgfc8f5d4b",
        "bg90379e42",
        "bg987ee0b0",
        "bg12424624",
        "bg26a9b54d",
        "bg79eb30c3",
        "bg75843632",
        "bgbbff99e8",
        "bg88f14950",
        "bg38090296",
        "bgfe1b9434",
        "bgcf9271b3",
        "bg758f871d",
        "bg52d8fce8",
        "bg0853a3bb",
        "bg1284c6a2",
        "bg6dd459a6",
        "bg256e7f9f",
        "bg85ff9fe4",
        "bg7f61aa6b",
        "bg1ae700bf",
        "bge133631b",
        "bg070811d1",
        "bge4c46acb",
        "bgfc504f88",
        "bgaf908f7c",
        "bg9ed8353b",
        "bg12a3468d",
        "bgd2a6437f",
        "bg5fe2a818",
        "bg54654377",
        "bg0c0139a9",
        "bg44badff1",
        "bga51b3b52",
        "bg39fa3e62",
        "bgf4b73ded",
        "bgeba6f4be",
        "bgc1ac87c4",
        "bg0d9e365b",
        "bgc4890c8b"
      ],
      reactedQuotes: {}
    };
  },
  mounted() {
    document.getElementById("main").style.opacity = "0";
    let vm = this;
    localStorage.getItem("reactedQuotes")
      ? (vm.reactedQuotes = JSON.parse(localStorage.getItem("reactedQuotes")))
      : console.log("no reacted yet");
    if (process.client) {
      axios
        .get(
          "https://spreadsheets.google.com/feeds/list/1xoDmLyNhhAyjq_5SOU5-OStrZz3i1vkLIvsUNT-mvCI/od6/public/basic?alt=json"
        )
        .then(function(response) {
          vm.allquotes = response.data.feed.entry;
          setTimeout(function() {
            vm.getquote();
          }, 300);
        });
    }
  },
  methods: {
    setReaction(reaction) {
      let vm = this;
      vm.reactedWith = reaction;
      let idProp = this.idQuote;
      vm.reactedQuotes[idProp] = reaction;
      localStorage.setItem("reactedQuotes", JSON.stringify(this.reactedQuotes));
      setTimeout(function() {
        vm.getquote();
      }, 300);
    },
    getquote() {
      
      let vm = this;
      document.getElementById("main").style.opacity = "0";
      setTimeout(function() {
        vm.totalQuotes = vm.allquotes.length;
        let num = Math.floor(Math.random() * vm.totalQuotes);
        vm.quote = vm.allquotes[num];
        vm.idQuote = "#" + num;
        // console.log(vm.reactedQuotes.hasOwnProperty(vm.idQuote));
        // console.log(vm.reactedQuotes[vm.idQuote]);
        // console.log(vm.idQuote);
        if (vm.reactedQuotes.hasOwnProperty(vm.idQuote)) {
          vm.getquote();
        } else {
          let content = vm.quote.content.$t;
          vm.quote = content.slice(9, content.lenght);
          vm.bgColor = vm.o[(vm.o.length * Math.random()) | 0];
          setTimeout(function() {
               vm.reactedWith = null;
            document.getElementById("main").style.opacity = "1";
          }, 1300);
        }
      }, 700);
    }
  }
};
</script>



<!-- http://animista.net/play/exits/slide-out-fwd/slide-out-fwd-top -->