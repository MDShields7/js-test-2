import React from 'react';
import { mount, shallow } from 'enzyme';
import ToDoList2 from './ToDoList2';
 
describe('ToDoList component', () => {


describe('when provided with an array of tasks', () => {
    it('passes them to the Task components', () => {
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
      toDoList2Instance.find('Task').forEach(taskInstance => {
        const taskProps = taskInstance.props();
        const matchingTask = tasks.find(task => task.id === taskProps.id);
        expect(taskProps.name).toBe(matchingTask.name);
      })
    })

});

describe('when provided with an array of tasks (part 3)', () => {
it('passes them to the Task components (testing children with mount)', () => {
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
    const toDoList2Instance = mount(
        <ToDoList2 tasks={tasks}/>
        );
    toDoList2Instance.find('Task').forEach(taskInstance => {
        const taskProps = taskInstance.props();
        const matchingTask = tasks.find(task => task.id === taskProps.id);
        const listItem = taskInstance.first('li');
        expect(listItem.text()).toBe(matchingTask.name);
    })
    })
  });
});
