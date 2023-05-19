<template>
  <b-container>
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="512"
        img-height="240"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd">
        <b-carousel-slide
          class="idx"
          v-for="i in idx"
          :key="i"
          :img-src="image[i]">
          {{ image[i] }}
          {{ title[i] }}
          <!-- <img :src="image[i]"> -->
          <br />
          <br />
          {{ content[i] }}
          <br />
        </b-carousel-slide>
      </b-carousel>

      <p class="mt-4">
        Slide #: {{ slide }}<br />
        Sliding: {{ sliding }}
      </p>
    </div>
  </b-container>
</template>
<script>
// import { index } from "cheerio/lib/api/traversing";
var axios = require("axios");
var cheerio = require("cheerio");
export default {
  name: "MainNews",
  data() {
    return {
      loaded: false,
      slide: 0,
      sliding: null,
      // 뉴스 제목, 내용, 이미지
      number: "",
      title: [],
      content: [],
      image: [],
      idx: [0, 1, 2],
    };
  },
  created() {
    this.loaded = false;
    this.getData();
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    // 최근 부동산 뉴스 크롤링
    getData() {
      axios
        .get("https://realestate.daum.net/news/recent/hotissue/1155212")
        .then((res) => {
          var $ = cheerio.load(res.data);

          var number = 3;
          this.number = number;
          for (var i = 1; i <= number; i++) {
            this.title.push(
              $(
                "#mCenter > div.wrap_issue > ul > li:nth-child(" +
                  i +
                  ") > div > strong > a"
              ).text()
            );
          }
          for (var j = 1; j <= number; j++) {
            this.content.push(
              $(
                "#mCenter > div.wrap_issue > ul > li:nth-child(" +
                  j +
                  ") > div > p > a"
              ).text()
            );
          }
          for (var k = 1; k <= number; k++) {
            this.image.push(
              $(
                "#mCenter > div.wrap_issue > ul > li:nth-child(" +
                  k +
                  ") > a > img"
              ).attr("src")
            );
          }
          // console.log(this.weather);
          console.log("image", this.image);
          this.loaded = true;
        });
    },
  },
};
</script>
