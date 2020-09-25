import { useState } from 'react'

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
  FormControl,
  Link,
  Divider,
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton
} from '@chakra-ui/core';

import ButtonBar, { currentlySearch, TipeSearch } from '../components/ButtonBar';
import { SearchBar } from '../components/SearchBar/styles';
import { ButtonSearch } from '../components/ButtonSearch/styles'
import { Container } from '../components/Container/styles'
import Services, { CESTProps, CFOPProps, NCMProps, TAXProps } from '../services/services'

const services = new Services;

export default function Home() {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('')
  const [ncm, setNCM] = useState<NCMProps | null>(null);
  const [cest, setCEST] = useState<CESTProps | null>(null);
  const [cfop, setCFOP] = useState<CFOPProps | null>(null);
  const [estadual, setEstadual] = useState(0);
  const [municipal, setMunicipal] = useState(0);
  const [importado, setImportado] = useState(0);
  const [nacional, setNacional] = useState(0);
  const [ UF, setUF] = useState('DF');

  const [ value, setValue ] = useState('');

  function changeValue(value: string){
      setCEST(null)
      setCFOP(null)
      setNCM(null)
      setValue(value)
      setError(false)
  }

  async function searchTax(UF:string, code : string): Promise<void>{
    try {
      const responsetax = await services.getTAX(UF, code)
      setEstadual(responsetax.data.impostos.estadual)
      setMunicipal(responsetax.data.impostos.municipal)
      setImportado(responsetax.data.impostos.importadosfederal)
      setNacional(responsetax.data.impostos.nacionalfederal)
      
    } catch (error) {
      
    }
  }

  async function startSearch(code: string): Promise<void>{
    try {            
        if(currentlySearch === TipeSearch.tpNCM){
            const responsencm = await services.getNCM(code, 1); 
            setNCM(responsencm); 

                        

            if(responsencm.totalPages > 1){
                for (let i = 2; i <= responsencm.totalPages; i++) {
                    const newresponsencm = await services.getNCM(code, i)                        
                    const datancm = responsencm.data.concat(newresponsencm.data);
                    const newncm = { ...responsencm, ...datancm }
                    searchTax('DF', newncm.data[0].codigo)  
                    setNCM(newncm);                          
                }
            }
            setCEST(null);
            setCFOP(null);            
        }

        if(currentlySearch === TipeSearch.tpCEST){
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
        }

        if(currentlySearch === TipeSearch.tpCFOP){
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
        }
    } catch (error) {
        setError(true)
        setErrorMsg(error.message)
        
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
        <ButtonBar />
        <Text
          wordBreak="break-word"
          maxWidth="sm"
          textAlign="center"
          marginTop="50px"
        >{`Serviço gratuito de consulta por código e descrição
        da Nomenclatura Comum do Mercosul`}</Text>
      </Flex> 
      <FormControl 
        display="flex" 
        gridArea="SI" 
        justifyContent="center" 
        alignItems="center"
        >
        <Container hasError={error}>
        <SearchBar 
                placeholder="Digite a descrição ou o código" 
                value={value} 
                onChange={e => changeValue(e.target.value)}/>
        <ButtonSearch onClick={() => startSearch(value)}>Pesquisar</ButtonSearch>
        </Container>        
      </FormControl>      
      <Flex gridArea="RB" flexDir="column" justifyContent="center" alignItems="center" backgroundColor="#ECF0F1">
        {error && (
        <Alert 
          display="flex" 
          flexDir="row" 
          status="error" 
          alignSelf="center" 
          width="40vw" 
          justifyContent="space-between"
          borderRadius="sm"
          >
            <Box display="flex">
            <AlertIcon />
            <AlertTitle mr={2}>{errorMsg}</AlertTitle>
            </Box>            
            <CloseButton  right="8px" top="8px" />
        </Alert>)}
        <Accordion 
          allowToggle 
          width="90vw" 
          marginTop="50px" 
          backgroundColor="white"
          borderRadius="md"
          maxWidth="770px"        
          > 
          { currentlySearch === TipeSearch.tpNCM && ncm?.data.map(item => (
            <AccordionItem padding="5px" outline="none">
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
                      <Select value={'DF'} width="75px" onChange={e => searchTax(e.currentTarget.value, item.codigo)}>
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
              </AccordionPanel>
          </AccordionItem>
          ))}

          { currentlySearch === TipeSearch.tpCEST && cest?.data.map(item => (
            <AccordionItem padding="5px" outline="none">
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

        {currentlySearch === TipeSearch.tpCFOP && cfop?.data.map(item => (
            <AccordionItem padding="5px" outline="none">
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
