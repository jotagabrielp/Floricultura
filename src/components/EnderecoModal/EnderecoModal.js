const EnderecoModal = ({ endereco, handleCancel }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Endereço</h2>
        <p>CEP: {endereco.CEP}</p>
        <p>Logradouro: {endereco.logradouro}</p>
        <p>Numero: {endereco.numero}</p>
        <p>Complemento: {endereco.complemento || "N/A"}</p>
        <div className="modal-actions">
          <button onClick={handleCancel}>Fechar</button>
        </div>
      </div>
    </div>
  );
};

export default EnderecoModal;
