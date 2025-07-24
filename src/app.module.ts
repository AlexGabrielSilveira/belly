import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NecordModule } from 'necord';
import { BotModule } from './bot/bot.module';
import { AppUpdate } from './app.update';
import { config } from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    NecordModule.forRoot({
      token: config.bot.token!,
      intents: ['Guilds', 'GuildMessages', 'DirectMessages'],
    }),
    BotModule,
  ],
  providers: [AppUpdate]
})
export class AppModule {}
