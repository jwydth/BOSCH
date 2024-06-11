import React, { useState } from "react";
import boschLogo from "../assets/bosch-logo.png";
import { Button } from "antd";

type Props = {
  onSave: () => void;
};

const Header: React.FC<Props> = ({ onSave }) => {
  const [visibility, setVisibility] = useState(false);

  const handleSave = () => {
    setVisibility(true);
    onSave();
  };

  return (
    <div className="flex w-full bg-primary p-3 pl-8 sticky top-0 z-10 justify-between">
      <img src={boschLogo} alt="" />
      {!visibility && <Button onClick={handleSave}>Save</Button>}
    </div>
  );
};

export default Header;
