<template>
		<uni-drawer ref="drawer" mode="left" :width="240">
			<view class="drawer-title">
				<text @click="drawerClose" class="iconfont icon-tuichu"></text>
			</view>
			<scroll-view class="drawer-content" scroll-y="true" style="height: 100%;">
				<ul class="sub-ul">
					<li v-for="(v,i) in sub" :key="i"  class="sub">
						<text :class="{'sub-active': actIdx[0]==i}" @click="subClick(i)">{{v.name}} <text :class="{'icon-sanjiaoyou': actIdx[0]!=i, 'icon-sanjiaoxia':actIdx[0]==i}" class="iconfont tri"></text> </text>
						<ul v-if="actIdx[0]==i">							
							<li v-for="(cv,ci) in v.cate" :key="ci" class="cate">
								<text>{{cv.name}}</text>
								<ul>
									<li v-for="(iv,ii) in cv.item" @click="itemClick(ci, ii)" class="item">{{iv}}</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</scroll-view>
		</uni-drawer>
</template>

<script>
	import {sub} from "@/static/data/category.json"
	import {ref, reactive, toRefs, onMounted, getCurrentInstance} from "vue"
	export default {
		name:"category",
		setup (props,context) {
			const {proxy} = getCurrentInstance()
			// 获得dom元素
			const drawer = ref(null)
			const cateState = reactive({
				actIdx: [-1,0,0]
			})
			function drawerOpen () {drawer._value.open()}
			function drawerClose () {drawer._value.close()}
			function subClick (i) {
				cateState.actIdx[0] = cateState.actIdx[0]==i ? -1 : i 
			}
			function itemClick (ci, ii) {
				let {actIdx} = cateState
				actIdx[1] = ci
				actIdx[2] = ii
				console.log(actIdx)
			}
			
			onMounted(() => {
				proxy.$bus.on("pop", drawerOpen)
				drawer._value.open()
			});
			
			return {
				drawer, sub,
				drawerOpen, drawerClose, subClick, itemClick,
				...toRefs(cateState)
			}
		}
	}
</script>

<style lang="scss">
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
		color: $gray80;
		box-sizing: border-box;
		.sub-ul {
			.sub {	
				margin-bottom: 30rpx;
				>text {
					display: inline-block;
					font-size: 35rpx;
					width: 150rpx;
				}
				.cate {
					padding-left: 35rpx;
					>text {
						font-size: 32rpx;
					}
					>ul {
						margin: 15rpx 0;
						.item {
							color: $gray100;
							margin-bottom: 10rpx;
							padding-left: 35rpx;
							font-size: 32rpx;
						}							
					}
				}
			}
		}
		.tri {
			color: $gray150 !important;
			font-size: 42rpx;
		}
		.sub-active {
			color: $mainColor;
		}
	}
</style>