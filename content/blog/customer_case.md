---
title: Customer Case with E.G
date: 2026-05-04
---
# Mødet med E.G.: når problemet ikke er det de siger det er
 
I denne uge havde vi besøg af et par godsejere — jeg kalder dem E.G. — der driver et eventfirma fra deres gods. De holder bryllupper, fester, konferencer, og en gang om året et julemarked. De udlejer også et par sommerhuse på matriklen. På overfladen lyder det som en lille forretning. Når man hører dem beskrive deres hverdag, går det op for én at "lille" og "simpel" ikke er det samme.
 
## Hvad jeg faktisk hørte
 
E.G. kom ikke med en feature request. De kom med fortællinger. Et bryllup booker ind på email, og så starter en proces der løber 12 måneder. Trello bliver brugt som projektboard — den ene af dem opretter et nyt board for hvert bryllup, henter en gemt template, og copy-paster omkring 60 tasks ind én ad gangen. Derefter justerer han datoer på hver eneste task ud fra bryllupsdatoen. Det tager mellem 30 og 60 minutter per bryllup, og det er bare *opsætningen* — før kontakten med brudeparret overhovedet er i gang.
 
Det var den ene af mange historier. Andre handlede om koordination med Restaurant Værkstedet der står for receptionen, om båd-logistik når vielsen foregår fra øen Anemonen og brudeparret skal sejles til Maribo Domkirke, om internationale gæster der skal have information på engelsk eller tysk, om sommerhus-bookinger der ligger i et helt andet system, og om at vide hvem der har svaret hvad på hvilken email.
 
Det interessante mønster på tværs af det hele var ikke at de manglede et system. De har systemer — Trello, email, kalender, regneark. Det de manglede var at systemerne snakkede sammen, og at den viden der lå i hovederne på dem også lå et sted andre kunne tilgå.
 
## Den vigtige ramme de selv satte
 
De var meget tydelige om én ting: kundekontakten skal *ikke* automatiseres. Folk der bruger en seksciffret sum på et bryllup vil ikke skrive med en bot. Hver email skal føles som om den kommer fra et menneske der bekymrer sig om netop deres dag. Det er en del af det de sælger.
 
Den ramme ændrer hele opgaven. Det handler ikke om at fjerne mennesker fra processen. Det handler om at fjerne det administrative arbejde der ligger *omkring* den menneskelige kontakt, så de har overskud og tid til selve samtalen. Succeskriteriet er ikke "antal automatiserede emails." Det er "minutter sparet per bryllup" og "antal ting færre at huske på."
 
Det er en vigtig forskel, fordi det udelukker den klassiske AI-løsning hvor en chatbot tager imod alle henvendelser. Det vi skal bygge skal være usynligt for kunden og synligt for E.G.
 
## Systemer jeg kunne se gøre en forskel
 
Med den ramme for øje er der et par konkrete steder hvor jeg tror et system — gerne med AI som komponent, ikke som hovedperson — kan flytte noget.
 
**Et template-system til Trello der tilpasser sig hver booking.** I stedet for at hente en generisk template og rette 60 tasks til hånden, fortæller man systemet de få oplysninger der er kendt — dato, antal gæster, hvor vielsen finder sted, hvilken bygning festen er i, om der er internationale gæster — og det genererer et færdigt board med korrekt tilpassede tasks og deadlines beregnet baglæns fra bryllupsdatoen. Den slags template-logik er der AI kommer ind: et sæt regler kunne også gøre det, men reglerne ville blive astronomiske, fordi hver kombination af lokation, størrelse, og special-omstændigheder kræver lidt andre opgaver. En sprogmodel der får templaten og bookingdataen kan justere mere fleksibelt end en regelmotor, og den kan forklare hvorfor den tilføjede eller fjernede en task.
 
**En central oversigt på tværs af systemerne.** Bookinger, sommerhuse, Trello-boards, og kalender ligger spredt. Et samlet dashboard der trækker fra alle kilder og viser "hvad sker der her i ugen, hvem har ansvar, hvad mangler" ville fjerne en stor del af den mentale belastning der ligger i konstant at dobbelttjekke ting i flere systemer. Det er ikke imponerende teknologi. Det er bare det rigtige stykke information på det rigtige tidspunkt.
 
