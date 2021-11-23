import React from 'react';
import {useNavigate} from 'react-router-dom'
import ContainerMain from '../../Components/ContainerMain'
import Table from '../../Components/Table';
import TableHeader from '../../Components/TableHeader';
import TableLine from '../../Components/TableLine';
import { TableValue } from '../../Components/TableValue';
import Title from '../../Components/Title'
import WrapperFlex from '../../Components/WrapperFlex';
import Button from '../../Components/Button'

export default function Home() {
    const navigate = useNavigate()

    return <ContainerMain>
        <WrapperFlex style={{  maxWidth: '1024px', width: '100%', justifyContent: 'space-between', margin: "20px 0"}}>
            <Button style={{ padding: '10px', width: '200px'}} onClick={() => navigate('/create-drone')}>Cadastrar Drone</Button>
            <Button style={{ padding: '10px', width: '200px'}} onClick={() => navigate('/create-metrica')}>Cadastrar Métrica</Button>
        </WrapperFlex>
        <WrapperFlex style={{ width: '100%', justifyContent: 'center'}}>
            <WrapperFlex style={{ maxWidth: '1024px', width: '100%'}}>
                <Table>
                    <tr>
                        <TableHeader>Column 1</TableHeader>
                        <TableHeader>Column 2</TableHeader>
                        <TableHeader>Column 3</TableHeader>
                    </tr>
                    <TableLine>
                        <TableValue>Valor1</TableValue>
                        <TableValue>Valor2</TableValue>
                        <TableValue>Valor3</TableValue>
                    </TableLine>
                    <TableLine>
                        <TableValue>Valor1</TableValue>
                        <TableValue>Valor2</TableValue>
                        <TableValue>Valor3</TableValue>
                    </TableLine>
                </Table>
            </WrapperFlex>
        </WrapperFlex>
    </ContainerMain> 
}