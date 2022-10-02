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

<!-- RFC text documents are cool. Simple semantic HTML is cool. Let's combine them. -->
RFC text documents are cool. Markdown is nice.

Let's combine them.

<h2 data-rfc-heading=plain id=introduction>Introduction</h2>

This is a project where you can take your existing plain semantic HTML and convert it to authentic looking RFC documents.
If you ever wonder what the underlying HTML looks like, feel free to at any point check the source of this page. Everything here is generated from a Markdown document ([source](#)), with very little inline HTML.

Before reading on, please take a moment to set your preferences. Your browser must support the CSS function \`:has(…)\`.</p>

- <label><input type=checkbox name=dark-mode checked> <code>color-scheme: dark;</code></label>
- <label><input type=checkbox name=justify> <code>text-align: justify;</code></label>
- <label><input type=checkbox name=extra> <code>--rfc-extra: yes please;</code></label>  

Settings like these do not exist even in the HTML versions of RFCs, but they are a nice addition to reading, in my opinion.</p>

<aside data-rfc-toc></aside>

## Features
> Eat your own dog food ([explanation](dogfooding))

This entire document both explains and shows RFC-CSS. Everything is written in Markdown and converted to HTML.

- auto number headings
- lists (unordered, ordered)
- description lists
- block quotes

[dogfooding]: https://en.wiktionary.org/wiki/eat_one%27s_own_dog_food

## Customizability
Some features can be modified with custom css rules. because css rules are scoped we could theoreticall change them per document, or per element.

these are the available rules:
- `--rfc-content-indentation`
- `--rfc-term-width`
- `--rfc-heading-spacing`

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

## Why

- serious documentation at work
- common markdown to html feel lacking – unprofessional
- i like rfc documents, focus is entirely on content
