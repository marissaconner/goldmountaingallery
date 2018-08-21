import React from "react";
import htmlToReact from "html-react-parser";

const AssociationLink = ({ association, url }) => (
  <span>
    &mdash; {url ? <a href={url}>{association}</a> : `${association}`}
  </span>
);

const Testimonial = ({ name, title, association, url, content }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <h2>{title ? `${title}` : `${name}'s Testimonial`}</h2>
        {htmlToReact(content)}
        <div className="testimonialsignature">
          <p>
            {name}{" "}
            {association ? (
              <AssociationLink association={association} url={url} />
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
