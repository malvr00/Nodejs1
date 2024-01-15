import morgan, { StreamOptions } from 'morgan';
import logger from './logger';

/**
 *  :method / request에 대한 HTTP method
 *  :url 요청된 URL
 *  :status HTTP 상태
 *  :response-time 응답시간
 *  :remote-addr 사용자의 IP 주소
 *  :http-version HTTP version
 */
const combined: string =
  ':remote-addr - :remote-user ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';

const morganFormat: string = process.env.NODE_ENV !== 'production' ? 'dev' : combined;

/**
 * morgan log 출력 설정
 * winston logger 사용
 */
const stream: StreamOptions = {
  write: (message) => logger.info(message),
};

/**
 * morgan use setting
 */
const morganMiddleware = morgan(morganFormat, { stream });

export default morganMiddleware;
