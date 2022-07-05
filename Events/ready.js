module.exports = (client => {
  
  client.on("ready", async () => {
    client.user.setPresence({ activity: { name: "Renixaus 💖" }, status: "dnd" });
  });
  
});