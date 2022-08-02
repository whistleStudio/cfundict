// #ifdef H5
var BASEURL = '/api'
// #endif

// #ifndef H5
var BASEURL = "http://localhost:8989/api" 
// #endif

const netReq = {
	$reqGet ({url,query={},rsv=()=>{},rej=()=>{}}) {
	  uni.request({
	  	url: BASEURL+url,
	  	header:  {
	  		'Content-Type': 'application/json;charset=utf-8',
				// "authorization": store.state.token || ""
	  	},
	  	data: query,
	  	success (res) {
				if (res.statusCode<400) {
					rsv(res.data)
				} else uni.showToast({title:"网络出错啦",icon:"error"})
	  	},
	  	fail (err) {
				uni.showToast({title:"网络出错啦",icon:"error"})
				rej(err)
	  	}
		})
	}
}

export default netReq