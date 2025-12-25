import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 배포 시 레포지토리 이름이 경로에 붙으므로 상대 경로 사용
  base: './',
})