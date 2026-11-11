# Moderní AI asistenti: mentální model, na kterém záleží

## Proč je to důležité

AI asistenti mění inženýrskou práci, protože snižují náklady na převádění záměrů do činů. Dokážou vysvětlovat kód, navrhovat změny, prohledávat rozsáhlé zdrojové kódy, používat nástroje a pomáhat lidem rychleji se zorientovat v neznámých systémech.

Funguje to ale dobře jen tehdy, když lidé používají správný mentální model. Pokud s AI asistentem zacházíte jako s vyhledávacím polem, získáte hodnotu odpovídající vyhledávacímu poli. Když porozumíte tokenům, kontextu, nástrojům a chování agentů, budete klást lepší otázky, navrhovat lepší pracovní postupy a získávat spolehlivější výsledky.

Příklad: požadavek „oprav tuto chybu“ často vede ke slabým výsledkům. Požadavek „najdi v této službě cestu, která selhává, vysvětli pravděpodobnou hlavní příčinu, uprav pouze dotčený kód a ukaž, jak opravu ověřit“ poskytne asistentovi lepší rámec pro práci.

## Základy NLP

### Co je NLP

Zpracování přirozeného jazyka (Natural Language Processing, NLP) je obor, který se zabývá tím, jak umožnit počítačům pracovat s lidským jazykem. Patří sem čtení, klasifikace, shrnování, překlad, extrakce významu i generování textu.

Jednoduchý příklad: ze věty „Ravi je spokojený s novým telefonem“ může systém NLP rozpoznat, že Ravi je osoba, telefon je produkt a sentiment je pozitivní.

### Proč je jazyk pro stroje obtížný

Lidský jazyk je nejednoznačný. Význam slov se mění podle kontextu. Stejnou myšlenku lze vyjádřit mnoha způsoby a drobná změna formulace může význam obrátit.

Příklad: věta „Tenhle systém je nemocný“ může v jednom kontextu znamenat něco negativního, zatímco v jiném jde o pozitivní slangové vyjádření. Stroje potřebují metody, které si poradí s nejednoznačností, kontextem, gramatikou a významem specifickým pro danou oblast.

### Běžné postupy předzpracování NLP

Starší systémy NLP se ve velké míře spoléhaly na explicitní předzpracování. Moderní LLM toho zvládají mnohem víc interně, ale tyto pojmy nám stále pomáhají pochopit, jak se jazyk připravuje pro výpočty.

- Tokenizace: rozdělení textu na menší jednotky.
- Normalizace: sjednocení podoby textu, například převod na malá písmena nebo odstranění šumu.
- Stop slova: běžná slova jako „a“ nebo „je“, která mohou být pro některé úlohy málo přínosná.
- Stemming: zjednodušení slov na přibližný slovní základ, například „běžící“ na „běž“.
- Lematizace: převedení slov na správný základní tvar, například „lepší“ na „dobrý“, pokud model nebo nástroj rozumí gramatice.

Příklad: vyhledávací systém může normalizovat text „Běhání v TOM cloudu!“ do jednodušší podoby, aby spolehlivěji našel jeho podstatný význam.

## Tokeny a LLM

### Co je token

Token je část textu, kterou model zpracovává jako jednu jednotku. Podle použitého tokenizéru může být token celé slovo, část slova, interpunkční znaménko nebo vzor mezer.

Jednoduchý příklad: slovo „neuvěřitelné“ může být v jednom tokenizéru jediným tokenem a v jiném se rozpadnout na několik částí.

### Proč na tokenizaci záleží

Tokenizace ovlivňuje cenu, rychlost i srozumitelnost. Modely nečtou text jako lidé. Zpracovávají posloupnosti tokenů, takže záleží na tom, jak se text rozdělí.

Pokud úloha spotřebuje příliš mnoho tokenů, může z kontextového okna vytlačit užitečné informace. Nejasná nebo zbytečně rozvláčná formulace zase spotřebovává tokeny, aniž by zlepšovala výsledek.

Přirovnání: tokenizace připomíná rozdělení zásilky do krabic před jejím přijetím do skladu. Sklad pracuje s krabicemi, ne s původními volně loženými předměty. Způsob zabalení ovlivňuje skladování, vyhledávání i potřebný prostor.

