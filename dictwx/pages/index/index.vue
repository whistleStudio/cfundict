<template>
	<view class="content">
		<headbar></headbar>
		<view class="main">
			<!-- <iframe src="/static/data/CF-Board-A主控板/CF-Board-A主控板.html" frameborder="0"></iframe> -->
			<!-- <iframe v-if="mainSrc" :src="mainSrc" frameborder="0"></iframe> -->
			<web-view  class="webview" v-if="mainSrc" :src="mainSrc"></web-view>
		</view>
		<category @changeMain="changeMain" :cateInfo="cateInfo"></category>
	</view>
</template>

<script>
	import {ref, reactive, toRefs, onBeforeMount} from "vue"
	import netReq from "../../utils/netReq.js"
	import hint from "../../utils/hint.js"
	export default {
		setup() {
			let indexState = reactive({
				cateMode: 0,
				mainSrc: "",
				cateInfo: []
			})
			const {$reqGet} = netReq
			/* 改变main内容 */
			function changeMain (src) {
				indexState.mainSrc = src
			}
			/* 请求首页数据 */
			onBeforeMount(()=>{
				$reqGet({
					url: "/page/home",
					rsv(data){
						if (!data.err) {
							console.log(data.src)
							indexState.mainSrc = data.src
						} else hint.error(data.msg)
					}
				})
				$reqGet({
					url: "/page/getCate",
					rsv(data){
						if (!data.err) {
							indexState.cateInfo = data.cateInfo
						} else hint.error(data.msg)
					} 
				})
			})
			return {
				...toRefs(indexState),
				changeMain
			}
		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
		// background-color: yellow;
		height: 100vh;
		.main {
			width: 100%;
			height: 100%;
			>iframe {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
