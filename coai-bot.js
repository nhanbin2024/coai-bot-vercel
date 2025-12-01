import { Client, GatewayIntentBits, EmbedBuilder } from "discord.js";
import fetch from "node-fetch";

const TOKEN = process.env.TOKEN;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});import { Client, GatewayIntentBits, EmbedBuilder } from "discord.js";
import fetch from "node-fetch";

const TOKEN = process.env.TOKEN;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
import { Client, GatewayIntentBits, EmbedBuilder } from "discord.js";
import fetch from "node-fetch";

const TOKEN = process.env.TOKEN;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
client.once("ready", () => {
  console.log(`✅ Bot COAI đã hoạt động: ${client.user.tag}`);
  client.user.setActivity("$COAI", { type: "WATCHING" });
});worker: python bot.py

client.on("messageCreate", async (msg) => {
  if (msg.author.bot) return;

  const content = msg.content.trim();

  // Lệnh kiểm tra ping
  if (content === "$ping") {
    return msg.reply("🏓 Pong! Bot COAI vẫn online!");
  }

  // Khi người dùng tag bot
  if (msg.mentions.has(client.user)) {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=chainopera-ai&vs_currencies=usd&include_24hr_change=true"
      );
      const data = await res.json();

      const price = data["chainopera-ai"]?.usd?.toFixed(4);
      const change = data["chainopera-ai"]?.usd_24h_change?.toFixed(2);
      const emoji = change >= 0 ? "📈" : "📉";
      const color = change >= 0 ? 0x00ff7f : 0xff4040;
      const utc = new Date().toISOString().substring(11, 16);

      const embed = new EmbedBuilder()
        .setColor(color)
        .setTitle("ChainOpera AI ($COAI)")
        .setDescription(
          `🕒 **UTC Time:** ${utc}\n💰 **COAI Price:** $${price} ${emoji} ${change}%\n\n🔗 **CA:** \`0x0A8D6C86e1bcE73fE4D0bD531e1a567306836EA5\``
        )
        .setThumbnail(
          "https://assets.coingecko.com/coins/images/37215/large/chainopera.png"
        )
        .setFooter({ text: "Data from CoinGecko" });

      await msg.reply({ embeds: [embed] });
    } catch (error) {
      console.error(error);
      msg.reply("⚠️ Không thể lấy dữ liệu giá $COAI lúc này.");
    }
  }
});

process.on("unhandledRejection", (err) => console.error(err));
process.on("uncaughtException", (err) => console.error(err));

client.login(TOKEN);
