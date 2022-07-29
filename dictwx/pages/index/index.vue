<template>
	<view class="content">
		<headbar></headbar>
		<view class="main">
			
		</view>
		<category></category>
	</view>
</template>

<script>
	import {ref, reactive, toRefs} from "vue"
	import MdEditor from 'md-editor-v3';
  import 'md-editor-v3/lib/style.css';
	
	export default {
		setup() {
			let indexState = reactive({
				cateMode: 0,
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
	}
</style>
