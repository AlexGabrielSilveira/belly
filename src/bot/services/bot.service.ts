import { Injectable } from "@nestjs/common";
import axios, { AxiosResponse } from "axios";
import { EmbedBuilder } from "discord.js";
import { config } from "src/config/config";
import { AssetInterface as StockInterface } from "../interfaces/asset-interface";

@Injectable()
export class BotService {
   async getStocks(code: string) {

    const stockCode = code.toUpperCase();
    try {
        const stock = await axios.get(`${config.b3api.url}/Assets/${stockCode}`);

        const embed = new EmbedBuilder()
        .setTitle(`📊 Asset Info: ${stock.data.ticker}`)
        .setColor(0xdea22e)
        .addFields(
            { name: '💰 Price', value: `R$ ${stock.data.price.toFixed(2)}`, inline: true },
            { 
            name: '📉 Change', 
            value: `${stock.data.change.toFixed(2)}${
                stock.data.changepct !== undefined 
                ? ` (${stock.data.changepct.toFixed(2)}%)` 
                : ''
            }`, 
            inline: true 
            },
            { name: '📈 Day High', value: `R$ ${stock.data.high.toFixed(2)}`, inline: true },
            { name: '📉 Day Low', value: `R$ ${stock.data.low.toFixed(2)}`, inline: true },
            { name: '📊 Volume', value: `${stock.data.volume.toLocaleString('pt-BR')}`, inline: true },
            {
            name: '🏦 Market Cap',
            value: stock.data.marketcap !== null
                ? `R$ ${(stock.data.marketcap / 1e9).toFixed(2)} B`
                : 'Não disponível',
            inline: true
            },
            { name: '🔢 Shares', value: `${(stock.data.shares / 1e9).toFixed(2)} bilhões`, inline: true },
            { 
            name: '📈 52wk High', 
            value: stock.data.high52 !== undefined 
                ? `R$ ${stock.data.high52.toFixed(2)}` 
                : 'Não disponível', 
            inline: true 
            },
            { 
            name: '📉 52wk Low', 
            value: stock.data.low52 !== undefined 
                ? `R$ ${stock.data.low52.toFixed(2)}` 
                : 'Não disponível', 
            inline: true 
            },
            {
            name: '💸 Lucro p. Ação',
            value: stock.data.eps !== null
                ? `R$ ${stock.data.eps.toFixed(2)}`
                : 'Não disponível',
            inline: true
            },
            {
            name: '📐 P/L',
            value: stock.data.pe !== null
                ? `${stock.data.pe.toFixed(2)}`
                : 'Não disponível',
            inline: true
            },
            { 
            name: '🕒 Trade Time', 
            value: stock.data.tradetime !== undefined 
                ? new Date(stock.data.tradetime).toLocaleString('pt-BR') 
                : 'Não disponível', 
            inline: false 
            }
        )
        .setFooter({ text: 'Dados fornecidos pela B3API' })
        return embed
    } catch (error) {
        const embed = new EmbedBuilder()
            .setColor('Red')
            .setTitle('Erro ao buscar informações')
            .setDescription(`Não foi possível encontrar informações para o código: \n${stockCode} \n evite usar caracteres especiais ou espaços.`);
        return embed;
    }
    
   }
}
