import graphicImage from '../../assets/images/mobile/image-graphic-design.jpg';
import photographyImage from '../../assets/images/mobile/image-photography.jpg';
import standOutImage from '../../assets/images/mobile/image-stand-out.jpg';
import transformImage from '../../assets/images/mobile/image-transform.jpg';

type CardProps = {
  image: string;
  heading: string;
  paragraph: string;
};

const CardNormal = ({ image, heading, paragraph }: CardProps) => {
  return (
    <div>
      <img src={image} role="presentation" />

      <article>
        <h3>{heading}</h3>

        <p>{paragraph}</p>

        <a href="#">learn more</a>
      </article>
    </div>
  );
};

const CardInset = ({ image, heading, paragraph }: CardProps) => {
  return (
    <div>
      <img src={image} role="presentation" />

      <article>
        <h3>{heading}</h3>

        <p>{paragraph}</p>

        <a href="#">learn more</a>
      </article>
    </div>
  );
};

const Services = () => {
  return (
    <section>
      <CardNormal
        image={transformImage}
        heading="transform your brand"
        paragraph=" We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you."
      />
      <CardNormal
        image={standOutImage}
        heading="Stand out to the right audience"
        paragraph="Using a collaborative formula of designers, researchers, phootographers, videographers and copywriters, we'll build and extend your brand in digital places."
      />
      <CardInset
        image={graphicImage}
        heading="Graphic Design"
        paragraph="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention."
      />
      <CardInset
        image={photographyImage}
        heading="Photography"
        paragraph=" Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
      />
    </section>
  );
};

export default Services;
