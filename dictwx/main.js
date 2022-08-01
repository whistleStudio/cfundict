import App from './App'
import { createSSRApp } from 'vue'
import mitt from "mitt"
import netReq from "./utils/netReq.js"


export function createApp() {
  const app = createSSRApp(App)
	app.config.globalProperties.$bus = new mitt()
	app.config.globalProperties.$reqGet = netReq.$reqGet
  return {
    app
  }
}
