I18N.strings({
  aria: "Come funziona un agente AI: architettura e finestra di contesto",
  eyebrow: "Agentic Engineering · Come funzionano gli agenti",
  title: "Come funziona un agente",
  label1: "Agente = LLM + harness",
  li1: "<strong>LLM</strong>: un motore senza stato che riceve token e produce token.",
  li2: "<strong>Tool</strong>: modifica di file, comandi di terminale e CLI, API HTTP, tool MCP.",
  li3: "<strong>Harness</strong>: orchestra i tool e reinvia a ogni turno un contesto selezionato.",
  label2: "Finestra di contesto = memoria a breve termine",
  li4: "Un budget di token: quanto l'LLM può elaborare in una volta (1M di token ≈ 2.000 pagine).",
  li5: "Tutto compete per questo budget: istruzioni, skill, definizioni dei tool, file, cronologia.",
  li6: "Quando è piena, l'harness la riassume (compattazione). La memoria a lungo termine risiede all'esterno, in file.",
  alt1: "Un agente AI collegato a tool, LLM, memoria e utente",
});
