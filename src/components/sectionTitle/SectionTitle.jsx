import React from "react";
import PropTypes from "prop-types";

const SectionTitle = ({ title, children }) => {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionTitle;
