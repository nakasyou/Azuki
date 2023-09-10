import { component$, useSignal } from '@builder.io/qwik'
import * as sdk from "matrix-js-sdk";

export const App = component$(() => {
  return (
    <>
      <div>Azuki</div>
      <p>Azuki is distributed super app.</p>
      <button onClick$={() => {
        alert('Clicked!')
      }}>xxx</button>
      <button onClick$={() => alert(sdk)}>click me!</button>
    </>
  )
})
