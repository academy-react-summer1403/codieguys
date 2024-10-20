import { CardWithTopLogo } from "../CardWithTopLogo";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CardWithTopLogoHolder = () => {

  // const [cards, setCards]= useState([]);

  //   const fetchData = async () =>{
  //       const res = await axios.get('')
  //       setProducts(res.data)
  //   }
  //    useEffect(() => {
  //       fetchData()
  //    }, [])

  return (
    <div className="grid grid-cols-3 w-full items-start justify-start  shadow-2xl gap-3  bg-custom-gray ">
      <CardWithTopLogo />
      <CardWithTopLogo />
      <CardWithTopLogo />

      
      <Stack spacing={2} className="flex justify-center items-center">
        <Pagination
          count={4}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </div>
  );
};

export { CardWithTopLogoHolder };
