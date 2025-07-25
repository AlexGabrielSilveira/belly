import { Module } from '@nestjs/common';
import { StocksCommand } from './commands/stocks.command';
import { StocksService } from './services/stocks.service';
import { HelpCommand } from './commands/help.command';
import { GuideCommand } from './commands/guide.command';
import { DividendsCommand } from './commands/dividends.command';
import { SvgToPngService } from './services/svgToPng.service';

@Module({
  providers: [StocksCommand, StocksService, HelpCommand, GuideCommand, DividendsCommand, SvgToPngService],
})
export class BotModule {}
