import React from 'react';
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Fish from './Fish'
import sampleFishes from '../sample-fishes'

class App extends React.Component {

     state = {
          fishes: {},
          order: {},
     }
     addFish = (fish) => {
          //take a copy of the existing state
          const fishes = { ...this.state.fishes }
          //add new fish to that fishes variable
          fishes[`fish${Date.now()}`] = fish;
          //set the new fishes object to state
          this.setState({
               fishes: fishes
          })
     }
     loadSampleFishes = () => {
          this.setState({
               fishes: sampleFishes
          })
     }

     addToOrder = (key) => {
          //take a copy of state
          const order = { ...this.state.order }
          //either add to the order, or update our current quantity
          order[key] = order[key] + 1 || 1;
          //call setState to update our state object
          this.setState({ order })
     }

     render() {
          return (
               <div className="catch-of-the-day">
                   <div className='menu'>
                        <Header tagline='Fresh Seafood Market'/>
                        <ul className='fishes'>
                             {
                                  Object.keys(this.state.fishes).map((key) => {
                                   return <Fish index={key} key={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>
                                  })
                             }
                        </ul>
                   </div>
                   <Order />
                   <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
               </div>
          )
     }
}

export default App;