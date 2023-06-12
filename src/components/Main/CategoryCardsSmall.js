import { Badge, Card, Row, Text } from "@nextui-org/react";

<<<<<<< Updated upstream
export default function CategoryCardsSmall() {
  return (
    <Row className="horizontal-scroll-container">
      <div>
        <Card
          isPressable
          isHoverable
          variant="bordered"
          css={{ width: 160, padding: 4, marginRight: "1rem" }}
        >
          <Badge
            variant="flat"
            size={"lg"}
            content={"👤 24"}
            css={{ right: 38, top: 20 }}
          >
            <Card.Image
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              css={{
                height: 160,
                width: 160,
                objectFit: "cover",
                borderRadius: "1rem",
              }}
            />
          </Badge>
          <Card.Body css={{ padding: "8px 12px", margin: 0 }}>
            <Text h3 css={{ lineHeight: 1, margin: 0 }}>
              Healthy Food
            </Text>
            <Text color="gray">#sports #soccer #outdoors #team</Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card
          isPressable
          isHoverable
          variant="bordered"
          css={{ width: 160, padding: 4, marginRight: "1rem" }}
        >
          <Badge
            variant="flat"
            size={"lg"}
            content={"👤 12"}
            css={{ right: 38, top: 20 }}
          >
            <Card.Image
              src="https://patch.com/img/cdn20/shutterstock/22511888/20230222/073126/shutterstock-343034981___22193126563.jpg"
              css={{
                height: 160,
                width: 160,
                objectFit: "cover",
                borderRadius: "1rem",
              }}
            />
          </Badge>
          <Card.Body css={{ padding: "8px 12px", margin: 0 }}>
            <Text h3 css={{ lineHeight: 1, margin: 0 }}>
              Cheese week
            </Text>
            <Text color="gray">#sports #snow #mountains #skiing </Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card
          isPressable
          isHoverable
          variant="bordered"
          css={{ width: 160, padding: 4, marginRight: "1rem" }}
        >
          <Badge
            variant="flat"
            size={"lg"}
            content={"👤 12"}
            css={{ right: 38, top: 20 }}
          >
            <Card.Image
              src="https://images.immediate.co.uk/production/volatile/sites/30/2008/01/EasyWhiteBread-7756545.jpg?resize=768,574"
              css={{
                height: 160,
                width: 160,
                objectFit: "cover",
                borderRadius: "1rem",
              }}
            />
          </Badge>
          <Card.Body css={{ padding: "8px 12px", margin: 0 }}>
            <Text h3 css={{ lineHeight: 1, margin: 0 }}>
              Bread Cooking
            </Text>
            <Text color="gray">#sports #snow #mountains #skiing </Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card
          isPressable
          isHoverable
          variant="bordered"
          css={{ width: 160, padding: 4, marginRight: "1rem" }}
        >
          <Badge
            variant="flat"
            size={"lg"}
            content={"👤 12"}
            css={{ right: 38, top: 20 }}
          >
            <Card.Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhkP7_xYRdedZNC-kjjgHSCAmHcp5SOj4jkA&usqp=CAU"
              css={{
                height: 160,
                width: 160,
                objectFit: "cover",
                borderRadius: "1rem",
              }}
            />
          </Badge>
          <Card.Body css={{ padding: "8px 12px", margin: 0 }}>
            <Text h3 css={{ lineHeight: 1, margin: 0 }}>
              Family BBQ
            </Text>
            <Text color="gray">#sports #snow #mountains #skiing </Text>
          </Card.Body>
        </Card>
      </div>
    </Row>
=======
// Display limited amount of tag's symbols and remove "#" if it's the last character
function truncateWithEllipsis(text, maxLength) {
  if (text.length > maxLength) {
    let truncatedText = text.substring(0, maxLength);
    if (truncatedText[truncatedText.length - 1] === "#") {
      truncatedText = truncatedText.slice(0, -2);
    }
    return truncatedText + "...";
  }
  return text;
}

export default function CategoryCardsSmall(props) {
  const { badgeContent, cardImgSrc, cardText, cardCat } = props.props;
  const truncatedCardCat = truncateWithEllipsis(cardCat, 15);

  return (
    <div>
      <Card
        isPressable
        isHoverable
        variant="bordered"
        css={{ width: 160, padding: 4, marginRight: "1rem", height: "265px" }}
      >
        <Badge
          variant="flat"
          size={"lg"}
          content={badgeContent}
          css={{ right: 38, top: 20 }}
        >
          <Card.Image
            src={cardImgSrc}
            css={{
              height: 160,
              width: 160,
              objectFit: "cover",
              borderRadius: "1rem",
            }}
          />
        </Badge>
        <Card.Body css={{ padding: "8px 12px", margin: 0 }}>
          <Text h3 css={{ lineHeight: 1, margin: 0 }}>
            {cardText}
          </Text>
          <Text color="gray">{truncatedCardCat}</Text>
        </Card.Body>
      </Card>
    </div>
>>>>>>> Stashed changes
  );
}
