    // tslint:disable: max-line-length
import { Component, OnInit } from '@angular/core';
import { TemplateRef, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ProductsService } from '../form/services/products.service';
import { Product } from '../form/product';
import { NewsItem, NewsSource } from '../interfaces/index';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  animations: [routerTransition()],
  providers: [ProductsService],
})
export class TablesComponent implements OnInit {
  @ViewChild('readOnlyTemplate', { static: false }) readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate', { static: false }) editTemplate: TemplateRef<any>;

  public mockedSourceNews: Array<NewsSource> = [
    {
    id: 'abc-news',
    name: 'ABC News',
    description: 'Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.',
    url: 'https://abcnews.go.com',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'abc-news-au',
    name: 'ABC News (AU)',
    description: 'Australia\'s most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.',
    url: 'http://www.abc.net.au/news',
    category: 'general',
    language: 'en',
    country: 'au'
    },
    {
    id: 'aftenposten',
    name: 'Aftenposten',
    description: 'Norges ledende nettavis med alltid oppdaterte nyheter innenfor innenriks, utenriks, sport og kultur.',
    url: 'https://www.aftenposten.no',
    category: 'general',
    language: 'no',
    country: 'no'
    },
    {
    id: 'al-jazeera-english',
    name: 'Al Jazeera English',
    description: 'News, analysis from the Middle East and worldwide, multimedia and interactives, opinions, documentaries, podcasts, long reads and broadcast schedule.',
    url: 'http://www.aljazeera.com',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'ansa',
    name: 'ANSA.it',
    description: 'Agenzia ANSA: ultime notizie, foto, video e approfondimenti su: cronaca, politica, economia, regioni, mondo, sport, calcio, cultura e tecnologia.',
    url: 'http://www.ansa.it',
    category: 'general',
    language: 'it',
    country: 'it'
    },
    {
    id: 'argaam',
    name: 'Argaam',
    description: 'ارقام موقع متخصص في متابعة سوق الأسهم السعودي تداول - تاسي - مع تغطيه معمقة لشركات واسعار ومنتجات البتروكيماويات , تقارير مالية الاكتتابات الجديده ',
    url: 'http://www.argaam.com',
    category: 'business',
    language: 'ar',
    country: 'sa'
    },
    {
    id: 'ars-technica',
    name: 'Ars Technica',
    description: 'The PC enthusiast\'s resource. Power users and the tools they love, without computing religion.',
    url: 'http://arstechnica.com',
    category: 'technology',
    language: 'en',
    country: 'us'
    },
    {
    id: 'ary-news',
    name: 'Ary News',
    description: 'ARY News is a Pakistani news channel committed to bring you up-to-the minute Pakistan news and featured stories from around Pakistan and all over the world.',
    url: 'https://arynews.tv/ud/',
    category: 'general',
    language: 'ud',
    country: 'pk'
    },
    {
    id: 'associated-press',
    name: 'Associated Press',
    description: 'The AP delivers in-depth coverage on the international, politics, lifestyle, business, and entertainment news.',
    url: 'https://apnews.com/',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'australian-financial-review',
    name: 'Australian Financial Review',
    description: 'The Australian Financial Review reports the latest news from business, finance, investment and politics, updated in real time. It has a reputation for independent, award-winning journalism and is essential reading for the business and investor community.',
    url: 'http://www.afr.com',
    category: 'business',
    language: 'en',
    country: 'au'
    },
    {
    id: 'axios',
    name: 'Axios',
    description: 'Axios are a new media company delivering vital, trustworthy news and analysis in the most efficient, illuminating and shareable ways possible.',
    url: 'https://www.axios.com',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'bbc-news',
    name: 'BBC News',
    description: 'Use BBC News for up-to-the-minute news, breaking news, video, audio and feature stories. BBC News provides trusted World and UK news as well as local and regional perspectives. Also entertainment, business, science, technology and health news.',
    url: 'http://www.bbc.co.uk/news',
    category: 'general',
    language: 'en',
    country: 'gb'
    },
    {
    id: 'bbc-sport',
    name: 'BBC Sport',
    description: 'The home of BBC Sport online. Includes live sports coverage, breaking news, results, video, audio and analysis on Football, F1, Cricket, Rugby Union, Rugby League, Golf, Tennis and all the main world sports, plus major events such as the Olympic Games.',
    url: 'http://www.bbc.co.uk/sport',
    category: 'sports',
    language: 'en',
    country: 'gb'
    },
    {
    id: 'bild',
    name: 'Bild',
    description: 'Die Seite 1 für aktuelle Nachrichten und Themen, Bilder und Videos aus den Bereichen News, Wirtschaft, Politik, Show, Sport, und Promis.',
    url: 'http://www.bild.de',
    category: 'general',
    language: 'de',
    country: 'de'
    },
    {
    id: 'blasting-news-br',
    name: 'Blasting News (BR)',
    description: 'Descubra a seção brasileira da Blasting News, a primeira revista feita pelo  público, com notícias globais e vídeos independentes. Junte-se a nós e torne- se um repórter.',
    url: 'https://br.blastingnews.com',
    category: 'general',
    language: 'pt',
    country: 'br'
    },
    {
    id: 'bleacher-report',
    name: 'Bleacher Report',
    description: 'Sports journalists and bloggers covering NFL, MLB, NBA, NHL, MMA, college football and basketball, NASCAR, fantasy sports and more. News, photos, mock drafts, game scores, player profiles and more!',
    url: 'http://www.bleacherreport.com',
    category: 'sports',
    language: 'en',
    country: 'us'
    },
    {
    id: 'bloomberg',
    name: 'Bloomberg',
    description: 'Bloomberg delivers business and markets news, data, analysis, and video to the world, featuring stories from Businessweek and Bloomberg News.',
    url: 'http://www.bloomberg.com',
    category: 'business',
    language: 'en',
    country: 'us'
    },
    {
    id: 'breitbart-news',
    name: 'Breitbart News',
    description: 'Syndicated news and opinion website providing continuously updated headlines to top news and analysis sources.',
    url: 'http://www.breitbart.com',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'business-insider',
    name: 'Business Insider',
    description: 'Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.',
    url: 'http://www.businessinsider.com',
    category: 'business',
    language: 'en',
    country: 'us'
    },
    {
    id: 'business-insider-uk',
    name: 'Business Insider (UK)',
    description: 'Business Insider is a fast-growing business site with deep financial, media, tech, and other industry verticals. Launched in 2007, the site is now the largest business news site on the web.',
    url: 'http://uk.businessinsider.com',
    category: 'business',
    language: 'en',
    country: 'gb'
    },
    {
    id: 'buzzfeed',
    name: 'Buzzfeed',
    description: 'BuzzFeed is a cross-platform, global network for news and entertainment that generates seven billion views each month.',
    url: 'https://www.buzzfeed.com',
    category: 'entertainment',
    language: 'en',
    country: 'us'
    },
    {
    id: 'cbc-news',
    name: 'CBC News',
    description: 'CBC News is the division of the Canadian Broadcasting Corporation responsible for the news gathering and production of news programs on the corporation\'s English-language operations, namely CBC Television, CBC Radio, CBC News Network, and CBC.ca.',
    url: 'http://www.cbc.ca/news',
    category: 'general',
    language: 'en',
    country: 'ca'
    },
    {
    id: 'cbs-news',
    name: 'CBS News',
    description: 'CBS News: dedicated to providing the best in journalism under standards it pioneered at the dawn of radio and television and continue in the digital age.',
    url: 'http://www.cbsnews.com',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'cnbc',
    name: 'CNBC',
    description: 'Get latest business news on stock markets, financial & earnings on CNBC. View world markets streaming charts & video; check stock tickers and quotes.',
    url: 'http://www.cnbc.com',
    category: 'business',
    language: 'en',
    country: 'us'
    },
    {
    id: 'cnn',
    name: 'CNN',
    description: 'View the latest news and breaking news today for U.S., world, weather, entertainment, politics and health at CNN',
    url: 'http://us.cnn.com',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'cnn-es',
    name: 'CNN Spanish',
    description: 'Lee las últimas noticias e información sobre Latinoamérica, Estados Unidos, mundo, entretenimiento, política, salud, tecnología y deportes en CNNEspañol.com.',
    url: 'http://cnnespanol.cnn.com/',
    category: 'general',
    language: 'es',
    country: 'us'
    },
    {
    id: 'crypto-coins-news',
    name: 'Crypto Coins News',
    description: 'Providing breaking cryptocurrency news - focusing on Bitcoin, Ethereum, ICOs, blockchain technology, and smart contracts.',
    url: 'https://www.ccn.com',
    category: 'technology',
    language: 'en',
    country: 'us'
    },
    {
    id: 'der-tagesspiegel',
    name: 'Der Tagesspiegel',
    description: 'Nachrichten, News und neueste Meldungen aus dem Inland und dem Ausland - aktuell präsentiert von tagesspiegel.de.',
    url: 'http://www.tagesspiegel.de',
    category: 'general',
    language: 'de',
    country: 'de'
    },
    {
    id: 'die-zeit',
    name: 'Die Zeit',
    description: 'Aktuelle Nachrichten, Kommentare, Analysen und Hintergrundberichte aus Politik, Wirtschaft, Gesellschaft, Wissen, Kultur und Sport lesen Sie auf ZEIT ONLINE.',
    url: 'http://www.zeit.de/index',
    category: 'business',
    language: 'de',
    country: 'de'
    },
    {
    id: 'el-mundo',
    name: 'El Mundo',
    description: 'Noticias, actualidad, álbumes, debates, sociedad, servicios, entretenimiento y última hora en España y el mundo.',
    url: 'http://www.elmundo.es',
    category: 'general',
    language: 'es',
    country: 'es'
    },
    {
    id: 'engadget',
    name: 'Engadget',
    description: 'Engadget is a web magazine with obsessive daily coverage of everything new in gadgets and consumer electronics.',
    url: 'https://www.engadget.com',
    category: 'technology',
    language: 'en',
    country: 'us'
    },
    {
    id: 'entertainment-weekly',
    name: 'Entertainment Weekly',
    description: 'Online version of the print magazine includes entertainment news, interviews, reviews of music, film, TV and books, and a special area for magazine subscribers.',
    url: 'http://www.ew.com',
    category: 'entertainment',
    language: 'en',
    country: 'us'
    },
    {
    id: 'espn',
    name: 'ESPN',
    description: 'ESPN has up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, MLB, NBA, College Football, NCAA Basketball and more.',
    url: 'http://espn.go.com',
    category: 'sports',
    language: 'en',
    country: 'us'
    },
    {
    id: 'espn-cric-info',
    name: 'ESPN Cric Info',
    description: 'ESPN Cricinfo provides the most comprehensive cricket coverage available including live ball-by-ball commentary, news, unparalleled statistics, quality editorial comment and analysis.',
    url: 'http://www.espncricinfo.com/',
    category: 'sports',
    language: 'en',
    country: 'us'
    },
    {
    id: 'financial-post',
    name: 'Financial Post',
    description: 'Find the latest happenings in the Canadian Financial Sector and stay up to date with changing trends in Business Markets. Read trading and investing advice from professionals.',
    url: 'http://business.financialpost.com',
    category: 'business',
    language: 'en',
    country: 'ca'
    },
    {
    id: 'focus',
    name: 'Focus',
    description: 'Minutenaktuelle Nachrichten und Service-Informationen von Deutschlands modernem Nachrichtenmagazin.',
    url: 'http://www.focus.de',
    category: 'general',
    language: 'de',
    country: 'de'
    },
    {
    id: 'football-italia',
    name: 'Football Italia',
    description: 'Italian football news, analysis, fixtures and results for the latest from Serie A, Serie B and the Azzurri.',
    url: 'http://www.football-italia.net',
    category: 'sports',
    language: 'en',
    country: 'it'
    },
    {
    id: 'fortune',
    name: 'Fortune',
    description: 'Fortune 500 Daily and Breaking Business News',
    url: 'http://fortune.com',
    category: 'business',
    language: 'en',
    country: 'us'
    },
    {
    id: 'four-four-two',
    name: 'FourFourTwo',
    description: 'The latest football news, in-depth features, tactical and statistical analysis from FourFourTwo, the UK&#039;s favourite football monthly.',
    url: 'http://www.fourfourtwo.com/news',
    category: 'sports',
    language: 'en',
    country: 'gb'
    },
    {
    id: 'fox-news',
    name: 'Fox News',
    description: 'Breaking News, Latest News and Current News from FOXNews.com. Breaking news and video. Latest Current News: U.S., World, Entertainment, Health, Business, Technology, Politics, Sports.',
    url: 'http://www.foxnews.com',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'fox-sports',
    name: 'Fox Sports',
    description: 'Find live scores, player and team news, videos, rumors, stats, standings, schedules and fantasy games on FOX Sports.',
    url: 'http://www.foxsports.com',
    category: 'sports',
    language: 'en',
    country: 'us'
    },
    {
    id: 'globo',
    name: 'Globo',
    description: 'Só na globo.com você encontra tudo sobre o conteúdo e marcas do Grupo Globo. O melhor acervo de vídeos online sobre entretenimento, esportes e jornalismo do Brasil.',
    url: 'http://www.globo.com/',
    category: 'general',
    language: 'pt',
    country: 'br'
    },
    {
    id: 'google-news',
    name: 'Google News',
    description: 'Comprehensive, up-to-date news coverage, aggregated from sources all over the world by Google News.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'google-news-ar',
    name: 'Google News (Argentina)',
    description: 'Completa cobertura actualizada de noticias agregadas a partir de fuentes de todo el mundo por Google Noticias.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'es',
    country: 'ar'
    },
    {
    id: 'google-news-au',
    name: 'Google News (Australia)',
    description: 'Comprehensive, up-to-date Australia news coverage, aggregated from sources all over the world by Google News.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'en',
    country: 'au'
    },
    {
    id: 'google-news-br',
    name: 'Google News (Brasil)',
    description: 'Cobertura jornalística abrangente e atualizada, agregada de fontes do mundo inteiro pelo Google Notícias.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'pt',
    country: 'br'
    },
    {
    id: 'google-news-ca',
    name: 'Google News (Canada)',
    description: 'Comprehensive, up-to-date Canada news coverage, aggregated from sources all over the world by Google News.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'en',
    country: 'ca'
    },
    {
    id: 'google-news-fr',
    name: 'Google News (France)',
    description: 'Informations complètes et à jour, compilées par Google Actualités à partir de sources d&#39;actualités du monde entier.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'fr',
    country: 'fr'
    },
    {
    id: 'google-news-in',
    name: 'Google News (India)',
    description: 'Comprehensive, up-to-date India news coverage, aggregated from sources all over the world by Google News.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'en',
    country: 'in'
    },
    {
    id: 'google-news-is',
    name: 'Google News (Israel)',
    description: 'כיסוי מקיף ועדכני של חדשות שהצטברו ממקורות בכל העולם על ידי &#39;חדשות Google&#39;.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'he',
    country: 'is'
    },
    {
    id: 'google-news-it',
    name: 'Google News (Italy)',
    description: 'Copertura giornalistica completa e aggiornata ottenuta combinando fonti di notizie in tutto il mondo attraverso Google News.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'it',
    country: 'it'
    },
    {
    id: 'google-news-ru',
    name: 'Google News (Russia)',
    description: 'Исчерпывающая и актуальная информация, собранная службой &quot;Новости Google&quot; со всего света.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'ru',
    country: 'ru'
    },
    {
    id: 'google-news-sa',
    name: 'Google News (Saudi Arabia)',
    description: 'تغطية شاملة ومتجددة للأخبار، تم جمعها من مصادر أخبار من جميع أنحاء العالم بواسطة أخبار Google.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'ar',
    country: 'sa'
    },
    {
    id: 'google-news-uk',
    name: 'Google News (UK)',
    description: 'Comprehensive, up-to-date UK news coverage, aggregated from sources all over the world by Google News.',
    url: 'https://news.google.com',
    category: 'general',
    language: 'en',
    country: 'gb'
    },
    {
    id: 'goteborgs-posten',
    name: 'Göteborgs-Posten',
    description: 'Göteborgs-Posten, abbreviated GP, is a major Swedish language daily newspaper published in Gothenburg, Sweden.',
    url: 'http://www.gp.se',
    category: 'general',
    language: 'se',
    country: 'se'
    },
    {
    id: 'gruenderszene',
    name: 'Gruenderszene',
    description: 'Online-Magazin für Startups und die digitale Wirtschaft. News und Hintergründe zu Investment, VC und Gründungen.',
    url: 'http://www.gruenderszene.de',
    category: 'technology',
    language: 'de',
    country: 'de'
    },
    {
    id: 'hacker-news',
    name: 'Hacker News',
    description: 'Hacker News is a social news website focusing on computer science and entrepreneurship. It is run by Paul Graham\'s investment fund and startup incubator, Y Combinator. In general, content that can be submitted is defined as "anything that gratifies one\'s intellectual curiosity".',
    url: 'https://news.ycombinator.com',
    category: 'technology',
    language: 'en',
    country: 'us'
    },
    {
    id: 'handelsblatt',
    name: 'Handelsblatt',
    description: 'Auf Handelsblatt lesen sie Nachrichten über Unternehmen, Finanzen, Politik und Technik. Verwalten Sie Ihre Finanzanlagen mit Hilfe unserer Börsenkurse.',
    url: 'http://www.handelsblatt.com',
    category: 'business',
    language: 'de',
    country: 'de'
    },
    {
    id: 'ign',
    name: 'IGN',
    description: 'IGN is your site for Xbox One, PS4, PC, Wii-U, Xbox 360, PS3, Wii, 3DS, PS Vita and iPhone games with expert reviews, news, previews, trailers, cheat codes, wiki guides and walkthroughs.',
    url: 'http://www.ign.com',
    category: 'entertainment',
    language: 'en',
    country: 'us'
    },
    {
    id: 'il-sole-24-ore',
    name: 'Il Sole 24 Ore',
    description: 'Notizie di economia, cronaca italiana ed estera, quotazioni borsa in tempo reale e di finanza, norme e tributi, fondi e obbligazioni, mutui, prestiti e lavoro a cura de Il Sole 24 Ore.',
    url: 'https://www.ilsole24ore.com',
    category: 'business',
    language: 'it',
    country: 'it'
    },
    {
    id: 'independent',
    name: 'Independent',
    description: 'National morning quality (tabloid) includes free online access to news and supplements. Insight by Robert Fisk and various other columnists.',
    url: 'http://www.independent.co.uk',
    category: 'general',
    language: 'en',
    country: 'gb'
    },
    {
    id: 'infobae',
    name: 'Infobae',
    description: 'Noticias de Argentina y del mundo en tiempo real. Información, videos y fotos sobre los hechos más relevantes y sus protagonistas. Léelo antes en infobae.',
    url: 'http://www.infobae.com/?noredirect',
    category: 'general',
    language: 'es',
    country: 'ar'
    },
    {
    id: 'info-money',
    name: 'InfoMoney',
    description: 'No InfoMoney você encontra tudo o que precisa sobre dinheiro. Ações, investimentos, bolsas de valores e muito mais. Aqui você encontra informação que vale dinheiro!',
    url: 'https://www.infomoney.com.br',
    category: 'business',
    language: 'pt',
    country: 'br'
    },
    {
    id: 'la-gaceta',
    name: 'La Gaceta',
    description: 'El diario de Tucumán, noticias 24 horas online - San Miguel de Tucumán - Argentina - Ultimo momento - Ultimas noticias.',
    url: 'http://www.lagaceta.com.ar',
    category: 'general',
    language: 'es',
    country: 'ar'
    },
    {
    id: 'la-nacion',
    name: 'La Nacion',
    description: 'Información confiable en Internet. Noticias de Argentina y del mundo - ¡Informate ya!',
    url: 'http://www.lanacion.com.ar',
    category: 'general',
    language: 'es',
    country: 'ar'
    },
    {
    id: 'la-repubblica',
    name: 'La Repubblica',
    description: 'Breaking News, Latest News and Current News from FOXNews.com. Breaking news and video. Latest Current News: U.S., World, Entertainment, Health, Business, Technology, Politics, Sports.',
    url: 'http://www.repubblica.it',
    category: 'general',
    language: 'it',
    country: 'it'
    },
    {
    id: 'le-monde',
    name: 'Le Monde',
    description: 'Les articles du journal et toute l\'actualit&eacute; en continu : International, France, Soci&eacute;t&eacute;, Economie, Culture, Environnement, Blogs ...',
    url: 'http://www.lemonde.fr',
    category: 'general',
    language: 'fr',
    country: 'fr'
    },
    {
    id: 'lenta',
    name: 'Lenta',
    description: 'Новости, статьи, фотографии, видео. Семь дней в неделю, 24 часа в сутки.',
    url: 'https://lenta.ru',
    category: 'general',
    language: 'ru',
    country: 'ru'
    },
    {
    id: 'lequipe',
    name: 'L\'equipe',
    description: 'Le sport en direct sur L\'EQUIPE.fr. Les informations, résultats et classements de tous les sports. Directs commentés, images et vidéos à regarder et à partager !',
    url: 'https://www.lequipe.fr',
    category: 'sports',
    language: 'fr',
    country: 'fr'
    },
    {
    id: 'les-echos',
    name: 'Les Echos',
    description: 'Toute l\'actualité économique, financière et boursière française et internationale sur Les Echos.fr',
    url: 'https://www.lesechos.fr',
    category: 'business',
    language: 'fr',
    country: 'fr'
    },
    {
    id: 'liberation',
    name: 'Libération',
    description: 'Toute l\'actualité en direct - photos et vidéos avec Libération',
    url: 'http://www.liberation.fr',
    category: 'general',
    language: 'fr',
    country: 'fr'
    },
    {
    id: 'marca',
    name: 'Marca',
    description: 'La mejor información deportiva en castellano actualizada minuto a minuto en noticias, vídeos, fotos, retransmisiones y resultados en directo.',
    url: 'http://www.marca.com',
    category: 'sports',
    language: 'es',
    country: 'es'
    },
    {
    id: 'mashable',
    name: 'Mashable',
    description: 'Mashable is a global, multi-platform media and entertainment company.',
    url: 'https://mashable.com',
    category: 'entertainment',
    language: 'en',
    country: 'us'
    },
    {
    id: 'medical-news-today',
    name: 'Medical News Today',
    description: 'Medical news and health news headlines posted throughout the day, every day.',
    url: 'http://www.medicalnewstoday.com',
    category: 'health',
    language: 'en',
    country: 'us'
    },
    {
    id: 'msnbc',
    name: 'MSNBC',
    description: 'Breaking news and in-depth analysis of the headlines, as well as commentary and informed perspectives from The Rachel Maddow Show, Morning Joe & more.',
    url: 'http://www.msnbc.com',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'mtv-news',
    name: 'MTV News',
    description: 'The ultimate news source for music, celebrity, entertainment, movies, and current events on the web. It\'s pop culture on steroids.',
    url: 'http://www.mtv.com/news',
    category: 'entertainment',
    language: 'en',
    country: 'us'
    },
    {
    id: 'mtv-news-uk',
    name: 'MTV News (UK)',
    description: 'All the latest celebrity news, gossip, exclusive interviews and pictures from the world of music and entertainment.',
    url: 'http://www.mtv.co.uk/news',
    category: 'entertainment',
    language: 'en',
    country: 'gb'
    },
    {
    id: 'national-geographic',
    name: 'National Geographic',
    description: 'Reporting our world daily: original nature and science news from National Geographic.',
    url: 'http://news.nationalgeographic.com',
    category: 'science',
    language: 'en',
    country: 'us'
    },
    {
    id: 'national-review',
    name: 'National Review',
    description: 'National Review: Conservative News, Opinion, Politics, Policy, & Current Events.',
    url: 'https://www.nationalreview.com/',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'nbc-news',
    name: 'NBC News',
    description: 'Breaking news, videos, and the latest top stories in world news, business, politics, health and pop culture.',
    url: 'http://www.nbcnews.com',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'news24',
    name: 'News24',
    description: 'South Africa\'s premier news source, provides breaking news on national, world, Africa, sport, entertainment, technology and more.',
    url: 'http://www.news24.com',
    category: 'general',
    language: 'en',
    country: 'za'
    },
    {
    id: 'new-scientist',
    name: 'New Scientist',
    description: 'Breaking science and technology news from around the world. Exclusive stories and expert analysis on space, technology, health, physics, life and Earth.',
    url: 'https://www.newscientist.com/section/news',
    category: 'science',
    language: 'en',
    country: 'us'
    },
    {
    id: 'news-com-au',
    name: 'News.com.au',
    description: 'We say what people are thinking and cover the issues that get people talking balancing Australian and global moments — from politics to pop culture.',
    url: 'http://www.news.com.au',
    category: 'general',
    language: 'en',
    country: 'au'
    },
    {
    id: 'newsweek',
    name: 'Newsweek',
    description: 'Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.',
    url: 'https://www.newsweek.com',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'new-york-magazine',
    name: 'New York Magazine',
    description: 'NYMAG and New York magazine cover the new, the undiscovered, the next in politics, culture, food, fashion, and behavior nationally, through a New York lens.',
    url: 'http://nymag.com',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'next-big-future',
    name: 'Next Big Future',
    description: 'Coverage of science and technology that have the potential for disruption, and analysis of plans, policies, and technology that enable radical improvement.',
    url: 'https://www.nextbigfuture.com',
    category: 'science',
    language: 'en',
    country: 'us'
    },
    {
    id: 'nfl-news',
    name: 'NFL News',
    description: 'The official source for NFL news, schedules, stats, scores and more.',
    url: 'http://www.nfl.com/news',
    category: 'sports',
    language: 'en',
    country: 'us'
    },
    {
    id: 'nhl-news',
    name: 'NHL News',
    description: 'The most up-to-date breaking hockey news from the official source including interviews, rumors, statistics and schedules.',
    url: 'https://www.nhl.com/news',
    category: 'sports',
    language: 'en',
    country: 'us'
    },
    {
    id: 'nrk',
    name: 'NRK',
    description: 'NRK er Norges største tilbud på nett: nyheter fra Norge og verden, lokalnyheter, radio- og tv-program, podcast, vær, helse-, kultur-, underholdning-, humor- og debattstoff.',
    url: 'https://www.nrk.no',
    category: 'general',
    language: 'no',
    country: 'no'
    },
    {
    id: 'politico',
    name: 'Politico',
    description: 'Political news about Congress, the White House, campaigns, lobbyists and issues.',
    url: 'https://www.politico.com',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'polygon',
    name: 'Polygon',
    description: 'Polygon is a gaming website in partnership with Vox Media. Our culture focused site covers games, their creators, the fans, trending stories and entertainment news.',
    url: 'http://www.polygon.com',
    category: 'entertainment',
    language: 'en',
    country: 'us'
    },
    {
    id: 'rbc',
    name: 'RBC',
    description: 'Главные новости политики, экономики и бизнеса, комментарии аналитиков, финансовые данные с российских и мировых биржевых систем на сайте rbc.ru.',
    url: 'https://www.rbc.ru',
    category: 'general',
    language: 'ru',
    country: 'ru'
    },
    {
    id: 'recode',
    name: 'Recode',
    description: 'Get the latest independent tech news, reviews and analysis from Recode with the most informed and respected journalists in technology and media.',
    url: 'http://www.recode.net',
    category: 'technology',
    language: 'en',
    country: 'us'
    },
    {
    id: 'reddit-r-all',
    name: 'Reddit /r/all',
    description: 'Reddit is an entertainment, social news networking service, and news website. Reddit\'s registered community members can submit content, such as text posts or direct links.',
    url: 'https://www.reddit.com/r/all',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'reuters',
    name: 'Reuters',
    description: 'Reuters.com brings you the latest news from around the world, covering breaking news in business, politics, entertainment, technology, video and pictures.',
    url: 'http://www.reuters.com',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'rt',
    name: 'RT',
    description: 'Актуальная картина дня на RT: круглосуточное ежедневное обновление новостей политики, бизнеса, финансов, спорта, науки, культуры. Онлайн-репортажи с места событий. Комментарии экспертов, актуальные интервью, фото и видео репортажи.',
    url: 'https://russian.rt.com',
    category: 'general',
    language: 'ru',
    country: 'ru'
    },
    {
    id: 'rte',
    name: 'RTE',
    description: 'Get all of the latest breaking local and international news stories as they happen, with up to the minute updates and analysis, from Ireland\'s National Broadcaster.',
    url: 'https://www.rte.ie/news',
    category: 'general',
    language: 'en',
    country: 'ie'
    },
    {
    id: 'rtl-nieuws',
    name: 'RTL Nieuws',
    description: 'Volg het nieuws terwijl het gebeurt. RTL Nieuws informeert haar lezers op een onafhankelijke, boeiende en toegankelijke wijze over belangrijke ontwikkelingen in eigen land en de rest van de wereld.',
    url: 'https://www.rtlnieuws.nl/',
    category: 'general',
    language: 'nl',
    country: 'nl'
    },
    {
    id: 'sabq',
    name: 'SABQ',
    description: 'صحيفة الكترونية سعودية هدفها السبق في نقل الحدث بمهنية ومصداقية خدمة للوطن والمواطن.',
    url: 'https://sabq.org',
    category: 'general',
    language: 'ar',
    country: 'sa'
    },
    {
    id: 'spiegel-online',
    name: 'Spiegel Online',
    description: 'Deutschlands führende Nachrichtenseite. Alles Wichtige aus Politik, Wirtschaft, Sport, Kultur, Wissenschaft, Technik und mehr.',
    url: 'http://www.spiegel.de',
    category: 'general',
    language: 'de',
    country: 'de'
    },
    {
    id: 'svenska-dagbladet',
    name: 'Svenska Dagbladet',
    description: 'Sveriges ledande mediesajt - SvD.se. Svenska Dagbladets nyhetssajt låter läsarna ta plats och fördjupar nyheterna.',
    url: 'https://www.svd.se',
    category: 'general',
    language: 'se',
    country: 'se'
    },
    {
    id: 't3n',
    name: 'T3n',
    description: 'Das Online-Magazin bietet Artikel zu den Themen E-Business, Social Media, Startups und Webdesign.',
    url: 'https://t3n.de',
    category: 'technology',
    language: 'de',
    country: 'de'
    },
    {
    id: 'talksport',
    name: 'TalkSport',
    description: 'Tune in to the world\'s biggest sports radio station - Live Premier League football coverage, breaking sports news, transfer rumours &amp; exclusive interviews.',
    url: 'http://talksport.com',
    category: 'sports',
    language: 'en',
    country: 'gb'
    },
    {
    id: 'techcrunch',
    name: 'TechCrunch',
    description: 'TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.',
    url: 'https://techcrunch.com',
    category: 'technology',
    language: 'en',
    country: 'us'
    },
    {
    id: 'techcrunch-cn',
    name: 'TechCrunch (CN)',
    description: 'TechCrunch is a leading technology media property, dedicated to obsessively profiling startups, reviewing new Internet products, and breaking tech news.',
    url: 'https://techcrunch.cn',
    category: 'technology',
    language: 'zh',
    country: 'zh'
    },
    {
    id: 'techradar',
    name: 'TechRadar',
    description: 'The latest technology news and reviews, covering computing, home entertainment systems, gadgets and more.',
    url: 'http://www.techradar.com',
    category: 'technology',
    language: 'en',
    country: 'us'
    },
    {
    id: 'the-american-conservative',
    name: 'The American Conservative',
    description: 'Realism and reform. A new voice for a new generation of conservatives.',
    url: 'http://www.theamericanconservative.com/',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'the-globe-and-mail',
    name: 'The Globe And Mail',
    description: 'The Globe and Mail offers the most authoritative news in Canada, featuring national and international news.',
    url: 'https://www.theglobeandmail.com',
    category: 'general',
    language: 'en',
    country: 'ca'
    },
    {
    id: 'the-hill',
    name: 'The Hill',
    description: 'The Hill is a top US political website, read by the White House and more lawmakers than any other site -- vital for policy, politics and election campaigns.',
    url: 'http://thehill.com',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'the-hindu',
    name: 'The Hindu',
    description: 'The Hindu. latest news, analysis, comment, in-depth coverage of politics, business, sport, environment, cinema and arts from India\'s national newspaper.',
    url: 'http://www.thehindu.com',
    category: 'general',
    language: 'en',
    country: 'in'
    },
    {
    id: 'the-huffington-post',
    name: 'The Huffington Post',
    description: 'The Huffington Post is a politically liberal American online news aggregator and blog that has both localized and international editions founded by Arianna Huffington, Kenneth Lerer, Andrew Breitbart, and Jonah Peretti, featuring columnists.',
    url: 'http://www.huffingtonpost.com',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'the-irish-times',
    name: 'The Irish Times',
    description: 'The Irish Times online. Latest news including sport, analysis, business, weather and more from the definitive brand of quality news in Ireland.',
    url: 'https://www.irishtimes.com',
    category: 'general',
    language: 'en',
    country: 'ie'
    },
    {
    id: 'the-jerusalem-post',
    name: 'The Jerusalem Post',
    description: 'The Jerusalem Post is the leading online newspaper for English speaking Jewry since 1932, bringing news and updates from the Middle East and all over the Jewish world.',
    url: 'https://www.jpost.com/',
    category: 'general',
    language: 'en',
    country: 'is'
    },
    {
    id: 'the-lad-bible',
    name: 'The Lad Bible',
    description: 'The LAD Bible is one of the largest community for guys aged 16-30 in the world. Send us your funniest pictures and videos!',
    url: 'https://www.theladbible.com',
    category: 'entertainment',
    language: 'en',
    country: 'gb'
    },
    {
    id: 'the-next-web',
    name: 'The Next Web',
    description: 'The Next Web is one of the world’s largest online publications that delivers an international perspective on the latest news about Internet technology, business and culture.',
    url: 'http://thenextweb.com',
    category: 'technology',
    language: 'en',
    country: 'us'
    },
    {
    id: 'the-sport-bible',
    name: 'The Sport Bible',
    description: 'TheSPORTbible is one of the largest communities for sports fans across the world. Send us your sporting pictures and videos!',
    url: 'https://www.thesportbible.com',
    category: 'sports',
    language: 'en',
    country: 'gb'
    },
    {
    id: 'the-times-of-india',
    name: 'The Times of India',
    description: 'Times of India brings the Latest News and Top Breaking headlines on Politics and Current Affairs in India and around the World, Sports, Business, Bollywood News and Entertainment, Science, Technology, Health and Fitness news, Cricket and opinions from leading columnists.',
    url: 'http://timesofindia.indiatimes.com',
    category: 'general',
    language: 'en',
    country: 'in'
    },
    {
    id: 'the-verge',
    name: 'The Verge',
    description: 'The Verge covers the intersection of technology, science, art, and culture.',
    url: 'http://www.theverge.com',
    category: 'technology',
    language: 'en',
    country: 'us'
    },
    {
    id: 'the-wall-street-journal',
    name: 'The Wall Street Journal',
    description: 'WSJ online coverage of breaking news and current headlines from the US and around the world. Top stories, photos, videos, detailed analysis and in-depth reporting.',
    url: 'http://www.wsj.com',
    category: 'business',
    language: 'en',
    country: 'us'
    },
    {
    id: 'the-washington-post',
    name: 'The Washington Post',
    description: 'Breaking news and analysis on politics, business, world national news, entertainment more. In-depth DC, Virginia, Maryland news coverage including traffic, weather, crime, education, restaurant reviews and more.',
    url: 'https://www.washingtonpost.com',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'the-washington-times',
    name: 'The Washington Times',
    description: 'The Washington Times delivers breaking news and commentary on the issues that affect the future of our nation.',
    url: 'https://www.washingtontimes.com/',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'time',
    name: 'Time',
    description: 'Breaking news and analysis from TIME.com. Politics, world news, photos, video, tech reviews, health, science and entertainment news.',
    url: 'http://time.com',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'usa-today',
    name: 'USA Today',
    description: 'Get the latest national, international, and political news at USATODAY.com.',
    url: 'http://www.usatoday.com/news',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'vice-news',
    name: 'Vice News',
    description: 'Vice News is Vice Media, Inc.\'s current affairs channel, producing daily documentary essays and video through its website and YouTube channel. It promotes itself on its coverage of "under - reported stories".',
    url: 'https://news.vice.com',
    category: 'general',
    language: 'en',
    country: 'us'
    },
    {
    id: 'wired',
    name: 'Wired',
    description: 'Wired is a monthly American magazine, published in print and online editions, that focuses on how emerging technologies affect culture, the economy, and politics.',
    url: 'https://www.wired.com',
    category: 'technology',
    language: 'en',
    country: 'us'
    },
    {
    id: 'wired-de',
    name: 'Wired.de',
    description: 'Wired reports on how emerging technologies affect culture, the economy and politics.',
    url: 'https://www.wired.de',
    category: 'technology',
    language: 'de',
    country: 'de'
    },
    {
    id: 'wirtschafts-woche',
    name: 'Wirtschafts Woche',
    description: 'Das Online-Portal des führenden Wirtschaftsmagazins in Deutschland. Das Entscheidende zu Unternehmen, Finanzen, Erfolg und Technik.',
    url: 'http://www.wiwo.de',
    category: 'business',
    language: 'de',
    country: 'de'
    },
    {
    id: 'xinhua-net',
    name: 'Xinhua Net',
    description: '中国主要重点新闻网站,依托新华社遍布全球的采编网络,记者遍布世界100多个国家和地区,地方频道分布全国31个省市自治区,每天24小时同时使用6种语言滚动发稿,权威、准确、及时播发国内外重要新闻和重大突发事件,受众覆盖200多个国家和地区,发展论坛是全球知名的中文论坛。',
    url: 'http://xinhuanet.com/',
    category: 'general',
    language: 'zh',
    country: 'zh'
    },
    {
    id: 'ynet',
    name: 'Ynet',
    description: 'ynet דף הבית: אתר החדשות המוביל בישראל מבית ידיעות אחרונות. סיקור מלא של חדשות מישראל והעולם, ספורט, כלכלה, תרבות, אוכל, מדע וטבע, כל מה שקורה וכל מה שמעניין ב ynet.',
    url: 'http://www.ynet.co.il',
    category: 'general',
    language: 'he',
    country: 'is'
    }
    ];

