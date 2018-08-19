import React, { Component, Fragment } from 'react';
import './App.css';
// import {Header, Footer} from './Layouts';
import { Header, Footer } from './components/layouts/index'
import Exercises from './components/exercises';
import { muscles, exercises } from './store';

class App extends Component {
  state = {
    exercises,
    exercise: {},
    category: ''
  }

  getExercisesByMuscles() {
    // Object.entries converts the objects to arrays (so we can iterate)
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      // pull off muscles attribute from exercise
      // muscles = exercise.muscles
      const { muscles } = exercise;
      // console.log(exercises);
      // if muscle exists, add to muscle array. else create entry
      exercises[muscles] =
        exercises[muscles] ? [...exercises[muscles], exercise] : [exercise];

      return exercises;
    }, {}));
  }

  handleCategorySelect = category => {
    this.setState({
      category
    })
  }


  handleExerciseSelect = id => {
    // same as: this.setState((prevState) => {
    this.setState(({exercises}) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  }

  handleExerciseCreate = exercise => {
    this.setState(({ exercises}) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    })
  
  )
  }

  render() {
    // console.log(this.getExercisesByMuscles())
    const exercises = this.getExercisesByMuscles(),
      { category, exercise } = this.state;

    return (
      <Fragment>
        <Header 
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        ></Header>
        <Exercises
          exercise={exercise}
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelect}
        ></Exercises>
        <Footer
          muscles={muscles}
          category={category}
          onSelect={this.handleCategorySelect}></Footer>
      </Fragment>

    );
  }
}

export default App;
