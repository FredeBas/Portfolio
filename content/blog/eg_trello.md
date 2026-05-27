---
title: E.G Project
date: 2026-05-08
---

# Engestofte Gods — AI-assisteret bryllups-oprettelse i Trello
 
## Projekttype
 
Proof-of-concept og MVP. En fungerende webapp der demonstrerer hvordan E.G kan eliminere det manuelle copy-paste-arbejde i Trello når et nyt bryllup oprettes. MVP'en er bygget til at blive vist for kunden — den er fokuseret, stabil og laver én ting rigtigt godt. Hostet lokalt under udvikling, klar til at flytte til Railway eller Hetzner når kunden siger ja.
 
## Problem
 
J og B på Engestofte Gods opretter manuelt et nyt Trello-board hver gang et brudepar booker. De henter en gemt template, copy-paster cirka 60 tasks ind én ad gangen, og justerer derefter alle deadlines i forhold til bryllupsdatoen. Det tager 30-60 minutter pr. bryllup. Med flere bryllupper i sæsonen bliver det timer af gentaget arbejde, der stjæler tid fra det egentlige arbejde med gæsterne.
 
## Bruger
 
Udelukkende J (medejer, primær Trello-bruger) og B (sekundær med skrive-rettigheder). De øvrige medarbejdere på godset bliver i Trello som de plejer, med read-only adgang. Brudeparrene rører aldrig systemet — al kundekontakt forbliver hos koordinatorerne via mail og telefon.
 
## Nuværende proces
 
Når en booking kommer ind, åbner J Trello, henter sin template, kopierer tasks ind manuelt, og sætter datoer på hver enkelt task baseret på bryllupsdatoen. Hvis vielsen sker i Maribo Domkirke med båd-transport via Anemonen, skal han huske at tilføje båd-relaterede tasks manuelt. Hvis det er et stort bryllup, skal han justere tasks omkring logistik. Det hele afhænger af hans hukommelse og tid.
 
## Foreslået løsning
 
En simpel webapp i Node.js/Express med PostgreSQL backend. J og B logger ind, udfylder en formular med brudeparrets data (navne, dato, lokation, gæsteantal, vielse-type), trykker en knap, og 30 sekunder senere er der et komplet Trello-board klar med alle relevante tasks og korrekte deadlines. Tasks som "Endelig menu-aftale med Værkstedet" får automatisk dato 45 dage før brylluppet, "Send invitationer" får dato 180 dage før, og så videre.
 
Systemet er designet for stabilitet over flashy features. Minimal stack, ingen unødvendige dependencies, og fallback-mekanismer hele vejen igennem så MVP'en aldrig crasher under en demo.
 
## AI-funktion
 
Claude Haiku 4.5 via Anthropic API tilpasser standard-templaten til det specifikke bryllup. Et stort bryllup i Laden med Maribo Domkirke-vielse får automatisk tilføjet ekstra logistik-tasks (båd-koordinering, præst-kommunikation, transport). Et mindre bryllup får fjernet irrelevante tasks. AI'en returnerer struktureret JSON som backend'en kan pushe direkte til Trello API.
 
Hvis Claude API er nede eller returnerer ugyldig data, falder systemet tilbage til standard-templaten uden tilpasning — brugeren får stadig et fuldt fungerende board og en besked om at AI-tilpasning ikke var tilgængelig. Demoen kan altså aldrig crashe på grund af AI.
 
## MVP
 
Lokal webapp på `http://localhost:3000` med følgende funktionalitet:
 
- Login for J og B
- Formular til oprettelse af nyt bryllup (6 felter)
- AI-tilpasning af template med fallback til standard
- Automatisk oprettelse af komplet Trello-board (1 board, 8 lister, 30+ tasks med datoer)
- Live status-stream der viser hvert skridt af processen
- Database-tracking af alle oprettelser (succes/fejl/tidspunkt)
- Liste over seneste 10 oprettelser med direkte link til Trello

## Tech stack
 
Node.js + Express som backend. PostgreSQL via Docker til lokal udvikling, kan flyttes til managed service (Railway, Render, Supabase) ved deploy. Vanilla HTML/CSS/JS i frontend — ingen build-step, ingen npm dependencies der kan brække. Claude Haiku 4.5 til AI. Trello REST API til board-oprettelse. Server-Sent Events til at streame status til frontend mens de 70+ API-kald kører.
 
## Reliability-features
 
Retry-logik med exponential backoff på alle Trello-kald (1s, 2s, 4s, 8s) håndterer midlertidige netværksfejl uden brugeren mærker det. Hvis kort-oprettelse fejler midtvejs, slettes det halvfærdige board automatisk (rollback) så Trello ikke fyldes med skrald. Hver bryllups-oprettelse gemmes i databasen før noget andet sker, så brugeren aldrig mister sin indtastning. Alle fejl vises tydeligt med præcis information om hvor det gik galt.
 
## Afgrænsning
 
Kun bryllups-oprettelse i denne version. Ingen sommerhus-flow endnu. Ingen reminder-system med email/SMS. Intet dashboard med realtime overblik. Ingen automatisk arkivering efter event. Ingen webhook-integration. Ingen mobile app — webapp'en virker på mobil-browser men er ikke optimeret. Ingen brugerstyring i UI'et (J + B sættes op via config-fil). Bevidst skarpt afgrænset for at MVP'en kan bygges på 1-2 uger og demoes uden bugs.
 
## Kundespørgsmål
 
- Kan vi få adgang til J's nuværende Trello-template, så vi kan tilpasse standard-templaten 1:1 til deres faktiske workflow?
- Hvilken Trello-plan er de på? Skal være Standard eller højere for fuld API-adgang.
- Hvor mange bryllupper opretter de typisk per måned i højsæsonen?
- Skal B have præcis samme adgang som J, eller noget begrænset?
- Er det OK at gæste-data (navne, datoer) sendes til Anthropic for AI-behandling? GDPR-mæssigt bør det nævnes.
- Hvad er deres månedlige budget for hosting + drift + AI inkluderet i én pris?

## Antagelser
 
- E.G standard bryllups-template er rimelig konsistent — vores 33-task template er udgangspunkt indtil vi får deres faktiske
- AI-omkostninger holder sig under 25 kr/måned ved deres volumen (Haiku 4.5 er meget billig)
- Trello-kontoen tillader fuld API-adgang
- J og B er teknisk komfortable nok til at bruge en webapp med login
- PostgreSQL via Docker lokalt under udvikling, managed PostgreSQL i produktion
- Resten af medarbejderne bliver i Trello uændret — kun de to med skrive-adgang bruger webapp'en

## Næste tre opgaver
 
1. Workshop med J og B: gennemgang af nuværende Trello-template og tilpasning af `template.js` til deres faktiske 60 tasks
2. Demo MVP'en med ægte API-keys: oprette 3-5 test-bryllupper og verificere at boards ser fornuftige ud i Trello
3. Pris- og budgetsamtale med J: præsentér én samlet månedspris (hosting + AI + drift) og få go-ahead til at flytte fra localhost til produktion