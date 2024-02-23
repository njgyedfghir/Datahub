import React from 'react'
import SideCard from './sidecard';

const Sidecarddata = () => {
    const cardData=[{
        type: 'Economy',
        title: 'Card 1',
        content: 'The IDH is your one-stop shop for all the information and resources you need to make informed investment decisions in Ethiopia, keeping you updated with the latest changes and ensuring compliance every step of the way.',
        buttonText: 'Click me',
        imageUrl: 'https://images.unsplash.com/photo-1599690925058-90e1a0b56154?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        type: 'Trade',
        title: 'Card 2',
        content: 'The IDH is your one-stop shop for all the information and resources you need to make informed investment decisions in Ethiopia, keeping you updated with the latest changes and ensuring compliance every step of the way.',
        buttonText: 'Click me',
        imageUrl: 'https://images.unsplash.com/photo-1599690925058-90e1a0b56154?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        type: 'Trade',
        title: 'Card 3',
        content: 'The IDH is your one-stop shop for all the information and resources you need to make informed investment decisions in Ethiopia, keeping you updated with the latest changes and ensuring compliance every step of the way.',
        buttonText: 'Click me',
        imageUrl: 'https://images.unsplash.com/photo-1599690925058-90e1a0b56154?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        type: 'Investment',
        title: 'Card 3',
        content: 'The IDH is your one-stop shop for all the information and resources you need to make informed investment decisions in Ethiopia, keeping you updated with the latest changes and ensuring compliance every step of the way.',
        buttonText: 'Click me',
        imageUrl: 'https://images.unsplash.com/photo-1599690925058-90e1a0b56154?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        type: 'Trade',
        title: 'Card 3',
        content: 'The IDH is your one-stop shop for all the information and resources you need to make informed investment decisions in Ethiopia, keeping you updated with the latest changes and ensuring compliance every step of the way.',
        buttonText: 'Click me',
        imageUrl: 'https://images.unsplash.com/photo-1599690925058-90e1a0b56154?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }

    ]
    return (
        <div className="flex  flex-wrap w-[100%] gap-x-8 gap-y-4 p-4">
          {cardData.map((card, index) => (
            <SideCard key={index} type={card.type} title={card.title} content={card.content}  buttonText={card.buttonText} imageUrl={card.imageUrl}/>
          ))}
        </div>
      );
}

export default Sidecarddata