import "./ExcluirModal.css";

const ExcluirModal = ({ onDelete, onCancel }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Confirmar Exclusão</h2>
        <p>Tem certeza de que deseja excluir este item?</p>
        <div className="modal-actions">
          <button onClick={onDelete}>Excluir</button>
          <button onClick={onCancel}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default ExcluirModal;
