import React from "react";
import Button from "@material-ui/core/Button";
import "./estimate.css";

export interface Props {
  handleViewChange: (value: any) => void;
  setCost: (value: any) => void;
  cost: number;
}

const Estimate: React.FC<Props> = (props) => {
  const handleReturnClick = () => {
    props.handleViewChange(false);
    props.setCost(0);
  };
  return (
    <div className='estimate'>
      <div className='cost'>{`$ ${props.cost}`}</div>
      <div className='paragraph'>
        Onsectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </div>
      <Button
        type='submit'
        variant='outlined'
        color='primary'
        className='form-button'
        onClick={handleReturnClick}
      >
        Return
      </Button>
    </div>
  );
};

export default Estimate;
