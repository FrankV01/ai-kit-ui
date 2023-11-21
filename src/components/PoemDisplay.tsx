import React from "react";
// import axios from 'axios';
import { Carousel } from "react-bootstrap";

interface PoemsCarouselProps {
  poems: string[];
}

// This component is just getting in the way. For now, lets simplfiy.
const PoemsCarousel: React.FC<PoemsCarouselProps> = ({
  poems,
}: PoemsCarouselProps) => {
  return (
    <Carousel data-bs-theme="dark" fade>
      {poems.map((poem, idx) => (
        <Carousel.Item key={idx}>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100%" }}
          >
            <p>{poem}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

const PoemDisplay = () => {
  //const [data, setData] = useState(null);

  // const fetchData = () => {
  //   axios.get('http://your-rest-server.com/api/data')
  //     .then((response: { data: React.SetStateAction<null>; }) => {
  //       setData(response.data);
  //     })
  //     .catch((error: any) => {
  //       console.error('Error fetching data', error);
  //     });
  // };
  const example =
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.';
  const example2 =
    "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";
  return (
    <div>
      <PoemsCarousel poems={[example, example2]} />
    </div>
  );
};

export default PoemDisplay;
