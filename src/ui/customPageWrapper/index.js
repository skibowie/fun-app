import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.scss";

export const CustomPageWrapper = ({ children, title, additions }) => {
  const history = useHistory();

  const renderAdditions = () => {
    if (additions === "registerLink") {
      return (
        <div
          className="custom-page-wrapper-addition"
          onClick={() => {
            history.push("/register");
          }}
        >
          Nie masz konta ?
          <em>
            <b> Zarejstruj się!</b>
          </em>
        </div>
      );
    }
    if (additions === "loginLink") {
      return (
        <div
          className="custom-page-wrapper-addition"
          onClick={() => {
            history.push("/login");
          }}
        >
          Masz konto ?
          <em>
            <b> Zaloguje się!</b>
          </em>
        </div>
      );
    }
  };

  return (
    <div className="custom-page-wrapper center-column">
      <div className="custom-page-wrapper-content">
        <div className="custom-page-wrapper-header center-column">
          <div className="custom-page-wrapper-title">{title}</div>
          {renderAdditions()}
        </div>
        {children}
      </div>
    </div>
  );
};

CustomPageWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  additions: PropTypes.string,
  children: PropTypes.node.isRequired,
};
