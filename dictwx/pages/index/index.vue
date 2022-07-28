<template>
	<view class="content">
		<headbar @pop="drawerOpen"></headbar>
		<view class="main">
			
		</view>
		<uni-drawer ref="drawer" mode="left">
			<view class="drawer-title">
				<text @click="drawerClose" class="iconfont icon-tuichu"></text>
			</view>
			<scroll-view class="drawer-content" scroll-y="true" style="height: 100%;">
				<ul class="sub-ul">
					<li v-for="(v,i) in sub" :key="i" class="sub">
						<text>{{v.name}} <text :class="{'icon-sanjiaoyou':1, 'icon-sanjiaoxia':0}" class="iconfont tri"></text> </text>
						<ul>							
							<li v-for="(cv,ci) in v.cate" :key="ci" class="cate">
								<text>{{cv.name}}</text>
								<ul>
									<li class="item"></li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</scroll-view>
		</uni-drawer>
	</view>
</template>

<script>
	import {sub} from "@/static/data/category.json"
	import {ref, reactive, toRefs, onMounted} from "vue"
	export default {
		setup() {
			const drawer = ref(null)
			let indexState = reactive({
				cateMode: 0,
			})
			function drawerOpen () {drawer._value.open()}
			function drawerClose () {drawer._value.close()}
			onMounted(() => {
			  // console.log("xxx", sub);
				drawer._value.open()
			});
			
			return {
				drawer,sub,
				...toRefs(indexState),
				drawerOpen,drawerClose
			}
		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
		.drawer-title {
			height: 80rpx;
			border-bottom: 1px solid $gray240;
			box-sizing: border-box;
			text {
				float: right;
				display: inline-block;
				width: 100rpx;
				text-align: center;
				line-height: 80rpx;
				font-size: 45rpx;
				color: $mainColor;
			}
		}
		.drawer-content {
			padding: 30rpx;
			color: $gray50;
			.sub-ul {
				.sub {
					font-size: 35rpx;
				}
			}
			.tri {
				color: $gray150;
				font-size: 40rpx;
			}
		}
	}
</style>
