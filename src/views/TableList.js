import React from "react";
import axios from "axios";
import httpRequest from "services/createAPI";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

class TableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listUsers: [],
    };
  }
  async componentDidMount() {
    let res = await httpRequest.get(`/users/accepted`);
    this.setState({
      listUsers: res && res.data && res.data.items ? res.data : [],
    });
    console.log(`check respin`, res.data.items);

    // axios.get(`http://185.213.27.86:5000/api/v1/users/accepted`).then(res => {
    //   console.log(`check respin`, res);
    // });
  }
  render() {
    let { listUsers } = this.state;
    console.log(listUsers);
    return (
      <>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card className="card-plain table-plain-bg">
                <Card.Header>
                  <Card.Title as="h4">Danh sách người dùng</Card.Title>
                  <p className="card-category">Thông tin cá nhân</p>
                </Card.Header>
                <Card.Body className="table-full-width table-responsive px-0">
                  <Table className="table-hover">
                    <thead>
                      <tr>
                        <th className="border-0">ID</th>
                        <th className="border-0">Email</th>
                        <th className="border-0">Is_accepted</th>
                        <th className="border-0">Running</th>
                        <th className="border-0">Total_scan</th>
                        <th className="border-0">Total_alert</th>
                      </tr>
                    </thead>

                    <tbody>
                      {listUsers &&
                        listUsers.items &&
                        listUsers.items.map((item, index) => {
                          return (
                            <tr key={item.id}>
                              <td>{index + 1}</td>
                              <td>{item.email}</td>
                              <td>{item.is_accepted}</td>
                              <td>{item.running}</td>
                              <td>{item.total_scan}</td>
                              <td>{item.total_alert}</td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default TableList;
