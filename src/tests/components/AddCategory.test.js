import { shallow } from 'enzyme';
import React from 'react';
import AddCategory from '../../components/AddCategory';


describe('pruebas en componente <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(< AddCategory setCategories={setCategories}/> );
    })

    test('debe mostrar correctamente <AddCategory /> ', () => {
        expect(wrapper).toMatchSnapshot();
    })
   

    test('debe simular el cahnge de la caja de texto <AddCategory />  ', () => {
        const input = wrapper.find('input');
        const value = 'Hola';

        input.simulate('change', { target: { value } });
    })

    test('no debe ejecutar postear la información con submit ', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect( setCategories ).not.toHaveBeenCalled();
    })

    test('debe de llamar el setCategories y limpiar la caja de texto ', () => {
        const value = 'Naruto';
        const input = wrapper.find('input');

        input.simulate('change', { target: { value } });
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        //Evalua que se llame la funcion una vez
        expect( setCategories ).toHaveBeenCalledTimes(1);

        //Evalua que el ultimo llamdao se realizo con una función
        expect( setCategories ).toHaveBeenCalledWith(expect.any(Function));
        expect( input.prop('value') ).toBe('');

    })
    
    
})