---
title: Sådan byggede jeg en interaktiv Meditation Quiz med React og AI på én dag
date: 2026-04-24

---
Hvad sker der når man kombinerer et kursus om meditation, en AI-assistent og lidt vibe coding-energi? Det finder du ud af her.
 
I dette blog indlæg deler jeg hele rejsen bag mit seneste projekt - en interaktiv meditation quiz bygget med React, deployed via GitHub Actions til GitHub Pages, og **vibe coded fra start til slut med Claude AI**.
 
 
## 🤖 Hvad er Vibe Coding?
 
Vibe coding er en udviklingsmetode hvor du beskriver hvad du vil have til en AI, og AI'en skriver koden. Du er arkitekten og direktøren - AI'en er udvikleren. Du behøver ikke nødvendigvis at kende alle tekniske detaljer. Du skal bare vide hvad du vil have, og kommunikere det tydeligt.
 
I dette tilfælde brugte jeg **Claude** fra Anthropic som min AI-partner. Hele projektet - fra første linje kode til deployment - blev bygget i en enkelt samtale med Claude.
 
---
 
## 📋 Workflow - Fra Idé til Live Hjemmeside
 
### Trin 1: Billeder af Quiz-arkene
Jeg fotograferede mine quiz-ark fra meditationskurset og uploadede dem til Claude. Claude læste spørgsmålene, identificerede de rigtige svar og forstod strukturen med det samme.
 
### Trin 2: Første Version
Claude lavede en første version af quizzen som en simpel HTML side. Den virkede lokalt, men havde problemer med at loade filer korrekt via Live Server i VS Code.
 
### Trin 3: Migrering til React + Vite
Vi besluttede at bygge det ordentligt med React og Vite - et moderne JavaScript framework og build tool. Claude genererede alle de nødvendige filer og satte projektet op fra bunden.
 
### Trin 4: Features
- 21 spørgsmål fordelt på 5 kategorier
- Øjeblikkelig feedback med jokes ved hvert svar
- Live score tracking og progress bar
- Animationer og moderne UI med gradient design
- Resultat side med personlig feedback
### Trin 5: Deployment med GitHub Actions
Vi satte GitHub Actions op til at bygge og deploye projektet automatisk til GitHub Pages hver gang der pushes ny kode til GitHub. Det betyder at jeg aldrig selv behøver at tænke på deployment - det sker helt automatisk.
 
### Trin 6: Live! 🎉
Efter alle fixes var quizzen live på GitHub Pages - gratis hostet og tilgængelig for alle.
 
---
 
## 🔧 Ting Der Skulle Fixes
 
Ingen projekter går helt gnidningsfrit - og det gjorde dette heller ikke. Her er de problemer vi stødte på undervejs:
 
**Den hvide side** var den største udfordring. Efter deployment viste siden ingenting - bare hvid. Det viste sig at være tre separate problemer der alle skulle fixes:
 
Først lå deployment-filen det forkerte sted. Den skulle ligge i en specifik mappe for at GitHub Actions kunne finde den - det havde vi overset fra starten.
 
Derefter var der et problem med base-stien i konfigurationen. GitHub Pages kræver at man specificerer præcis hvilken sti hjemmesiden ligger på - og det skal matche repo-navnet på GitHub helt nøjagtigt, inklusiv store og små bogstaver.
 
Til sidst var der et problem med hvordan CSS-frameworket Tailwind blev loadet. Vi brugte en hurtig CDN-løsning som virker lokalt, men ikke i et rigtigt production build. Vi måtte installere Tailwind korrekt som en del af projektet i stedet.
 
**Permissions-fejl** i GitHub Actions betød at robotten ikke havde rettigheder til at skrive til vores repo. Det blev løst ved at slå "Read and write permissions" til i GitHub indstillingerne.
 
Alt i alt var det gode læringspunkter - og den slags fejl man kun laver én gang. 😄
 
---
 
## 😄 Min Yndlings Feature: Jokes ved Hvert Svar
 
Det sjoveste ved projektet er feedback-systemet. For hvert spørgsmål får du en joke der forklarer hvorfor dit svar er rigtigt eller forkert. For eksempel:
 
> **Spørgsmål:** Målet med meditation er at være helt tom for tanker
>
> **Forkert svar:** *"Næh! Vores hjerner er som tænkemaskiner - det er deres job at tænke. Opgaven er at være stille omkring tankerne, ikke at få dem til at forsvinde. 🧠"*
 
> **Spørgsmål:** Man kan kun meditere rigtigt hvis man sidder i lotusstilling
>
> **Forkert svar:** *"Ah nej! Du kan være indvendigt stille overalt - selv mens du gør opvask! (Selvom det ville være ualmindeligt roligt derhjemme) 🧖‍♀️"*
 
---
 
## 🎓 Hvad Jeg Lærte
 
**Om meditation:** Det handler ikke om at fjerne tanker. Det handler om at ændre din relation til dem. Du kan have en hel festival af tanker i hovedet og stadig være fuldkommen stille - fordi stilhed er en indre position, ikke en ydre tilstand.
 
**Om vibe coding:** AI er et fantastisk værktøj, men det er ikke magisk. Du skal stadig forstå hvad du vil have, kommunikere tydeligt og debugge når ting går galt. Den hvide side lærte mig mere om deployment end mange timers tutorial nogensinde ville have gjort.
 
**Om at bygge projekter:** Idéen er det sværeste. Når du har den, er vejen fra idé til færdigt produkt kortere end nogensinde takket være AI.
 
---
 
## 🚀 Prøv Det Selv
 
Quizzen er live og gratis at bruge:
👉 **[https://fredebas.github.io/Meditation-Quiz/](https://fredebas.github.io/Meditation-Quiz/)**
 
 
---
 
## En Tak til Claude 🤖
 
Dette projekt ville ikke eksistere uden Claude. Ikke fordi jeg ikke kan kode - men fordi vibe coding med AI gør det muligt at gå fra idé til færdigt produkt på en brøkdel af den tid det normalt ville tage.
 
Det handler ikke om at AI erstatter udviklere. Det handler om at AI giver dig superkræfter til at bygge ting hurtigere, lære undervejs og fokusere på idéen frem for syntaksen.
 
> *"Vibe coding er ikke fremtiden - det er nutiden."*
 