/*
 * @Descripttion: App controller
 * @file: 主页控制器
 * @module: app/controller
 * @version: 1.0.0
 * @Author: Ruhig Nieh
 * @Date: 2020-05-15 14:19:23
 * @LastEditors: Ruhig Nieh
 * @LastEditTime: 2020-05-15 16:08:22
 */ 

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
