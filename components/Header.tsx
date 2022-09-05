import React from "react";

export default function header() {
  return (
    <>
      <header
        className="kuda-header align-center flex"
        style={{
          boxSizing: "inherit",
          WebkitFontSmoothing: "antialiased",
          margin: "0px",
          padding: "0px",
          border: "0px",
          font: "inherit",
          verticalAlign: "baseline",
          background: "#fff",
          position: "fixed",
          width: "100%",
          left: "0px",
          top: "0px",
          boxShadow: "rgba(0, 0, 0, 0.05) 0px 4px 13px",
          zIndex: 99,
          height: "65px",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div
          className="flex justify-between align-center column--100 kuda-header--wrap"
          style={{
            boxSizing: "inherit",
            WebkitFontSmoothing: "antialiased",
            padding: "0px",
            border: "0px",
            font: "inherit",
            verticalAlign: "baseline",
            margin: "0px auto",
            maxWidth: "1500px",
            paddingLeft: "60px",
            paddingRight: "60px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div
            className="kuda-header--main flex align-center"
            style={{
              boxSizing: "inherit",
              WebkitFontSmoothing: "antialiased",
              margin: "0px",
              padding: "0px",
              border: "0px",
              font: "inherit",
              verticalAlign: "baseline",
              display: "flex",
              alignItems: "center"
            }}
          >
            <a
              className="kuda-brand"
              aria-current="page"
              href="https://www.kuda.com/"
              style={{
                boxSizing: "inherit",
                WebkitFontSmoothing: "antialiased",
                margin: "0px",
                padding: "0px",
                border: "0px",
                font: "inherit",
                verticalAlign: "baseline",
                textDecoration: "none",
                color: "inherit",
                minWidth: "100px"
              }}
            >
              <svg
                height="22"
                width="99"
                fill="none"
                viewBox="0 0 99 22"
                style={{
                  boxSizing: "inherit",
                  WebkitFontSmoothing: "antialiased",
                  height: "18px",
                  width: "auto"
                }}
              >
                <path
                  d="M58.4144 6.81538V21.764H54.0773V19.5807C53.6053 20.3675 52.9857 20.9674 52.2186 21.3804C51.4515 21.7935 50.586 22 49.6222 22C47.7537 22 46.3572 21.4788 45.4327 20.4363C44.5083 19.3938 44.046 17.8203 44.046 15.7157V6.81538H48.5011V15.8042C48.5011 17.6138 49.278 18.5186 50.8319 18.5186C51.7563 18.5186 52.5038 18.2038 53.0742 17.5744C53.6446 16.945 53.9298 16.1189 53.9298 15.0961V6.81538H58.4144ZM75.4086 0V21.764H71.0125V19.5512C70.5601 20.3183 69.9209 20.9182 69.0947 21.3509C68.2686 21.7836 67.3344 22 66.2919 22C65.0134 22 63.8726 21.6755 62.8695 21.0165C61.8663 20.3576 61.0894 19.4332 60.5288 18.2432C59.9682 17.0532 59.6929 15.696 59.6929 14.1618C59.6929 12.6276 59.9682 11.2803 60.5288 10.11C61.0894 8.93965 61.8663 8.03487 62.8596 7.39562C63.8529 6.75637 64.9937 6.44166 66.2919 6.44166C67.295 6.44166 68.2096 6.65802 69.0357 7.07108C69.8619 7.49396 70.5011 8.07421 70.9535 8.82164V0H75.4086ZM70.1274 17.4761C70.7175 16.7188 71.0125 15.637 71.0125 14.2208C71.0125 12.8243 70.7175 11.7523 70.1175 10.9951C69.5176 10.2378 68.6817 9.8641 67.5999 9.8641C66.4984 9.8641 65.6428 10.2378 65.0331 10.9852C64.4233 11.7327 64.1184 12.7948 64.1184 14.1717C64.1184 15.5878 64.4233 16.6795 65.0331 17.4564C65.6428 18.2333 66.4984 18.6169 67.5999 18.6169C68.7014 18.6071 69.5373 18.2333 70.1274 17.4761ZM92.4126 6.81538V21.764H88.0165V19.5512C87.5641 20.3183 86.9249 20.9182 86.0988 21.3509C85.2727 21.7836 84.3384 22 83.2959 22C81.9977 22 80.8569 21.6853 79.8636 21.0559C78.8703 20.4265 78.0934 19.5315 77.5328 18.3612C76.9723 17.1909 76.6969 15.8435 76.6969 14.3093C76.6969 12.7751 76.9723 11.4081 77.5328 10.2083C78.0934 9.00849 78.8703 8.08404 79.8735 7.42512C80.8766 6.7662 82.0174 6.44166 83.2959 6.44166C84.3384 6.44166 85.2727 6.66786 86.0988 7.12025C86.9249 7.57264 87.5641 8.18239 88.0165 8.94949V6.81538H92.4126ZM87.1314 17.4859C87.7215 16.7385 88.0165 15.6567 88.0165 14.2405C88.0165 12.8243 87.7215 11.7425 87.1314 10.9852C86.5413 10.228 85.6956 9.85427 84.5941 9.85427C83.4926 9.85427 82.637 10.2477 82.0272 11.0344C81.4175 11.8212 81.1126 12.9128 81.1126 14.3093C81.1126 15.7059 81.4077 16.768 82.0076 17.5056C82.6075 18.2432 83.4631 18.6071 84.5842 18.6071C85.6956 18.6071 86.5413 18.2333 87.1314 17.4859ZM43.1511 21.9803H37.624L31.6839 15.2043V21.9803H27.1797V0H31.6839V13.3456L37.3585 6.86455H42.7675L36.3455 14.1225L43.1511 21.9803Z"
                  fill="#40196D"
                  style={{
                    boxSizing: "inherit",
                    WebkitFontSmoothing: "antialiased"
                  }}
                />
                <path
                  d="M14.8207 21.9803L6.17613 12.0277L10.8967 21.9803H7.62181L2.80286 11.831L4.80912 21.9803H2.79303L0.786768 11.8114V21.9803H0V0H0.786768V10.9656L2.82253 0H4.82879L2.78319 11.0148L7.70049 0H10.9361L6.04828 10.9754L14.9289 0H20.0134L10.8181 11.3491L20.0527 21.9803H14.8207Z"
                  fill="#40196D"
                  style={{
                    boxSizing: "inherit",
                    WebkitFontSmoothing: "antialiased"
                  }}
                />
                <path
                  d="M96.146 21.7447C97.493 21.7447 98.585 20.6527 98.585 19.3057C98.585 17.9587 97.493 16.8667 96.146 16.8667C94.799 16.8667 93.707 17.9587 93.707 19.3057C93.707 20.6527 94.799 21.7447 96.146 21.7447Z"
                  fill="#40196D"
                  style={{
                    boxSizing: "inherit",
                    WebkitFontSmoothing: "antialiased"
                  }}
                />
              </svg>
            </a>
            <ul
              className="kuda-menu--wrap flex align-center"
              style={{
                boxSizing: "inherit",
                WebkitFontSmoothing: "antialiased",
                margin: "0px",
                padding: "0px",
                border: "0px",
                font: "inherit",
                verticalAlign: "baseline",
                listStyle: "none",
                marginLeft: "15%",
                display: "flex",
                alignItems: "center"
              }}
            >
              <li
                className="kuda-nav--menu"
                style={{
                  boxSizing: "inherit",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px",
                  padding: "0px",
                  border: "0px",
                  font: "inherit",
                  verticalAlign: "baseline",
                  position: "relative",
                  marginRight: "42px"
                }}
              >
                <p
                  className="color-primary no-link"
                  style={{
                    boxSizing: "inherit",
                    WebkitFontSmoothing: "antialiased",
                    margin: "0px",
                    padding: "0px",
                    border: "0px",
                    font: "inherit",
                    verticalAlign: "baseline",
                    lineHeight: 1.5,
                    display: "flex",
                    alignItems: "center",
                    color: "#40196d",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    height: "40px",
                    cursor: "pointer"
                  }}
                >
                  Features
                  <span
                    className="dropDown"
                    style={{
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                      margin: "0px",
                      padding: "0px",
                      border: "0px",
                      font: "inherit",
                      verticalAlign: "baseline",
                      marginLeft: "7px"
                    }}
                  >
                    <svg
                      height="6"
                      width="9"
                      fill="none"
                      viewBox="0 0 9 6"
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      <path
                        d="M4.5 6L0 0H9L4.5 6Z"
                        fill="#40196D"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased"
                        }}
                      />
                    </svg>
                  </span>
                </p>
                <div
                  className="dropdown-menu"
                  style={{
                    boxSizing: "inherit",
                    WebkitFontSmoothing: "antialiased",
                    margin: "0px",
                    padding: "0px",
                    border: "0px",
                    font: "inherit",
                    verticalAlign: "baseline",
                    opacity: 0,
                    visibility: "hidden",
                    left: "0px",
                    position: "absolute",
                    paddingTop: "0px",
                    width: "max-content",
                    top: "44px",
                    transition:
                      "opacity 0.5s cubic-bezier(0.455, 0.03, 0, 1) 0s, top 0.5s cubic-bezier(0.455, 0.03, 0, 1) 0s",
                    display: "block",
                    zIndex: 1
                  }}
                >
                  <ul
                    className="kuda-dropdown--menu drop-min--width"
                    style={{
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                      margin: "0px",
                      font: "inherit",
                      verticalAlign: "baseline",
                      listStyle: "none",
                      padding: "20px 0px",
                      background: "rgb(255, 255, 255)",
                      border: "1px solid rgba(219, 220, 224, 0.5)",
                      borderRadius: "5px",
                      whiteSpace: "nowrap",
                      boxShadow: "rgba(64, 25, 109, 0.07) 15px 30px 40px",
                      minWidth: "170px"
                    }}
                  >
                    <li
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        border: "0px",
                        font: "inherit",
                        verticalAlign: "baseline",
                        padding: "0px 26px",
                        margin: "0px"
                      }}
                    >
                      <a
                        className="menu-link"
                        href="https://kuda.com/cards"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          border: "0px",
                          font: "inherit",
                          verticalAlign: "baseline",
                          textDecoration: "none",
                          borderRadius: "5px",
                          padding: "10px 0px",
                          fontWeight: 500,
                          color: "rgb(0, 0, 0)",
                          display: "inline-flex",
                          alignItems: "center",
                          fontSize: "0.875rem"
                        }}
                      >
                        <span
                          className="menu-link--icon"
                          style={{
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            margin: "0px",
                            padding: "0px",
                            border: "0px",
                            font: "inherit",
                            verticalAlign: "baseline",
                            display: "flex",
                            marginRight: "15px"
                          }}
                        >
                          <svg
                            height="38"
                            width="37"
                            fill="none"
                            viewBox="0 0 37 38"
                            style={{
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              width: "25px",
                              height: "25px"
                            }}
                          >
                            <circle
                              cx="18.5"
                              cy="18.7012"
                              fill="#DFE3FF"
                              r="18.5"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            />
                            <rect
                              height="12"
                              width="17"
                              fill="#40196D"
                              rx="1.5"
                              stroke="#DFE3FF"
                              x="9.99951"
                              y="12.8003"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            />
                            <path
                              d="M26.5 15H10.5V17H26.5V15Z"
                              fill="white"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            />
                          </svg>
                        </span>
                        Kuda Card
                      </a>
                    </li>
                    <li
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        border: "0px",
                        font: "inherit",
                        verticalAlign: "baseline",
                        padding: "0px 26px",
                        margin: "0px"
                      }}
                    >
                      <a
                        className="menu-link"
                        href="https://kuda.com/spend"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          border: "0px",
                          font: "inherit",
                          verticalAlign: "baseline",
                          textDecoration: "none",
                          borderRadius: "5px",
                          padding: "10px 0px",
                          fontWeight: 500,
                          color: "rgb(0, 0, 0)",
                          display: "inline-flex",
                          alignItems: "center",
                          fontSize: "0.875rem"
                        }}
                      >
                        <span
                          className="menu-link--icon"
                          style={{
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            margin: "0px",
                            padding: "0px",
                            border: "0px",
                            font: "inherit",
                            verticalAlign: "baseline",
                            display: "flex",
                            marginRight: "15px"
                          }}
                        >
                          <svg
                            height="38"
                            width="37"
                            fill="none"
                            viewBox="0 0 37 38"
                            style={{
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              width: "25px",
                              height: "25px"
                            }}
                          >
                            <circle
                              cx="18.5"
                              cy="18.7012"
                              fill="#DFE3FF"
                              r="18.5"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            />
                            <path
                              d="M14.9197 15.9512C14.9197 12.8724 17.4156 10.3765 20.4945 10.3765C23.5733 10.3765 26.0692 12.8724 26.0692 15.9512C26.0692 19.0301 23.5733 21.526 20.4945 21.526C17.4156 21.526 14.9197 19.0301 14.9197 15.9512Z"
                              fill="white"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            />
                            <path
                              d="M18.8958 18.1076L13.7857 22.0356L8.78735 20.0079L22.1668 14.8364L16.9954 28.2159L14.9676 23.2175L18.8958 18.1076Z"
                              fill="#40196D"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            />
                          </svg>
                        </span>
                        Spend
                      </a>
                    </li>
                    <li
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        border: "0px",
                        font: "inherit",
                        verticalAlign: "baseline",
                        padding: "0px 26px",
                        margin: "0px"
                      }}
                    >
                      <a
                        className="menu-link"
                        href="https://kuda.com/save"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          border: "0px",
                          font: "inherit",
                          verticalAlign: "baseline",
                          textDecoration: "none",
                          borderRadius: "5px",
                          padding: "10px 0px",
                          fontWeight: 500,
                          color: "rgb(0, 0, 0)",
                          display: "inline-flex",
                          alignItems: "center",
                          fontSize: "0.875rem"
                        }}
                      >
                        <span
                          className="menu-link--icon"
                          style={{
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            margin: "0px",
                            padding: "0px",
                            border: "0px",
                            font: "inherit",
                            verticalAlign: "baseline",
                            display: "flex",
                            marginRight: "15px"
                          }}
                        >
                          <svg
                            height="38"
                            width="37"
                            fill="none"
                            viewBox="0 0 37 38"
                            style={{
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              width: "25px",
                              height: "25px"
                            }}
                          >
                            <circle
                              cx="18.5"
                              cy="18.7012"
                              fill="#DFE3FF"
                              r="18.5"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            />
                            <circle
                              cx="17.1547"
                              cy="13.1869"
                              fill="white"
                              r="3.18693"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            />
                            <path
                              d="M25.183 18.097H24.7104C24.3784 17.0684 23.6927 16.057 22.9213 15.3056V12.9612C22.9213 12.8905 22.8469 12.8328 22.7761 12.8328C22.0923 12.8328 21.4759 13.1603 21.0895 13.6656C20.9829 15.6242 19.3516 17.1849 17.367 17.1849C16.1847 17.1849 15.1278 16.6302 14.4451 15.7685C14.1859 16.0488 13.9513 16.3531 13.748 16.6783C13.7406 16.6876 13.732 16.6957 13.7252 16.7054C13.6116 16.8734 13.4231 16.9734 13.2213 16.9734C12.8864 16.9734 12.614 16.7012 12.614 16.3664C12.614 16.1063 12.7795 15.8751 13.0257 15.7915C13.2274 15.723 13.3353 15.5042 13.2668 15.3023C13.1986 15.1009 12.9798 14.9929 12.7779 15.0614C12.2189 15.2512 11.843 15.7757 11.843 16.3662C11.843 17.1254 12.4598 17.7427 13.2184 17.7442C12.9656 18.4114 12.8053 19.1338 12.8053 19.8885C12.8053 21.7882 13.6636 23.5974 15.2065 24.742V26.164C15.2065 26.5992 15.6028 26.969 16.038 26.969H16.5887C17.024 26.969 17.3924 26.5992 17.3924 26.164V25.7688C18.421 26.0272 19.4496 26.0272 20.3497 25.7688V26.164C20.3497 26.5992 20.7787 26.969 21.2139 26.969H21.7644C22.1995 26.969 22.5355 26.5992 22.5355 26.164V24.742C23.5641 23.9714 24.3381 22.8545 24.7104 21.6973H25.183C25.6181 21.6973 26.0072 21.3101 26.0072 20.875V18.9022C26.0072 18.4668 25.6181 18.097 25.183 18.097ZM21.4121 18.8564C20.9527 18.8564 20.5802 18.4841 20.5802 18.0245C20.5802 17.5651 20.9526 17.1924 21.4121 17.1924C21.8717 17.1924 22.2443 17.565 22.2443 18.0245C22.2442 18.4842 21.8715 18.8564 21.4121 18.8564Z"
                              fill="#40196D"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            />
                          </svg>
                        </span>
                        Save
                      </a>
                    </li>
                    <li
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        border: "0px",
                        font: "inherit",
                        verticalAlign: "baseline",
                        padding: "0px 26px",
                        margin: "0px"
                      }}
                    >
                      <a
                        className="menu-link"
                        href="https://kuda.com/budget"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          border: "0px",
                          font: "inherit",
                          verticalAlign: "baseline",
                          textDecoration: "none",
                          borderRadius: "5px",
                          padding: "10px 0px",
                          fontWeight: 500,
                          color: "rgb(0, 0, 0)",
                          display: "inline-flex",
                          alignItems: "center",
                          fontSize: "0.875rem"
                        }}
                      >
                        <span
                          className="menu-link--icon"
                          style={{
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            margin: "0px",
                            padding: "0px",
                            border: "0px",
                            font: "inherit",
                            verticalAlign: "baseline",
                            display: "flex",
                            marginRight: "15px"
                          }}
                        >
                          <svg
                            height="38"
                            width="37"
                            fill="none"
                            viewBox="0 0 37 38"
                            style={{
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              width: "25px",
                              height: "25px"
                            }}
                          >
                            <circle
                              cx="18.5"
                              cy="18.7012"
                              fill="#DFE3FF"
                              r="18.5"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            />
                            <g
                              clipPath="url(#clip0_NEW_ICON_COPY)"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <path
                                d="M17.9643 11.0671C17.9643 11.3856 17.9643 11.6537 17.9643 11.9386C17.9643 14.1509 17.9643 16.38 17.9643 18.5923C17.9643 18.9107 18.0647 19.0951 18.3493 19.2459C20.2913 20.4023 22.2165 21.5755 24.1418 22.7487C24.2589 22.8157 24.3761 22.8995 24.4766 22.9666C22.6183 25.5811 18.8851 26.8549 15.4699 25.38C12.1886 23.9554 10.3639 20.3018 11.2009 16.7319C12.0714 13.0951 15.3694 11.1007 17.9643 11.0671Z"
                                fill="#40196D"
                                style={{
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased"
                                }}
                              />
                              <path
                                d="M18.6844 11C21.5806 11.1844 23.7737 12.4916 25.1129 15.0391C26.4187 17.5028 26.2513 20 24.8786 22.4469C23.4388 21.5754 22.0158 20.7207 20.5928 19.8492C20.0236 19.4972 19.4377 19.162 18.8853 18.7933C18.7681 18.7095 18.6509 18.5419 18.6341 18.4078C18.6174 15.9944 18.6174 13.581 18.6341 11.1676C18.6341 11.1508 18.6509 11.1006 18.6844 11Z"
                                fill="white"
                                style={{
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased"
                                }}
                              />
                            </g>
                            <defs
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <clipPath
                                id="clip0_NEW_ICON_COPY"
                                style={{
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased"
                                }}
                              >
                                <rect
                                  height="15"
                                  width="15"
                                  fill="white"
                                  x="11"
                                  y="11"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        Budget
                      </a>
                    </li>
                    <li
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        border: "0px",
                        font: "inherit",
                        verticalAlign: "baseline",
                        padding: "0px 26px",
                        margin: "0px"
                      }}
                    >
                      <a
                        className="menu-link"
                        href="https://kuda.com/borrow"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          border: "0px",
                          font: "inherit",
                          verticalAlign: "baseline",
                          textDecoration: "none",
                          borderRadius: "5px",
                          padding: "10px 0px",
                          fontWeight: 500,
                          color: "rgb(0, 0, 0)",
                          display: "inline-flex",
                          alignItems: "center",
                          fontSize: "0.875rem"
                        }}
                      >
                        <span
                          className="menu-link--icon"
                          style={{
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            margin: "0px",
                            padding: "0px",
                            border: "0px",
                            font: "inherit",
                            verticalAlign: "baseline",
                            display: "flex",
                            marginRight: "15px"
                          }}
                        >
                          <svg
                            height="25"
                            width="25"
                            fill="none"
                            viewBox="0 0 25 25"
                            style={{
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              width: "25px",
                              height: "25px"
                            }}
                          >
                            <circle
                              cx="12.5"
                              cy="12.5"
                              fill="#DFE3FF"
                              r="12.5"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            />
                            <path
                              d="M10.9929 9.58548C10.8072 9.58548 10.6568 9.73587 10.6568 9.9215C10.6568 10.1071 10.8072 10.2572 10.9929 10.2572H14.0258C14.2114 10.2572 14.3616 10.1071 14.3616 9.9215C14.3616 9.73587 14.2114 9.58548 14.0258 9.58548H10.9929ZM13.973 10.5446H11.0738C10.6378 11.4754 8.27963 12.6306 8.30043 15.3588C8.31796 17.6262 10.0106 18 12.5167 18C12.5189 18 12.5212 18 12.5234 18C12.5258 18 12.5279 18 12.5303 18C15.0362 18 16.7289 17.6262 16.7464 15.3588C16.7672 12.6306 14.4092 11.4754 13.973 10.5446ZM12.6841 11.9608V12.2221C12.8563 12.2401 13.0047 12.2755 13.1274 12.3283C13.2511 12.3819 13.3582 12.4618 13.4505 12.5698C13.523 12.6521 13.5791 12.737 13.6186 12.8236C13.6581 12.9109 13.6779 12.99 13.6779 13.0625C13.6779 13.1433 13.6482 13.2133 13.5897 13.2719C13.5304 13.3303 13.4594 13.36 13.3756 13.36C13.2173 13.36 13.1143 13.2743 13.0681 13.1038C13.0146 12.9027 12.8868 12.7684 12.6841 12.7024V13.7069C12.8835 13.7614 13.0433 13.8116 13.1612 13.8569C13.2798 13.9015 13.3862 13.9666 13.4794 14.0522C13.5791 14.1404 13.6564 14.2468 13.7109 14.3695C13.7644 14.493 13.7917 14.6275 13.7917 14.7741C13.7917 14.9578 13.7487 15.1292 13.6623 15.2892C13.5756 15.4499 13.4488 15.58 13.2816 15.6823C13.1135 15.7835 12.9148 15.8436 12.6841 15.8626V16.2199C12.6841 16.3146 12.6747 16.3837 12.6561 16.4275C12.6375 16.471 12.5975 16.4927 12.5341 16.4927C12.4765 16.4927 12.4358 16.4755 12.4122 16.4399C12.3888 16.4046 12.3777 16.3493 12.3777 16.2751V15.8675C12.1896 15.8469 12.0248 15.8026 11.884 15.7348C11.7431 15.6673 11.6252 15.5833 11.5313 15.4827C11.4373 15.3815 11.3672 15.2768 11.3229 15.1689C11.2775 15.0601 11.2551 14.953 11.2551 14.8481C11.2551 14.7717 11.2849 14.7015 11.3459 14.6398C11.4061 14.578 11.481 14.5467 11.5709 14.5467C11.6432 14.5467 11.7043 14.5632 11.7546 14.5969C11.8039 14.6307 11.8387 14.6785 11.8584 14.7395C11.9012 14.8713 11.9392 14.9726 11.9713 15.0427C12.0043 15.1128 12.0528 15.1771 12.118 15.2347C12.1831 15.2924 12.2696 15.337 12.3777 15.3674V14.245C12.1616 14.1849 11.982 14.119 11.8369 14.0457C11.6919 13.9723 11.5741 13.8685 11.4843 13.7334C11.3945 13.5983 11.3492 13.4243 11.3492 13.2117C11.3492 12.9348 11.4373 12.7074 11.6137 12.5311C11.79 12.3539 12.0446 12.2508 12.3777 12.2221V11.9658C12.3777 11.8305 12.4287 11.763 12.5299 11.763C12.6331 11.763 12.6841 11.829 12.6841 11.9608ZM12.3777 13.6172V12.6927C12.2424 12.7329 12.1369 12.7856 12.0611 12.8516C11.9853 12.9175 11.9475 13.018 11.9475 13.1516C11.9475 13.2784 11.9829 13.3748 12.0537 13.44C12.1247 13.5051 12.2326 13.5644 12.3777 13.6172ZM12.6841 14.3341V15.3921C12.8464 15.36 12.9717 15.2948 13.0607 15.1969C13.1489 15.0979 13.1934 14.9843 13.1934 14.8531C13.1934 14.7131 13.1506 14.6051 13.064 14.5285C12.9782 14.4518 12.8514 14.3868 12.6841 14.3341ZM11.131 9.37459H13.9517C14.3721 7.9561 15.0428 8.07195 14.5039 7.56113C13.9653 7.05015 12.1422 6.70485 10.947 7.35798C9.75192 8.01093 10.7106 7.9561 11.131 9.37459Z"
                              fill="#40196D"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            />
                            <rect
                              height="0.88"
                              width="3.96"
                              fill="white"
                              rx="0.44"
                              x="10.5002"
                              y="9.50732"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            />
                            <rect
                              height="5.17304"
                              width="3.32552"
                              fill="#40196D"
                              x="10.8342"
                              y="11.761"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            />
                          </svg>
                        </span>
                        Borrow
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className="kuda-nav--menu"
                style={{
                  boxSizing: "inherit",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px",
                  padding: "0px",
                  border: "0px",
                  font: "inherit",
                  verticalAlign: "baseline",
                  position: "relative",
                  marginRight: "42px"
                }}
              >
                <a
                  className="color-primary"
                  href="http://kuda.com/business"
                  style={{
                    boxSizing: "inherit",
                    WebkitFontSmoothing: "antialiased",
                    margin: "0px",
                    padding: "0px",
                    border: "0px",
                    font: "inherit",
                    verticalAlign: "baseline",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    color: "#40196d",
                    fontSize: "0.875rem",
                    fontWeight: 700
                  }}
                >
                  Business
                  <span
                    className="coming-soon"
                    style={{
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                      margin: "0px",
                      font: "inherit",
                      verticalAlign: "baseline",
                      background: "rgb(255, 255, 255)",
                      border: "1px solid rgb(223, 227, 255)",
                      borderRadius: "4px",
                      padding: "4px 5px",
                      boxShadow: "rgba(0, 0, 0, 0.06) 0px 0px 25px",
                      fontSize: "10px",
                      fontWeight: 700,
                      color: "rgb(64, 25, 109)",
                      marginLeft: "9px"
                    }}
                  >
                    Beta
                  </span>
                </a>
              </li>
              <li
                className="kuda-nav--menu"
                style={{
                  boxSizing: "inherit",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px",
                  padding: "0px",
                  border: "0px",
                  font: "inherit",
                  verticalAlign: "baseline",
                  position: "relative",
                  marginRight: "42px"
                }}
              >
                <p
                  className="color-primary no-link"
                  style={{
                    boxSizing: "inherit",
                    WebkitFontSmoothing: "antialiased",
                    margin: "0px",
                    padding: "0px",
                    border: "0px",
                    font: "inherit",
                    verticalAlign: "baseline",
                    lineHeight: 1.5,
                    display: "flex",
                    alignItems: "center",
                    color: "#40196d",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    height: "40px",
                    cursor: "pointer"
                  }}
                >
                  Company
                  <span
                    className="dropDown"
                    style={{
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                      margin: "0px",
                      padding: "0px",
                      border: "0px",
                      font: "inherit",
                      verticalAlign: "baseline",
                      marginLeft: "7px"
                    }}
                  >
                    <svg
                      height="6"
                      width="9"
                      fill="none"
                      viewBox="0 0 9 6"
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      <path
                        d="M4.5 6L0 0H9L4.5 6Z"
                        fill="#40196D"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased"
                        }}
                      />
                    </svg>
                  </span>
                </p>
                <div
                  className="dropdown-menu"
                  style={{
                    boxSizing: "inherit",
                    WebkitFontSmoothing: "antialiased",
                    margin: "0px",
                    padding: "0px",
                    border: "0px",
                    font: "inherit",
                    verticalAlign: "baseline",
                    opacity: 0,
                    visibility: "hidden",
                    left: "0px",
                    position: "absolute",
                    paddingTop: "0px",
                    width: "max-content",
                    top: "44px",
                    transition:
                      "opacity 0.5s cubic-bezier(0.455, 0.03, 0, 1) 0s, top 0.5s cubic-bezier(0.455, 0.03, 0, 1) 0s",
                    display: "block",
                    zIndex: 1
                  }}
                >
                  <ul
                    className="kuda-dropdown--menu"
                    style={{
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                      margin: "0px",
                      font: "inherit",
                      verticalAlign: "baseline",
                      listStyle: "none",
                      padding: "20px 0px",
                      background: "rgb(255, 255, 255)",
                      border: "1px solid rgba(219, 220, 224, 0.5)",
                      borderRadius: "5px",
                      whiteSpace: "nowrap",
                      boxShadow: "rgba(64, 25, 109, 0.07) 15px 30px 40px"
                    }}
                  >
                    <li
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        border: "0px",
                        font: "inherit",
                        verticalAlign: "baseline",
                        padding: "0px 26px",
                        margin: "0px"
                      }}
                    >
                      <a
                        className="menu-link"
                        href="https://bit.ly/2WwScvZ"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          border: "0px",
                          font: "inherit",
                          verticalAlign: "baseline",
                          textDecoration: "none",
                          borderRadius: "5px",
                          padding: "10px 0px",
                          fontWeight: 500,
                          color: "rgb(0, 0, 0)",
                          display: "inline-flex",
                          alignItems: "center",
                          fontSize: "0.875rem"
                        }}
                      >
                        Blog
                      </a>
                    </li>
                    <li
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        border: "0px",
                        font: "inherit",
                        verticalAlign: "baseline",
                        padding: "0px 26px",
                        margin: "0px"
                      }}
                    >
                      <a
                        className="menu-link"
                        href="https://world.kuda.com/press"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          border: "0px",
                          font: "inherit",
                          verticalAlign: "baseline",
                          textDecoration: "none",
                          borderRadius: "5px",
                          padding: "10px 0px",
                          fontWeight: 500,
                          color: "rgb(0, 0, 0)",
                          display: "inline-flex",
                          alignItems: "center",
                          fontSize: "0.875rem"
                        }}
                      >
                        Press
                      </a>
                    </li>
                    <li
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        border: "0px",
                        font: "inherit",
                        verticalAlign: "baseline",
                        padding: "0px 26px",
                        margin: "0px"
                      }}
                    >
                      <a
                        className="menu-link"
                        href="https://kuda.workable.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          border: "0px",
                          font: "inherit",
                          verticalAlign: "baseline",
                          textDecoration: "none",
                          borderRadius: "5px",
                          padding: "10px 0px",
                          fontWeight: 500,
                          color: "rgb(0, 0, 0)",
                          display: "inline-flex",
                          alignItems: "center",
                          fontSize: "0.875rem"
                        }}
                      >
                        Join Our Team
                      </a>
                    </li>
                    <li
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        border: "0px",
                        font: "inherit",
                        verticalAlign: "baseline",
                        padding: "0px 26px",
                        margin: "0px"
                      }}
                    >
                      <a
                        className="menu-link"
                        href="https://world.kuda.com/about"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          border: "0px",
                          font: "inherit",
                          verticalAlign: "baseline",
                          textDecoration: "none",
                          borderRadius: "5px",
                          padding: "10px 0px",
                          fontWeight: 500,
                          color: "rgb(0, 0, 0)",
                          display: "inline-flex",
                          alignItems: "center",
                          fontSize: "0.875rem"
                        }}
                      >
                        About Us
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className="kuda-nav--menu"
                style={{
                  boxSizing: "inherit",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px",
                  padding: "0px",
                  border: "0px",
                  font: "inherit",
                  verticalAlign: "baseline",
                  position: "relative",
                  marginRight: "42px"
                }}
              >
                <p
                  className="color-primary no-link"
                  style={{
                    boxSizing: "inherit",
                    WebkitFontSmoothing: "antialiased",
                    margin: "0px",
                    padding: "0px",
                    border: "0px",
                    font: "inherit",
                    verticalAlign: "baseline",
                    lineHeight: 1.5,
                    display: "flex",
                    alignItems: "center",
                    color: "#40196d",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    height: "40px",
                    cursor: "pointer"
                  }}
                >
                  Help
                  <span
                    className="dropDown"
                    style={{
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                      margin: "0px",
                      padding: "0px",
                      border: "0px",
                      font: "inherit",
                      verticalAlign: "baseline",
                      marginLeft: "7px"
                    }}
                  >
                    <svg
                      height="6"
                      width="9"
                      fill="none"
                      viewBox="0 0 9 6"
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased"
                      }}
                    >
                      <path
                        d="M4.5 6L0 0H9L4.5 6Z"
                        fill="#40196D"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased"
                        }}
                      />
                    </svg>
                  </span>
                </p>
                <div
                  className="dropdown-menu global-overlay"
                  style={{
                    boxSizing: "inherit",
                    WebkitFontSmoothing: "antialiased",
                    margin: "0px",
                    padding: "0px",
                    border: "0px",
                    font: "inherit",
                    verticalAlign: "baseline",
                    opacity: 0,
                    visibility: "hidden",
                    left: "0px",
                    position: "absolute",
                    paddingTop: "0px",
                    width: "max-content",
                    top: "44px",
                    transition:
                      "opacity 0.5s cubic-bezier(0.455, 0.03, 0, 1) 0s, top 0.5s cubic-bezier(0.455, 0.03, 0, 1) 0s",
                    display: "block",
                    zIndex: 1
                  }}
                >
                  <ul
                    className="kuda-dropdown--menu"
                    style={{
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                      margin: "0px",
                      font: "inherit",
                      verticalAlign: "baseline",
                      listStyle: "none",
                      padding: "20px 0px",
                      background: "rgb(255, 255, 255)",
                      border: "1px solid rgba(219, 220, 224, 0.5)",
                      borderRadius: "5px",
                      whiteSpace: "nowrap",
                      boxShadow: "rgba(64, 25, 109, 0.07) 15px 30px 40px"
                    }}
                  >
                    <li
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        border: "0px",
                        font: "inherit",
                        verticalAlign: "baseline",
                        padding: "0px 26px",
                        margin: "0px"
                      }}
                    >
                      <a
                        className="menu-link"
                        href="https://help.kuda.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          border: "0px",
                          font: "inherit",
                          verticalAlign: "baseline",
                          textDecoration: "none",
                          borderRadius: "5px",
                          padding: "10px 0px",
                          fontWeight: 500,
                          color: "rgb(0, 0, 0)",
                          display: "inline-flex",
                          alignItems: "center",
                          fontSize: "0.875rem"
                        }}
                      >
                        Get Help
                      </a>
                    </li>
                    <li
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        border: "0px",
                        font: "inherit",
                        verticalAlign: "baseline",
                        padding: "0px 26px",
                        margin: "0px"
                      }}
                    >
                      <a
                        className="menu-link"
                        href="https://kuda.com/faqs"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          border: "0px",
                          font: "inherit",
                          verticalAlign: "baseline",
                          textDecoration: "none",
                          borderRadius: "5px",
                          padding: "10px 0px",
                          fontWeight: 500,
                          color: "rgb(0, 0, 0)",
                          display: "inline-flex",
                          alignItems: "center",
                          fontSize: "0.875rem"
                        }}
                      >
                        FAQs
                      </a>
                    </li>
                    <li
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        border: "0px",
                        font: "inherit",
                        verticalAlign: "baseline",
                        padding: "0px 26px",
                        margin: "0px"
                      }}
                    >
                      <a
                        className="menu-link"
                        href="https://kuda.com/security"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          border: "0px",
                          font: "inherit",
                          verticalAlign: "baseline",
                          textDecoration: "none",
                          borderRadius: "5px",
                          padding: "10px 0px",
                          fontWeight: 500,
                          color: "rgb(0, 0, 0)",
                          display: "inline-flex",
                          alignItems: "center",
                          fontSize: "0.875rem"
                        }}
                      >
                        Security
                      </a>
                    </li>
                    <li
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        border: "0px",
                        font: "inherit",
                        verticalAlign: "baseline",
                        padding: "0px 26px",
                        margin: "0px"
                      }}
                    >
                      <a
                        className="menu-link"
                        href="https://kuda.com/contact"
                        rel="noopener noreferrer"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          border: "0px",
                          font: "inherit",
                          verticalAlign: "baseline",
                          textDecoration: "none",
                          borderRadius: "5px",
                          padding: "10px 0px",
                          fontWeight: 500,
                          color: "rgb(0, 0, 0)",
                          display: "inline-flex",
                          alignItems: "center",
                          fontSize: "0.875rem"
                        }}
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div
            className="kuda-header--extras flex align-center"
            style={{
              boxSizing: "inherit",
              WebkitFontSmoothing: "antialiased",
              margin: "0px",
              padding: "0px",
              border: "0px",
              font: "inherit",
              verticalAlign: "baseline",
              marginLeft: "auto",
              display: "flex",
              alignItems: "center"
            }}
          >
            <a
              className="text-bold kuda-cta-wide kuda-nav color-primary"
              href="https://app.kuda.com/"
              rel="noopener noreferrer"
              target="_blank"
              style={{
                boxSizing: "inherit",
                WebkitFontSmoothing: "antialiased",
                margin: "0px",
                padding: "0px",
                border: "0px",
                font: "inherit",
                verticalAlign: "baseline",
                textDecoration: "none",
                color: "#40196d",
                width: "100%",
                maxWidth: "100%",
                fontSize: "0.875rem",
                fontWeight: 700
              }}
            >
              Sign In
            </a>
            <a
              className="kuda-cta"
              href="https://kuda.com/getKuda"
              style={{
                boxSizing: "inherit",
                WebkitFontSmoothing: "antialiased",
                margin: "0px",
                border: "0px",
                font: "inherit",
                verticalAlign: "baseline",
                textDecoration: "none",
                padding: "15px",
                background: "#40196d",
                borderRadius: "10px",
                transition: "transform 0.6s ease 0s",
                fontWeight: 700,
                lineHeight: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#fff",
                minWidth: "136px",
                maxWidth: "136px",
                marginLeft: "40px",
                height: "43px",
                fontSize: "14px"
              }}
            >
              Get Kuda
            </a>
          </div>
          <div
            className="kuda-nav--menu has-left--margin"
            style={{
              boxSizing: "inherit",
              WebkitFontSmoothing: "antialiased",
              margin: "0px",
              padding: "0px",
              border: "0px",
              font: "inherit",
              verticalAlign: "baseline",
              position: "relative",
              marginLeft: "28px",
              height: "42px",
              marginRight: "0px"
            }}
          >
            <div
              className="color-primary no-link flex align-center"
              style={{
                boxSizing: "inherit",
                WebkitFontSmoothing: "antialiased",
                margin: "0px",
                padding: "0px",
                border: "0px",
                font: "inherit",
                verticalAlign: "baseline",
                color: "#40196d",
                height: "40px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center"
              }}
            >
              <div
                className="dropDown flex global-drop"
                style={{
                  boxSizing: "inherit",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px",
                  padding: "0px",
                  border: "0px",
                  font: "inherit",
                  verticalAlign: "baseline",
                  marginLeft: "7px",
                  display: "flex"
                }}
              >
                <img
                  alt="logo"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBvcGFjaXR5PSIwLjMiIGN4PSIxNC45OTkzIiBjeT0iMTUiIHI9IjE1IiBmaWxsPSIjMDA4NzUxIi8+CjxtYXNrIGlkPSJtYXNrMF80MTkxOV80NTg3IiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSI2IiB5PSI3IiB3aWR0aD0iMTgiIGhlaWdodD0iMTYiPgo8cmVjdCB4PSI2LjkxMzMzIiB5PSI3LjI5NzEyIiB3aWR0aD0iMTYuMTcyNCIgaGVpZ2h0PSIxNS40MDIzIiByeD0iMyIgZmlsbD0iI0U5NEQxRSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazBfNDE5MTlfNDU4NykiPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNDE5MTlfNDU4NykiPgo8cGF0aCBkPSJNMC4zMjUxOTUgNC4xMzU1SDI5LjUxNDRWMjYuMDI3NEgwLjMyNTE5NVY0LjEzNTVaIiBmaWxsPSIjMDA4NzUxIi8+CjxwYXRoIGQ9Ik0xMS4xODk3IDQuMDU0NDRIMTkuMjk3OFYyNS45NDYzSDExLjE4OTdWNC4wNTQ0NFoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80MTkxOV80NTg3Ij4KPHJlY3Qgd2lkdGg9IjI5LjE4OTIiIGhlaWdodD0iMjEuODkxOSIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMzI1MTk1IDQuMTM1NSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                  style={{
                    boxSizing: "inherit",
                    WebkitFontSmoothing: "antialiased",
                    margin: "0px",
                    padding: "0px",
                    border: "0px",
                    font: "inherit",
                    verticalAlign: "baseline",
                    userSelect: "none",
                  }}
                />
              </div>
            </div>
            <div
              className="dropdown-menu"
              style={{
                boxSizing: "inherit",
                WebkitFontSmoothing: "antialiased",
                margin: "0px",
                padding: "0px",
                border: "0px",
                font: "inherit",
                verticalAlign: "baseline",
                opacity: 0,
                visibility: "hidden",
                left: "0px",
                position: "absolute",
                paddingTop: "0px",
                width: "max-content",
                top: "44px",
                transition:
                  "opacity 0.5s cubic-bezier(0.455, 0.03, 0, 1) 0s, top 0.5s cubic-bezier(0.455, 0.03, 0, 1) 0s",
                display: "block",
                zIndex: 1
              }}
            >
              <div
                className="flex kuda-global--menu kuda-global--menu--mobile"
                style={{
                  boxSizing: "inherit",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px",
                  padding: "0px",
                  font: "inherit",
                  verticalAlign: "baseline",
                  background: "rgb(239, 241, 255)",
                  border: "1px solid rgba(219, 220, 224, 0.5)",
                  borderRadius: "5px",
                  overflow: "hidden",
                  boxShadow: "rgba(64, 25, 109, 0.07) 15px 30px 40px",
                  display: "flex",
                  zIndex: 2000
                }}
              >
                <div
                  className="global-menu--wrap global-display--wrap--mobile"
                  style={{
                    boxSizing: "inherit",
                    WebkitFontSmoothing: "antialiased",
                    margin: "0px",
                    border: "0px",
                    font: "inherit",
                    verticalAlign: "baseline",
                    padding: "35px",
                    maxWidth: "300px"
                  }}
                >
                  <div
                    className="closeModal"
                    style={{
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                      margin: "0px",
                      padding: "0px",
                      border: "0px",
                      font: "inherit",
                      verticalAlign: "baseline",
                      cursor: "pointer",
                      position: "absolute",
                      top: "5px",
                      left: "4px"
                    }}
                  >
                    <svg
                      height="32"
                      width="32"
                      fill="none"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        opacity: 0.4,
                        height: "24px"
                      }}
                    >
                      <path
                        clipRule="evenodd"
                        d="M8.22178 8.22183C7.63599 8.80761 7.63599 9.75736 8.22178 10.3431L13.8786 16L8.22178 21.6569C7.63599 22.2426 7.63599 23.1924 8.22178 23.7782C8.80756 24.364 9.75731 24.364 10.3431 23.7782L16 18.1213L21.6568 23.7782C22.2426 24.364 23.1923 24.364 23.7781 23.7782C24.3639 23.1924 24.3639 22.2426 23.7781 21.6569L18.1213 16L23.7781 10.3431C24.3639 9.75736 24.3639 8.80761 23.7781 8.22183C23.1923 7.63604 22.2426 7.63604 21.6568 8.22183L16 13.8787L10.3431 8.22183C9.75731 7.63604 8.80756 7.63604 8.22178 8.22183Z"
                        fill="#4D4D4D"
                        fillRule="evenodd"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          mixBlendMode: "color-burn"
                        }}
                      />
                      <path
                        clipRule="evenodd"
                        d="M8.22178 8.22183C7.63599 8.80761 7.63599 9.75736 8.22178 10.3431L13.8786 16L8.22178 21.6569C7.63599 22.2426 7.63599 23.1924 8.22178 23.7782C8.80756 24.364 9.75731 24.364 10.3431 23.7782L16 18.1213L21.6568 23.7782C22.2426 24.364 23.1923 24.364 23.7781 23.7782C24.3639 23.1924 24.3639 22.2426 23.7781 21.6569L18.1213 16L23.7781 10.3431C24.3639 9.75736 24.3639 8.80761 23.7781 8.22183C23.1923 7.63604 22.2426 7.63604 21.6568 8.22183L16 13.8787L10.3431 8.22183C9.75731 7.63604 8.80756 7.63604 8.22178 8.22183Z"
                        fill="black"
                        fillOpacity="0.4"
                        fillRule="evenodd"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased"
                        }}
                      />
                    </svg>
                  </div>
                  <div
                    className="global-illustration title-bottom--spacing"
                    style={{
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                      margin: "0px",
                      padding: "0px",
                      border: "0px",
                      font: "inherit",
                      verticalAlign: "baseline",
                      marginBottom: "20px"
                    }}
                  >
                    <img
                      alt="logo"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBvcGFjaXR5PSIwLjMiIGN4PSIxNC45OTkzIiBjeT0iMTUiIHI9IjE1IiBmaWxsPSIjMDA4NzUxIi8+CjxtYXNrIGlkPSJtYXNrMF80MTkxOV80NTg3IiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSI2IiB5PSI3IiB3aWR0aD0iMTgiIGhlaWdodD0iMTYiPgo8cmVjdCB4PSI2LjkxMzMzIiB5PSI3LjI5NzEyIiB3aWR0aD0iMTYuMTcyNCIgaGVpZ2h0PSIxNS40MDIzIiByeD0iMyIgZmlsbD0iI0U5NEQxRSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazBfNDE5MTlfNDU4NykiPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNDE5MTlfNDU4NykiPgo8cGF0aCBkPSJNMC4zMjUxOTUgNC4xMzU1SDI5LjUxNDRWMjYuMDI3NEgwLjMyNTE5NVY0LjEzNTVaIiBmaWxsPSIjMDA4NzUxIi8+CjxwYXRoIGQ9Ik0xMS4xODk3IDQuMDU0NDRIMTkuMjk3OFYyNS45NDYzSDExLjE4OTdWNC4wNTQ0NFoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80MTkxOV80NTg3Ij4KPHJlY3Qgd2lkdGg9IjI5LjE4OTIiIGhlaWdodD0iMjEuODkxOSIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMzI1MTk1IDQuMTM1NSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        margin: "0px",
                        padding: "0px",
                        border: "0px",
                        font: "inherit",
                        verticalAlign: "baseline",
                        userSelect: "none",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                      margin: "0px",
                      padding: "0px",
                      border: "0px",
                      font: "inherit",
                      verticalAlign: "baseline"
                    }}
                  >
                    <div
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        margin: "0px",
                        padding: "0px",
                        border: "0px",
                        font: "inherit",
                        verticalAlign: "baseline"
                      }}
                    >
                      <p
                        className="text-normal color-black title-bottom--spacing"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          padding: "0px",
                          border: "0px",
                          font: "inherit",
                          verticalAlign: "baseline",
                          lineHeight: 1.5,
                          marginBottom: "20px",
                          display: "flex",
                          alignItems: "center",
                          fontSize: "0.875rem",
                          fontWeight: 400,
                          color: "#000"
                        }}
                      >
                        You’re currently viewing Nigerian content.
                      </p>
                      <p
                        className="text-normal color-black"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          padding: "0px",
                          border: "0px",
                          font: "inherit",
                          verticalAlign: "baseline",
                          lineHeight: 1.5,
                          display: "flex",
                          alignItems: "center",
                          fontSize: "0.875rem",
                          fontWeight: 400,
                          color: "#000"
                        }}
                      >
                        Choose another country or region to see content specific
                        to your location or stay here.
                      </p>
                    </div>
                    <div
                      className="link-decoration cursor-pointer learn-more color-primary"
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        margin: "0px",
                        padding: "0px",
                        border: "0px",
                        font: "inherit",
                        verticalAlign: "baseline",
                        color: "#40196d",
                        fontWeight: 700,
                        marginTop: "26px",
                        textDecoration: "underline",
                        cursor: "pointer",
                        display: "inline-flex"
                      }}
                    >
                      Stay here
                    </div>
                  </div>
                </div>
                <ul
                  className="kuda-dropdown--menu country-dropdown kuda-dropdown--menu--mobile"
                  style={{
                    boxSizing: "inherit",
                    WebkitFontSmoothing: "antialiased",
                    margin: "0px",
                    font: "inherit",
                    verticalAlign: "baseline",
                    listStyle: "none",
                    padding: "20px 0px",
                    background: "rgb(255, 255, 255)",
                    border: "1px solid rgba(219, 220, 224, 0.5)",
                    borderRadius: "5px",
                    whiteSpace: "nowrap",
                    boxShadow: "rgba(64, 25, 109, 0.07) 15px 30px 40px"
                  }}
                >
                  <li
                    style={{
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                      border: "0px",
                      font: "inherit",
                      verticalAlign: "baseline",
                      padding: "0px 26px",
                      margin: "0px"
                    }}
                  >
                    <a
                      className="menu-link"
                      href="https://world.kuda.com/"
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        margin: "0px",
                        border: "0px",
                        font: "inherit",
                        verticalAlign: "baseline",
                        textDecoration: "none",
                        width: "100%",
                        justifyContent: "space-between",
                        borderRadius: "5px",
                        padding: "10px 0px",
                        fontWeight: 500,
                        color: "rgb(0, 0, 0)",
                        display: "inline-flex",
                        alignItems: "center",
                        fontSize: "0.875rem"
                      }}
                    >
                      <span
                        className="lead-menu--item"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          padding: "0px",
                          border: "0px",
                          font: "inherit",
                          verticalAlign: "baseline",
                          display: "flex",
                          alignItems: "center"
                        }}
                      >
                        <span
                          className="menu-link--icon"
                          style={{
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            margin: "0px",
                            padding: "0px",
                            border: "0px",
                            font: "inherit",
                            verticalAlign: "baseline",
                            display: "flex",
                            marginRight: "15px"
                          }}
                        >
                          <svg
                            height="30"
                            width="31"
                            fill="none"
                            viewBox="0 0 31 30"
                            style={{
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              width: "30px",
                              height: "30px"
                            }}
                          >
                            <circle
                              cx="15.9984"
                              cy="15"
                              fill="#1DCBEF"
                              opacity="0.3"
                              r="15"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            />
                            <path
                              d="M7.49988 23.19H24.4999V6.19H7.49988V23.19Z"
                              fill="url(#pattern0_globe)"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            />
                            <defs
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <pattern
                                id="pattern0_globe"
                                height="1"
                                width="1"
                                patternContentUnits="objectBoundingBox"
                                style={{
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased"
                                }}
                              >
                                <use
                                  transform="scale(0.015625)"
                                  xlinkHref="#image0_41562_2819_globe"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                              </pattern>
                              <image
                                id="image0_41562_2819_globe"
                                height="64"
                                width="64"
                                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAhHElEQVR42s2beZBl51nef99yzrn39t49092z79LMaGa0Wbtl2RZ4wUK2MQo2wZAYpwpMASliAomLqpBKKmUIDlCBJGAbvLB6k2NjI2zZ2No1GmmkGc2+bz29d9/tnPOt+ePcGcngYAO24Vaduvd23b73vM953vd93uf7juB7/Pjcl5/KhKrXnzs1nxw5taCCcWxZP+xfsWXECUL55h+4vfu9OpcIWnw3f+DIkaN9Pri1C838lsPnF245cK6z7exCGF7O6bfG1CYahXLWcampPEiT4DoK25wcyU5eMzm4d0VD7Vu/auTUA299dfO7dY7fcQCOnjjTX3Q7ty8sLb5terF1874z3Y0vXBYrzy1GFguIEWQMKAn9WaBrBHNtQVl6RCgRPie4HBkta/pt8+Y14bSxjQN37lz3ie0bhh9561tft/jPEoB9zx/dHHz+E0vN5fuOX5jbs++c1ee7fSyXmiJofBCULmBdhBgovaAwgVR0achpkrhIbgfIwzDeQaeMeNNhQ/0ys8uWblFnx2j7wD076l967W07P/S2t7390D8LAL746JFt2MWft97ff2nZr3vxouHobKAVMqRMkCqw2I6EEFEiUjpolykqLnLN8H5W1w8QygOUhaPt+inEVoKvM90eZ7a9ioZcpD9p0mkv07DTDDHHSFab3rZ+61/cdstrf+Od7/yxQ/8kADz05NmhhaXLP1+a4t0nF8S6Fy4rlLhEfzaLDQlLZhc+JCzmnnYRSWQkEZp2KUnkDLsmvszagf10iyUOXb6ZhGVW1p+ntDVa3ZVMd66jL2sxog+SiS5aguuWRN+H6QRmphZoqMGp63fc8ZE3vO6Hf/0H3vSGhe8ZAJ979MSrLy9M/bfHTrvbj8xldH1KqiWbRg8w2ujSLtfRdqtxQZKbCCFiLGjVZNP4YVYNPkNNn+Hych/PnXodg41F1o88SbOtsWWgNIrCjjIxdJokTpHnERP6wHaRQRFtSt6cp7vcoTnnGB3Y/swP3/cT73vPe97zV991AH7tz/f/4kx7/n1PXqgPnVuu08gUgzWBliClQquUegKZckgREMJSGE1Rlty8+fNsnDzBQtvj6bLUHuGv97+d/uQCmyafZqk9iqJLKpcY0OeI3hCCQcqSsgwE5/DWY22daA0+75I34fyZOUwz6dxzy1ve/5b7f+i/vvkt94dvNx717X5w/7G5xsV1//J3Pn+k+csnFuu1mWKQ4T5NPVUopckyRT3TJFqhlWJ8+CTDA7N0zQQuJsQoUarg9MwWFjqTjI/NsNDcxNTcVgq7gv5+w6bVJ5gYnWa0f5FaZkiyBHSdLAkkWpAoQZaAVp4gEqR0SAl9/XVK306f3rv3NfOzrU1/+OGPPvyhD33QfMcAaHe7A+/95IU/+MzB7juT2hBa9zHckGSJJk009ZqilmmE0GglGWh0WD/5POMrLjI1vwcXEopygNwPsW7iAlrUWGyv4/TU9Vg/yE3bH+GGbXtp1LtoHVFSIlWC0pF65lBSoaQkURGtEqTQSOGQChASKSO1WkZWg2f2Hbj+5PEzuz7yoY899OE/+HD+rWLT3+oDM4uXaz/18eMf+vPn3QOrxwYYyDQ1rUi1JNGSLJWkGqTUJDqwa+tXqNcKut1J1q09xezSBQ6e2MX6NSfYuOYAa0aP40yd2cUxtqx+mka9jdbzSFLyPKXEkiqPyAy2AC3B1wKmCAQnabYUSkdG05J2VyCcoE8oMgIp/eACX338yz+ofl185ML5iz+6dt2a1j+KAfqmN/zW7z4q/9WqkUGGagn1VFNLNFmqydIEJRVaaWpZwkBfQaNuaHU3MTq0SH/NATVWTUyxZ8cjrFlxnkYCw/0FowNzrBxq0l/vIgUIkSCFQCCIUaKVJEsCQkY8EWJECYFC05daUhnRCBIiqRBoBATQWqGkZ+8zR6+Znrmw4a8ffvSz73//++M/CIA/euzJn/7PD8X/NNAYZ6ShqSUJtVRTSzWZTkgTTaIUiVZkmUCpGsutrRDrNGo5UtbYPHmJ6zYdxcVIXtaRQlM6RQiaRKZ0TELpJdZDDKC0ROtAph0uasAhhMd7hRYJadDUhaeuAg3lUVISA0giAog+oqTAe8vjTxzYLWVQj3zt8a/8vQE4fP7wzf/uM+c/NpdvyiYGXh589ZzoKvAkqV5LqSEmSClRSrJu8gK7tx4gSQvaJqU0GakSyJhSlBkOi9SQ6BStJDZAaQVKBjKZMDs3gRKOTjHEuctrGB9coi8JpHgkkuVigPOLK2mkJVkq8FGDlOA9MUL0UOSG/c/vu+tTn/jscx//2B8f+7ZrQKvdbrzrYy9+4OT8qsHxgYRUSzKtybTqFT6FlhKtFYkSKCURQlZdVQQK28dSax2Wg5gY8REyoWh1Gwz2L3D8/G6WW44dW58h1SWFTZARRvpBYTlyejsPPf5KJkeP4UJkcVkw0jfF5NBl0rpnyQ7y8adejwyL/MSrvoQOggvzoyiWqA8GrIWBYcnYuObyxQX1/g/8x/9+4eKFp9auWTvzbTFgyxt+8t0f+Kp/z0jfMAOZpJakZEmV82lS1YCKARqtNEonDA3m3Lr7cW7aepKtqy6wadVZhvtaXJi6liMn7uDizDbOXNpMCILx0Tlm5q/l8sxmlOow2NciU9CfdbGuztf2v4ap+THyMiUvM5rdIV44dS2trmB4YJqoci4sruHS7DjrRucYahQ4rxGxQClw1hO8x1lHjIIzZy+MeVf0Pfr1vV/4lgC8eHp+zXsfXPhI26WDY30JNZ2QJVXep4km1T0GKE2iNDpRCClYMz7LPdft45rhJhtH5unLLM8cv5UjZ/cwszRBCHU2jp/jxNRNLLaG2bjqGKnUnLu8hY2rzuBsxrNHd1N2U/rSFteuO8Qd25/l1m0vsmnyAo2kYDDrsGpwjlR5toyfZaY5zl8f2MnEwByrx5pEHN4LvA9YYzHGYYwieMvZ88d2ff6zD3/pg7//4Yt/JwCjd/30zz14uHzLxECdmtLUtH6p8PX6vlYarTVpIlEaEh25beshto8uQMxQImXv2et49MiN+Jj1PuNBSAo7iHN1YnAYB1MLm/C2pK7aPH3oLoo88PpXPMINm88zOVIwMVSybmyKbZPn2LzyEjomBJcxVGsTSHn0wHU0shY71p7He/A+Yp3HWo8tI956pEqZX1xMrCkm9j554E//vwCcON9c9StfnPu9ttWDI2lKLdHU06rlpakmS2RV9ZUiTSRpBlpDkgh80IQgmWsP8ez5bUwvr+aaiRl2rr3M1okZrpm4xORIk/lmH0qWaAmXFjbhg2a5PUy3SPBB0ewOkheSxfYwF2aHWOzUOXZ+lKF6CapOlArwRC+pJwW5cxhrWDd8ERUtzka8jwQv8B6cl1gTiTEyPXdp42c++ZcPf+iDf3DhmxbBh4923nhiNqxZ2ZeRSEmaSLSWaKlQSGQQKCVItCRNQamq5QQBi/kEUkwzlHiy0cDazcdZUW8hEAQgwTBjBc+d2sSFxXFkHEerglpW0u4McvzyDWRyES88T594FdZaErGItx2Ga5fYuX4aVIYIDu0TXAyM9Tf50bueYKmZ4EwNbyRCGJSUaBmpZZGsIdFtRaPeYG5+Ovvzz3zwZ4En/hYA5y42Gz/+kYvv9k5S14pES7SUV2WoCqClIFEKrUHKSpgEARvGmrz+2sOsHVgmoQbkODSWYQKRgMDgkcJx764zzLcucezSGMenVtDNU3asOcTk2DLPn1zF7EJCkoCzERPqtPOUu659mnoW6ZqIBFzIcLGOwKNli4FapO0lQaYoFZHCI6VAIBGiROiq5dYyzXPPP3bvwRdfWLvruj0XvgGA/efzHc+dL18xmKRoLdBCojxoDypWuaKkQgmBFKCVAA1Kwu3rT7J9YIk2Q5QxBaF62RUQeASVmsu04tqVTViZs2PdJU7MDHP8XJ09W06xYbzFzs2XWFiSzC9JWu0Sa5aIDravWyb4BjFYhIxkWQAyOh1Nu1WjP5lF64gtIwRA1ZCpRGeSWuaRmcF1LfV6Hxcvnxv/2hMPPQD8j28E4Gz31c22T9asqHq88hElQYWI8hGd9JiQCNLUI0SknjpuXjvL9rGcghVAJWdBEQgIIhGFICAJeKAgwSOoJYbda6a4Zk2gRNFyfQwO5Az05aybyLHGsrxomJvVzMw2mBhpI5RARInAkiYRm2V86cAeRrOTvHbXC4josKVHSV0xVCuETklkihAGEyPGGB594q/uP37i+G9t27otSIDDxxeyr77YerMIkjTRSA8qgKpIVD1LidISlYJD0lezvHXnCd645Sw11YejTqXkNQKNRFbSFEeIloipZG3PhnAkFE7jouyxRWCtpCgTclMjN3V0khFlxhf37ubw6REaKicaR/SB4CKNpMNtOy6x/9xO/uSR23n2zDXMdsfIEks9tWSZQ6mIjtUAp3QkasGFy+e2LzcX11xlwMVFu+HIlN3dqGfIKFAepAYpQAqBFKIaUbWo2C0Ed268zI0r2xQM4kmQxF4gmkqZB2IPEiEEEQURIh4pVMUHlVWfDWVlF/tAdJWUFXiikIyPLHPNhmW+uO9WRmoPMVhbwlIjCrClZefac9x3a+CPHt6AMUAYJu+spz9pU3ZzJvtO0ejrUJSQBEGtXuPi3LnJF47suxP4Mwkw23br2jYOZYlEhirnpRBIVR1CCIQUSA0+wvWrZ7hj/eUenRWC2Dt6crjHBEmGJOu9riNFHSF0tSTRY0K0hmgdMUZQ6mWSWuJsoCgCd+w4yvCQ43PP3EoUoJWDGIlIuqVm2+pL/NQPPMkP3nKQV157jBhTnjy0leeObeC5E5uwIUEnHh8iiVSURc6Lx559DYAEOHKp2J47RKplFYKgqqJaVXknRXX1NUgR2TS2QEN67FVHTQEJV5KmeoReiBpJejVo0WMIURBtl+hKUBIR6S0ayOoEooAIKk0Z6LO87ubDnJ+f4ND5taSqiyCCEIQoCUTGh9pk2rN2vGTNuEEoh8ws00tDHDy1llbeQEgPwlOYBodPTu14/uAzSgKcXDDXuyDQSiKr770KglQSVVfIukRJ8FEw3+7Do3pZfuWqV9WiGkoDkXiVDRGPjzkh+qufRUiEriOyOkLIKq996AVfCReIhCjomBqrRxfZNLnAJx69k+PnR0lltwJVVJZ78FCrwfHLG3jq2Bqi8EgRESowNbOC6blhlIogA+18jHOXa6NLzfl+uf/YtJpq2y1SV+1NXMnc3okgIEkDibKECImMjDTaSAwCgyRH9ApcEUp8NL16H3p1wPXaYQKiqg30wIlSV3VACqIQCCmrUTZWbJEigvc446klOW+58xmkTvj047fT7gQSaUikpT/NKVydh1/Ywaef2EKzC0oFwpWfkoG8qKOlBhqU+RhLLYaFSAd13gmDi103qZRAyJfSM4YIIRB9JBhPSAUhwsqhgjWrzjGFJRCoo2lgcCisEKQiI8YqUCUkvgeAEpqIBcDHSBSh1x4tITqk8PgYiNYSnQPnUFSrSMF3WLQltdoCP3L3V/ji0zuZWujjmjXTLLXGOHRmNU+8OMmR831E1yWRHbyrmIH3EB25SQkxQdAP9NHtlkMvHjq7Qk939FDLyiF5RRFIKmsmVsHjPbbUqCxFZ2CD4IwV9KcGT40akmEc/b2ACyJCSLqxUgCCihESQcAR8eS+wMWSTEcKZyhtTgwFwRlkjKjgCK6ktDkOw5wNzDQtyji2rj7CA3cu8vyptTxyaCfnpvuZX1aY0jJSb5OXjrKIhFAFXh0W42o0Ow3qNQdK0OnavhDVkL7YOZ4pKbIsGyDEAFoRhSAGIESij0QfIEakELS6NfYfvp4b9uynkZYUKGYR5D3VX0mfSEeA8xEVPYlyyOhJg8HisVhscJiupdO15GWBiAX92qKDJ1pDp3RMt7p4b+nklk4nIoPgUlBMDs4w1DfCi+cS9qw7ytobl3js0LW8eCqDaBFXLKGrADgIkmZ3CK3bEAXWBblpw6Y+vW3tY0wOrefi8s1IZavim0CUECKEGAkhEKwlZgkxCKYuTdCo7eaGXftQ5LjYoCnoQSCr1V9hQQVyL2iZQIKFGDE+4kNEhEhZBrqFx5mId9D0Ee9sNTl4S7uIeO/x1iKwhOjpWsGsDeyaPMzOkYPUGjlT7QlmmjWMi+he2ogI8SoIARB08kG0SkB5IgKttdCTgxN28+Rht//idgR1gvWgJLEOQUEQEGQkEPAuIpVAazh/YTVpUrJl4wkaWRtPjYBEEWgVDbzpwzuJzlrUavMVK3JNWQZi9HjrCN4TnSdYj7eB4D0+eLwLhOBR0SNxID0NHbBREY1FAVEqYpmTx4SvvbCdqdmUVLdxNuC9rwp4FFSVUICKdIsaIVa2ndY6Tk1PFzphc/vmTZ9pHb48OXnm8htJVIEPsQpcRbyIeB+qVuM8PoCqSXyE4yc20W4NsW7tWdrdUUxZJ0tymq1hOp0BjJEM9M+yatVJJJ4snUdKS7C+912OED1ReGKs2mDwEe+uBGGQWFZIEHoE65YqMRMVQnqy/sBz57aw9/gkSubEEAnBEYMlBlcF3+sEQgiEiBQmBQeNUZWfuXCsqVM1tDRSZ2bbxLPbTk+9HusFPoSK9iISRMAjMIVFuAgqIr1CpNVgdPniKPMzoy/r+j0dUcl7FhdXMj+/khgM12z5OitGFymtwFuHjx7nPdF7YnB4H676ed5FbNBkuo2Wghg1daEIUmNCl7YrOT61lS/su4Fu1yOlwzpH9BaCIXoDV0C4elK9bAiBRq3evOG6HXNyy+rdJvoVZ0YHpxgdvEizaFCWAp9bQumrXi4jPgasc7hgMd5gnMUahzce04Voodf+IYAvI85UvdgaIFqU7OCcJzhLCBZrA6aMV9PBh+r3gvV4Y4leMjO3gTMLfeR+mhAcab+nqeEvDtzJJx67i7klhZIW7z3RG0SwVe4HB8FWxbCnWCt9UXW4vlpjqZENLUmA/nTPwYH6Im94xUfZvv4FvAy08gSbG1zH4roWbxzeeXys0sMT8DLiosO5EmcizoCzYEpH3m5SdDpYYwkhIshB5IRQooShllqsiwRXUTZ4C9HiXcWCWlLQJxLOnNiJa2do4RAhZ9kqvnrgTp47vAdjPFIaXHAEb4jeEoOH4Ksr4m1v5LgCQLiq0gcbfUtDA0NtDbCif+MBcUmzYeURXvGm/83hU6/kC/vvoyj60N4hXURmEVmlDyKCqGuEqgRvFLFC31V9wPsSb3MQAu8iIskoi35On9rN5s1P0EjbSCHJaiUGgzee4Kt2JYQjCE80AwzpDt+/61FqSU4wCY7Ao4du5rlD1yJoIkSOdQbvC2SwaCExyIr2vscAYk/VVle+muhgy/rJU7fessdIgMHa0LlEq44kMpyU3H/913nHnZ8mxpzSgguh57Q6nPNY33Ndjcf5iPNUf7cGYwzGdjGmgzcW2ymweYn1ljPnt3Ds+B5scFhXIqNB6WpwQTqEdKjMkjYcy50BrImM9i+gvENScnZ5hBdOrIdgidHibYl0Bukc0gcIERmrDRl435tKBTHGl65+BGp1btm19etX/YBMDZztT8ZOxnB6D+UQZdSsXXmOrNYib9VInUOK2BsuBHgBthpHg68mSOkjQoSKzs4QfEQmVduJhSFqCNFxaWo1a8cHGB28SLSS6F2lGbQjRosIHiWhkF1a7Yw6EhENefR0TMC5SIyW4D1prLqI7JWe3FuEd8gQ8CFUwcaXlC0AxjG2dvXSnu0bvn51HL5m7Y3NTaM3fMEbj7WBTh6Zb9fpmoSAwwWPcx5nPd4ZnLNYb7HOYYytFiG8w1hXnaDPINRwLlb/V1psx+Btl1Y74fLUOBpDXTuS6MjwJMKhvSPzgbRUDGUdBhqLdIqEmY6mW3YZTFr01dpEH5AxIKUk+GoA996CN3hXIoLtDXUQo+upwghCgo2sX7XyxMZ14yevAgCwceSWh2qxThBd0rTN6cujLOV1EBYberR3DlN6rHFXU8IahykrEJy1OGMrILzAGostDdZaTGmwxlCUjtZyH0kQpNGivEdaS+I9mEAoDEnsUEu71FSbTlFjZqmPxAYG0w7DA81qTglQWhjqb+OioTAl0RuiywmuhOCrlnhVCfZ2BMmEV920/Svbt28x3wDASGPDC0PZxDFvO8To8KHAR4+F6ogecwUEY7GlrZ6dwXiH9Q4bPMZW7c26gLG2d1Q9OjeCvnSWGzccIAseX3ikLxHWop0jDR7dm96isZhCIelSU70+GxxlqegUgm4h2TZ5jN1b9uNCT0v0en8MjuhMVQSD6ykhoPQMrR5v/8h9r/w4L5v9ANgwcc3C2tHXftQUAW8da0YuUq81yX0v+BgrJrgqGOMc1lZp4HqglMZiXbgKUpUePcCco5tHRvtnWTsyQygiynhqPpCGiPaBGgERJN4kCCcoXUqiuowNzFBEzfGZDUzNDzLSmOXeHV/h1TueZnZpmKITIZZEZ5DBw8tFUOSqxUbpuHXPtie3b1178JuuDE303/jJU/ZTv9zqtvpH6sv015aYLgaoCYeIChF7bo2JRBmJQeBE5SPKnhUqfE97XnF1YiDGSBAR6wWdHEobqdU8RIErI14EjPPE4JEhoFzlG9e0JbcllzqjPHPsRk6dXclyR7Jj4hx3b3uaE/OrOXB6HdF2ELFERkd0JdH29uQSrypAXEQODcV3ve3e/zO6Yiz+LQYAXLv+rqOrxl71x8tlgRRtarqJcbEqgjhM9JQ+UBYG0zGY0vVWYS2mMJSFobzy3l55dhhvMcEhZZfTl1fy+KFtiFCCzwGLEAGpqiNRHk2OcxYfC+bzjK8+fw+HTmwg7wRSsczK/ilaNuOZ01voLnmkyElkAG8JNu+pv/jSLkAhoGu55abr9r7u7hs/+/KY5d9cHd6+9v7fDqTdvccnODszjqRb5XhwOHp57j2lsRUQtpLF5ZWAe6lQXgHBW4zw+GDx1lDawGOHtnF2bpgkKfDO4b2v3CjoTYae0npCaJMoQ7etibaL84HR2mVuXHOAi4sTHDmzDnwXgsOVBb7oVPSP4RsZYCNyYIj3/uSbf31sfMz+nQBsmLz5xW2T9/+vmaWcTlfgg6ny3jtssBgcNvrK0LhyuKoFlrYHxMuO0lqc9zgXKAtHjF3mOxmnLw6AK/Ah4IWoJtDSUhY5xpQQcpaKBkcvbsOWkSgNhbcYGzg7v46nju0kb5ZAh2C6hO4SmNZLRe9K4etd/Td+3x1ffODNr/nk34xXfrMdIrvXv/MDt20Kp4frB+mWEtvr/c5Xw1AZHaX31QYE6zDBUgaH8R4TfKUJnMO4nj4wlqIor6aG9Y4jFyZpFhIhCnxhcN2SMi9w0RGlQSUt9p/azdefvZXcRcpoiLLDUt7HF5+7ixPnRyEugcurwL3hKo2uLjtUwQ+vX7f8Kz/zwC9/s1i/KQAjQ1suvX7P2967ffwgrmzinMc7i7cVCDY4St+74kVvMgw9untL6avgbXR4PGVeUOQF1lWaQIouxy6u5tEXryW4kmC6lK02RVEiRYFQHQ5cuJYDp7aB6FB4S2kNmhKFp91xBNsCV4ItK+krkh7te+OvFOAioPmln3rgv9x+254Xvm0AAPZs+fFPv+OO3f8z9Wfo5hbjDMZbvLM4b7HRYqKldO5qrpe+em99FbwNjrI0lMZc1QPGWpwr6ZrI00e3MrcYqalpErVMqpbJjWXfmZ089OwraXUkkJMXhmgLsmgQzmJNB1e2wBUIHxAhgC8rrSB6LS8KaJe85S33fvLfvvvNH/gH7RP8k9/7w0ePnz182/5jZlNME0RvqAix8vwDgRA9IXiCr1wc7z1B+MpIcR7bqwHeBVwI+OCxMRAxlE6iVJPcCE7NrebU3ARPnrqBx45eR6fjyUSXrvV08hwVCzIsJi8p8jaYLsIbsF2i61SVX8jKiZES2iW333Pr3o/+5i/92OjocPsfvFv83OVTG9/+/scffPyovT4d6SfVGilktXaI6K0iCUSolraqutObyFzoSYJeVY6VaxxlROqAFpFEeBLpsU5gXaRbRErbRfkC4R25M0RfkIkSaQ1lu4srmlC2esHnvYKnXgKga9mweePRj/zme9/66lfdcvgftVd4/eTmM088d/BH/83v7vvTgxeXdsfBPhKle6vGspLXPcNBxCvrf1fs9NgLPL4EQIiAR/qIFYE8RpQIJMIhvQdn8aaaKJ0zxGhIMURbUuQ5vmgS85dXfHqBV1KMrmNizepjP37/q9/xrYL/e90v8MjTh7b9wof3fmTvyaU75MAAaZoghOwto1WTd2/86tliVdBCVBa4d7HaLBMDigCiWiYBj6TnAHtPUVqMvaLjS1QwYA2+6OKLJuSLYDqV/xZ7wStdjei545Y7b9r7Q99327v+wy++6+B3/IaJB/9y78QH/+rwb37+hem3k9ZI6/We2ypeAoArGqQHBD36+wiieh1DIPb8v2pUrWRwcO6qryeDQboSnMGXXXy+DPky2O5LfU7KyuHpWlAJb7j3jk+97+fe8bN3333r1HftjpEvPfyM+r9PnPz5Tz599t9PNd2EaDRIkqQ3cIirXxir3RCEHvUJEdFjQAihqgs9/y6GyhXGVz6eDKZqca4kmi4xXyIWzepvPaCFVNWs0XWMTYwvPHDfPb/xr9/xpl+77fYb3ffkpqnf/v3P3fjgU6d+9bHjs/eVFiH7+1A6eZn+7rmwvcJ4RZ7G0Lvqwb8MAEf0vRHWV0e0XShaUCxD+bIq39sWj4OknnHHzdf95c+864d/9UceeNOT3/Pb5j7z4FfF3kOX3vbokfM/t+/k7N2dMkKtjkxTpHxZPrxsMqwCfgkEERwER+gFH10OZRuKJqJsVzP+lRUH48B46O9n28Y1Tz1w3z2/8/p77/jTe159t/0nvXHyuX3P17782KE3Pfj1g+8+Nr186+xidxShIcsg0QgpezUhvMy29i85t96AzaviVragaFfpEEPVSo0DBMOrJtq7dm57+qbrtnx0YsXwp973vl9o/7O6dfZTn/gLsdRu79774ul/8dTBM6+9tNjZMr3QGse4ir6yZ1kTqhbmDdiiKmxlG8q8B07PwkprjKwcW163ZvXxPTu3PnLbK3b92c037nr2zrvusN+pc/6u3Tz9uQc/W5uend1w9uLMnfsPHr/73NTM1na3HCvKcrDb7gzlnWa/t6UgBJQU1Gq1bqPR1+rrqy+OjvQvrFq9+sy2zVueWDk6+MiNN+458f3ff2/nu3LzdO8Wcsd3+fGZT/xZUpTlQJKk/a12a0VZmpVZrTYQQsQ6167XGwtJoueNKZdXrFjRuu++Hyy/F7fQ/z+LndUmsYg+YgAAAABJRU5ErkJggg=="
                                style={{
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased"
                                }}
                              />
                            </defs>
                          </svg>
                        </span>
                        Global
                      </span>
                    </a>
                  </li>
                  <li
                    style={{
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                      border: "0px",
                      font: "inherit",
                      verticalAlign: "baseline",
                      padding: "0px 26px",
                      margin: "0px"
                    }}
                  >
                    <a
                      className="menu-link"
                      href="https://kuda.com/"
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        margin: "0px",
                        border: "0px",
                        font: "inherit",
                        verticalAlign: "baseline",
                        textDecoration: "none",
                        width: "100%",
                        justifyContent: "space-between",
                        borderRadius: "5px",
                        padding: "10px 0px",
                        fontWeight: 500,
                        color: "rgb(0, 0, 0)",
                        display: "inline-flex",
                        alignItems: "center",
                        fontSize: "0.875rem"
                      }}
                    >
                      <span
                        className="lead-menu--item"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          padding: "0px",
                          border: "0px",
                          font: "inherit",
                          verticalAlign: "baseline",
                          display: "flex",
                          alignItems: "center"
                        }}
                      >
                        <span
                          className="menu-link--icon"
                          style={{
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            margin: "0px",
                            padding: "0px",
                            border: "0px",
                            font: "inherit",
                            verticalAlign: "baseline",
                            display: "flex",
                            marginRight: "15px"
                          }}
                        >
                          <img
                            alt="logo"
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBvcGFjaXR5PSIwLjMiIGN4PSIxNC45OTkzIiBjeT0iMTUiIHI9IjE1IiBmaWxsPSIjMDA4NzUxIi8+CjxtYXNrIGlkPSJtYXNrMF80MTkxOV80NTg3IiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSI2IiB5PSI3IiB3aWR0aD0iMTgiIGhlaWdodD0iMTYiPgo8cmVjdCB4PSI2LjkxMzMzIiB5PSI3LjI5NzEyIiB3aWR0aD0iMTYuMTcyNCIgaGVpZ2h0PSIxNS40MDIzIiByeD0iMyIgZmlsbD0iI0U5NEQxRSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazBfNDE5MTlfNDU4NykiPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfNDE5MTlfNDU4NykiPgo8cGF0aCBkPSJNMC4zMjUxOTUgNC4xMzU1SDI5LjUxNDRWMjYuMDI3NEgwLjMyNTE5NVY0LjEzNTVaIiBmaWxsPSIjMDA4NzUxIi8+CjxwYXRoIGQ9Ik0xMS4xODk3IDQuMDU0NDRIMTkuMjk3OFYyNS45NDYzSDExLjE4OTdWNC4wNTQ0NFoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF80MTkxOV80NTg3Ij4KPHJlY3Qgd2lkdGg9IjI5LjE4OTIiIGhlaWdodD0iMjEuODkxOSIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMzI1MTk1IDQuMTM1NSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                            style={{
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              margin: "0px",
                              padding: "0px",
                              border: "0px",
                              font: "inherit",
                              verticalAlign: "baseline",
                              userSelect: "none",
                            }}
                          />
                        </span>
                        Nigeria
                      </span>
                    </a>
                  </li>
                  <li
                    style={{
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                      border: "0px",
                      font: "inherit",
                      verticalAlign: "baseline",
                      padding: "0px 26px",
                      margin: "0px"
                    }}
                  >
                    <a
                      className="menu-link"
                      href="https://uk.kuda.com/"
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        margin: "0px",
                        border: "0px",
                        font: "inherit",
                        verticalAlign: "baseline",
                        textDecoration: "none",
                        width: "100%",
                        justifyContent: "space-between",
                        borderRadius: "5px",
                        padding: "10px 0px",
                        fontWeight: 500,
                        color: "rgb(0, 0, 0)",
                        display: "inline-flex",
                        alignItems: "center",
                        fontSize: "0.875rem"
                      }}
                    >
                      <span
                        className="lead-menu--item"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          padding: "0px",
                          border: "0px",
                          font: "inherit",
                          verticalAlign: "baseline",
                          display: "flex",
                          alignItems: "center"
                        }}
                      >
                        <span
                          className="menu-link--icon"
                          style={{
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            margin: "0px",
                            padding: "0px",
                            border: "0px",
                            font: "inherit",
                            verticalAlign: "baseline",
                            display: "flex",
                            marginRight: "15px"
                          }}
                        >
                          <svg
                            height="30"
                            width="30"
                            fill="none"
                            viewBox="0 0 30 30"
                            style={{
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              width: "30px",
                              height: "30px"
                            }}
                          >
                            <circle
                              cx="15"
                              cy="15"
                              fill="#FF4B55"
                              opacity="0.3"
                              r="15"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            />
                            <mask
                              id="mask0_37774_3540_d"
                              height="16"
                              width="18"
                              maskUnits="userSpaceOnUse"
                              x="6"
                              y="7"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased",
                                maskType: "alpha"
                              }}
                            >
                              <rect
                                height="15.4023"
                                width="16.1724"
                                fill="#E94D1E"
                                rx="3"
                                x="6.91406"
                                y="7.29736"
                                style={{
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased"
                                }}
                              />
                            </mask>
                            <g
                              mask="url(#mask0_37774_3540_d)"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <path
                                d="M-0.792969 7.26953V23.1048H30.8776V7.26953H-0.792969Z"
                                fill="#012169"
                                style={{
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased"
                                }}
                              />
                              <path
                                d="M-0.792969 7.26953L30.8776 23.1048L-0.792969 7.26953ZM30.8776 7.26953L-0.792969 23.1048L30.8776 7.26953Z"
                                fill="black"
                                style={{
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased"
                                }}
                              />
                              <path
                                clipRule="evenodd"
                                d="M11.5026 15.187L-1.5 8.68573L-0.0836506 5.85303L15.0434 13.4166L30.1705 5.85303L31.5869 8.68573L18.5843 15.187L31.5869 21.6883L30.1705 24.521L15.0434 16.9574L-0.0836506 24.521L-1.5 21.6883L11.5026 15.187Z"
                                fill="white"
                                fillRule="evenodd"
                                style={{
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased"
                                }}
                              />
                              <path
                                d="M-0.792969 7.26953L30.8776 23.1048L-0.792969 7.26953ZM30.8776 7.26953L-0.792969 23.1048L30.8776 7.26953Z"
                                fill="black"
                                style={{
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased"
                                }}
                              />
                              <path
                                clipRule="evenodd"
                                d="M12.6812 15.1871L-1.26562 8.21366L-0.321392 6.3252L15.0418 14.0068L30.4049 6.3252L31.3491 8.21366L17.4023 15.1871L31.3491 22.1605L30.4049 24.0489L15.0418 16.3674L-0.321392 24.0489L-1.26562 22.1605L12.6812 15.1871Z"
                                fill="#C8102E"
                                fillRule="evenodd"
                                style={{
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased"
                                }}
                              />
                              <path
                                d="M15.0423 7.26953V23.1048V7.26953ZM-0.792969 15.1872H30.8776H-0.792969Z"
                                fill="black"
                                style={{
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased"
                                }}
                              />
                              <path
                                clipRule="evenodd"
                                d="M17.6815 17.8264V23.1048H12.4031V17.8264H-0.792969V12.548H12.4031V7.26953H17.6815V12.548H30.8776V17.8264H17.6815Z"
                                fill="white"
                                fillRule="evenodd"
                                style={{
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased"
                                }}
                              />
                              <path
                                d="M15.0423 7.26953V23.1048V7.26953ZM-0.792969 15.1872H30.8776H-0.792969Z"
                                fill="black"
                                style={{
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased"
                                }}
                              />
                              <path
                                clipRule="evenodd"
                                d="M16.6258 16.7707V23.1048H13.4588V16.7707H-0.792969V13.6036H13.4588V7.26953H16.6258V13.6036H30.8776V16.7707H16.6258Z"
                                fill="#C8102E"
                                fillRule="evenodd"
                                style={{
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased"
                                }}
                              />
                            </g>
                          </svg>
                        </span>
                        United Kingdom
                      </span>
                    </a>
                  </li>
                  <li
                    style={{
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                      border: "0px",
                      font: "inherit",
                      verticalAlign: "baseline",
                      padding: "0px 26px",
                      margin: "0px"
                    }}
                  >
                    <a
                      className="menu-link"
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        margin: "0px",
                        border: "0px",
                        font: "inherit",
                        verticalAlign: "baseline",
                        textDecoration: "none",
                        width: "100%",
                        justifyContent: "space-between",
                        borderRadius: "5px",
                        padding: "10px 0px",
                        fontWeight: 500,
                        color: "rgb(0, 0, 0)",
                        display: "inline-flex",
                        alignItems: "center",
                        fontSize: "0.875rem"
                      }}
                    >
                      <span
                        className="lead-menu--item disabled"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          padding: "0px",
                          border: "0px",
                          font: "inherit",
                          verticalAlign: "baseline",
                          opacity: 0.7,
                          pointerEvents: "none",
                          display: "flex",
                          alignItems: "center"
                        }}
                      >
                        <span
                          className="menu-link--icon"
                          style={{
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            margin: "0px",
                            padding: "0px",
                            border: "0px",
                            font: "inherit",
                            verticalAlign: "baseline",
                            display: "flex",
                            marginRight: "15px"
                          }}
                        >
                          <svg
                            height="30"
                            width="30"
                            fill="none"
                            viewBox="0 0 30 30"
                            style={{
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              width: "30px",
                              height: "30px"
                            }}
                          >
                            <circle
                              cx="15"
                              cy="15"
                              fill="#FCD116"
                              opacity="0.3"
                              r="15"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            />
                            <mask
                              id="cmask0_37774_3479_a"
                              height="16"
                              width="18"
                              maskUnits="userSpaceOnUse"
                              x="6"
                              y="7"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased",
                                maskType: "alpha"
                              }}
                            >
                              <rect
                                height="15.4023"
                                width="16.1724"
                                fill="#E94D1E"
                                rx="3"
                                x="6.91406"
                                y="7.29736"
                                style={{
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased"
                                }}
                              />
                            </mask>
                            <g
                              mask="url(#cmask0_37774_3479_a)"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <g
                                clipPath="url(#clip0_37774_3479_a)"
                                style={{
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased"
                                }}
                              >
                                <path
                                  d="M2.03125 5.89795H28.0312V23.2313H2.03125V5.89795Z"
                                  fill="#006B3F"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M2.03125 5.89795H28.0312V17.4535H2.03125V5.89795Z"
                                  fill="#FCD116"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M2.03125 5.89795H28.0312V11.6757H2.03125V5.89795Z"
                                  fill="#CE1126"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M15.0299 11.6758L16.9071 17.4536L11.9922 13.8826H18.0675L13.1527 17.4536L15.0299 11.6758Z"
                                  fill="black"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                              </g>
                            </g>
                            <defs
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <clipPath
                                id="clip0_37774_3479_a"
                                style={{
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased"
                                }}
                              >
                                <rect
                                  height="17.3333"
                                  width="26"
                                  fill="white"
                                  transform="translate(2.03125 5.89795)"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        Ghana
                      </span>
                      <span
                        className="coming-soon"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          font: "inherit",
                          verticalAlign: "baseline",
                          background: "rgb(255, 255, 255)",
                          border: "1px solid rgb(223, 227, 255)",
                          borderRadius: "4px",
                          padding: "4px 5px",
                          boxShadow: "rgba(0, 0, 0, 0.06) 0px 0px 25px",
                          fontSize: "10px",
                          fontWeight: 700,
                          color: "rgb(64, 25, 109)",
                          marginLeft: "20px"
                        }}
                      >
                        Coming Soon
                      </span>
                    </a>
                  </li>
                  <li
                    style={{
                      boxSizing: "inherit",
                      WebkitFontSmoothing: "antialiased",
                      border: "0px",
                      font: "inherit",
                      verticalAlign: "baseline",
                      padding: "0px 26px",
                      margin: "0px"
                    }}
                  >
                    <a
                      className="menu-link"
                      style={{
                        boxSizing: "inherit",
                        WebkitFontSmoothing: "antialiased",
                        margin: "0px",
                        border: "0px",
                        font: "inherit",
                        verticalAlign: "baseline",
                        textDecoration: "none",
                        width: "100%",
                        justifyContent: "space-between",
                        borderRadius: "5px",
                        padding: "10px 0px",
                        fontWeight: 500,
                        color: "rgb(0, 0, 0)",
                        display: "inline-flex",
                        alignItems: "center",
                        fontSize: "0.875rem"
                      }}
                    >
                      <span
                        className="lead-menu--item disabled"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          padding: "0px",
                          border: "0px",
                          font: "inherit",
                          verticalAlign: "baseline",
                          opacity: 0.7,
                          pointerEvents: "none",
                          display: "flex",
                          alignItems: "center"
                        }}
                      >
                        <span
                          className="menu-link--icon"
                          style={{
                            boxSizing: "inherit",
                            WebkitFontSmoothing: "antialiased",
                            margin: "0px",
                            padding: "0px",
                            border: "0px",
                            font: "inherit",
                            verticalAlign: "baseline",
                            display: "flex",
                            marginRight: "15px"
                          }}
                        >
                          <svg
                            height="30"
                            width="30"
                            fill="none"
                            viewBox="0 0 30 30"
                            style={{
                              boxSizing: "inherit",
                              WebkitFontSmoothing: "antialiased",
                              width: "30px",
                              height: "30px"
                            }}
                          >
                            <circle
                              cx="15"
                              cy="15"
                              fill="#FCDC04"
                              opacity="0.3"
                              r="15"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            />
                            <mask
                              id="mask0_37774_3489_c"
                              height="16"
                              width="18"
                              maskUnits="userSpaceOnUse"
                              x="6"
                              y="7"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased",
                                maskType: "alpha"
                              }}
                            >
                              <rect
                                height="15.4023"
                                width="16.1724"
                                fill="#E94D1E"
                                rx="3"
                                x="6.91406"
                                y="7.29736"
                                style={{
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased"
                                }}
                              />
                            </mask>
                            <g
                              mask="url(#mask0_37774_3489_c)"
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <g
                                clipPath="url(#clip0_37774_3489_c)"
                                style={{
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased"
                                }}
                              >
                                <path
                                  d="M27.8101 6.48706H2.26953V23.5141H27.8101V6.48706Z"
                                  fill="black"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M27.8101 9.32495H2.26953V15.0006H27.8101V9.32495Z"
                                  fill="#FCDC04"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M27.8101 12.1628H2.26953V15.0007H27.8101V12.1628Z"
                                  fill="#D90000"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M27.8101 17.8384H2.26953V23.5141H27.8101V17.8384Z"
                                  fill="#FCDC04"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M27.8101 20.6763H2.26953V23.5141H27.8101V20.6763Z"
                                  fill="#D90000"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M15.0401 17.6539C16.5055 17.6539 17.6935 16.466 17.6935 15.0006C17.6935 13.5351 16.5055 12.3472 15.0401 12.3472C13.5747 12.3472 12.3867 13.5351 12.3867 15.0006C12.3867 16.466 13.5747 17.6539 15.0401 17.6539Z"
                                  fill="white"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M14.5744 12.9684L14.4023 12.6514C14.4688 12.585 14.5805 12.5337 14.7586 12.5337C14.7586 12.5458 14.7405 12.8809 14.7405 12.8809L14.5744 12.9684Z"
                                  fill="#D90000"
                                  stroke="black"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M14.7383 12.8839L14.7624 12.5337C14.7624 12.5337 15.1187 12.5126 15.3119 12.745C15.3149 12.742 15.1217 13.0167 15.1217 13.0167L14.7383 12.8839Z"
                                  fill="#FCDC04"
                                  stroke="black"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M15.1289 13.0136L15.304 12.7419C15.4217 12.8657 15.47 12.9533 15.4882 13.0861C15.4912 13.0891 15.2104 13.1555 15.2104 13.1525C15.2104 13.1495 15.1319 13.0167 15.1289 13.0136Z"
                                  fill="#D90000"
                                  stroke="black"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M14.6609 17.4999C14.6609 17.4999 14.99 17.1225 15.63 17.204C15.5334 17.047 15.2225 17.0651 15.2225 17.0651C15.2225 17.0651 15.1259 16.3315 15.2013 16.2953C15.2768 16.259 15.5968 16.2983 15.5968 16.2983C15.6391 16.2983 15.7115 16.1836 15.6542 16.1111C15.5968 16.0387 15.4278 15.7609 15.4972 15.7066C15.5666 15.6522 15.944 15.7368 15.944 15.7368L14.8783 14.3722C14.8783 14.3722 14.7696 13.8589 14.987 13.6114C15.2496 13.394 15.2225 13.1585 15.2134 13.1615C15.1772 12.923 14.8149 12.7509 14.5704 12.9713C14.4254 13.1464 14.522 13.2793 14.522 13.2793C14.522 13.2793 14.1417 13.3819 14.1266 13.4483C14.1115 13.5148 14.5553 13.4363 14.5553 13.4363L14.513 13.7412C14.513 13.7412 13.6496 14.5261 14.3107 15.2054C14.3168 15.2024 14.3319 15.1752 14.3319 15.1752C14.3319 15.1752 14.5643 15.462 14.8088 15.5254C15.0383 15.7609 15.0172 15.7247 15.0172 15.7247C15.0172 15.7247 15.0624 16.096 15.0202 16.1685C14.9628 16.1504 14.3771 16.1292 14.2896 16.1624C14.2111 16.1866 13.9092 16.1715 13.9847 16.6636C14.042 16.5308 14.0933 16.413 14.0933 16.413C14.0933 16.413 14.0843 16.5911 14.1568 16.6545C14.1447 16.4674 14.2262 16.3406 14.2262 16.3406C14.2262 16.3406 14.2413 16.5459 14.2866 16.576C14.3319 16.6062 14.3319 16.2439 14.5824 16.2741C14.833 16.3043 15.0142 16.2953 15.0142 16.2953C15.0142 16.2953 15.0987 17.0047 15.0715 17.0712C14.8903 17.0289 14.4587 17.0893 14.4315 17.198C14.6851 17.1829 14.8028 17.213 14.8028 17.213C14.8028 17.213 14.5975 17.3942 14.6609 17.4999Z"
                                  fill="black"
                                  stroke="black"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M14.761 13.6287C14.761 13.6287 14.1328 14.3212 14.4038 14.8511C14.4182 14.7772 14.412 14.7307 14.421 14.7338C14.4059 14.7247 14.4989 14.7975 14.4918 14.7833C14.4938 14.745 14.4635 14.6629 14.4635 14.6629C14.4918 14.67 14.5202 14.6771 14.5485 14.6842C14.532 14.6535 14.5154 14.6228 14.4989 14.5921C14.5391 14.5968 14.5792 14.6015 14.6194 14.6062C14.6194 14.6062 14.5769 14.4929 14.591 14.4929C14.6052 14.4929 14.6902 14.5 14.6902 14.5C14.5115 14.1793 14.6801 13.9131 14.761 13.6287Z"
                                  fill="#9CA69C"
                                  stroke="#9CA69C"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M14.9814 13.0347C14.9814 13.0347 15.0146 13.2732 14.8848 13.3426C14.8636 13.3577 14.7821 13.3849 14.7942 13.4332C14.8093 13.4996 14.8455 13.4875 14.8968 13.4754C15.0327 13.4513 15.1897 13.1615 14.9814 13.0347Z"
                                  fill="#9CA69C"
                                  stroke="#9CA69C"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M14.6995 13.2921C14.7277 13.2921 14.7506 13.2692 14.7506 13.241C14.7506 13.2128 14.7277 13.1899 14.6995 13.1899C14.6713 13.1899 14.6484 13.2128 14.6484 13.241C14.6484 13.2692 14.6713 13.2921 14.6995 13.2921Z"
                                  fill="white"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M14.5444 13.4395C14.5112 13.4666 14.3361 13.6478 14.5082 13.7142C14.6863 13.6659 14.638 13.6327 14.6772 13.5934C14.6783 13.5119 14.5887 13.4908 14.5444 13.4395Z"
                                  fill="#D90000"
                                  stroke="black"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M14.9284 15.1514C14.9194 15.1906 14.8801 15.3355 14.9345 15.4472C15.0854 15.3838 15.1549 15.4019 15.2062 15.4351C15.0824 15.3355 15.0341 15.2932 14.9284 15.1514Z"
                                  fill="#9CA69C"
                                  stroke="#9CA69C"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M15.1875 15.8364L15.1966 16.1746C15.1966 16.1746 15.3143 16.1957 15.3686 16.1746C15.423 16.1534 15.3656 15.9391 15.1875 15.8364Z"
                                  fill="white"
                                  stroke="white"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M16.0418 15.8788C16.0418 15.8788 15.8245 15.3535 15.269 15.2206C14.7135 15.0878 14.7859 14.4961 14.8312 14.4599C14.8554 14.4085 14.8735 14.33 15.0335 14.4055C15.1935 14.481 15.9301 14.8523 16.0358 14.8704C16.1415 14.8886 16.0509 15.8909 16.0418 15.8788Z"
                                  fill="#9CA69C"
                                  stroke="black"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M15.5118 15.2176C15.5027 15.2237 16.2545 15.6614 16.028 16.0388C16.2424 15.8969 16.173 15.6493 16.173 15.6493C16.173 15.6493 16.3481 16.1052 15.9224 16.3286C15.9677 16.3679 15.9979 16.3588 15.9979 16.3588L15.9254 16.4313C15.9254 16.4313 15.8922 16.4856 16.179 16.3467C16.1005 16.4101 16.0945 16.4554 16.0945 16.4554C16.0945 16.4554 16.1156 16.5158 16.3028 16.3528C16.1518 16.5158 16.1186 16.6003 16.1186 16.5973C16.5262 16.5611 17.4138 15.2357 15.8379 14.8433C15.9224 14.9308 15.9103 14.9188 15.9103 14.9188L15.5118 15.2176Z"
                                  fill="#D90000"
                                  stroke="black"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M15.547 15.0877C15.6497 15.1601 15.6859 15.1843 15.698 15.2205C15.6044 15.1994 15.5198 15.2054 15.5198 15.2054C15.5198 15.2054 15.3176 15.0122 15.2813 14.9971C15.2542 14.9971 15.0972 14.8975 15.0972 14.8975C15.0187 14.8582 14.9462 14.5865 15.2361 14.665C15.5349 14.8069 15.5772 14.819 15.5772 14.819C15.6959 14.8562 15.8147 14.8935 15.9334 14.9307C16.0019 15.0072 16.0703 15.0837 16.1387 15.1602C16.1387 15.1602 15.7734 14.979 15.7281 14.976C15.8278 15.0575 15.8851 15.1692 15.8851 15.1692C15.7694 15.136 15.6688 15.1058 15.547 15.0877Z"
                                  fill="white"
                                  stroke="black"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M14.125 13.4665C14.125 13.4665 14.4752 13.3819 14.5175 13.394L14.125 13.4665Z"
                                  fill="black"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                                <path
                                  d="M14.125 13.4665C14.125 13.4665 14.4752 13.3819 14.5175 13.394"
                                  stroke="white"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                              </g>
                            </g>
                            <defs
                              style={{
                                boxSizing: "inherit",
                                WebkitFontSmoothing: "antialiased"
                              }}
                            >
                              <clipPath
                                id="clip0_37774_3489_c"
                                style={{
                                  boxSizing: "inherit",
                                  WebkitFontSmoothing: "antialiased"
                                }}
                              >
                                <rect
                                  height="17.027"
                                  width="25.5405"
                                  fill="white"
                                  transform="translate(2.26953 6.48706)"
                                  style={{
                                    boxSizing: "inherit",
                                    WebkitFontSmoothing: "antialiased"
                                  }}
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                        Uganda
                      </span>
                      <span
                        className="coming-soon"
                        style={{
                          boxSizing: "inherit",
                          WebkitFontSmoothing: "antialiased",
                          margin: "0px",
                          font: "inherit",
                          verticalAlign: "baseline",
                          background: "rgb(255, 255, 255)",
                          border: "1px solid rgb(223, 227, 255)",
                          borderRadius: "4px",
                          padding: "4px 5px",
                          boxShadow: "rgba(0, 0, 0, 0.06) 0px 0px 25px",
                          fontSize: "10px",
                          fontWeight: 700,
                          color: "rgb(64, 25, 109)",
                          marginLeft: "20px"
                        }}
                      >
                        Coming Soon
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="mobile-toggle"
            style={{
              boxSizing: "inherit",
              WebkitFontSmoothing: "antialiased",
              margin: "0px",
              padding: "0px",
              border: "0px",
              font: "inherit",
              verticalAlign: "baseline",
              display: "none",
              width: "23px",
              height: "20px"
            }}
          >
            <div
              className="kuda-hamburger"
              style={{
                boxSizing: "inherit",
                WebkitFontSmoothing: "antialiased",
                margin: "0px",
                padding: "0px",
                border: "0px",
                font: "inherit",
                verticalAlign: "baseline",
                position: "relative",
                width: "23px",
                height: "auto",
                top: "3px",
                display: "none"
              }}
            >
              <div
                className="kuda-hamburger--inner"
                style={{
                  boxSizing: "inherit",
                  WebkitFontSmoothing: "antialiased",
                  margin: "0px",
                  padding: "0px",
                  border: "0px",
                  font: "inherit",
                  verticalAlign: "baseline",
                  transitionTimingFunction:
                    "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
                  transitionDuration: "75ms"
                }}
              />
            </div>
          </div>
        </div>
      </header>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  -webkit-font-smoothing: antialiased;
  margin: 0px;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  line-height: 1.15;
  text-size-adjust: 100%;
  scroll-behavior: smooth;
  font-family: Muli, sans-serif;
  color: #979797;
  tab-size: 4;
  font-size: 14px;
}

body {
  box-sizing: inherit;
  -webkit-font-smoothing: antialiased;
  padding: 0px;
  border: 0px;
  font: inherit;
  vertical-align: baseline;
  line-height: 1;
  margin: 0px;
  font-family: Muli, sans-serif;
  color: #979797;
  backface-visibility: hidden;
  font-size: 14px;
}
`
        }}
      />
    </>
  );
}