Příklad: dlouhý vložený soubor protokolu může spotřebovat tolik tokenů, že skutečná otázka přestane být pro model dobře viditelná.

### Kontextové okno

Kontextové okno je množství tokenizovaných informací, které model dokáže aktivně zohlednit v rámci jedné interakce. Jde o jeho pracovní paměť pro aktuální úlohu.

Záleží na tom, protože o prostor soupeří všechno: vaše pokyny, kód, výstupy nástrojů, předchozí zprávy i načtené dokumenty.

Příklad: pokud vložíte 200 řádků nesouvisejícího výpisu zásobníku, můžete tím vytlačit skutečný požadavek nebo důležitou funkci, kterou má model prozkoumat.

### Co je embedding

Embedding je číselná reprezentace textu, která umisťuje významově podobné výrazy blízko sebe ve vícerozměrném prostoru. Zjednodušeně převádí slova, fráze nebo dokumenty na vektory, které mohou stroje porovnávat.

To je důležité, protože samotné tokeny jsou jen části textu. Embeddingy pomáhají systému zachytit sémantickou podobnost, například jak blízké jsou si výrazy „oprava chyby“ a „vyřešení problému“, i když jsou formulované odlišně.

Příklad: vyhledávací systém dokumentace může na dotaz „jak nastavit ověřování“ najít obsah s názvem „nastavení přihlášení“, protože jejich embeddingy jsou si významově blízké.

### Proč jsou transformery důležité

Transformer je architektura modelu, díky které se moderní LLM staly použitelnými i ve velkém měřítku. Její hlavní předností je schopnost souběžně vyhodnocovat vztahy mezi mnoha tokeny, místo aby text četla striktně po jednom kroku.

Mentální model je jednoduchý: transformer dobře určuje, které části kontextu jsou pro aktuální token nejdůležitější. Díky tomu dokáže propojovat slova napříč dlouhými pasážemi, řídit se pokyny a sledovat vzory v kódu i próze.

Příklad: ve větě „Server se po vyčerpání paměti restartoval“ může model propojit příčinu s „serverem“ tím, že vyhodnotí celou posloupnost, nejen nejbližší slovo.

### Co LLM skutečně dělá

Na nejvyšší úrovni velký jazykový model (Large Language Model, LLM) předpovídá další token na základě předchozích tokenů. Naučil se statistické vzory z obrovského množství textů, kódu a strukturovaných příkladů.

Přívlastek „velký“ odkazuje na velikost samotného modelu: má miliardy parametrů, tedy naučených vah, které tyto vzory uchovávají. Obrovská jsou i trénovací data, ale o velikosti modelu rozhoduje počet jeho parametrů.

Zní to jednoduše, ale ve velkém měřítku to umožňuje působivé schopnosti: vysvětlování, shrnování, generování kódu, klasifikaci, řetězce připomínající uvažování i následování pokynů.

Důležitý mentální model je tento: LLM „neví“ v lidském smyslu. Vytváří pravděpodobná pokračování na základě tréninku, promptu a právě dostupného kontextu.

Příklad: když má vysvětlit funkci, nehledá skrytou tabulku pravd. Vytváří nejpravděpodobnější vysvětlení podle kódu a okolního kontextu.

## Od chatbotů k agentům

Chatbot především odpovídá. Agent dokáže sledovat cíl.

To je zásadní posun. Chatbot odpovídá na aktuální zprávu. Agent může plánovat, vybírat nástroje, prozkoumávat soubory, spouštět kontroly, upravovat svůj postup a pokračovat, dokud úkol skutečně nedokončí.

### Mentální model chatbota

Chování chatbota lze zjednodušit na: přijmout prompt a vytvořit odpověď.

Příklad: „Vysvětli toto chybové hlášení“ je úloha vhodná pro chatbota.

### Mentální model agenta

Chování agenta se spíše podobá tomuto postupu: porozumět cíli, rozdělit práci, získat kontext, použít nástroje, jednat, vyhodnotit výsledek a opakovat.

Příklad: „Najdi hlavní příčinu tohoto neúspěšného testu, uprav kód, spusť příslušné kontroly a shrň opravu“ je úloha vhodná pro agenta.

### Proč na tomto rozdílu záleží

Když přemýšlíte v kategoriích chatbota, optimalizujete jednu dobrou odpověď. Když přemýšlíte v kategoriích agenta, optimalizujete pracovní postup.

