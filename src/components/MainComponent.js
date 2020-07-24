import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeFirstName, changeSecondName } from '../store/actions'

class MainComponent extends React.Component {
  render() {
    const { firstName, secondName, changeFirstName, changeSecondName } = this.props;
    return (
      <div>
        <div>
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={(event) => {
              changeFirstName(event.target.value) // в dispatch передаем actions creator
            }}
          />
        </div>
        <div>
          <input
            type="text"
            value={secondName}
            placeholder="Second Name"
            onChange={(event) => {
              changeSecondName(event.target.value) // в dispatch передаем actions creator
            }}
          />
        </div>
        <div>
          {` ${firstName} ${secondName}`}
        </div>
      </div>
    )
  }
}

const putStateToProps = (state) => { //передает внутрь пропса компонента данные из state
  return {
    firstName: state.firstName,
    secondName: state.secondName
  };
}

const putActionsToProps = (dispatch) => { // используем эту функцию чтобы в пропсах  компоненты использовать changeFirstName
  // и changeSecondName без слова dispatch (привязываем функции к пропсам)
  return {
    changeFirstName: bindActionCreators(changeFirstName, dispatch), // передаем в аргументы actionCreator changeFirstName
    changeSecondName: bindActionCreators(changeSecondName, dispatch),
  }
}

export default connect(putStateToProps, putActionsToProps)(MainComponent);  // обертка для MainComponent которая применяет
//к MainComponent putStateToProps и передает внутрь пропса компонента данные из state