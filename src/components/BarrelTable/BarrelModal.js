import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import { useDispatch } from "react-redux";
const dispatch = useDispatch();

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [hosts, setHosts] = useState(props.item.hosts);
  const [street, setStreet] = useState(props.item.street);
  const [city, setCity] = useState(props.item.city);
  const [zipcode, setZipcode] = useState(props.item.zipcode);
  const [description, setDescription] = useState(props.item.description);
  const [hours, setHours] = useState(props.item.hours);
  const [dates, setDates] = useState(props.item.dates);

  let payload = {
    hosts: hosts,
    street: street,
    city: city,
    zipcode: zipcode,
    description: description,
    hours: hours,
    dates: setDates,
  };
  return (
    <div>
      <i
        class="edit icon"
        onClick={() => {
          props.editItem(props);
        }}
        onClick={handleOpen}
      ></i>

      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {console.log(props.item)}
            <input
              value={hosts}
              onClick={console.log(hosts)}
              onChange={(e) => setHosts(e.target.value)}
            ></input>
            <input
              value={street}
              onClick={console.log(street)}
              onChange={(e) => setStreet(e.target.value)}
            ></input>
            <input
              value={city}
              onClick={console.log(city)}
              onChange={(e) => setCity(e.target.value)}
            ></input>{" "}
            <input
              value={zipcode}
              onClick={console.log(zipcode)}
              onChange={(e) => setZipcode(e.target.value)}
            ></input>{" "}
            <input
              value={dates}
              onClick={console.log(hosts)}
              onChange={(e) => setDates(e.target.value)}
            ></input>{" "}
            <input
              value={hours}
              onClick={console.log(hosts)}
              onChange={(e) => setHours(e.target.value)}
            ></input>{" "}
            <input
              value={description}
              onClick={console.log(hosts)}
              onChange={(e) => setDescription(e.target.value)}
            ></input>{" "}
            <div className="sliderCheckbox" class="ui slider checkbox">
              <input
                type="checkbox"
                // onChange={() => {
                // this.updateStatus(item);
                // }}
                checked={props.item.status}
                // name="newsletter"
              />{" "}
              <label className="sliderLabel">
                {props.item.status ? "Active" : "Not Active"}
              </label>
            </div>
            <div>
              <i
                class="archive icon"
                value={props.item.id}
                onClick={
                  (() => console.log(payload),
                  dispatch({ type: "UPDATE_BARREL", payload: payload }))
                }
              />{" "}
              <i class="ban icon"></i>
              <i class="trash icon"></i>
              {/* <input
                value={hosts}
                onClick={console.log(hosts)}
                onChange={(e) => setHosts(e.target.value)}
                ></input> */}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
