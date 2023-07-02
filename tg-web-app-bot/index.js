const  TelegramBot  =  require ( 'node-telegram-bot-api' ) ;

const TOKEN = "6377154038:AAGgidnSnvZVC-k0Xh8_DtffACBZXVzcNcE";
const webAppUrl = '/';

// Создаем бота, который использует «опрос» для получения новых обновлений
const  bot  =  new  TelegramBot ( TOKEN ,  { polling : true } );

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    bot.sendMessage(chatId, 'Received your message');
    console.log("xxx");

    if(text === '/start'){
        await bot.sendMessage(chatId, 'Ниже будет кнопка', {
            reply_markup:{
                keyboard:[
                    [{text:'Заполнить форму'}]
                ]
            }
        })
    }
});
