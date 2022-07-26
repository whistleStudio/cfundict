<template>
	<view class="headbar"> 
		<view v-if="1" class="default flex-row-center">
			<view class="iconfont icon-icon_mulu"></view>
			<view></view>
			<view class="iconfont icon-sousuo"></view>
		</view>
		<view v-else class="search">
			<view></view>
			<view>Cancel</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"headbar",
		data() {
			return {
				
			};
		}
	}
</script>

<style src="./headbar.scss" lang="scss"></style>