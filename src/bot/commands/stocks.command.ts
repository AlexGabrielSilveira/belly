import { Context, Options, SlashCommand, SlashCommandContext } from 'necord';
import { Injectable } from '@nestjs/common';
import { StocksDto } from '../dtos/stocks-command.dto';
import { StocksService } from '../services/stocks.service';
@Injectable()
export class StocksCommand {
  constructor(private readonly botService: StocksService) {}
  @SlashCommand({
    name: 'stock',
    description: 'Buscas informações sobre Ativos da B3!',
  })
  
  async onSearchStocks(@Context() [interaction]: SlashCommandContext, @Options() { options } : StocksDto) {
    await interaction.deferReply();
    let {embed, file} = await this.botService.getStocks(options);
    
    await interaction.editReply({embeds: [embed], files: file ? [file] : []});
  }
}
