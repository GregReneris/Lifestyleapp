import React, {useEffect} from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import API from '../../utils/api';

export default function SimpleRating(props) {
  const [value, setValue] = React.useState(props.value);

  // useEffect(()=>{
  //   console.log(value);
  //   console.log(props.activityId);
  //   //TODO: update rating on this activity to this value  
  //   },[value]
  //   )


    const handleOnChange = event => {
      console.log(event.target.value)
      API.setStars(props.activityId, event.target.value)
      setValue(Number(event.target.value));
    }

return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend"></Typography>
        <Rating
          value={value}
          onChange={handleOnChange} // function like click?
        />
      </Box>
      </div>
  );
}