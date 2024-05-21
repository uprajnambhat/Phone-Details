import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import MoreDetailsDisplay from "./MoreDetailsDisplay";
import { useParams } from "react-router-dom";

const EachPhoneDetails = () => {
  const { selectedBrandDetails = {}, fullphoneDetails = [] } = useSelector(
    (state) => state.phoneDetails
  );

  const [selectedDisplay, setSelectedDisplay] = useState({});
  const param = useParams();
  console.log(param);
  const { phone } = param;
  console.log(phone);
  const filterData = fullphoneDetails.filter((eachPhone) => {
    return eachPhone.brand == phone;
  });

  // const onDisplayClick = (displayDetails) => {
  //   setSelectedDisplay({ ...displayDetails });
  // };
  console.log("selectedBrandDetails here is", selectedDisplay);
  const {
    brand = "",
    model = "",
    release_year = "",
    display = {},
    camera = {},
    processor = {},
    ram_gb = "",
    storage = {},
    battery = {},
    price = {},
  } = filterData[0] || {};

  console.log("filerdata is ", filterData);
  useEffect(() => {
    setSelectedDisplay({});
  }, [brand]);
  return (
    <div>
      {!!brand && (
        <>
          <h4 className="text-style">{brand} details:</h4>
          <Table striped bordered hover>
            <tbody className="table-style">
              <tr>
                <td>Brand:</td>
                <td>{brand}</td>
              </tr>
              <tr>
                <td>Model:</td>
                <td>{model}</td>
              </tr>
              <tr>
                <td>Release_year:</td>
                <td>{release_year}</td>
              </tr>
              <tr>
                <td>ram_gb:</td>
                <td>{ram_gb}</td>
              </tr>
              <tr>
                <td>Display:</td>
                <td>
                  <Button
                    variant="link"
                    onClick={() => {
                      onDisplayClick(display);
                    }}
                  >
                    More Details
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Camera:</td>
                <td>
                  <td>
                    <Button variant="link" className="button-color">
                      More Details
                    </Button>
                  </td>
                </td>
              </tr>

              <tr>
                <td>Processor:</td>
                <td>
                  <td>
                    <Button variant="link">More Details</Button>
                  </td>
                </td>
              </tr>

              <tr>
                <td>Storage:</td>
                <td>
                  <td>
                    <Button variant="link">More Details</Button>
                  </td>
                </td>
              </tr>
              <tr>
                <td>Battery:</td>
                <td>
                  <td>
                    <Button variant="link">More Details</Button>
                  </td>
                </td>
              </tr>
              <tr>
                <td>Price:</td>
                <td>
                  <td>
                    <Button variant="link">More Details</Button>
                  </td>
                </td>
              </tr>
            </tbody>
          </Table>
        </>
      )}
      <MoreDetailsDisplay selectedDisplay={selectedDisplay} />
    </div>
  );
};

export default EachPhoneDetails;
