import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer';
import { AppContextProvider } from '../../Utilities/contextProvider';

import Header from '../../UI/Header/Header';


// TEST WITH SNAPSHOT COMPARISON reference to https://reactgo.com/react-testing-tutorial-jest/

describe('Header correct render from snapshot', () => {
    test('Header render in login screen', () => {
        const tree = create(<Header/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

//TEST WITH CUSTOMRENDER AND CONTEXTPROVIDER

const customRender = (ui, {providerProps, ...renderOptions}) => {
    return render(
      <AppContextProvider {...providerProps}>{ui}</AppContextProvider>,
      renderOptions,
    )
  }

describe('Header custom render with customRender function below', () => {
    test('Header render without availability selection and logout button', () => {
        const rootstore = {
            stateUIStore :
            {
                logged: false,
            }
    }
        customRender(<Header/>, {rootstore})
        expect(document.getElementById("header-wrapper")).toBeInTheDocument()
    })

})

