import { useState, FormEvent, Component } from 'react'
import publicIp from 'public-ip'

import { 
  Grid, 
  Flex, 
  Text,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon, 
  Box,
  Select,
  Link,
  Divider,
  Alert,
  AlertIcon,
  AlertTitle,
  Spinner
} from '@chakra-ui/core';

import { ButtonBar, BoxButton } from '../components/ButtonBar/styles';
import { SearchBar } from '../components/SearchBar/styles';
import { ButtonSearch } from '../components/ButtonSearch/styles'
import { Container } from '../components/Container/styles'
import Services, { CESTProps, CFOPProps, NCMProps, TAXProps, QueryData } from '../services/services'
import { Form, Label } from '../components/Form/styles';

const services = new Services;

export default function Home() {
  const [wait, setWait] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('')
  const [ncm, setNCM] = useState<NCMProps | null>(null);
  const [cest, setCEST] = useState<CESTProps | null>(null);
  const [cfop, setCFOP] = useState<CFOPProps | null>(null);
  const [estadual, setEstadual] = useState(0);
  const [municipal, setMunicipal] = useState(0);
  const [importado, setImportado] = useState(0);
  const [nacional, setNacional] = useState(0);
  const [ UF, setUF] = useState('');
  const [ value, setValue ] = useState('');  
  const [text, setText] = useState('Serviço gratuito de consulta por código e descrição da Nomenclatura Comum do Mercosul.');
  
  enum TipeSearch {
    tpNCM = 1,
    tpCFOP = 2,
    tpCEST = 3
  }

  const [tpSearch, setTpSearch] = useState<TipeSearch>(TipeSearch.tpNCM)

 

    function handleNCM(){
        setTpSearch(TipeSearch.tpNCM)
        setText('Serviço gratuito de consulta por código e descrição da Nomenclatura Comum do Mercosul.');
        setCEST(null);
        setCFOP(null);
        setError(false);  
        setValue('');       
    }

    function handleCEST(){
        setTpSearch(TipeSearch.tpCEST)
        setText('Serviço gratuito de consulta por código e descrição do Código Especificador da Substiruição Tributária.');
        setNCM(null);
        setCFOP(null); 
        setError(false); 
        setValue('');  
    }

    function handleCFOP(){
        setTpSearch(TipeSearch.tpCFOP)
        setText('Serviço gratuito de consulta por código e descrição do Código Fiscal de Operações e Prestações das entradas e saídas de mercadorias.');
        setNCM(null);
        setCEST(null); 
        setError(false); 
        setValue('');  
    }

  function changeValue(value: string){
      setValue(value)
      setError(false)
  }
  

  async function searchTax(UF:string, code : string): Promise<void>{
    try {
      const responsetax = await services.getTAX(UF, code)
      setEstadual(responsetax.data?.impostos.estadual)
      setMunicipal(responsetax.data?.impostos.municipal)
      setImportado(responsetax.data?.impostos.importadosfederal)
      setNacional(responsetax.data?.impostos.nacionalfederal)
      
    } catch (error) {
      setError(true);
      setErrorMsg(error.message);
    }
  }

  async function startSearch(code: string, event: FormEvent<HTMLFormElement>): Promise<void>{
    event?.preventDefault();
    setWait(true)
     try {            
        if(tpSearch === TipeSearch.tpNCM){
            const responsencm = await services.getNCM(code, 1); 
            setNCM(responsencm);                         

            if(responsencm.totalPages > 1){
                for (let i = 2; i <= responsencm.totalPages; i++) {
                    const newresponsencm = await services.getNCM(code, i)                        
                    const datancm = responsencm.data.concat(newresponsencm.data);
                    const newncm = { ...responsencm, ...datancm }                     
                    setNCM(newncm);                          
                }
            }

            const IP = await publicIp.v4();

            const responseQuery = await services.getLocation(IP);
            const UF = responseQuery.region;

            if(UF){
              setUF(UF)
              searchTax(UF, responsencm.data[0].codigo);
            }else{
              setUF('DF')
              searchTax('DF', responsencm.data[0].codigo); 
            }

            setCEST(null);
            setCFOP(null); 
            setWait(false);           
        }

        if(tpSearch === TipeSearch.tpCEST){
            const responsecest = await services.getCEST(code, 1)
            setCEST(responsecest);
            
            if(responsecest.totalPages > 1){
                for (let i = 2; i <= responsecest.totalPages; i++) {
                    const newresponsecest = await services.getCEST(code, i)                        
                    const datacest = responsecest.data.concat(newresponsecest.data);
                    const newcest = { ...responsecest, ...datacest }                        
                    setCEST(newcest);                
                }
            }
            setNCM(null);
            setCFOP(null); 
            setWait(false);
        }

        if(tpSearch === TipeSearch.tpCFOP){
            const responsecfop = await services.getCFOP(code, 1)
            setCFOP(responsecfop);                
            
            if(responsecfop.totalPages > 1){
                for (let i = 2; i <= responsecfop.totalPages; i++) {
                    const newresponsecfop = await services.getCFOP(code, i)                        
                    const datacfop = responsecfop.data.concat(newresponsecfop.data);
                    const newcfop = { ...responsecfop, ...datacfop }                        
                    setCFOP(newcfop);                
                }
            }
            setNCM(null);
            setCEST(null); 
            setWait(false);
        }
    } catch (error) {
        setError(true);
        setErrorMsg(error.message) ;
        setWait(false);       
    }   
}

  return (
    <Grid 
      backgroundColor="#ECF0F1"
      as="main"
      width="100vw"
      height="100vh"
      templateColumns="auto 100% auto"
      templateRows="250px 100px  auto auto"
      templateAreas="
        '. BT .'
        '. SI .'
        '. RB .'
        'FT FT FT'
      " 
    >
      <Flex gridArea="BT" flexDir="column" justifyContent="center" alignItems="center" backgroundColor="#ECF0F1">
      <BoxButton buttonActive={tpSearch}>
            <ButtonBar onClick={() => handleNCM()}>NCM</ButtonBar>
            <ButtonBar onClick={() => handleCFOP()}>CFOP</ButtonBar>
            <ButtonBar onClick={() => handleCEST()}>CEST</ButtonBar>    
        </BoxButton>    
        <Text
          wordBreak="break-word"
          maxWidth="sm"
          textAlign="center"
          marginTop="50px"
        >{text}</Text>
      </Flex> 
      <Form 
        tabIndex={0}
        onSubmit={(event) => startSearch(value, event)}
        >
        <Container hasError={error}>        
        <SearchBar 
                placeholder="Digite a descrição ou o código" 
                value={value} 
                onChange={e => changeValue(e.target.value)}
                type="text"
                name="Search" 
                id="SearchContent"               
                />        
        <ButtonSearch> Pesquisar</ButtonSearch>
        <Label htmlFor="SearchContent">Digite a descrição ou código</Label>
        </Container>     
      </Form>      
      <Flex gridArea="RB" flexDir="column" justifyContent="center" alignItems="center" backgroundColor="#ECF0F1">
        {error && (
        <Alert 
          display="flex" 
          flexDir="row" 
          status="error" 
          alignSelf="center" 
          width="40vw" 
          minWidth="50vh"                   
          justifyContent="space-between"
          borderRadius="sm"
          >
            <Box display="flex">
            <AlertIcon />
            <AlertTitle mr={2}>{errorMsg}</AlertTitle>
            </Box>            
        </Alert>)}
        {wait && (<Spinner color="red.500" />)}
        <Accordion 
          allowToggle 
          width="90vw" 
          marginTop="50px" 
          backgroundColor="white"
          borderRadius="md"
          maxWidth="770px"        
          > 
          { tpSearch === TipeSearch.tpNCM && ncm?.data.map(item => (
            <AccordionItem padding="5px" outline="none" key={item.id}>
              <AccordionHeader onClick={() => searchTax(UF,item.codigo)}>
                <Box 
                flex="1" 
                textAlign="left"                            
                >
                  <Text>
                    <b>{item.codigo}</b>                    
                  </Text>                  
                  </Box>                  
                <AccordionIcon/>
              </AccordionHeader>
              <AccordionPanel 
                display="flex" 
                flexDir="column">
                <Text
                  maxWidth="60vh"
                >                
                  {item.descricao}
                </Text>
                <Divider />
                  { wait ? (<Spinner color="red.500" alignSelf="center"/>) :                   
                  (
                  <>
                  <Text
                          fontWeight="bold"
                          color="#455a64"
                          alignSelf="center"
                        >Aliquotas</Text>
                  <Flex flexDir="row" justifyContent="space-around" wordBreak="break-word">
                    <Flex 
                      flexDir="column" 
                      alignItems="flex-start" 
                      marginTop="5px">
                      <Text
                        fontWeight="bold"
                        color="#e8685e"
                      >Estado</Text>
                      <Select value={UF} width="75px" onChange={e => searchTax(e.currentTarget.value, item.codigo)}>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MD">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                        <option value="DF">DF</option>
                      </Select>  
                    </Flex>
                    <Flex 
                    flexDir="column"
                    justifyContent="space-betwenn"
                    alignItems="center"                    
                    >
                      <Flex 
                      flexDir="column"
                      justifyContent="space-betwenn"
                      alignItems="center"
                      >
                        <Text
                              fontWeight="bold"
                              color="#e8685e"
                            >Nacional</Text>
                          <Text>
                            {nacional}%
                          </Text>
                      </Flex>
                      <Flex
                      flexDir="column"
                      justifyContent="space-betwenn"
                      alignItems="center"
                      >
                        <Text
                              fontWeight="bold"
                              color="#e8685e"                            
                            >Importado</Text>
                          <Text>
                            {importado}%
                          </Text>
                      </Flex>
                    </Flex> 

                    <Flex 
                    flexDir="column"
                    justifyContent="space-betwenn"
                    alignItems="center"
                    >
                    <Flex
                    flexDir="column"
                    justifyContent="space-betwenn"
                    alignItems="center"
                    >
                      <Text
                            fontWeight="bold"
                            color="#e8685e"
                          >Estadual</Text>
                          <Text>
                            {estadual}%
                          </Text>
                    </Flex>
                    <Flex
                    flexDir="column"
                    justifyContent="space-betwenn"
                    alignItems="center"
                    >
                      <Text
                            fontWeight="bold"
                            color="#e8685e"
                          >Municipal</Text>
                          <Text>
                            {municipal}%
                          </Text>
                    </Flex>  
                    </Flex> 
                  </Flex>
                  </>)}           
              </AccordionPanel>
          </AccordionItem>
          ))}

          { tpSearch === TipeSearch.tpCEST && cest?.data.map(item => (
            <AccordionItem padding="5px" outline="none" key={item.id}>
              <AccordionHeader onClick={() => searchTax(UF,item.codigo)}>
                <Box 
                flex="1" 
                textAlign="left"                            
                >
                  <Text>
                    <b>{item.cest}</b>                    
                  </Text>                  
                  </Box>                  
                <AccordionIcon/>
              </AccordionHeader>
              <AccordionPanel 
                display="flex" 
                flexDir="column"
                maxWidth="75vh"> 
              <Divider/>    
              <Text>
              <b>Descrição CEST: </b>{item.descricao_cest}
              </Text>
              
              <Text>              
              <b>NCM: </b>{item.codigo}
              </Text>      

              <Text>              
              <b>Descrição: </b>{item.descricao}
              </Text>  

              <Text>              
              <b>Segmento: </b>{item.segmento}
              </Text>   
              <Text>              
              <b>Versão: </b>{item.versao}
              </Text>         
              </AccordionPanel>
          </AccordionItem>
          ))}

        {tpSearch === TipeSearch.tpCFOP && cfop?.data.map(item => (
            <AccordionItem padding="5px" outline="none" key={item.id}>
              <AccordionHeader onClick={() => searchTax(UF,item.codigo)}>
                <Box 
                flex="1" 
                textAlign="left"                            
                >
                  <Text>
                    <b>{item.codigo}</b>                    
                  </Text>                  
                  </Box>                  
                <AccordionIcon/>
              </AccordionHeader>
              <AccordionPanel 
                display="flex" 
                flexDir="column"
                maxWidth="75vh"> 
              <Divider/>    
              <Text>
              <b>Aplicação: </b>{item.aplicacao}
              </Text>
              
              <Text>
              <b>Categoria: </b>{item.categoria}
              </Text>      

              <Text>
              <b>Descrição: </b>{item.descricao}
              </Text>   

              <Text>              
              <b>Tipo: </b>{item.tipo}
              </Text>           
              </AccordionPanel>
          </AccordionItem>
          ))}
        </Accordion>        
      </Flex>
      <Flex 
        gridArea="FT" 
        flexDir="column" 
        justifyContent="center" 
        alignItems="center" 
        backgroundColor="#ECF0F1"
        >
      <Link 
        href="https://www.treeunfe.com.br/" 
        alt="Treeunfe Tecnologia"
        textDecor="none"
        >Treeunfe Tecnologia </Link>
      </Flex>
    </Grid>
      
  )
}
