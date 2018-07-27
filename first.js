const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "!";
const date = new Date().getTime();
var time = new Date(date);
const fs = require('fs');
var me;

function here(me)
{
    fs.writeFile("c://Musor/Mytest.txt", me, function(err) 
    {
        if(err) 
        {
          return console.log(err);
        }
    });
};

function here1(me1)
{
    me1 = "\r\n" + me1;
    fs.appendFile("c://Musor/Mytest.txt", me1, (err) => 
    {  
        if (err) throw err;
      //  console.log('The lyrics were updated!');
    });
};

bot.login("NDcxMjYwMTY5NDY1MjMzNDA5.DjnVSQ.jAA407R02psReLloTRAta5IezbQ");

bot.on('ready', () => {
    me = "Bot Launched ...";
    here(me);
    //console.log("Bot Launched ...");
});

bot.on('message', (message) =>
{
    const swearWords = ["Привет", "привет", "Салют", "салют", "Здаова", "здарова", "кусь", "дароу", "hi", "hello", "Hi", "Hello", "shalom", "privet", "здрасти" ,"Sieg Heil"];
    if( swearWords.some(word => message.content.includes(word)) && message.author.id != "471260169465233409") 
    {
    message.reply("Салютыыыыы!!!");
    me1 = "Was wrote a message by " + message.author.username + ":::::: " + time;
    here1(me1);
    //console.log("Was wrote a message by " + message.author.username + ":::::: ${time}");
    }

    const swearWords2 = ["ББ" ,"бб" ,"пока" ,"bb" ,"Bb"];
    if( swearWords2.some(word => message.content.includes(word)) && message.author.id != "471260169465233409") 
    {
    message.reply("бб :wave:");
    me1 = "Was wrote a message by " + message.author.username + ":::::: " + time;
    here1(me1);
    }

    if (message.content == "!кв" || message.content == "!cv" || message.content == "!КВ" || message.content == "!CV")
    {
        if(message.member.roles.has("471974391627120640"))
        {
            message.delete();
            message.channel.send("<@&462631562543104001>\nПиздюки бегом все на\n──▓▓█─▓▓█──▓▓▓▓▓▓█\n──▓▓█▓▓█───▓▓█──▓▓█\n──▓▓▓▓█────▓▓█───▓▓█\n──▓▓▓▓█────▓▓▓▓▓▓▓█\n──▓▓█▓▓█───▓▓█───▓▓█\n──▓▓█─▓▓█──▓▓█────▓▓█\n──▓▓█──▓▓█─▓▓▓▓▓▓▓▓█");
        }
        else 
        message.channel.send("У вас нет нужных прав!");
    }


    if (message.content.startsWith(prefix + "del"))
    {
        if(message.member.roles.has("471974391627120640"))
        {
            async function purge()
            {   
                var l = message.content.length;
                var last = message.content[l -1];

                if(isNaN(message.content[l -1]))
                {
                    message.channel.send("Используй так: " + prefix + "del <номер>");
                    return;

                }
                me1 = "Have been deleted " + last + " rows by " + message.author.username;
               // console.log("\nHave been deleted" + last + " rows by " + message.author.username);
                here1(me1);

                message.channel.bulkDelete(last)
                    .catch(error => message.channel.send('Error: ${error}'));

            }
            purge();
        }
        else 
        message.channel.send("У вас нет нужных прав!");
    }

    if (message.content == "!help")
    {
        message.delete();
        message.author.send("На данный момент можно использовать такие команды как:");
        message.author.send("Всё команды выполняются через префикс ==>  !");
        message.author.send("1)cv либо кв - призвание на кв");
        message.author.send("2)del <номер> - удаляет столько собщений сколько вы указали");
    }

    if (message.content == "!rr")
    {
        var fs = require('fs');
        fs.writeFile("c://Musor/Mytest.txt", "Hey there!", function(err) {
        if(err) 
        {
        return console.log(err);
        }

        console.log("The file was saved!");
        });
        message.delete();
    }
});

bot.on("presenceUpdate", (oldMember, newMember) => 
{
    let date = new Date().getTime();
    let time = new Date(date)
    if (oldMember.presence.status !== newMember.presence.status)
    {
        me1 = newMember.user.username + " is now " + newMember.presence.status + " :::::: " + time;
        here1(me1);
     //   console.log(`${newMember.user.username} is now ${newMember.presence.status} :::::: ${time}`);
    }
});
