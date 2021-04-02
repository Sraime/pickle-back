import { Body, Controller, Delete, Param, Post, Res } from '@nestjs/common';
import { StepUsageCreateFromStep } from './dto/step-usage-create-from-step-dto';
import { StepUsageCreateNoStep } from './dto/step-usage-create-no-step-dto';

@Controller('step-usage')
export class StepUsageController {
  @Post('')
  async create(
    @Body() data: StepUsageCreateFromStep | StepUsageCreateNoStep,
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
