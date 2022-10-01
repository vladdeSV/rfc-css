<nav>
  <ul>
    <li><a href=#>home</a></li>
    <li><a href=#>other</a></li>
    <li><a href=#>misc</a></li>
  </ul>
  SHOWCASE
</nav>
<header>
  <ul>
    <li>b. the bubbening</li>
    <li>RFC-CSS</li>
    <li>Category: Hobby Project</li>
    <li>Cool Number: 1337-420-69</li>
    <li>Cool Word: nice.</li>
  </ul>
  <ul>
    <li>Vladimirs Nordholm</li>
    <li><time datetime="2022-09">September 2022</time></li>
  </ul>
</header>

# Semantic HTML in Authentic Old School RFC Format

## 
## Summary
> CSS has become so powerful we can finally emulate text documents from the 1970's.

Not really. semantic html can go a long way and stil be made to look nice. the simpler and more consice the semantic html, the easier it is to work with.

The goal is to have a simple workflow where even the simplest markdown can be converted to authentic looking RFC documents.

**Note**: This page acts as a demo for RFC-CSS and will be more cluttered than an ordinary page. The purpose of this page is different (a showcase) than the typical use case (documentation / blog / etc). To see a realistic example, see [my version of RFC 3339](./rfc3339.html), then compare to the real [[RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339)].

## 
## Settings
Before reading on, please take a moment to set your preferences. Your browser must support the CSS function \`:has(…)\`.

<ul data-rfc-list-compact>
  <li><label><input type=checkbox name=dark-mode checked> color-scheme: dark;</label></li>
  <li><label><input type=checkbox name=justify> text-align: justify;</label></li>
  <li><label><input type=checkbox name=extra> --rfc-extra: yes please;</label></li>
</ul>

Setting like these do not exist even in the HTML versions of RFCs, but they are a nice addition to reading, in my opinion.

## Styling
Manually editing monospaced text documents gives granularity, but makes screen readers jank out, and changing some formatting becomes a nightmare. This can be automated with CSS. 

### Description list

<p>
  <label>
    interactive term size:<br>
    <input id=js-demo-term-width-range type=range min=0 max=20 value=12 oninput="setCustomTermWidth(this.value)">
  </label>
  <output name=term-width>--rfc-term-width: 12ch;</output>
</p>
<dl id=js-term-width>
  <dt>demo</dt>
  <dd>This is an interactive demo of the Description List can be used, and changed with the CSS variable --rfc-term-width. Drag the slider to change the width of the terms.</dd>
  <dd>The change is purely visual.</dd>
  <div>
    <dt>dynamic</dt>
    <dd>Try moving the slider to about 6ch, and see this text gets placed underneath the term "dynamic".</dd>
    <dd>If you move it back to 12ch, the term and the beginning of this text gets lined up again.</dd>
    <dd>Regardless what you set the width for the term, or how it looks, the semantic meaning of the document is preserved. Everything here can be read by screen readers.</dd>
  </div>
  
  <div>
    <dt><input type=text size=15 value="description list" oninput="this.size = Math.max(this.value.length - 1, 1)"></dt>
    <dd>This is achieved with the &lt;dl&gt; element and some CSS rules, where each "group" is wrapped in a &lt;div&gt;</dd>
    <dd>You can modify the this term "description list" to see how it affects this text.</dd>
  </div>

  <dt>no groups</dt>
  <dd>If each dt-dd group isn't wrapped, they display completely fine, with the execption that the description is always underneath the term, regardless of size.</dd>
  <dd><label>Show layout: <input type=checkbox name=layout></label></dd>
</dl>

<h3 id=js-heading-spacing>Heading spacing</h3>
<p>
  <label>interactive heading numbering spacing:<br>
    <input id=js-demo-heading-spacing type=range min=0 max=4 value=1 oninput="setCustomHeadingSpacing(this.value)">
  </label>

  <output name=heading-spacing>--rfc-heading-spacing: 1ch;</output>
</p>

## Semantic


## why
we needed a nice way to store info at work. documentation that is not fluff with css and other bullcrap.

bloated pages is liked by nobody. we need a way to store info in a way that is easy to read and easy to write. docusaurus is our current alternative, which is fine, but it is a bit bloated and attempts to be modern

the way rfcs are written are facinating for me. they are written in a way that yuou look at them and feel some sort of feeling that what is written here is pure data. no fluff with css. the first rfc were just text documents. rfcs are just text documents. the newest rfcs are avvailable as rich html files, and as text files, and a mix of something inbetween. text documents lack visual cues and semantic meaning, where as the rich html versions simply put in my opinion look boring.

- make documentation for work that can be easily written and displayed in a good way

## Techincal
1. Store Markdown documents
2. Server plain HTML
3. Client renders semantic HTML as RFC document

## Nothing is perfect
Some RFC formatting conventions are not applicable automatic conversion from Markdown to HTML. One example is the convention to put double spacing after a period. If I write two spaces, the Markdown parser discards them. Even if they get through, without the CSS rule \`white-space: pre | pre-*\` they will not be rendered.

- spacing after dot "."
- header
- page breaks
- table of contents
- center alignment
