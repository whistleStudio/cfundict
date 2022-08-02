const hint = {
	error (err) {
		uni.showToast({
			title: err,
			icon: "error"
		})
	}
}

export default hint