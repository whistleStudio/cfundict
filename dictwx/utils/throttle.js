function searchThrottle (fn, {inv=1500}={}) {
	let tim
	return () => {
		clearTimeout(tim)
		tim = setTimeout(()=>{
			fn(...arguments)
		}, inv)
	}
}

export {searchThrottle}