import React, { useState } from "react";
import { styled } from "styled-components";

const MYImages = ({ imgs = [{ url: "" }] }) => {
  const [mainimage, setmainimage] = useState(imgs[0]);
  return (
    <Wrapper>
      <div className="box-wrapper">
        <div className="Main-images-box">
          {imgs && (
            <img
              src={mainimage.url}
              alt={mainimage.filename}
              className="main-image"
            />
          )}
        </div>

        {/* 2nd box */}

        <div className="Row-images-column-box">
          {imgs &&
            imgs.map((currElem, index) => {
              return (
                <img
                  src={currElem.url}
                  alt={currElem.filename}
                  className="column-images"
                  onClick={() => {
                    setmainimage(currElem);
                  }}
                />
              );
            })}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .box-wrapper {
    display: flex;
    flex-direction: column;
    padding: 8rem;
    gap: 3rem;
  }
  .Main-images-box {
    display: flex;
    justify-content: center;
  }
  .main-image {
    height: 45rem;
    width: 64rem;
  }
  .Row-images-column-box {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .Row-images-column-box .column-images {
    height: 17rem;
    width: 15.3rem;
  }
`;
export default MYImages;
