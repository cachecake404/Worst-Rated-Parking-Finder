import { Card } from "antd";

const { Meta } = Card;

function ParkingCard(data, key) {
  const descriptionElement = (
    <div className="description">
      RATINGS: {data.rating}
      <br />
      REVIEWS: {data.review_count}
      <br />
      ADDRESS: {data.location.display_address[0]}
      {data.location.display_address[1]}
      <br />
      LINK: <a href={data.url}>HERE</a>
      <br />
      SCORE: {(data.review_count * data.rating) / (data.review_count + 1)}
    </div>
  );
  return (
    <Card hoverable cover={<img alt={data.name} src={data.image_url} />}>
      <Meta title={data.name} description={descriptionElement} />
    </Card>
  );
}

export default ParkingCard;
