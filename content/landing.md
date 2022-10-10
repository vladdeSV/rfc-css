---
title: Semantic HTML in Authentic Old School RFC Format
date: 2022-10-10T00:00:00
draft: false
---

<h2 data-rfc-heading=plain id=summary>Summary</h2>

> CSS has become so powerful we can finally emulate text documents from the 1970's.

RFC text documents are cool. Markdown is nice.

Let's combine them.

<h2 data-rfc-heading=plain id=introduction>Introduction</h2>

This is a project where you can take your existing plain semantic HTML and convert it to authentic looking RFC documents.
If you ever wonder what the underlying HTML looks like, feel free to at any point check the source of this page. Everything here is generated from a Markdown document ([source](#)), with very little inline HTML.

<div class=has>
  <p>Before reading on, please take a moment to set your preferences. Your browser must support the CSS function <code>:has(…)</code>.</p>
  <p>
    <label><input type=checkbox name=dark-mode checked> <code>color-scheme: dark;</code></label><br>
    <label><input type=checkbox name=justify> <code>text-align: justify;</code></label><br>
    <label><input type=checkbox name=extra> extra custom css</label>
  </p>
  <p>Settings like these do not exist even in the HTML versions of RFCs, but they are a nice addition to reading, in my opinion.</p>
</div>

<nav data-rfc-toc>
  <h2 data-rfc-heading=plain id=table-of-contents>Table of Contents</h2>

1. [1.](#features) Features
    1. [1.1.](#customizability) Customizability
    1. [1.2.](#headings) Headings
    1. [1.3.](#lists) Lists
        1. [1.3.1.](#description-lists) Description lists
    1. [1.4.](#sections) Sections
    1. todo \...

</nav>

## Features
> Eat your own dog food ([explanation][dogfooding])

This entire document both explains and shows RFC-CSS. Everything is written in Markdown and converted to HTML.

[dogfooding]: https://en.wiktionary.org/wiki/eat_one%27s_own_dog_food

### Customizability
Some features can be modified with custom css rules. because css rules are scoped we could theoreticall change them per document, or per element.

My suggestion is to set these variables globally to ensure a consisten looking document. these are the available rules:

<dl style="--rfc-term-width: 23ch;">
  <dt><code>--rfc-heading-spacing</code></dt>
  <dd>Spacing between the heading and the numbering of the heading.</dd>

  <dt><code>--rfc-term-width</code></dt>
  <dd>Minimum width of terms in description lists.</dd>

  <dt><code>--rfc-list-marker</code></dt>
  <dd>String representing how lists should be displayed. Commonly one letter, followed by two spaces.</dd>

  <dt><code>--rfc-content-indentation</code></dt>
  <dd>Spacing between the edge of the document and the main content (paragraphs, lists, etc).</dd>
</dl>

you would apply these rules with CSS like so:
```
/* style.css */

.special-heading {
  --rfc-heading-spacing: 2ch;
}
```
or directly inline html
```
<h2 style="--rfc-heading-spacing: 2ch;">My Special Heading</h2>
```

<h3 data-rfc-heading=counter id=headings style="--rfc-heading-spacing: 2ch;">Headings</h3>

Auto numbering of headings can be enabled by applying the attribute `data-rfc-heading=counter` to any of the headings' parents, or the heading itself.

Any headings with the attribute `data-rfc-heading=plain` will be both un-numbered and not bolded, as well as not count towards the heading numbers.

```
<h2 data-rfc-heading=plain id=introduction>Introduction</h2>

<h3 data-rfc-heading=counter id=headings>Headings</h3>
```

<p>
  <script>
    function setCustomHeadingSpacing(spacing) {
      const style = '--rfc-heading-spacing: ' + spacing + 'ch;'
      document.getElementById('headings').style = style
      document.querySelector('output[name=heading-spacing]').innerHTML = `<code>${style}</code>`
    }
  </script>
  <strong>Demo</strong>:
  <label>interactive heading numbering spacing:<br>
    <input type=range min=0 max=4 value=2 oninput="setCustomHeadingSpacing(this.value)">
  </label>
  <output name=heading-spacing><code>--rfc-heading-spacing: 2ch;</code></output>
</p>


### Lists
Following conventions from RFCs, unordered lists use the letter 'o' as marker. Some example RFCs which follow this convention:

- [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)

- [RFC8174](https://datatracker.ietf.org/doc/html/rfc8174)



The marker can be modified with the variable `--rfc-list-marker`.

```
ul.my-list {
  --rfc-list-marker: '-  ';
}
```

becomes

<ul style="--rfc-list-marker: '-  ';">
  <li>test
  <li>test2
</ul>

The spacing between items is determined by the content in the `<li>`-tags. Because of how markdown works, putting blank rows between items causes the text to be wrapped in `<p>`-tags.

#### Description lists

<blockquote cite=https://theportalwiki.com/wiki/Cave_Johnson_voice_lines#1982>
  <p>When life gives you lemons, [...] make life take the lemons back.</p>
</blockquote>

The "description list" is, in my opinion, the most underrated list. It is perfect when you want to clearly (and semantically) describe a term. Unfortunately Markdown does not support description lists, so they will have to be written entierly in HTML.

Wrapping each "group" in a `<div>`-tag creates a visual style commonly found in RFCs when defining terms.

Example:

<dl>
  <div>
    <dt>term</dt>
    <dd>The "term" used to name thing that is being described</dd>
  </div>
  <div>
    <dt>description</dt>
    <dd>An explanation of what the term is, placed adjecant to the term. The HTML specification from <a href=https://www.w3.org/MarkUp/HTMLPlus/htmlplus_34.html>1993</a> calls this a "definition", but the current HTML specification <a href=https://html.spec.whatwg.org/multipage/grouping-content.html#the-dl-element>WHATWG</a> calls this "description"</dd>
  </div>
  <div class=has>
    <dt>layout</dt>
    <dd>To visualize the layout, you can use this handy toggle to see the layout. <label>Show layout: <input type=checkbox name=layout></label></dd>
  </div>
</dl>

Leaving the terms and descriptions "unwrapped" will visuall look different, while still keeping the same semantic meaning as in the list above:

<p>
  <script>
    function setCustomTermWidth(width) {
      const style = '--rfc-term-width: ' + width + 'ch;'
      document.getElementById('demo-term-width').style = style
      document.querySelector('output[name=term-width]').innerHTML = `<code>${style}</code>`
    }
  </script>
  <strong>Demo</strong>:
  <label>
    interactive term size:<br>
    <input type=range min=0 max=20 value=12 oninput="setCustomTermWidth(this.value)">
  </label>
  <output name=term-width>--rfc-term-width: 12ch;</output>
</p>
<dl id=demo-term-width>
  <dt>demo</dt>
  <dd>This is an interactive demo of the description list, and modified with the CSS variable <code>--rfc-term-width</code>. Drag the slider to change the width of the terms.</dd>
  <dd>The change is purely visual.</dd>
  <dt>dynamic</dt>
  <dd>Try moving the slider to about 6ch, and see this text gets placed underneath the term "dynamic".</dd>
  <dd>If you move it back to 12ch, the term and the beginning of this text gets lined up again.</dd>
  <dd>Regardless what you set the width for the term, or how it looks, the semantic meaning of the document is preserved. Everything here can be read by screen readers.</dd>


  <script>
    // setting <input> size acts different on Firefox and Chromium. This fixes this.

    const isFirefox = typeof InstallTrigger !== 'undefined'
    const inputSizeDelta = isFirefox ? 1 : 0

    function setInputSize(input) {
      input.size = 15 + inputSizeDelta
    }

    function setInputWidth(input) {
      input.size = Math.max(input.value.length - 1 + inputSizeDelta, 1)
    }

    // document onload event
    document.addEventListener('DOMContentLoaded', (event) => {
      const input = document.getElementById('demo-dl-term-width')      
      setInputSize(input)
      input.addEventListener('input', () => setInputWidth(input))
    })
  </script>
  <dt><input id=demo-dl-term-width type=text size=15 value="description list"></dt>
  <dd>
    You can modify the this term "description list" to see how it affects this text.
    <div class=has><br><label>Show layout: <input type=checkbox name=layout></label>
  </dd>
</dl>

### Sections
Sometimes you need show off some text indented. Unfortunately there is no appropriate Markdown alternative for this, so the `<section>`-tag is used.

<section>
  <p><strong>Note</strong>: The side-effect of using the <code>&lt;section&gt;</code>-tag is that no Markdown can be used within, and needs to be entirely written (and escaped properly) in HTML.</p>
</section>

For instance, that note was written as
```
<section>
  <p><strong>Note</strong>: The side-effect of using the <code>&lt;section&gt;</code>-tag is that no Markdown can be used within, and needs to be entirely written (and escaped properly) in HTML.</p>
</section>
```

## Weaknesses
I strive to have a 1:1 stylesheet to look like a RFC document, but there are a couple smaller things which I do now know how to emulate / fix with pure CSS.

### Double spaces
I do not understand why, but RFCs are written with double spaces after a sentance. As far as I know, there is no way with pure CSS to enforce this. If you write HTML and set the CSS rule `white-space: pre` or similar you can keep the whitespace. However, this is not how I write my paragraphs. Furthermore, this is a Markdown document, and extra whitespace gets trimmed away.

If there is a CSS rule which allows for doubly spaces after periods in tags, please leave a PR.

### Too centered titles
For titles which are centered, it becomes a problem when there are a odd number of characters in the title, as a there will be a one character misalignment in textdoucments, but CSS just puts it in the exact middle.

### Inline whitespace shenanigans
I've noticed that `inline` elements (`display: inline;`) depend on the whitespace in the HTML document. This causes issues when I want a specified amount of character spacing between elements. The following snippets will display differently in a `<dl>`-tag:

- `<dt>foo</dt><dd>bar</dd>`
- `<dt>foo</dt> <dd>bar</dd>`, or any form of whitespace between

## Why

- serious documentation at work

- common markdown to html feel lacking – unprofessional

- i like rfc documents, focus is entirely on content

## The Truth
If you are extra curious, I offer you this single use button to remove a single attribute from the parent node.

The button will:

1. Remove the `data-rfc` attribute from this document
2. Reset the margin `<body>`-tag
3. Disable itself

This button can show you the page in its entierty and that in the end its only HTML and nothing more.

<section>
  <p><strong>Note</strong>: You will need to refresh the page in order to reset the styling of this page.</p>
</section>

<label>
  Remove data-rfc attribute: <input type=button value=remove onclick="document.querySelector('[data-rfc]').removeAttribute('data-rfc'); document.body.style.setProperty('margin', '8px'); this.setAttribute('disabled', null)">
<label>
