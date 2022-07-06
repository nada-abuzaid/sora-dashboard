import { Input, Form } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

const FloatLabel = (props) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');

  const onChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };
  const { label, name, type, required } = props;

  let labelClass =
    focus || (value && value.length !== 0) ? 'label label-float' : 'label';

  return (
    <FloatInputWrapper
      className='float-label'
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      <Form.Item
        name={name}
        rules={[
          {
            required,
            message: 'This field is mandatory',
          },
        ]}
      >
        <Input
          onChange={onChange}
          type={type}
          ref={(ref) => {
            if (ref?.input?.value?.length > 0) {
              setValue(ref.input.value);
            }
          }}
        />
      </Form.Item>
      <label className={labelClass}>{label}</label>
    </FloatInputWrapper>
  );
};

const FloatInputWrapper = styled.div`
  position: relative;
  width: 100%;
  font-family: NunitoSans-SemiBold;
  margin-top: 40px;
  .label {
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 16px;
    top: 16px;
    transition: 0.2s ease all;
  }

  .label-float {
    top: -7px;
    font-size: 14px;
    background-color: white;
    padding: 0px 5px;
  }
  .ant-input {
    padding: 15px 20px;
    border-radius: 6px;
    font-family: NunitoSans-SemiBold;
    font-size: 18px;
    border: 1px solid #c6c6c6;
    outline: none;
    &:focus {
      outline: none;
    }
    color: ${({ theme: { colors } }) => colors.primaryDark};
    ::placeholder {
      color: ${({ theme: { colors } }) => colors.primaryDark};
    }
  }
  .ant-input:focus {
    border-color: ${({ theme: { colors } }) => colors.primaryDark};
    box-shadow: 0 0 0 2px ${({ theme: { colors } }) => `${colors.primary}33`};
  }
  .ant-input:hover {
    border-color: ${({ theme: { colors } }) => colors.primaryDark};
  }
`;

export default FloatLabel;
