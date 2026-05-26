---
title: Spec-Driven Development
date: 2026-05-01
---

# Specs, logs og kodeagenter: SDD når maskinen skriver koden
 
Spec-Driven Development er ikke et nyt begreb. Vi har skrevet kravspecifikationer i årtier — UML-diagrammer, user stories, API-kontrakter, RFC'er. Det nye er ikke disciplinen. Det nye er, at specs pludselig er holdt op med at være dokumentation *omkring* udviklingen, og er blevet input *til* udviklingen. Når en kodeagent skal bygge noget, er specifikationen ikke længere noget man kan vælge at skrive eller springe over. Den er prompten. Og kvaliteten af det den producerer afhænger direkte af, hvor præcis du har været.
 
## Hvad SDD egentlig betyder
 
Den korte version: du beskriver hvad systemet skal gøre — inputs, outputs, edge cases, fejlhåndtering, succeskriterier — *før* der bliver skrevet en linje kode. Den mere ærlige version: SDD er et forsøg på at tvinge dig til at tænke færdigt, før du implementerer.
 
Jeg har altid sprunget det over. En idé dukkede op, jeg åbnede en fil, og tankerne fandt sted mens jeg skrev. Det fungerede fint så længe jeg selv var den der skrev hver linje, fordi jeg løbende kunne justere min mentale model imens. Men når en kodeagent skal bygge fra min beskrivelse, kan den ikke gætte hvad jeg mente. Den bygger præcis det jeg sagde — og hvis det var vagt, bliver resultatet en plausibel, kompilerbar løsning på et lidt forkert problem. Det er værre end en fejl, fordi det ser rigtigt ud.
 
## Spec som kontrakt, ikke som dokument
 
I praksis behøver en god spec ikke at være et formelt Word-dokument med versionering. Til en lille feature kan den være et par afsnit i prompten:
 
- **Datamodel:** hvilke entiteter findes, og hvordan hænger de sammen
- **Adfærd per scenarie:** hvad sker der ved succes, ved tomt input, ved netværksfejl, ved konflikter
- **Constraints:** ydeevne, sikkerhed, hvilke biblioteker må/må ikke bruges
- **Succeskriterier:** hvordan ved jeg at det virker — helst formuleret som testbare påstande
Det vigtige er ikke formatet. Det vigtige er, at en anden — menneske eller agent — kan læse det og bygge det samme system uden at skulle spørge dig om noget.
 
## Den del de fleste glemmer: logs
 
Specs alene er ikke nok. Hvis du giver en agent en spec, lader den arbejde, og kun ser på slutresultatet, har du bygget en black box. Du ved hvad du bad om, og du ved hvad der kom ud, men du ved ikke *hvordan* den kom derhen — eller hvad den antog undervejs.
 
Det er derfor logs er den anden halvdel af spec-driven udvikling med agenter. Ikke runtime-logs fra applikationen, men *udviklings-logs* fra agenten:
 
- Hvilke filer rørte den ved
- Hvilke beslutninger tog den hvor specifikationen var tvetydig
- Hvilke antagelser gjorde den
- Hvilke tests kørte den, og hvad var resultatet
- Hvor afveg implementeringen fra specifikationen, og hvorfor
Med den slags log kan du gøre to ting der ellers er umulige. Du kan reviewe agentens *ræsonnement*, ikke bare dens kode. Og du kan fodre loggen tilbage som input til næste iteration — "her er specifikationen, her er hvad du byggede sidst, her er hvad jeg vil have ændret."
 
## Sådan kunne et flow se ud i praksis
 
Jeg forestiller mig en arbejdsgang i tre lag, hvor spec og log er adskilte artefakter der opdateres løbende:
 
**1. Spec** — beskriver intentionen. Versioneres i git ved siden af koden. Når kravene ændrer sig, opdateres specifikationen *først*, derefter implementeringen.
 
**2. Agent-prompt** — bygges automatisk ud fra specifikationen plus relevant kontekst (eksisterende kodebase, code style, afhængigheder). Agenten skal aldrig læse hele kodebasen for at gætte konventionerne; de står i specifikationen eller i en sideløbende konventionsfil.
 
**3. Log** — agenten skriver en struktureret log over hvad den gjorde, hvilke valg den tog, og hvilke åbne spørgsmål der opstod. Loggen er det første jeg kigger på i review, ikke koden. Hvis loggen siger "antog at brugere altid har en email," og det ikke står i specifikationen, ved jeg hvor jeg skal kigge før jeg overhovedet åbner filerne.
 
Det skarpe ved den her opdeling er at fejl bliver sporbare til deres rigtige kilde. Hvis implementeringen er forkert, men loggen viser at agenten gjorde præcis hvad specifikationen sagde, så er problemet specifikationen — ikke koden, og ikke agenten. Det er en helt anden debugging-erfaring end den traditionelle "hvorfor gør den her funktion det forkerte."
 
## SDD vs vibe coding — falsk modsætning?
 
Det er fristende at stille SDD op mod vibe coding som to lejre, hvor den ene er disciplineret og den anden er fri. I virkeligheden er det mere et spektrum, og det rigtige sted på spektret afhænger af hvad du bygger, og hvor længe det skal leve.
 
Til en hackathon-prototype eller en eksplorativ skitse er det spild at skrive en formel specifikation — du opdager hvad du vil bygge mens du bygger det. Til en applikation der skal vedligeholdes af andre, integreres med andre systemer, eller overleve at den oprindelige udvikler skifter job, er specifikationen ikke overhead. Den er det dokument der gør at koden kan ændres uden frygt.
 
Den interessante effekt af at arbejde med kodeagenter er, at den marginale omkostning ved at skrive en specifikation falder, samtidig med at den marginale gevinst stiger. Det betyder at SDD bliver det rigtige valg i flere situationer end før — også til ting jeg tidligere ville have vibe-codet.
 
## Hvad jeg tager med mig
 
To ting har ændret sig for mig. Det første er, at jeg er begyndt at skrive en kort specifikation før jeg prompter, også til små opgaver — ikke fordi nogen kræver det, men fordi jeg har opdaget at jeg ikke kan formulere en god prompt uden den. Specifikationen *er* prompten, bare i en mere struktureret form.
 
Det andet er, at jeg er begyndt at behandle agentens log som lige så vigtig som dens output. En agent der bygger noget rigtigt uden at fortælle mig hvordan, er mindre brugbar i længden end en der bygger noget *næsten* rigtigt og forklarer sit ræsonnement. Det første kan jeg ikke korrigere systematisk. Det andet kan jeg.
 
Spec + log + agent er ikke en silver bullet. Men det er den første arbejdsgang jeg har prøvet, hvor det føles som om jeg samarbejder med værktøjet om at bygge noget, i stedet for at bede det om at gætte hvad jeg mener.