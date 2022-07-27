<template>
	<view class="headbar"> 
		<view v-if="mode==0" class="default flex-row-center">
			<view class="iconfont icon-icon_mulu"></view>
			<view></view>
			<view class="iconfont icon-sousuo" @click="mode=1"></view>
		</view>
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
		setup () {
			let pageState = reactive({
				mode: 0
			})
			let searchInfo = reactive({
				keyword: ""
			})
			return {
				...toRefs(pageState),
				...toRefs(searchInfo)
			}
		},
	}
</script>

<style src="./headbar.scss" lang="scss"></style>