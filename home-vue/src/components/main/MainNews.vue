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
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd">
        <b-carousel-slide
          class="idx"
          v-for="idx in idx"
          :key="idx"
          img-src="//t1.daumcdn.net/thumb/T90x90/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fnews%2F202305%2F16%2FNEWS1%2F20230516054123211ejdl.jpg">
          {{ image[idx] }}
          {{ title[idx] }}
          <br />
          <br />
          {{ content[idx] }}
          <br />
        </b-carousel-slide>
        <!-- Text slides with image -->
        <!-- <b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide> -->

        <!-- Slides with custom text -->
        <!-- <b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide> -->

        <!-- Slides with image only -->
        <!-- <b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide> -->

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <!-- <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              src="https://picsum.photos/1024/480/?image=55"
              alt="image slot" />
          </template>
        </b-carousel-slide> -->

        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
            pellentesque ut lacus vel interdum.
          </p>
        </b-carousel-slide> -->
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
              ).text()
            );
          }
          console.log(this.weather);
          console.log(this.image);
        });
    },
  },
};
</script>
