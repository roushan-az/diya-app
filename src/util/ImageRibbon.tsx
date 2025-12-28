type ImageRibbonProps = {
  image: string;
  alt: string;
};

export default function ImageRibbon(props: ImageRibbonProps) {
  return (
    <section className="hero">
      <img
        src={props.image}
        alt={props.alt}
        className="hero-img"
      />
    </section>
  );
}
