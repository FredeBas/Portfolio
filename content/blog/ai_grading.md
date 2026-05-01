---
title: Ai-Grading
date: 2026-04-27
---
# Workflow - Fra Idé til AI-Vurderingsværktøj

## Kildematerialet

Jeg startede med tre markdown-filer fra uddannelsen — læringsmål, krav til rapporten og EK's Dare-Share-Care-koncept. Jeg uploadede dem til Claude og bad den om at omsætte dem til en rubric med kriterier, vægte og niveaubeskrivelser. Claude læste materialet, identificerede de relevante krav og strukturerede det til syv kriterier.

## Første version

Claude byggede en simpel FastAPI-backend med ét endpoint `/grade` der tog en rapporttekst, sendte den til Claude API'et og returnerede en JSON-vurdering. Det virkede — men var skrøbeligt. Ét API-kald, ingen fejlhåndtering, og modellen returnerede af og til JSON med engelske feltnavne eller score som string i stedet for tal.

## Reliability-forbedringer

Jeg besluttede at bygge det ordentligt. Claude tilføjede tre nye moduler:

**Self-consistency** — i stedet for ét enkelt kald kører systemet nu tre parallelle kald og tager median-scoren. Hvis kaldene er uenige om niveauet på et kriterium, flagges det med et advarselsikon i frontend'en.

**Schema-reparation** — engelske niveauer som `high` og `medium` mappes automatisk til `høj` og `middel`. Score som string koerces til float. Manglende kriterier udfyldes med `ukendt` frem for at crashe.

**Retry med exponential backoff** — transiente API-fejl håndteres automatisk med op til tre forsøg og stigende ventetid mellem dem.

## Features

- 7 vurderingskriterier udledt af læringsmål, rapportkrav og Dare-Share-Care
- Struktureret JSON-output med niveau, score, begrundelse og evidens pr. kriterium
- Forbedringsforslag og dialogspørgsmål til den mundtlige eksamen
- Tegnoptælling i kode — ikke i modellen — så omfangsvurderingen er præcis
- Prompt-injection forsvar så rapportens indhold ikke kan manipulere modellen
- Audit-log der gemmer alle vurderinger med request-id og prompt-hash

##  Test

Vi testede systemet på tre rigtige praktikrapporter. Resultaterne:

| Studerende | Niveau | Score |
|---|---|---|
| Student 1 — Cloud Operations | høj | 81 |
| Student 2 — Ski-rejse startup | middel | 67 |
| Student 3 — AI Research | middel | 56 |

Rubricen kunne differentierer de tre rapporter er faktisk forskellige i karakter, og scorerne afspejler det.

---

## 🔧 Ting der skulle fikses

**API-nøglen forsvandt** hver gang terminalen blev lukket fordi `set` kun sætter variabler for den aktuelle session. Løsningen var en `.env`-fil med `python-dotenv` så nøglen automatisk loades når backend starter.

**CORS-fejl** opstod da frontend og backend kørte på forskellige porte. Løsningen var at lade FastAPI serve `index.html` direkte via `/ui`-endpointet så alt kørte på samme port uden browser-restriktioner.

**500-fejl** kom af at API-nøglen ikke var sat i miljøet. Terminalen viste præcis fejlbeskeden — `ANTHROPIC_API_KEY ikke sat` — så det var hurtigt at spore.

Alt i alt gode læringspunkter. 😄

##  Hvad jeg lærte

**Om LLM-integration:** En sprogmodel i en softwareapplikation er ikke bare et API-kald. Det handler om promptdesign, fejlhåndtering, schema-validering og at tage stilling til hvornår modellen er usikker. Self-consistency og varians-rapportering var den vigtigste enkeltforbedring.

**Om vibe coding:** AI er et fantastisk værktøj, men det er ikke magi. Man skal stadig forstå hvad man vil, kommunikere klart og debugge når noget går galt. Import-fejlene lærte mig mere om Python's module system end timer af tutorials ville have gjort.

**Om at bygge projekter:** Rubricen er det sværeste — ikke koden. At oversætte vage krav til præcise niveaubeskrivelser med konkrete eksempler er det arbejde der afgør om vurderingerne er brugbare eller generiske.

---

##  AI's fejl

AI er ikke perfekt. Der var imports med forkert sti, en model der som default ikke eksisterede, og outputs der virkede lokalt men ikke i produktion. Det er vigtigt at se at man ikke kan stole 100% på AI — men det er stadig et enormt kraftfuldt værktøj at kode med. Man skal bare have styr på hvad man beder om og verificere at det rent faktisk virker.

---

##  Prøv det selv

API'et er live med Swagger UI hvor du kan indsætte en rapport og få en vurdering tilbage på få sekunder. Koden ligger på GitHub med fuld dokumentation og 19 automatiserede tests. Man skal selv lave en env fil og sætte en api nøgle ind for at få det til at fungere.

---

## link til github
https://github.com/FredeBas/Ai-Grader
