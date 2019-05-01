function FindProxyForURL(url, host)
{
    var domens = ["kaspersky.ru",
                  "kaspersky.ua",
                  "drweb.ru",
                  "auto.ru",
                  "mail.ru",
                  "ok.ru",
                  "vk.com",
                  "imv4.vk.com",
                  "pp.userapi.com",
                  "vkuseraudio.net",
		  "vkuservideo.net",
		  "vk.cc",
                  "yandex.ru",
                  "yandex.ua",
                  "yandex.com",
                  "kinopoisk.ru",
                  "yandexdatafactory.com",
                  "disk-o.cloud",
                  "yadi.sk",
                  "r.mradx.net",
                  "wallet.webmoney.ru",
		  "login.wmtransfer.com"];
				  
    for (var i = 0; i < domens.length; i++) {
        if (dnsDomainIs(host, domens[i])) {
            return "SOCKS5 socks.zaborona.help:1488";
        }
    }
    return "DIRECT";
}
