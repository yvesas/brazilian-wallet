import React from 'react';

     const Head = () => {
       return (
         <header className="flex justify-between items-center p-4 shadow-md bg-white">
           <h1 className="text-xl font-bold">Brazilian Wallet</h1>
           <nav>
             <button className="btn btn-primary m-2">Criar Investimento</button>
             <button className="btn btn-secondary m-2">Histórico</button>
             <button className="btn btn-accent m-2">Dashboard</button>
           </nav>
         </header>
       );
     };

     export default Head;
