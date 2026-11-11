I18N.strings({
  aria: "How an AI agent works: architecture and context window",
  eyebrow: "Agentic Engineering · How agents work",
  title: "How an agent works",
  label1: "Agent = LLM + harness",
  li1: "<strong>LLM</strong>: a stateless engine that takes tokens in and produces tokens out.",
  li2: "<strong>Tools</strong>: file edits, terminal and CLI commands, HTTP APIs, MCP tools.",
  li3: "<strong>Harness</strong>: orchestrates the tools and re-sends a curated context every turn.",
  label2: "Context window = short-term memory",
  li4: "A token budget: how much the LLM can process at once (1M tokens ≈ 2,000 pages).",
  li5: "Everything competes for it: instructions, skills, tool definitions, files, history.",
  li6: "When full, the harness compacts it. Long-term memory lives outside, in files.",
  alt1: "An AI agent connected to tools, an LLM, memory and the user",
});
