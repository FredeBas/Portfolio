---
title: Customer case v2
date: 2026-05-14
---
# E.G — Del 2: Fra én knap til et helt system
 
Da MVP'en var færdig, havde jeg én funktion der virkede: opret et bryllup i en formular, få et komplet Trello-board ud i den anden ende. Det var den ene ting kunden bad om, og den virkede. Men jeg vidste også at hvis jeg viste den til  J i den form, ville hans første spørgsmål være "okay, og hvad så?"
 
For at oprette et board er en engangshandling. Det sker måske 20 gange om året. Det meste af J's arbejde sker mellem oprettelsen og brylluppet — de seks måneder hvor deadlines kommer og går og tasks skal følges op på. MVP'en hjalp ham med starten. Den hjalp ham ikke med dagligdagen.
 
Så fase 2 blev egentlig spørgsmålet: hvad gør J  rent faktisk i de seks måneder mellem booking og bryllup? Og hvor af det kunne et system hjælpe med uden at gøre arbejdet større?
 
## Det åbenlyse svar var forkert
 
Den første tanke var at bygge et fuldt projektstyringsværktøj ovenpå. Dashboard med alle bryllupper, statusbjælker, kalenderoversigt, gantt-charts hvis det skulle være. Det var det åbenlyse svar når man hører "J  mangler overblik".
 
Det J  rent faktisk gør, når jeg tænker over det, er ikke at "have overblik". Det er at huske de næste handlinger. Hvilke tasks er overskredne, hvilke kommer snart, hvad skal jeg gøre noget ved i denne uge. Og det huskearbejde sker primært ved at han åbner Trello om morgenen og scroller igennem alle kolonnerne med kaffen.
 
Det rigtige spørgsmål er ikke "hvad mangler J af information". Det er "hvad skulle han gerne slippe for at huske".
 
## Reminders som det egentlige produkt
 
Når man stiller det spørgsmål, bliver svaret pludselig meget mere fokuseret: byg et system der genererer påmindelser om hvad der skal ske, hvornår, og lad J  godkende dem i stedet for at huske dem. Det er ikke et dashboard. Det er en assistent der peger på den næste handling.
 
Det blev kernen i fase 2. Hver morgen scanner systemet alle aktive bryllupper og kigger på tasks med nærliggende deadlines. Det genererer påmindelses-udkast — "Husk at bekræfte sejlads med Anemonen, deadline om 4 uger" — og lægger dem i en kø. J  åbner systemet, ser køen, godkender dem der giver mening, afviser dem der ikke gør, og fortsætter med sin dag.
 
For tasks der er trivielle og kritiske (typisk "Ugen før" og "Bryllupsdagen"), springer systemet godkendelses-trinet over. J behøver ikke godkende at han skal forberede selve bryllupsdagen — det er givet. De bliver markeret som automatiske og er der bare som info.
 
Det betyder at J ikke længere skal scrolle gennem Trello hver morgen for at se hvad der er aktuelt. Han kan åbne én side, se en konkret liste over "ting der skal ske denne uge", og handle på dem.
 
## Forskellen mellem dashboard og kø
 
Forskellen mellem et dashboard og en kø lyder lille, men den er afgørende. Et dashboard fortæller dig hvad der findes. En kø fortæller dig hvad du skal gøre. Dashboard'et er passivt — du tolker det. Køen er aktiv — den foreslår en handling og venter på dit svar.
 
Den her skelnen er noget jeg ikke havde tænkt så meget over inden. Hvis du beder en udvikler om at "give brugeren overblik", får du et dashboard. Hvis du beder om at "hjælpe brugeren med næste skridt", får du noget der ligner en mailindbakke. Det er det andet jeg byggede — fordi det andet er det J faktisk har brug for lød det som om på J.
 
Der er stadig en dashboard-funktion i bunden, hvor J  kan se kommende bryllupper og hvor langt de er. Men det er sekundært. Det primære er køen.
 
## Hvad jeg ikke regnede med
 
Den sværeste del af fase 2 var ikke at generere reminders. Det var at huske at J allerede har godkendt eller afvist nogle af dem.
 
Min første version genererede reminders fra bunden hver gang det daglige job kørte. Det betød at hvis J om mandagen havde afvist en reminder ("vi har allerede ringet til præsten, ingen grund til at minde igen"), så ville den dukke op igen tirsdag. Det var ubrugeligt. Værre end ubrugeligt — det var aktivt irriterende.
 
Anden version huskede status, men nulstillede den hvis tasken blev opdateret i Trello. Det var næsten lige så slemt, fordi tasks bliver opdateret hele tiden.
 
Tredje version — den der er der nu — bevarer J s beslutninger uanset hvad. Hvis han har sagt nej til en reminder, kommer den ikke igen. Hvis han har godkendt en, forbliver den godkendt. Det lyder banalt at skrive ned, Det er den slags edge cases man kun finder ved at faktisk bruge sit eget system.
 
Læringen er at "automatisering" og "respekt for brugerens beslutninger" er to ting der trækker mod hinanden. Et automatisk system vil gerne genberegne alt. En bruger vil gerne have at deres input bliver husket.
 
## Det jeg ikke har testet endnu
 
Jeg har bygget systemet, men jeg har endnu ikke set det møde virkeligheden. Mit udviklingsmiljø kan ikke nå Trello eller AI'en udefra, så hele kæden — fra Trello-kort til reminder-kø til godkendt status — er kun testet med lokale data. Den dag jeg viser det til J , er også den første dag det kører end-to-end mod hans rigtige board.
 
Det er bevidst at jeg har valgt at stoppe der. Jeg kunne have bygget mere før workshoppen, men hver feature mere er en feature der kan vise sig at være forkert når jeg endelig hører hvordan J  faktisk arbejder. Mine default-tal for lead-tider (7 dage før kritiske tasks, 14 dage før logistik) er gæt. De skal valideres, ikke udbygges.
 
## Næste skridt
 
 Vi har stilt dem nogle spørgsmål som vi håber at få svar på for at kunne videreudvikle produktet.

 Vi kunne godt bruge nogle skabeloner for de forskellige steps, såsom:
	Tilbuddet
	e-conomics liste af "produkter" i et tilbud
	Trello skabelonen ("bryllupsboard) og eksempel på kontrakt
	Eventuelt også en tillægskontrakt	
	En tidslinje over de forskellige oplysninger og kontakt, f.eks. 
	9 måneder inden: første kontakt med par og angivelse af tilbud 
	uge efter dette: kontrakt underskrevet samme dag, 
	Trello oprettes og depositum betaling modtages 
	5 måneder inden: flere oplysninger modtages 
	1 måned inden: endelig optælling af gæster? 
	1 uge inden: bordplan 	
    Kan vi få en oversigt af anvendte farvekoder i Trello.	
	Hvordan tager bryllupper prioritet over sommerhuse — hvad er præcedensen? 
    Altså kan man booke sommerhuse selvom der er bryllup fx?	
	Hvad har kunder af muligheder for tilvalg i kontrakten? (blomster, mad m.m.). Nok det samme som e-conomics listen i spm 1.2	
	Hvad er normalt antal sovepladser for et bryllup?	
	Hvilke data overføres fra Trello boardet til kontrakten?	
	Har I en liste med ca. priser når kunder emailer deres spørgsmål til J om hvad noget vil koste? Med den kan vi laver nogle estimater. Måske igen samme som spm 1.2	
	Kunne I tænke jer at systemet sender påmindelser til jer når der er deadlines som skal overholdes?	Dette har jeg så valgt og indføre.
