import { render, screen } from '@testing-library/react';
import { create } from 'react-test-renderer'
import Login from '../../UI/Login/Login';


//This works cause the Login component had not observable state
describe('Login correct render', () => {
    test('Login render', () => {
        let tree = create(<Login />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})
