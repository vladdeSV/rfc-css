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
    <li><time pubdate datetime="2022-09">September 2022</time></li>
  </ul>
</header>

# Semantic HTML in Authentic Old School RFC Format

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
    <label><input type=checkbox name=extra> <code>--rfc-extra: yes please;</code></label>
  </p>
  <p>Settings like these do not exist even in the HTML versions of RFCs, but they are a nice addition to reading, in my opinion.</p>
</div>

<aside data-rfc-toc></aside>

## Features
> Eat your own dog food ([explanation][dogfooding])

This entire document both explains and shows RFC-CSS. Everything is written in Markdown and converted to HTML.

[dogfooding]: https://en.wiktionary.org/wiki/eat_one%27s_own_dog_food

### Customizability
Some features can be modified with custom css rules. because css rules are scoped we could theoreticall change them per document, or per element.

My suggestion is to set these variables globally to ensure a consisten looking document. these are the available rules:

<dl>
  <dt><code>--rfc-content-indentation</code></dt>
  <dd>Spacing between the edge of the document and the main content (paragraphs, lists, etc).</dd>

  <dt><code>--rfc-term-width</code></dt>
  <dd>Minimum width of terms in description lists.</dd>

  <dt><code>--rfc-heading-spacing</code></dt>
  <dd>Spacing between the heading and the numbering of the heading.</dd>
</dl>

you would apply these rules with CSS like so:
```css
/* style.css */

.special-heading {
  --rfc-heading-spacing: 2ch;
}
```
or directly inline html
```html
<h2 style="--rfc-heading-spacing: 2ch;">My Special Heading</h2>
```

### Headings
All headings are bold and not indented. The main title `h1` is centered. Headings `h2` to `h6` are automatically numbered.

Any headings with the attribute `data-rfc-heading=plain` will be both un-numbered and not bolded, as well as not count towards the heading numbers.

```html
<h2 data-rfc-heading=plain id=introduction>Introduction</h2>
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
    <input type=range min=0 max=4 value=1 oninput="setCustomHeadingSpacing(this.value)">
  </label>
  <output name=heading-spacing><code>--rfc-heading-spacing: 1ch;</code></output>
</p>


### Lists
Supported lists are

1. ordered lists

1. unordered lists

1. description lists

The spacing between items is determined by the content in the `<li>`-tags. Because of how markdown works, putting blank rows between items causes the text to be wrapped in `<p>`-tags.

Following conventions from RFCs, unordered lists use the letter 'o' as marker. Some example RFCs which follow this convention:

- [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)
- [RFC8174](https://datatracker.ietf.org/doc/html/rfc8174)

Not all follow this convention (eg. [RFC9311](https://datatracker.ietf.org/doc/html/rfc9311)), but from my own expreiences, most do.

### Sections
Sometimes you need show off some text indented. Unfortunately there is no appropriate Markdown alternative for this, so the `<section>`-tag is used.

<section>
  <p><strong>Note</strong>: The side-effect of using the <code>&lt;section&gt;</code>-tag is that no Markdown can be used within, and needs to be entirely written (and escaped properly) in HTML.</p>
</section>

For instance, that note was written as
```html
<section>
  <p><strong>Note</strong>: The side-effect of using the <code>&lt;section&gt;</code>-tag is that no Markdown can be used within, and needs to be entirely written (and escaped properly) in HTML.</p>
</section>
```

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

This button can show you that in the end its only HTML and nothing more.

<section>
  <p><strong>Note</strong>: You will need to refresh the page in order to reset the styling of this page.</p>
</section>

<label>
  Remove data-rfc attribute: <input type=button value=remove onclick="document.querySelector('[data-rfc]').removeAttribute('data-rfc'); document.body.style.setProperty('margin', '8px'); this.setAttribute('disabled', null)">
<label>
