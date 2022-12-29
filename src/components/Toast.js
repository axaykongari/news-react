import React, { Component } from "react";

export class Toast extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  componentDidMount() {
    this.setState({
      show: true,
    });
    setInterval(() => {
      this.setState({
        show: false,
      });
    }, 2000);
  }
  render() {
    let { title, message } = this.props;
    return (
      <>
        {/* <button type="button" className="btn btn-primary" id="liveToastBtn">
          Show live toast
        </button> */}

        <div
          className="position-fixed bottom-0 right-0 p-3"
          style={{ zIndex: "5", right: "0", bottom: "0" }}
        >
          <div
            className={`toast ${this.state.show ? "show" : "hide"}`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            data-delay="2000"
          >
            <div className="toast-header bg-danger">
              {/* <img src="..." className="rounded mr-2" alt="..." /> */}
              <i className="fa-danger fa-rectangle-xmark"></i>
              <strong className="mr-auto text-light">{title}</strong>
              <button
                type="button"
                className="ml-2 mb-1 close"
                data-dismiss="toast"
                aria-label="Close"
                onClick={() => {
                  this.setState({
                    show: false,
                  });
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="toast-body">{message}</div>
          </div>
        </div>
      </>
    );
  }
}

export default Toast;
