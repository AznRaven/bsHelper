import ReactDOMServer from "react-dom/server";
import CircularJSON from "circular-json";

export default function Accordion(props) {
  const numItems = props.count;
  console.log("count", numItems);

  const accordionItems = [];

  for (let i = 1; i <= numItems; i++) {
    accordionItems.push(
      <div className="accordion-item" key={i}>
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse${i}`}
            aria-expanded="false"
            aria-controls={`flush-collapse${i}`}
          >
            Accordion Item #{i}
          </button>
        </h2>
        <div
          id={`flush-collapse${i}`}
          className="accordion-collapse collapse"
          data-bs-parent="#accordionFlushTest"
        >
          <div className="accordion-body">
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> class. This is item #
            {i}'s accordion body.
          </div>
        </div>
      </div>
    );
  }

  const accordionItemsHtml = accordionItems
    .map((item, index) => ReactDOMServer.renderToStaticMarkup(item))
    .join("\n");
  const codeBlock = `<div class="accordion accordion-flush" id="accordionFlushTest">\n${accordionItemsHtml}</div>`;

  const handleCopyClick = () => {
    navigator.clipboard.writeText(codeBlock);
    // alert("Code copied to clipboard!");

  };

  return (
    <>
      {accordionItems}
      <br />
      <div className="code-box">
        <code>
          <pre>{codeBlock}</pre>
        </code>
        {/* <button onClick={handleCopyClick}>Copy</button> */}
        <button onClick={handleCopyClick} type="button" class="btn btn-outline-light">Copy</button>
      </div>
    </>
  );
}
