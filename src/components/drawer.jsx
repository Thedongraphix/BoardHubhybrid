import React, { Fragment } from "react";
import RcDrawer from "rc-drawer";
import { Box } from "@theme-ui/components";

const Drawer = ({
  className,
  children,
  closeButton,
  closeButtonStyle,
  open,
  width = "320px",
  placement = "left",
  drawerHandler,
  drawerStyle,
  closeBtnStyle,
  toggleHandler,
  ...props
}) => {
  return (
    <Fragment>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        width={width}
        className={`drawer ${className ? className : ""}`.trim()}
        placement={placement}
        handler={false}
        level={null}
        duration="0.4s"
        {...props}>
        {closeButton && (
          <Box as="div" onClick={toggleHandler} sx={closeBtnStyle}>
            {closeButton}
          </Box>
        )}
        <Box sx={drawerStyle}>{children}</Box>
      </RcDrawer>
      <Box
        className="drawer__handler"
        style={{ display: "inline-block", cursor: "pointer" }}
        onClick={toggleHandler}>
        {drawerHandler}
      </Box>
    </Fragment>
  );
};

export default Drawer;
