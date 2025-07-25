import { Context, Options, SlashCommand, SlashCommandContext, StringOption } from 'necord';
import { Injectable } from '@nestjs/common';
import { EmbedBuilder } from 'discord.js';

@Injectable()
export class DividendsCommand {
@SlashCommand({
    name: 'dividends',
    description: 'Lista de dividendos e juros sobre capital próprio.',
})

async onGuide(@Context() [interaction]: SlashCommandContext) {
    const embed = new EmbedBuilder()
        .setTitle('Dividendos e Juros sobre Capital Próprio')
        .setColor(0xdea22e) 
        .addFields(
           
        )
    await interaction.reply({ embeds: [embed] });
    }

}
