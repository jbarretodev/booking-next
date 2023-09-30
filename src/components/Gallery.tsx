import { Carousel } from "flowbite-react";
type Props = {
  pathImages?: string[];
  title?: string;
};

const Gallery = ({ pathImages, title }: Props) => {
  if (pathImages && pathImages.length > 0) {
    return (
      <>
        <Carousel slideInterval={3000}>
          {pathImages.map((pathImage) => (
            <img src={pathImage} key={crypto.randomUUID()} alt={title} />
          ))}
        </Carousel>
      </>
    );
  }
};

export default Gallery;
