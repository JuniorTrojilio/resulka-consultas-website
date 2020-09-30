import apiNCM from '../api/api.NCM'
import apiCEST from '../api/api.CEST'
import apiCFOP from '../api/api.CFOP'
import apiTAX from '../api/api.TAX'
import apiQuery from '../api/api.LOCATION';

export interface NCMProps {
    data: [
      {
        id: string;
        codigo: string;
        descricao: string;
        fonte: string;
        versão: string;
      }
    ],
    totalPages: number;
  }

  export interface CESTProps {
    data: [
      {
        id: string;
        codigo: string;
        descricao: string;
        versao: string;
        fonte: string;
        cest: string;
        segmento: string;
        descricao_cest: string;
      }
    ],
    totalPages: number;
  }
  
  export interface CFOPProps {
    data: [
      {
        id: string;
        codigo: string;
        aplicacao: string;
        categoria: string;
        codigo_categoria: string;
        codigo_tipo: string;
        descricao: string;
        tipo: string;
      }
    ],
    totalPages: number;
  }
  
  export interface TAXProps {
    data: 
      {
        id: string;
        state: string;
        fonte: string;
        impostos: {
          nacionalfederal: number;
          importadosfederal: number;
          estadual: number;
          municipal: number;
        }
        ncm: {
          codigo: string;
          descricao: string;
          fonte: string;
          versao: string;
          id: string;
        }
      }
  }

  export interface QueryData{    
      query: string;
      status: string;
      country: string;
      region: string;
      regionName: string;
      city: string;
      zip: string;
      lat: number;
      lon: number;
      timezone: string;    
  }

  class Services {
    public async getNCM(code: string, page: number){
    
        if(!code){
            throw new Error('Busca não pode ser vazia!');
        }
    
        const response = await apiNCM.get<NCMProps>(`?page=${page}&q=${code}`);
    
        if(response.status !== 200){
            throw new Error('Falha ao realizar a busca, API indisponível!');   
        }

        if(response.data.data.length <= 0){
          throw new Error('NCM não encontrado');
        }
    
        return response.data;
      }
      
      public async getCEST(code: string, page: number){
    
        if(!code){
            throw new Error('Busca não pode ser vazia!');
        }
    
        const response = await apiCEST.get<CESTProps>(`?page=${page}&q=${code}`);
    
        if(response.status !== 200){
            throw new Error('Falha ao realizar a busca, API indisponível!');   
        }

        if(response.data.data.length <= 0){
          throw new Error('CEST não encontrado');
        }
    
        return response.data;
      }

      public async getCFOP(code: string, page: number){
    
        if(!code){
            throw new Error('Busca não pode ser vazia!');
        }
    
        const response = await apiCFOP.get<CFOPProps>(`?page=${page}&q=${code}`);
    
        if(response.status !== 200){
            throw new Error('Falha ao realizar a busca, API indisponível!');   
        }

        if(response.data.data.length <= 0){
          throw new Error('CFOP não encontrado');
        }
    
        return response.data;
      }

      public async getTAX(UF: String,code: string): Promise<TAXProps>{
    
        if(!code){
            throw new Error('Busca não pode ser vazia!');
        }
    
        const response = await apiTAX.get<TAXProps>(`${UF}/${code}`);
    
        if(response.status !== 200){
            throw new Error('Falha ao realizar a busca, API indisponível!');   
        }
    
        return response.data;
      }

      public async getLocation(IP: String): Promise<QueryData>{
        const response = await apiQuery.get<QueryData>(`${IP}?fields=status,message,country,region,regionName,city,zip,lat,lon,timezone,query`); 
        
        if(response.status !== 200){
          throw new Error()
        }

        return response.data
      }
  }

  export default Services;

  