To mění způsob, jakým s AI pracujete. Zadáváte cíle, omezení, kritéria úspěchu a kroky ověření. Nežádáte jen o text. Navrhujete malý pracovní systém.

## Moderní vzorec pro agenty

Užitečný moderní vzorec pro agenta vypadá takto: model není pouze generátor textu, ale také koordinátor, který dokáže uvažovat nad kontextem, rozhodovat, kdy použít nástroje, a provést úkol v několika krocích.

### Autonomie

Moderní agent by neměl skončit u první přijatelné odpovědi, když je zjevně potřeba další práce. Měl by pokračovat, dokud úkol nedospěje k užitečnému bodu ukončení.

Příklad: pokud je cílem aktualizovat dokument, agent by neměl pouze navrhnout osnovu. Měl by dokument připravit.

### Používání nástrojů

Schopný agent se může dostat za hranice samotného chatu. Může prohlížet soubory, volat API, prohledávat repozitáře, číst dokumentaci nebo spouštět akce.

Příklad: místo odhadování, co je ve zdrojovém kódu, si agent přečte skutečné soubory.

### Vícekrokové pracovní postupy

Schopný agent dokáže jeden požadavek rozdělit na menší kroky a propojit je.

Příklad: shrnout požadavky, prozkoumat kód, určit rozhodující funkci, upravit soubor, spustit ověření a oznámit výsledek.

### Stav a orchestrace

Práce s agenty vyžaduje také stav. Systém musí sledovat cíl, dosavadní zjištění, provedené změny a to, co je ještě potřeba ověřit.

Tato vrstva orchestrace je stejně důležitá jako model. Bez ní se asistent chová jako výřečný řečník, který ale nedotahuje věci do konce.

Příklad: pokud agent po první opravě zapomene, že test selhal, nedokáže spolehlivě řídit cyklus ladění.

## Proč záleží na správě kontextu

Hlavním praktickým omezením práce s agenty není jen kvalita modelu, ale také kvalita kontextu.

Každý krok pracovního postupu zvyšuje nároky na pracovní paměť modelu:

- původní požadavek
- systémové pokyny
- načtené dokumenty
- výstupy nástrojů
- průběžné plány
- předchozí zprávy v konverzaci

Na tom záleží, protože model může uvažovat pouze nad tím, co se stále vejde do aktivního kontextového okna.

Pokud jsou důležité podrobnosti utopené v šumu, špatně shrnuté nebo vytlačené z dohledu, může agent ztratit směr, i když je základní model kvalitní.

Užitečný mentální model:

- Tokenizace ukazuje, kolik prostoru pracovní postup spotřebuje.
- Embeddingy ukazují, jak je viditelný text sémanticky reprezentován.
- Pozice a self-attention ukazují, jak model v aktuálním kroku přikládá viditelnému kontextu různou váhu.
- Správa stavu uchovává správný kontext, i když se úkol prodlužuje.

Příklad: pokud ladicí agent na začátku úkolu vidí neúspěšný test, ale později dostane dlouhé protokoly, úryvky kódu a dílčí shrnutí, nemusí už být původní podmínku selhání snadné z aktivního kontextu znovu zjistit.

## Rychlé srovnání

| Režim | Základní chování | Typická přednost | Omezení |
| --- | --- | --- | --- |
| Chatbot | Odpovídá na aktuální zprávu | Rychlé vysvětlení nebo návrh textu | Slabé dotahování úkolů a žádné skutečné akce |
| Agent | Plánuje, používá nástroje, jedná a opakuje | Řešení vícekrokových úkolů | Potřebuje jasné cíle a ověření |
| Agent se správou kontextu | Udržuje cíle, omezení a průběžný stav viditelné napříč kroky | Spolehlivější dlouhodobé pracovní postupy | Stále závisí na kvalitních shrnutích a návrhu paměti |
| Víceagentní pracovní postup | Více agentů koordinuje jednotlivé části úkolu | Specializace a paralelní práce | Složitější orchestrace a větší riziko ztráty sdíleného kontextu |

## Co to znamená v praxi

Hlavní ponaučení pro každodenní inženýrskou práci není přemýšlet pouze v promtech. Přemýšlejte o pracovních postupech, stavu a ověřování.

