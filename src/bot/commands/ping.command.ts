import { Context, SlashCommand, SlashCommandContext } from 'necord';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PingCommand {
  @SlashCommand({
    name: 'ping',
    description: 'Responde com pong!',
  })
  async onPing(@Context() [interaction]: SlashCommandContext) {
    await interaction.reply('🏓 Pong!');
  }
}
