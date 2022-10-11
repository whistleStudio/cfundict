<template>
	<view class="headbar"> 
		<!-- 默认 -->
		<view v-if="mode==0" class="default flex-row-center">
			<view @click="pop" class="iconfont icon-icon_mulu"></view>
			<view @click="goHome"></view>
			<view @click="actSearch" class="iconfont icon-sousuo"></view>
		</view>
		<!-- 搜索 -->
		<view v-else class="search flex-row-center">
			<view>
				<input v-model="keyword" type="text" placeholder="Search docs" placeholder-class="plh" 
				@input="inputSearch" @confirm="inputConfirm">
				<text class="iconfont icon-sousuo"></text>
				<text v-show="keyword" @click="clearKeyword" 
				class="iconfont icon-quxiao"></text>
			</view>
			<view @click="cancelSearch">Cancel</view>
		</view>
	</view>
	<view v-show="mode==1" class="search-list">
		<text>Search Result: <text v-if="!keyword || !searchList.length">None</text> </text>
		<ul>
			<li v-for="(v, i) in searchList" :key="i" @click="redirectPage(v.sub, v.cate, v.item)"> 
				<text class="iconfont icon-a-fenxianglianjie"></text>
				<text>{{v.title}}</text> 
				<ul class="kword">
					<li v-for="(cv, ci) in v.keyword.split('|')" :key="ci">{{cv}}</li>
				</ul>
			</li>
		</ul>
	</view>
</template>

<script>
	import {reactive, toRefs, getCurrentInstance} from "vue"
	import {searchThrottle} from "@/utils/throttle.js"
	import {$reqGet, $hint} from "../../utils/netReq.js"
	import useGetPage from "@/hooks/useGetPage.js"
	export default {
		name:"headbar",
		emits: ["pop", "actSearch", "cancelSearch", "changeMain", "goHome"],
		
		setup (props, context) {
			const {proxy} = getCurrentInstance()
			let headbarState = reactive({
				mode: 0
			})
			let searchInfo = reactive({
				keyword: "",
				searchList: []
			})
			function pop () {
				proxy.$bus.emit("pop")
			}
			function actSearch () {
				headbarState.mode = 1
				context.emit("actSearch")
			}
			function cancelSearch () {
				searchInfo.keyword = ""
				searchInfo.searchList = []
				context.emit("cancelSearch")
				headbarState.mode = 0
			}
			function clearKeyword () {
				searchInfo.keyword = ""
				searchInfo.searchList = []
			}
			let inputSearch = searchThrottle(()=>{
				console.log("😊search sth.")
				$reqGet({
					url: "/doc/kwSearch",
					query: {kw: searchInfo.keyword},
					rsv (data) {
						if (!data.err) {
							searchInfo.searchList = data.searchList
						} else {
							searchInfo.searchList = []
						}
					}
				})
			})
			const {getPage} = useGetPage(context)
			function redirectPage (sub, cate, item) {
				getPage(sub, cate, item)
				cancelSearch()
			}
			function inputConfirm () {
				let sL = searchInfo.searchList
				if (sL.length) {
					redirectPage(sL[0].sub, sL[0].cate, sL[0].item)
				} else cancelSearch()
			}
			function goHome () {
				context.emit("goHome")
			}
			
 			return {
				...toRefs(headbarState),
				...toRefs(searchInfo),
				pop,actSearch,cancelSearch, inputSearch, clearKeyword, redirectPage, inputConfirm, goHome
			}
		},
	}
</script>

<style src="./headbar.scss" lang="scss"></style>