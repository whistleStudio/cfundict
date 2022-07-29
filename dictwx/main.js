import App from './App'
import { createSSRApp } from 'vue'
import mitt from "mitt"



export function createApp() {
  const app = createSSRApp(App)
	app.config.globalProperties.$bus = new mitt()
  return {
    app
  }
}
