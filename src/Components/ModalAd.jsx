import {
  Button,
  Container,
  Fab,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Tooltip,
} from "@material-ui/core";
import { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  containerModal: {
    backgroundColor: "#fff",
    width: "70%",
    margin: "auto",
    maxHeight: "97vh",
    position: "absolute",
    top: "0px",

    left: "0px",
    right: "0px",
    bottom: "0px",
    padding: "20px",
    borderRadius: "15px",
    overflowY: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "97%",
    },
  },
  input: {
    width: "100%",
    marginBottom: theme.spacing(2),
    overflow: "hidden",
  },
  add: {
    position: "fixed",
    bottom: "10px",
    right: "10px",
  },
  radioGroup: {
    marginTop: theme.spacing(2),
  },
  radio: {
    color: `${theme.palette.primary.main} !important`,
    marginRight: "0px",
  },
  send: {
    marginLeft: theme.spacing(2),
  },
  divBtn: {
    width: "100%",
    textAlign: "left",
    marginTop: theme.spacing(2),
  },
}));

const ModalAdd = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [age, setAge] = useState("");

  const handleChangeType = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <Container className={classes.containerModal}>
            <TextField
              id="outlined-basic"
              label=""
              placeholder="عنوان"
              variant="outlined"
              className={`${classes.input}`}
            />

            <TextField
              className={`${classes.input}`}
              id="outlined-multiline-static"
              label=""
              placeholder="داستان شما..."
              multiline
              defaultValue=""
              rows={4}
              variant="outlined"
            />
            <FormControl variant="outlined" className={`${classes.input} `}>
              <InputLabel id="demo-simple-select-outlined-label">
                نوع داستان
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={age}
                onChange={handleChangeType}
                label="نوع داستان"
              >
                <MenuItem value="hard">ترسناک</MenuItem>
                <MenuItem value={10}>ماجرایی</MenuItem>
                <MenuItem value={20}>هنری</MenuItem>
                <MenuItem value={30}>مربوط به رشته ای نسیت</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.radioGroup} component="fieldset">
              <FormLabel component="legend">
                چه کسانی کامت بزارن برات؟
              </FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  className={classes.radio}
                  value="female"
                  control={<Radio className={classes.radio} />}
                  label="همه"
                  color="primary"
                />
                <FormControlLabel
                  className={classes.radio}
                  value="male"
                  control={<Radio className={classes.radio} />}
                  label="دوستان"
                />
                <FormControlLabel
                  className={classes.radio}
                  value="other"
                  control={<Radio className={classes.radio} />}
                  label="هیچکس"
                />
                <FormControlLabel
                  className={classes.radio}
                  value="disabled"
                  control={<Radio className={classes.radio} />}
                  label="فقط کاربران ویژه"
                />
              </RadioGroup>
            </FormControl>
            <div className={classes.divBtn}>
              <Button
                variant="outlined"
                className={classes.send}
                color="primary"
              >
                ارسال
              </Button>
              <Button
                variant="outlined"
                onClick={() => setOpen(false)}
                color="secondary"
              >
                انصراف
              </Button>
            </div>
          </Container>
        </Modal>
      </div>
      <Tooltip
        onClick={() => setOpen(true)}
        className={classes.add}
        title="افزودن پست"
        aria-label="add"
      >
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};

export default ModalAdd;
