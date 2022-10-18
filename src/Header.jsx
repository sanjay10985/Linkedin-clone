import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
          alt=""
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://lh3.googleusercontent.com/Z5YKalmUqmSoTN8ruwSA1OTSFquCOO4ey2t_1PxcdT5m2fbxCkFEypIOv5GpyahqBreOD6DaNqg8E7PMFKo7j5DcNdyTVNXzmzEEVvLjwWsuivO0BycGjkwyQBXzF-BduE0pyzcSzNKpig5XSaAnizJF2N7uqZrzQf4ZolWm27PDqB0wDZGcHTZUC9TxO_NRFy8T-pL3Pl3ENrXCggUGc1NEqf_mAOsbopgY7h27rcCuMIXB3znZxazTR4HqU3hzqFQuqOvfSJWncv_A77A7nGlQNpuvfVlgm6a3XscJizZk7cbnsdnWt321uN7LKyQ_duw_rEpFkjaihtHtuosxGtXCc09KCCWUXGICVQPLbvesDbo78kARTwwwOFGrxGbbcIH9hVz-G2_ouyXsNhJ0Tf50B8is-BLzEBtfjAf9VIGcnqVg6UqOPPnUfKLlkOg0Uabt8UqK1CDOYZocwY-_7r_wc_1beXywWHiHVf3C2OKUzgSrO2eT9I912SIS3-I-EOlTsb1yv_0RyZWE0ErNeGbNwto36pY-f_mnZgzP3ESMjRGR-N8LkL9y6SFqQ8VIk5upomtsByI2Iaxg_Gtn0bYZ62VYBiDQPEqVPBHCai29q7SS73TLIeTdAYTF2LsG_vtrvPlVDAmJ0Nxsz42otUoxI2gSkMPUnjoPSI2raGgpuj_J1xevnmFXy5Iakf91tG3h8Co0oQ2paxb-WH9-Qi4ANqTvo-ShDaFli2zP6q1rWo1uEYcd4cDTt6H8s3yJzR29qGN0IJAn1HLYD5u85dAx8nRMR4K1153tgc1z-W9HGbHujzdjPYxCnE5M4ylbqxSrtYNIW8ryjAmo19y_pPUfdhmfKNjxuHaP8AjdF5O5U8OLTbDR3NShySt2ltGDfnH8-WmWv2TNZWEV5PPzaIv0tnP5YOPX0cwQOB-ln_CAlPB1rAC_XfZzPFr6_OQCxlG2X_b83J4ZqT0PTo-Q0uuFUebhNC0qdKuDjTs3qTaELApnYOawwpgNWmESiuipOY5SHby6pIyVYlTktI1EW9bZzdahJTx2zWFxvEq9qh1XxLw_Hx0H0F19VUVUcinZELWPq_4bB72OeL9P_7lUSqw4h303QFUSEvR6pWlVHWqjKwEEYRGz6X1FD1HAjRk=w637-h849-no?authuser=0"
          title="me"
        />
      </div>
    </div>
  );
};

export default Header;
