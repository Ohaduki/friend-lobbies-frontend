import { Badge, Card, Row, Text } from "@nextui-org/react";

export default function CategoryCardsBig() {
  return (
    <Row className="horizontal-scroll-container">
      <div>
        <Card
          isPressable
          isHoverable
          variant="bordered"
          css={{ width: 260, padding: 4, marginRight: "1rem" }}
        >
          <Badge
            variant="flat"
            size={"lg"}
            content={"👤 24"}
            css={{ right: 40, top: 20 }}
          >
            <Card.Image
              src="https://fivethirtyeight.com/wp-content/uploads/2022/11/GettyImages-1442587075-e1668806020544.jpg?w=420"
              css={{
                height: 160,
                width: 280,
                objectFit: "cover",
                borderRadius: "1rem",
              }}
            />
          </Badge>
          <Card.Body css={{ padding: "8px 12px", margin: 0 }}>
            <Text h3 css={{ lineHeight: 1, margin: 0 }}>
              Soccer
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
          css={{ width: 260, padding: 4, marginRight: "1rem" }}
        >
          <Badge
            variant="flat"
            size={"lg"}
            content={"👤 12"}
            css={{ right: 40, top: 20 }}
          >
            <Card.Image
              src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2tpaW5nfGVufDB8fDB8fHww&w=1000&q=80"
              css={{
                height: 160,
                width: 280,
                objectFit: "cover",
                borderRadius: "1rem",
              }}
            />
          </Badge>
          <Card.Body css={{ padding: "8px 12px", margin: 0 }}>
            <Text h3 css={{ lineHeight: 1, margin: 0 }}>
              Skiing
            </Text>
            <Text color="gray">#sports #snow #mountains #skiing </Text>
          </Card.Body>
        </Card>
      </div>
    </Row>
  );
}
