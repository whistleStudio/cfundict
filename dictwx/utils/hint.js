const hint = {
	error (err) {
		uni.showToast({
			title: err,
			icon: "fail"
		})
	}
}

export default hint