import { Button, Card, Input, Row } from "@nextui-org/react";
import TopNavbar from "../components/navbar/TopNavbar";



function LobbyCreation(){

    return(
        <>
            <header>
                <TopNavbar/>
            </header>
            <main>
                <Card>
                    <Card.Header>
                        <Row>
                            <Row>

                            </Row>
                            <Input
                                clearable
                                underlined
                                // labelPlaceholder="Lobby Name"
                                initialValue="Lobby Name"
                            />
                        </Row>
                    </Card.Header>
                    <Card.Body>

                    </Card.Body>
                </Card>
            </main>
        </>
    )
}

export default LobbyCreation;