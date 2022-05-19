import React, { useState } from "react";
import {
  Table,
  Form,
  Pagination,
  Container,
  Col,
  Row,
  Card,
} from "react-bootstrap";
import { useEffect } from "react";
import "../styles/App.css";

let url = "https://fakerapi.it/api/v1/persons";
// use this URL to fetch the data and the set the param "_quantity" to 50

const PaginatedTable = () => {
  const rowsPerPage = 15;

  return (
    <div className="paginated-table">
      <Table bordered hover>
        <thead>
          <tr>
            <th>ID #</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>Phone No.</th>
            <th>Gender</th>
            <th>Birthday</th>
            <th>Country</th>
          </tr>
        </thead>
      </Table>
    </div>
  );
};

const SortBy = () => {
  return (
    <div className="sort-by">
      <div>
        <h5>Sort By:</h5>

      </div>{" "}
      <div className="my-3">
        <h5>Sort Order:</h5>

      </div>
    </div>
  );
};

const App = () => {

  return (
    <div id="main">
      <Container fluid className="p-5">
        <Row>
          <h2 className="text-center">Person of Interest</h2>
          <hr />
          <Col sm={12} md={3} className="p-3">
            <Card className="p-3">
              <SortBy />
            </Card>
          </Col>
          <Col sm={12} md={9} className="p-3">
            <Card className="p-3">
              <PaginatedTable />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
