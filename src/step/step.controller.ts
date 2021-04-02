import { Body, Controller, Delete, Param, Patch, Res } from '@nestjs/common';
import { StepUpdate } from './dto/step-update-dto';

@Controller('step')
export class StepController {
  @Patch(':id')
  async update(
    @Body() data: StepUpdate,
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
}
