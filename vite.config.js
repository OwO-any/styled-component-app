// vite.config.ts (vite.config.js)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,          // 0.0.0.0로 바인딩 (컨테이너 외부 접근 허용)
    port: 5173,
    strictPort: true,    // 5173만 사용 (자동 증가 방지)
    hmr: {
      protocol: 'ws',    // Docker 내 개발환경이면 ws가 일반적으로 안전
      host: 'localhost', // 호스트의 브라우저가 접속하는 기준 호스트
      clientPort: 5173,  // 브라우저가 접속할 포트 (포워딩된 포트)
    },
    watch: {
      // Windows/Mac에서 볼륨 마운트 시 파일 변경 감지 이슈 방지
      usePolling: true
    }
  }
})
