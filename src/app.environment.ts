/*
 * @Descripttion: 
 * @file: 
 * @module: 
 * @version: 1.0.0
 * @Author: Ruhig Nieh
 * @Date: 2020-05-15 15:53:31
 * @LastEditors: Ruhig Nieh
 * @LastEditTime: 2020-05-15 17:19:41
 */ 
/**
 * App environment.
 * @file Environment 环境配置
 * @module app/environment
 * @author Ruhig Nieh
 */

export const environment = process.env.NODE_ENV;
export const isDevMode = Object.is(environment, 'development');
export const isProdMode = Object.is(environment, 'production');
export const isTestMode = Object.is(environment, 'test');

export default {
  environment,
  isDevMode,
  isProdMode,
  isTestMode
}