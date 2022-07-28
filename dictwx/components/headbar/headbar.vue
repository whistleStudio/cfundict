<template>
	<view class="headbar"> 
		<!-- 默认 -->
		<view v-if="mode==0" class="default flex-row-center">
			<view @click="pop" class="iconfont icon-icon_mulu"></view>
			<view></view>
			<view @click="mode=1" class="iconfont icon-sousuo"></view>
		</view>
		<!-- 搜索 -->
		<view v-else class="search flex-row-center">
			<view>
				<input v-model="keyword" type="text" placeholder="Search docs" placeholder-class="plh">
				<text class="iconfont icon-sousuo"></text>
				<text v-show="keyword" @click="keyword=''" 
				class="iconfont icon-quxiao"></text>
			</view>
			<view @click="mode=0">Cancel</view>
		</view>
	</view>
</template>

<script>
	import {reactive, toRefs} from "vue"
	export default {
		name:"headbar",
		emits: ["pop"],
		
		setup (props, context) {
			let headbarState = reactive({
				mode: 0
			})
			let searchInfo = reactive({
				keyword: ""
			})
			function pop () {
				context.emit("pop")
			}
			return {
				...toRefs(headbarState),
				...toRefs(searchInfo),
				pop
			}
		},
	}
</script>

<style src="./headbar.scss" lang="scss"></style>