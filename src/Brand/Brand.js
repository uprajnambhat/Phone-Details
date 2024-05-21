import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./brand-style.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Brand = () => {
  const { fullphoneDetails = [] } = useSelector((state) => state.phoneDetails);
  console.log("phoneDetails", fullphoneDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log("rrrrr", response.data);
        dispatch({
          type: "UPDATE_CAT_DATA",
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const onBrandClick = (eachSelectedBrandDetails) => {
    navigate(`/phone/${eachSelectedBrandDetails.brand}`);
    console.log("selectedPhoneDetails here is", eachSelectedBrandDetails);
  };

  return (
    <div>
      <h3 className="text-style">Brands Available </h3>
      <Table striped bordered hover>
        <tbody className="table-style">
          <tr>
            {fullphoneDetails.map((eachBrandDetails, index) => {
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
              } = eachBrandDetails;
              console.log("eachPhoneDetails", eachBrandDetails);
              return (
                <td key={`eachPhoneBrand-${index}`}>
                  <Button
                    variant="dark"
                    onClick={() => {
                      onBrandClick(eachBrandDetails);
                    }}
                  >
                    {brand}
                  </Button>
                </td>
              );
            })}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Brand;
