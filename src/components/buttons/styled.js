import styled from 'styled-components';

const SwitchWrapper = styled.button`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 20px;
  border-radius: 15px;
  background-color: #ccc;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: none;
  
&.on {
  background-color: #242526;
}

&.off .slider {
  left: 1px;
}

.slider {
  position: absolute;
  top: 0;
  left: 25px;
  width: 19px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: left 0.3s ease;
}
`;

export {
  SwitchWrapper,
};
