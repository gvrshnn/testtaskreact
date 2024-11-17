import ProductTable from "../producttable/ProductTable.jsx";
import {Layout} from "antd";

const { Header, Content } = Layout;

const App = () => {
    return (
        <Layout style={{minHeight: '90vh'}}> 
            <Header style={{ color: 'white', fontSize: 20 }}>Fake Store - Таблица продуктов</Header>
            <Content style={{ padding: '20px' }}>
                <ProductTable />
            </Content>
        </Layout>
    )
}

export default App