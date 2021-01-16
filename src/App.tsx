import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';
import { IonAlert, IonButton, IonContent, setupConfig } from '@ionic/react';

import Intro from "./pages/Intro/Intro"
import Step1 from "./pages/Intro/Step1"
import Step2 from "./pages/Intro/Step2"
import Step3 from "./pages/Intro/Step3"
import Step4 from "./pages/Intro/Step4"
import Step5 from "./pages/Intro/Step5"
import Analyzing from "./pages/Intro/Analyzing"
import Success from "./pages/Intro/Success"

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  // Link
} from "react-router-dom";

setupConfig({
  rippleEffect: false,
  mode: 'ios'
});

const AlertExample: React.FC = () => {
  return (
    <RecoilRoot>
      <Router>
        <div className="root-inner">
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav> */}

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/intro/step/1" exact> <Step1 /> </Route>
            <Route path="/intro/step/2" exact> <Step2 /> </Route>
            <Route path="/intro/step/3" exact> <Step3 /> </Route>
            <Route path="/intro/step/4" exact> <Step4 /> </Route>
            <Route path="/intro/step/5" exact> <Step5 /> </Route>
            <Route path="/intro/step/analyzing" exact> <Analyzing /> </Route>
            <Route path="/intro/step/success" exact> <Success /> </Route>
            <Route path="/intro" exact> <Intro /> </Route>
            <Redirect from="/" to="/intro" />
            <Route path="/about"> <About /> </Route>
            <Route path="/users"> <Users /> </Route>
            <Route path="/"> <Home /> </Route>
          </Switch>
        </div>
      </Router>
    </RecoilRoot>
  )
}

function Home() {
  return <h2>404</h2>;
}

function About() {
  const [showAlert1, setShowAlert1] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [showAlert3, setShowAlert3] = useState(false);
  const [showAlert4, setShowAlert4] = useState(false);
  const [showAlert5, setShowAlert5] = useState(false);
  const [showAlert6, setShowAlert6] = useState(false);
  return (
    <IonContent>
      <button>hahahaha</button>
      <IonButton onClick={() => setShowAlert1(true)} expand="block">Show Alert 1</IonButton>
      <IonButton onClick={() => setShowAlert2(true)} expand="block">Show Alert 2</IonButton>
      <IonButton onClick={() => setShowAlert3(true)} expand="block">Show Alert 3</IonButton>
      <IonButton onClick={() => setShowAlert4(true)} expand="block">Show Alert 4</IonButton>
      <IonButton onClick={() => setShowAlert5(true)} expand="block">Show Alert 5</IonButton>
      <IonButton onClick={() => setShowAlert6(true)} expand="block">Show Alert 6</IonButton>
      <IonAlert
        isOpen={showAlert1}
        onDidDismiss={() => setShowAlert1(false)}
        cssClass='my-custom-class'
        header={'Alert'}
        subHeader={'Subtitle'}
        message={'This is an alert message.'}
        buttons={['OK']}
      />

      <IonAlert
        isOpen={showAlert2}
        onDidDismiss={() => setShowAlert2(false)}
        cssClass='my-custom-class'
        header={'Alert'}
        subHeader={'Subtitle'}
        message={'This is an alert message.'}
        buttons={['Cancel', 'Open Modal', 'Delete']}
      />

      <IonAlert
        isOpen={showAlert3}
        onDidDismiss={() => setShowAlert3(false)}
        cssClass='my-custom-class'
        header={'Confirm!'}
        message={'Message <strong>text</strong>!!!'}
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: blah => {
              console.log('Confirm Cancel: blah');
            }
          },
          {
            text: 'Okay',
            handler: () => {
              console.log('Confirm Okay');
            }
          }
        ]}
      />

      <IonAlert
        isOpen={showAlert4}
        onDidDismiss={() => setShowAlert4(false)}
        cssClass='my-custom-class'
        header={'Prompt!'}
        inputs={[
          {
            name: 'name1',
            type: 'text',
            placeholder: 'Placeholder 1'
          },
          {
            name: 'name2',
            type: 'text',
            id: 'name2-id',
            value: 'hello',
            placeholder: 'Placeholder 2'
          },
          {
            name: 'name3',
            value: 'http://ionicframework.com',
            type: 'url',
            placeholder: 'Favorite site ever'
          },
          // input date with min & max
          {
            name: 'name4',
            type: 'date',
            min: '2017-03-01',
            max: '2018-01-12'
          },
          // input date without min nor max
          {
            name: 'name5',
            type: 'date'
          },
          {
            name: 'name6',
            type: 'number',
            min: -5,
            max: 10
          },
          {
            name: 'name7',
            type: 'number'
          },
          {
            name: 'name8',
            type: 'password',
            placeholder: 'Advanced Attributes',
            cssClass: 'specialClass',
            attributes: {
              maxlength: 4,
              inputmode: 'decimal'
            }
          }
        ]}
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          },
          {
            text: 'Ok',
            handler: () => {
              console.log('Confirm Ok');
            }
          }
        ]}
      />

      <IonAlert
        isOpen={showAlert5}
        onDidDismiss={() => setShowAlert5(false)}
        cssClass='my-custom-class'
        header={'Radio'}
        inputs={[
          {
            name: 'radio1',
            type: 'radio',
            label: 'Radio 1',
            value: 'value1',
            checked: true
          },
          {
            name: 'radio2',
            type: 'radio',
            label: 'Radio 2',
            value: 'value2'
          },
          {
            name: 'radio3',
            type: 'radio',
            label: 'Radio 3',
            value: 'value3'
          },
          {
            name: 'radio4',
            type: 'radio',
            label: 'Radio 4',
            value: 'value4'
          },
          {
            name: 'radio5',
            type: 'radio',
            label: 'Radio 5',
            value: 'value5'
          },
          {
            name: 'radio6',
            type: 'radio',
            label: 'Radio 6',
            value: 'value6'
          }
        ]}
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          },
          {
            text: 'Ok',
            handler: () => {
              console.log('Confirm Ok');
            }
          }
        ]}
      />

      <IonAlert
        isOpen={showAlert6}
        onDidDismiss={() => setShowAlert6(false)}
        cssClass='my-custom-class'
        header={'Checkbox'}
        inputs={[
          {
            name: 'checkbox1',
            type: 'checkbox',
            label: 'Checkbox 1',
            value: 'value1',
            checked: true
          },
          {
            name: 'checkbox2',
            type: 'checkbox',
            label: 'Checkbox 2',
            value: 'value2'
          },
          {
            name: 'checkbox3',
            type: 'checkbox',
            label: 'Checkbox 3',
            value: 'value3'
          },
          {
            name: 'checkbox4',
            type: 'checkbox',
            label: 'Checkbox 4',
            value: 'value4'
          },
          {
            name: 'checkbox5',
            type: 'checkbox',
            label: 'Checkbox 5',
            value: 'value5'
          },
          {
            name: 'checkbox6',
            type: 'checkbox',
            label: 'Checkbox 6',
            value: 'value6'
          }
        ]}
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          },
          {
            text: 'Ok',
            handler: () => {
              console.log('Confirm Ok');
            }
          }
        ]}
      />
    </IonContent>
  )
}

function Users() {
  return <h2>Users</h2>;
}


export default AlertExample;
