import React, { useState } from 'react';

interface modalProps {
  isOpen:any, 
  onClose:any
}
const InvestmentModal = ({ isOpen, onClose }:modalProps) => {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [initialValue, setInitialValue] = useState(0);
  const [creationDate, setCreationDate] = useState(new Date());

  const handleSubmit = () => {
    // FIXME: Validações e envio de dados para a API
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-box">
        <h2 className="font-bold text-lg">Criar Investimento</h2>
        <form>
          <input type="text" placeholder="Nome do Ativo" className="input input-bordered w-full m-2" value={name} onChange={e => setName(e.target.value)} />
          <input type="text" placeholder="Nome do Proprietário" className="input input-bordered w-full m-2" value={owner} onChange={e => setOwner(e.target.value)} />
          <input type="number" placeholder="Valor Inicial" className="input input-bordered w-full m-2" value={initialValue} onChange={e => setInitialValue(parseFloat(e.target.value))} />
          <input type="date" className="input input-bordered w-full m-2" value={creationDate.toISOString().split('T')[0]} onChange={e => setCreationDate(new Date(e.target.value))} />
        </form>
        <div className="modal-action">
          <button className="btn btn-primary" onClick={handleSubmit}>Criar</button>
          <button className="btn" onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default InvestmentModal;
