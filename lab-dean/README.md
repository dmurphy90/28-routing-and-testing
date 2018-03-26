# 28 Routing and Testing

## Installation

To begin using this app, fork then clone the repository down to your machine. After you have cloned the repository navigate to the folder ```lab-dean```. In your terminal type ```npm install``` to install all package dependencies for the app. In your temrinal window when in the ```lab-dean``` directory type ```npm run watch``` and in your browser go to ```http://localhost:8080``` to run the app.

## Functionality

Using the two input boxes you can enter in the subreddit of your choosing, and the amount of posts you would like to see. It then makes an HTTP request to reddit and displays the current top posts on the subreddit you specified showing the amount you requested. 

## Tests

The tests being run are on the state properties of the objects. Here's the examples.

```
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
require('jest');

Enzyme.configure({adapter: new Adapter()});
import Dashboard from '../component/dashboard/index';
import NoteCreateForm from '../component/note-create-form/index';

describe('Dashboard', () => {
  test('Testing initial state', () => {
    let mountedDashboard = Enzyme.mount(<Dashboard />);
    expect(mountedDashboard.state('notes')).toEqual([]);
  });
});

describe('NoteCreateForm', () => {
  test('Testing initial state', () => {
    let mountedNoteCreateForm = Enzyme.mount(<NoteCreateForm />);
    expect(mountedNoteCreateForm.state('completed')).toEqual(false);
    expect(mountedNoteCreateForm.state('content')).toEqual('');
    expect(mountedNoteCreateForm.state('title')).toEqual('');
  });
});
```