import { Modal, Spin } from 'antd';
import { useGetProductQuery } from '../../api/fakeStoreApi';

const ProductModalWindow = ({ productId, isVisible, onClose }) => {
  const { data: product, error, isLoading } = useGetProductQuery(productId);

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal open={isVisible} onCancel={handleCancel} footer={null} >
      {isLoading ? <Spin/> : error ? <p>Ошибка загрузки данных</p> : (
        <>
        <br/>
          <strong>{product.title}</strong>
          <img src={product.image} alt={product.title} style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}/>
          <p>Price: ${product.price}</p>
          <p>{product.description}</p>
        </>
      )}
    </Modal>
  );
};

export default ProductModalWindow;