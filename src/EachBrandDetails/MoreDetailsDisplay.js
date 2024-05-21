import React, { useEffect, useRef } from "react";
import { Table } from "react-bootstrap";

const MoreDetailsDisplay = (props) => {
  const { selectedDisplay = {} } = props;
  const displayRef = useRef();
  const {
    type = "",
    size_inch = "",
    resolution = "",
    features = [],
  } = selectedDisplay;
  useEffect(() => {
    if (!!type) {
      displayRef.current.scrollIntoView();
    }
  }, [type]);
  return (
    <>
      {!!type && (
        <div ref={displayRef}>
          <h5 className="text-style">Display Details</h5>
          <Table striped bordered hover>
            <tbody className="table-style">
              <tr>
                <td>Type:</td>
                <td>{type}</td>
              </tr>
              <tr>
                <td>Size_Inch:</td>
                <td>{size_inch}</td>
              </tr>
              <tr>
                <td>Resolution:</td>
                <td>{resolution}</td>
              </tr>
              <tr>
                <td>Features:</td>
                <td>
                  {features.map((eachFeatures, index) => {
                    return (
                      <div key={`eachFeatures-${index}`}>
                        {eachFeatures}
                        <br></br>
                      </div>
                    );
                  })}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default MoreDetailsDisplay;
