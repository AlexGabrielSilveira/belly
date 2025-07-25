import { Context, Options, SlashCommand, SlashCommandContext, StringOption } from 'necord';
import { Injectable } from '@nestjs/common';
import { EmbedBuilder } from 'discord.js';

@Injectable()
export class GuideCommand {
@SlashCommand({
    name: 'guide',
    description: 'Um guia sobre siglas importantes que você deveria saber.',
})

async onGuide(@Context() [interaction]: SlashCommandContext) {
    const embed = new EmbedBuilder()
        .setTitle('📘 Guia de Campos Financeiros')
        .setColor(0xdea22e) 
        .setDescription('Explicações simples sobre os dados exibidos nos ativos do seu bot.')
        .addFields(
            { name: '💰 Price', value: 'Preço atual da ação ou FII no mercado.', inline: false },
            { name: '🔔 Price Open', value: 'Valor da primeira negociação do dia.', inline: false },
            { name: '📈 High / 📉 Low', value: 'Maior e menor preço atingido no dia de hoje.', inline: false },
            { name: '📊 Volume', value: 'Quantidade negociada hoje (número de ações ou cotas).', inline: false },
            { name: '🏦 Market Cap', value: 'Valor total da empresa no mercado. Fórmula: preço × número de ações.', inline: false },
            { name: '🕒 Trade Time', value: 'Horário da última negociação registrada.', inline: false },
            { name: '📎 Volume Médio', value: 'Média de volume negociado por dia.', inline: false },
            { name: '📐 P/L Ratio ', value: 'Preço dividido pelo lucro por ação. Ajuda a analisar se a ação está cara ou barata.', inline: false },
            { name: '💸 Lucro p. Ação', value: 'Lucro por ação — quanto a empresa lucra para cada ação que possui.', inline: false },
            { name: '📆 52wk High / Low', value: 'Maior e menor preço dos últimos 12 meses.', inline: false },
            { name: '🔁 Change / %', value: 'Variação nominal e percentual no preço atual comparado ao anterior.', inline: false },
            { name: '📉 Fechamento Anterior', value: 'Último preço antes do dia de hoje.', inline: false },
            { name: '🔢 Shares', value: 'Número total de ações emitidas e circulando no mercado.', inline: false },
            { name: '🏷️ Ticker', value: 'Código do ativo usado na bolsa, como PETR4 ou MXRF11.', inline: false }
        )
    await interaction.reply({ embeds: [embed] });
    }
}
