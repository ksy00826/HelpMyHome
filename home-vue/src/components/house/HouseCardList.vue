<template>
      <v-container>
        <v-sheet 
            class="mt-5 mx-auto"
            elevation="8"
            max-width="100%"
        >
            <v-slide-group mobile-break-point="1000" show-arrows center-active>
              
              <template v-slot:next>
            <v-icon color="orange" large>mdi-hand-pointing-right</v-icon>
          </template>
              <template v-slot:prev>
            <v-icon color="orange" large>mdi-hand-pointing-left</v-icon>
          </template>
                <v-slide-item v-for="(house, i) in houses" :key="i">
                  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                    <template slot="progress">
                      <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                      ></v-progress-linear>
                    </template>

                    <v-img
                      height="250"
                      :src="imgSrc[(i%26)+1]"
                    ></v-img>

                    <v-btn
                      color="deep-purple lighten-2"
                      text
                      v-on:click="goMap(house)">
                      Go Map
                    </v-btn>
                    <v-card-title> {{ house.apartmentName }}</v-card-title>

                    <v-card-text>
                      <v-row
                        align="center"
                        class="mx-0"
                      >
                        <v-rating
                          :value="4.5"
                          color="amber"
                          dense
                          half-increments
                          readonly
                          size="14"
                        ></v-rating>

                        <div class="grey--text ms-4">
                          4.5 (413)
                        </div>
                      </v-row>

                      <div class="my-4 text-subtitle-1">
                        apartment <p>{{house.dongName}} {{house.buildYear}}</p>
                      </div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <!-- <v-card-title>Recently Deal Amount</v-card-title>

                    <v-card-text>
                      <v-chip-group
                        v-model="selection"
                        active-class="deep-purple accent-4 white--text"
                        column
                      >
                        <v-chip>{{ house.dealAmount }}(만)</v-chip>
                      </v-chip-group>
                    </v-card-text> -->

                  </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-sheet>
    </v-container>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: "HouseCardList",
    // template: '#app-template',
    data: () => ({
      imgSrc:[],
      loading: false,
      selection: 1,
    }),
    created(){
      for (var j = 1; j <= 27; j++){
        this.imgSrc.push(require(`@/assets/aptImg/${j}.jpg`)) //require!!
      }
    },
    methods: {
      ...mapActions(["setHouse"]),
      goMap(house) {
        this.$emit('scrollMap');
        this.loading = true

        this.setHouse(house)
        //지도로 올라가기
        console.log("go : card")

        setTimeout(() => (this.loading = false), 1000)
      },
    },
    computed: {
      ...mapGetters(["houses"]),
    },
    // watch: {
    //   houses(newHouse){
    //     console.log("new" + newHouse)
    //     newHouse.forEach((house) => {
    //       console.log(house); 
    //     })
    //   }
    // }
  }


</script>
