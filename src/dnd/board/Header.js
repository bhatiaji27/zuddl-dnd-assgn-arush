import { colors } from "@atlaskit/theme";
import React from "react";
import arushImg from "../static/arush.jpeg";
import { Card, CardBody, Col, Row } from "reactstrap";

const Header = () => {
  return (
    <Row>
      <Col xs={12}>
        <Card>
          <CardBody>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex" }}>
                <h5 style={{ margin: "0 10px" }}>ZUDDL WORKSPACE </h5>
                <span style={{ color: colors.B100 }}>></span>
                <h5 style={{ margin: "0 10px", color: colors.B400 }}>
                  BOARD A
                </h5>
                <span style={{ color: colors.B100 }}>></span>
                <h5 style={{ margin: "0 10px", color: colors.B400 }}>TEAM A</h5>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <span>Arush Bhatia</span>
                <img
                  src={arushImg}
                  alt="arush"
                  style={{ width: "30px", height: "30px" }}
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Header;
