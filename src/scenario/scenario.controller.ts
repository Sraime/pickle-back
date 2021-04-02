import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

import { ScenarioCreate } from './dto/scenario-create-dto';
import { ScenarioUpdate } from './dto/scenario-update-dto';

@Controller('scenario')
export class ScenarioController {
  @Post('')
  async create(
    @Body() data: ScenarioCreate,
    @Param() id: string,
    @Res() res: Response,
  ): Promise<Response> {
    // TODO
    return res;
  }

  @Delete(':id')
  async delete(@Param() id: string, @Res() res: Response): Promise<Response> {
    // TODO
    return res;
  }

  @Patch(':id')
  async update(
    @Body() data: ScenarioUpdate,
    @Param() id: string,
    @Res() res: Response,
  ): Promise<Response> {
    // TODO
    return res;
  }
}
