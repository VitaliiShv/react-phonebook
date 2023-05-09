import { Box, TextField } from "@mui/material";
import fields from "./fields";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "redux/filter/filter-selectors";
import { setFilter } from "redux/filter/filrter-slice";

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="on"
    >
      <TextField value={filter} onChange={changeFilter} {...fields.filter} />
    </Box>
  );
};

export default Filter;
