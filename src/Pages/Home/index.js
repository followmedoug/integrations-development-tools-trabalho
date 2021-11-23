import React from 'react';
import ContainerMain from '../../Components/ContainerMain'
import Table from '../../Components/Table';
import TableHeader from '../../Components/TableHeader';
import TableLine from '../../Components/TableLine';
import { TableValue } from '../../Components/TableValue';
import Title from '../../Components/Title'
import WrapperFlex from '../../Components/WrapperFlex';

export default function Home() {
    return <ContainerMain>
        <Title>Home</Title>
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