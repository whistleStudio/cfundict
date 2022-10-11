import {$reqGet, $hint} from "@/utils/netReq.js"

export default function (ctxt) {
	/* 请求指定页数据 */
	function getPage (sub, cate, item) {
		$reqGet({
			url: "/doc/getPage",
			query: {sub, cate, item},
			rsv (data) {
				if (!data.err) {
					ctxt.emit("changeMain", data.src)
				} else $hint(data.msg)
			}
		})
	}
	
	return {getPage}
}