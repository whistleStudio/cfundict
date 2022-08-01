<template>
	<view class="content">
		<headbar></headbar>
		<view class="main">
			<!-- <iframe src="/static/data/CF-Board-A主控板/CF-Board-A主控板.html" frameborder="0"></iframe> -->
			<iframe v-if="mainSrc" :src="mainSrc" frameborder="0"></iframe>
		</view>
		<category></category>
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
				mainSrc: ""
			})
			const {$reqGet} = netReq
			/* 请求指定页数据 */
			function getPage (sub, cate, item) {
				$reqGet({
					url: "/page/getPage",
					query: {sub, cate, item},
					rsv (data) {
						if (!data.err) {
							
						} else hint.error(data.msg)
					}
				})
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
			})
			return {
				...toRefs(indexState),
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
			background-color: red;
			>iframe {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
