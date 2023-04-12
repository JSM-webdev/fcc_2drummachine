import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
plugins: [react()],
base: "/FCC_2DRUMMACHINE-COPY",
build: {
outDir: 'docs'
}
})