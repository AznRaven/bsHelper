import Accordion from "./Accordian";

export default function BsItems() {
    let category = ['Components','Content','Customize','Forms','Helpers','Layout','Utilities']
  return (
    <>
      <div><Accordion category={category}/></div>
    </>
  );
}
