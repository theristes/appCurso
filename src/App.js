import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const Carro = ({cor, hexa, lugares, teste}) => {
   return <div>
        {cor &&  <Typography variant="h3" style={{color:hexa}}> 
        
            Carro é {cor}
            
        </Typography> }

        {lugares && <Typography variant="h6"> Tem {lugares} lugares </Typography> }
        
        {teste && <Button variant="contained" onClick={teste}>Vai</Button> }

    </div>};


const AppBarCurso = () => 
    <AppBar position="static" style={{marginBottom: '10px' }}>
        <Toolbar>
            <IconButton edge="start" style={{color: '#FFF'}}>  
                <Menu/>
             </IconButton>
        </Toolbar> 
    </AppBar>


const App = () =>{

const meuArray = [
    {cor:'Azul', hexa: '#FCFCEE' , lugares: 8 },
     {cor:'vermelho', hexa: '#B66655', lugares: 9 }, 
     {cor:'preto', hexa: '#0000', lugares: 10 }, 
     {cor:'verde',  hexa: '#B666', lugares: 10 }, 
     {cor:'amarelo', lugares: 10 }, 
     {cor:'rosa', lugares: 10 }, 
     {cor:'laranja', lugares: 10 }, 
     {cor:'cinza', hexa: '#CCC', lugares: 10, teste : () => console.log('Passou!') }
  ]    
return (<div>
    <AppBarCurso/>
    {  meuArray.map( (carro, index) => 
       <Carro key={index} {...carro} />
    ) }    
</div>) }


export { App }