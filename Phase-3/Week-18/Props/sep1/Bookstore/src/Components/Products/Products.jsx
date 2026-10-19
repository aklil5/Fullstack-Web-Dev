import { Component } from 'react'
import './Products.css'
import Product from '../Product/Product'
import { Books } from '../../assets/Books'

export default class Main extends Component {
  render() {
    
    return (
        <>
            
            <div className="container">
                {/* using descturctuing */}
                {/* <Product color="green-header" title="The Let Them Theory" headerClass="green-header" img="https://m.media-amazon.com/images/I/51wzfAWW1bL._SY445_SX342_.jpg" imgAlt="The Let Them Theory" price="$12.99" description="If you've ever felt stuck, overwhelmed, or frustrated with where you are, the problem isn't you. The problem is the power you give to other people. Two simple words—Let Them—will set you free. Free from the opinions, drama, and judgments of others. Free from the exhausting cycle of trying to manage everything and everyone around you." text="View only"/>

                <Product color="orange-header" title="Coding Interview Patterns" headerClass="orange-header" img="https://m.media-amazon.com/images/I/51wzfAWW1bL._SY445_SX342_.jpg" imgAlt="Coding Interview Patterns" price="$38.00" description="Coding interviews are tough, and they're only getting tougher, typically demanding months of preparation. What we all want is a way to master algorithms and pattern recognition efficiently."/>

                <Product color="grey-header" title="Atomic Habits" headerClass="grey-header" img="https://m.media-amazon.com/images/I/51wzfAWW1bL._SY445_SX342_.jpg" imgAlt="Atomic Habits" price="$13.99" description="No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies."/>

                <Product color="red-header" title="Left To Tell" headerClass="gold-header" img="https://m.media-amazon.com/images/I/51wzfAWW1bL._SY445_SX342_.jpg" imgAlt="Left To Tell" price="$14.50" description="Immaculée Ilibagiza shares her terrifying and inspiring story of surviving the 1994 Rwandan genocide, offering lessons on faith, forgiveness, and unconditional love."/>

                <Product color="gold-header" title="ኢቫንጋዲ Evangadi" headerClass="black-header" img="https://m.media-amazon.com/images/I/51wzfAWW1bL._SY445_SX342_.jpg" imgAlt="ኢቫንጋዲ Evangadi" price="$15.00" description="An inspiring exploration of cultural narrative, community connection, and personal transformation through shared stories and educational growth."/>

                <Product color="black-header" title="The Battle of Adwa" headerClass="red-header" img="https://m.media-amazon.com/images/I/51wzfAWW1bL._SY445_SX342_.jpg" imgAlt="The Battle of Adwa" price="$20.00" description="An insightful historical narrative detailing the historic victory of the Battle of Adwa, celebrating African resistance, sovereignty, and unity."/> */}

                {/* using .map method */}
                {/* {Books.map((item, i) => {
                    return(
                        <Product 
                            key={i}
                            color={item.color}
                            title={item.title}
                            img={item.img}
                            imgAlt={item.imgAlt}
                            price={item.price}
                            description={item.description}
                        />
                    )
                })} */}


                {/* to make the program workeven if theres no data use [[?.map]] OPTIONAL CHAIN */}
                    {/* Eg. if Books is null (write after render() ) */}
                {Books?.map(({color, title, img, imgAlt, price, description}, i) => {
                    return (
                        <Product 
                            key={i}
                            color={color}
                            title={title}
                            img={img}
                            imgAlt={imgAlt}
                            price={price}
                            description={description}
                        />
                    )
                })}


            </div>

            
            
      </>
    )
  }
}
