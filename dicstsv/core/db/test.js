{
  let b = 1
  function a (fn) {
    return ()=>{
      console.log(b)
      fn(...arguments)
    }
  }
}


{
  // let b = 2
  let c = a(()=>{console.log(b)})
  c()
}