**Email-assistance der hjælper med at svare, ikke svarer for dem.** Da kundekontakten skal forblive personlig, giver det ikke mening at auto-svare. Men en assistent der kan trække relevant kontekst frem når en email kommer ind — "det her er fjerde mail i tråden, brudeparret hedder X og Y, deres dato er Z, de har tidligere spurgt om vegansk menu" — sparer den tid det tager at lede efter konteksten, uden at fjerne det menneske der formulerer svaret. Et udkast som de altid redigerer er hurtigere end et tomt felt.
 
**Et julemarkeds-modul der er sit eget lille univers.** Julemarkedet kører én weekend om året, men involverer stadeholdere, kortlægning af stande, koordinering af leverancer, og afregning. Det er karakteristisk fordi det er sjældent men intenst — og det er præcis den slags arbejde hvor man genopfinder hjulet hvert år fordi man har glemt detaljerne fra sidste år. Et lille dedikeret værktøj der gemmer sidste års opsætning og kan genbruges ville sandsynligvis kunne fjerne en uges arbejde alene.
 
**Flersproget kommunikation som tilvalg, ikke standard.** Når en henvendelse kommer fra en tysk eller engelsktalende gæst, kan en assistent oversætte både indkommende og udgående mails så E.G. selv kan kommunikere på dansk og stadig svare på det sprog gæsten skrev på. Igen — det automatiserer ikke kontakten, det fjerner sprogbarrieren som friktion.
 
## Hvor AI hjælper *udviklerne*, ikke kun E.G.
 
Noget jeg synes er underbelyst i den slags case-snak: AI er ikke kun en feature i det færdige produkt. Den ændrer også hvordan vi som udviklere kommer fra "møde med kunde" til "fungerende system."
 
For et projekt som E.G.'s er det første store stykke arbejde at oversætte deres fortællinger til specifikationer. Det er et område hvor en kodeagent ikke kan hjælpe direkte — vi skal stadig forstå forretningen — men en sprogmodel kan hjælpe med at strukturere noterne, finde modsigelser, og generere udkast til user stories vi så reviewer.
 
Når specifikationerne er på plads, kan en kodeagent bygge MVP'en hurtigt, fordi domænet er afgrænset. En webapp med login, en formular til at oprette bryllupper, integration mod Trello's API, og et kald til en sprogmodel der tilpasser templaten — det er noget der historisk ville have taget uger og nu kan stå klar til demo på dage. Det betyder vi kan vise E.G. noget rigtigt tidligt i forløbet, hvilket er guld værd, fordi *de kan ikke vide om en løsning passer før de ser den.* Hurtige iterationer betyder bedre løsninger.
 
Den anden ting AI gør for os som udviklere er at den sænker omkostningen ved at bygge små specialiserede værktøjer. Tidligere var et julemarkeds-modul der bruges én weekend om året umuligt at retfærdiggøre at bygge. I dag kan vi forsvarligt bygge små, specifikke værktøjer til hver del af E.G.'s forretning i stedet for at tvinge alt ind i ét stort generisk system. Den arkitektoniske frihed til at lave noget *præcist* i stedet for *fleksibelt* er undervurderet.
 
## Hvad jeg tager med mig
 
Det vigtigste E.G.-mødet har lært mig er at lytte længe nok til at forstå hvilke klager der er symptomer, og hvilke der er rodårsager. "Vi har meget manuelt arbejde" er ikke en specifikation — det er et udgangspunkt. Det rigtige spørgsmål er ikke "hvad kan vi automatisere" men "hvad gør den her opgave dyr, og hvor af det er værdifuldt for kunden at vi bruger tid på det?"
 
For E.G.'s vedkommende er svaret klart: den personlige kontakt er kernen i produktet. Alt det administrative omkring den er omkostning. En god løsning gør den ene del lettere uden at røre den anden.
 
Det er en lille pointe, men den ændrer hvad man bygger.