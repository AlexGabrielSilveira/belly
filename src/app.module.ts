import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NecordModule } from 'necord';
import { BotModule } from './bot/bot.module';
import { AppUpdate } from './app.update';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    NecordModule.forRoot({
      token: process.env.DISCORD_TOKEN!,
      intents: ['Guilds', 'GuildMessages', 'DirectMessages'],
    }),
    BotModule,
  ],
  providers: [AppUpdate]
})
export class AppModule {}
