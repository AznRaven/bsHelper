export default function NavTabBody(name) {
  return (
    <>
      <div
        class="tab-pane fade"
        id={`${name}-tab-pane`}
        role="tabpanel"
        aria-labelledby={`${name}-tab`}
        tabindex="0"
      >
        {`<${name}/>`}
      </div>
    </>
  );
}
