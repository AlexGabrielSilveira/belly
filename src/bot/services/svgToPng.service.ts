import { Injectable } from "@nestjs/common";
import axios from "axios";
import { AttachmentBuilder } from "discord.js";
import * as sharp from "sharp";

@Injectable()
export class SvgToPngService {
     async convert(svgIconUrl: string, stockCode: string) {
        const downloadSvg = await axios.get(svgIconUrl,{
            responseType: 'arraybuffer'
        });

        const pngBuffer = await sharp(downloadSvg.data).png().toBuffer();
        const fileName = `${stockCode}.png`;
        const file = new AttachmentBuilder(pngBuffer, { name: fileName });

        return file;
     }
      
}