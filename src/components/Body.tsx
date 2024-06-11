import { useEffect, useState } from "react";
import bottomHeader from "../assets/img/bottom-header.jpg";
import powerTools from "../assets/img/image1.jpg";
import accessories from "../assets/img/image2.jpg";
import measuringTools from "../assets/img/image3.jpg";
import { DatePicker, Input, Button } from "antd";
import { Status } from "../contracts/Status";

const { TextArea } = Input;
const PRIMARY_COLOR = "#133f6c";

type Props = {
  isSaved?: boolean;
};

const Body: React.FC<Props> = ({ isSaved }) => {
  const [text1, setText1] = useState("");
  const [hideText1, setHideText1] = useState<Status>(Status.IMPLEMENTING);

  const [text2, setText2] = useState("");
  const [hideText2, setHideText2] = useState<Status>(Status.IMPLEMENTING);

  const [text3, setText3] = useState("");
  const [hideText3, setHideText3] = useState<Status>(Status.IMPLEMENTING);

  const [text4, setText4] = useState("");
  const [hideText4, setHideText4] = useState<Status>(Status.IMPLEMENTING);

  const submitText1 = () => {
    setHideText1(Status.EDITING);
  };

  const submitText2 = () => {
    setHideText2(Status.EDITING);
  };

  const submitText3 = () => {
    setHideText3(Status.EDITING);
  };

  const submitText4 = () => {
    setHideText4(Status.EDITING);
  };

  const editText1 = () => {
    setHideText1(Status.IMPLEMENTING);
  };

  const editText2 = () => {
    setHideText2(Status.IMPLEMENTING);
  };

  const editText3 = () => {
    setHideText3(Status.IMPLEMENTING);
  };

  const editText4 = () => {
    setHideText4(Status.IMPLEMENTING);
  };

  useEffect(() => {
    if (isSaved) {
      setHideText1(Status.SAVING);
      setHideText2(Status.SAVING);
      setHideText3(Status.SAVING);
      setHideText4(Status.SAVING);
    }
  }, [isSaved]);

  return (
    <div>
      <div>
        <img src={bottomHeader} alt="" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl text-primary">
          NEWSLETTER - BOSCH POWER TOOLS
        </h1>
        <h1 className="text-3xl text-primary font-bold">
          MARKETING ASSET PORTAL
        </h1>
        <div className="w-[31%] flex flex-col items-end">
          <hr className="w-full h-1 bg-primary"></hr>
          <DatePicker style={{ marginTop: "10px" }}></DatePicker>
        </div>
      </div>

      <div>
        <div className="flex flex-col mt-4 gap-5">
          <div>
            <h1 className="text-primary font-bold text-xl">What's New?</h1>
            {text1 && hideText1 !== Status.IMPLEMENTING && (
              <span className="text-primary">{text1}</span>
            )}
            {hideText1 === Status.IMPLEMENTING && (
              <Input
                value={text1}
                onChange={(e) => setText1(e.target.value)}
                style={{ width: "400px" }}
                placeholder="add your content here..."
              ></Input>
            )}
          </div>
          <div className="flex w-[50%]">
            {hideText1 === Status.EDITING && (
              <Button
                type="text"
                style={{ color: `${PRIMARY_COLOR}`, width: "13%" }}
                onClick={editText1}
              >
                Edit
              </Button>
            )}
            {hideText1 === Status.IMPLEMENTING && (
              <Button
                style={{ color: `${PRIMARY_COLOR}`, width: "13%" }}
                onClick={submitText1}
                type="text"
              >
                Submit
              </Button>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 mt-5">
          <div>
            <img src={powerTools} alt="" />
          </div>
          <div className="flex flex-col p-6">
            <h1 className="text-primary font-bold text-xl">POWER TOOLS</h1>
            {text2 && hideText2 !== Status.IMPLEMENTING && (
              <span
                dangerouslySetInnerHTML={{
                  __html: text2.replace(/\n/g, "<br/>"),
                }}
                className="text-primary"
              ></span>
            )}
            {hideText2 === Status.IMPLEMENTING && (
              <TextArea
                style={{ maxHeight: "270px" }}
                value={text2}
                onChange={(e) => setText2(e.target.value)}
                rows={4}
                placeholder="add your content here..."
              />
            )}
            <div className="flex justify-center items-center mt-5">
              {hideText2 === Status.EDITING && (
                <Button
                  type="text"
                  style={{ color: `${PRIMARY_COLOR}` }}
                  onClick={editText2}
                >
                  Edit
                </Button>
              )}
              {hideText2 === Status.IMPLEMENTING && (
                <Button
                  style={{ width: "13%", color: `${PRIMARY_COLOR}` }}
                  type="text"
                  onClick={submitText2}
                >
                  Submit
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col p-6">
            <h1 className="text-primary text-xl font-bold">ACCESSORIES</h1>
            {text3 && hideText3 !== Status.IMPLEMENTING && (
              <span
                dangerouslySetInnerHTML={{
                  __html: text3.replace(/\n/g, "<br/>"),
                }}
                className="text-primary"
              ></span>
            )}
            {hideText3 === Status.IMPLEMENTING && (
              <TextArea
                style={{ maxHeight: "270px" }}
                value={text3}
                onChange={(e) => setText3(e.target.value)}
                rows={4}
                placeholder="add your content here..."
              />
            )}
            <div className="flex justify-center items-center mt-5">
              {hideText3 === Status.EDITING && (
                <Button
                  type="text"
                  style={{ color: `${PRIMARY_COLOR}` }}
                  onClick={editText3}
                >
                  Edit
                </Button>
              )}
              {hideText3 === Status.IMPLEMENTING && (
                <Button
                  onClick={submitText3}
                  style={{ width: "13%", color: `${PRIMARY_COLOR}` }}
                  type="text"
                >
                  Submit
                </Button>
              )}
            </div>
          </div>
          <div>
            <img src={accessories} alt="" />
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2">
          <div>
            <img src={measuringTools} alt="" />
          </div>
          <div className="flex flex-col p-6">
            <h1 className="text-primary font-bold text-xl">MEASURING TOOLS</h1>
            {text4 && hideText4 !== Status.IMPLEMENTING && (
              <span
                dangerouslySetInnerHTML={{
                  __html: text4.replace(/\n/g, "<br/>"),
                }}
                className="text-primary"
              ></span>
            )}
            {hideText4 === Status.IMPLEMENTING && (
              <TextArea
                style={{ maxHeight: "270px" }}
                value={text4}
                onChange={(e) => setText4(e.target.value)}
                rows={4}
                placeholder="add your content here..."
              />
            )}
            <div className="flex justify-center items-center mt-5">
              {hideText4 === Status.EDITING && (
                <Button
                  type="text"
                  style={{ color: `${PRIMARY_COLOR}` }}
                  onClick={editText4}
                >
                  Edit
                </Button>
              )}
              {hideText4 === Status.IMPLEMENTING && (
                <Button
                  onClick={submitText4}
                  style={{ width: "13%", color: `${PRIMARY_COLOR}` }}
                  type="text"
                >
                  Submit
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center pt-3 pb-3">
        <div className="w-[31%] ">
          <hr className="w-full h-1 bg-primary"></hr>
        </div>
      </div>
    </div>
  );
};

export default Body;
