import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import QuestionForm from '../Components/QuestionForm/QuestionForm';
import Nav from '../Components/Nav/Nav';
import '@blueprintjs/core/dist/blueprint.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('QuestionForm', module)
  .add('default', () => (
    <QuestionForm />
  ))

storiesOf('Nav', module)
  .add('default', () => (
    <Nav />
  ))