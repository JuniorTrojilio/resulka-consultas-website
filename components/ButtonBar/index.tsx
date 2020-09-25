import { Global } from '@emotion/core'
import React, { useState } from 'react'

import { Container, Button } from './styles'

export enum TipeSearch {
    tpNCM = 1,
    tpCFOP = 2,
    tpCEST = 3
  }

export interface Props{
    buttonActive?: TipeSearch;
}

export let currentlySearch : TipeSearch;

const ButtonBar: React.FC<Props> = ({
}) =>{  
    const [tpSearch, setTpSearch] = useState<TipeSearch>(TipeSearch.tpNCM)  
    currentlySearch = tpSearch;
    return(
        <Container buttonActive={tpSearch}>
            <Button onClick={() => setTpSearch(TipeSearch.tpNCM)}>NCM</Button>
            <Button onClick={() => setTpSearch(TipeSearch.tpCFOP)}>CFOP</Button>
            <Button onClick={() => setTpSearch(TipeSearch.tpCEST)}>CEST</Button>    
        </Container>        
    )
}

export default ButtonBar;