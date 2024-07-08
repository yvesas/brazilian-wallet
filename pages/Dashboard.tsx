import { Stock } from '@/modals/stock';
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [investments, setInvestments] = useState<[Stock]|null>(null);

  useEffect(() => {
    fetch('/api/stocks')
      .then(response => response.json())
      .then(data => setInvestments(data));
  }, []);

  if(!investments){
    return (
      <div>Não há investimentos</div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {investments?.map(investment => (
        <div key={investment.id} className="card shadow-lg p-4">
          <h3 className="text-xl font-bold">{investment.name}</h3>
          <p>Proprietário: {investment.owner}</p>
          <p>Valor Inicial: {investment.initialValue}</p>
          <p>Saldo Atual: {/* Cálculo do saldo atual */}</p>
          <button className="btn btn-accent m-2">Aporte</button>
          <button className="btn btn-error m-2">Resgate</button>
        </div>
      ))}

    </div>
  );
};

export default Dashboard;
