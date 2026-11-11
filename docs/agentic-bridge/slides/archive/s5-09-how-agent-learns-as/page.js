Deck.slide(/* html */ `
    <section class="slide" aria-label="{{aria}}">
      <header class="slide-header">
        <span class="eyebrow">{{eyebrow}}</span>
        <h2>{{title}}</h2>

      </header>
      <div class="slide-body slide-body--ratio" style="--slide-ratio: 0.95fr 1.05fr;">
        <div class="text-pane"><span class="label">{{label1}}</span><ul class="placeholder-copy"><li>{{li1}}</li></ul><span class="label">{{label2}}</span><ul class="placeholder-copy"><li>{{li2}}</li></ul><span class="label">{{label3}}</span><ul class="placeholder-copy"><li>{{li3}}</li></ul><span class="label">{{label4}}</span><ul class="placeholder-copy"><li>{{li4}}</li></ul></div><div class="text-pane"><p class="code-caption">{{codeCaption1}}</p><pre class="code"><code><span class="h">## Required tools</span>

Call these instead of recalling values from memory. Add \`--format json\`
when the output must be parsed.

| Need                                        | Command                                 |
| ------------------------------------------- | --------------------------------------- |
| Add a Structured Text task and register it  | \`as logical add StProgram &lt;Name&gt;      |
| in \`Cpu.sw\` and \`Package.pkg\`               |  --parent &lt;Pkg&gt;\`                        |
| Prove the project builds                    | \`as build\` (exit \`0\` = success,         |
|                                             |  \`1\` = errors)                          |</code></pre><p class="code-caption">{{codeCaption2}}</p><pre class="code"><code>| Operation                    | Command family                          |
| Build, rebuild, clean, ARSim | \`as build\`, \`as build rebuild\`, …       |
| Transfer to a PLC            | \`as transfer online --ip &lt;IP&gt;\`          |
| Discover technology schemas  | \`as config schema list\`, \`… read\`       |
| Symbol intelligence          | \`as symbol search &lt;query&gt;\`, …           |</code></pre></div>
      </div>
    </section>
`);
