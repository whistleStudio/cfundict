function searchThrottle (fn, {inv=200}={}) {
	let tim
	return () => {
		clearTimeout(tim)
		tim = setTimeout(()=>{
			fn(...arguments)
		}, inv)
	}
}

export {searchThrottle}