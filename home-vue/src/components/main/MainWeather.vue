<template>
    <b-container>
      <div>
        <div class="scroll_box">
          <table class="table">
            <tr class="detail">
              <th>온도</th>
              <td
                class="temperature"
                v-for="Temperature in Temperature"
                :key="Temperature">
                {{ Temperature }}
              </td>
            </tr>
            <tr class="detail">
              <th>날씨</th>
              <td class="weather" v-for="weather in weather" :key="weather">
                {{ weather }}
              </td>
            </tr>
            <tr class="detail">
              <th>시간</th>
              <td class="time" v-for="time in time" :key="time">
                {{ time }}
              </td>
            </tr>
          </table>
        </div>
      </div>
    </b-container>
</template>

<script>
var axios = require("axios");
var cheerio = require("cheerio");
export default {
    name: 'MainWeather',
  data() {
    return {
      number: "",
      Temperature: [],
      weather: [],
      time: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get(
          "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EB%B6%80%EC%82%B0+%EB%AA%85%EC%A7%80%EB%8F%99+%EB%82%A0%EC%94%A8&oquery=%EB%B6%80%EC%82%B0+%EB%AA%85%EC%A7%801%EB%8F%99+%EB%82%A0%EC%94%A8&tqi=ibSGbwp0J1sssEqSblKssssstvZ-491870"
        )
        .then((res) => {
          var $ = cheerio.load(res.data);

          var number = $(
            "#main_pack > section.sc_new.cs_weather_new._cs_weather > div._tab_flicking > div.content_wrap > div.open > div:nth-child(2) > div > div > div:nth-child(3) > div > div > div > div.graph_inner._hourly_weather > ul > li"
          ).length;
          this.number = number;

          for (var i = 1; i <= number; i++) {
            this.Temperature.push(
              $(
                "#main_pack > section.sc_new.cs_weather_new._cs_weather > div._tab_flicking > div.content_wrap > div.open > div:nth-child(2) > div > div > div:nth-child(3) > div > div > div > div.graph_inner._hourly_weather > ul > li:nth-child(" +
                  i +
                  ") > dl > dd.degree_point > div > div > span"
              ).text()
            );
          }

          for (var j = 1; j <= number; j++) {
            this.weather.push(
              $(
                "#main_pack > section.sc_new.cs_weather_new._cs_weather > div._tab_flicking > div.content_wrap > div.open > div:nth-child(2) > div > div > div:nth-child(3) > div > div > div > div.graph_inner._hourly_weather > ul > li:nth-child(" +
                  j +
                  ") > dl > dd.weather_box > i > span"
              ).text()
            );
          }
          for (var k = 1; k <= number; k++) {
            this.time.push(
              $(
                "#main_pack > section.sc_new.cs_weather_new._cs_weather > div._tab_flicking > div.content_wrap > div.open > div:nth-child(2) > div > div > div:nth-child(3) > div > div > div > div.graph_inner._hourly_weather > ul > li:nth-child(" +
                  k +
                  ") > dl > dt > em"
              ).text()
            );
          }
          console.log(this.weather);
        });
    },
  },
};
</script>

<style scoped>
.detail {
  display: flex;
  flex-direction: row;
}
.temperature,
.weather,
.time {
  /* width: 12.5%; */
  padding-top: 20px;
}

.scroll_box {
  overflow: hidden;
  overflow-x: scroll;
  width: 500px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin: 0 10px;
  padding: 15px 20px;
  background-color: #fff;
  -webkit-box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.07);
  -moz-box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.07);
  -ms-box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.07);
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.07);
  -webkit-border-radius: 8px;
  -moz--border-radius: 8px;
  -ms-border-radius: 8px;
  border-radius: 8px;
}

table {
  /* height: 100%;
  width: 100%; */
}
td,
th {
  width: 100px;
}
</style>