  public mockedNews: Array<NewsItem> = [
    {
    source: {
    id: 'techcrunch',
    name: 'TechCrunch'
    },
    author: 'Jonathan Shieber',
    title: 'All tulips must wilt',
    description: 'It’s a bad day in the world of cryptocurrency. After recovering some during the summer, the value of bitcoin and other cryptocurrencies are sharply down over the last several weeks. Looking back a month, bitcoin was worth around $8,500 a coin. Today it’s wort…',
    url: 'http://techcrunch.com/2019/12/18/all-tulips-must-wilt/',
    urlToImage: 'https://techcrunch.com/wp-content/uploads/2019/12/Screen-Shot-2019-12-18-at-9.39.21-AM.png?w=669',
    publishedAt: '2019-12-18T15:17:17Z',
    content: 'It’s a bad day in the world of cryptocurrency. After recovering some during the summer, the value of bitcoin and other cryptocurrencies are sharply down over the last several weeks. Looking back a month, bitcoin was worth around $8,500 a coin. Today it’s wort… [+673 chars]'
    },
    {
    source: {
    id: 'techcrunch',
    name: 'TechCrunch'
    },
    author: 'Josh Constine',
    title: 'Alchemy is secretly fixing blockchain’s node nightmare',
    description: 'The top cryptocurrency companies have quietly begun to outsource their infrastructure problems to a tiny stealth startup. It’s called Alchemy. Today it’s making the big public reveal of it’s technology that could help developers finally build the killer use c…',
    url: 'http://techcrunch.com/2019/12/17/alchemy-blockchain/',
    urlToImage: 'https://techcrunch.com/wp-content/uploads/2019/12/Alchemy-Blockchain.png?w=709',
    publishedAt: '2019-12-17T12:00:08Z',
    content: 'The top cryptocurrency companies have quietly begun to outsource their infrastructure problems to a tiny stealth startup. It’s called Alchemy. Today it’s making the big public reveal of it’s technology that could help developers finally build the killer use c… [+3366 chars]'
    },
    {
    source: {
    id: null,
    name: 'Gizmodo.com'
    },
    author: 'Jennings Brown',
    title: 'Investors Want to Exhume Body of Crypto-CEO Who Had the Password to Millions In Bitcoin',
    description: 'It’s been about a year since users of Canadian cryptocurrency exchange QuadrigaCX were informed that the company’s CEO unexpectedly died, taking the password that accessed most the money from their accounts with him to the grave. And now, those clients want t…',
    url: 'https://gizmodo.com/investors-want-to-exhume-body-of-crypto-ceo-who-had-the-1840491773',
    urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/gvk6joiyjtoot0lby02h.png',
    publishedAt: '2019-12-17T22:50:00Z',
    content: 'Its been about a year since users of Canadian cryptocurrency exchange QuadrigaCX were informed that the companys CEO unexpectedly died, taking the password that accessed most the money from their accounts with him to the grave. And now, those clients want to … [+1606 chars]'
    },
    {
    source: {
    id: 'business-insider',
    name: 'Business Insider'
    },
    author: 'Trista Kelley',
    title: 'No, bitcoin is not the new gold',
    description: 'Bitcoin bulls like to claim that bitcoin is a great haven investment, like gold, in times of geopolitical uncertainty. "These people ignore all the times that it moves inversely with sentiment," says Oanda\'s Craig Erlam. "Bitcoin is not gold and certainly not…',
    url: 'https://markets.businessinsider.com/currencies/news/bitcoin-not-new-gold-price-doesnt-correlate-safe-haven-asset-2020-1-1028798749',
    urlToImage: 'https://images.markets.businessinsider.com/image/5e145a76855cc2346900f816-2400/shutterstock241760587.jpg',
    publishedAt: '2020-01-07T11:19:15Z',
    content: 'Shutterstock\r\n<ul><li>Bitcoin bulls like to claim that bitcoin is a great haven investment, like gold, in times of geopolitical uncertainty. </li><li>"These people ignore all the times that it moves inversely with sentiment," says Oanda\'s Craig Erlam.</li><li… [+2002 chars]'
    },
    {
    source: {
    id: 'the-next-web',
    name: 'The Next Web'
    },
    author: 'Satoshi Nakaboto',
    title: 'Satoshi Nakaboto: ‘Cryptocurrency isn’t a sausage-fest? Study suggests 43% of Bitcoin investors are women’',
    description: 'Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Hannah Arendt used to say: Time to learn s…',
    url: 'https://thenextweb.com/hardfork/2019/12/16/satoshi-nakaboto-cryptocurrency-isnt-a-sausage-fest-study-suggests-43-of-bitcoin-investors-are-women/',
    urlToImage: 'https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864',
    publishedAt: '2019-12-16T10:04:12Z',
    content: 'Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Hannah Arendt used to say: Time to lea… [+2783 chars]'
    },
    {
    source: {
    id: 'the-next-web',
    name: 'The Next Web'
    },
    author: 'Satoshi Nakaboto',
    title: 'Satoshi Nakaboto: ‘John McAfee refuses to eat his dick’',
    description: 'Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Satoshi Nakamoto used to say: We’re on the…',
    url: 'https://thenextweb.com/hardfork/2020/01/06/satoshi-nakaboto-john-mcafee-refuses-to-eat-his-dick/',
    urlToImage: 'https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864',
    publishedAt: '2020-01-06T09:41:13Z',
    content: 'Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Satoshi Nakamoto used to say: Were on the … [+2502 chars]'
    },
    {
    source: {
    id: null,
    name: 'Gizmodo.com'
    },
    author: 'Matt Novak',
    title: 'YouTube Restores Hundreds of Cryptocurrency Videos After Flagging Them as Harmful',
    description: 'YouTube has restored hundreds of videos from dozens of channels that focus on crypotcurrency after they were removed earlier in the week. YouTubers like Chris Dunn report that their videos were flagged by YouTube for “harmful or dangerous content” and “sale o…',
    url: 'https://gizmodo.com/youtube-restores-hundreds-of-cryptocurrency-videos-afte-1840677798',
    urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/jrzlic4p0n0uwyzweowt.jpg',
    publishedAt: '2019-12-27T16:38:00Z',
    content: 'YouTube has restored hundreds of videos from dozens of channels that focus on crypotcurrency after they were removed earlier in the week. YouTubers like Chris Dunn report that their videos were flagged by YouTube for harmful or dangerous content and sale of r… [+2062 chars]'
    },
    {
    source: {
    id: 'the-next-web',
    name: 'The Next Web'
    },
    author: 'Satoshi Nakaboto',
    title: 'Satoshi Nakaboto: ‘Bitcoin price dives below $7,000’',
    description: 'Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Jane Didion used to say: Crack open this t…',
    url: 'https://thenextweb.com/hardfork/2019/12/17/satoshi-nakaboto-bitcoin-price-dives-below-7000/',
    urlToImage: 'https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864',
    publishedAt: '2019-12-17T10:50:07Z',
    content: 'Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Jane Didion used to say: Crack open th… [+2589 chars]'
    },
    {
    source: {
    id: 'the-next-web',
    name: 'The Next Web'
    },
    author: 'Satoshi Nakaboto',
    title: 'Satoshi Nakaboto: ‘Company uses excess heat from Bitcoin mining to build office heater’',
    description: 'Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Kant used to say: Your heart must go on! B…',
    url: 'https://thenextweb.com/hardfork/2019/12/20/satoshi-nakaboto-company-uses-excess-heat-from-bitcoin-mining-to-build-office-heater/',
    urlToImage: 'https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864',
    publishedAt: '2019-12-20T10:58:55Z',
    content: 'Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Kant used to say: Your heart must go o… [+2666 chars]'
    },
    {
    source: {
    id: 'the-next-web',
    name: 'The Next Web'
    },
    author: 'Satoshi Nakaboto',
    title: 'Satoshi Nakaboto: ‘Bitcoin consolidates just above $8,000’',
    description: 'Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Marcus Aurelius used to say: We’re on the …',
    url: 'https://thenextweb.com/hardfork/2020/01/13/satoshi-nakaboto-bitcoin-consolidates-just-above-8000/',
    urlToImage: 'https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864',
    publishedAt: '2020-01-13T09:57:34Z',
    content: 'Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Marcus Aurelius used to say: Were on t… [+2584 chars]'
    },
    {
    source: {
    id: 'the-next-web',
    name: 'The Next Web'
    },
    author: 'Satoshi Nakaboto',
    title: 'Satoshi Nakaboto: ‘Wake up and smell the hopium — Bitcoin is up 9.5%’',
    description: 'Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Stephen Hawking used to say: Let’s whip up…',
    url: 'https://thenextweb.com/hardfork/2019/12/19/satoshi-nakaboto-wake-up-and-smell-the-hopium-bitcoin-is-up-9-5/',
    urlToImage: 'https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864',
    publishedAt: '2019-12-19T09:57:56Z',
    content: 'Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Stephen Hawking used to say: Lets whip… [+2783 chars]'
    },
    {
    source: {
    id: 'the-next-web',
    name: 'The Next Web'
    },
    author: 'Satoshi Nakaboto',
    title: 'Satoshi Nakaboto: ‘Bitcoin options start trading on Chicago’s CME exchange’',
    description: 'Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Descartes used to say: Let’s get it! Bitco…',
    url: 'https://thenextweb.com/hardfork/2020/01/14/satoshi-nakaboto-bitcoin-options-start-trading-on-chicagos-cme-exchange/',
    urlToImage: 'https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864',
    publishedAt: '2020-01-14T09:53:25Z',
    content: 'Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Descartes used to say: Lets get it!\r\nB… [+2620 chars]'
    },
    {
    source: {
    id: 'the-next-web',
    name: 'The Next Web'
    },
    author: 'Satoshi Nakaboto',
    title: 'Satoshi Nakaboto: ‘UK crypto exchange Coinfloor to delist Ethereum and Bitcoin Cash’',
    description: 'Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Nightingale used to say: Fight the power! …',
    url: 'https://thenextweb.com/hardfork/2019/12/18/satoshi-nakaboto-uk-crypto-exchange-coinfloor-to-delist-ethereum-and-bitcoin-cash/',
    urlToImage: 'https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864',
    publishedAt: '2019-12-18T09:54:16Z',
    content: 'Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Nightingale used to say: Fight the pow… [+2682 chars]'
    },
    {
    source: {
    id: 'the-next-web',
    name: 'The Next Web'
    },
    author: 'Satoshi Nakaboto',
    title: 'Satoshi Nakaboto: ‘Bitcoin price surges 5% for second day in a row’',
    description: 'Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Nikola Tesla used to say: Intelligence is …',
    url: 'https://thenextweb.com/hardfork/2020/01/08/satoshi-nakaboto-bitcoin-price-surges-5-for-second-day-in-a-row/',
    urlToImage: 'https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864',
    publishedAt: '2020-01-08T09:54:03Z',
    content: 'Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Nikola Tesla used to say: Intelligence… [+2546 chars]'
    },
    {
    source: {
    id: 'the-next-web',
    name: 'The Next Web'
    },
    author: 'Satoshi Nakaboto',
    title: 'Satoshi Nakaboto: ‘Bitcoin price shoots up 5%, nears $8K’',
    description: 'Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Satoshi Nakamoto used to say: Intelligence…',
    url: 'https://thenextweb.com/hardfork/2020/01/07/satoshi-nakaboto-bitcoin-price-shoots-up-5-nears-8k/',
    urlToImage: 'https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864',
    publishedAt: '2020-01-07T10:06:11Z',
    content: 'Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Satoshi Nakamoto used to say: Intellig… [+2846 chars]'
    },
    {
    source: {
    id: 'the-next-web',
    name: 'The Next Web'
    },
    author: 'Satoshi Nakaboto',
    title: 'Satoshi Nakaboto: ‘Bitcoin upgrade makes transactions up to 75% cheaper, 2.5 times faster’',
    description: 'Our robot colleague Satoshi Nakaboto writes about Bitcoin every fucking day. Welcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you what’s been going on with Bitcoin in the past 24 hours. As Jane Didion used to say: Whip it, whip it,…',
    url: 'https://thenextweb.com/hardfork/2020/01/10/satoshi-nakaboto-bitcoin-upgrade-makes-transactions-up-to-75-cheaper-2-5-times-faster/',
    urlToImage: 'https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fbitcoin_today-header_bitcoin_today.jpg&signature=30221b6a68049cc6bc3b58f3ddb38864',
    publishedAt: '2020-01-10T10:01:42Z',
    content: 'Our robot colleague Satoshi Nakaboto writes about Bitcoin BTC every fucking day.\r\nWelcome to another edition of Bitcoin Today, where I, Satoshi Nakaboto, tell you whats been going on with Bitcoin in the past 24 hours. As Jane Didion used to say: Whip it, whip… [+2708 chars]'
    },
    {
    source: {
    id: null,
    name: 'Npr.org'
    },
    author: 'Scott Horsley',
    title: 'China To Test Digital Currency. Could It End Up Challenging The Dollar Globally?',
    description: 'Bitcoin promises users anonymity, but transactions using China\'s digital currency would be tracked by its central bank. Experts say it could someday rival the dollar in international payments.',
    url: 'https://www.npr.org/2020/01/13/795988512/china-to-test-digital-currency-could-it-end-up-challenging-the-dollar-globally',
    urlToImage: 'https://media.npr.org/assets/img/2020/01/13/gettyimages-1030170936_wide-abb25b393a864b44aa8aeb736855bd5098f4eb3b.jpg?s=1400',
    publishedAt: '2020-01-13T22:27:35Z',
    content: 'Alipay and WeChat QR codes for online payment are displayed at a vegetable stall in Nantong in China\'s eastern Jiangsu province. Now the country\'s central bank is preparing to test a digital currency.\r\nSTR/AFP via Getty Images\r\nChina is light years ahead of t… [+4496 chars]'
    },
    {
    source: {
    id: 'business-insider',
    name: 'Business Insider'
    },
    author: 'Weng Cheong',
    title: 'Here are all the ways bitcoin could help address income inequality in the 2020s',
    description: 'As US income inequality reaches a record high, many wonder how blockchain technology and bitcoin fits in the equation. Digital currencies have the potential to bridge the global wealth gap, hedge-fund chief Mark Yusko told Business Insider. Developing regions…',
    url: 'https://www.businessinsider.com/this-is-how-bitcoin-can-end-income-inequality-in-2020',
    urlToImage: 'https://image.businessinsider.com/5dfa6d7271a5ca2d3d2f17f4?width=1200&format=jpeg',
    publishedAt: '2019-12-20T20:08:33Z',
    content: 'The mysterious nature of bitcoin has led to common misperceptions about its use, with many in the mainstream relegating it to the realm of hackers and gamers.\r\nThe history of cryptocurrency shows quite a different purpose: Bitcoin was actually created with th… [+5097 chars]'
    },
    {
    source: {
    id: 'the-next-web',
    name: 'The Next Web'
    },
    author: 'Yessi Bello Perez',
    title: '13 fun Bitcoin and blockchain tweets that epitomize this wild industry',
    description: 'As another year draws to a close in the world of Bitcoin and blockchain, we’ve decided to look back at some of our favorite cryptocurrency tweets of 2019. Some are funny, others are weird, but we’ve loved each and every single one. So, sit back, relax, and en…',
    url: 'https://thenextweb.com/hardfork/2019/12/24/fun-bitcoin-blockchain-tweets-2019/',
    urlToImage: 'https://img-cdn.tnwcdn.com/image/hardfork?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F12%2FUntitled-design-60.jpg&signature=2c5f3c6682595c391a64392245f330d0',
    publishedAt: '2019-12-24T10:00:42Z',
    content: 'As another year draws to a close in the world of Bitcoin BTC and blockchain, weve decided to look back at some of our favorite cryptocurrency tweets of 2019. \r\nSome are funny, others are weird, but weve loved each and every single one. \r\nSo, sit back, relax, … [+4181 chars]'
    },
    {
    source: {
    id: null,
    name: 'Readwrite.com'
    },
    author: 'Jessie Connor',
    title: 'Blockchain – Impending Revolution in Global Stock Trading?',
    description: 'What started out as a ledger for Bitcoin transactions, turned out to have so much more potential. It has become clear that blockchain technology has many promising applications. It’s immutable and decentralized nature makes it appealing to many industries. It…',
    url: 'https://readwrite.com/2019/12/13/blockchain-impending-revolution-in-global-stock-trading/',
    urlToImage: 'https://images.readwrite.com/wp-content/uploads/2019/12/Blockchain-Impending-Revolution-in-Global-Stock-Trading.jpg',
    publishedAt: '2019-12-13T16:00:25Z',
    content: 'What started out as a ledger for Bitcoin transactions, turned out to have so much more potential. It has become clear that blockchain technology has many promising applications.\r\nIt’s immutable and decentralized nature makes it appealing to many industries. I… [+8093 chars]'
    }
    ];

