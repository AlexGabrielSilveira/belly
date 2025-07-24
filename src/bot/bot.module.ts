import { Module } from '@nestjs/common';
import { StocksCommand } from './commands/stocks.command';
import { BotService } from './services/bot.service';
import { HelpCommand } from './commands/help.command';

@Module({
  providers: [StocksCommand, BotService, HelpCommand],
})
export class BotModule {}
