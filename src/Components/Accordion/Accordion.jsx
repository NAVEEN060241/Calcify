import PropTypes from "prop-types";
import {
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from "@coreui/react";
import "./Accordion.css";
import parse from "html-react-parser";

const Accordion = ({ data }) => {
  return (
    <>
      {/* Accordion Container */}
      <div className="manual-description text-start">
        {/* Accordion Title */}
        <h2 className="mb-4 accordion-heading">How Does It Work ? 🔮</h2>
        <CAccordion>
          {data.map((item, index) => (
            <CAccordionItem key={index}>
              {/* Accordion Heading */}
              <CAccordionHeader>{parse(item.header)}</CAccordionHeader>
              {/* Accordion Body */}
              <CAccordionBody>{parse(item.body)}</CAccordionBody>
            </CAccordionItem>
          ))}
        </CAccordion>
      </div>
    </>
  );
};

//PropTypes for the respective elements
Accordion.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      body: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default Accordion;
