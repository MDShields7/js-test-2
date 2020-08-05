import React from 'react';
import { shallow } from 'enzyme';
import ToDoList2 from './ToDoList2';
 
describe('ToDoList component', () => {
  describe('when provided with an array of tasks', () => {
    it('should render correctly', () => {
      const tasks = [
        {
          id: 0,
          name: 'Wash the dishes'
        },
        {
          id: 1,
          name: 'Make the bed'
        }
      ];
      const toDoList2Instance = shallow(
        <ToDoList2 tasks={tasks}/>
      );
      expect(toDoList2Instance).toMatchSnapshot();
    });
  });
});
