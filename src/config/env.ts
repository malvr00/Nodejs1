import path from "path";
import { config } from "dotenv";

/**
 * NODE_ENV 환경에 따라 env 파일 로드
 */
const envDir: string = `env/.env.${process.env.NODE_ENV || "development"}`;
config({
  path: path.join(process.cwd(), envDir),
});

export const env = {
  /**
   *    로그인 환경 체크
   */
  isDevelopment: (process.env.NODE_ENV === "development") as boolean,
  isProduction: (process.env.NODE_ENV === "production") as boolean,
  isLocal: (process.env.NODE_ENV === "local") as boolean,

  /**
   * 서버 환경 설정
   */
  app: {
    port: process.env.PORT || (3000 as number),
  },
};
