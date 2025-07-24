import { Context, Options, SlashCommand, SlashCommandContext, StringOption } from 'necord';
import { Injectable } from '@nestjs/common';
import { StocksDto } from '../dtos/stocks-command.dto';
import { BotService } from '../services/bot.service';
@Injectable()
export class StocksCommand {
  constructor(private readonly botService: BotService) {}
  @SlashCommand({
    name: 'stock',
    description: 'Buscas informações sobre Ativos da B3!',
  })
  
  async onSeachFii(@Context() [interaction]: SlashCommandContext, @Options() { options } : StocksDto) {
    await interaction.deferReply();
    let stocks = await this.botService.getStocks(options);
    await interaction.editReply({embeds: [stocks]});
  }
}
