<template>
	<view class="content">
		<headbar @pop="pop"></headbar>
		<view class="main">
			
		</view>
		<uni-popup ref="popup" type="left">底部弹出 Popup</uni-popup>
	</view>
</template>

<script>
	import {ref, reactive, toRefs, onMounted} from "vue"
	export default {
		setup() {
			const popup = ref(null)
			let indexState = reactive({
				cateMode: 0,
			})
			function pop () {
				indexState.cateMode = !indexState.cateMode
			}
			onMounted(() => {
			  console.log(popup);
			});
			
			return {
				popup,
				...toRefs(indexState),
				pop
			}
		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
	}
</style>
