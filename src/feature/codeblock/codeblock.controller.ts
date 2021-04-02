import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Res,
} from '@nestjs/common';
import { Codeblock } from './codeblock.entity';
import { CodeblockService } from './codeblock.service';
import { Response } from 'express';

@Controller('feature/:id/codeblock')
export class CodeblockController {
  constructor(private codeblockService: CodeblockService) {}

  @Get('')
  @HttpCode(HttpStatus.CREATED)
  async getAllCodeblocks(
    @Param() id: string,
    @Res() res: Response,
  ): Promise<Response> {
    const codeblocks: Codeblock[] = await this.codeblockService.getFeatureCodeblocks(
      id,
    );
    res.send(codeblocks);
    return res;
  }
}
