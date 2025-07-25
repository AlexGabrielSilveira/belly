import { Context, Options, SlashCommand, SlashCommandContext, StringOption } from 'necord';
import { Injectable } from '@nestjs/common';
import { EmbedBuilder } from 'discord.js';

@Injectable()
export class HelpCommand {
  @SlashCommand({
    name: 'help',
    description: 'Lista de comandos!',
  })
  
  async onHelp(@Context() [interaction]: SlashCommandContext) {

    const embed = new EmbedBuilder()
        .setTitle('Comandos Disponíveis')
        .setColor(0xdea22e) 
        .addFields(
            { name: '/stocks', value: 'comando responsavel por exibir informações dos ativos da bolsa B3!', inline: false },
            { name: '/guide', value: 'Guia sobre siglas importantes que você deveria saber.', inline: false },
            { name: '/dividens', value: 'Lista de dividendos de uma ação!', inline: false },
        )  
    await interaction.reply({ embeds: [embed] });
    }
}
