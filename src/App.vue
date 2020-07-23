<template>
  <v-app>
	  <div class="topbar">
			<div class="tabs-container">
				<div class="tabs-left"></div>
				<div  style="width: 80%">
					<v-tabs
						v-model="tab"
						background-color="transparent"
						class="elevation-2 tabs-wrapper"
						color="#e49f2d"
						:centered="centered"
						dark
						:grow="grow"
						:vertical="vertical"
						:right="right"
						:prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
						:next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
						:icons-and-text="icons"
						style="box-shadow: none !important;width: 100% !important;"
					>
						<v-tabs-slider></v-tabs-slider>

						<v-tab
							v-for="i in tabs"
							:key="i"
							:href="`#tab-${i}`"
						>
							{{i}}
						</v-tab>
					</v-tabs>
				</div>
				<div class="tabs-right"></div>
			</div>
		  <div class="logo-wrapper">
		  </div>
	  </div>

    <v-main class="main">
	    <div style="width: 100vw;height: 2px;background: #363b41; margin-top: 40px;position: relative">
		    <div style="position: absolute;top: 50%;left: 50%;color: #9e9e9e;transform: translate(-50%, -50%)">CHARACTER</div>
	    </div>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
      tab: null,
      icons: false,
      centered: false,
      grow: false,
      vertical: false,
      prevIcon: false,
      nextIcon: false,
      right: false,
      tabs: ["HOME","NEWS","WEAPONS","MAP","CHARACTERS","WALLPAPER"]
  }),
};
</script>
<style lang="less">
	.topbar{
		height: 200px;
		background-image: url("assets/bg.png");
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.logo-wrapper{
		background-image: url("./assets/logo.png");
		background-size: cover;
		width: 200px;
		height: 40px;
		margin-top: 20px;
		margin-right: 50%;
	}
	.tabs-container{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 48px;
		width: 100%;

	}
	.tabs-left{
		height: 100%;
		width: 10px;background:#e49f2d;
		border-radius: 5px 0px 0px 5px ;
	}
	.tabs-right{
		width: 10px;height:100%;background:#e49f2d;
		border-radius: 0px 5px 5px 0px ;
	}

	.v-tabs-slider-wrapper{
		display: none ;
		opacity: 0.6;
	}
	.main{
		background: #1e2329;
	}
</style>
