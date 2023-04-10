export default function AccordionItem({name}) {
  return (
    <>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse${name}`}
            aria-expanded="false"
            aria-controls={`flush-collapse${name}`}
          >
            {name}
          </button>
        </h2>
        <div
          id={`flush-collapse${name}`}
          class="accordion-collapse collapse"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> class. This is the
            first item's accordion body.
          </div>
        </div>
      </div>
    </>
  );
}
