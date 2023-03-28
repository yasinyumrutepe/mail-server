# mail-server
Express JS ve Rabbit mq ile Basit Mail API

ENV İçerisindeki SERVER kısmı sunucunun hangi portta çalışacağını belirtir
MAİL gönderimi için öncelikle .env içerisindeki alanları doldurmanız gerekmektedir

npm install ile kütüphaneleri indiriniz daha sonra npm run start ve baska bir terminalde de npm run consumer komutlarını yazınız.

Örnek Gönderim şekli aşagıdaki gibidir HTML içerik gönderebilmektedir sadece 

{
 "from":{
 "name":"tiplay studio",
 "email":"system@obtolab.com"
 },
"to":["yasinautomation34@outlook.com","yasinyt1834@gmail.com"],
"subject":"tiplay studio Talep \u0130\u015flemleri",
"html":"<html><p>Merhaba</p> </html>"
}