  editedProduct: Product;
  news: Array<Product>;
  isNewRecord: boolean;
  statusMessage: string;
  error: any;

  newsHeader = 'Select preferred source of news';

  constructor(private productService: ProductsService) {
    this.news = new Array<Product>();
  }

  ngOnInit() {
    this.loadProducts();
  }

  onNewsSourceChange(newsSource) {
    this.newsHeader = newsSource;
  }

  private loadProducts() {
    this.productService.getProducts().subscribe(
      data => this.news = data,
      error => {
        this.error = error.message; console.log(error);
      });
  }

  addProduct() {
    this.editedProduct = new Product(undefined, '', '', '', 0, '', 0, '', '', false, '', false);
    this.news.push(this.editedProduct);
    this.isNewRecord = true;
  }

  editProduct(product: Product) {
    this.editedProduct = new Product(
      product._id,
      product.manufacturer,
      product.model,
      product.picture,
      product.price,
      product.description,
      product.diagonal,
      product.typeOfMatrix,
      product.resolution,
      product.support3D,
      product.portInterface,
      product.available
    );
  }

  loadNewsTemplate(newsItem: NewsItem) {
    if (this.editedProduct && this.editedProduct._id === newsItem.source.id) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

  saveProduct() {
    if (this.isNewRecord) {
      this.productService.createProduct(this.editedProduct).subscribe((data: Product) => {
        this.statusMessage = 'Data was added';
        this.loadProducts();
      });
      this.isNewRecord = false;
      this.editedProduct = null;
    } else {
      this.productService.updateProductBase(this.editedProduct._id, this.editedProduct).subscribe(
        (data: Product) => {
          this.statusMessage = 'Data was updated';
          this.loadProducts();
        }, error => console.log(error));
      this.editedProduct = null;
    }
  }

  cancel() {
    if (this.isNewRecord) {
      this.news.pop();
      this.isNewRecord = false;
    }
    this.editedProduct = null;
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product._id).subscribe(data => {
      this.statusMessage = 'Data was deleted',
        this.loadProducts();
    });
  }
}
