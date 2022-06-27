import React from 'react'

export default function CreditComponent() {
  
    return (
        <div className='container bg-danger text-warning my-5'>
            <h1 className='text-center'>Credits</h1>
            <ul>
                <li>
                    <p className='d-flex justify-content-center'>
                        <img src='https://images.unsplash.com/photo-1628968434441-d9c1c66dcde7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='bg' height={'250px'} width={'250px'}/>
                    </p>
                    <p className='d-flex justify-content-center'>Photo by Mick Haupt on Unsplash</p>
                    <p className='d-flex justify-content-center'>
                        Click <a className='text-white' href='https://unsplash.com/s/photos/pokemon-cards?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Here</a> to view
                    </p>
                </li>
                <li>
                    <p className='d-flex justify-content-center'>
                        <img src='https://images.unsplash.com/photo-1525946746634-e3347053faa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='bg' height={'250px'} width={'250px'}/>
                    </p>
                    <p className='d-flex justify-content-center'>Photo by Mockup Photos on Unsplash</p>
                    <p className='d-flex justify-content-center'>
                        Click <a  className='text-white' href='https://unsplash.com/photos/_2_I561JOM8?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'>Here</a> to view
                    </p>
                </li>
                <li className='d-flex justify-content-center'>
                    <p className='d-flex justify-content-center'>
                        Pokémon stats referenced from Pokémon GO Info Website, since I don't know much about pokémon.
                        Click <a className='text-white' href='https://pokemon.gameinfo.io/en/pokemon/list/best-pokemon-by-cp'>here</a> to visit the page.
                    </p>
                </li>
            </ul>
        </div>
    )
}