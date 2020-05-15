/*
 * @Descripttion: App config.
 * @file: 应用运行配置
 * @module: app/config
 * @version: 1.0.0
 * @Author: Ruhig Nieh
 * @Date: 2020-05-15 16:28:58
 * @LastEditors: Ruhig Nieh
 * @LastEditTime: 2020-05-15 22:26:58
 */

import path from 'path';

export const APP = {
  LIMIT: 16,
  PORT: 8000,
  ROOT_PATH: __dirname,
  MASTER: 'Ruhig',
  NAME: 'Ruhig',
  URL: 'https://demo.ruhignieh',
  FRONT_END_PATH: path.join(__dirname, '..', '..', 'ruhig.me'),
};
