import React from 'react';

export default function LandingMain(props) {
  return (
    <main>
      <div>
        <h2>Need a Truck?</h2>
        <p>Log in to find a truck and driver to help you with your move</p>
        {/*TODO make button its own component */}
        <button type="button">Find a Truck</button>
      </div>
      <div>
        <h2>Have a Truck?</h2>
        <p>Looking for some extra chash? Turn your truck into capital and help a out a neighbor!</p>
        {/*TODO make button its own component */}
        <button type="button">Find a Truck</button>
      </div>
    </main>
  )
}