### Kdy stačí jednoduchý chatbot

Jednoduchou interakci použijte, když se úloha týká hlavně textu.

Příklady:

- vysvětlit pojem
- přeformulovat odstavec
- shrnout poznámku z porady
- navrhnout testovací případy

### Kdy je lepší agent

Agenta použijte, když má úloha více kroků, závislostí nebo vyžaduje ověření.

Příklady:

- prozkoumat zdrojový kód a vysledovat chybu
- provést cílenou změnu kódu
- porovnat dokumentaci s implementací
- aktualizovat soubor a ověřit výsledek

### Kdy správa kontextu přináší hodnotu

Správa kontextu pomáhá, když úloha trvá tak dlouho, že původní cíl může zapadnout.

Příklady:

- připomenout cíl před zahájením nové fáze
- shrnout dlouhý výstup nástroje před dalším promptem
- uchovat aktuální plán, aby ho model nemusel při každém kroku znovu sestavovat
- před ověřováním znovu uvést zásadní omezení

Praktické ponaučení je jednoduché: systémy AI jsou mnohem užitečnější, když nepřemýšlíme jen o promptech, ale také o pracovních postupech, kontextu a stavu.

## Praktická doporučení

- Rozdělujte úkoly jasně. Nejasný požadavek vede k nejasnému výsledku.
- Poskytněte kontext a omezení. Uveďte rozsah, předpoklady a to, jak vypadá dobrý výsledek.
- Dávejte přednost strukturovaným promptům. Cíl, kontext, omezení, formát výstupu a kritéria ověření obvykle fungují lépe než volná formulace.
- Ověřujte výstupy. AI může působit sebejistě, i když se mýlí.
- Přemýšlejte v pracovních postupech, nejen v promptech. Nejlepších výsledků se obvykle dosahuje plánováním, provedením, kontrolou a vylepšováním.

Příklad struktury promptu:

1. Cíl: Aktualizovat úvodní poznámku pro nové vývojáře.
2. Kontext: Čtenáři mají technické znalosti, ale nejsou specialisté na strojové učení.
3. Omezení: Rozsah maximálně dvě strany, bez produktového marketingu.
4. Výstup: Markdown s jednou srovnávací tabulkou a krátkým glosářem.
5. Ověření: Zajistit, aby cíl, omezení a závěrečné kontroly zůstaly během celého úkolu zřetelné.

## Stručný glosář

- NLP: Metody, které umožňují počítačům zpracovávat lidský jazyk.
- Token: Část textu, kterou model zpracovává jako jednu jednotku.
- Tokenizace: Proces rozdělování textu na tokeny.
- Embedding: Číselná reprezentace textu zachycující sémantickou podobnost.
- Kontextové okno: Množství tokenizovaných informací, které model může zohlednit najednou.
- Transformer: Architektura moderních LLM, která modelům pomáhá propojovat tokeny napříč kontextem.
- LLM: Velký jazykový model, který z kontextu předpovídá pravděpodobné následující tokeny.
- Chatbot: Systém zaměřený především na vytváření odpovědí.
- Agent: Systém, který může sledovat cíle pomocí plánování, nástrojů, akcí a opakování.
- Správa stavu: Uchovávání správných informací o úkolu napříč více kroky nebo prompty.
- Agentní inženýrství: Návrh pracovních postupů, paměti, promptů a ověřování tak, aby systém AI zůstal dlouhodobě užitečný.

## Závěrečné shrnutí

Základ je jednoduchý. Jazyk se převádí na tokeny. LLM s nimi pracují a předpovídají, co bude následovat. Tím získáváme výkonný nástroj pro práci s textem, ne však automaticky spolehlivého pracovníka.

Zásadní posun přináší návrh agentů. Agent se od chatbota liší tím, že může sledovat cíl napříč několika kroky, používat nástroje a ověřovat výsledky.

Dalším praktickým posunem je správa kontextu. Dlouhé pracovní postupy zůstávají spolehlivé jen tehdy, když důležitý cíl, omezení a průběžný stav zůstávají viditelné a lze je znovu vyvolat i v dalších krocích.

Čím lépe rozumíme tokenům, embeddingům, pozici, self-attention a nárokům na kontext, tím lépe dokážeme AI využívat nejen jako textového asistenta, ale i jako praktického inženýrského partnera.