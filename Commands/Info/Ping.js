const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'ping',  //Komut Adı
    category : 'Info',  //Kategori
    description : 'Returns latency and API ping',  //Açıklama
    run : async(client, message, args) => {
      
        var MessageState = "🟢 Mükemmel";
        var APIState = "🟢 Mükemmel";
        var msg = `${Date.now() - message.createdTimestamp}`;
        var api = `${Math.round(client.ws.ping)}`;
      
        if (Number(msg) > 70)  MessageState = "🟢 Güzel";
        if (Number(msg) > 170) MessageState = "🟡 Ortalama";
        if (Number(msg) > 350) MessageState = "🔴 Çok Kötü";
      
        if (Number(api) > 70)  APIState = "🟢 Güzel";
        if (Number(api) > 170) APIState = "🟡 Ortalama";
        if (Number(api) > 350) APIState = "🔴 Çok Kötü";
        if (message.author.bot) return;
      
      const PingEmbed = new MessageEmbed();
      PingEmbed.setColor("#2F3136");
      PingEmbed.setAuthor(message.author.username, message.author.avatarURL());
      PingEmbed.addField("**İşlem İçin Alınan Zaman :**", msg + " ms 📶 | " + MessageState, true);
      PingEmbed.addField("**API State:**", api + " ms 📶 | " + APIState, true);
      PingEmbed.setFooter({ text: `${message.author.tag} Tarafından İstendi` });
      PingEmbed.setTimestamp();
      message.channel.send({ embeds: [PingEmbed] });

    }
}