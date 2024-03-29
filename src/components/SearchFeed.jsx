import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Box, Typography } from "@mui/material";
import { Videos } from '../components'

import { fetchFromAPI } from "../utils/fetchFromAPI";

function SearchFeed() 
{

  const [videos, setVideos] = useState(null);
  const {searchTerm} = useParams();

  useEffect(() => 
    {
      fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>setVideos(data.items))
    }, [searchTerm]);


  return (
    <>
        <Box 
            p={2} 
            minHeight={"95vh"}
          >
            <Typography 
              variant="h4"
              fontWeight={900} 
              color={"white"}
              mb={3}
              ml={{ sm: "100px"}}
            >
              Search Result for:  <span style={{color: '#F31503'}}>{searchTerm}</span> videos
            </Typography>
            <Box display={"flex"}>
             <Box sx={{ mr: { sm: '100px' } }}/>
             {<Videos videos={videos}/>}
            </Box>
          </Box>
    </>
  );
};
export default SearchFeed;