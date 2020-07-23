<template>
  <v-container>
    <v-row class="text-center">
      <v-col
	      v-for="item in 9"
        class="mb-5"
        cols="4"
	      :key="item"
      >
	      <img src="../assets/img-1.jpg"  alt="">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data: () => ({

    }),
  }
</script>
<style lang="less">
	img{
		width: 300px;
		height: 300px;
	}
</style>
