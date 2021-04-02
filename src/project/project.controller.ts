import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Res,
} from '@nestjs/common';

@Controller('project')
export class ProjectController {
  @Get('')
  @HttpCode(HttpStatus.CREATED)
  async getAllCodeblocks(
    @Param('userId') userId: string,
    @Res() res: Response,
  ): Promise<Response> {
    // TODO
    return res;
  }
}
