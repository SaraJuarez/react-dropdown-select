import React, { Component } from 'react';
import styled from '@emotion/styled';
import { valueExistInSelected } from '../util';
import * as PropTypes from 'prop-types';

const handlePlaceHolder = (props, state) => {
  const noValues = state.values && state.values.length === 0;
  const hasValues = state.values && state.values.length > 0;

  if (hasValues && props.addPlaceholder && props.searchable) {
    return props.addPlaceholder;
  }

  if (noValues) {
    return props.placeholder;
  }

  if (hasValues && !props.searchable) {
    return '';
  }

  return '';
};

class Input extends Component {
  input = React.createRef();

  componentDidUpdate(prevProps) {
    if (
      this.props.state.dropdown || (prevProps.state.dropdown !== this.props.state.dropdown && this.props.state.dropdown) ||
      this.props.props.autoFocus
    ) {
      this.input.current.focus();
    }

    if (prevProps.state.dropdown !== this.props.state.dropdown && !this.props.state.dropdown) {
      this.input.current.blur();
    }
  }

  onBlur = () => {
    if (!this.props.state.dropdown) {
      return this.input.current.blur();
    }

    return this.input.current.focus();
  };

  handleKeyPress = (event) => {
    const { props, state, methods } = this.props;

    return (
      props.create &&
      event.key === 'Enter' &&
      !valueExistInSelected(state.search, state.values) &&
      state.search &&
      state.cursor === null &&
      methods.createNew(state.search)
    );
  };

  render() {
    const { props, state, methods } = this.props;

    if (props.inputRenderer) {
      return props.inputRenderer({ props, state, methods });
    }

    return (
      <InputComponent
        ref={this.input}
        tabIndex="-1"
        className="react-dropdown-select-input"
        size={methods.getInputSize()}
        value={state.search}
        readOnly={!props.searchable}
        onClick={() => methods.dropDown('open')}
        onKeyPress={this.handleKeyPress}
        onChange={methods.setSearch}
        onBlur={this.onBlur}
        placeholder={handlePlaceHolder(props, state)}
      />
    );
  }
}

Input.propTypes = {
  props: PropTypes.object,
  state: PropTypes.object,
  methods: PropTypes.object
};

const InputComponent = styled.input`
  line-height: inherit;
  width: calc(${({ size }) => `${size}ch`} + 5px);
  border: none;
  margin-left: 5px;
  background: transparent;
  font-size: smaller;
  ${({ readOnly }) => readOnly && 'cursor: pointer;'}
  :focus {
    outline: none;
  }
`;

export default Input;
