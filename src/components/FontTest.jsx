export function FontTest() {
  return (
    <div className="fontTestContainer">
      <h1 class="heading-1 font-medium uppercase tracking-widest">This is an H1 Heading</h1>
      <h2 class="heading-2">This is an H2 Heading</h2>
      <h3 class="heading-3">This is an H3 Heading</h3>
      <h4 class="heading-4">This is an H4 Heading</h4>
      <h5 class="heading-5">This is an H5 Heading</h5>
      <h6 class="heading-6">This is an H6 Heading</h6>

      <p class="paragraph">
        This is a paragraph of text. It contains <strong class="bold-text">bold text</strong>,
        <em class="italic-text">italic text</em>, and <u class="underline-text">underlined text</u>. You can also have{' '}
        <mark class="highlight-text">highlighted text</mark> and
        <del class="deleted-text">deleted text</del>.
      </p>

      <blockquote class="blockquote">This is a blockquote for quoting large sections of text.</blockquote>

      <p class="paragraph">Here is an unordered list:</p>
      <ul class="unordered-list">
        <li class="list-item">First item</li>
        <li class="list-item">Second item</li>
        <li class="list-item">Third item</li>
      </ul>

      <p class="paragraph">Here is an ordered list:</p>
      <ol class="ordered-list">
        <li class="list-item">First item</li>
        <li class="list-item">Second item</li>
        <li class="list-item">Third item</li>
      </ol>

      <p class="paragraph">
        Here is a link:{' '}
        <a href="#" class="link">
          Click here
        </a>
        .
      </p>

      <p class="paragraph">
        This is a <code class="code-inline">code</code> element inside a paragraph.
      </p>

      <pre class="preformatted-text">This is preformatted text. It preserves whitespace and line breaks.</pre>

      <small class="small-text">This is small, fine print text.</small>
    </div>
  );
}
