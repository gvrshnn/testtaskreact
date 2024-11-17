import { Table, Typography, Space, Skeleton } from 'antd';
import {useGetProductsQuery} from "../../api/fakeStoreApi.js";
import Error from '../error/Error.jsx'
import { useState } from 'react';
import ProductModalWindow from '../ProductModalWindow/ProductModalWindow.jsx';

const { Title } = Typography;

const ProductTable = () => {
    const { 
        data: products, 
        error, 
        isLoading 
    } = useGetProductsQuery(undefined, undefined);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Название',
            dataIndex: 'title',
            key: 'title',
            render: (text, record) => (
                <a onClick={() => {
                    setSelectedProductId(record.id);
                    setIsModalVisible(true);
                }}>
                    {text}
                </a>
            ),
        },
        {
            title: 'Категория',
            dataIndex: 'category', 
            key: 'category',
        },
        {
            title: 'Цена',
            dataIndex: 'price',
            key: 'price',
            render: (price) => `$${price}`,
        },
        {
            title: 'Рейтинг',
            dataIndex: 'rating',
            key: 'rating',
            render: (rating) => `${rating.rate} (${rating.count} отзывов)`,
        },
    ];

    const handleModalClose = () => {
        setIsModalVisible(false);
        setSelectedProductId(null);
    };

    if (isLoading) return <Skeleton active />;
    if (error) return <Error />;

    return (
        <Space direction="vertical" style={{ width: '100%' }}>
            <Title level={3}>Список продуктов</Title>
            <Table
                columns={columns}
                dataSource={products}
                rowKey={(record) => record.id}
                pagination={{ pageSize: 10 }}
            />
            {isModalVisible && 
                <ProductModalWindow 
                    isVisible={isModalVisible} 
                    onClose={handleModalClose} 
                    productId={selectedProductId} 
                />
            }
        </Space>
    );
};

export default ProductTable;
