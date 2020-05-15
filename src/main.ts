/*
 * @Descripttion: App entry.
 * @file: Index 入口文件
 * @module: app/main
 * @version: 1.0.0
 * @Author: Ruhig Nieh
 * @Date: 2020-05-15 14:19:23
 * @LastEditors: Ruhig Nieh
 * @LastEditTime: 2020-05-15 17:49:08
 */
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { environment, isProdMode, isDevMode } from '@app/app.environment';
import * as APP_CONFIG from '@app/app.config';

const { log, warn, info } = console;
const color = (c: any) => isDevMode ? c : '';
Object.assign(global.console, {
  log: (...args: any[]) => log('[log]', '[nodepress]', ...args),
  warn: (...args: any[]) => warn(color('\x1b[33m%s\x1b[0m'), '[warn]', '[nodepress]', ...args),
  info: (...args: any[]) => info(color('\x1b[34m%s\x1b[0m'), '[info]', '[nodepress]', ...args),
  error: (...args: any[]) => info(color('\x1b[31m%s\x1b[0m'), '[error]', '[nodepress]', ...args)
})

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    isProdMode ? { logger: false } : null,
  );
  return await app.listen(APP_CONFIG.APP.PORT);
}
bootstrap().then(() => {
  console.info(`NodeAPP Run！port at ${APP_CONFIG.APP.PORT}, env: ${environment}`)
});
