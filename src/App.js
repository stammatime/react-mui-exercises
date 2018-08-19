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
    // category: ''
  }

  getExercisesByMuscles() {

    // get all the cat titles so they are not deleted if all exercise of that type are deleted
    const intitExercises = muscles.reduce((exercises, category) => ({
      ...exercises,
      [category]: []
    }), {});

    console.log(muscles, intitExercises);


    // Object.entries converts the objects to arrays (so we can iterate)
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      // pull off muscles attribute from exercise
      // muscles = exercise.muscles
      const { muscles } = exercise;
      // console.log(exercises);
      // if muscle exists, add to muscle array. else create entry
      exercises[muscles] =
        exercises[muscles] =  [...exercises[muscles], exercise];

      return exercises;
    }, intitExercises));
  }

  handleCategorySelect = category => {
    this.setState({
      category
    })
  }


  handleExerciseSelect = id => {
    // same as: this.setState((prevState) => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: false
    }));
  }

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    })
    )
  }

  handleExerciseDelete = id => {
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: false,
      exercise: {}
    }));
  }

  handleSelectEdit = id => 
    this.setState({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    })

    handleExerciseEdit = exercise => {
      //find all exercises that don't have the id of selected exercise, then update final

      console.log(exercise) 
      this.setState(({exercises}) => ({
        exercises: [
         ...exercises.filter(ex => ex.id !== exercise.id),
         exercise],
         //used to change selected state as well
         exercise
      }))
    }
  

  render() {
    // console.log(this.getExercisesByMuscles())
    const exercises = this.getExercisesByMuscles(),
      { category, exercise, editMode } = this.state;

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
          editMode={editMode}
          onSelect={this.handleExerciseSelect}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleSelectEdit}
          muscles={muscles}
          onEdit={this.handleExerciseEdit}
          
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
