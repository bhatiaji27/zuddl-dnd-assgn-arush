import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import { generateQuoteMap } from "./dnd/mockData";

import Board from "./dnd/board/Board";
import { colors } from "@atlaskit/theme";
import arushImg from "./dnd/static/arush.jpeg";

export default function App() {
  const data = generateQuoteMap(10);

  return (
    <>
      <Row>
        <Col xs={12}>
          <Card>
            <CardBody>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{display: "flex"}}>
                  <h5 style={{ margin: "0 10px" }}>ZUDDL WORKSPACE </h5>
                  <span style={{ color: colors.B100 }}>></span>
                  <h5 style={{ margin: "0 10px", color: colors.B400 }}>
                    BOARD A
                  </h5>
                  <span style={{ color: colors.B100 }}>></span>
                  <h5 style={{ margin: "0 10px", color: colors.B400 }}>
                    TEAM A
                  </h5>
                </div>
                <div style={{display: "flex", gap: "10px"}}>
                  <span>Arush Bhatia</span>
                  <img src={arushImg} alt="arush" style={{width: "30px", height: "30px", }} />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Board initial={data} withScrollableColumns />
    </>
  );
}
