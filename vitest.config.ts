import { defineConfig } from "vitest/config";

export default defineConfig({
    esbuild: {
        jsx: "automatic", // 자동 React 임포트 활성화
    },
    test: {
        globals: true,
        environment: "jsdom", // React 컴포넌트 테스트를 위한 jsdom
        setupFiles: "./vitest.setup.ts", // 필요한 경우 추가 설정 파일
    },
});
