import { Typography, Space } from 'antd';
import sad from '../../../public/sad_error.svg'

const {Title } = Typography

const Error = () => {
    return (
        <div style={{
            textAlign: 'center',
            minHeight: '90vh',
            alignContent: 'center'
        }}>
            <Space direction='vertical' style={{ width: '100%' }}>
                <Title style={{fontSize: '48px', margin: 30}}>
                    Возникла ошибка <br/> при загрузке данных
                </Title>
                <img src={sad} alt="Sad Error" style={{ maxWidth: '5%', height: 'auto' }} />
            </Space>
        </div>
        
    )
};

export default Error;