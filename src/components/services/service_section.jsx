/* eslint-disable react/prop-types */
import "./service_section.css";

// eslint-disable-next-line react/prop-types
const ServiceSection = ({
  title,
  // eslint-disable-next-line react/prop-types
  desc,
  img,
  imgPos,
  textTop,
  textBot,
  backgroundColor,
}) => {
  return (
    <section className="section_container">
      <div className="child_container">
        <div className="row row__top" style={{ justifyContent: textTop }}>
          <h2 className="h2__s">{title}</h2>
        </div>
        <div className="row row__bot" style={{ justifyContent: textBot }}>
          <p className="description">{desc}</p>
        </div>
      </div>
      {img != "IMAGE_HERE" && (
        <img src={img} alt="image" style={{ ...imgPos }} />
      )}
    </section>
  );
};

export default ServiceSection;
